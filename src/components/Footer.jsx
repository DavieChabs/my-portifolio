import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/about' },
    { name: 'Projects', href: '/projects' },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent">
                David Tamutsa
              </span>
            </h3>
            <p className="text-gray-400">
              Software Engineer & Full-Stack Developer
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold mb-4 text-gold-400">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold mb-4 text-gold-400">Follow Me</h4>
            <div className="flex gap-4">
              {[
                { name: 'GitHub', url: 'https://github.com/davidchabikwa' },
                { name: 'LinkedIn', url: 'https://linkedin.com/in/davidchabikwa' },
                { name: 'Twitter', url: 'https://twitter.com/daviechabs' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold-400 transition-colors text-lg"
                  title={social.name}
                >
                  {social.name === 'GitHub' && '🐙'}
                  {social.name === 'LinkedIn' && '💼'}
                  {social.name === 'Twitter' && '𝕏'}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm"
        >
          <p>
            © {currentYear} David Tamutsa Chabikwa. All rights reserved.
          </p>
          <p className="mt-2">
            Designed & Built with{' '}
            <span className="text-gold-400">❤️</span> using React, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
