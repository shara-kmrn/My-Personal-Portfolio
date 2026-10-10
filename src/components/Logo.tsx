import { useId } from 'react'

interface LogoProps {
  showText?: boolean
  className?: string
  iconSize?: 'sm' | 'md' | 'lg'
}

export const Logo = ({ showText = true, className = '', iconSize = 'md' }: LogoProps) => {
  const uniqueId = useId()
  const rnGradId = `rnGrad-${uniqueId}`
  const starGradId = `starGrad-${uniqueId}`

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      {/* Monogram Icon Container */}
      <div className={`relative flex items-center justify-center shrink-0 ${sizeClasses[iconSize]} transition-transform duration-300 group-hover:scale-105`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_10px_rgba(0,229,255,0.35)]"
        >
          <defs>
            <linearGradient id={rnGradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="35%" stopColor="#00D2FF" />
              <stop offset="60%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
            <linearGradient id={starGradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>

          {/* Seamless R and N Monogram Structure */}
          <path
            d="
              M 13 28
              L 25 17
              L 54 17
              C 66 17 74 25 74 37
              C 74 48 66 55 54 55
              L 34 55
              L 63 83
              L 75 83
              L 75 42
              L 64 47
              L 64 68
              L 49 55
              L 54 55
              C 66 55 74 48 74 37
              C 74 25 66 17 54 17
              Z
              M 27 83
              L 15 83
              L 15 28
              L 27 18
              Z
              M 27 27
              L 27 45
              L 52 45
              C 57 45 61 42 61 36
              C 61 30 57 27 52 27
              Z
            "
            fill={`url(#${rnGradId})`}
          />

          {/* 4-Point Sparkle Star */}
          <path
            d="
              M 73 14
              Q 73 21 66 21
              Q 73 21 73 28
              Q 73 21 80 21
              Q 73 21 73 14
              Z
            "
            fill={`url(#${starGradId})`}
          />
        </svg>
      </div>

      {/* Brand Text Block */}
      {showText && (
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Subtle vertical separator line */}
          <div className="h-6 sm:h-7 w-[1.5px] bg-theme-border opacity-80" />

          {/* Brand Name & Tagline */}
          <div className="flex flex-col text-left leading-tight">
            <span className="text-sm sm:text-base font-bold tracking-tight text-theme-text transition-colors">
              Rashmishara{' '}
              <span className="bg-gradient-to-r from-[#00E5FF] via-[#38BDF8] to-[#A855F7] bg-clip-text text-transparent font-extrabold">
                Nawodani
              </span>
            </span>
            <span className="text-[8px] sm:text-[9.5px] font-semibold tracking-[0.24em] text-theme-secondary mt-0.5 uppercase">
              IT Undergraduate
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Logo
