import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react'
import { marked } from 'marked'
import { getPostBySlug, getAllSlugs, POSTS } from '../../data/posts'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const CATEGORY_COLORS: Record<string, string> = {
  Backend: 'bg-blue-muted text-text-blue border-blue-subtle',
  Frontend: 'bg-[#1a2a1a] text-[#86efac] border-[#166534]',
  DevOps: 'bg-[#2a1a2a] text-[#d8b4fe] border-[#6b21a8]',
  Veritabanı: 'bg-[#2a1f0a] text-[#fcd34d] border-[#92400e]',
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const htmlContent = marked(post.content) as string

  const related = POSTS.filter(
    (p) => p.slug !== post.slug && p.tags.some((t) => post.tags.includes(t))
  ).slice(0, 2)

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-text-muted hover:text-blue-accent transition-colors font-mono text-sm mb-10"
          >
            <ArrowLeft size={14} />
            Blog&apos;a dön
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className={`font-mono text-[11px] px-2.5 py-1 rounded-full border ${
                CATEGORY_COLORS[post.category] ?? CATEGORY_COLORS.Backend
              }`}
            >
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-text-muted font-mono">
              <Calendar size={12} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-text-muted font-mono">
              <Clock size={12} />
              {post.readTime} dk okuma
            </span>
          </div>

          {/* Title */}
          <h1 className="font-mono text-3xl sm:text-4xl font-bold text-text-primary leading-tight mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-text-muted text-base leading-relaxed mb-8 pb-8 border-b border-border-DEFAULT">
            {post.excerpt}
          </p>

          {/* Content */}
          <div
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Tags */}
          <div className="mt-10 pt-8 border-t border-border-DEFAULT">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag size={13} className="text-text-muted" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1.5 rounded-lg bg-blue-muted text-text-blue border border-blue-subtle"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div className="mt-12">
              <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-5">
                İlgili Yazılar
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`}>
                    <div className="bg-bg-card border border-border-DEFAULT rounded-xl p-5 hover:border-blue-accent transition-all duration-200 group">
                      <span
                        className={`font-mono text-[10px] px-2 py-0.5 rounded-full border mb-2 inline-block ${
                          CATEGORY_COLORS[r.category] ?? CATEGORY_COLORS.Backend
                        }`}
                      >
                        {r.category}
                      </span>
                      <h3 className="font-mono text-sm font-semibold text-text-primary group-hover:text-blue-accent transition-colors leading-snug">
                        {r.title}
                      </h3>
                      <p className="font-mono text-xs text-text-muted mt-2 flex items-center gap-1">
                        <Clock size={11} /> {r.readTime} dk
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-mono text-sm text-text-muted hover:text-blue-accent border border-border-DEFAULT hover:border-blue-accent px-6 py-2.5 rounded-lg transition-all"
            >
              <ArrowLeft size={14} />
              Tüm yazılara dön
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
