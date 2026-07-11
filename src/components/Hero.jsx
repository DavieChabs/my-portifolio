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
        setDisplayedText(prev => prev + text[index])
        setIndex(prev => prev + 1)
      }, speed)
      return () => clearTimeout(timer)
    }
  }, [index, text, speed])

  return <span>{displayedText}</span>
}

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/davidchabikwa', label: 'GitHub', color: 'hover:text-gray-600 dark:hover:text-gray-400' },
    { icon: Linkedin, href: 'https://linkedin.com/in/davidchabikwa', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: Mail, href: 'mailto:chabikwadavid@gmail.com', label: 'Email', color: 'hover:text-red-500' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -z-10"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center z-10"
      >
        {/* Profile Picture */}
        <motion.div variants={itemVariants} className="mb-8">
          <img
            src="/assets/profile.jpg"
            alt="David Tamutsa Chabikwa"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto object-cover shadow-lg border-4 border-gold-600 dark:border-gold-400"
          />
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-gold-600 dark:text-gold-400 font-semibold text-lg mb-4"
        >
          Welcome to my portfolio
        </motion.p>

        {/* Main Heading with Typing Effect */}
        <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gold-400 dark:to-gold-600 bg-clip-text text-transparent">
            Hi, I'm{' '}
          </span>
          <span className="text-gold-600 dark:text-gold-400">
            <TypingEffect text="David Tamutsa" speed={80} />
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p variants={itemVariants} className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-400 mb-8">
          Software Engineer & Full-Stack Developer
        </motion.p>

        {/* Bio */}
        <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Junior Software Engineer pursuing B.S. Software Engineering at MSU. Passionate about building innovative solutions
          with clean code and modern technologies. Open to collaborations, learning opportunities, and making an impact in tech.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/projects"
            className="px-8 py-3 bg-gold-600 hover:bg-gold-700 text-white font-semibold rounded-lg transition-colors inline-flex items-center justify-center gap-2"
          >
            View My Work
            <ExternalLink size={18} />
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 border-2 border-gold-600 dark:border-gold-400 text-gold-600 dark:text-gold-400 hover:bg-gold-600/10 font-semibold rounded-lg transition-colors"
          >
            Get In Touch
          </Link>
          <a
            href="/DavidTamutsaChabikwa_CV.pdf"
            download
            className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg transition-colors inline-flex items-center justify-center gap-2"
          >
            Download CV
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-16">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400 transition-colors ${social.color}`}
                aria-label={social.label}
              >
                <Icon size={24} />
              </motion.a>
            )
          })}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <Link to="/about" className="text-gold-600 dark:text-gold-400">
            <ArrowDown size={32} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
