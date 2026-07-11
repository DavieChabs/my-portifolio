import { motion } from 'framer-motion'
import { Briefcase, Layers, Code2, ShieldCheck } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: 'Software Engineering Projects',
      company: 'Self-Directed Engineering Experience',
      duration: '2024 – Present',
      description: 'Designed and developed full-stack applications, built responsive interfaces with React, implemented RESTful APIs, integrated databases and authentication, and deployed solutions to production environments.',
      bullets: ['Built production-style web applications for operations, communications, and student services.', 'Led frontend and backend implementation across multiple projects.', 'Used GitHub workflows for version control and delivery.'],
    },
    {
      title: 'Full-Stack Product Development',
      company: 'Independent and Collaborative Projects',
      duration: '2023 – Present',
      description: 'Worked closely with project partners to transform business requirements into shipping software, improve user flows, and create dependable interfaces backed by modern APIs.',
      bullets: ['Applied agile thinking to feature planning and iterative improvement.', 'Focused on scalability, data integrity, and maintainable architecture.', 'Created AI-powered and operational workflows for real-world use cases.'],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-gold-600 dark:text-gold-400 font-semibold mb-3">Experience</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">Software Engineering Projects</h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">A professional-style view of my self-directed engineering experience and the systems I have built.</p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.08 }} className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gold-600 dark:text-gold-400 font-semibold">{item.company}</p>
                </div>
                <span className="rounded-full bg-gold-100 px-3 py-1 text-sm font-medium text-gold-700 dark:bg-gold-900/30 dark:text-gold-400">{item.duration}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
              <div className="mt-6 grid md:grid-cols-3 gap-4">
                {item.bullets.map((bullet) => (
                  <div key={bullet} className="rounded-2xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 p-4 text-sm text-gray-700 dark:text-gray-300">
                    {bullet}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
