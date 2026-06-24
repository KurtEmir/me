'use client'

import { useEffect, useRef } from 'react'
import { Briefcase, GraduationCap } from 'lucide-react'

const EXPERIENCES = [
  {
    company: 'TeacherX',
    role: 'Full Stack Software Developer',
    period: 'Mayıs 2024 – Devam Ediyor',
    type: 'fulltime',
    current: true,
    bullets: [
      'Eğitim kurumlarına yönelik yönetim panelleri (admin panels) ve kullanıcı dostu arayüzler geliştirdim.',
      'SQL View\'ları ve karmaşık sorgularla veritabanı operasyonları yürüttüm.',
      'TeacherX ve CertifiX projelerinde ASP.NET Core ile Full-Stack geliştirici olarak görev aldım.',
      'Kurumsal üyeler için verilere göre dinamik şekillenen raporların PDF/DOCX formatında indirilmesini sağladım.',
      'Vimeo entegrasyonu ile canlı yayın altyapısı kurdum.',
      'Google Chart ile kullanıcı log verilerini görselleştirdim ve raporlara dönüştürdüm.',
      'ExcelParser ile toplu veri işlemleri (Bulk CRUD) için metodlar geliştirdim.',
      'Logger, Health Check ve OpenTelemetry konfigürasyonları yaparak izlenebilir kod yapısı kurdum.',
      'CertifiX için Drag & Drop tabanlı sertifika tasarım sistemi kodladım.',
      '.NET projelerini IIS Manager üzerinden Windows Server ortamına deploy ettim.',
      'ETZ etkinliği için yönetim panelinden her yıl yenilenebilir CMS projesi geliştirdim.',
      'K12 ve Magistum gibi kurumların sisteme entegrasyonunu sağladım.',
    ],
    tags: ['ASP.NET Core', 'C#', 'SQL Server', 'IIS', 'Docker', 'Vimeo API', 'OpenTelemetry'],
  },
  {
    company: 'Aron Technology',
    role: 'Yazılım Stajyeri',
    period: 'Nisan 2024 – Mayıs 2024',
    type: 'intern',
    current: false,
    bullets: [
      'PHP kullanarak kurumların iş ilanı yayınlayabildiği ve kullanıcıların başvuru yapabildiği dinamik portal geliştirdim.',
      'HTML, CSS ve JavaScript ile kullanıcı dostu frontend arayüzler tasarladım.',
      'ETZ fuarında Aron Technology ürünlerini tanıtarak firma portföyünü genişlettim.',
    ],
    tags: ['PHP', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    company: 'B2 Ajans',
    role: 'Organizasyon Görevlisi',
    period: 'Şubat 2023 – Kasım 2023',
    type: 'other',
    current: false,
    bullets: [
      'Konser ve yeme-içme gibi çeşitli etkinliklerde karşılama, yönlendirme ve stant görevlisi rollerinde çalıştım.',
      'Beklenmedik aksaklıklarda hızlı aksiyon alarak etkinlik akışını korudum.',
    ],
    tags: ['Organizasyon', 'Koordinasyon', 'Müşteri İletişimi'],
  },
  {
    company: 'Spor İstanbul A.Ş.',
    role: 'Organizasyon Görevlisi',
    period: 'Haziran 2022 – Kasım 2022',
    type: 'other',
    current: false,
    bullets: [
      'İBB bünyesinde uluslararası ve yerel spor organizasyonlarında (İtfaiye Olimpiyatları, Maratonlar) operasyonel destek personeli olarak görev aldım.',
      'Kayıt, akreditasyon ve saha yönlendirme süreçlerinde aktif sorumluluk üstlendim.',
    ],
    tags: ['Operasyon', 'Koordinasyon', 'Akreditasyon'],
  },
]

export default function Experience() {
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
    <section id="experience" ref={ref} className="section-enter py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-12">
        <p className="font-mono text-blue-accent text-sm mb-2">// 04</p>
        <h2 className="font-mono text-3xl sm:text-4xl font-bold text-text-primary">Deneyim</h2>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-border-DEFAULT hidden sm:block" />

        <div className="space-y-10">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="relative sm:pl-14">
              {/* Timeline dot */}
              <div
                className={`absolute left-3.5 top-1 w-3 h-3 rounded-full border-2 hidden sm:flex items-center justify-center ${
                  exp.current
                    ? 'border-blue-accent bg-blue-accent shadow-lg shadow-blue-accent/40'
                    : 'border-border-DEFAULT bg-bg-primary'
                }`}
              />

              <div className="bg-bg-card border border-border-DEFAULT rounded-xl p-6 card-hover">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {exp.type === 'intern' ? (
                        <GraduationCap size={16} className="text-blue-accent" />
                      ) : (
                        <Briefcase size={16} className="text-blue-accent" />
                      )}
                      <h3 className="font-mono text-base font-semibold text-text-primary">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-blue-muted text-blue-accent border border-blue-subtle">
                          Aktif
                        </span>
                      )}
                    </div>
                    <p className="text-blue-accent font-medium text-sm">{exp.company}</p>
                  </div>
                  <span className="font-mono text-xs text-text-muted bg-bg-secondary px-3 py-1.5 rounded-lg border border-border-DEFAULT flex-shrink-0">
                    {exp.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-1.5 mb-4">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-2 text-text-muted text-sm leading-relaxed">
                      <span className="text-blue-accent mt-1 flex-shrink-0">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-2 py-0.5 rounded bg-blue-muted text-text-blue border border-blue-subtle"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
