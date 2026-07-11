import { useState } from 'react'
import { Menu, X, Moon, Sun, FileText } from 'lucide-react'
import { motion } from 'framer-motion'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar({ isDark, setIsDark }) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold bg-gradient-to-r from-gold-600 to-gold-400 bg-clip-text text-transparent">
            <Link to="/">DTC</Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.path} className={({ isActive }) => `px-3 py-2 text-sm font-medium transition-colors ${isActive ? 'text-gold-600 dark:text-gold-400' : 'text-gray-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400'}`}>
                {item.name}
              </NavLink>
            ))}
            <a href={`${import.meta.env.BASE_URL}David_Tamutsa_Chabikwa_Resume.pdf`} download className="ml-2 inline-flex items-center gap-2 rounded-full border border-gold-600 px-3 py-2 text-sm font-medium text-gold-600 transition hover:bg-gold-50 dark:border-gold-400 dark:text-gold-400 dark:hover:bg-gold-900/20">
              <FileText size={16} /> Resume
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => setIsDark(!isDark)} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gold-100 dark:hover:bg-gold-900/20 transition-colors" aria-label="Toggle theme">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Toggle menu">
              {isOpen ? <X size={24} className="text-gray-700 dark:text-gray-300" /> : <Menu size={24} className="text-gray-700 dark:text-gray-300" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.path} onClick={() => setIsOpen(false)} className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive ? 'text-gold-600 dark:text-gold-400 bg-gray-100 dark:bg-gray-800' : 'text-gray-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
                {item.name}
              </NavLink>
            ))}
            <a href={`${import.meta.env.BASE_URL}David_Tamutsa_Chabikwa_Resume.pdf`} download onClick={() => setIsOpen(false)} className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md text-gold-600 dark:text-gold-400 hover:bg-gray-100 dark:hover:bg-gray-800">
              <FileText size={16} /> Download Resume
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
