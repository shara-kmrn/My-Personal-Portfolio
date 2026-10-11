import { useState } from 'react'
import type { FormEvent } from 'react'
import type { Variants } from 'motion/react'
import { motion } from 'motion/react'
import { Mail, Phone, Copy, Check, Globe, MessageSquare, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
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

const MediumIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM18.84 12c0 3.56-1.5 6.45-3.34 6.45s-3.34-2.89-3.34-6.45 1.5-6.45 3.34-6.45 3.34 2.89 3.34 6.45zm4.84 0c0 3.06-.5 5.54-1.12 5.54s-1.12-2.48-1.12-5.54.5-5.54 1.12-5.54 1.12 2.48 1.12 5.54z" />
  </svg>
)

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null)
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string; message?: string }>({})

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(fieldName)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const validateForm = (requireEmail = false) => {
    const errors: { name?: string; email?: string; message?: string } = {}
    if (!formData.name.trim()) errors.name = 'Please enter your name.'
    if (requireEmail) {
      if (!formData.email.trim()) {
        errors.email = 'Please enter your email.'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        errors.email = 'Please enter a valid email address.'
      }
    } else if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.'
    }
    if (!formData.message.trim()) errors.message = 'Please enter a message.'
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSendWhatsApp = () => {
    if (!validateForm(false)) return

    const textMsg = `Hello Rashmishara Nawodani,\n\nName: ${formData.name}\nEmail: ${formData.email || 'N/A'}\nSubject: ${formData.subject || 'General Inquiry'}\n\nMessage:\n${formData.message}`
    const encodedText = encodeURIComponent(textMsg)
    const whatsappUrl = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodedText}`
    window.open(whatsappUrl, '_blank')
  }

  const handleSendEmail = async (e: FormEvent) => {
    e.preventDefault()
    if (!validateForm(true)) return

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    // Fallback to mailto if EmailJS credentials are not configured yet
    if (!serviceId || !templateId || !publicKey || serviceId === 'your_service_id_here') {
      const mailSubject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`)
      const mailBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )
      window.location.href = `mailto:${contactInfo.email}?subject=${mailSubject}&body=${mailBody}`
      setStatus({
        type: 'info',
        message: 'Opening your email client to send message. (To send directly on the page, configure EmailJS keys in .env)',
      })
      return
    }

    setIsSubmitting(true)
    setStatus(null)

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          subject: formData.subject || `Portfolio Contact from ${formData.name}`,
          message: formData.message,
          to_name: 'Rashmishara Nawodani',
        },
        publicKey
      )

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. I will get back to you soon.',
      })
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
      setFieldErrors({})
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus({
        type: 'error',
        message: 'Failed to send message via EmailJS. Please try sending via WhatsApp or check back later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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

  return (
    <section
      id="contact"
      className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-hidden border-t border-theme-border"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="space-y-2">
          <span className="tag-neon">Get In Touch</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-theme-text flex items-center gap-2 pt-2 highlight-strip-neon pl-4">
            <span>Contact Me</span>
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-theme-accent animate-pulse" />
          </h2>
        </motion.div>

        {/* 2-Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-theme-secondary leading-relaxed">
              I'm a 3rd year Information Technology undergraduate at the University of Moratuwa. Whether you have an internship opportunity, a project to discuss, or just want to connect, I would love to hear from you.
            </p>

            {/* Direct Contact Copy Bars */}
            <div className="space-y-3">
              {/* Email Copy Bar */}
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-theme-card border border-theme-border text-xs sm:text-sm font-medium text-theme-text shadow-md group hover:border-theme-accent/40 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-theme-accent/10 text-theme-accent shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="truncate">{contactInfo.email}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(contactInfo.email, 'email')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-theme-bg border border-theme-border hover:border-theme-accent text-xs font-semibold text-theme-secondary hover:text-theme-text transition-colors cursor-pointer shrink-0"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-theme-accent" />
                      <span className="text-theme-accent">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Copy Bar */}
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-theme-card border border-theme-border text-xs sm:text-sm font-medium text-theme-text shadow-md group hover:border-theme-accent/40 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-theme-accent/10 text-theme-accent shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>{contactInfo.phone}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(contactInfo.phone, 'phone')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-theme-bg border border-theme-border hover:border-theme-accent text-xs font-semibold text-theme-secondary hover:text-theme-text transition-colors cursor-pointer shrink-0"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-theme-accent" />
                      <span className="text-theme-accent">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Circular Social Icons Bar */}
            <div className="flex items-center gap-3 pt-2">
              {contactInfo.github && (
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-full bg-theme-card border border-theme-border text-theme-text hover:border-theme-accent hover:text-theme-accent transition-colors focus:outline-none focus:ring-2 focus:ring-theme-accent"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              )}

              {contactInfo.linkedin && (
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-full bg-theme-card border border-theme-border text-theme-text hover:border-theme-accent hover:text-theme-accent transition-colors focus:outline-none focus:ring-2 focus:ring-theme-accent"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              )}

              {contactInfo.medium && (
                <a
                  href={contactInfo.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Medium Profile"
                  className="p-3 rounded-full bg-theme-card border border-theme-border text-theme-text hover:border-theme-accent hover:text-theme-accent transition-colors focus:outline-none focus:ring-2 focus:ring-theme-accent"
                >
                  <MediumIcon className="w-5 h-5" />
                </a>
              )}

              {contactInfo.website && (
                <a
                  href={contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Personal Website"
                  className="p-3 rounded-full bg-theme-card border border-theme-border text-theme-text hover:border-theme-accent hover:text-theme-accent transition-colors focus:outline-none focus:ring-2 focus:ring-theme-accent"
                >
                  <Globe className="w-5 h-5" />
                </a>
              )}
            </div>
          </motion.div>

          {/* Right Column: Send a Message Card */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-theme-card border border-theme-border shadow-2xl space-y-6">
              {/* Form Title */}
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-theme-text tracking-tight flex items-center gap-2">
                  <span>Send a Message</span>
                  <span className="w-2 h-2 rounded-full bg-theme-accent" />
                </h3>
                <p className="text-xs sm:text-sm text-theme-secondary">
                  Fill in the details below and select your preferred communication channel.
                </p>
              </div>

              {/* Form Fields */}
              <form onSubmit={handleSendEmail} className="space-y-4">
                {/* Your Name */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-theme-text">
                    Your Name <span className="text-theme-accent">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value })
                      if (fieldErrors.name) setFieldErrors((prev) => ({ ...prev, name: undefined }))
                    }}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-theme-bg border border-theme-border text-sm text-theme-text placeholder:text-theme-secondary/60 focus:outline-none focus:border-theme-accent transition-colors"
                  />
                  {fieldErrors.name && (
                    <p className="text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{fieldErrors.name}</span>
                    </p>
                  )}
                </div>

                {/* Your Email */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-theme-text">
                    Your Email <span className="text-theme-accent">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value })
                      if (fieldErrors.email) setFieldErrors((prev) => ({ ...prev, email: undefined }))
                    }}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-theme-bg border border-theme-border text-sm text-theme-text placeholder:text-theme-secondary/60 focus:outline-none focus:border-theme-accent transition-colors"
                  />
                  {fieldErrors.email && (
                    <p className="text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{fieldErrors.email}</span>
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-theme-text">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Internship Opportunity / Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-theme-bg border border-theme-border text-sm text-theme-text placeholder:text-theme-secondary/60 focus:outline-none focus:border-theme-accent transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-theme-text">
                    Message <span className="text-theme-accent">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value })
                      if (fieldErrors.message) setFieldErrors((prev) => ({ ...prev, message: undefined }))
                    }}
                    placeholder="Hello Rashmishara Nawodani, I'd like to get in touch regarding..."
                    className="w-full px-4 py-3 rounded-xl bg-theme-bg border border-theme-border text-sm text-theme-text placeholder:text-theme-secondary/60 focus:outline-none focus:border-theme-accent transition-colors resize-none"
                  />
                  {fieldErrors.message && (
                    <p className="text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{fieldErrors.message}</span>
                    </p>
                  )}
                </div>

                {/* Dual Dispatch Buttons: Send via WhatsApp & Send via Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {/* WhatsApp Button */}
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleSendWhatsApp}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider btn-neon-lime cursor-pointer shadow-lg disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>

                  {/* Email Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider btn-dark-slate cursor-pointer shadow-lg disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-theme-accent" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4" />
                        <span>Send via Email</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Status Notice */}
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3.5 rounded-xl text-xs font-medium flex items-start gap-2.5 transition-colors ${
                      status.type === 'success'
                        ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                        : status.type === 'error'
                        ? 'bg-rose-500/10 border border-rose-500/30 text-rose-400'
                        : 'bg-theme-accent/10 border border-theme-accent/30 text-theme-accent'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                    ) : status.type === 'error' ? (
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
                    ) : (
                      <Mail className="w-4 h-4 shrink-0 mt-0.5 text-theme-accent" />
                    )}
                    <span className="leading-relaxed">{status.message}</span>
                  </motion.div>
                )}

                {/* Footer Note */}
                <p className="text-[11px] text-center text-theme-secondary pt-2">
                  I respect your time and typically respond within 24 hours.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
