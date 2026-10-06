import type { Certification } from '../data/certifications'
import { Cloud, Boxes, Database, Code2, GitBranch, ExternalLink, Calendar, Award } from 'lucide-react'

const CERTIFICATION_ICONS = {
  cloud: Cloud,
  container: Boxes,
  database: Database,
  code: Code2,
  gitBranch: GitBranch,
} as const

interface CertificationCardProps {
  certification: Certification
}

export const CertificationCard = ({ certification }: CertificationCardProps) => {
  const IconComponent = CERTIFICATION_ICONS[certification.iconType] || Award

  return (
    <div className="h-full flex flex-col justify-between p-6 rounded-2xl bg-theme-card border border-theme-border shadow-xl space-y-4 transition-all duration-300 hover:border-theme-accent/40 group">
      <div className="space-y-4">
        {/* Card Header: Icon & Issuer */}
        <div className="flex items-start justify-between gap-3">
          <div className="p-3 rounded-xl bg-theme-accent/10 text-theme-accent border border-theme-accent/20 group-hover:bg-theme-accent group-hover:text-theme-bg transition-colors shrink-0">
            <IconComponent className="w-6 h-6" aria-hidden="true" />
          </div>

          {certification.date && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold text-theme-secondary bg-theme-bg border border-theme-border">
              <Calendar className="w-3 h-3 text-theme-accent" aria-hidden="true" />
              <span>{certification.date}</span>
            </span>
          )}
        </div>

        {/* Title & Issuer */}
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-theme-text tracking-tight group-hover:text-theme-accent transition-colors">
            {certification.title}
          </h3>
          <p className="text-xs font-semibold uppercase tracking-wider text-theme-accent">
            {certification.issuer}
          </p>
        </div>

        {/* Description */}
        {certification.description && (
          <p className="text-xs sm:text-sm text-theme-secondary leading-relaxed">
            {certification.description}
          </p>
        )}
      </div>

      {/* Credential Action Button (Rendered ONLY if a real credentialUrl exists) */}
      {certification.credentialUrl && (
        <div className="pt-2 border-t border-theme-border">
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View credential for ${certification.title}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider btn-neon-lime focus:outline-none focus:ring-2 focus:ring-theme-accent"
          >
            <span>View Credential</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      )}
    </div>
  )
}

export default CertificationCard
