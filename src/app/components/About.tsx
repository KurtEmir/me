'use client'

import { useEffect, useRef } from 'react'
import { MapPin, Mail, Github, Star, GitFork, Users } from 'lucide-react'

const STATS = [
  { label: 'GitHub Repo', value: '16', icon: GitFork },
  { label: 'Takipçi', value: '4', icon: Users },
  { label: 'Starred', value: '25', icon: Star },
]

const BADGES = ['Pull Shark ×2', 'Quickdraw']

export default function About() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="section-enter py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-12">
        <p className="font-mono text-blue-accent text-sm mb-2">// 01</p>
        <h2 className="font-mono text-3xl sm:text-4xl font-bold text-text-primary">
          Hakkımda
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Bio */}
        <div className="space-y-4">
          <p className="text-text-muted leading-relaxed text-[15px]">
            Uzun süredir web alanında yazılım geliştiriyorum. Özellikle{' '}
            <span className="text-blue-accent font-medium">.NET Core</span> ve{' '}
            <span className="text-blue-accent font-medium">C#</span> ile back-end geliştirme
            konusunda tecrübe ve altyapıya sahibim.
          </p>
          <p className="text-text-muted leading-relaxed text-[15px]">
            Veritabanı yönetimi, SQL optimizasyonları ve API geliştirme üzerine çalışmalarım
            oldu. Front-end tarafında da ihtiyaç oldukça çalışmalar yaptım ve kullanıcı
            deneyimini önemseyen yapılar oluşturmaya özen gösterdim.
          </p>

          {/* Contact info */}
          <div className="pt-4 space-y-2">
            <div className="flex items-center gap-3 text-sm text-text-muted">
              <MapPin size={15} className="text-blue-accent flex-shrink-0" />
              İstanbul, Türkiye
            </div>
            <div className="flex items-center gap-3 text-sm text-text-muted">
              <Mail size={15} className="text-blue-accent flex-shrink-0" />
              <a
                href="mailto:emirkurt_2001@outlook.com"
                className="hover:text-blue-accent transition-colors"
              >
                emirkurt_2001@outlook.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-text-muted">
              <Github size={15} className="text-blue-accent flex-shrink-0" />
              <a
                href="https://github.com/KurtEmir"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-accent transition-colors"
              >
                github.com/KurtEmir
              </a>
            </div>
          </div>
        </div>

        {/* GitHub stats + education */}
        <div className="space-y-6">
          {/* GitHub stats */}
          <div className="bg-bg-card border border-border-DEFAULT rounded-xl p-6">
            <p className="font-mono text-xs text-text-muted mb-4 uppercase tracking-widest">
              GitHub İstatistikleri
            </p>
            <div className="grid grid-cols-3 gap-4">
              {STATS.map(({ label, value, icon: Icon }) => (
                <div key={label} className="text-center">
                  <Icon size={18} className="text-blue-accent mx-auto mb-1" />
                  <div className="font-mono text-2xl font-bold text-text-primary">{value}</div>
                  <div className="text-xs text-text-muted mt-0.5">{label}</div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="mt-5 pt-4 border-t border-border-DEFAULT">
              <p className="text-xs text-text-muted mb-3 font-mono uppercase tracking-widest">
                Başarımlar
              </p>
              <div className="flex gap-2 flex-wrap">
                {BADGES.map((b) => (
                  <span
                    key={b}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-blue-muted text-text-blue border border-blue-subtle"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-bg-card border border-border-DEFAULT rounded-xl p-6">
            <p className="font-mono text-xs text-text-muted mb-4 uppercase tracking-widest">
              Eğitim
            </p>
            <div className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-blue-accent flex-shrink-0" />
              <div>
                <p className="text-text-primary font-medium text-sm">
                  İstanbul Aydın Üniversitesi
                </p>
                <p className="text-text-muted text-sm">Bilgisayar Mühendisliği</p>
                <p className="font-mono text-xs text-blue-accent mt-1">2021 – 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
