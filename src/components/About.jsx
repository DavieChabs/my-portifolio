import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function About() {
  const strengths = [
    'Full-Stack Development',
    'Artificial Intelligence',
    'API Development',
    'System Design',
    'Problem Solving',
    'Database Design',
    'Team Collaboration',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-gold-600 dark:text-gold-400 font-semibold mb-3">About</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Emerging software engineer with a strong foundation in product delivery.</h2>
          <div className="w-24 h-1 bg-gold-600 dark:bg-gold-400 rounded" />
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I am an emerging software engineer focused on building reliable, scalable, and user-centered web applications. My work blends strong technical implementation with thoughtful product thinking, especially in areas such as finance, agriculture, and enterprise operations.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I enjoy translating complex requirements into practical systems using modern tools like React, Node.js, Python, and cloud-enabled architectures. I care deeply about maintainable code, clean interfaces, and solutions that can grow with users and business needs.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Outside of building features, I am constantly exploring AI, data-driven experiences, and engineering practices that improve reliability, performance, and long-term maintainability.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Core Strengths</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {strengths.map((strength, index) => (
                <motion.div key={strength} variants={itemVariants} whileHover={{ x: 4 }} className="flex items-center gap-3 rounded-xl bg-gray-50 dark:bg-gray-700/70 p-3">
                  <CheckCircle className="text-gold-600 dark:text-gold-400 flex-shrink-0" size={20} />
                  <span className="font-medium text-gray-700 dark:text-gray-200">{strength}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
