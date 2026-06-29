'use client'

import { useEffect, useRef } from 'react'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    name: 'GraduationProject',
    description:
      'Full-stack uzaktan sağlık izleme sistemi. Hastalar nabız, tansiyon ve oksijen değerlerini gerçek zamanlı takip edebilir; doktorlar atanan hastalara erişip otomatik sağlık uyarılarını yönetebilir.',
    tags: ['TypeScript', 'React', 'Python', 'Tailwind CSS', 'JWT'],
    github: 'https://github.com/KurtEmir/Graduation',
    demo: null,
    featured: true,
  },
  {
    name: 'BasicStockManagement',
    description:
      'C# ile geliştirilmiş temel stok yönetim uygulaması. Ürün ekleme, güncelleme ve stok takibi işlemlerini kapsayan CRUD tabanlı bir yönetim sistemi.',
    tags: ['C#', '.NET', 'CRUD'],
    github: 'https://github.com/KurtEmir/BasicStockManagement',
    demo: null,
    featured: false,
  },
  {
    name: 'MenuPortalApi',
    description:
      'ASP.NET tabanlı restoran menü yönetim API\'si. Identity Framework ile kullanıcı kimlik doğrulama ve yetkilendirme sistemi içerir. Docker ile konteynerize edilmiştir.',
    tags: ['C#', 'ASP.NET', 'Entity Framework', 'Identity Framework', 'Docker'],
    github: 'https://github.com/KurtEmir/MenuPortalApi',
    demo: null,
    featured: false,
  },
  {
    name: 'NetflixBackendDemo',
    description:
      'Netflix benzeri içerik akış platformunun backend demo uygulaması. C# ASP.NET Core ile geliştirilmiş REST API mimarisi.',
    tags: ['C#', 'ASP.NET Core', 'REST API'],
    github: 'https://github.com/KurtEmir/NetflixBackendDemo',
    demo: null,
    featured: false,
  },
  {
    name: 'QRCodeGenerator',
    description:
      'Python ile geliştirilmiş QR kod üreteci. Metin veya URL girişinden anında QR kod oluşturur ve görüntü olarak kaydeder.',
    tags: ['Python'],
    github: 'https://github.com/KurtEmir/QRCodeGenerator',
    demo: null,
    featured: false,
  },
  {
    name: 'DrawingGameWithPythonTurtle',
    description:
      'Python Turtle kütüphanesi ile geliştirilmiş çizim oyunu. Klavye kontrolüyle ekrana şekil çizmeye dayalı eğlenceli ve interaktif bir uygulama.',
    tags: ['Python', 'Turtle'],
    github: 'https://github.com/KurtEmir/DrawingGameWithPythonTurtle',
    demo: null,
    featured: false,
  },
]

export default function Projects() {
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

  return (
    <section id="projects" ref={ref} className="section-enter py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-12">
        <p className="font-mono text-blue-accent text-sm mb-2">// 03</p>
        <h2 className="font-mono text-3xl sm:text-4xl font-bold text-text-primary">Projeler</h2>
        <p className="text-text-muted text-sm mt-2">
          GitHub{' '}
          <a
            href="https://github.com/KurtEmir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-accent hover:underline"
          >
            @KurtEmir
          </a>{' '}
          — 16 public repo
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((project) => (
          <div
            key={project.name}
            className={`bg-bg-card border rounded-xl p-6 card-hover flex flex-col ${
              project.featured
                ? 'border-blue-subtle md:col-span-2 lg:col-span-1'
                : 'border-border-DEFAULT'
            }`}
          >
            {project.featured && (
              <span className="font-mono text-xs text-blue-accent border border-blue-subtle bg-blue-muted px-2 py-0.5 rounded-full w-fit mb-3">
                ★ Öne Çıkan
              </span>
            )}

            <div className="flex items-start justify-between mb-3">
              <h3 className="font-mono text-base font-semibold text-text-primary">
                {project.name}
              </h3>
              <div className="flex gap-2 ml-2 flex-shrink-0">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-blue-accent transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-blue-accent transition-colors"
                    aria-label="Demo"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-text-muted text-sm leading-relaxed mb-4 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] px-2 py-0.5 rounded bg-blue-muted text-text-blue border border-blue-subtle"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://github.com/KurtEmir?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm text-text-muted hover:text-blue-accent transition-colors border border-border-DEFAULT hover:border-blue-accent px-5 py-2.5 rounded-lg"
        >
          <Github size={15} />
          Tüm projeleri GitHub&apos;da görüntüle
          <ExternalLink size={13} />
        </a>
      </div>
    </section>
  )
}
