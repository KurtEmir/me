'use client'

import { useEffect, useRef } from 'react'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function Contact() {
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
    <section id="contact" ref={ref} className="section-enter py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-12">
        <p className="font-mono text-blue-accent text-sm mb-2">// 05</p>
        <h2 className="font-mono text-3xl sm:text-4xl font-bold text-text-primary">İletişim</h2>
      </div>

      <div className="max-w-2xl">
        <p className="text-text-muted text-[15px] leading-relaxed mb-10">
          Bir proje fikriniz mi var, iş birliği yapmak mı istiyorsunuz ya da sadece merhaba mı
          demek istiyorsunuz? Mesaj atmaktan çekinmeyin — en kısa sürede geri dönerim.
        </p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <a
            href="mailto:emirkurt_2001@outlook.com"
            className="bg-bg-card border border-border-DEFAULT hover:border-blue-accent rounded-xl p-5 flex flex-col items-center gap-3 card-hover group"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-muted border border-blue-subtle flex items-center justify-center group-hover:bg-blue-subtle transition-colors">
              <Mail size={18} className="text-blue-accent" />
            </div>
            <div className="text-center">
              <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-1">
                E-posta
              </p>
              <p className="text-text-primary text-xs break-all">emirkurt_2001@outlook.com</p>
            </div>
          </a>

          <a
            href="https://github.com/KurtEmir"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bg-card border border-border-DEFAULT hover:border-blue-accent rounded-xl p-5 flex flex-col items-center gap-3 card-hover group"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-muted border border-blue-subtle flex items-center justify-center group-hover:bg-blue-subtle transition-colors">
              <Github size={18} className="text-blue-accent" />
            </div>
            <div className="text-center">
              <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-1">
                GitHub
              </p>
              <p className="text-text-primary text-xs">@KurtEmir</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/kurtemir/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bg-card border border-border-DEFAULT hover:border-blue-accent rounded-xl p-5 flex flex-col items-center gap-3 card-hover group"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-muted border border-blue-subtle flex items-center justify-center group-hover:bg-blue-subtle transition-colors">
              <Linkedin size={18} className="text-blue-accent" />
            </div>
            <div className="text-center">
              <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-1">
                LinkedIn
              </p>
              <p className="text-text-primary text-xs">kurtemir</p>
            </div>
          </a>
        </div>

        {/* CV download */}
        <div className="bg-bg-card border border-blue-subtle rounded-xl p-6 flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-sm font-semibold text-text-primary mb-1">
              CV&apos;mi İncele
            </p>
            <p className="text-text-muted text-sm">
              Deneyimlerimin ve projelerimin detaylı özetini PDF olarak indir.
            </p>
          </div>
          <a
            href="https://drive.google.com/uc?export=download&id=1__V9IZB-mxwQcmAF0_kQRx8eTDpMsn2Y"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 bg-blue-accent hover:bg-blue-hover text-white font-mono text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-blue-accent/20"
          >
            <ExternalLink size={14} />
            PDF İndir
          </a>
        </div>
      </div>
    </section>
  )
}
