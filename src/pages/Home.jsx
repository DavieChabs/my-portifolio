import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/40">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            Strategic ideas. Quality code. Real impact.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
          >
            I build modern software experiences for ambitious teams and smart products. Explore my work, technical foundation, and how I can help your next software initiative succeed.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Projects',
                description: 'Full-stack systems built with modern tools and strong architecture.',
                href: '/projects',
              },
              {
                title: 'Skills',
                description: 'Frontend, backend, tools, and engineering best practices.',
                href: '/about',
              },
              {
                title: 'Resume',
                description: 'Education, certifications, and professional experience.',
                href: '/resume',
              },
              {
                title: 'Contact',
                description: 'Let’s connect and collaborate on the next big idea.',
                href: '/contact',
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-transparent hover:border-gold-400/30 transition-all"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{card.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{card.description}</p>
                <Link
                  to={card.href}
                  className="inline-flex items-center gap-2 text-gold-600 dark:text-gold-400 font-semibold hover:text-gold-700 transition-colors"
                >
                  Explore
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Highlights />
      <Testimonials />
    </main>
  )
}
