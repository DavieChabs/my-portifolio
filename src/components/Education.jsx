import { motion } from 'framer-motion'
import { BookOpen, Award } from 'lucide-react'

export default function Education() {
  const education = [
    {
      type: 'degree',
      title: 'B.S. Software Engineering',
      institution: 'Midlands State University (MSU)',
      duration: 'In Progress',
      description: 'Pursuing a degree in Software Engineering with focus on modern development practices, algorithms, and system design.',
      icon: BookOpen,
    },
  ]

  const certifications = [
    {
      title: 'Full-Stack Web Development',
      issuer: 'Self-Paced Learning',
      date: '2024',
    },
    {
      title: 'Mobile App Development with Flutter',
      issuer: 'Self-Paced Learning',
      date: '2024',
    },
    {
      title: 'Backend Development Fundamentals',
      issuer: 'Self-Paced Learning',
      date: '2023',
    },
  ]

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Education & <span className="text-gold-600 dark:text-gold-400">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gold-600 dark:bg-gold-400 rounded"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Degree</h3>
            <div className="space-y-6">
              {education.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-gold-600 dark:border-gold-400"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gold-100 dark:bg-gold-900/30 rounded-lg">
                        <Icon className="text-gold-600 dark:text-gold-400" size={28} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gold-600 dark:text-gold-400 font-semibold mb-1">
                          {item.institution}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          {item.duration}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Certifications & Training</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start gap-3"
                >
                  <Award className="text-gold-600 dark:text-gold-400 mt-1 flex-shrink-0" size={24} />
                  <div className="flex-grow">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Learning Goals */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 p-6 bg-gradient-to-r from-gold-50 to-transparent dark:from-gold-900/10 dark:to-transparent rounded-lg"
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-3">Current Learning Focus</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-400">
                <li>• Advanced TypeScript & System Design</li>
                <li>• Cloud Architecture & DevOps</li>
                <li>• AI/ML Integration in Web Applications</li>
                <li>• Open Source Contributions</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
