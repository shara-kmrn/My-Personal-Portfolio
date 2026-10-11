import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Sparkles, Terminal, Zap, FastForward, Volume2, VolumeX, MousePointerClick } from 'lucide-react'

interface LoadingScreenProps {
  onComplete: () => void
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  baseAlpha: number
  hue: number // 180 (cyan) to 270 (purple)
}

interface ClickSpark {
  id: number
  x: number
  y: number
  text?: string
}

interface Shockwave {
  x: number
  y: number
  radius: number
  maxRadius: number
  alpha: number
  color: string
}

// System initialization log stages
const TERMINAL_LOGS = [
  { threshold: 0, text: '[SYS] Initializing portfolio neural matrix...', icon: '⚡' },
  { threshold: 22, text: '[KERNEL] Booting React 19 & TailwindCSS engine...', icon: '⚙️' },
  { threshold: 48, text: '[DATA] Fetching UoM IT credentials & project logs...', icon: '📂' },
  { threshold: 72, text: '[UI] Calibrating dynamic cyber theme & shaders...', icon: '✨' },
  { threshold: 92, text: '[READY] All subsystems operational. Launching...', icon: '🚀' },
]

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [boostCount, setBoostCount] = useState(0)
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [currentLog, setCurrentLog] = useState(TERMINAL_LOGS[0].text)
  const [clickSparks, setClickSparks] = useState<ClickSpark[]>([])
  const [isFinishing, setIsFinishing] = useState(false)

  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mousePos = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 })
  const shockwavesRef = useRef<Shockwave[]>([])
  const audioCtxRef = useRef<AudioContext | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const progressRef = useRef(0)

  // Web Audio synthesizer for futuristic click/blip sounds
  const playFuturisticTone = useCallback((freq = 480, duration = 0.08) => {
    if (!soundEnabled) return
    try {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtxClass()
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume()
      }
      const ctx = audioCtxRef.current
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(freq * 1.6, ctx.currentTime + duration)

      gain.gain.setValueAtTime(0.04, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start()
      osc.stop(ctx.currentTime + duration)
    } catch {
      // Audio might be blocked by autoplay policies
    }
  }, [soundEnabled])

  // Complete preloader transition
  const finishLoading = useCallback(() => {
    if (isFinishing) return
    setIsFinishing(true)
    setProgress(100)
    progressRef.current = 100
    playFuturisticTone(880, 0.2)

    setTimeout(() => {
      onComplete()
    }, 600)
  }, [isFinishing, onComplete, playFuturisticTone])

  // Handle click to accelerate progress & trigger energetic sparks
  const handleScreenClick = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (isFinishing) return

    let clientX = 0
    let clientY = 0

    if ('touches' in e) {
      if (e.touches.length > 0) {
        clientX = e.touches[0].clientX
        clientY = e.touches[0].clientY
      }
    } else {
      clientX = e.clientX
      clientY = e.clientY
    }

    // Boost progress by 12% per click
    const boostAmount = 14
    const nextProgress = Math.min(100, progressRef.current + boostAmount)
    progressRef.current = nextProgress
    setProgress(nextProgress)
    setBoostCount((prev) => prev + 1)

    // Trigger shockwave in particle canvas
    const colors = ['#00F2FE', '#38BDF8', '#8B5CF6']
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    shockwavesRef.current.push({
      x: clientX,
      y: clientY,
      radius: 5,
      maxRadius: 120,
      alpha: 0.9,
      color: randomColor,
    })

    // Floating UI Badge (+14% Boost!)
    const sparkId = Date.now() + Math.random()
    setClickSparks((prev) => [
      ...prev.slice(-6),
      { id: sparkId, x: clientX, y: clientY, text: `+${boostAmount}% BOOST! ⚡` },
    ])

    // Cleanup spark after 800ms
    setTimeout(() => {
      setClickSparks((prev) => prev.filter((s) => s.id !== sparkId))
    }, 850)

    playFuturisticTone(520 + boostCount * 25, 0.1)

    if (nextProgress >= 100) {
      finishLoading()
    }
  }

  // Keyboard shortcut: Space or Escape to skip
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'Escape' || e.code === 'Enter') {
        e.preventDefault()
        finishLoading()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [finishLoading])

  // Natural steady progress timer
  useEffect(() => {
    const interval = setInterval(() => {
      if (progressRef.current >= 100) {
        clearInterval(interval)
        finishLoading()
        return
      }

      // Smooth step (~3.5 seconds natural duration if not boosted)
      const step = Math.random() * 1.5 + 0.8
      const updated = Math.min(100, progressRef.current + step)
      progressRef.current = updated
      setProgress(Math.floor(updated))

      // Update terminal log based on threshold
      for (let i = TERMINAL_LOGS.length - 1; i >= 0; i--) {
        if (updated >= TERMINAL_LOGS[i].threshold) {
          setCurrentLog(TERMINAL_LOGS[i].text)
          break
        }
      }

      if (updated >= 100) {
        clearInterval(interval)
        setTimeout(() => {
          finishLoading()
        }, 350)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [finishLoading])

  // Interactive Particle Net Canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Generate particles
    const particleCount = Math.min(65, Math.floor((width * height) / 18000))
    const particles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.9,
        vy: (Math.random() - 0.5) * 0.9,
        size: Math.random() * 2 + 1,
        baseAlpha: Math.random() * 0.45 + 0.25,
        hue: Math.random() > 0.5 ? 185 : 265, // Cyan or Purple
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove)

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // 1. Draw Shockwaves from user clicks
      for (let i = shockwavesRef.current.length - 1; i >= 0; i--) {
        const sw = shockwavesRef.current[i]
        sw.radius += 4
        sw.alpha -= 0.025

        if (sw.alpha <= 0 || sw.radius >= sw.maxRadius) {
          shockwavesRef.current.splice(i, 1)
          continue
        }

        ctx.beginPath()
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2)
        ctx.strokeStyle = sw.color
        ctx.globalAlpha = sw.alpha
        ctx.lineWidth = 2
        ctx.shadowColor = sw.color
        ctx.shadowBlur = 12
        ctx.stroke()
        ctx.shadowBlur = 0
        ctx.globalAlpha = 1
      }

      // 2. Update and draw particles
      const mx = mousePos.current.x
      const my = mousePos.current.y

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        // Screen wrap
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        // Mouse interaction: attract or repel slightly
        const dx = mx - p.x
        const dy = my - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const interactionRadius = 140

        if (dist < interactionRadius) {
          const force = (interactionRadius - dist) / interactionRadius
          p.x -= (dx / dist) * force * 1.5
          p.y -= (dy / dist) * force * 1.5
        }

        // Draw particle node
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.hue === 185 ? '#00F2FE' : '#8B5CF6'
        ctx.globalAlpha = p.baseAlpha
        ctx.fill()

        // Connect nearby particles with luminous cyber lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const pDist = Math.hypot(p.x - p2.x, p.y - p2.y)
          if (pDist < 100) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = p.hue === 185 ? 'rgba(0, 242, 254, 0.22)' : 'rgba(139, 92, 246, 0.22)'
            ctx.lineWidth = 0.75 * (1 - pDist / 100)
            ctx.stroke()
          }
        }

        // Connect particle to mouse if close
        if (dist < interactionRadius) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mx, my)
          ctx.strokeStyle = 'rgba(0, 242, 254, 0.35)'
          ctx.lineWidth = 1 * (1 - dist / interactionRadius)
          ctx.stroke()
        }
      }

      ctx.globalAlpha = 1
      animationFrameRef.current = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: 'blur(12px)',
        transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#080915] text-white select-none overflow-hidden cursor-pointer"
      onClick={handleScreenClick}
      onTouchStart={handleScreenClick}
    >
      {/* 1. Interactive WebGL/Canvas Particle System */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* 2. Ambient Cyber Grid & Glow Orbs */}
      <div className="absolute inset-0 bg-grid-lines opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00F2FE]/10 rounded-full blur-[110px] pointer-events-none animate-glow-drift-1" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[110px] pointer-events-none animate-glow-drift-2" />

      {/* 3. Floating Click Spurt Badges */}
      <AnimatePresence>
        {clickSparks.map((spark) => (
          <motion.div
            key={spark.id}
            initial={{ opacity: 1, scale: 0.7, y: 0 }}
            animate={{ opacity: 0, scale: 1.25, y: -45 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            style={{ left: spark.x, top: spark.y }}
            className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 font-mono font-extrabold text-xs sm:text-sm text-[#00F2FE] drop-shadow-[0_0_12px_rgba(0,242,254,0.8)] bg-black/70 px-2.5 py-1 rounded-full border border-[#00F2FE]/50 shadow-lg"
          >
            {spark.text}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* 4. Top Header Bar (Controls, Sound & Skip) */}
      <header className="relative z-10 w-full max-w-6xl px-6 py-6 flex items-center justify-between text-xs font-mono">
        {/* Left: Interactive Status Pill */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-inner">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F2FE] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F2FE]" />
          </span>
          <span className="text-gray-300 font-medium tracking-wide">
            PORTFOLIO BOOT {progress}%
          </span>
        </div>

        {/* Right: Sound Toggle + Skip CTA */}
        <div className="flex items-center gap-3">
          {/* Sound Toggle */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setSoundEnabled(!soundEnabled)
              if (!soundEnabled) playFuturisticTone(650, 0.1)
            }}
            title={soundEnabled ? 'Mute Sound' : 'Enable Cyber Sound FX'}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00F2FE]/40 text-gray-300 hover:text-[#00F2FE] transition-colors focus:outline-none"
            aria-label="Toggle Sound"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Skip CTA Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              finishLoading()
            }}
            className="group flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 hover:bg-[#00F2FE]/15 border border-white/10 hover:border-[#00F2FE]/50 text-gray-300 hover:text-white transition-all shadow-sm focus:outline-none cursor-pointer"
          >
            <span className="text-[11px] tracking-wider uppercase font-semibold">Skip Intro</span>
            <span className="text-[10px] text-gray-500 group-hover:text-[#00F2FE] hidden sm:inline">[Space]</span>
            <FastForward className="w-3.5 h-3.5 text-[#00F2FE] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </header>

      {/* 5. Center Hero Core: Animated Monogram & Interactive Pulse */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-lg w-full">
        {/* Monogram with Multi-layer Rotating Glow Rings */}
        <div className="relative mb-7 flex items-center justify-center">
          {/* Outer Dashed Orbit Ring */}
          <div className="absolute -inset-6 rounded-full border border-dashed border-[#00F2FE]/30 animate-spin [animation-duration:20s] pointer-events-none" />
          
          {/* Reverse Orbit Ring */}
          <div className="absolute -inset-3.5 rounded-full border border-dotted border-[#8B5CF6]/35 animate-spin [animation-duration:14s] [animation-direction:reverse] pointer-events-none" />
          
          {/* Radial Aura Glow */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#00F2FE]/25 via-[#3B82F6]/25 to-[#8B5CF6]/25 blur-xl animate-pulse" />

          {/* Central Logo Box */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#0F1123]/90 border border-white/15 p-4 flex items-center justify-center shadow-2xl backdrop-blur-xl group hover:scale-105 transition-transform duration-300">
            {/* Custom SVG RN Monogram */}
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-[0_0_15px_rgba(0,242,254,0.55)]"
            >
              <defs>
                <linearGradient id="loaderRNGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F2FE" />
                  <stop offset="40%" stopColor="#38BDF8" />
                  <stop offset="80%" stopColor="#8B5CF6" />
                </linearGradient>
                <linearGradient id="loaderStarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F2FE" />
                  <stop offset="100%" stopColor="#38BDF8" />
                </linearGradient>
              </defs>

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
                fill="url(#loaderRNGrad)"
              />

              <path
                d="
                  M 73 14
                  Q 73 21 66 21
                  Q 73 21 73 28
                  Q 73 21 80 21
                  Q 73 21 73 14
                  Z
                "
                fill="url(#loaderStarGrad)"
              />
            </svg>
          </div>
        </div>

        {/* Brand Name & Identity */}
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Rashmishara{' '}
          <span className="bg-gradient-to-r from-[#00F2FE] via-[#38BDF8] to-[#8B5CF6] bg-clip-text text-transparent">
            Nawodani
          </span>
        </h1>
        <p className="text-xs sm:text-sm font-medium text-gray-400 mt-1 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#00F2FE]" />
          <span>IT Undergraduate • University of Moratuwa</span>
        </p>

        {/* Large Percentage Digital Counter */}
        <div className="mt-8 flex items-baseline justify-center font-mono">
          <span className="text-5xl sm:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#00F2FE]">
            {progress.toString().padStart(3, '0')}
          </span>
          <span className="text-xl sm:text-2xl font-bold text-[#00F2FE] ml-1">%</span>
        </div>

        {/* High-Tech Glowing Progress Bar */}
        <div className="w-full mt-4">
          <div className="relative w-full h-2 sm:h-2.5 rounded-full bg-white/10 p-0.5 overflow-hidden border border-white/15 shadow-inner">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#00F2FE] via-[#3B82F6] to-[#8B5CF6] relative"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            >
              {/* Radiant Leading Edge Glow Tip */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white blur-[2px] shadow-[0_0_15px_#00F2FE]" />
            </motion.div>
          </div>

          {/* Progress Indicators Bar */}
          <div className="flex justify-between items-center text-[10px] font-mono text-gray-500 mt-1.5 px-0.5">
            <span>0%</span>
            <span>25%</span>
            <span>50%</span>
            <span>75%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Terminal Boot Log Output */}
        <div className="w-full mt-6 bg-[#0E1020]/80 border border-white/10 rounded-xl px-4 py-3 font-mono text-left shadow-lg backdrop-blur-md">
          <div className="flex items-center gap-2 pb-2 mb-2 border-b border-white/5 text-[11px] text-gray-400">
            <Terminal className="w-3.5 h-3.5 text-[#00F2FE]" />
            <span className="text-gray-300 font-semibold">Console Stream</span>
            <span className="ml-auto text-[9.5px] text-[#00F2FE]/80">LIVE</span>
          </div>
          <div className="text-xs text-gray-300 truncate flex items-center gap-2">
            <span className="text-[#00F2FE] shrink-0">{'>'}</span>
            <span className="truncate">{currentLog}</span>
            <span className="inline-block w-1.5 h-3.5 bg-[#00F2FE] animate-pulse ml-0.5" />
          </div>
        </div>

        {/* Interactive Clicker Hint Badge */}
        <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F2FE]/10 border border-[#00F2FE]/25 text-[#00F2FE] text-xs font-medium animate-pulse hover:bg-[#00F2FE]/20 transition-all cursor-pointer">
          <MousePointerClick className="w-3.5 h-3.5" />
          <span>Click anywhere to boost loading speed!</span>
          {boostCount > 0 && (
            <span className="ml-1 px-1.5 py-0.5 rounded-full bg-[#00F2FE]/20 text-[10px] font-bold">
              ⚡ {boostCount}x
            </span>
          )}
        </div>
      </main>

      {/* 6. Footer Information */}
      <footer className="relative z-10 w-full max-w-6xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-gray-500 gap-2">
        <div className="flex items-center gap-2">
          <Zap className="w-3.5 h-3.5 text-[#00F2FE]" />
          <span>Interactive Canvas Particles & Sound System</span>
        </div>
        <div className="text-center sm:text-right text-gray-400">
          <span>Software Engineering & Web Development</span>
        </div>
      </footer>
    </motion.div>
  )
}

export default LoadingScreen
