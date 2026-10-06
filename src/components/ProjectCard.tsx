import type { Project } from '../data/projects'
import { ExternalLink, Info, Code2, Cpu, CheckCircle2, UserCheck } from 'lucide-react'

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

interface ProjectCardProps {
  project: Project
  onSelectProject: (project: Project) => void
}

export const ProjectCard = ({ project, onSelectProject }: ProjectCardProps) => {
  // Extract project initials for placeholder artwork
  const initials = project.title
    .split(' ')
    .map((word) => word[0])
    .join('')
    .substring(0, 3)

  const isIoT = project.category === 'IoT'

  return (
    <div className="h-full flex flex-col justify-between rounded-2xl bg-theme-card border border-theme-border shadow-xl overflow-hidden transition-all duration-300 hover:border-[#CCFF00]/40 hover:shadow-[0_0_25px_rgba(204,255,0,0.08)] group">
      {/* Top Visual Area / Placeholder Banner */}
      <div className="relative h-48 w-full bg-theme-bg/90 border-b border-theme-border flex items-center justify-center overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-grid-lines opacity-60" />
        
        {/* Glowing Decorative Shapes */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#CCFF00]/10 rounded-full blur-2xl group-hover:bg-[#CCFF00]/25 transition-all duration-300" />
        <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-[#CCFF00]/5 rounded-full blur-xl" />

        {/* Visual Content: Image or Styled Placeholder Graphic */}
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
            <div className="w-16 h-16 rounded-2xl bg-[#CCFF00]/10 border border-[#CCFF00]/30 flex items-center justify-center text-[#CCFF00] font-black text-xl tracking-wider shadow-[0_0_15px_rgba(204,255,0,0.15)] mb-2 group-hover:scale-110 transition-transform">
              {isIoT ? <Cpu className="w-8 h-8" /> : <Code2 className="w-8 h-8" />}
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#CCFF00]/90">
              {project.title} ({initials})
            </span>
          </div>
        )}

        {/* Category & Type Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-20">
          <span className="tag-neon text-[10px] py-0.5 px-2.5">
            {project.category}
          </span>
        </div>

        <div className="absolute top-3 right-3 z-20">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold text-theme-secondary bg-theme-card/90 border border-theme-border backdrop-blur-xs">
            {project.type}
          </span>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Header & Title */}
          <div>
            <h3 className="text-xl font-bold text-theme-text tracking-tight group-hover:text-[#CCFF00] transition-colors">
              {project.title}
            </h3>
            {project.fullName && (
              <p className="text-xs text-theme-secondary mt-0.5 italic">
                {project.fullName}
              </p>
            )}
          </div>

          {/* Role Pill if available */}
          {project.role && (
            <div className="inline-flex items-center gap-1.5 text-xs text-theme-secondary bg-theme-bg/60 px-2.5 py-1 rounded-md border border-theme-border">
              <UserCheck className="w-3.5 h-3.5 text-[#CCFF00]" aria-hidden="true" />
              <span>Role: <strong className="text-theme-text font-semibold">{project.role}</strong></span>
            </div>
          )}

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-theme-secondary line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Selected Key Features (First 3) */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-theme-secondary">
              Key Features
            </span>
            <ul className="space-y-1 text-xs text-theme-text">
              {project.features.slice(0, 3).map((feature) => (
                <li key={feature} className="flex items-start gap-1.5 leading-snug">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00] shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="truncate">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section: Technologies & Action Buttons */}
        <div className="space-y-4 pt-2 border-t border-theme-border">
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[11px] font-medium text-theme-secondary bg-theme-bg border border-theme-border"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 rounded-md text-[11px] font-semibold text-[#CCFF00] bg-[#CCFF00]/10 border border-[#CCFF00]/20">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 pt-1">
            {/* View Details Button */}
            <button
              type="button"
              onClick={() => onSelectProject(project)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider btn-neon-lime cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
            >
              <Info className="w-3.5 h-3.5" aria-hidden="true" />
              <span>View Details</span>
            </button>

            {/* Optional GitHub Button */}
            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
                className="p-2 rounded-lg text-theme-secondary hover:text-[#CCFF00] bg-theme-bg border border-theme-border hover:border-[#CCFF00]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}

            {/* Optional Live Demo Button */}
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title}`}
                className="p-2 rounded-lg text-theme-secondary hover:text-[#CCFF00] bg-theme-bg border border-theme-border hover:border-[#CCFF00]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
