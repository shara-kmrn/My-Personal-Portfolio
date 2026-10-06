import { useState } from 'react'
import type { FormEvent } from 'react'
import type { Variants } from 'motion/react'
import { motion } from 'motion/react'
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { contactInfo } from '../data/contact'

const GithubIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
)

const LinkedinIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
  </svg>
)

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [statusMessage, setStatusMessage] = useState<string | null>(null)

  // Form Validation logic
  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setStatusMessage(null)

    if (validate()) {
      // Clear form inputs and show clear status message
      setFormData({ name: '', email: '', message: '' })
      setErrors({})
      setStatusMessage(
        'Thanks for reaching out! The contact form is currently being prepared for email delivery.'
      )
    }
  }

  const hasEmail = Boolean(contactInfo.email && contactInfo.email.trim())
  const hasGithub = Boolean(contactInfo.github && contactInfo.github.trim() && contactInfo.github !== '#')
  const hasLinkedin = Boolean(contactInfo.linkedin && contactInfo.linkedin.trim() && contactInfo.linkedin !== '#')
  const hasSocials = hasEmail || hasGithub || hasLinkedin

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
      id="contact"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-hidden border-t border-theme-border"
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
          <span className="tag-neon">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-theme-text pt-2 highlight-strip-neon pl-4">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-theme-secondary max-w-2xl pt-1">
            I'm always open to connecting with fellow developers, collaborators, and opportunities. Feel free to reach out.
          </p>
        </motion.div>

        {/* Desktop 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Intro & Contact Links */}
          <motion.div variants={cardVariants} className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-theme-card border border-theme-border shadow-xl space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-theme-text tracking-tight">
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-theme-secondary leading-relaxed">
                  Have a project idea, question, or opportunity? Fill out the form or reach out through my verified channels.
                </p>
              </div>

              {/* Render contact info items ONLY if non-empty */}
              {hasSocials ? (
                <div className="space-y-3 pt-2">
                  {hasEmail && (
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-theme-bg border border-theme-border text-xs font-semibold text-theme-text hover:text-theme-accent hover:border-theme-accent/40 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-theme-accent/10 text-theme-accent shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="truncate">{contactInfo.email}</span>
                    </a>
                  )}

                  {hasGithub && (
                    <a
                      href={contactInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-theme-bg border border-theme-border text-xs font-semibold text-theme-text hover:text-theme-accent hover:border-theme-accent/40 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-theme-accent/10 text-theme-accent shrink-0">
                        <GithubIcon className="w-4 h-4" />
                      </div>
                      <span>GitHub Profile</span>
                    </a>
                  )}

                  {hasLinkedin && (
                    <a
                      href={contactInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-theme-bg border border-theme-border text-xs font-semibold text-theme-text hover:text-theme-accent hover:border-theme-accent/40 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-theme-accent/10 text-theme-accent shrink-0">
                        <LinkedinIcon className="w-4 h-4" />
                      </div>
                      <span>LinkedIn Profile</span>
                    </a>
                  )}
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-theme-bg/60 border border-theme-border text-xs text-theme-secondary leading-relaxed">
                  Direct email and social links will be added once verified. In the meantime, please send a message using the form.
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div variants={cardVariants} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-6 sm:p-8 rounded-2xl bg-theme-card border border-theme-border shadow-xl space-y-5"
            >
              {/* Full Name Field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-bold uppercase tracking-wider text-theme-text"
                >
                  Full Name <span className="text-theme-accent">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 rounded-xl bg-theme-bg border text-sm text-theme-text placeholder:text-theme-secondary focus:outline-none transition-colors ${
                    errors.name
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-theme-border focus:border-theme-accent'
                  }`}
                />
                {errors.name && (
                  <p id="name-error" className="text-xs text-red-400 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email Address Field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-bold uppercase tracking-wider text-theme-text"
                >
                  Email Address <span className="text-theme-accent">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  placeholder="name@example.com"
                  className={`w-full px-4 py-3 rounded-xl bg-theme-bg border text-sm text-theme-text placeholder:text-theme-secondary focus:outline-none transition-colors ${
                    errors.email
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-theme-border focus:border-theme-accent'
                  }`}
                />
                {errors.email && (
                  <p id="email-error" className="text-xs text-red-400 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-bold uppercase tracking-wider text-theme-text"
                >
                  Message <span className="text-theme-accent">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  placeholder="How can I help you?"
                  className={`w-full px-4 py-3 rounded-xl bg-theme-bg border text-sm text-theme-text placeholder:text-theme-secondary focus:outline-none transition-colors resize-none ${
                    errors.message
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-theme-border focus:border-theme-accent'
                  }`}
                />
                {errors.message && (
                  <p id="message-error" className="text-xs text-red-400 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider btn-neon-lime focus:outline-none focus:ring-2 focus:ring-theme-accent cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" aria-hidden="true" />
              </button>

              {/* Submission Status Notice */}
              {statusMessage && (
                <div
                  role="status"
                  aria-live="polite"
                  className="p-4 rounded-xl bg-theme-accent/10 border border-theme-accent/30 flex items-start gap-3 text-xs text-theme-text"
                >
                  <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="leading-relaxed">{statusMessage}</p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
