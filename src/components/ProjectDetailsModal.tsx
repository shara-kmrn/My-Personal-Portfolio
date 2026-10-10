import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, CheckCircle2, ShieldAlert, Cpu, ExternalLink, Sparkles, Layers, Image as ImageIcon } from 'lucide-react'
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
            className="fixed inset-0 bg-theme-text/40 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Content Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-3xl max-h-[90vh] bg-theme-card border border-theme-border rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-theme-border bg-theme-bg/60">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="tag-neon text-xs py-0.5 px-2.5">
                    {project.category}
                  </span>
                  <span className="text-xs font-semibold text-theme-secondary">
                    {project.type}
                  </span>
                  {project.period && (
                    <span
                      className={`text-[11px] px-2.5 py-0.5 rounded-full font-semibold border ${
                        project.period.toLowerCase().includes('ongoing')
                          ? 'bg-amber-500/15 text-amber-300 border-amber-500/40'
                          : 'text-theme-secondary bg-theme-bg/60 border-theme-border'
                      }`}
                    >
                      {project.period}
                    </span>
                  )}
                </div>
                <h2
                  id="modal-project-title"
                  className="text-2xl sm:text-3xl font-extrabold text-theme-text tracking-tight"
                >
                  {project.title}
                </h2>
                {project.fullName && (
                  <p className="text-xs sm:text-sm text-theme-secondary italic">
                    {project.fullName}
                  </p>
                )}
              </div>

              {/* Close Button */}
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl text-theme-secondary hover:text-theme-text hover:bg-theme-border transition-colors focus:outline-none focus:ring-2 focus:ring-theme-accent"
                aria-label="Close project details modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Body Content */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm leading-relaxed">
              {/* Project Preview Image */}
              {project.image && (
                <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden border border-theme-border bg-theme-bg shadow-md">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}

              {/* Full Description */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-theme-secondary flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-theme-accent" />
                  Project Overview
                </h3>
                <p className="text-theme-secondary bg-theme-bg/40 p-4 rounded-xl border border-theme-border/60 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies Used */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-theme-secondary">
                  Technologies & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold text-theme-text bg-theme-bg border border-theme-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Engineering Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="space-y-3 pt-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-theme-accent flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>Key Engineering Highlights & Innovation</span>
                  </h3>
                  <div className="grid grid-cols-1 gap-2.5">
                    {project.highlights.map((item, index) => (
                      <div
                        key={index}
                        className="p-3.5 rounded-xl bg-theme-accent/5 border border-theme-accent/20 space-y-1 hover:border-theme-accent/30 transition-colors"
                      >
                        <div className="text-xs font-bold text-theme-accent flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-theme-accent" />
                          <span>{item.title}</span>
                        </div>
                        <p className="text-xs text-theme-text/90 leading-relaxed pl-3.5">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Specific Contribution */}
              {project.contribution && (
                <div className="p-4 rounded-xl bg-theme-accent/10 border border-theme-accent/30 space-y-1.5">
                  <div className="flex items-center gap-2 text-theme-accent font-bold text-xs uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>My Specific Contribution</span>
                  </div>
                  <p className="text-theme-text text-xs sm:text-sm leading-relaxed">
                    {project.contribution}
                  </p>
                </div>
              )}

              {/* Sensors Used (for IoT projects like BLIMAS) */}
              {project.sensors && project.sensors.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-theme-secondary flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-theme-accent" />
                    Hardware & Sensors
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.sensors.map((sensor) => (
                      <div
                        key={sensor}
                        className="p-2.5 rounded-lg bg-theme-bg/60 border border-theme-border text-xs font-medium text-theme-text flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-theme-accent" />
                        <span>{sensor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features List */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-theme-secondary">
                  Key Features ({project.features.length})
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-theme-bg/50 border border-theme-border text-xs text-theme-text"
                    >
                      <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Rules (if available) */}
              {project.businessRules && project.businessRules.length > 0 && (
                <div className="space-y-2 pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-theme-accent flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4" />
                    Business & Booking Rules
                  </h3>
                  <div className="space-y-2">
                    {project.businessRules.map((rule) => (
                      <div
                        key={rule}
                        className="p-3 rounded-lg bg-theme-bg border border-theme-border text-xs text-theme-secondary flex items-start gap-2"
                      >
                        <span className="text-theme-accent font-bold">•</span>
                        <span className="text-theme-text">{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Photo Gallery (for projects with multiple photos like BLIMAS) */}
              {project.gallery && project.gallery.length > 1 && (
                <div className="space-y-2 pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-theme-accent flex items-center gap-1.5">
                    <ImageIcon className="w-4 h-4" />
                    <span>Project Photo Gallery ({project.gallery.length})</span>
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {project.gallery.map((img, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl overflow-hidden border border-theme-border bg-theme-bg/60 h-24 sm:h-28 group relative shadow-xs"
                      >
                        <img
                          src={img}
                          alt={`${project.title} gallery item ${idx + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer / Action Bar */}
            <div className="p-5 border-t border-theme-border bg-theme-bg/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                {project.githubFrontendUrl && project.githubFrontendUrl !== '#' && (
                  <a
                    href={project.githubFrontendUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider btn-dark-slate focus:outline-none focus:ring-2 focus:ring-theme-accent"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Frontend</span>
                  </a>
                )}

                {project.githubBackendUrl && project.githubBackendUrl !== '#' && (
                  <a
                    href={project.githubBackendUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider btn-dark-slate focus:outline-none focus:ring-2 focus:ring-theme-accent"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Backend</span>
                  </a>
                )}

                {project.githubUrl && project.githubUrl !== '#' && !project.githubFrontendUrl && !project.githubBackendUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider btn-dark-slate focus:outline-none focus:ring-2 focus:ring-theme-accent"
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider btn-neon-lime focus:outline-none focus:ring-2 focus:ring-theme-accent"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                ) : null}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-lg text-xs font-semibold text-theme-secondary hover:text-theme-text hover:bg-theme-border transition-colors cursor-pointer"
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
