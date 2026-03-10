import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const testimonials = [
  {
    quote: "Shiva delivered an exceptional product that exceeded our expectations. His attention to detail and understanding of modern design principles is remarkable.",
    name: 'Rahul Sharma',
    company: 'Tech Startup CEO',
    initials: 'RS',
  },
  {
    quote: "Working with Shiva was a fantastic experience. He transformed our vision into a stunning, responsive website that our users love.",
    name: 'Priya Patel',
    company: 'Product Manager',
    initials: 'PP',
  },
  {
    quote: "The AI chatbot Shiva built for us reduced our customer support workload by 40%. His technical skills and creative approach are truly impressive.",
    name: 'Amit Reddy',
    company: 'Operations Lead',
    initials: 'AR',
  },
]

export default function Testimonials() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

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
            Testimonials
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mt-3 ${isDark ? 'text-white' : 'text-[#0F172A]'}`}>
            What People <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`relative rounded-3xl p-8 md:p-12 ${
            isDark
              ? 'bg-[#1E293B]/60 border border-white/5'
              : 'bg-white border border-gray-100 shadow-xl shadow-gray-200/30'
          }`}
        >
          {/* Glow */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[200px] h-[100px] bg-[#7C3AED]/15 rounded-full blur-[60px] pointer-events-none" />

          <Quote className={`mb-6 ${isDark ? 'text-[#7C3AED]/30' : 'text-[#7C3AED]/20'}`} size={48} />

          <div className="relative h-[180px] md:h-[140px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <p className={`text-lg md:text-xl leading-relaxed mb-8 italic ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  "{testimonials[current].quote}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Author */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] flex items-center justify-center text-white font-bold text-sm">
                {testimonials[current].initials}
              </div>
              <div>
                <p className={`font-semibold font-[family-name:var(--font-heading)] ${isDark ? 'text-white' : 'text-[#0F172A]'}`}>
                  {testimonials[current].name}
                </p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {testimonials[current].company}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={prev}
                className={`p-2 rounded-xl transition-all ${isDark ? 'bg-white/5 hover:bg-white/10 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className={`p-2 rounded-xl transition-all ${isDark ? 'bg-white/5 hover:bg-white/10 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? 'w-6 bg-[#7C3AED]' : isDark ? 'bg-white/20' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
