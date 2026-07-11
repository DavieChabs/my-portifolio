import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find((entry) => entry.slug === slug)

  if (!post) {
    return (
      <main className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900/40 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-10 text-center shadow-sm">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">Post not found</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">The article you are looking for is not available yet.</p>
          <Link to="/blog" className="mt-6 inline-flex items-center gap-2 font-semibold text-gold-600 dark:text-gold-400"><ArrowLeft size={16} /> Back to journal</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900/40 px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 sm:p-10 shadow-sm">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 dark:text-gold-400"><ArrowLeft size={16} /> Back to journal</Link>
        <div className="mt-6 inline-flex rounded-full bg-gold-100 px-3 py-1 text-sm font-medium text-gold-700 dark:bg-gold-900/30 dark:text-gold-400">{post.category}</div>
        <h1 className="mt-4 text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white">{post.title}</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">{post.description}</p>
        <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">{post.readTime} • {post.publishedAt}</div>
        <div className="mt-8 space-y-4 text-gray-700 dark:text-gray-300">
          <p>This article is being prepared as part of the portfolio’s engineering journal. It will soon include a full deep dive into the topic, implementation lessons, and key takeaways.</p>
          <p>For now, this route is ready for future expansion and fits the professional portfolio structure you requested.</p>
        </div>
      </div>
    </main>
  )
}
