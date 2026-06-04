import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Github, Linkedin } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ x: '-50%' }}
      className={`absolute left-1/2 top-4 z-50 w-[95%] max-w-[1200px] border transition-all duration-300 md:fixed md:backdrop-blur-xl ${
        isOpen ? 'rounded-3xl' : 'rounded-full'
      } ${
        isDark
          ? `border-[#7C3AED]/30 bg-[#0F172A] ${
              scrolled
                ? 'md:bg-[#0F172A]/95 md:shadow-lg md:shadow-[#7C3AED]/5'
                : 'md:border-white/10 md:bg-[#0F172A]/85'
            }`
          : `border-gray-200 bg-white ${
              scrolled
                ? 'md:bg-white/95 md:shadow-lg md:shadow-black/5'
                : 'md:border-gray-200 md:bg-white/90'
            }`
      }`}
    >
      <div className="flex items-center justify-between px-5 py-3 sm:px-6">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-heading)] text-2xl font-bold">
            <span className="gradient-text">Krizz</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`group relative text-sm font-medium transition-colors duration-300 ${
                isDark
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {link.name}

              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop Controls */}
        <div className="hidden items-center gap-4 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`rounded-full p-2 transition-all duration-300 ${
              isDark
                ? 'bg-white/5 text-gray-300 hover:bg-white/10'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          <a
            href="https://github.com/shivakrishna9381"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={`rounded-full p-2 transition-all duration-300 ${
              isDark
                ? 'text-gray-300 hover:bg-white/10 hover:text-white'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/shiva-krishna-2-/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={`rounded-full p-2 transition-all duration-300 ${
              isDark
                ? 'text-gray-300 hover:bg-white/10 hover:text-white'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <Linkedin size={18} />
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`rounded-full p-2 transition-colors ${
              isDark
                ? 'bg-white/10 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            className={`rounded-full p-2 transition-colors ${
              isDark
                ? 'bg-white/10 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`overflow-hidden rounded-b-3xl md:hidden ${
              isDark ? 'bg-[#0F172A]' : 'bg-white'
            }`}
          >
            <div
              className={`flex flex-col px-4 pb-5 pt-3 ${
                isDark
                  ? 'border-t border-white/10'
                  : 'border-t border-gray-200'
              }`}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className={`rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                    isDark
                      ? 'text-gray-200 hover:bg-white/10 hover:text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-950'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}

              <div
                className={`mt-3 flex gap-3 border-t pt-4 ${
                  isDark ? 'border-white/10' : 'border-gray-200'
                }`}
              >
                <a
                  href="https://github.com/shivakrishna9381"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-colors ${
                    isDark
                      ? 'bg-white/10 text-white hover:bg-white/15'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Github size={17} />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/shiva-krishna-2-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-colors ${
                    isDark
                      ? 'bg-white/10 text-white hover:bg-white/15'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Linkedin size={17} />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}