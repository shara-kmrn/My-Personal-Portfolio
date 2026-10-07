import type { Variants } from 'motion/react'
import { motion } from 'motion/react'
import { Code2, Server, Database, Braces, Wrench } from 'lucide-react'
import type { IconType } from 'react-icons'
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiSharp,
  SiC,
  SiNextdotjs,
  SiReact,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiJira,
  SiPostman,
  SiFigma,
  SiDocker,
} from 'react-icons/si'
import { FaJava, FaDatabase } from 'react-icons/fa6'
import { TbApi } from 'react-icons/tb'
import { skillCategories } from '../data/skills'

const SKILL_CATEGORY_ICONS = {
  frontend: Code2,
  backend: Server,
  database: Database,
  languages: Braces,
  tools: Wrench,
} as const

const SKILL_ICONS: Record<string, IconType> = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  python: SiPython,
  csharp: SiSharp,
  java: FaJava,
  c: SiC,
  nextjs: SiNextdotjs,
  react: SiReact,
  html: SiHtml5,
  css: SiCss,
  tailwindcss: SiTailwindcss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  restapi: TbApi,
  mysql: SiMysql,
  mssql: FaDatabase,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  git: SiGit,
  github: SiGithub,
  agile: SiJira,
  postman: SiPostman,
  figma: SiFigma,
  docker: SiDocker,
}

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
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-hidden border-t border-theme-border"
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
          <span className="tag-neon">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-theme-text pt-2 highlight-strip-neon pl-4">
            Technical Expertise & Tools
          </h2>
          <p className="text-base sm:text-lg text-theme-secondary max-w-2xl pt-1">
            Technologies and tools I use to build modern, scalable, and user-focused applications.
          </p>
        </motion.div>

        {/* Categories Grid (1 col mobile, 2 cols tablet, 3 cols desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {skillCategories.map((category) => {
            const IconComponent = SKILL_CATEGORY_ICONS[category.iconName as keyof typeof SKILL_CATEGORY_ICONS] || Code2

            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
                className="p-6 rounded-2xl bg-theme-card border border-theme-border shadow-xl flex flex-col justify-between space-y-5 transition-all duration-200 hover:border-theme-accent/40 group"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 border-b border-theme-border pb-4">
                  <div className="p-2.5 rounded-xl bg-theme-accent/10 text-theme-accent border border-theme-accent/20 group-hover:bg-theme-accent group-hover:text-theme-bg transition-colors shrink-0">
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-theme-text tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Badges List */}
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {category.skills.map((skill) => {
                    const SkillIcon = SKILL_ICONS[skill.iconKey]

                    return (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-theme-text bg-theme-bg border border-theme-border hover:border-theme-accent/50 hover:bg-theme-bg/80 transition-all cursor-default group/badge shadow-sm"
                      >
                        {SkillIcon && (
                          <SkillIcon
                            className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 group-hover/badge:scale-110 transition-transform"
                            style={{ color: skill.color }}
                            aria-hidden="true"
                          />
                        )}
                        <span>{skill.name}</span>
                      </div>
                    )
                  })}
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
