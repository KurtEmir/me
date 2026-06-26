'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const HOME_LINKS = [
  { label: 'Hakkımda', href: '#about', id: 'about' },
  { label: 'Beceriler', href: '#skills', id: 'skills' },
  { label: 'Projeler', href: '#projects', id: 'projects' },
  { label: 'Deneyim', href: '#experience', id: 'experience' },
  { label: 'İletişim', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (!isHome) return

    const observers: IntersectionObserver[] = []

    HOME_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [isHome])

  const linkClass = (id: string) =>
    `font-mono text-sm transition-colors ${
      activeSection === id ? 'text-blue-accent' : 'text-text-muted hover:text-blue-accent'
    }`

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/95 backdrop-blur-sm border-b border-border-DEFAULT'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-mono text-blue-accent font-bold text-lg tracking-tight">
          ek<span className="text-text-muted">.</span>dev
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {isHome
            ? HOME_LINKS.map((link) => (
                <a key={link.id} href={link.href} className={linkClass(link.id)}>
                  {link.label}
                </a>
              ))
            : HOME_LINKS.map((link) => (
                <Link key={link.id} href={`/${link.href}`} className="font-mono text-sm text-text-muted hover:text-blue-accent transition-colors">
                  {link.label}
                </Link>
              ))}

          <Link
            href="/blog"
            className={`font-mono text-sm transition-colors ${
              pathname.startsWith('/blog')
                ? 'text-blue-accent'
                : 'text-text-muted hover:text-blue-accent'
            }`}
          >
            Blog
          </Link>

          <a
            href="/EmirKurtCV.pdf"
            download
            className="font-mono text-sm px-4 py-1.5 border border-blue-accent text-blue-accent hover:bg-blue-accent hover:text-white rounded-lg transition-all"
          >
            CV
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-muted hover:text-blue-accent transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-bg-secondary border-b border-border-DEFAULT px-6 pb-6 pt-2 space-y-3">
          {isHome
            ? HOME_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`block py-1 ${linkClass(link.id)}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))
            : HOME_LINKS.map((link) => (
                <Link
                  key={link.id}
                  href={`/${link.href}`}
                  className="block font-mono text-sm text-text-muted hover:text-blue-accent transition-colors py-1"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
          <Link
            href="/blog"
            className={`block font-mono text-sm py-1 transition-colors ${
              pathname.startsWith('/blog') ? 'text-blue-accent' : 'text-text-muted hover:text-blue-accent'
            }`}
            onClick={() => setOpen(false)}
          >
            Blog
          </Link>
          <a
            href="/EmirKurtCV.pdf"
            download
            className="block font-mono text-sm text-blue-accent py-1"
            onClick={() => setOpen(false)}
          >
            CV İndir
          </a>
        </div>
      )}
    </nav>
  )
}
