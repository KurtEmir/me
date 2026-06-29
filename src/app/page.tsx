import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import BlogPreview from './components/BlogPreview'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { getAllPosts } from '@/lib/posts'

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="max-w-5xl mx-auto">
          <div className="border-l border-border-DEFAULT ml-6 hidden sm:block absolute" />
        </div>
        <About />
        <div className="max-w-5xl mx-auto border-t border-border-DEFAULT opacity-30" />
        <Skills />
        <div className="max-w-5xl mx-auto border-t border-border-DEFAULT opacity-30" />
        <Projects />
        <div className="max-w-5xl mx-auto border-t border-border-DEFAULT opacity-30" />
        <Experience />
        <div className="max-w-5xl mx-auto border-t border-border-DEFAULT opacity-30" />
        <BlogPreview posts={posts} />
        <div className="max-w-5xl mx-auto border-t border-border-DEFAULT opacity-30" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
