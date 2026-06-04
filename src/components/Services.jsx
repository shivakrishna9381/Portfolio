import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, Smartphone, Cpu, Fingerprint, Palette, ArrowRight } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom-built landing pages, portfolio websites, and business platforms using React, Next.js, and modern frameworks.',
    tags: ['React', 'Tailwind', 'Node.js'],
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    description: 'Intelligent automation solutions powered by machine learning and NLP to streamline workflows and drive efficiency.',
    tags: ['Python', 'ML', 'NLP'],
  },
  {
    icon: Fingerprint,
    title: 'Brand Identity',
    description: 'Complete brand systems including logos, color palettes, typography guides, and social media templates.',
    tags: ['Logo', 'Brand Kit', 'Guidelines'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Pixel-perfect interface designs in Figma with wireframes, prototypes, and design systems that convert.',
    tags: ['Figma', 'Prototype', 'Design System'],
  },
]

function ServiceCard({ service, index, isDark }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group p-6 rounded-2xl transition-all duration-400 hover:scale-[1.02] ${
        isDark
          ? 'bg-[#1E293B]/60 border border-white/5 hover:border-[#7C3AED]/30 hover:shadow-xl hover:shadow-[#7C3AED]/5'
          : 'bg-white border border-gray-100 hover:border-[#7C3AED]/20 hover:shadow-xl hover:shadow-gray-200/50'
      }`}
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors ${
        isDark ? 'bg-[#7C3AED]/10 group-hover:bg-[#7C3AED]/20' : 'bg-[#EDE9FE] group-hover:bg-[#7C3AED]/15'
      }`}>
        <service.icon className="text-[#7C3AED]" size={24} />
      </div>
      <h3 className={`text-xl font-bold font-[family-name:var(--font-heading)] mb-2 ${isDark ? 'text-white' : 'text-[#0F172A]'}`}>
        {service.title}
      </h3>
      <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
        {service.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span key={tag} className={`text-xs px-2.5 py-1 rounded-lg font-medium ${isDark ? 'bg-white/5 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Services() {
  const { isDark } = useTheme()
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-32 lg:py-40 relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 xl:gap-20">
          {/* Left sticky */}
          <div className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start">
            <motion.div
              ref={headerRef}
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className={`text-sm font-semibold tracking-widest uppercase ${isDark ? 'text-[#A78BFA]' : 'text-[#7C3AED]'}`}>
                What I do
              </span>
              <h2 className={`text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mt-4 mb-8 leading-tight ${isDark ? 'text-white' : 'text-[#0F172A]'}`}>
                Services Built to Drive{' '}
                <span className="gradient-text">Impact</span>
              </h2>
              <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                From idea to launch — I design and develop digital products that are beautiful, functional, and scalable.
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:opacity-90 transition-all duration-300"
              >
                Discuss Your Ideas
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right scrolling cards */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} isDark={isDark} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
