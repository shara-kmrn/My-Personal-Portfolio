import { useEffect, useState } from 'react'

interface CodeSnippet {
  id: string
  text: string
  topPct: number // Target vertical percentage down page height (0 to 100)
  left?: string
  right?: string
  size: string
  speed: number // Parallax scroll multiplier
  sectionName: string
}

const SCROLL_CODE_SNIPPETS: CodeSnippet[] = [
  // 1. Hero Section Code Snippets (0% - 20%)
  { id: 'hero-1', text: '</>', topPct: 8, left: '5%', size: 'text-2xl sm:text-3xl font-mono font-extrabold', speed: 0.15, sectionName: 'Hero' },
  { id: 'hero-2', text: 'const dev = "Rashmishara";', topPct: 14, right: '6%', size: 'text-xs sm:text-sm font-mono font-semibold', speed: 0.08, sectionName: 'Hero' },
  { id: 'hero-3', text: '{ }', topPct: 22, left: '8%', size: 'text-3xl sm:text-4xl font-mono font-bold', speed: 0.18, sectionName: 'Hero' },
  { id: 'hero-4', text: '010101', topPct: 28, right: '8%', size: 'text-xs sm:text-sm font-mono tracking-widest', speed: 0.12, sectionName: 'Hero' },

  // 2. About & Education Section (20% - 45%)
  { id: 'about-1', text: 'class SoftwareEngineer {', topPct: 35, right: '5%', size: 'text-xs sm:text-sm font-mono font-medium', speed: 0.1, sectionName: 'About' },
  { id: 'about-2', text: 'import { Moratuwa } from "UoM";', topPct: 42, left: '6%', size: 'text-xs sm:text-sm font-mono font-semibold', speed: 0.14, sectionName: 'About' },
  { id: 'about-3', text: '01001001 01010100', topPct: 48, right: '7%', size: 'text-xs sm:text-sm font-mono tracking-widest', speed: 0.07, sectionName: 'About' },

  // 3. Skills & Projects Section (45% - 75%)
  { id: 'skills-1', text: 'git commit -m "feat: portfolio"', topPct: 56, left: '6%', size: 'text-xs sm:text-sm font-mono font-medium', speed: 0.11, sectionName: 'Skills' },
  { id: 'skills-2', text: '=> async () =>', topPct: 64, right: '6%', size: 'text-sm sm:text-base font-mono font-bold', speed: 0.16, sectionName: 'Skills' },
  { id: 'skills-3', text: '<React.Component />', topPct: 72, left: '7%', size: 'text-xs sm:text-sm font-mono font-semibold', speed: 0.13, sectionName: 'Skills' },

  // 4. Certifications & Contact Section (75% - 100%)
  { id: 'contact-1', text: 'await fetch("/api/contact")', topPct: 81, right: '7%', size: 'text-xs sm:text-sm font-mono', speed: 0.14, sectionName: 'Contact' },
  { id: 'contact-2', text: 'Status: 200 OK', topPct: 89, left: '5%', size: 'text-xs sm:text-sm font-mono font-bold', speed: 0.08, sectionName: 'Contact' },
  { id: 'contact-3', text: ';', topPct: 95, right: '10%', size: 'text-3xl sm:text-4xl font-mono font-bold', speed: 0.2, sectionName: 'Contact' },
]

