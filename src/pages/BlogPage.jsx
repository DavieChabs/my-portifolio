import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

export default function BlogPage() {
  return (
    <main className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900/40 px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-gold-600 dark:text-gold-400 font-semibold mb-3">Engineering Journal</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 dark:text-white">Reflections on engineering, product, and growth.</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">This space is for practical lessons, shipping notes, and the thinking behind my most meaningful builds.</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <motion.article key={post.slug} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
              <div className="mb-4 inline-flex rounded-full bg-gold-100 px-3 py-1 text-sm font-medium text-gold-700 dark:bg-gold-900/30 dark:text-gold-400">{post.category}</div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{post.title}</h2>
              <p className="mt-3 text-gray-600 dark:text-gray-400">{post.description}</p>
              <Link to={`/blog/${post.slug}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-gold-600 dark:text-gold-400">Read more</Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  )
}
