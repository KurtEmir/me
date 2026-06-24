export default function Footer() {
  return (
    <footer className="border-t border-border-DEFAULT py-8 px-6 text-center">
      <p className="font-mono text-xs text-text-muted">
        <span className="text-blue-accent">{'<'}</span>
        {' Emir Kurt '}
        <span className="text-blue-accent">{'/>'}</span>
        {' — İstanbul, Türkiye · '}
        {new Date().getFullYear()}
      </p>
    </footer>
  )
}
