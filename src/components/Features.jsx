import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles, Target, Server, Bot } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const features = [
  {
    icon: Sparkles,
    title: 'Personalized Solutions',
    description: 'Every project is tailored to your unique needs, ensuring a custom-fit solution that resonates with your audience.',
  },
  {
    icon: Target,
    title: 'Precision & Accuracy',
    description: 'Pixel-perfect designs with clean, efficient code. Every detail is meticulously crafted for the best outcome.',
  },
  {
    icon: Server,
    title: 'Scalable Infrastructure',
    description: 'Built with growth in mind — architecture that scales seamlessly as your business and user base expands.',
  },
  {
    icon: Bot,
    title: 'AI-Driven Automation',
    description: 'Leverage cutting-edge AI and machine learning to automate processes and drive smarter decision-making.',
  },
]

export default function Features() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-32 lg:py-40 relative">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20 lg:mb-24"
        >
          <span className={`text-sm font-semibold tracking-widest uppercase ${isDark ? 'text-[#A78BFA]' : 'text-[#7C3AED]'}`}>
            Why choose me
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mt-3 ${isDark ? 'text-white' : 'text-[#0F172A]'}`}>
            Built for <span className="gradient-text">Excellence</span>
          </h2>
        </motion.div>

        {/* Features container with gradient bg */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`rounded-3xl p-8 md:p-12 relative overflow-hidden ${
            isDark
              ? 'bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-white/5'
              : 'bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-xl shadow-gray-200/30'
          }`}
        >
          {/* Glow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#7C3AED]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 relative z-10">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className={`group p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                  isDark
                    ? 'bg-white/3 hover:bg-white/5 border border-white/5 hover:border-[#7C3AED]/20'
                    : 'bg-white hover:bg-gray-50 border border-gray-100 hover:border-[#7C3AED]/15 shadow-sm'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  isDark ? 'bg-[#7C3AED]/10 group-hover:bg-[#7C3AED]/20' : 'bg-[#EDE9FE] group-hover:bg-[#7C3AED]/15'
                }`}>
                  <feature.icon className="text-[#7C3AED]" size={24} />
                </div>
                <h3 className={`text-lg font-bold font-[family-name:var(--font-heading)] mb-2 ${isDark ? 'text-white' : 'text-[#0F172A]'}`}>
                  {feature.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
