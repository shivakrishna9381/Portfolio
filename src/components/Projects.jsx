import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
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
    image: '/assets/tripadvisor.png',
    color: '#DB2777',
  },
]

function ProjectCard({ project, index, isDark }) {
  const cardRef = useRef(null)
  const cardInView = useInView(cardRef, {
    once: true,
    margin: '-60px',
  })

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className={`group flex h-full flex-col overflow-hidden rounded-2xl transition-shadow duration-500 ${
        isDark
          ? 'bg-[#111827] shadow-[0_16px_45px_rgba(0,0,0,0.28)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)]'
          : 'bg-white shadow-[0_14px_40px_rgba(15,23,42,0.08)] hover:shadow-[0_22px_55px_rgba(15,23,42,0.14)]'
      }`}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        <span className="absolute right-4 top-4 rounded-full bg-black/45 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
          {project.year}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span
          className={`mb-3 text-xs font-bold uppercase tracking-[0.12em] ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          {project.category}
        </span>

        <h3
          className={`mb-3 min-h-[56px] font-[family-name:var(--font-heading)] text-xl font-bold leading-7 ${
            isDark ? 'text-white' : 'text-slate-950'
          }`}
        >
          {project.title}
        </h3>

        <p
          className={`mb-5 text-sm leading-6 ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-md px-2.5 py-1 text-[10px] font-semibold ${
                isDark
                  ? 'bg-white/[0.06] text-slate-300'
                  : 'bg-slate-100 text-slate-600'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <motion.a
          href={project.link}
          target={project.link === '#' ? undefined : '_blank'}
          rel={project.link === '#' ? undefined : 'noopener noreferrer'}
          whileTap={{ scale: 0.98 }}
          className={`mt-auto flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-300 ${
            isDark
              ? 'bg-white/[0.06] text-white hover:bg-white/[0.1]'
              : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
          }`}
        >
          <span className="flex items-center gap-2">
            <Github size={16} />
            View Project
          </span>

          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </motion.a>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const { isDark } = useTheme()
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, {
    once: true,
    margin: '-100px',
  })

  return (
    <section
      id="projects"
      className={`relative overflow-hidden py-24 lg:py-32 ${
        isDark ? 'bg-[#0B1120]' : 'bg-[#F8FAFC]'
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-0 ${
          isDark
            ? 'bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)]'
        } bg-[size:52px_52px]`}
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 lg:px-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-16 max-w-4xl text-center lg:mb-20"
        >
          <h2
            className={`font-[family-name:var(--font-heading)] text-5xl font-black leading-[1.05] sm:text-6xl lg:text-5xl ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}
          >
            Featured Projects
          </h2>

          <p
            className={`mx-auto mt-7 max-w-2xl text-base leading-8 sm:text-lg ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            A collection of AI, Machine Learning, Computer Vision, and Full Stack
            applications built to solve real-world problems and create meaningful
            digital experiences.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
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