import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const projects = [
  {
    title: 'Disease Prediction System',
    category: 'AI / Machine Learning',
    year: '2024',
    description:
      'AI-powered healthcare platform that predicts diseases from symptoms using machine learning and provides instant health insights.',
    tags: ['Python', 'Machine Learning', 'Flask', 'React', 'Scikit-Learn'],
    link: 'https://github.com/shivakrishna9381/Disease_prediction-web-apk',
    image: '/assets/disease-prediction.png',
    color: '#7C3AED',
  },
  {
    title: 'Marine Species Classification',
    category: 'Computer Vision',
    year: '2024',
    description:
      'Deep learning application that classifies marine species from images using computer vision and image recognition models.',
    tags: ['Python', 'CNN', 'TensorFlow', 'OpenCV', 'Deep Learning'],
    link: '#',
    image: '/assets/water-species.png',
    color: '#0891B2',
  },
  {
    title: 'AI Trip Advisor',
    category: 'Generative AI',
    year: '2025',
    description:
      'AI travel assistant that generates personalized itineraries, destination suggestions, and travel recommendations.',
    tags: ['React', 'OpenAI API', 'Node.js', 'AI', 'Tailwind CSS'],
    link: '#',
    image:'/assets/tripadvisor.png',
    color: '#DB2777',
  },
  
]

function ProjectCard({ project, index, isDark }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })
  const isEven = index % 2 === 0

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-2xl border ${
        isDark
          ? 'border-white/10 bg-[#111827]/75 shadow-[0_24px_80px_rgba(0,0,0,0.35)]'
          : 'border-slate-200/80 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.14)]'
      }`}
    >
      <div
        className="absolute left-0 top-0 h-full w-1"
        style={{ backgroundColor: project.color }}
      />

      <div className={`grid lg:grid-cols-2 ${isEven ? '' : 'lg:grid-flow-dense'}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className={`${isEven ? '' : 'lg:col-start-2'} relative overflow-hidden`}
        >
          <div className="relative h-[300px] sm:h-[360px] lg:h-full min-h-[430px] overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              whileHover={{ scale: 1.04 }}
            />
            <div
              className={`absolute inset-0 ${
                isDark
                  ? 'bg-gradient-to-t from-black/45 via-black/10 to-transparent'
                  : 'bg-gradient-to-t from-black/25 via-transparent to-transparent'
              }`}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isEven ? 35 : -35 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="flex min-h-[430px] flex-col justify-center p-7 sm:p-9 lg:p-12"
        >
          <div className="mb-5 flex items-center justify-between gap-4">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                isDark
                  ? 'bg-white/8 text-slate-300'
                  : 'bg-slate-100 text-slate-600'
              }`}
            >
              {project.category}
            </span>

            <span className={`text-sm font-semibold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              {project.year}
            </span>
          </div>

          <h3
            className={`mb-4 font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight sm:text-4xl ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}
          >
            {project.title}
          </h3>

          <p className={`mb-6 max-w-[520px] text-sm leading-7 sm:text-base ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {project.description}
          </p>

          <div className="mb-7 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition-colors ${
                  isDark
                    ? 'bg-white/7 text-slate-300 group-hover:bg-white/10'
                    : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#7C3AED] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(124,58,237,0.35)] transition-all hover:bg-[#6D28D9] hover:shadow-[0_16px_36px_rgba(124,58,237,0.45)]"
          >
            <Github size={15} />
            View Project
            <ExternalLink size={13} />
          </motion.a>
        </motion.div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const { isDark } = useTheme()
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' })

  return (
    <section
      id="projects"
      className={`relative overflow-hidden py-24 lg:py-32 ${
        isDark ? 'bg-[#0B1120]' : 'bg-[#F8FAFC]'
      }`}
    >
      <div
        className={`absolute inset-0 pointer-events-none ${
          isDark
            ? 'bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)]'
        } bg-[size:52px_52px]`}
      />

      <div className="relative z-10 mx-auto max-w-[1180px] px-6 lg:px-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-16 max-w-4xl text-center lg:mb-20"
        >
          
          <h2
            className={`font-[family-name:var(--font-heading)] text-5xl font-black leading-[1.05] sm:text-6xl lg:text-7xl ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}
          >
            Featured{' '}
            <span className="">
              Projects
            </span>
          </h2>

          <p className={`mx-auto mt-7 max-w-2xl text-base leading-8 sm:text-lg ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            A collection of AI, Machine Learning, Computer Vision, and Full Stack
            applications built to solve real-world problems and create meaningful
            digital experiences.
          </p>
        </motion.div>

        <div className="space-y-10 lg:space-y-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </section>
  )
}