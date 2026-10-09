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
      className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-hidden border-t border-theme-border"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-8"
      >
        {/* Section Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-theme-border pb-8">
          <motion.div variants={cardVariants} className="space-y-2">
            <span className="tag-neon">
              Projects
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-theme-text pt-2 highlight-strip-neon pl-4">
              Featured Engineering Projects
            </h2>
            <p className="text-base sm:text-lg text-theme-secondary max-w-2xl pt-1">
              A selection of projects where I applied software engineering concepts to build practical solutions.
            </p>
          </motion.div>

          {/* Category Filter Pills */}
          <motion.div
            variants={cardVariants}
            className="flex flex-wrap gap-2 p-1.5 bg-theme-card border border-theme-border rounded-xl self-start md:self-auto"
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
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-theme-accent ${
                    isActive
                      ? 'btn-neon-lime shadow-md'
                      : 'text-theme-secondary hover:text-theme-text hover:bg-theme-bg'
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
          <div className="text-center py-12 bg-theme-card rounded-2xl border border-theme-border p-8">
            <p className="text-sm text-theme-secondary">
              No projects found in category "<strong className="text-theme-text">{activeFilter}</strong>".
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
