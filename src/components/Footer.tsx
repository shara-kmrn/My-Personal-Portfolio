import { contactInfo } from '../data/contact'

const GithubIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
)

const LinkedinIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
  </svg>
)

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Activities', href: '#activities' },
  { label: 'Contact', href: '#contact' },
]

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const hasGithub = Boolean(contactInfo.github && contactInfo.github.trim() && contactInfo.github !== '#')
  const hasLinkedin = Boolean(contactInfo.linkedin && contactInfo.linkedin.trim() && contactInfo.linkedin !== '#')

  return (
    <footer className="w-full bg-[#0D0F11] border-t border-[#24292E] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Footer Grid */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#24292E]/60">
          {/* Brand Info */}
          <div className="space-y-1">
            <a
              href="#home"
              className="text-xl font-bold tracking-tight text-[#CCFF00] hover:opacity-90 transition-opacity"
            >
              Rashmi Shara
            </a>
            <p className="text-xs text-[#A0A6AD]">
              Software Engineering Undergraduate
            </p>
          </div>

          {/* Footer Quick Links */}
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-[#A0A6AD]" aria-label="Footer Navigation">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#CCFF00] transition-colors focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A0A6AD]">
          <p>© {currentYear} Rashmi Shara. All rights reserved.</p>

          {/* Social Icons (rendered only if valid URLs are set) */}
          {(hasGithub || hasLinkedin) && (
            <div className="flex items-center space-x-3">
              {hasGithub && (
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-lg bg-[#1A1D20] text-[#A0A6AD] hover:text-[#CCFF00] border border-[#24292E] hover:border-[#CCFF00]/40 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
              {hasLinkedin && (
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-lg bg-[#1A1D20] text-[#A0A6AD] hover:text-[#CCFF00] border border-[#24292E] hover:border-[#CCFF00]/40 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
