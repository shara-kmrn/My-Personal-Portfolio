import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon, Code2 } from 'lucide-react'

interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Activities', href: '#activities' },
  { label: 'Contact', href: '#contact' },
]

export const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Listen for scroll to apply elevated navbar styling & active section highlight
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Section scrollSpy detection
      const sections = NAV_ITEMS.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i])
        if (sectionEl) {
          const top = sectionEl.offsetTop
          if (scrollPosition >= top) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-theme-bg/90 backdrop-blur-md border-b border-theme-border shadow-md py-3'
          : 'bg-theme-bg/75 backdrop-blur-sm border-b border-theme-border/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Brand Name & Icon Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group text-lg sm:text-xl font-extrabold tracking-tight text-theme-text hover:text-theme-accent transition-colors focus:outline-none focus:ring-2 focus:ring-theme-accent rounded-md"
            onClick={handleLinkClick}
          >
            <div className="p-1.5 rounded-lg bg-theme-accent/10 border border-theme-accent/30 text-theme-accent group-hover:bg-theme-accent group-hover:text-theme-bg transition-colors">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span>
              Rashmishara <span className="text-theme-accent">Nawodani</span>
            </span>
          </a>

          {/* Desktop Navigation Links & Theme Toggle Button */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.substring(1)
              const isActive = activeSection === sectionId

              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3 py-1.5 text-xs lg:text-sm font-semibold rounded-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-theme-accent ${
                    isActive
                      ? 'text-theme-accent bg-theme-accent/10 border border-theme-accent/30'
                      : 'text-theme-secondary hover:text-theme-text hover:bg-theme-card'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}

            {/* Theme Toggle Icon Button */}
            <button
              type="button"
              onClick={onToggleTheme}
              className="ml-2 p-2 rounded-xl bg-theme-card border border-theme-border text-theme-text hover:text-theme-accent hover:border-theme-accent transition-all focus:outline-none focus:ring-2 focus:ring-theme-accent cursor-pointer shadow-xs"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-slate-700 hover:text-emerald-600 transition-colors" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400 hover:text-amber-300 transition-colors" />
              )}
            </button>
          </div>

          {/* Mobile Hamburger & Theme Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className="p-2 rounded-xl bg-theme-card border border-theme-border text-theme-text hover:text-theme-accent transition-all focus:outline-none focus:ring-2 focus:ring-theme-accent cursor-pointer"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-slate-700" />
              ) : (
                <Sun className="w-5 h-5 text-amber-400" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-theme-secondary hover:text-theme-text hover:bg-theme-card border border-theme-border transition-colors focus:outline-none focus:ring-2 focus:ring-theme-accent"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu Panel */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-b border-theme-border bg-theme-card/95 backdrop-blur-md px-4 pt-3 pb-5 space-y-1.5 shadow-xl mt-3 animate-in fade-in slide-in-from-top-2"
        >
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.substring(1)
            const isActive = activeSection === sectionId

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={handleLinkClick}
                aria-current={isActive ? 'page' : undefined}
                className={`block px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-theme-accent ${
                  isActive
                    ? 'text-theme-accent bg-theme-accent/10 border border-theme-accent/30'
                    : 'text-theme-secondary hover:text-theme-text hover:bg-theme-bg'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </div>
      )}
    </header>
  )
}

export default Navbar
