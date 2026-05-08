import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'Full-Stack', 'Backend', 'Frontend']

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((project) => project.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="text-gold-600 dark:text-gold-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gold-600 dark:bg-gold-400 rounded"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
            Here are some of my recent projects showcasing my full-stack development skills.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === category
                  ? 'bg-gold-600 dark:bg-gold-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-2 border-gold-200 dark:border-gold-900 hover:border-gold-600 dark:hover:border-gold-400'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all ${
                project.category === 'Full-Stack' ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-600/10 to-transparent dark:from-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative p-6 h-full bg-white dark:bg-gray-800 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-5xl">{project.hero}</span>
                  <span className="px-3 py-1 bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-400 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gold-100 dark:bg-gold-900/20 text-gold-700 dark:text-gold-400 rounded text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Details
                  </Link>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gold-600 text-white rounded-full font-semibold hover:bg-gold-700 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
