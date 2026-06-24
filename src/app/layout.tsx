import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Emir Kurt — Full Stack Developer',
  description:
    'Emir Kurt kişisel portfolyo sitesi. .NET Core, C#, React ve TypeScript ile full-stack yazılım geliştirici.',
  openGraph: {
    title: 'Emir Kurt — Full Stack Developer',
    description: '.NET Core, C#, React ve TypeScript ile full-stack yazılım geliştirici.',
    url: 'https://kurtemir.dev',
    siteName: 'Emir Kurt',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="bg-bg-primary text-text-primary antialiased">{children}</body>
    </html>
  )
}
