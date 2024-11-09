'use server'

import { Adventure } from '@/lib/application.types'
import { createClient } from '@/utils/supabase/server'

export const AdventuresWodApi = async () => {
  const client = await createClient()

  const getById = async (id: string): Promise<Adventure | null> => {
    const adventure_wod = await client.from('adventures_wod').select('*').eq('id', id).single()

    return adventure_wod.data ?? null
  }

  const getBySlug = async (slug: string): Promise<Adventure | null> => {
    const adventure_wod = await client.from('adventures_wod').select('*').eq('slug', slug).single()

    return adventure_wod.data ?? null
  }

  const listAll = async (): Promise<Adventure[]> => {
    const adventures_wod = await client.from('adventures_wod').select('*')

    return adventures_wod.data ?? []
  }

  const listAllWithFilters = async (filters: Partial<Adventure>): Promise<Adventure[]> => {
    const adventures_wod = await client.from('adventures_wod').select('*').eq('filters', filters)

    return adventures_wod.data ?? []
  }

  return {
    getById,
    getBySlug,
    listAll,
    listAllWithFilters,
  }
}
