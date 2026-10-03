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
        <motion.div variants={itemVariants} className="space-y-2">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#CCFF00] bg-[#CCFF00]/10 px-3 py-1 rounded-full border border-[#CCFF00]/30">
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white pt-2 highlight-strip-neon pl-4">
            Academic Qualifications & Coursework
          </h2>
        </motion.div>

        {/* Education Entries */}
        <div className="space-y-6">
          {educationData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="p-6 sm:p-8 rounded-2xl bg-[#1A1D20] border border-[#24292E] shadow-xl space-y-6 transition-all hover:border-[#CCFF00]/30"
            >
              {/* Card Top: Degree & Institution Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-[#24292E] pb-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-[#CCFF00] font-semibold text-sm">
                    <GraduationCap className="w-5 h-5 shrink-0" aria-hidden="true" />
                    <span>Higher Education</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {item.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-sm text-[#A0A6AD]">
                    <span className="inline-flex items-center gap-1.5 font-medium text-white">
                      <Building2 className="w-4 h-4 text-[#CCFF00]" aria-hidden="true" />
                      {item.institution}
                    </span>
                    {item.faculty && (
                      <span className="text-[#A0A6AD]">
                        • {item.faculty}
                      </span>
                    )}
                  </div>
                </div>

                {/* Academic Period Badge */}
                <div className="shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#0D0F11] border border-[#24292E] text-[#A0A6AD]">
                    <Calendar className="w-3.5 h-3.5 text-[#CCFF00]" aria-hidden="true" />
                    {item.period}
                  </span>
                </div>
              </div>

              {/* Coursework Section */}
              {item.coursework && item.coursework.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <BookOpen className="w-4 h-4 text-[#CCFF00]" aria-hidden="true" />
                    <span>Relevant Coursework</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {item.coursework.map((course) => (
                      <div
                        key={course}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0D0F11]/60 border border-[#24292E] text-xs font-medium text-white"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00] shrink-0" aria-hidden="true" />
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
