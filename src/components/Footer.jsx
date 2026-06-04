import { motion } from 'framer-motion'
import {
  ArrowUp,
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Sparkles,
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const BehanceIcon = ({ size = 17 }) => (
  <span
    aria-hidden="true"
    style={{ fontSize: `${size}px`, fontWeight: 800, lineHeight: 1 }}
  >
    Be
  </span>
)

const socialLinks = [
  { icon: Github, href: 'https://github.com/shivakrishna9381', label: 'GitHub' },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/shiva-krishna-2-/',
    label: 'LinkedIn',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/designerkrizz',
    label: 'Instagram',
  },
  {
    icon: BehanceIcon,
    href: 'https://www.behance.net/shivakrishna_f2',
    label: 'Behance',
  },
]

const footerColumns = [
  {
    title: 'Navigation',
    links: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
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
]

export default function Footer() {
  const { isDark } = useTheme()

  return (
    <footer
      className={`relative overflow-hidden pt-16 ${
        isDark ? 'bg-[#02030A]' : 'bg-[#F8FAFC]'
      }`}
    >
      <style>
        {`
          @keyframes footerNameShine {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <div
        className={`absolute inset-0 ${
          isDark
            ? 'bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.18),transparent_34%),radial-gradient(circle_at_85%_85%,rgba(168,85,247,0.12),transparent_30%)]'
            : 'bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.10),transparent_34%),radial-gradient(circle_at_85%_85%,rgba(168,85,247,0.08),transparent_30%)]'
        }`}
      />

      {!isDark && (
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              'linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px)',
            backgroundSize: '46px 46px',
          }}
        />
      )}

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-10">
        <div className="relative flex h-[92px] translate-y-5 items-end justify-center overflow-visible sm:h-[130px] lg:h-[165px]">
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="select-none whitespace-nowrap font-[family-name:var(--font-heading)] text-[64px] font-bold leading-none sm:text-[104px] lg:text-[145px]"
            style={{
              backgroundImage: isDark
                ? 'linear-gradient(180deg, rgba(255,255,255,0.34), rgba(168,85,247,0.18) 48%, rgba(255,255,255,0.06))'
                : 'linear-gradient(180deg, rgba(15,23,42,0.20), rgba(124,58,237,0.12) 52%, rgba(15,23,42,0.05))',
              backgroundSize: '220% 220%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              animation: 'footerNameShine 6s ease-in-out infinite',
              textShadow: isDark
                ? '0 0 34px rgba(124,58,237,0.22)'
                : '0 18px 45px rgba(124,58,237,0.10)',
            }}
          >
            SHIVA KRISHNA
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className={`relative -mt-4 overflow-hidden rounded-3xl border p-6 backdrop-blur-2xl sm:p-8 lg:p-10 ${
            isDark
              ? 'border-white/10 bg-[#080A0F]/86 shadow-[0_30px_100px_rgba(0,0,0,0.58)]'
              : 'border-white bg-white/88 shadow-[0_28px_90px_rgba(15,23,42,0.10)]'
          }`}
        >
          <div
            className={`absolute inset-x-0 top-0 h-px ${
              isDark
                ? 'bg-gradient-to-r from-transparent via-[#A855F7]/45 to-transparent'
                : 'bg-gradient-to-r from-transparent via-violet-200 to-transparent'
            }`}
          />

          <div
            className={`absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl ${
              isDark ? 'bg-[#7C3AED]/16' : 'bg-[#7C3AED]/10'
            }`}
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.35fr_1fr_1fr] lg:gap-12">
            <div>
              <div
                className={`mb-6 flex h-11 w-11 items-center justify-center rounded-2xl ${
                  isDark
                    ? 'bg-[#7C3AED]/15 text-[#C4B5FD]'
                    : 'bg-violet-100 text-[#7C3AED]'
                }`}
              >
                <Sparkles size={20} />
              </div>

              <h3
                className={`font-[family-name:var(--font-heading)] text-lg font-bold ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}
              >
                Want to build something clean and useful?
              </h3>

              <p
                className={`mt-4 max-w-[330px] text-sm leading-6 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Design-driven developer crafting scalable digital products,
                modern interfaces, and memorable experiences.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7C3AED] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#6D28D9]"
                >
                  Let&apos;s Connect
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href="#projects"
                  className={`inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                    isDark
                      ? 'border-white/14 text-slate-300 hover:border-[#A855F7]/45 hover:text-white'
                      : 'border-slate-200 text-slate-700 hover:border-[#7C3AED]/35 hover:text-[#7C3AED]'
                  }`}
                >
                  See My Work
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon

                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href === '#' ? undefined : '_blank'}
                      rel={social.href === '#' ? undefined : 'noopener noreferrer'}
                      whileHover={{ y: -2, scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      aria-label={social.label}
                      className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                        isDark
                          ? 'border-white/10 bg-white/[0.03] text-slate-400 hover:border-[#A855F7]/50 hover:text-[#C4B5FD]'
                          : 'border-slate-200 bg-white text-slate-500 hover:border-[#7C3AED]/35 hover:text-[#7C3AED]'
                      }`}
                    >
                      <Icon size={17} />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {footerColumns.map((column) => (
              <div key={column.title}>
                <h4
                  className={`mb-5 text-sm font-bold ${
                    isDark ? 'text-white' : 'text-slate-950'
                  }`}
                >
                  {column.title}
                </h4>

                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className={`group inline-flex items-center gap-2 text-sm transition-colors ${
                          isDark
                            ? 'text-slate-400 hover:text-white'
                            : 'text-slate-500 hover:text-slate-950'
                        }`}
                      >
                        {link.name}
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 transition-all duration-300 group-hover:opacity-100"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className={`relative mt-10 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between ${
              isDark ? 'border-white/10' : 'border-slate-200'
            }`}
          >
            <p
              className={`text-sm ${
                isDark ? 'text-slate-500' : 'text-slate-500'
              }`}
            >
              &copy; 2026 Shiva Krishna Thogiti. All Rights Reserved.
            </p>

            
          </div>
        </motion.div>
      </div>

      <div className="h-8" />
    </footer>
  )
}