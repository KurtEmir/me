'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import type { Post } from '@/lib/posts'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

const CATEGORY_COLORS: Record<string, string> = {
  Backend: 'text-text-blue border-blue-subtle bg-blue-muted',
  Frontend: 'text-[#86efac] border-[#166534] bg-[#1a2a1a]',
  DevOps: 'text-[#d8b4fe] border-[#6b21a8] bg-[#2a1a2a]',
  Veritabanı: 'text-[#fcd34d] border-[#92400e] bg-[#2a1f0a]',
}

export default function BlogPreview({ posts }: { posts: Post[] }) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const recent = posts.slice(0, 3)

  return (
    <section id="blog" ref={ref} className="section-enter py-24 px-6 max-w-5xl mx-auto">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="font-mono text-blue-accent text-sm mb-2">// 06</p>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-text-primary">Blog</h2>
          <p className="text-text-muted text-sm mt-2">Son yazılar</p>
        </div>
        <Link
          href="/blog"
          className="hidden sm:flex items-center gap-2 font-mono text-sm text-text-muted hover:text-blue-accent transition-colors border border-border-DEFAULT hover:border-blue-accent px-4 py-2 rounded-lg"
        >
          Tümü <ArrowRight size={14} />
        </Link>
      </div>

      <div className="space-y-4">
        {recent.map((post, i) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <article className="bg-bg-card border border-border-DEFAULT rounded-xl p-5 hover:border-blue-accent transition-all duration-300 hover:shadow-lg hover:shadow-blue-accent/10 group flex items-start gap-5">
              <span className="font-mono text-2xl font-bold text-border-DEFAULT group-hover:text-blue-accent/30 transition-colors hidden sm:block flex-shrink-0 w-8 text-right">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="flex-grow min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${
                      CATEGORY_COLORS[post.category] ?? CATEGORY_COLORS.Backend
                    }`}
                  >
                    {post.category}
                  </span>
                  <span className="font-mono text-xs text-text-muted flex items-center gap-1">
                    <Clock size={11} /> {post.read_time} dk
                  </span>
                </div>
                <h3 className="font-mono text-base font-semibold text-text-primary group-hover:text-blue-accent transition-colors mb-1 truncate">
                  {post.title}
                </h3>
                <p className="text-text-muted text-sm line-clamp-1">{post.excerpt}</p>
              </div>

              <div className="flex-shrink-0 flex flex-col items-end gap-2">
                <span className="font-mono text-xs text-text-muted whitespace-nowrap">
                  {formatDate(post.date)}
                </span>
                <ArrowRight
                  size={15}
                  className="text-text-muted group-hover:text-blue-accent group-hover:translate-x-0.5 transition-all"
                />
              </div>
            </article>
          </Link>
        ))}
      </div>

      <div className="mt-6 sm:hidden text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-sm text-text-muted hover:text-blue-accent border border-border-DEFAULT hover:border-blue-accent px-5 py-2.5 rounded-lg transition-all"
        >
          Tüm yazılar <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  )
}
