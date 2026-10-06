import type { Variants } from 'motion/react'
import { motion } from 'motion/react'
import { Quote, MessageSquareQuote, User } from 'lucide-react'
import { testimonialsData } from '../data/testimonials'
import type { Testimonial } from '../data/testimonials'

export const Testimonials = () => {
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

  const hasTestimonials = testimonialsData.length > 0

  return (
    <section
      id="testimonials"
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
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-theme-text pt-2 highlight-strip-neon pl-4">
            What People Say
          </h2>
          <p className="text-base sm:text-lg text-theme-secondary max-w-2xl pt-1">
            Feedback from people I have worked and collaborated with.
          </p>
        </motion.div>

        {/* Conditional Content View */}
        {hasTestimonials ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {testimonialsData.map((item: Testimonial) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="h-full flex flex-col justify-between p-6 rounded-2xl bg-theme-card border border-theme-border shadow-xl space-y-6 transition-all duration-300 hover:border-theme-accent/40 group"
              >
                <div className="space-y-4">
                  {/* Quote Icon */}
                  <div className="p-2.5 rounded-xl bg-theme-accent/10 text-theme-accent border border-theme-accent/20 w-fit group-hover:bg-theme-accent group-hover:text-theme-bg transition-colors">
                    <Quote className="w-5 h-5" aria-hidden="true" />
                  </div>

                  {/* Quote Body */}
                  <p className="text-xs sm:text-sm text-theme-text italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-theme-border flex items-center space-x-3">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={`${item.name} profile`}
                      className="w-10 h-10 rounded-full object-cover border border-theme-border"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-theme-bg border border-theme-border flex items-center justify-center text-theme-accent shrink-0">
                      <User className="w-5 h-5" aria-hidden="true" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xs font-bold text-theme-text tracking-tight">
                      {item.name}
                    </h3>
                    {(item.role || item.organization) && (
                      <p className="text-[11px] text-theme-secondary">
                        {[item.role, item.organization].filter(Boolean).join(' • ')}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Intentional Professional Empty State */
          <motion.div
            variants={cardVariants}
            className="p-8 sm:p-12 rounded-2xl bg-theme-card border border-theme-border shadow-xl text-center flex flex-col items-center justify-center space-y-4 max-w-2xl mx-auto"
          >
            <div className="w-14 h-14 rounded-2xl bg-theme-accent/10 border border-theme-accent/30 flex items-center justify-center text-theme-accent shadow-[0_0_15px_rgba(101,163,13,0.15)]">
              <MessageSquareQuote className="w-7 h-7" aria-hidden="true" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-theme-text">
                Testimonials & Recommendations
              </h3>
              <p className="text-xs sm:text-sm text-theme-secondary max-w-md mx-auto leading-relaxed">
                Feedback and endorsements from project mentors, academic supervisors, and teammates will be displayed here as they are published.
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

export default Testimonials
