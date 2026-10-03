import { useState } from 'react'
import type { Variants } from 'motion/react'
import { motion, AnimatePresence } from 'motion/react'
import { projectsData } from '../data/projects'
import type { Project } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectDetailsModal from './ProjectDetailsModal'

const FILTER_CATEGORIES = ['All', 'Full-Stack', 'Web', 'IoT'] as const

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<typeof FILTER_CATEGORIES[number]>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Filter projects based on active selection
  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true
    return project.category === activeFilter
  })

  // Motion variants
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
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-hidden border-t border-[#24292E]"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="space-y-10"
      >
        {/* Section Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#24292E] pb-8">
          <motion.div variants={cardVariants} className="space-y-2">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#CCFF00] bg-[#CCFF00]/10 px-3 py-1 rounded-full border border-[#CCFF00]/30">
              Projects
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white pt-2 highlight-strip-neon pl-4">
              Featured Engineering Projects
            </h2>
            <p className="text-base sm:text-lg text-[#A0A6AD] max-w-2xl pt-1">
              A selection of projects where I applied software engineering concepts to build practical solutions.
            </p>
          </motion.div>

          {/* Category Filter Pills */}
          <motion.div
            variants={cardVariants}
            className="flex flex-wrap gap-2 p-1.5 bg-[#1A1D20] border border-[#24292E] rounded-xl self-start md:self-auto"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {FILTER_CATEGORIES.map((category) => {
              const isActive = activeFilter === category
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#CCFF00] ${
                    isActive
                      ? 'btn-neon-lime shadow-md'
                      : 'text-[#A0A6AD] hover:text-white hover:bg-[#0D0F11]/60'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </motion.div>
        </div>

        {/* Projects 2-Column Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 10 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={cardVariants} className="h-full">
                <ProjectCard
                  project={project}
                  onSelectProject={(proj) => setSelectedProject(proj)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty Filter Fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-[#1A1D20] rounded-2xl border border-[#24292E] p-8">
            <p className="text-sm text-[#A0A6AD]">
              No projects found in category "<strong className="text-white">{activeFilter}</strong>".
            </p>
          </div>
        )}
      </motion.div>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}

export default Projects
