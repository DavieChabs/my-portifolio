import { motion } from 'framer-motion'
import { Github, ExternalLink, Sparkles, ArrowLeft, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getProjectBySlug, projects } from '../data/projects'

export default function ProjectDetails({ slug }) {
  const project = getProjectBySlug(slug)
  const relatedProjects = projects.filter((p) => p.slug !== slug).slice(0, 2)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 bg-gray-50 dark:bg-gray-900">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The project you are looking for does not exist or has been moved.</p>
          <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-gold-600 hover:bg-gold-700 text-white rounded-full transition-colors font-semibold">
            <ArrowLeft size={20} /> Back to Projects
          </Link>
        </motion.div>
      </div>
    )
  }

  const sections = [
    { title: 'Problem', content: project.problem, icon: '🎯' },
    { title: 'Research', content: project.research, icon: '🔎' },
    { title: 'Architecture', content: project.architecture, icon: '🧱' },
    { title: 'Database Design', content: project.database, icon: '🗄️' },
    { title: 'API Design', content: project.api, icon: '🔌' },
    { title: 'Challenges Encountered', content: project.challenges?.join(' • '), icon: '⚠️' },
    { title: 'Solutions Implemented', content: project.features?.join(' • '), icon: '✅' },
    { title: 'Lessons Learned', content: project.lessons, icon: '📘' },
    { title: 'Future Improvements', content: 'Expand testing, strengthen analytics, and improve automation around scaling features.', icon: '🚀' },
  ]

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="mb-12">
          <Link to="/projects" className="inline-flex items-center gap-2 text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 font-semibold transition-colors">
            <ArrowLeft size={18} /> Back to Projects
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-16 text-center">
          <div className="text-6xl mb-6 inline-block">{project.hero}</div>
          <p className="text-sm text-gold-600 dark:text-gold-400 uppercase tracking-[0.3em] font-semibold mb-4">Case Study</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">{project.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">{project.description}</p>
          <div className="flex flex-wrap justify-center gap-4 text-gray-700 dark:text-gray-300">
            <span className="px-4 py-2 bg-gold-100 dark:bg-gold-900/20 text-gold-700 dark:text-gold-400 rounded-full font-semibold">{project.category}</span>
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-full font-semibold">{project.role}</span>
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 rounded-full font-semibold">{project.year}</span>
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] mb-16">
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div key={section.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-7 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{section.icon}</div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{section.title}</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            <motion.div whileHover={{ y: -4 }} className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-7 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Project Links</h3>
              <div className="space-y-3">
                <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-3 px-6 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-semibold"><span>Live Demo</span><ExternalLink size={18} /></a>
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-3 px-6 py-4 bg-gold-600 text-white rounded-xl hover:bg-gold-700 transition-colors font-semibold"><span>Source Code</span><Github size={18} /></a>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-7 shadow-sm">
              <div className="flex items-center gap-2 mb-4"><Sparkles className="text-gold-600 dark:text-gold-400" size={20} /><h3 className="text-xl font-semibold text-gray-900 dark:text-white">Architecture Diagram</h3></div>
              <div className="rounded-2xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 p-5">
                <div className="flex flex-col items-center gap-3">
                  <div className="rounded-xl border border-gold-300 bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm">User</div>
                  <div className="text-gold-600">↓</div>
                  <div className="rounded-xl border border-gold-300 bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm">React Frontend</div>
                  <div className="text-gold-600">↓</div>
                  <div className="rounded-xl border border-gold-300 bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm">API Layer</div>
                  <div className="text-gold-600">↓</div>
                  <div className="rounded-xl border border-gold-300 bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm">Database / Storage</div>
                  <div className="text-gold-600">↓</div>
                  <div className="rounded-xl border border-gold-300 bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm">External Services</div>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-gold-50 to-white dark:from-gold-900/10 dark:to-gray-800 p-7 shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-gold-600 dark:text-gold-400 mt-1" size={20} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Business Impact</h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">{project.impact}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {relatedProjects.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-24 pt-24 border-t border-gray-300 dark:border-gray-700">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">More <span className="text-gold-600 dark:text-gold-400">Projects</span></h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedProjects.map((p) => (
                <motion.div key={p.slug} whileHover={{ y: -8 }} className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm">
                  <div className="flex items-start justify-between mb-4"><span className="text-5xl">{p.hero}</span><span className="px-3 py-1 bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-400 rounded-full text-xs font-semibold">{p.category}</span></div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{p.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{p.description}</p>
                  <Link to={`/projects/${p.slug}`} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">View Project <ExternalLink size={16} /></Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

