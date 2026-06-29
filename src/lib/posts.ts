import { supabase } from './supabase'

export type Post = {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  read_time: number
  category: string
  tags: string[]
  created_at: string
}

export async function getAllPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('date', { ascending: false })

  if (error) throw new Error(error.message)
  return data ?? []
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) return null
  return data
}

export async function getAllSlugs(): Promise<string[]> {
  const { data, error } = await supabase
    .from('posts')
    .select('slug')

  if (error) return []
  return (data ?? []).map((p) => p.slug)
}

export async function getRelatedPosts(currentSlug: string, tags: string[]): Promise<Post[]> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .neq('slug', currentSlug)
    .overlaps('tags', tags)
    .limit(2)

  if (error) return []
  return data ?? []
}
