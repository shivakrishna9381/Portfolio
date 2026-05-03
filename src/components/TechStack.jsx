import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { 
  FaPython, FaGithub, FaReact, FaNode, FaVuejs,
  FaGit, FaJsSquare 
} from 'react-icons/fa'
import { SiTailwindcss, SiPostgresql } from 'react-icons/si'
import { SiFramer, SiFigma, SiAdobephotoshop } from 'react-icons/si'

const techLogos = [
  { name: 'Python', Icon: FaPython, color: '#3776AB' },
  { name: 'GitHub', Icon: FaGithub, color: '#333333' },
  { name: 'React', Icon: FaReact, color: '#61DAFB' },
  { name: 'Node.js', Icon: FaNode, color: '#339933' },
  { name: 'Vue.js', Icon: FaVuejs, color: '#4FC08D' },
  { name: 'Framer', Icon: SiFramer, color: '#0055FF' },
  { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
  { name: 'Photoshop', Icon: SiAdobephotoshop, color: '#31A8FF' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
  { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Git', Icon: FaGit, color: '#F1502F' },
  { name: 'JavaScript', Icon: FaJsSquare, color: '#F7DF1E' },
]

function LogoCard({ Icon, name, isDark, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: index * 0.08,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      }}
      className="flex flex-col items-center gap-3"
    >
      <motion.div
        whileHover={{ 
          scale: 1.15,
          rotateX: 10,
          rotateY: 10,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`
          relative
          w-24 h-24
          rounded-2xl
          flex items-center justify-center
          cursor-pointer
          border-2
          backdrop-blur-sm
          ${isDark
            ? 'bg-gradient-to-br from-slate-700 to-slate-800 border-slate-600 hover:bg-gradient-to-br hover:from-slate-600 hover:to-slate-700 hover:border-slate-500'
            : 'bg-white border-gray-300 hover:bg-gray-50 hover:border-gray-400'
          }
        `}
      >
        <Icon 
          size={48}
          color={color}
          className="relative z-10 transition-transform duration-300"
        />
      </motion.div>
      
      {/* Name label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.08 + 0.2 }}
        className={`text-sm font-semibold whitespace-nowrap ${
          isDark ? 'text-white' : 'text-gray-800'
        }`}
      >
        {name}
      </motion.p>
    </motion.div>
  )
}

export default function TechStack() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden"
    >
      {/* background grid */}
      <div
        className={`
        absolute inset-0
        ${isDark ? 'opacity-5' : 'opacity-20'}
        `}
        style={{
          backgroundImage: `
            linear-gradient(to right, #8881 1px, transparent 1px),
            linear-gradient(to bottom, #8881 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className={`text-sm font-semibold tracking-widest uppercase ${
            isDark ? 'text-purple-400' : 'text-purple-600'
          }`}>
            Technology Stack
          </span>

          <h2 className={`text-4xl md:text-5xl font-bold mt-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Tools & <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Technologies</span>
          </h2>
        </motion.div>

        {/* grid background with scattered items */}
        <div className="relative">
          {/* grid cells background */}
          <div className={`
            grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 
            p-8 rounded-2xl
            ${isDark 
              ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 border border-slate-700' 
              : 'bg-gradient-to-br from-gray-50 to-white/80 border border-gray-200'
            }
          `}>
            {/* grid background pattern */}
            <div 
              className={`absolute inset-0 rounded-2xl ${isDark ? 'opacity-10' : 'opacity-15'}`}
              style={{
                backgroundImage: `
                  linear-gradient(to right, currentColor 1px, transparent 1px),
                  linear-gradient(to bottom, currentColor 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px',
                pointerEvents: 'none',
              }}
            />

            {/* scatter tech items with random positions */}
            {techLogos.map((tech, index) => {
              // Random grid positioning
              const randomRow = Math.floor(Math.random() * 2)
              const randomCol = Math.floor(Math.random() * 2)
              
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    delay: index * 0.06, 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 120,
                  }}
                  className="relative z-10 flex justify-center items-center"
                  style={{
                    gridColumn: `span ${randomCol === 0 ? 1 : 1}`,
                    gridRow: `span ${randomRow === 0 ? 1 : 1}`,
                  }}
                >
                  <LogoCard
                    Icon={tech.Icon}
                    name={tech.name}
                    color={tech.color}
                    isDark={isDark}
                    index={index}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}