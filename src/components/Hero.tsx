import type { Variants } from 'motion/react'
import { motion } from 'motion/react'
import { Mail, ArrowRight, Download, User, Terminal, Sparkles } from 'lucide-react'
import profileImg from '../assets/profilephoto.png'
const PROFILE_IMAGE_URL: string | null = profileImg

const GITHUB_URL = 'https://github.com/shara-kmrn'
const LINKEDIN_URL = 'https://www.linkedin.com/in/rashmishara-nawodani-731093349'
const MEDIUM_URL = 'https://medium.com/@rashmishara1202'
const EMAIL_ADDRESS = 'mailto:rashmishara1202@gmail.com'
const CV_URL = '/Rashmishara Nawodani SE intern.pdf'

// Custom Brand SVG Icons
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

const MediumIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM18.84 12c0 3.56-1.5 6.45-3.34 6.45s-3.34-2.89-3.34-6.45 1.5-6.45 3.34-6.45 3.34 2.89 3.34 6.45zm4.84 0c0 3.06-.5 5.54-1.12 5.54s-1.12-2.48-1.12-5.54.5-5.54 1.12-5.54 1.12 2.48 1.12 5.54z" />
  </svg>
)

export const Hero = () => {
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
      className="relative flex items-center justify-center py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-hidden"
    >
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/12 w-72 h-72 bg-theme-accent/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/12 w-80 h-80 bg-theme-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column — Intro & Call-To-Action */}
        <motion.div
          className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 1. Status Badge & Tags */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span className="text-xs font-bold tracking-wider uppercase text-theme-accent bg-theme-accent/10 px-3 py-1 rounded-full border border-theme-accent/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Hi, I'm Rashmishara Nawodani</span>
            </span>
            <span className="tag-neon">IT Undergraduate @ UoM</span>
          </motion.div>

          {/* 2. Main Name & Headline */}
          <motion.div variants={itemVariants} className="space-y-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-theme-text">
              Rashmishara <span className="text-cyber-gradient">Nawodani</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-theme-accent tracking-tight highlight-strip-neon pl-4 mt-2">
              Aspiring Software Engineer
            </h2>
          </motion.div>

          {/* 3. Short Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-theme-secondary max-w-xl leading-relaxed"
          >
            I am an Information Technology undergraduate at the University of Moratuwa with a passion for software development, problem-solving, and building intuitive, practical digital experiences.
          </motion.p>

          {/* 4. Code-Inspired Accent Snippet */}
          <motion.div
            variants={itemVariants}
            className="p-3 rounded-xl bg-theme-card/80 border border-theme-border font-mono text-xs text-theme-secondary flex items-center gap-3 shadow-sm max-w-md w-full sm:w-auto"
          >
            <Terminal className="w-4 h-4 text-theme-accent shrink-0" />
            <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="text-theme-accent font-semibold">status:</span>
              <span className="text-theme-text font-medium">Ready for Software Engineering Internships</span>
            </div>
          </motion.div>

          {/* 5. CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-3.5 pt-2 w-full sm:w-auto"
          >
            {/* Primary CTA Button (Cyber Cyan-to-Purple Gradient) */}
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider btn-neon-lime focus:outline-none focus:ring-2 focus:ring-theme-accent cursor-pointer"
            >
              <span>Explore My Projects</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>

            {/* Secondary CTA Button */}
            <a
              href={CV_URL}
              download="Rashmishara Nawodani SE intern.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Rashmishara Nawodani's CV (PDF)"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider btn-dark-slate focus:outline-none focus:ring-2 focus:ring-theme-accent cursor-pointer"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* 6. Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 pt-2"
          >
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile (opens in new tab)"
              className="p-3 rounded-full text-theme-secondary hover:text-theme-accent bg-theme-card border border-theme-border hover:border-theme-accent/40 transition-all focus:outline-none focus:ring-2 focus:ring-theme-accent"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile (opens in new tab)"
              className="p-3 rounded-full text-theme-secondary hover:text-theme-accent bg-theme-card border border-theme-border hover:border-theme-accent/40 transition-all focus:outline-none focus:ring-2 focus:ring-theme-accent"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href={MEDIUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium Profile (opens in new tab)"
              className="p-3 rounded-full text-theme-secondary hover:text-theme-accent bg-theme-card border border-theme-border hover:border-theme-accent/40 transition-all focus:outline-none focus:ring-2 focus:ring-theme-accent"
            >
              <MediumIcon className="w-5 h-5" />
            </a>

            <a
              href={EMAIL_ADDRESS}
              aria-label="Send Email to Rashmishara Nawodani"
              className="p-3 rounded-full text-theme-secondary hover:text-theme-accent bg-theme-card border border-theme-border hover:border-theme-accent/40 transition-all focus:outline-none focus:ring-2 focus:ring-theme-accent"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column — Circular Cyber Glowing Profile Avatar (matching image) */}
        <motion.div
          className="md:col-span-5 flex justify-center items-center mt-6 md:mt-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Cyber Glowing Outer Ring */}
          <div className="relative p-1.5 rounded-full cyber-avatar-ring group transition-all duration-500">
            {/* Inner Profile Image Frame */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-84 lg:h-84 rounded-full border-2 border-theme-border/80 bg-theme-card overflow-hidden flex flex-col items-center justify-center shadow-2xl">
              {PROFILE_IMAGE_URL ? (
                <img
                  src={PROFILE_IMAGE_URL}
                  alt="Rashmishara Nawodani - Profile Photo"
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500 relative z-10"
                />
              ) : (
                <div className="relative z-10 p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 rounded-full bg-theme-accent/10 flex items-center justify-center text-theme-accent mb-3 border border-theme-accent/30 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <User className="w-12 h-12" aria-hidden="true" />
                  </div>
                  <p className="text-base font-bold text-theme-text">Rashmishara Nawodani</p>
                  <p className="text-xs font-medium text-theme-secondary mt-1">Aspiring Software Engineer</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
