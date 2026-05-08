import { motion } from 'framer-motion'
import { Rocket, ShieldCheck, Sparkles, Clock3 } from 'lucide-react'

export default function Highlights() {
  const cards = [
    {
      title: 'Fast Delivery',
      description: 'Practical solutions shipped quickly with quality code and product thinking.',
      icon: Rocket,
    },
    {
      title: 'Reliable Architecture',
      description: 'Scalable systems with thoughtful backend design and clean frontend structure.',
      icon: ShieldCheck,
    },
    {
      title: 'Polished UX',
      description: 'Modern interfaces with strong interaction design and smooth animations.',
      icon: Sparkles,
    },
    {
      title: 'Dedicated Focus',
      description: 'Meaningful collaborations that prioritize impact, performance, and growth.',
      icon: Clock3,
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -8 }}
                className="group rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl p-8 transition-all"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gold-100 dark:bg-gold-900/20 text-gold-600 dark:text-gold-400 mb-6">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{card.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{card.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
