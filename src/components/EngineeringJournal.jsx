import { motion } from 'framer-motion'
import { ArrowRight, Clock3, CalendarDays } from 'lucide-react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

export default function EngineeringJournal() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-gold-600 dark:text-gold-400 font-semibold mb-3">Engineering Journal</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white">Notes on product thinking, system design, and continuous learning.</h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm"
            >
              <div className="mb-4 inline-flex rounded-full bg-gold-100 px-3 py-1 text-sm font-medium text-gold-700 dark:bg-gold-900/30 dark:text-gold-400">
                {post.category}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{post.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">{post.description}</p>
              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="inline-flex items-center gap-2"><Clock3 size={14} /> {post.readTime}</span>
                <span className="inline-flex items-center gap-2"><CalendarDays size={14} /> {post.publishedAt}</span>
              </div>
              <Link to={`/blog/${post.slug}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-gold-600 transition hover:text-gold-700 dark:text-gold-400">
                Read more <ArrowRight size={16} />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
