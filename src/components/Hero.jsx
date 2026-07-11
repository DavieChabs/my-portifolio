import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const TypingEffect = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index])
        setIndex((prev) => prev + 1)
      }, speed)
      return () => clearTimeout(timer)
    }
  }, [index, text, speed])

  return <span>{displayedText}</span>
}

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/daviechabs', label: 'GitHub', color: 'hover:text-gray-600 dark:hover:text-gray-400' },
    { icon: Linkedin, href: 'https://linkedin.com/in/david-chabikwa', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: Mail, href: 'mailto:chabikwadavid@gmail.com', label: 'Email', color: 'hover:text-red-500' },
  ]

  const metrics = [
    { value: '3+', label: 'Major Software Projects' },
    { value: '4+', label: 'Programming Languages' },
    { value: '2+', label: 'AI Applications' },
    { value: '1000+', label: 'Development Hours' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.25 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -z-10" />

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-6xl mx-auto text-center z-10">
        <motion.div variants={itemVariants} className="mb-8">
          <img
            src={`${import.meta.env.BASE_URL}assets/profile.jpg`}
            alt="David Tamutsa Chabikwa"
            loading="lazy"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto object-cover shadow-lg border-4 border-gold-600 dark:border-gold-400"
          />
        </motion.div>

        <motion.p variants={itemVariants} className="text-gold-600 dark:text-gold-400 font-semibold text-lg mb-4">
          Software Engineer • Full-Stack Developer • AI & FinTech Enthusiast
        </motion.p>

        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gold-400 dark:to-gold-600 bg-clip-text text-transparent">Hi, I’m </span>
          <span className="text-gold-600 dark:text-gold-400"><TypingEffect text="David Tamutsa Chabikwa" speed={70} /></span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-6">
          I design and build scalable web applications, intelligent systems, and digital products that solve real-world business challenges.
        </motion.p>

        <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          I bring a strong product mindset to engineering, combining clean architecture, thoughtful UI, and reliable backend systems to create experiences that are both practical and polished.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link to="/projects" className="px-8 py-3 bg-gold-600 hover:bg-gold-700 text-white font-semibold rounded-full transition-colors inline-flex items-center justify-center gap-2 shadow-lg">
            View Projects
            <ExternalLink size={18} />
          </Link>
          <a href={`${import.meta.env.BASE_URL}David_Tamutsa_Chabikwa_Resume.pdf`} download className="px-8 py-3 border border-gold-600 dark:border-gold-400 text-gold-600 dark:text-gold-400 hover:bg-gold-600/10 font-semibold rounded-full transition-colors inline-flex items-center justify-center gap-2">
            Download Resume
          </a>
          <Link to="/contact" className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-full transition-colors inline-flex items-center justify-center gap-2">
            Contact Me
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 p-4 shadow-sm backdrop-blur">
              <div className="text-2xl font-semibold text-gold-600 dark:text-gold-400">{metric.value}</div>
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-12">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.25, rotate: 8 }} whileTap={{ scale: 0.92 }} className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400 transition-colors ${social.color}`} aria-label={social.label}>
                <Icon size={22} />
              </motion.a>
            )
          })}
        </motion.div>

        <motion.div variants={itemVariants} animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex justify-center">
          <Link to="/about" className="text-gold-600 dark:text-gold-400"><ArrowDown size={30} /></Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
