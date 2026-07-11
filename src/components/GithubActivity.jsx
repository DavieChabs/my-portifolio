import { motion } from 'framer-motion'
import { Github, Sparkles, Layers, Code2 } from 'lucide-react'

export default function GithubActivity() {
  const stats = [
    { label: 'Repositories', value: '12+' },
    { label: 'Contributions', value: '250+' },
    { label: 'Technologies', value: '8+' },
    { label: 'Open Source', value: 'Active' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/70 dark:bg-gray-900/40">
      <div className="max-w-6xl mx-auto rounded-3xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 md:p-12 shadow-2xl">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-sm font-semibold text-gold-300">
              <Github size={16} />
              Open Source & GitHub Activity
            </div>
            <h2 className="mt-5 text-3xl sm:text-4xl font-semibold text-white">
              Building in public, shipping with intention, and learning continuously.
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-gray-300">
              I keep a steady cadence of technical experimentation and project delivery across full-stack applications, AI prototypes, and developer tooling.
            </p>
            <a
              href="https://github.com/daviechabs"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-3 font-semibold text-gray-950 transition hover:bg-gold-400"
            >
              Visit GitHub Profile
              <Sparkles size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <div className="mb-2 flex items-center gap-2 text-gold-300">
                  {stat.label === 'Repositories' && <Code2 size={16} />}
                  {stat.label === 'Contributions' && <Layers size={16} />}
                  {stat.label === 'Technologies' && <Sparkles size={16} />}
                  {stat.label === 'Open Source' && <Github size={16} />}
                </div>
                <div className="text-3xl font-semibold text-white">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
