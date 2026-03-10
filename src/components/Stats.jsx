import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Users, Zap, DollarSign } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const stats = [
  { icon: Users, value: 90, suffix: '%', label: 'Customer Satisfaction', color: '#7C3AED' },
  { icon: TrendingUp, value: 50, suffix: '+', label: 'Projects Delivered', color: '#A78BFA' },
  { icon: Zap, value: 99, suffix: '%', label: 'On-Time Delivery', color: '#6D28D9' },
  { icon: DollarSign, value: 3, suffix: 'x', label: 'Average ROI Growth', color: '#8B5CF6' },
]

function AnimatedCounter({ target, suffix, inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-32 lg:py-40">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20 lg:mb-24"
        >
          <span className={`text-sm font-semibold tracking-widest uppercase ${isDark ? 'text-[#A78BFA]' : 'text-[#7C3AED]'}`}>
            By the numbers
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mt-3 ${isDark ? 'text-white' : 'text-[#0F172A]'}`}>
            Proven <span className="gradient-text">Results</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                isDark
                  ? 'bg-[#1E293B]/60 border border-white/5 hover:border-[#7C3AED]/20'
                  : 'bg-white border border-gray-100 hover:border-[#7C3AED]/15 shadow-sm hover:shadow-lg'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${isDark ? 'bg-[#7C3AED]/10' : 'bg-[#EDE9FE]'}`}>
                <stat.icon className="text-[#7C3AED]" size={24} />
              </div>
              <div className={`text-4xl font-bold font-[family-name:var(--font-heading)] mb-2 ${isDark ? 'text-white' : 'text-[#0F172A]'}`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
