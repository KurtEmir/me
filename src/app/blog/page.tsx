import Link from 'next/link'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import { getAllPosts } from '@/lib/posts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CATEGORY_COLORS: Record<string, string> = {
  Backend: 'bg-blue-muted text-text-blue border-blue-subtle',
  Frontend: 'bg-[#1a2a1a] text-[#86efac] border-[#166534]',
  DevOps: 'bg-[#2a1a2a] text-[#d8b4fe] border-[#6b21a8]',
  Veritabanı: 'bg-[#2a1f0a] text-[#fcd34d] border-[#92400e]',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const dynamic = 'force-dynamic'

export default async function BlogPage() {
  const posts = await getAllPosts()
  const [featured, ...rest] = posts

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 px-6 max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-blue-accent text-sm mb-2">~/blog $</p>
          <h1 className="font-mono text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Blog
          </h1>
          <p className="text-text-muted text-base max-w-xl">
            Yazılım geliştirme, mimari kararlar ve günlük mühendislik notları.
            Toplam{' '}
            <span className="text-blue-accent font-semibold">{posts.length}</span> yazı.
          </p>
        </div>

        {/* Featured post */}
        {featured && (
          <Link href={`/blog/${featured.slug}`} className="block mb-10">
            <article className="bg-bg-card border border-blue-subtle rounded-xl p-7 hover:border-blue-accent transition-all duration-300 hover:shadow-lg hover:shadow-blue-accent/10 group">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-blue-accent/20 text-blue-accent border border-blue-accent/40">
                  ★ Son Yazı
                </span>
                <span
                  className={`font-mono text-[11px] px-2.5 py-1 rounded-full border ${
                    CATEGORY_COLORS[featured.category] ?? CATEGORY_COLORS.Backend
                  }`}
                >
                  {featured.category}
                </span>
              </div>
              <h2 className="font-mono text-xl sm:text-2xl font-bold text-text-primary mb-3 group-hover:text-blue-accent transition-colors">
                {featured.title}
              </h2>
              <p className="text-text-muted text-sm leading-relaxed mb-5">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-text-muted font-mono">
                  <span>{formatDate(featured.date)}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {featured.read_time} dk okuma
                  </span>
                </div>
                <span className="flex items-center gap-1 text-blue-accent text-sm font-mono group-hover:gap-2 transition-all">
                  Oku <ArrowRight size={14} />
                </span>
              </div>
            </article>
          </Link>
        )}

        {/* All posts grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="h-full bg-bg-card border border-border-DEFAULT rounded-xl p-6 hover:border-blue-accent transition-all duration-300 hover:shadow-lg hover:shadow-blue-accent/10 group flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`font-mono text-[11px] px-2.5 py-1 rounded-full border ${
                      CATEGORY_COLORS[post.category] ?? CATEGORY_COLORS.Backend
                    }`}
                  >
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-text-muted font-mono">
                    <Clock size={11} />
                    {post.read_time} dk
                  </span>
                </div>

                <h2 className="font-mono text-base font-semibold text-text-primary mb-2 group-hover:text-blue-accent transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-text-muted text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-3 border-t border-border-DEFAULT">
                  <span className="font-mono text-xs text-text-muted">
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-blue-accent font-mono group-hover:gap-2 transition-all">
                    Oku <ArrowRight size={12} />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Tags cloud */}
        <div className="mt-16 pt-10 border-t border-border-DEFAULT">
          <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4 flex items-center gap-2">
            <Tag size={13} /> Konular
          </p>
          <div className="flex flex-wrap gap-2">
            {Array.from(new Set(posts.flatMap((p) => p.tags))).map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-3 py-1.5 rounded-lg bg-blue-muted text-text-blue border border-blue-subtle hover:border-blue-accent hover:text-text-primary transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
