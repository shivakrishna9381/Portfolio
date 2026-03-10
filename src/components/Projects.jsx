import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const projects = [
  {
    title: 'Disease Prediction',
    category: 'AI / Machine Learning',
    year: '2024',
    description: 'AI-powered web application for predicting diseases based on symptoms using machine learning algorithms.',
    tags: ['Python', 'ML', 'Flask', 'React'],
    link: 'https://github.com/shivakrishna9381/Disease_prediction-web-apk',
    color: '#7C3AED',
  },
  {
    title: 'Food Order App',
    category: 'Web Application',
    year: '2024',
    description: 'Full-stack food ordering platform with real-time order tracking, menu management, and seamless checkout.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: '#',
    color: '#6D28D9',
  },
  {
    title: 'ChatBot using NLP',
    category: 'AI / NLP',
    year: '2024',
    description: 'Intelligent conversational chatbot powered by Natural Language Processing for automated responses.',
    tags: ['Python', 'NLP', 'TensorFlow', 'Flask'],
    link: 'https://github.com/shivakrishna9381/Implementation_of_chatbot_using_NLP.git',
    color: '#5B21B6',
  },
  {
    title: 'Portfolio Website',
    category: 'Web Design',
    year: '2025',
    description: 'Modern, animated portfolio built with React and Tailwind CSS featuring smooth transitions and dark mode.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
    color: '#8B5CF6',
  },
]

function ProjectCard({ project, index, isDark }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`group min-w-[320px] sm:min-w-[380px] p-6 rounded-2xl transition-all duration-400 hover:scale-[1.03] flex-shrink-0 ${
        isDark
          ? 'bg-[#1E293B]/80 border border-white/5 hover:border-[#7C3AED]/30 hover:shadow-2xl hover:shadow-[#7C3AED]/10'
          : 'bg-white border border-gray-100 hover:border-[#7C3AED]/20 hover:shadow-2xl hover:shadow-gray-200/60'
      }`}
    >
      {/* Color accent bar */}
      <div className="w-full h-1.5 rounded-full mb-5 bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] opacity-50 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-start justify-between mb-3">
        <span className={`text-xs font-semibold tracking-wider uppercase ${isDark ? 'text-[#A78BFA]' : 'text-[#7C3AED]'}`}>
          {project.category}
        </span>
        <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{project.year}</span>
      </div>

      <h3 className={`text-2xl font-bold font-[family-name:var(--font-heading)] mb-3 ${isDark ? 'text-white' : 'text-[#0F172A]'}`}>
        {project.title}
      </h3>

      <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span key={tag} className={`text-xs px-2.5 py-1 rounded-lg font-medium ${isDark ? 'bg-white/5 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
          isDark ? 'text-[#A78BFA] hover:text-white' : 'text-[#7C3AED] hover:text-[#5B21B6]'
        }`}
      >
        <Github size={16} />
        View Project
        <ExternalLink size={14} />
      </a>
    </motion.div>
  )
}

export default function Projects() {
  const { isDark } = useTheme()
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const x = useTransform(scrollYProgress, [0, 1], ['5%', '-25%'])

  return (
    <section id="projects" ref={sectionRef} className="py-32 lg:py-40 overflow-hidden relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 mb-16 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20 lg:mb-24"
        >
          <span className={`text-sm font-semibold tracking-widest uppercase ${isDark ? 'text-[#A78BFA]' : 'text-[#7C3AED]'}`}>
            My Work
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mt-3 ${isDark ? 'text-white' : 'text-[#0F172A]'}`}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>
      </div>

      {/* Horizontal scroll */}
      <motion.div 
        style={{ 
          x,
          paddingLeft: 'max(1.5rem, calc((100vw - 1200px) / 2 + 1.5rem))',
          paddingRight: 'max(1.5rem, calc((100vw - 1200px) / 2 + 1.5rem))'
        }} 
        className="flex gap-6 relative z-10"
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} isDark={isDark} />
        ))}
      </motion.div>
    </section>
  )
}
