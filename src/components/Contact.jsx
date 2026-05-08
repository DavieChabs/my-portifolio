import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'chabikwadavid@gmail.com',
      link: 'mailto:chabikwadavid@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Michigan State University, USA',
      link: 'https://www.google.com/maps/search/Michigan+State+University',
    },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitted(true)
      setIsLoading(false)

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' })
        setSubmitted(false)
      }, 2000)
    }, 1000)
  }

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

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="text-gold-600 dark:text-gold-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gold-600 dark:bg-gold-400 rounded mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Contact Information</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={index}
                    variants={itemVariants}
                    href={info.link}
                    target={info.label !== 'Location' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="p-3 bg-gold-100 dark:bg-gold-900/30 rounded-lg flex-shrink-0">
                      <Icon className="text-gold-600 dark:text-gold-400" size={28} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        {info.label}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="mt-10">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {[
                  { label: 'GitHub', url: 'https://github.com/davidchabikwa', icon: '🐙' },
                  { label: 'LinkedIn', url: 'https://linkedin.com/in/david-chabikwa', icon: '💼' },
                  { label: 'Twitter', url: 'https://twitter.com/daviechabs', icon: '𝕏' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-14 h-14 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow text-xl"
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors"
                  placeholder="Let's collaborate!"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading || submitted}
                className="w-full py-3 bg-gold-600 hover:bg-gold-700 disabled:bg-gold-400 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : isLoading ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-green-600 dark:text-green-400 text-center font-semibold"
                >
                  Thanks for reaching out! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
