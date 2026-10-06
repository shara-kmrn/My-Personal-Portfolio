import type { Variants } from 'motion/react'
import { motion } from 'motion/react'
import { certificationsData } from '../data/certifications'
import CertificationCard from './CertificationCard'

export const Certifications = () => {
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
      id="certifications"
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
            Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-theme-text pt-2 highlight-strip-neon pl-4">
            Professional Learning & Badges
          </h2>
          <p className="text-base sm:text-lg text-theme-secondary max-w-2xl pt-1">
            Continuous learning and technical certifications that complement my academic and project experience.
          </p>
        </motion.div>

        {/* Certifications 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {certificationsData.map((cert) => (
            <motion.div key={cert.id} variants={cardVariants} className="h-full">
              <CertificationCard certification={cert} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Certifications
