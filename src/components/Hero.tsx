import type { Variants } from 'motion/react'
import { motion } from 'motion/react'
import { Mail, ArrowRight, Download, User } from 'lucide-react'

// TODO: Replace these placeholder constants with your actual links and email address
const GITHUB_URL = 'https://github.com/shara-kmrn'
const LINKEDIN_URL = 'https://www.linkedin.com/in/rashmishara-nawodani-731093349?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
const EMAIL_ADDRESS = 'mailto:[rashmishara1202@gmail.com]'

// Custom Brand SVG Icons (Lucide core does not include brand logos)
const GithubIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
)

const LinkedinIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
  </svg>
)

export const Hero = () => {
  // Staggered animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-hidden bg-grid-lines"
    >
      {/* Graphic background shape accents (Pivlasar Hirva / Neon Lime glow) */}
      <div className="absolute top-1/4 left-1/12 w-72 h-72 bg-[#CCFF00]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/12 w-80 h-80 bg-[#CCFF00]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column — Intro & Call-To-Action */}
        <motion.div
          className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 1. Greeting & Tags */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#CCFF00] bg-[#CCFF00]/10 px-3 py-1 rounded-full border border-[#CCFF00]/30">
              Hello, I'm
            </span>
            <span className="tag-neon">Product Design</span>
            <span className="tag-neon">UI/UX</span>
          </motion.div>

          {/* 2. Main Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-theme-text"
          >
            Rashmi Shara
          </motion.h1>

          {/* 3. Main Title with Highlight Strip */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#CCFF00] highlight-strip-neon pl-4"
          >
            Software Engineering Undergraduate
          </motion.h2>

          {/* 4. Supporting Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-theme-secondary max-w-xl leading-relaxed"
          >
            I'm an Information Technology undergraduate at the University of Moratuwa with a passion for building practical, user-focused software solutions and exploring modern technologies.
          </motion.p>

          {/* 5. CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-3.5 pt-2 w-full sm:w-auto"
          >
            {/* Primary CTA Button (Pivlasar Hirva / Neon Lime #CCFF00) */}
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider btn-neon-lime focus:outline-none focus:ring-2 focus:ring-[#CCFF00] cursor-pointer"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>

            {/* Secondary CTA Button (Rich Dark Slate #18181B) */}
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-xs uppercase tracking-wider btn-dark-slate focus:outline-none focus:ring-2 focus:ring-[#CCFF00] cursor-pointer shadow-xs"
            >
              <Download className="w-4 h-4 text-[#A0A6AD]" aria-hidden="true" />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* 6. Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 pt-2"
          >
            {/* GitHub Link */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile (opens in new tab)"
              className="p-2.5 rounded-lg text-theme-secondary hover:text-[#CCFF00] bg-theme-card border border-theme-border hover:border-[#CCFF00]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            {/* LinkedIn Link */}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile (opens in new tab)"
              className="p-2.5 rounded-lg text-theme-secondary hover:text-[#CCFF00] bg-theme-card border border-theme-border hover:border-[#CCFF00]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            {/* Email Link */}
            <a
              href={EMAIL_ADDRESS}
              aria-label="Send Email to Rashmi Shara"
              className="p-2.5 rounded-lg text-theme-secondary hover:text-[#CCFF00] bg-theme-card border border-theme-border hover:border-[#CCFF00]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column — Profile Image & Graphic Frame */}
        <motion.div
          className="md:col-span-5 flex justify-center items-center mt-6 md:mt-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Card Background (#18181B / #FFFFFF) with graphic accent background shapes */}
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl border border-theme-border bg-theme-card shadow-xl flex flex-col items-center justify-center p-6 text-center overflow-hidden group hover:border-[#CCFF00]/40 transition-colors">
            {/* Graphic shapes inside card */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#CCFF00]/20 rounded-full blur-xl group-hover:bg-[#CCFF00]/30 transition-all" />
            <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-[#CCFF00]/10 rounded-full blur-lg" />

            <div className="relative z-10 w-20 h-20 rounded-full bg-[#CCFF00]/10 flex items-center justify-center text-[#CCFF00] mb-3 border border-[#CCFF00]/30 shadow-[0_0_15px_rgba(204,255,0,0.2)]">
              <User className="w-10 h-10" aria-hidden="true" />
            </div>
            <p className="relative z-10 text-sm font-bold text-theme-text">Profile Photo</p>
            <p className="relative z-10 text-xs text-theme-secondary mt-1">Software Engineering & UI/UX</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
