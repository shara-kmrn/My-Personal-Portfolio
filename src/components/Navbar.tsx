import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

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

  // Listen for scroll to apply elevated styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
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
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-theme-bg/90 backdrop-blur-md border-b border-theme-border shadow-xs py-3'
          : 'bg-theme-bg/75 backdrop-blur-sm border-b border-theme-border/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Brand Name */}
          <a
            href="#home"
            className="text-xl font-bold tracking-tight text-theme-accent hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-theme-accent focus:ring-offset-2 rounded-md"
            onClick={handleLinkClick}
          >
            Rashmi Shara
          </a>

          {/* Desktop Navigation Links & Theme Toggle Button */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-theme-secondary hover:text-theme-accent transition-colors duration-150 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-accent"
              >
                {item.label}
              </a>
            ))}

            {/* Light / Dark Mode Toggle Icon Button */}
            <button
              type="button"
              onClick={onToggleTheme}
              className="ml-2 p-2 rounded-xl bg-theme-card border border-theme-border text-theme-text hover:text-theme-accent hover:border-theme-accent/50 transition-all focus:outline-none focus:ring-2 focus:ring-theme-accent cursor-pointer shadow-xs"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-slate-700 hover:text-lime-600 transition-colors" />
              ) : (
                <Sun className="w-5 h-5 text-amber-400 hover:text-amber-300 transition-colors" />
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
              className="inline-flex items-center justify-center p-2 rounded-md text-theme-secondary hover:text-theme-text hover:bg-theme-card border border-transparent hover:border-theme-border transition-colors focus:outline-none focus:ring-2 focus:ring-theme-accent"
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
          className="md:hidden border-b border-theme-border bg-theme-card/95 backdrop-blur-md px-4 pt-3 pb-5 space-y-2 shadow-lg mt-3"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleLinkClick}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-theme-secondary hover:text-theme-accent hover:bg-theme-bg transition-colors focus:outline-none focus:ring-2 focus:ring-theme-accent"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar
