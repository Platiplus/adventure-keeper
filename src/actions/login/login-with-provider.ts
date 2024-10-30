'use server'

import { actionClient, ActionError } from '@/lib/safe-action'
import { createClient } from '@/utils/supabase/server'
import { Provider } from '@supabase/supabase-js'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const schema = z.object({
  provider_id: z.string().min(1)
})

export const loginWithProvider = actionClient.schema(schema).action(async ({ parsedInput }) => {
  const supabase = await createClient()
  const origin = (await headers()).get('origin')

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: parsedInput.provider_id as Provider,
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  })

  if (data.url) {
    redirect(data.url)
  }

  if (error) {
    throw new ActionError('We were unable to log you in right now. Please try again later.')
  }
})
