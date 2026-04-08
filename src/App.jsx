import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import CursorFollower from './components/CursorFollower'

function App() {
  return (
    <>
      <CursorFollower />
      <ParticleBackground />
      
      {/* Ambient gradient blurs */}
      <div className="fixed w-[600px] h-[600px] rounded-full blur-[150px] opacity-15 pointer-events-none z-0 bg-primary -top-50 -right-50" />
      <div className="fixed w-[600px] h-[600px] rounded-full blur-[150px] opacity-15 pointer-events-none z-0 bg-secondary -bottom-50 -left-50" />
      <div className="fixed w-[400px] h-[400px] rounded-full blur-[150px] opacity-10 pointer-events-none z-0 bg-accent top-1/2 left-1/2 -translate-1/2" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
