import type { Certification } from '../data/certifications'
import { Cloud, Boxes, Database, Code2, GitBranch, ExternalLink, Calendar, Award, Maximize2 } from 'lucide-react'

const CERTIFICATION_ICONS = {
  cloud: Cloud,
  container: Boxes,
  database: Database,
  code: Code2,
  gitBranch: GitBranch,
} as const

interface CertificationCardProps {
  certification: Certification
  onSelect?: (certification: Certification) => void
}

export const CertificationCard = ({ certification, onSelect }: CertificationCardProps) => {
  const IconComponent = CERTIFICATION_ICONS[certification.iconType] || Award

  const handleCardClick = () => {
    if (onSelect) {
      onSelect(certification)
    }
  }

  return (
    <div className="h-full flex flex-col justify-between rounded-2xl bg-theme-card border border-theme-border shadow-xl overflow-hidden transition-all duration-300 hover:border-theme-accent/50 group">
      {/* Upper Area: Dominant Certificate Image Frame (Fills card width & size) */}
      <div
        onClick={handleCardClick}
        className="relative w-full aspect-[4/3] bg-theme-bg overflow-hidden border-b border-theme-border cursor-pointer group/img"
        role="button"
        tabIndex={0}
        aria-label={`View full certificate photo for ${certification.title}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleCardClick()
          }
        }}
      >
        {certification.image ? (
          <img
            src={certification.image}
            alt={certification.title}
            className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-theme-secondary bg-theme-bg/80">
            <IconComponent className="w-12 h-12 text-theme-accent/40 mb-2" />
            <span className="text-xs font-semibold text-center">{certification.title}</span>
          </div>
        )}

        {/* Dynamic Dark Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3">
          <div className="flex justify-between items-start">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold text-theme-bg bg-theme-accent">
              <IconComponent className="w-3 h-3" />
              <span>{certification.issuer}</span>
            </span>
            <div className="p-1.5 rounded-full bg-black/60 text-white backdrop-blur-xs">
              <Maximize2 className="w-4 h-4 text-theme-accent" />
            </div>
          </div>
          <p className="text-xs text-white/90 font-medium text-center bg-black/40 py-1.5 rounded-md backdrop-blur-xs">
            🔍 Click to view full certificate
          </p>
        </div>
      </div>

      {/* Lower Area: Card Content Details */}
      <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
        <div className="space-y-3">
          {/* Header Row: Issuer Badge & Date */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-theme-accent/10 text-theme-accent border border-theme-accent/20 group-hover:bg-theme-accent group-hover:text-theme-bg transition-colors shrink-0">
                <IconComponent className="w-4 h-4" aria-hidden="true" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-theme-accent">
                {certification.issuer}
              </span>
            </div>

            {certification.date && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold text-theme-secondary bg-theme-bg border border-theme-border">
                <Calendar className="w-3 h-3 text-theme-accent" aria-hidden="true" />
                <span>{certification.date}</span>
              </span>
            )}
          </div>

          {/* Title */}
          <h3
            onClick={handleCardClick}
            className="text-base font-bold text-theme-text tracking-tight group-hover:text-theme-accent transition-colors cursor-pointer line-clamp-2"
          >
            {certification.title}
          </h3>

          {/* Description */}
          {certification.description && (
            <p className="text-xs text-theme-secondary leading-relaxed line-clamp-3">
              {certification.description}
            </p>
          )}
        </div>

        {/* Card Actions */}
        <div className="pt-3 border-t border-theme-border flex items-center justify-between gap-2">
          {certification.image && (
            <button
              type="button"
              onClick={handleCardClick}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-theme-accent hover:underline focus:outline-none cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>View Photo</span>
            </button>
          )}

          {certification.credentialUrl && (
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View official credential for ${certification.title}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider btn-neon-lime focus:outline-none focus:ring-2 focus:ring-theme-accent"
            >
              <span>View Credential</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default CertificationCard
