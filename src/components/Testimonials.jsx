import { motion } from 'framer-motion'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-gold-600 dark:text-gold-400 font-semibold mb-3">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">Praise from collaborators and mentors</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg p-8"
            >
              <p className="text-gray-700 dark:text-gray-300 mb-8">“{testimonial.quote}”</p>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{testimonial.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
