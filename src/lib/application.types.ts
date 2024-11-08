import { Database } from '@/lib/database.types'

export type UserProfile = Database['public']['Tables']['user_profiles']['Row']
export type Adventure = Database['public']['Tables']['adventures_wod']['Row']
