'use server'

import { actionClient } from '@/lib/safe-action'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export const logout = actionClient.action(async () => {
  const supabase = await createClient()
  await supabase.auth.signOut()

  return redirect('/')
})
