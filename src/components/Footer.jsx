import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Twitter, Heart, ArrowUpRight } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const socialLinks = [
  { icon: Github, href: 'https://github.com/shivakrishna9381', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/shiva-krishna-2-/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/designerkrizz', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

const footerColumns = [
  {
    title: 'Navigate',
    links: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Projects', href: '#projects' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Web Development', href: '#services' },
      { name: 'App Development', href: '#services' },
      { name: 'UI/UX Design', href: '#services' },
      { name: 'Brand Identity', href: '#services' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { name: 'Contact', href: '#contact' },
      { name: 'GitHub', href: 'https://github.com/shivakrishna9381', external: true },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/shiva-krishna-2-/', external: true },
      { name: 'Instagram', href: 'https://www.instagram.com/designerkrizz', external: true },
    ],
  },
]


export default function Footer() {
  const { isDark } = useTheme()

  return (
    <footer className="relative pb-8 pt-0">

      {/* Soft violet glow behind the card */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div
          className={`w-[700px] h-[500px] rounded-full blur-[160px] ${
            isDark
              ? 'bg-[#7C3AED]/[0.08]'
              : 'bg-[#7C3AED]/[0.06]'
          }`}
        />
      </div>
      {/* Secondary glow offset */}
      <div className="absolute bottom-0 left-1/4 pointer-events-none" aria-hidden="true">
        <div
          className={`w-[400px] h-[300px] rounded-full blur-[120px] ${
            isDark
              ? 'bg-[#A78BFA]/[0.06]'
              : 'bg-[#A78BFA]/[0.04]'
          }`}
        />
      </div>

      {/* Main footer card */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        <div
          className={`relative rounded-3xl overflow-hidden p-8 md:p-12 lg:p-14 ${
            isDark
              ? 'bg-[#1E293B]/60 border border-white/[0.06]'
              : 'bg-white/80 backdrop-blur-sm border border-gray-200/60 shadow-xl shadow-gray-200/40'
          }`}
        >
          {/* Subtle gradient accent on card */}
          <div
            className={`absolute top-0 left-0 right-0 h-[1px] ${
              isDark
                ? 'bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent'
                : 'bg-gradient-to-r from-transparent via-[#7C3AED]/15 to-transparent'
            }`}
          />

          {/* Top section: Logo + description | Link columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
            {/* Left: Brand */}
            <div className="lg:col-span-4">
              <a href="#home" className="inline-block text-2xl font-bold font-[family-name:var(--font-heading)] mb-4">
                <span className="gradient-text">Krizz</span>
              </a>
              <p className={`text-sm leading-relaxed max-w-xs mb-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Design-driven developer crafting scalable digital products, modern interfaces, and memorable experiences — everything you need in one place.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                      isDark
                        ? 'bg-white/5 text-gray-400 hover:bg-[#7C3AED]/20 hover:text-[#A78BFA]'
                        : 'bg-gray-100 text-gray-500 hover:bg-[#EDE9FE] hover:text-[#7C3AED]'
                    }`}
                    aria-label={social.label}
                  >
                    <social.icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right: Link columns */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:pl-8">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h4
                    className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                      isDark ? 'text-white' : 'text-[#0F172A]'
                    }`}
                  >
                    {column.title}
                  </h4>
                  <ul className="space-y-2.5">
                    {column.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className={`group inline-flex items-center gap-1 text-sm transition-colors ${
                            isDark
                              ? 'text-gray-400 hover:text-white'
                              : 'text-gray-500 hover:text-[#0F172A]'
                          }`}
                        >
                          {link.name}
                          {link.external && (
                            <ArrowUpRight
                              size={12}
                              className="opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
                            />
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Large watermark name with glass/shine effect */}
          <div className="relative h-24 md:h-32 lg:h-40 mb-8 pointer-events-none select-none">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-0 leading-[0.85]">
              {['SHIVA', 'KRISHNA'].map((word) => (
                <span
                  key={word}
                  className={`block text-5xl md:text-7xl lg:text-[7rem] font-bold font-[family-name:var(--font-heading)] tracking-tight watermark-shine ${
                    isDark ? 'watermark-shine-dark' : 'watermark-shine-light'
                  }`}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom bar: copyright + legal links */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t ${
              isDark ? 'border-white/[0.06]' : 'border-gray-100'
            }`}
          >
            <p
              className={`text-xs flex items-center gap-1 ${
                isDark ? 'text-gray-500' : 'text-gray-400'
              }`}
            >
              © 2025 Shiva Krishna Thogiti. Made with
              <Heart size={12} className="text-[#7C3AED] fill-[#7C3AED]" />
              All Rights Reserved.
            </p>

            <div className="flex items-center gap-5">
              <a
                href="#"
                className={`text-xs transition-colors ${
                  isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Terms of Service
              </a>
              <a
                href="#"
                className={`text-xs transition-colors ${
                  isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Spacing below card */}
      <div className="h-4" />
    </footer>
  )
}
