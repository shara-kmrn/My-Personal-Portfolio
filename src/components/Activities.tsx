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
        <motion.div variants={cardVariants} className="space-y-2">
          <span className="tag-neon">
            Beyond Academics
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-theme-text pt-2 highlight-strip-neon pl-4">
            Activities & Leadership
          </h2>
          <p className="text-base sm:text-lg text-theme-secondary max-w-3xl pt-1 leading-relaxed">
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
                className="p-6 sm:p-7 rounded-2xl bg-theme-card border border-theme-border shadow-xl flex flex-col justify-between space-y-5 transition-all duration-300 hover:border-theme-accent/40 group"
              >
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-center space-x-3.5 border-b border-theme-border pb-4">
                    <div className="p-3 rounded-xl bg-theme-accent/10 text-theme-accent border border-theme-accent/20 group-hover:bg-theme-accent group-hover:text-theme-bg transition-colors shrink-0">
                      <IconComponent className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-theme-text tracking-tight group-hover:text-theme-accent transition-colors">
                        {activity.organization}
                      </h3>
                      {activity.institution && (
                        <p className="text-xs text-theme-secondary flex items-center gap-1 mt-0.5 font-medium">
                          <Building2 className="w-3.5 h-3.5 text-theme-accent" aria-hidden="true" />
                          <span>{activity.institution}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Roles List */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-theme-secondary">
                      Position / Contribution
                    </span>
                    <ul className="space-y-2">
                      {activity.roles.map((role) => (
                        <li key={role} className="flex items-start gap-2 text-xs sm:text-sm text-theme-text font-medium">
                          <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" aria-hidden="true" />
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
          className="p-6 rounded-2xl bg-theme-card/60 border border-theme-border space-y-3"
        >
          <h3 className="text-xs font-bold uppercase tracking-wider text-theme-secondary flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-theme-accent" />
            Skills Developed
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {activitySkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-theme-text bg-theme-bg border border-theme-border hover:text-theme-accent hover:border-theme-accent/40 transition-all cursor-default"
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
