import { Database } from '@/lib/database.types'

export type UserProfile = Database['public']['Tables']['adk_user_profiles']['Row']
export type CodAdventure = Database['public']['Tables']['cod_adventures']['Row']
export type CodMerit = Database['public']['Tables']['cod_merits']['Row']
export type CodCondition = Database['public']['Tables']['cod_conditions']['Row']
export type Tag = Database['public']['Tables']['adk_tags']['Row']
