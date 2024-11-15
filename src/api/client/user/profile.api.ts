'use client'

import { createClient } from '@/utils/supabase/client'
import logger from '@/lib/logger'
import { UserProfile } from '@/lib/application.types'

export const UserProfilesApi = () => {
  const supabase = createClient()

  const getUserProfile = async (): Promise<UserProfile | null> => {
    const { data: { session }, error: sessionError } = await supabase.auth.getSession()

    if (sessionError) {
      logger.error('Error fetching session:', sessionError)
      return null
    }

    const id = session?.user.id

    if (!id) {
      logger.error('No user session found.')
      return null
    }

    const { data, error } = await supabase.from('adk_user_profiles').select('*').eq('id', id).single()

    if (error) {
      logger.error('Error fetching user profile:', error)
      return null
    }
    
    return data
  }

  return {
    getUserProfile,
  }
}
