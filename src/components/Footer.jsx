import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Twitter, Heart } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const socialLinks = [
  { icon: Github, href: 'https://github.com/shivakrishna9381', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/shiva-krishna-2-/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/designerkrizz', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const { isDark } = useTheme()

  return (
    <footer className={`py-16 lg:py-20 border-t ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold font-[family-name:var(--font-heading)]">
            <span className="gradient-text">Krizz</span>
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  isDark
                    ? 'bg-white/5 text-gray-400 hover:bg-[#7C3AED]/20 hover:text-[#A78BFA]'
                    : 'bg-gray-100 text-gray-500 hover:bg-[#EDE9FE] hover:text-[#7C3AED]'
                }`}
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Motto */}
        <div className="text-center mb-6">
          <p className={`text-sm font-semibold tracking-[0.3em] uppercase ${isDark ? 'text-[#7C3AED]/40' : 'text-[#7C3AED]/25'}`}>
            Innovate · Inspire · Create · Conquer
          </p>
        </div>

        {/* Bottom */}
        <div className={`text-center text-sm pt-6 border-t ${isDark ? 'border-white/5 text-gray-500' : 'border-gray-100 text-gray-400'}`}>
          <p className="flex items-center justify-center gap-1">
            © 2025 Shiva Krishna Thogiti. Made with
            <Heart size={14} className="text-[#7C3AED] fill-[#7C3AED]" />
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
