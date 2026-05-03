import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function About() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-32 lg:py-40 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20 lg:mb-24"
        >
          <span className={`text-sm font-semibold tracking-widest uppercase ${isDark ? 'text-[#A78BFA]' : 'text-[#7C3AED]'}`}>
            Get to know me
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mt-3 ${isDark ? 'text-white' : 'text-[#0F172A]'}`}>
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className={`relative overflow-hidden rounded-3xl flex items-center justify-center backdrop-blur-sm ${isDark ? 'bg-gradient-to-br from-[#1E293B]/60 to-[#0F172A]/40 border border-[#7C3AED]/20 shadow-2xl shadow-[#7C3AED]/10' : 'bg-gradient-to-br from-white/80 to-gray-50/80 border border-[#7C3AED]/10 shadow-2xl shadow-[#7C3AED]/5'}`}>
              <img
                src="/assets/Facecardcharacter.svg"
                alt="Shiva Krishna Thogiti"
                className="h-[320px] w-auto object-contain p-8"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Quote className="text-[#7C3AED] mb-4" size={36} />
            <h3 className={`text-2xl font-bold font-[family-name:var(--font-heading)] mb-4 ${isDark ? 'text-white' : 'text-[#0F172A]'}`}>
              Shiva Krishna Thogiti
            </h3>
            <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Blending creativity with code, I'm a design-driven technologist passionate about building intuitive, impactful digital experiences. With a solid technical foundation and a keen eye for aesthetics, I turn ideas into functional, pixel-perfect interfaces.
            </p>
            

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Degree', value: 'B.Tech CSE (AI & ML)' },
                { label: 'College', value: 'Vaagdevi Engineering' },
                { label: 'CGPA', value: '7.5' },
                { label: 'Year', value: '2021 – 2025' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className={`p-3 rounded-xl ${isDark ? 'bg-white/5 border border-white/5' : 'bg-gray-50 border border-gray-100'}`}
                >
                  <p className={`text-xs font-medium mb-0.5 ${isDark ? 'text-[#A78BFA]' : 'text-[#7C3AED]'}`}>{item.label}</p>
                  <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
