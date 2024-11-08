'use server'

import * as crypto from "node:crypto";
import { actionClient, ActionError } from '@/lib/safe-action'
import { createClient } from '@/utils/supabase/server'
import { z } from 'zod'
import { revalidatePath } from "next/cache";

const schema = z.object({
  name: z.string().min(2),
  short_description: z.string().max(500),
  image: z.instanceof(File).optional(),
  looking_for_players: z.boolean().default(false),
  is_active: z.boolean().default(false),
  slug: z.string(),
})

export const createWodAdventure = actionClient.schema(schema).action(async ({ parsedInput }) => {
  const supabase = await createClient()
  const user = await supabase.auth.getUser()
  const id = crypto.randomBytes(3).toString('hex');

  if (!user?.data?.user?.id) throw new ActionError('You need to be logged in to create an adventure', user?.error?.message)

  const input = {
    name: parsedInput.name,
    short_description: parsedInput.short_description,
    looking_for_players: parsedInput.looking_for_players,
    is_active: parsedInput.is_active,
    slug: `${parsedInput.slug}-${id}`,
    image_url: `https://placehold.co/600x400/EEE/31343C/png?font=montserrat&text=${parsedInput.name.replace(/ /g, '+')}`,
    dg_master_id: user.data.user.id,
  }

  const { error } = await supabase.from('adventures_wod').insert(input)

  if (error) {
    throw new ActionError('Something unexpected happened while creating your adventure', error.message)
  }

  revalidatePath('/wod/dashboard')
  revalidatePath('/wod/adventures')
})
