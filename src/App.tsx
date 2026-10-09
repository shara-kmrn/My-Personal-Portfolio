import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Activities from './components/Activities'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundEffects from './components/BackgroundEffects'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved === 'light' || saved === 'dark') {
        return saved
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className="relative min-h-screen bg-theme-bg text-theme-text transition-colors duration-300 overflow-x-hidden flex flex-col justify-between">
      {/* Subtle Coding Background System & Ambient Glows */}
      <BackgroundEffects />

      {/* Sticky Navigation Bar with Active Section Indicators & Theme Toggle */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {/* Main Content Area */}
      <main className="relative z-10 pt-16 flex-1">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Activities />
        <Contact />
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}

export default App