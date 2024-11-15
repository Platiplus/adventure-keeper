'use server'

import { CodAdventure } from '@/lib/application.types'
import { createClient } from '@/utils/supabase/server'

export const AdventuresCodApi = async () => {
  const client = await createClient()

  const getById = async (id: string): Promise<CodAdventure | null> => {
    const adventure_cod = await client.from('cod_adventures').select('*').eq('id', id).single()

    return adventure_cod.data ?? null
  }

  const getBySlug = async (slug: string): Promise<CodAdventure | null> => {
    const adventure_cod = await client.from('cod_adventures').select('*').eq('slug', slug).single()

    return adventure_cod.data ?? null
  }

  const listAll = async (): Promise<CodAdventure[]> => {
    const cod_adventures = await client.from('cod_adventures').select('*')

    return cod_adventures.data ?? []
  }

  const listAllWithFilters = async (filters: Partial<CodAdventure>): Promise<CodAdventure[]> => {
    const cod_adventures = await client.from('cod_adventures').select('*').eq('filters', filters)

    return cod_adventures.data ?? []
  }

  return {
    getById,
    getBySlug,
    listAll,
    listAllWithFilters,
  }
}
