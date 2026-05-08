import { motion } from 'framer-motion'
import { Github, ExternalLink, Sparkles, ArrowLeft, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getProjectBySlug, projects } from '../data/projects'

export default function ProjectDetails({ slug }) {
  const project = getProjectBySlug(slug)
  const relatedProjects = projects.filter(p => p.slug !== slug).slice(0, 2)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 bg-gray-50 dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The project you are looking for does not exist or has been moved.</p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold-600 hover:bg-gold-700 text-white rounded-full transition-colors font-semibold"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </motion.div>
      </div>
    )
  }

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
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 font-semibold transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl mb-6 inline-block"
          >
            {project.hero}
          </motion.div>
          <p className="text-sm text-gold-600 dark:text-gold-400 uppercase tracking-[0.3em] font-semibold mb-4">Featured Project</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            {project.description}
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 text-gray-700 dark:text-gray-300"
          >
            <span className="px-4 py-2 bg-gold-100 dark:bg-gold-900/20 text-gold-700 dark:text-gold-400 rounded-full font-semibold">
              {project.category}
            </span>
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-full font-semibold">
              {project.role}
            </span>
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 rounded-full font-semibold">
              {project.year}
            </span>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 lg:grid-cols-3 mb-16"
        >
          {/* Problem-Solution-Impact Cards */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="space-y-8">
              {/* Problem Card */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg flex-shrink-0">
                    <div className="text-2xl">🎯</div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">The Challenge</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {project.problem}
                </p>
              </motion.div>

              {/* Solution Card */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                    <div className="text-2xl">💡</div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">The Solution</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {project.solution}
                </p>
              </motion.div>

              {/* Impact Card */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-gold-50 to-white dark:from-gold-900/10 dark:to-gray-800 p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gold-100 dark:bg-gold-900/30 rounded-lg flex-shrink-0">
                    <CheckCircle2 className="text-gold-600 dark:text-gold-400" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">The Impact</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {project.results}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Action Buttons */}
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Explore</h3>
              <div className="space-y-3">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 px-6 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-semibold"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 px-6 py-4 bg-gold-600 text-white rounded-xl hover:bg-gold-700 transition-colors font-semibold"
                >
                  <span>Source Code</span>
                  <Github size={18} />
                </motion.a>
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-lg"
            >
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="text-gold-600 dark:text-gold-400" size={24} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Tech Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-4 py-2 bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-400 rounded-lg font-semibold text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-24 pt-24 border-t border-gray-300 dark:border-gray-700"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
              More <span className="text-gold-600 dark:text-gold-400">Projects</span>
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedProjects.map((p) => (
                <motion.div
                  key={p.slug}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-5xl">{p.hero}</span>
                    <span className="px-3 py-1 bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-400 rounded-full text-xs font-semibold">
                      {p.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {p.description}
                  </p>
                  <Link
                    to={`/projects/${p.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

