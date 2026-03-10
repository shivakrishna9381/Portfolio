import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const items = [
  'AI Automation',
  'Web Development',
  'Product Design',
  'Brand Systems',
  'UI UX Design',
  'Machine Learning',
  'React',
  'Figma',
]

export default function ScrollingText() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const x2 = useTransform(scrollYProgress, [0, 1], ['-20%', '10%'])

  return (
    <section ref={ref} className="py-20 lg:py-28 overflow-hidden">
      {/* Row 1 */}
      <motion.div style={{ x: x1 }} className="flex gap-8 mb-6 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`text-5xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-heading)] select-none ${
              i % 2 === 0
                ? 'gradient-text'
                : isDark ? 'text-[#1E293B]' : 'text-gray-200'
            }`}
            style={i % 2 !== 0 ? { WebkitTextStroke: isDark ? '2px #334155' : '2px #CBD5E1' } : undefined}
          >
            {item}
          </span>
        ))}
      </motion.div>

      {/* Row 2 */}
      <motion.div style={{ x: x2 }} className="flex gap-8 whitespace-nowrap">
        {[...items.slice().reverse(), ...items.slice().reverse()].map((item, i) => (
          <span
            key={i}
            className={`text-5xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-heading)] select-none ${
              i % 2 !== 0
                ? 'gradient-text'
                : isDark ? 'text-[#1E293B]' : 'text-gray-200'
            }`}
            style={i % 2 === 0 ? { WebkitTextStroke: isDark ? '2px #334155' : '2px #CBD5E1' } : undefined}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  )
}
