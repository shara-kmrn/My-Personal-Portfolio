import type { Variants } from 'motion/react'
import { motion } from 'motion/react'
import { GraduationCap, Building2, Calendar, BookOpen, CheckCircle2 } from 'lucide-react'
import { educationData } from '../data/education'

export const Education = () => {
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

  return (
    <section
      id="education"
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
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-theme-text pt-2 highlight-strip-neon pl-4">
            Academic Qualifications & Coursework
          </h2>
        </motion.div>

        {/* Education Entries */}
        <div className="space-y-6">
          {educationData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="p-6 sm:p-8 rounded-2xl bg-theme-card border border-theme-border shadow-xl space-y-6 transition-all hover:border-theme-accent/30"
            >
              {/* Card Top: Degree & Institution Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-theme-border pb-6">
                <div className="flex items-start gap-4">
                  {item.logo ? (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-2 border border-theme-border flex items-center justify-center shrink-0 overflow-hidden shadow-md">
                      <img
                        src={item.logo}
                        alt={`${item.institution} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-theme-accent/10 border border-theme-accent/20 flex items-center justify-center shrink-0 text-theme-accent">
                      <GraduationCap className="w-8 h-8" aria-hidden="true" />
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-theme-text tracking-tight">
                      {item.degree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-sm text-theme-secondary">
                      <span className="inline-flex items-center gap-1.5 font-medium text-theme-text">
                        <Building2 className="w-4 h-4 text-theme-accent" aria-hidden="true" />
                        {item.institution}
                      </span>
                      {item.faculty && (
                        <span className="text-theme-secondary">
                          • {item.faculty}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Academic Period Badge */}
                <div className="shrink-0 self-start md:self-auto">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-theme-bg border border-theme-border text-theme-secondary">
                    <Calendar className="w-3.5 h-3.5 text-theme-accent" aria-hidden="true" />
                    {item.period}
                  </span>
                </div>
              </div>

              {/* Coursework Section */}
              {item.coursework && item.coursework.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-theme-text">
                    <BookOpen className="w-4 h-4 text-theme-accent" aria-hidden="true" />
                    <span>Relevant Coursework</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {item.coursework.filter((c) => Boolean(c && c.trim())).map((course) => (
                      <div
                        key={course}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-theme-bg/60 border border-theme-border text-xs font-medium text-theme-text"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0" aria-hidden="true" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Education
