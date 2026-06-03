import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Sparkles, Code, Palette, Cpu } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const roles = ['FullStack Developer', 'UI/UX Designer', 'Machine Learning Engineer']

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
        transition={{ duration: 3 + delay, repeat: Infinity, ease: 'easeInOut' }}
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
        timeout = setTimeout(() => setText(currentRole.slice(0, text.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1500)
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 40)
      } else {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-3xl ${isDark ? 'bg-[#7C3AED]/8' : 'bg-[#7C3AED]/5'}`} />
        <div className={`absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl ${isDark ? 'bg-[#6D28D9]/6' : 'bg-[#A78BFA]/8'}`} />
        <div className={`absolute top-1/3 left-0 w-[300px] h-[300px] rounded-full blur-3xl ${isDark ? 'bg-[#7C3AED]/4' : 'bg-[#EDE9FE]/60'}`} />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6 ${
              isDark ? 'bg-[#7C3AED]/10 text-[#A78BFA] border border-[#7C3AED]/20' : 'bg-[#EDE9FE] text-[#7C3AED] border border-[#7C3AED]/15'
            }`}
          >
            <Sparkles size={14} />
            Available for freelance work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] leading-[1.1] mb-4 ${
              isDark ? 'text-white' : 'text-[#0F172A]'
            }`}
          >
            <>
              Designing Digital{' '}
              <span className="gradient-text">Experiences</span>{' '}
              That Drive Real{' '}
              <span className="gradient-text">Impact</span>
            </>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <div className={`text-xl md:text-2xl font-[family-name:var(--font-heading)] font-medium h-10 ${isDark ? 'text-[#A78BFA]' : 'text-[#7C3AED]'}`}>
              {text}
              <span className="animate-pulse ml-0.5">|</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`text-lg max-w-lg mb-8 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
          >
            Building scalable digital products, interfaces, and experiences that help companies grow faster. Code that Breathes. Designs that Speak.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:opacity-90 transition-all duration-300 border border-[#7C3AED]/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                Reach Out
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
            <a
              href="/shivakrishnathogiti.pdf"
              download
              className={`inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                isDark
                  ? 'bg-white/10 border border-white/20 text-white hover:opacity-80'
                  : 'bg-gray-200 border border-gray-300 text-gray-900 hover:opacity-80'
              }`}
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Right: Character and floating cards */}
        <div className="hidden lg:block relative h-[600px]">
          {/* Central character image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.img
              src={isDark ? "/assets/Herocardcharacter _dark.svg" : "/assets/Herocardcharacter.svg"}
              alt="Hero Character"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-[240px] h-[310px] object-contain relative z-10 drop-shadow-2xl"
            />
          </div>

          {/* Floating cards - Medium size */}
          <FloatingCard
            delay={0.3}
            className="absolute top-[132px] right-[24px] z-30"
          >
            <div className={`p-4 rounded-xl shadow-lg ${isDark ? 'bg-[#1E293B] border border-white/5' : 'bg-white border border-gray-100 shadow-gray-200/40'}`}>
              <Code className="text-[#7C3AED] mb-2" size={22} />
              <h3 className={`font-semibold font-[family-name:var(--font-heading)] mb-0.5 text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>Web Development</h3>
              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>React, Tailwind</p>
            </div>
          </FloatingCard>

          <FloatingCard
            delay={0.5}
            className="absolute top-[132px] left-[54px] z-30"
          >
            <div className={`p-4 rounded-xl shadow-lg ${isDark ? 'bg-[#1E293B] border border-white/5' : 'bg-white border border-gray-100 shadow-gray-200/40'}`}>
              <Palette className="text-[#A78BFA] mb-2" size={22} />
              <h3 className={`font-semibold font-[family-name:var(--font-heading)] mb-0.5 text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>UI/UX Design</h3>
              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Figma, Design</p>
            </div>
          </FloatingCard>

          <FloatingCard
            delay={0.7}
            className="absolute bottom-[100px] left-1/2 z-30 -translate-x-1/2"
          >
            <div className={`p-4 rounded-xl shadow-lg ${isDark ? 'bg-[#1E293B] border border-white/5' : 'bg-white border border-gray-100 shadow-gray-200/40'}`}>
              <Cpu className="text-[#7C3AED] mb-2" size={22} />
              <h3 className={`font-semibold font-[family-name:var(--font-heading)] mb-0.5 text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>AI & ML</h3>
              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Python, NLP</p>
            </div>
          </FloatingCard>

          {/* Soft shadow effect for character */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[320px] bg-gradient-to-b from-transparent to-gray-400/10 rounded-3xl blur-2xl pointer-events-none" />
        </div>
      </div>
    </section>
  )
}