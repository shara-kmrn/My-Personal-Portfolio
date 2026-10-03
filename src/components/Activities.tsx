import type { Variants } from 'motion/react'
import { motion } from 'motion/react'
import { Users, Briefcase, Mountain, Trophy, Building2, CheckCircle2, Award } from 'lucide-react'
import { activitiesData, activitySkills } from '../data/activities'
import type { Activity } from '../data/activities'

const ACTIVITY_ICONS = {
  users: Users,
  briefcase: Briefcase,
  mountain: Mountain,
  trophy: Trophy,
} as const

export const Activities = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
      id="activities"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-hidden border-t border-[#24292E]"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="space-y-12"
      >
        {/* Section Header */}
        <motion.div variants={cardVariants} className="space-y-2">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#CCFF00] bg-[#CCFF00]/10 px-3 py-1 rounded-full border border-[#CCFF00]/30">
            Beyond Academics
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white pt-2 highlight-strip-neon pl-4">
            Activities & Leadership
          </h2>
          <p className="text-base sm:text-lg text-[#A0A6AD] max-w-3xl pt-1 leading-relaxed">
            I value teamwork, collaboration, and taking responsibility beyond technical projects. My involvement in university clubs, organizing teams, and sports has helped me develop communication, coordination, and leadership skills.
          </p>
        </motion.div>

        {/* Activity Cards 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {activitiesData.map((activity: Activity) => {
            const IconComponent = ACTIVITY_ICONS[activity.iconType] || Award

            return (
              <motion.div
                key={activity.id}
                variants={cardVariants}
                className="p-6 sm:p-7 rounded-2xl bg-[#1A1D20] border border-[#24292E] shadow-xl flex flex-col justify-between space-y-5 transition-all duration-300 hover:border-[#CCFF00]/40 hover:shadow-[0_0_20px_rgba(204,255,0,0.08)] group"
              >
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-center space-x-3.5 border-b border-[#24292E] pb-4">
                    <div className="p-3 rounded-xl bg-[#CCFF00]/10 text-[#CCFF00] border border-[#CCFF00]/20 group-hover:bg-[#CCFF00] group-hover:text-[#0D0F11] transition-colors shrink-0">
                      <IconComponent className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#CCFF00] transition-colors">
                        {activity.organization}
                      </h3>
                      {activity.institution && (
                        <p className="text-xs text-[#A0A6AD] flex items-center gap-1 mt-0.5 font-medium">
                          <Building2 className="w-3.5 h-3.5 text-[#CCFF00]" aria-hidden="true" />
                          <span>{activity.institution}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Roles List */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A0A6AD]">
                      Position / Contribution
                    </span>
                    <ul className="space-y-2">
                      {activity.roles.map((role) => (
                        <li key={role} className="flex items-start gap-2 text-xs sm:text-sm text-white font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="leading-snug">{role}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Skills Developed Supporting Area */}
        <motion.div
          variants={cardVariants}
          className="p-6 rounded-2xl bg-[#1A1D20]/60 border border-[#24292E] space-y-3"
        >
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#A0A6AD] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#CCFF00]" />
            Skills Developed
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {activitySkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#0D0F11] border border-[#24292E] hover:text-[#CCFF00] hover:border-[#CCFF00]/40 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Activities
