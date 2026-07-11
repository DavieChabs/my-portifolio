import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      items: [
        { name: 'React', projects: 'Portfolio / Ops Platform', experience: '2+ yrs' },
        { name: 'JavaScript', projects: 'Interactive Interfaces', experience: '2+ yrs' },
        { name: 'TypeScript', projects: 'Type-safe UI Systems', experience: '1+ yrs' },
        { name: 'TailwindCSS', projects: 'Modern UI Design', experience: '2+ yrs' },
      ],
    },
    {
      title: 'Backend',
      items: [
        { name: 'Node.js', projects: 'Automation Services', experience: '2+ yrs' },
        { name: 'Express.js', projects: 'REST APIs', experience: '1+ yrs' },
        { name: 'REST APIs', projects: 'Service Integration', experience: '2+ yrs' },
        { name: 'JWT', projects: 'Authentication Flows', experience: '1+ yrs' },
      ],
    },
    {
      title: 'Databases',
      items: [
        { name: 'MongoDB', projects: 'Flexible Data Models', experience: '1+ yrs' },
        { name: 'MySQL', projects: 'Structured Inventory & Data', experience: '1+ yrs' },
        { name: 'Firebase', projects: 'Real-time Apps', experience: '1+ yrs' },
      ],
    },
    {
      title: 'AI & Data',
      items: [
        { name: 'Python', projects: 'AI & Automation', experience: '2+ yrs' },
        { name: 'TensorFlow', projects: 'Model Experiments', experience: '1+ yrs' },
        { name: 'OpenCV', projects: 'Computer Vision', experience: '1+ yrs' },
        { name: 'Pandas', projects: 'Data Analysis', experience: '1+ yrs' },
      ],
    },
    {
      title: 'Tools & DevOps',
      items: [
        { name: 'Git', projects: 'Version Control', experience: '2+ yrs' },
        { name: 'GitHub', projects: 'Collaboration & Deployment', experience: '2+ yrs' },
        { name: 'Vite', projects: 'Fast local development', experience: '2+ yrs' },
        { name: 'Postman', projects: 'API testing', experience: '1+ yrs' },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-gold-600 dark:text-gold-400 font-semibold mb-3">Skills Matrix</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">A practical toolkit for building modern software products.</h2>
          <div className="w-24 h-1 bg-gold-600 dark:bg-gold-400 rounded" />
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.06 }} className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-gold-600 dark:text-gold-400 mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.name} className="rounded-2xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/60 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-semibold text-gray-900 dark:text-white">{item.name}</span>
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-600 dark:text-gold-400">{item.experience}</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Used in: {item.projects}</p>
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
