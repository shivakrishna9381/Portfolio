import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Sparkles, Code, Palette, Cpu } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const roles = ['Frontend Developer', 'UI/UX Designer', 'Machine Learning Engineer']

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

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
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
            className={`text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] leading-[1.1] mb-4 ${
              isDark ? 'text-white' : 'text-[#0F172A]'
            }`}
          >
            Designing Digital{' '}
            <span className="gradient-text">Products</span> That Feel{' '}
            <span className="gradient-text">Effortless</span>
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
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:from-[#6D28D9] hover:to-[#5B21B6] transition-all duration-300 shadow-lg shadow-[#7C3AED]/25 hover:shadow-[#7C3AED]/40 hover:scale-105"
            >
              Start a Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/shivakrishnathogiti.pdf"
              download
              className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                isDark
                  ? 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                  : 'bg-gray-100 border border-gray-200 text-gray-800 hover:bg-gray-200'
              }`}
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Right: floating cards */}
        <div className="hidden lg:block relative h-[500px]">
          <FloatingCard
            delay={0.3}
            className="absolute top-8 right-8"
          >
            <div className={`p-6 rounded-2xl shadow-xl ${isDark ? 'bg-[#1E293B] border border-white/5' : 'bg-white border border-gray-100 shadow-gray-200/50'}`}>
              <Code className="text-[#7C3AED] mb-3" size={28} />
              <h3 className={`font-semibold font-[family-name:var(--font-heading)] mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Web Development</h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>React, Tailwind, Node.js</p>
              <div className="mt-3 flex gap-2">
                <span className={`px-2 py-0.5 rounded text-xs ${isDark ? 'bg-[#7C3AED]/10 text-[#A78BFA]' : 'bg-[#EDE9FE] text-[#7C3AED]'}`}>Frontend</span>
                <span className={`px-2 py-0.5 rounded text-xs ${isDark ? 'bg-[#7C3AED]/10 text-[#A78BFA]' : 'bg-[#EDE9FE] text-[#7C3AED]'}`}>Fullstack</span>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard
            delay={0.5}
            className="absolute top-40 left-4"
          >
            <div className={`p-6 rounded-2xl shadow-xl ${isDark ? 'bg-[#1E293B] border border-white/5' : 'bg-white border border-gray-100 shadow-gray-200/50'}`}>
              <Palette className="text-[#A78BFA] mb-3" size={28} />
              <h3 className={`font-semibold font-[family-name:var(--font-heading)] mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>UI/UX Design</h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Figma, Photoshop, Framer</p>
              <div className="mt-3 flex gap-2">
                <span className={`px-2 py-0.5 rounded text-xs ${isDark ? 'bg-[#7C3AED]/10 text-[#A78BFA]' : 'bg-[#EDE9FE] text-[#7C3AED]'}`}>Design</span>
                <span className={`px-2 py-0.5 rounded text-xs ${isDark ? 'bg-[#7C3AED]/10 text-[#A78BFA]' : 'bg-[#EDE9FE] text-[#7C3AED]'}`}>Creative</span>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard
            delay={0.7}
            className="absolute bottom-12 right-16"
          >
            <div className={`p-6 rounded-2xl shadow-xl ${isDark ? 'bg-[#1E293B] border border-white/5' : 'bg-white border border-gray-100 shadow-gray-200/50'}`}>
              <Cpu className="text-[#7C3AED] mb-3" size={28} />
              <h3 className={`font-semibold font-[family-name:var(--font-heading)] mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>AI & Automation</h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Python, ML, NLP</p>
              <div className="mt-3 flex gap-2">
                <span className={`px-2 py-0.5 rounded text-xs ${isDark ? 'bg-[#7C3AED]/10 text-[#A78BFA]' : 'bg-[#EDE9FE] text-[#7C3AED]'}`}>AI</span>
                <span className={`px-2 py-0.5 rounded text-xs ${isDark ? 'bg-[#7C3AED]/10 text-[#A78BFA]' : 'bg-[#EDE9FE] text-[#7C3AED]'}`}>Backend</span>
              </div>
            </div>
          </FloatingCard>

          {/* Glow behind cards */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#7C3AED]/15 rounded-full blur-[100px]" />
        </div>
      </div>
    </section>
  )
}
