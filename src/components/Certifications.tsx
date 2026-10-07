import { useState, useRef } from 'react'
import type { Variants } from 'motion/react'
import { motion } from 'motion/react'
import { ChevronLeft, ChevronRight, Award } from 'lucide-react'
import { certificationsData, type Certification } from '../data/certifications'
import CertificationCard from './CertificationCard'
import CertificateModal from './CertificateModal'

export const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 380
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      handleScroll('left')
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      handleScroll('right')
    }
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
        className="space-y-8"
      >
        {/* Section Header with Left & Right Arrow Navigation Controls */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="tag-neon">
                Certifications
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-theme-accent/10 text-theme-accent border border-theme-accent/20">
                <Award className="w-3 h-3" />
                <span>{certificationsData.length} Earned</span>
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-theme-text pt-2 highlight-strip-neon pl-4">
              Professional Learning & Certificates
            </h2>
            <p className="text-base sm:text-lg text-theme-secondary pt-1">
              A commitment to continuous learning, expanding technical expertise, and mastering modern technologies.
            </p>
          </div>

          {/* Slider Navigation Buttons (Left & Right Arrows) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              aria-label="Scroll left to previous certificate"
              className="p-3 rounded-xl bg-theme-card border border-theme-border text-theme-text hover:border-theme-accent hover:text-theme-accent transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-theme-accent active:scale-95 cursor-pointer group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() => handleScroll('right')}
              aria-label="Scroll right to next certificate"
              className="p-3 rounded-xl bg-theme-card border border-theme-border text-theme-text hover:border-theme-accent hover:text-theme-accent transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-theme-accent active:scale-95 cursor-pointer group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Horizontal Scrollable Carousel Container */}
        <motion.div variants={itemVariants} className="relative group/carousel">
          <div
            ref={scrollContainerRef}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-label="Certifications horizontal carousel"
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 px-1 focus:outline-none focus:ring-2 focus:ring-theme-accent/40 rounded-2xl scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="snap-start shrink-0 w-[88vw] sm:w-[350px] md:w-[380px] h-auto flex flex-col"
              >
                <CertificationCard
                  certification={cert}
                  onSelect={(certification) => setSelectedCert(certification)}
                />
              </div>
            ))}
          </div>

          {/* Floating Left / Right Overlay Buttons on Desktop for Super Smooth Access */}
          <button
            type="button"
            onClick={() => handleScroll('left')}
            aria-label="Scroll left"
            className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-theme-card/90 border border-theme-border text-theme-text hover:text-theme-accent hover:border-theme-accent backdrop-blur-md shadow-xl transition-all opacity-0 group-hover/carousel:opacity-100 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => handleScroll('right')}
            aria-label="Scroll right"
            className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-theme-card/90 border border-theme-border text-theme-text hover:text-theme-accent hover:border-theme-accent backdrop-blur-md shadow-xl transition-all opacity-0 group-hover/carousel:opacity-100 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </motion.div>

      {/* Lightbox Modal for Certificate Photos */}
      <CertificateModal
        certification={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  )
}

export default Certifications
