import type { Variants } from 'motion/react'
import { motion } from 'motion/react'
import { Code2, Server, Database, Braces, Wrench, Layers } from 'lucide-react'
import { skillCategories } from '../data/skills'

const SKILL_CATEGORY_ICONS = {
  frontend: Code2,
  backend: Server,
  database: Database,
  languages: Braces,
  tools: Wrench,
  concepts: Layers,
} as const

export const Skills = () => {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section
      id="skills"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-hidden border-t border-[#24292E]"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="space-y-10"
      >
        {/* Section Header */}
        <motion.div variants={cardVariants} className="space-y-2">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#CCFF00] bg-[#CCFF00]/10 px-3 py-1 rounded-full border border-[#CCFF00]/30">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white pt-2 highlight-strip-neon pl-4">
            Technical Expertise & Tools
          </h2>
          <p className="text-base sm:text-lg text-[#A0A6AD] max-w-2xl pt-1">
            Technologies and tools I use to build modern, scalable, and user-focused applications.
          </p>
        </motion.div>

        {/* Categories Grid (1 col mobile, 2 cols tablet, 3 cols desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {skillCategories.map((category) => {
            const IconComponent = SKILL_CATEGORY_ICONS[category.iconName] || Code2

            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
                className="p-6 rounded-2xl bg-[#1A1D20] border border-[#24292E] shadow-xl flex flex-col justify-between space-y-5 transition-all duration-200 hover:border-[#CCFF00]/40 hover:shadow-[0_0_20px_rgba(204,255,0,0.08)] group"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 border-b border-[#24292E] pb-4">
                  <div className="p-2.5 rounded-xl bg-[#CCFF00]/10 text-[#CCFF00] border border-[#CCFF00]/20 group-hover:bg-[#CCFF00] group-hover:text-[#0D0F11] transition-colors shrink-0">
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Badges List */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#A0A6AD] bg-[#0D0F11]/70 border border-[#24292E] hover:text-[#CCFF00] hover:border-[#CCFF00]/40 hover:bg-[#0D0F11] transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
