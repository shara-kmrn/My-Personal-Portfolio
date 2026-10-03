import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, CheckCircle2, UserCheck, ShieldAlert, Cpu, ExternalLink, Sparkles, Layers } from 'lucide-react'
import type { Project } from '../data/projects'

const GithubIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
)

interface ProjectDetailsModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectDetailsModal = ({ project, onClose }: ProjectDetailsModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Handle Escape key and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
      // Focus close button on open
      setTimeout(() => closeButtonRef.current?.focus(), 50)
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0D0F11]/80 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Content Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-3xl max-h-[90vh] bg-[#1A1D20] border border-[#24292E] rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#24292E] bg-[#0D0F11]/60">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="tag-neon text-xs py-0.5 px-2.5">
                    {project.category}
                  </span>
                  <span className="text-xs font-semibold text-[#A0A6AD]">
                    {project.type}
                  </span>
                </div>
                <h2
                  id="modal-project-title"
                  className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
                >
                  {project.title}
                </h2>
                {project.fullName && (
                  <p className="text-xs sm:text-sm text-[#A0A6AD] italic">
                    {project.fullName}
                  </p>
                )}
              </div>

              {/* Close Button */}
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl text-[#A0A6AD] hover:text-white hover:bg-[#24292E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
                aria-label="Close project details modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Body Content */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm leading-relaxed">
              {/* My Role */}
              {project.role && (
                <div className="inline-flex items-center gap-2 p-3 rounded-xl bg-[#0D0F11]/80 border border-[#24292E] text-white">
                  <UserCheck className="w-4 h-4 text-[#CCFF00]" aria-hidden="true" />
                  <span>Role: <strong className="text-[#CCFF00] font-semibold">{project.role}</strong></span>
                </div>
              )}

              {/* Full Description */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#A0A6AD] flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#CCFF00]" />
                  Project Overview
                </h3>
                <p className="text-[#A0A6AD] bg-[#0D0F11]/40 p-4 rounded-xl border border-[#24292E]/60 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies Used */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#A0A6AD]">
                  Technologies & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#0D0F11] border border-[#24292E]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contribution Highlight (if available) */}
              {project.contribution && (
                <div className="p-4 rounded-xl bg-[#CCFF00]/10 border border-[#CCFF00]/30 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#CCFF00] font-bold text-xs uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>My Specific Contribution</span>
                  </div>
                  <p className="text-white text-xs sm:text-sm leading-relaxed">
                    {project.contribution}
                  </p>
                </div>
              )}

              {/* Sensors Used (for IoT projects like BLIMAS) */}
              {project.sensors && project.sensors.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#A0A6AD] flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-[#CCFF00]" />
                    Hardware & Sensors
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.sensors.map((sensor) => (
                      <div
                        key={sensor}
                        className="p-2.5 rounded-lg bg-[#0D0F11]/60 border border-[#24292E] text-xs font-medium text-white flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
                        <span>{sensor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features List */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#A0A6AD]">
                  Key Features ({project.features.length})
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-[#0D0F11]/50 border border-[#24292E] text-xs text-white"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Rules (if available) */}
              {project.businessRules && project.businessRules.length > 0 && (
                <div className="space-y-2 pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#CCFF00] flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4" />
                    Business & Booking Rules
                  </h3>
                  <div className="space-y-2">
                    {project.businessRules.map((rule) => (
                      <div
                        key={rule}
                        className="p-3 rounded-lg bg-[#0D0F11] border border-[#24292E] text-xs text-[#A0A6AD] flex items-start gap-2"
                      >
                        <span className="text-[#CCFF00] font-bold">•</span>
                        <span className="text-white">{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer / Action Bar */}
            <div className="p-5 border-t border-[#24292E] bg-[#0D0F11]/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {project.githubUrl && project.githubUrl !== '#' ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#24292E] hover:bg-[#2c3238] transition-colors focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View GitHub</span>
                  </a>
                ) : null}

                {project.liveUrl && project.liveUrl !== '#' ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider btn-neon-lime focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                ) : null}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-lg text-xs font-semibold text-[#A0A6AD] hover:text-white hover:bg-[#24292E] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ProjectDetailsModal
