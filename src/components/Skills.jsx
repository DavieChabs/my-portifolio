import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion', 'Redux'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'Flask', 'REST APIs', 'GraphQL', 'Authentication'],
    },
    {
      title: 'Database',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Firebase', 'Data Modeling'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Docker', 'AWS', 'Netlify', 'Vercel', 'VS Code', 'Postman'],
    },
    {
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Project Management', 'Critical Thinking', 'Adaptability'],
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: { duration: 0.2 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
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
            My <span className="text-gold-600 dark:text-gold-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gold-600 dark:bg-gold-400 rounded"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              {/* Category Title */}
              <h3 className="text-2xl font-bold text-gold-600 dark:text-gold-400 mb-6">{category.title}</h3>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    variants={skillVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    className="px-4 py-2 bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-400 rounded-full font-semibold text-sm cursor-default hover:bg-gold-200 dark:hover:bg-gold-900/50 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 bg-gradient-to-r from-gold-50 to-transparent dark:from-gold-900/10 dark:to-transparent rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Expertise Level</h3>
          <div className="space-y-4">
            {[
              { name: 'Full-Stack Development', level: 75 },
              { name: 'Frontend Development', level: 80 },
              { name: 'Backend Development', level: 70 },
              { name: 'Database Design', level: 65 },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">{item.name}</span>
                  <span className="text-gold-600 dark:text-gold-400 font-bold">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 * index, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-gold-500 to-gold-600 rounded-full"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
