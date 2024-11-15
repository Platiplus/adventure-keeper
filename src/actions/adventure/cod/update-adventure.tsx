'use server'

import { actionClient, ActionError } from '@/lib/safe-action'
import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const schema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(2),
  short_description: z.string().max(500),
  long_description: z.string().optional(),
  image: z.instanceof(File).optional(),
  looking_for_players: z.boolean().default(false),
  is_active: z.boolean().default(false),
  slug: z.string(),
  image_url: z.string().optional(),
  max_players: z.number().int().positive(),
  session_duration: z.number().int().positive(),
  tags: z.array(z.string()).optional(),
})

export const updateCodAdventure = actionClient.schema(schema).action(async ({ parsedInput }) => {
  const supabase = await createClient()
  const user = await supabase.auth.getUser()

  if (!user?.data?.user?.id) throw new ActionError('You need to be logged in to update an adventure', user?.error?.message)

  let imageUrl = parsedInput.image_url
  
  if (parsedInput.image) {
    const { slug, image } = parsedInput
    const type = image.type.split('/')[1]
    const fileName = `${slug}-cover.${type}`
    const { data } = await supabase.storage.from(process.env.STORAGE_BUCKET!).upload(`adventure_covers/${fileName}`, image, {
      upsert: true
    })

    if (data?.fullPath) imageUrl = `${process.env.STORAGE_ENDPOINT}/object/public/${data.fullPath}`
  }

  const input = {
    name: parsedInput.name,
    short_description: parsedInput.short_description,
    long_description: parsedInput.long_description,
    looking_for_players: parsedInput.looking_for_players,
    is_active: parsedInput.is_active,
    slug: parsedInput.slug,
    image_url: imageUrl,
    max_players: parsedInput.max_players,
    session_duration: parsedInput.session_duration,
    tags: parsedInput.tags,
  }

  const { error } = await supabase
    .from('cod_adventures')
    .update(input)
    .eq('id', parsedInput.id)

  if (error) {
    throw new ActionError('Something unexpected happened while updating your adventure', error.message)
  }

  revalidatePath('/cod/dashboard')
  revalidatePath('/cod/adventures')
  revalidatePath('/cod/adventures/[slug]', 'page')
})