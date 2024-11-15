'use server'

import { UserProfile } from '@/lib/application.types'
import { createClient } from '@/utils/supabase/server'

export const UserProfilesApi = async () => {
  const client = await createClient()

  const getById = async (id: string): Promise<UserProfile | null> => {
    const tag = await client.from('adk_user_profiles').select('*').eq('id', id).single()

    return tag.data ?? null
  }

  const listAll = async (): Promise<UserProfile[]> => {
    const profiles = await client.from('adk_user_profiles').select('*')

    return profiles.data ?? []
  }

  const listAllWithFilters = async (filters: Partial<UserProfile>): Promise<UserProfile[]> => {
    const profiles = await client.from('adk_user_profiles').select('*').eq('filters', filters)

    return profiles.data ?? []
  }

  return {
    getById,
    listAll,
    listAllWithFilters,
  }
}
