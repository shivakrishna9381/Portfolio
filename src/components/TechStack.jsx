import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2 } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import {
  FaPython,
  FaGithub,
  FaReact,
  FaNode,
  FaVuejs,
  FaGit,
  FaJsSquare,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiPostgresql,
  SiFramer,
  SiFigma,
  SiAdobephotoshop,
} from 'react-icons/si'

const techLogos = [
  { name: 'Python', Icon: FaPython, gradient: 'from-[#3776AB] to-[#1D4ED8]', position: 'left-[7%] top-[22%]' },
  { name: 'React', Icon: FaReact, gradient: 'from-[#06B6D4] to-[#2563EB]', position: 'left-[4%] top-[50%]' },
  { name: 'Node.js', Icon: FaNode, gradient: 'from-[#22C55E] to-[#15803D]', position: 'left-[17%] top-[80%]' },
  { name: 'JavaScript', Icon: FaJsSquare, gradient: 'from-[#EAB308] to-[#F97316]', position: 'left-[27%] top-[33%]' },
  { name: 'Tailwind', Icon: SiTailwindcss, gradient: 'from-[#22D3EE] to-[#2563EB]', position: 'left-[27%] top-[67%]' },
  { name: 'Git', Icon: FaGit, gradient: 'from-[#F97316] to-[#DC2626]', position: 'left-[41%] top-[18%]' },
  { name: 'Figma', Icon: SiFigma, gradient: 'from-[#F43F5E] to-[#7C3AED]', position: 'left-[93%] top-[22%]' },
  { name: 'Framer', Icon: SiFramer, gradient: 'from-[#7C3AED] to-[#DB2777]', position: 'left-[96%] top-[50%]' },
  { name: 'Vue.js', Icon: FaVuejs, gradient: 'from-[#22C55E] to-[#0F766E]', position: 'left-[83%] top-[80%]' },
  { name: 'PostgreSQL', Icon: SiPostgresql, gradient: 'from-[#2563EB] to-[#4F46E5]', position: 'left-[73%] top-[33%]' },
  { name: 'GitHub', Icon: FaGithub, gradient: 'from-[#334155] to-[#020617]', position: 'left-[73%] top-[67%]' },
  { name: 'Photoshop', Icon: SiAdobephotoshop, gradient: 'from-[#38BDF8] to-[#1D4ED8]', position: 'left-[59%] top-[18%]' },
]

const connectionPaths = [
  'M500 250 C430 250 360 110 250 110 C175 110 130 110 98 110',
  'M500 250 C390 250 260 250 68 250',
  'M500 250 C430 250 360 400 198 400',
  'M500 250 C435 250 400 165 298 165',
  'M500 250 C435 250 400 335 298 335',
  'M500 250 C500 190 470 118 430 118',
  'M500 250 C570 250 640 110 750 110 C825 110 870 110 902 110',
  'M500 250 C610 250 740 250 932 250',
  'M500 250 C570 250 640 400 802 400',
  'M500 250 C565 250 600 165 702 165',
  'M500 250 C565 250 600 335 702 335',
  'M500 250 C500 190 530 118 570 118',
]

function TechNode({ tech, index, isDark, inView }) {
  const Icon = tech.Icon

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 18 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: 0.35 + index * 0.06,
        type: 'spring',
        stiffness: 120,
        damping: 16,
      }}
      className={`absolute z-20 hidden -translate-x-1/2 -translate-y-1/2 md:flex ${tech.position}`}
      title={tech.name}
      aria-label={tech.name}
    >
      <motion.div
        whileHover={{ y: -5, scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 320, damping: 18 }}
        className={`group relative flex h-14 w-14 items-center justify-center rounded-lg border ${
          isDark
            ? 'border-white/10 bg-[#111827] shadow-[0_14px_34px_rgba(0,0,0,0.34)]'
            : 'border-violet-100 bg-white shadow-[0_14px_34px_rgba(88,28,135,0.14)]'
        }`}
      >
        <div
          className={`absolute -inset-1.5 rounded-lg bg-gradient-to-br ${tech.gradient} opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-35`}
        />
        <div
          className={`absolute inset-1.5 rounded-lg bg-gradient-to-br ${tech.gradient} opacity-95 transition-opacity duration-300 group-hover:opacity-100`}
        />
        <Icon className="relative z-10 text-white drop-shadow-md" size={28} />
      </motion.div>
    </motion.div>
  )
}

