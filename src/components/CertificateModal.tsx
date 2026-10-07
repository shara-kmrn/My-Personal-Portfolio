import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, ExternalLink, Calendar, Award } from 'lucide-react'
import type { Certification } from '../data/certifications'

interface CertificateModalProps {
  certification: Certification | null
  onClose: () => void
}

export const CertificateModal = ({ certification, onClose }: CertificateModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (certification) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
      setTimeout(() => closeButtonRef.current?.focus(), 50)
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [certification, onClose])

  if (!certification) return null

  return (
    <AnimatePresence>
      {certification && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-cert-title"
        >
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-4xl max-h-[92vh] bg-theme-card border border-theme-border rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-theme-border bg-theme-bg/80">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-theme-accent/10 text-theme-accent border border-theme-accent/20 shrink-0">
                  <Award className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h2
                    id="modal-cert-title"
                    className="text-lg sm:text-xl font-bold text-theme-text tracking-tight"
                  >
                    {certification.title}
                  </h2>
                  <p className="text-xs font-semibold uppercase tracking-wider text-theme-accent">
                    {certification.issuer}
                  </p>
                </div>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl text-theme-secondary hover:text-theme-text hover:bg-theme-border transition-colors focus:outline-none focus:ring-2 focus:ring-theme-accent cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Image display */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-black/40 min-h-[300px]">
              {certification.image ? (
                <img
                  src={certification.image}
                  alt={certification.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg border border-theme-border/50 shadow-2xl"
                />
              ) : (
                <div className="p-12 text-center text-theme-secondary">
                  No photo preview available for this certification.
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-theme-border bg-theme-bg/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {certification.date && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold text-theme-secondary bg-theme-bg border border-theme-border">
                    <Calendar className="w-3.5 h-3.5 text-theme-accent" />
                    <span>{certification.date}</span>
                  </span>
                )}
                {certification.description && (
                  <span className="text-xs text-theme-secondary hidden sm:inline-block max-w-md truncate">
                    {certification.description}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                {certification.credentialUrl && (
                  <a
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider btn-neon-lime"
                  >
                    <span>View Official Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-theme-secondary hover:text-theme-text hover:bg-theme-border transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default CertificateModal
