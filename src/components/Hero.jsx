import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Download,
  Sparkles,
  Code,
  Palette,
  Cpu,
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const roles = [
  'FullStack Developer',
  'UI/UX Designer',
  'Machine Learning Engineer',
]

function FloatingCard({ children, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 3 + delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const { isDark } = useTheme()
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (!isDeleting) {
      if (text.length < currentRole.length) {
        timeout = setTimeout(
          () => setText(currentRole.slice(0, text.length + 1)),
          80,
        )
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1500)
      }
    } else if (text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40)
    } else {
      setIsDeleting(false)
      setRoleIndex((previous) => (previous + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  const cardStyle = isDark
    ? 'border border-white/5 bg-[#1E293B]'
    : 'border border-gray-100 bg-white shadow-gray-200/40'

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background gradient effects */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full blur-3xl ${
            isDark ? 'bg-[#7C3AED]/8' : 'bg-[#7C3AED]/5'
          }`}
        />

        <div
          className={`absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full blur-3xl ${
            isDark ? 'bg-[#6D28D9]/6' : 'bg-[#A78BFA]/8'
          }`}
        />

        <div
          className={`absolute left-0 top-1/3 h-[300px] w-[300px] rounded-full blur-3xl ${
            isDark ? 'bg-[#7C3AED]/4' : 'bg-[#EDE9FE]/60'
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] items-center gap-6 px-6 lg:grid-cols-2 lg:gap-12 lg:px-12">
        {/* Left content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium ${
              isDark
                ? 'border-[#7C3AED]/20 bg-[#7C3AED]/10 text-[#A78BFA]'
                : 'border-[#7C3AED]/15 bg-[#EDE9FE] text-[#7C3AED]'
            }`}
          >
            <Sparkles size={14} />
            Available for freelance work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`mb-4 font-[family-name:var(--font-heading)] text-3xl font-bold leading-[1.1] md:text-4xl lg:text-5xl ${
              isDark ? 'text-white' : 'text-[#0F172A]'
            }`}
          >
            Designing Digital <span className="gradient-text">Experiences</span>{' '}
            That Drive Real <span className="gradient-text">Impact</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <div
              className={`h-10 font-[family-name:var(--font-heading)] text-xl font-medium md:text-2xl ${
                isDark ? 'text-[#A78BFA]' : 'text-[#7C3AED]'
              }`}
            >
              {text}
              <span className="ml-0.5 animate-pulse">|</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`mb-8 max-w-lg text-lg leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            Building scalable digital products, interfaces, and experiences
            that help companies grow faster. Code that Breathes. Designs that
            Speak.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/30 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90"
            >
              Reach Out
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="/shivakrishnathogiti.pdf"
              download
              className={`inline-flex items-center gap-2 rounded-full border px-7 py-3 text-sm font-semibold transition-all duration-300 ${
                isDark
                  ? 'border-white/20 bg-white/10 text-white hover:opacity-80'
                  : 'border-gray-300 bg-gray-200 text-gray-900 hover:opacity-80'
              }`}
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Character and floating cards */}
        <div className="relative mt-4 h-[410px] w-full sm:h-[480px] lg:mt-0 lg:h-[600px]">
          {/* Central character image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.img
              src={
                isDark
                  ? '/assets/Herocardcharacter_dark.svg'
                  : '/assets/Herocardcharacter.svg'
              }
              alt="Hero Character"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 h-[235px] w-[170px] object-contain drop-shadow-2xl sm:h-[280px] sm:w-[210px] lg:h-[310px] lg:w-[240px]"
            />
          </div>

          {/* Web Development card */}
          <FloatingCard
            delay={0.3}
            className="absolute right-0 top-[60px] z-30 sm:right-[8%] sm:top-[90px] lg:right-[24px] lg:top-[132px]"
          >
            <div
              className={`w-[128px] rounded-xl p-2.5 shadow-lg sm:w-auto sm:p-3 lg:p-4 ${cardStyle}`}
            >
              <Code
                className="mb-1.5 text-[#7C3AED] lg:mb-2"
                size={20}
              />

              <h3
                className={`mb-0.5 font-[family-name:var(--font-heading)] text-xs font-semibold sm:text-sm ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Web Development
              </h3>

              <p
                className={`text-[10px] sm:text-xs ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                React, Tailwind
              </p>
            </div>
          </FloatingCard>

          {/* UI/UX card */}
          <FloatingCard
            delay={0.5}
            className="absolute left-0 top-[60px] z-30 sm:left-[8%] sm:top-[90px] lg:left-[54px] lg:top-[132px]"
          >
            <div
              className={`w-[128px] rounded-xl p-2.5 shadow-lg sm:w-auto sm:p-3 lg:p-4 ${cardStyle}`}
            >
              <Palette
                className="mb-1.5 text-[#A78BFA] lg:mb-2"
                size={20}
              />

              <h3
                className={`mb-0.5 font-[family-name:var(--font-heading)] text-xs font-semibold sm:text-sm ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                UI/UX Design
              </h3>

              <p
                className={`text-[10px] sm:text-xs ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                Figma, Design
              </p>
            </div>
          </FloatingCard>

          {/* AI and ML card */}
          <FloatingCard
            delay={0.7}
            className="absolute inset-x-0 bottom-[32px] z-30 flex justify-center sm:bottom-[55px] lg:bottom-[100px]"
          >
            <div
              className={`w-[128px] rounded-xl p-2.5 shadow-lg sm:w-auto sm:p-3 lg:p-4 ${cardStyle}`}
            >
              <Cpu
                className="mb-1.5 text-[#7C3AED] lg:mb-2"
                size={20}
              />

              <h3
                className={`mb-0.5 font-[family-name:var(--font-heading)] text-xs font-semibold sm:text-sm ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                AI & ML
              </h3>

              <p
                className={`text-[10px] sm:text-xs ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                Python, NLP
              </p>
            </div>
          </FloatingCard>

          {/* Character shadow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[245px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-gradient-to-b from-transparent to-gray-400/10 blur-2xl sm:h-[290px] sm:w-[230px] lg:h-[320px] lg:w-[260px]" />
        </div>
      </div>
    </section>
  )
}