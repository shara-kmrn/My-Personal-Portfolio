import type { Variants } from 'motion/react'
import { motion } from 'motion/react'
import { Code2, Layout, Smartphone, Sparkles, UserCheck, GraduationCap, Compass, Lightbulb } from 'lucide-react'

export const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const highlights = [
    { icon: GraduationCap, label: 'IT Undergraduate' },
    { icon: UserCheck, label: 'Software Engineering Focus' },
    { icon: Compass, label: 'Full-Stack Development' },
    { icon: Lightbulb, label: 'Continuous Learner' },
  ]

  const focusAreas = [
    {
      icon: Layout,
      title: 'UI/UX Design',
      tag: 'Product Design',
      description: 'Designing intuitive, accessible, and visually stunning digital interfaces.',
    },
    {
      icon: Smartphone,
      title: 'App Design',
      tag: 'Mobile & Web',
      description: 'Creating smooth, responsive mobile and web applications.',
    },
    {
      icon: Code2,
      title: 'Software Engineering',
      tag: 'Architecture',
      description: 'Building practical, robust, and maintainable software solutions.',
    },
    {
      icon: Sparkles,
      title: 'Continuous Learning',
      tag: 'Innovation',
      description: 'Exploring new technologies, design trends, and technical concepts.',
    },
  ]

  return (
    <section
      id="about"
      className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-hidden border-t border-theme-border"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-8"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="space-y-2">
          <span className="tag-neon">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-theme-text pt-2 highlight-strip-neon pl-4">
            Building Practical & User-Focused Software
          </h2>
        </motion.div>

        {/* Desktop 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Bio Paragraphs & Highlights */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-theme-secondary leading-relaxed">
              <p>
                I'm an Information Technology undergraduate at the University of Moratuwa with a strong interest in software engineering and building practical, user-focused applications. I enjoy turning ideas into functional solutions while continuously learning new technologies and improving my problem-solving skills.
              </p>
              <p>
                My interests include full-stack web development, application design, UI/UX design, and exploring modern software technologies. Through academic and personal projects, I have gained hands-on experience in developing applications, working with databases and APIs, and collaborating as part of software development teams.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="pt-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-theme-secondary mb-3">
                Key Background & Focus
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {highlights.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <div
                      key={item.label}
                      className="p-3.5 rounded-xl bg-theme-card border border-theme-border flex flex-col items-start space-y-2 shadow-sm hover:border-theme-accent/40 transition-colors"
                    >
                      <IconComponent className="w-5 h-5 text-theme-accent" aria-hidden="true" />
                      <span className="text-xs font-semibold text-theme-text leading-snug">
                        {item.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Focus Areas */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-theme-card border border-theme-border shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-theme-border pb-3">
                <h3 className="text-lg font-bold text-theme-text">What I Focus On</h3>
                <span className="text-xs font-semibold text-theme-accent">UI/UX & App Design</span>
              </div>

              <div className="space-y-3.5">
                {focusAreas.map((area) => {
                  const Icon = area.icon
                  return (
                    <div
                      key={area.title}
                      className="p-4 rounded-xl bg-theme-bg/60 border border-theme-border hover:border-theme-accent/40 transition-all space-y-2 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded-lg bg-theme-accent/10 text-theme-accent border border-theme-accent/20 group-hover:bg-theme-accent group-hover:text-theme-bg transition-colors">
                            <Icon className="w-4 h-4" aria-hidden="true" />
                          </div>
                          <h4 className="text-sm font-bold text-theme-text">{area.title}</h4>
                        </div>
                        <span className="tag-neon">{area.tag}</span>
                      </div>
                      <p className="text-xs text-theme-secondary leading-normal pl-9">
                        {area.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
