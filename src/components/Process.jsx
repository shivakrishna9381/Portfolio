import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, PenTool, Rocket } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Discovery & Strategy',
    description: 'Understanding your vision, goals, and target audience to craft a strategic roadmap for success.',
  },
  {
    icon: PenTool,
    step: '02',
    title: 'Design & Development',
    description: 'Turning strategy into stunning visuals and robust code — pixel-perfect designs backed by clean architecture.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Launch & Optimization',
    description: 'Deploying your product and continuously refining it based on real-world data and user feedback.',
  },
]

export default function Process() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-32 lg:py-40 relative">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20 lg:mb-24"
        >
          <span className={`text-sm font-semibold tracking-widest uppercase ${isDark ? 'text-[#A78BFA]' : 'text-[#7C3AED]'}`}>
            How I work
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mt-3 ${isDark ? 'text-white' : 'text-[#0F172A]'}`}>
            My <span className="gradient-text">Process</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-[16.7%] right-[16.7%] h-[2px]">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] origin-left"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
              className="text-center relative"
            >
              {/* Step circle */}
              <div className="relative inline-flex mb-6">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center relative z-10 ${
                  isDark ? 'bg-[#1E293B] border border-[#7C3AED]/20' : 'bg-white border border-[#7C3AED]/15 shadow-lg'
                }`}>
                  <step.icon className="text-[#7C3AED]" size={32} />
                </div>
                <div className="absolute -inset-2 bg-[#7C3AED]/10 rounded-3xl blur-xl" />
                <span className={`absolute -top-2 -right-2 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold z-20 ${
                  isDark ? 'bg-[#7C3AED] text-white' : 'bg-[#7C3AED] text-white'
                }`}>
                  {step.step}
                </span>
              </div>

              <h3 className={`text-xl font-bold font-[family-name:var(--font-heading)] mb-3 ${isDark ? 'text-white' : 'text-[#0F172A]'}`}>
                {step.title}
              </h3>
              <p className={`text-sm leading-relaxed max-w-xs mx-auto ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
