'use client'

import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, FileDown, ChevronDown } from 'lucide-react'

const TITLES = [
  'Full Stack Developer',
  'Software Engineer',
  '.NET Core Specialist',
  'Computer Engineer',
]

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = TITLES[titleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex))
        setCharIndex((i) => i + 1)
      }, 60)
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex))
        setCharIndex((i) => i - 1)
      }, 35)
    } else {
      setDeleting(false)
      setTitleIndex((i) => (i + 1) % TITLES.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, titleIndex])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-accent/5 rounded-full blur-[120px]" />
      </div>

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-3xl w-full text-left">
        {/* Terminal prompt */}
        <p className="font-mono text-blue-accent text-sm mb-6 tracking-widest opacity-80">
          ~/kurtemir $<span className="animate-blink ml-1">_</span>
        </p>

        {/* Name */}
        <h1 className="font-mono text-5xl sm:text-7xl font-bold text-text-primary mb-4 leading-none tracking-tight">
          Emir
          <br />
          <span className="text-blue-accent glow-blue">Kurt</span>
        </h1>

        {/* Typing title */}
        <div className="font-mono text-xl sm:text-2xl text-text-muted mb-6 h-8 flex items-center">
          <span className="text-blue-muted mr-2">&gt;</span>
          <span className="text-text-primary">{displayed}</span>
          <span className="animate-blink ml-0.5 text-blue-accent">|</span>
        </div>

        {/* Bio */}
        <p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-xl mb-10">
          Uzun süredir web alanında yazılım geliştiriyorum. Özellikle{' '}
          <span className="text-blue-accent font-medium">.NET Core</span> ve{' '}
          <span className="text-blue-accent font-medium">C#</span> ile back-end geliştirme
          konusunda tecrübe ve altyapıya sahibim. Veritabanı yönetimi, SQL optimizasyonları ve
          API geliştirme üzerine çalışmalarım oldu. Front-end tarafında da kullanıcı deneyimini
          önemseyen yapılar oluşturmaya özen gösterdim.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="/EmirKurtCV.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-blue-accent hover:bg-blue-hover text-white font-mono text-sm font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-blue-accent/20"
          >
            <FileDown size={16} />
            CV İndir
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 border border-border-DEFAULT hover:border-blue-accent text-text-primary hover:text-blue-accent font-mono text-sm font-semibold rounded-lg transition-all duration-200"
          >
            <Mail size={16} />
            İletişim
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-5">
          <a
            href="https://github.com/KurtEmir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-blue-accent transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/kurtemir/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-blue-accent transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:emirkurt_2001@outlook.com"
            className="text-text-muted hover:text-blue-accent transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted hover:text-blue-accent transition-colors animate-bounce"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  )
}
