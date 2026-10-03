import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

interface NavItem {
  label: string
  href: string
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

export const Navbar = () => {
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
            className="text-xl font-bold tracking-tight text-brand dark:text-dark-accent hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 rounded-md"
            onClick={handleLinkClick}
          >
            Rashmi Shara
          </a>

          {/* Desktop Navigation Links & Action Button */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-[#A0A6AD] hover:text-[#CCFF00] transition-colors duration-150 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
              >
                {item.label}
              </a>
            ))}

            {/* Neon Lime Sign In / Sign Up Button */}
            <a
              href="#contact"
              className="ml-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg btn-neon-lime focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
            >
              Sign In / Sign Up
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md btn-neon-lime"
            >
              Sign In
            </a>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#A0A6AD] hover:text-white hover:bg-[#1A1D20] border border-transparent hover:border-[#24292E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
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
          className="md:hidden border-b border-[#24292E] bg-[#0D0F11]/95 backdrop-blur-md px-4 pt-3 pb-5 space-y-2 shadow-lg mt-3"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleLinkClick}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-[#A0A6AD] hover:text-[#CCFF00] hover:bg-[#1A1D20] transition-colors focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="block w-full text-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg btn-neon-lime"
            >
              Sign In / Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
