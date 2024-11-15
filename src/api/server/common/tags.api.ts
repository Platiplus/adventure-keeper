'use server'

import { Tag } from '@/lib/application.types'
import { createClient } from '@/utils/supabase/server'

export const TagsApi = async () => {
  const client = await createClient()

  const getById = async (id: string): Promise<Tag | null> => {
    const tag = await client.from('adk_tags').select('*').eq('id', id).single()

    return tag.data ?? null
  }

  const getBySlug = async (slug: string): Promise<Tag | null> => {
    const tag = await client.from('adk_tags').select('*').eq('slug', slug).single()

    return tag.data ?? null
  }

  const listAll = async (): Promise<Tag[]> => {
    const tags = await client.from('adk_tags').select('*')

    return tags.data ?? []
  }

  const listBySlug = async (slugs: string[]): Promise<Tag[]> => {
    const tags = await client.from('adk_tags').select('*').in('slug', slugs)

    return tags.data ?? []
  }

  const listAllWithFilters = async (filters: Partial<Tag>): Promise<Tag[]> => {
    const tags = await client.from('adk_tags').select('*').eq('filters', filters)

    return tags.data ?? []
  }

  return {
    getById,
    getBySlug,
    listAll,
    listBySlug,
    listAllWithFilters,
  }
}
