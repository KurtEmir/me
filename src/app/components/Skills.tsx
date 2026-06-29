'use client'

import { useEffect, useRef } from 'react'

const SKILL_GROUPS = [
  {
    category: 'Backend',
    skills: ['C#', '.NET Core', 'ASP.NET', 'Web API', 'Entity Framework'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'React Native', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Veritabanı',
    skills: ['SQL Server', 'MySQL', 'SQLite', 'PostgreSQL' ,'SQL Query Optimizasyonu'],
  },
  {
    category: 'Araçlar & Platformlar',
    skills: ['Docker', 'Git', 'GitHub', 'IIS', 'Vercel', 'JWT', 'Postman', 'n8n', 'OpenTelemetry', 'Supabase'],
  },
  {
    category: 'Diğer',
    skills: ['Python', 'Java', 'PHP', 'Expo', 'Chart.js'],
  },
]

export default function Skills() {
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
    <section id="skills" ref={ref} className="section-enter py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-12">
        <p className="font-mono text-blue-accent text-sm mb-2">// 02</p>
        <h2 className="font-mono text-3xl sm:text-4xl font-bold text-text-primary">Beceriler</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.category}
            className="bg-bg-card border border-border-DEFAULT rounded-xl p-6 card-hover"
          >
            <p className="font-mono text-xs text-blue-accent uppercase tracking-widest mb-4">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg bg-blue-muted text-text-blue border border-blue-subtle hover:border-blue-accent hover:text-text-primary transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
