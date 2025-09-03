import Header from '@/components/ui/Header';
import Hero from '@/components/ui/Hero';
import About from '@/components/ui/About';
import Projects from '@/components/ui/Projects';
import Experience from '@/components/ui/Experience';
import Contact from '@/components/ui/Contact';
import Footer from '@/components/ui/Footer';


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
