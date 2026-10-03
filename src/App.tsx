import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Activities from './components/Activities'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [themeMode, setThemeMode] = useState<'system' | 'light' | 'dark'>('system')

  const toggleTheme = (mode: 'system' | 'light' | 'dark') => {
    setThemeMode(mode)
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    if (mode !== 'system') {
      root.classList.add(mode)
    }
  }

  return (
    <div className="min-h-screen bg-theme-bg text-theme-text transition-colors duration-200 overflow-x-hidden flex flex-col justify-between">
      {/* Fixed Navigation Bar */}
      <Navbar />

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

        {/* Phase 9 Testimonials Section */}
        <Testimonials />

        {/* Phase 10 Contact Section */}
        <Contact />

        {/* Theme Mode Verification Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 my-8 border-y border-[#24292E] flex items-center justify-between text-xs text-[#A0A6AD]">
          <span>Theme Mode: <strong className="capitalize text-white">{themeMode}</strong></span>
          <div className="flex gap-1 bg-[#1A1D20] p-1 rounded-lg border border-[#24292E]">
            {(['system', 'light', 'dark'] as const).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => toggleTheme(mode)}
                className={`px-2.5 py-1 rounded-md capitalize font-semibold transition-all cursor-pointer ${
                  themeMode === mode
                    ? 'btn-neon-lime shadow-xs'
                    : 'text-[#A0A6AD] hover:text-white'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Phase 10 Footer Component */}
      <Footer />
    </div>
  )
}

export default App