import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function About() {
  const strengths = [
    'Clean & Maintainable Code',
    'Problem-Solving Mindset',
    'Fast Learner',
    'Team Collaboration',
    'Full-Stack Development',
    'Attention to Detail',
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
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
            About <span className="text-gold-600 dark:text-gold-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gold-600 dark:bg-gold-400 rounded"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm a junior software engineer with a passion for building innovative solutions that solve real-world problems. 
              Currently pursuing my degree in Software Engineering at Midlands State University, I combine academic knowledge 
              with practical experience gained from developing multiple full-stack applications.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              My journey in tech started with a curiosity about how things work, which evolved into a commitment to mastering 
              modern development practices. I'm experienced in both frontend and backend technologies, with expertise in React, 
              Python, Node.js, and database management.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and learning from the 
              amazing developer community. I'm actively seeking opportunities to grow, collaborate, and make a meaningful impact 
              in the tech industry.
            </p>
          </motion.div>

          {/* Right Content - Strengths */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle className="text-gold-600 dark:text-gold-400 flex-shrink-0" size={24} />
                <span className="font-semibold text-gray-700 dark:text-gray-200">{strength}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