function MobileTechCard({ tech, index, isDark, inView }) {
  const Icon = tech.Icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className={`flex aspect-square items-center justify-center rounded-lg border ${
        isDark
          ? 'border-white/10 bg-white/10 shadow-[0_16px_38px_rgba(0,0,0,0.28)]'
          : 'border-violet-100 bg-white shadow-[0_16px_36px_rgba(88,28,135,0.12)]'
      }`}
      title={tech.name}
      aria-label={tech.name}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${tech.gradient}`}
      >
        <Icon className="text-white" size={25} />
      </div>
    </motion.div>
  )
}

export default function TechStack() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })

  return (
    <section
      id="tech-stack"
      ref={ref}
      className={`relative overflow-hidden py-16 lg:py-24 ${
        isDark ? 'bg-[#080712]' : 'bg-[#F8FAFC]'
      }`}
    >
      <div
        className={`absolute inset-0 ${
          isDark
            ? 'bg-[linear-gradient(135deg,rgba(124,58,237,0.18)_0%,rgba(8,7,18,0.98)_42%,rgba(88,28,135,0.18)_100%)]'
            : 'bg-[linear-gradient(135deg,rgba(124,58,237,0.08)_0%,rgba(255,255,255,0.96)_42%,rgba(236,233,254,0.82)_100%)]'
        }`}
      />

      {!isDark && (
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              'linear-gradient(rgba(124,58,237,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.08) 1px, transparent 1px)',
            backgroundSize: '42px 42px',
            backgroundPosition: 'center',
          }}
        />
      )}

      <div
        className={`absolute inset-0 ${
          isDark
            ? 'bg-[linear-gradient(to_bottom,rgba(8,7,18,0.1),rgba(8,7,18,0.68))]'
            : 'bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),rgba(255,255,255,0.78)_72%)]'
        }`}
      />

      <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-9 max-w-4xl text-center lg:mb-12"
        >
          <span className="mb-4 inline-flex rounded-full border border-[#7C3AED]/25 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#7C3AED]">
            My Arsenal
          </span>

          <h2
            className={`font-[family-name:var(--font-heading)] text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}
          >
            Tools &{' '}
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#DB2777] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className={`relative overflow-hidden rounded-lg border backdrop-blur-xl ${
            isDark
              ? 'border-white/10 bg-[linear-gradient(135deg,rgba(31,15,64,0.72),rgba(9,10,22,0.96)_48%,rgba(63,18,100,0.58))] shadow-[0_26px_80px_rgba(0,0,0,0.44)]'
              : 'border-violet-100 bg-white/78 shadow-[0_22px_68px_rgba(88,28,135,0.13)]'
          }`}
        >
          {!isDark && (
            <div
              className="absolute inset-0 opacity-90"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(124,58,237,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.12) 1px, transparent 1px)',
                backgroundSize: '38px 38px',
                backgroundPosition: 'center',
              }}
            />
          )}

          <div
            className={`absolute inset-0 ${
              isDark
                ? 'bg-[linear-gradient(120deg,rgba(124,58,237,0.14),transparent_34%,rgba(168,85,247,0.12)_66%,rgba(219,39,119,0.08))]'
                : 'bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.5),rgba(255,255,255,0.88)_66%,rgba(245,240,255,0.76))]'
            }`}
          />

          <div className="relative min-h-[430px] px-5 py-8 md:h-[500px] md:px-8">
            <svg
              className="absolute inset-0 hidden h-full w-full md:block"
              viewBox="0 0 1000 500"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="techPathGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1.4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {connectionPaths.map((path, index) => (
                <motion.path
                  key={`glow-${path}`}
                  d={path}
                  fill="none"
                  stroke={isDark ? 'rgba(168,85,247,0.18)' : 'rgba(124,58,237,0.13)'}
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#techPathGlow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{
                    duration: 1.2,
                    delay: 0.2 + index * 0.04,
                    ease: 'easeInOut',
                  }}
                />
              ))}

              {connectionPaths.map((path, index) => (
                <motion.path
                  key={path}
                  d={path}
                  fill="none"
                  stroke={isDark ? 'rgba(216,180,254,0.64)' : 'rgba(124,58,237,0.42)'}
                  strokeWidth="1.15"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{
                    duration: 1.1,
                    delay: 0.28 + index * 0.04,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </svg>

            <div className="absolute left-1/2 top-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 md:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.75 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.65,
                  delay: 0.2,
                  type: 'spring',
                  stiffness: 130,
                  damping: 16,
                }}
                className={`relative flex h-[132px] w-[132px] items-center justify-center rounded-lg border ${
                  isDark
                    ? 'border-white/10 bg-[#111827] shadow-[0_0_48px_rgba(168,85,247,0.3)]'
                    : 'border-violet-100 bg-white shadow-[0_20px_56px_rgba(124,58,237,0.18)]'
                }`}
              >
                <div className="absolute inset-3 rounded-lg bg-gradient-to-br from-[#7C3AED] via-[#8B5CF6] to-[#DB2777] shadow-[0_14px_32px_rgba(124,58,237,0.32)]" />
                <Code2 className="relative z-10 text-white drop-shadow-md" size={50} />
              </motion.div>
            </div>

            {techLogos.map((tech, index) => (
              <TechNode
                key={tech.name}
                tech={tech}
                index={index}
                isDark={isDark}
                inView={inView}
              />
            ))}

            <div className="md:hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  type: 'spring',
                  stiffness: 130,
                  damping: 16,
                }}
                className={`mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-lg border ${
                  isDark
                    ? 'border-white/10 bg-[#111827] shadow-[0_0_45px_rgba(168,85,247,0.34)]'
                    : 'border-violet-100 bg-white shadow-[0_20px_55px_rgba(124,58,237,0.18)]'
                }`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C3AED] via-[#8B5CF6] to-[#DB2777]">
                  <Code2 className="text-white" size={34} />
                </div>
              </motion.div>

              <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
                {techLogos.map((tech, index) => (
                  <MobileTechCard
                    key={tech.name}
                    tech={tech}
                    index={index}
                    isDark={isDark}
                    inView={inView}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}