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

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className="min-h-screen bg-theme-bg text-theme-text transition-colors duration-200 overflow-x-hidden flex flex-col justify-between">
      {/* Fixed Navigation Bar with Theme Toggle Icon */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {/* Main Content Area */}
      <main className="pt-16 flex-1">
        {/* Phase 3 Hero Section */}
        <Hero />

        {/* Phase 4 About Section */}
        <About />

        {/* Phase 4 Education Section */}
        <Education />

        {/* Phase 5 Skills Section */}
        <Skills />

        {/* Phase 6 Projects Section */}
        <Projects />

        {/* Phase 7 Certifications Section */}
        <Certifications />

        {/* Phase 8 Activities & Leadership Section */}
        <Activities />

        {/* Phase 10 Contact Section */}
        <Contact />
      </main>

      {/* Phase 10 Footer Component */}
      <Footer />
    </div>
  )
}

export default App