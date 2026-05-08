import { motion } from 'framer-motion'
import { Briefcase, Layers } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: 'Student Software Engineer',
      company: 'Michigan State University Projects',
      duration: '2023 – Present',
      description: 'Designed and shipped web applications focused on operations management, communications automation, and student services using React, Django, Flask, and PostgreSQL.',
    },
    {
      title: 'Freelance Developer',
      company: 'Independent Projects',
      duration: '2024',
      description: 'Delivered client-focused digital solutions, including a campus housing platform and automated communication tools, while managing product requirements and feedback loops.',
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-2xl bg-gold-100 dark:bg-gold-900/30 text-gold-600 dark:text-gold-400">
            <Briefcase size={28} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Experience</h2>
            <p className="text-gray-600 dark:text-gray-400">Relevant roles and project leadership that support my engineering career.</p>
          </div>
        </div>

        <div className="space-y-6">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gold-600 dark:text-gold-400 font-semibold">{item.company}</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{item.duration}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