export const BackgroundEffects = () => {
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  const [isLowPowerDevice] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.innerWidth < 768
    return prefersReduced || isMobile
  })

  useEffect(() => {
    if (isLowPowerDevice) return

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY
          const maxScroll = Math.max(
            document.documentElement.scrollHeight - window.innerHeight,
            1
          )
          const progress = Math.min(Math.max(currentY / maxScroll, 0), 1)

          setScrollY(currentY)
          setScrollProgress(progress)
          ticking = false
        })
        ticking = true
      }
    }

    // Set initial scroll value
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isLowPowerDevice])

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* 1. Technical Grid Lines */}
      <div className="absolute inset-0 bg-grid-lines opacity-60" />

      {/* 2. Dynamic Scroll-Driven Ambient Gradient Glow Orbs */}
      {/* Glow 1: Top Cyan/Blue orb shifting with scroll */}
      <div
        style={{
          transform: isLowPowerDevice
            ? 'none'
            : `translateY(${-scrollY * 0.12}px) scale(${1 + scrollProgress * 0.15})`,
          opacity: 0.5 + scrollProgress * 0.3,
        }}
        className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-br from-[#00F2FE]/15 via-[#3B82F6]/10 to-transparent blur-3xl transition-opacity duration-300"
      />

      {/* Glow 2: Middle Electric Purple orb activating in middle scroll */}
      <div
        style={{
          transform: isLowPowerDevice
            ? 'none'
            : `translateY(${-scrollY * 0.08}px) scale(${0.9 + Math.sin(scrollProgress * Math.PI) * 0.3})`,
          opacity: 0.3 + Math.sin(scrollProgress * Math.PI) * 0.4,
        }}
        className="absolute top-[40%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-tl from-[#7000FF]/15 via-[#3B82F6]/10 to-transparent blur-3xl transition-opacity duration-300"
      />

      {/* Glow 3: Bottom Cyan/Teal orb activating toward contact section */}
      <div
        style={{
          transform: isLowPowerDevice
            ? 'none'
            : `translateY(${-scrollY * 0.05}px) scale(${0.8 + scrollProgress * 0.4})`,
          opacity: 0.2 + scrollProgress * 0.5,
        }}
        className="absolute bottom-[-10%] left-[15%] w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-tr from-[#00F2FE]/15 via-[#8B5CF6]/10 to-transparent blur-3xl transition-opacity duration-300"
      />

      {/* 3. Margin Matrix Binary Code Stream (Visible on medium+ screens) */}
      {!isLowPowerDevice && (
        <>
          {/* Left Margin Binary Column */}
          <div className="hidden lg:block absolute left-3 top-0 bottom-0 w-6 opacity-20 font-mono text-[10px] text-theme-accent select-none overflow-hidden">
            <div className="animate-matrix-stream space-y-4 tracking-tighter">
              <div>01001</div>
              <div>&lt;/&gt;</div>
              <div>10110</div>
              <div>{`{ }`}</div>
              <div>00101</div>
              <div>=&gt;</div>
              <div>11001</div>
            </div>
          </div>

          {/* Right Margin Binary Column */}
          <div className="hidden lg:block absolute right-3 top-0 bottom-0 w-6 opacity-20 font-mono text-[10px] text-theme-accent select-none overflow-hidden">
            <div className="animate-matrix-stream space-y-4 tracking-tighter" style={{ animationDelay: '10s' }}>
              <div>11010</div>
              <div>const</div>
              <div>01101</div>
              <div>async</div>
              <div>10011</div>
              <div>;</div>
              <div>00110</div>
            </div>
          </div>
        </>
      )}

      {/* 4. Scroll-Driven Parallax Code Snippets */}
      {!isLowPowerDevice &&
        SCROLL_CODE_SNIPPETS.map((item) => {
          // Calculate vertical position relative to document scroll
          const translateY = -scrollY * item.speed
          // Highlight opacity based on closeness of scroll to snippet's topPct
          const targetScrollFraction = item.topPct / 100
          const distFromCurrentScroll = Math.abs(scrollProgress - targetScrollFraction)
          // Opacity is highest when the user is currently scrolling past this snippet's region
          const opacity = Math.max(0.12, 0.45 - distFromCurrentScroll * 0.8)

          return (
            <div
              key={item.id}
              style={{
                top: `${item.topPct}%`,
                left: item.left,
                right: item.right,
                transform: `translateY(${translateY}px)`,
                opacity: opacity,
                transition: 'opacity 0.2s ease-out',
              }}
              className={`absolute font-mono tracking-widest ${item.size} text-theme-accent animate-float-symbol blur-[0.3px]`}
            >
              {item.text}
            </div>
          )
        })}
    </div>
  )
}

export default BackgroundEffects
