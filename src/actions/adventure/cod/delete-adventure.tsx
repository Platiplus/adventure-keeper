'use server'

import { actionClient, ActionError } from '@/lib/safe-action'
import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const schema = z.object({
  id: z.number().int().positive().optional(),
})

export const deleteCodAdventure = actionClient.schema(schema).action(async ({ parsedInput }) => {
  const supabase = await createClient()
  const user = await supabase.auth.getUser()

  if (!user?.data?.user?.id) throw new ActionError('You need to be logged in to delete an adventure', user?.error?.message)

  if (!parsedInput.id) throw new ActionError('You need to provide an id to delete an adventure')

  const { error } = await supabase
    .from('cod_adventures')
    .delete()
    .eq('id', parsedInput.id)

  if (error) {
    throw new ActionError('Something unexpected happened while deleting your adventure', error.message)
  }

  revalidatePath('/cod/dashboard')
  revalidatePath('/cod/adventures')
  revalidatePath('/cod/adventures/[slug]', 'page')
})