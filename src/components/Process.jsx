import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const steps = [
  {
    step: '01',
    title: 'Discover & Plan',
    description:
      'Understanding business goals, user needs, and project requirements to create a clear strategic roadmap.',
    dot: { cx: 245, cy: 438 },
    contentClass: 'left-[185px] top-[458px]',
    numberClass: 'left-[300px] top-[392px]',
  },
  {
    step: '02',
    title: 'Design & Build',
    description:
      'Transforming ideas into intuitive user experiences, scalable applications, and modern interfaces.',
    dot: { cx: 625, cy: 330 },
    contentClass: 'left-[600px] top-[350px]',
    numberClass: 'left-[705px] top-[292px]',
  },
  {
    step: '03',
    title: 'Launch & Optimize',
    description:
      'Deploying, testing, refining, and continuously improving products for long-term success.',
    dot: { cx: 920, cy: 135 },
    contentClass: 'left-[885px] top-[158px]',
    numberClass: 'left-[990px] top-[82px]',
  },
]

export default function Process() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden py-20 lg:py-28 ${
        isDark ? 'bg-[#070B18]' : 'bg-[#E5E7EB]'
      }`}
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`relative overflow-hidden rounded-[28px] border px-6 py-10 sm:px-10 lg:min-h-[660px] lg:px-16 lg:py-16 ${
            isDark
              ? 'border-white/10 bg-[#0F172A] shadow-[0_30px_100px_rgba(0,0,0,0.45)]'
              : 'border-white bg-white shadow-[0_28px_90px_rgba(15,23,42,0.10)]'
          }`}
        >
          <div
            className={`absolute inset-0 pointer-events-none ${
              isDark
                ? 'bg-[radial-gradient(circle_at_18%_20%,rgba(124,58,237,0.16),transparent_34%),radial-gradient(circle_at_86%_22%,rgba(124,58,237,0.10),transparent_30%)]'
                : 'bg-[radial-gradient(circle_at_18%_20%,rgba(124,58,237,0.08),transparent_34%),radial-gradient(circle_at_86%_22%,rgba(124,58,237,0.06),transparent_30%)]'
            }`}
          />

          <div className="relative z-10 lg:absolute lg:left-16 lg:top-16 lg:w-[360px]">
            <span
              className={`text-xs font-bold uppercase tracking-[0.22em] ${
                isDark ? 'text-[#A78BFA]' : 'text-[#F26A57]'
              }`}
            >
              My Workflow
            </span>

            <h2
              className={`mt-5 font-[family-name:var(--font-heading)] text-2xl font-black leading-[1.08] sm:text-3xl ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}
            >
              How I Turn Ideas Into Digital Products
            </h2>

            <p
              className={`mt-5 text-sm leading-7 sm:text-base ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              From strategy and design to development and optimization, I
              transform ideas into useful digital experiences.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-white transition-all duration-300 ${
                isDark
                  ? 'bg-[#7C3AED] shadow-[0_18px_42px_rgba(124,58,237,0.35)] hover:bg-[#6D28D9]'
                  : 'bg-[#F26A57] shadow-[0_18px_42px_rgba(242,106,87,0.25)] hover:bg-[#E85D4C]'
              }`}
            >
              Let&apos;s Connect
              <ArrowRight size={18} />
            </motion.a>
          </div>

          <div className="relative mt-12 hidden h-[560px] lg:block">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 1180 560"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="workflowLine" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={isDark ? '#8B5CF6' : '#F26A57'} />
                  <stop offset="52%" stopColor={isDark ? '#7C3AED' : '#F9735F'} />
                  <stop offset="100%" stopColor={isDark ? '#C4B5FD' : '#FF7A66'} />
                </linearGradient>

                <filter id="workflowGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <motion.path
                d="M80 382 C170 440 260 475 350 392 C440 305 515 315 605 332 C710 352 748 270 806 190 C850 128 895 111 920 135 C948 160 975 126 1008 118"
                fill="none"
                stroke={isDark ? 'rgba(124,58,237,0.12)' : 'rgba(242,106,87,0.13)'}
                strokeWidth="24"
                strokeLinecap="round"
                filter="url(#workflowGlow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.35, delay: 0.25, ease: 'easeInOut' }}
              />

              <motion.path
                d="M80 382 C170 440 260 475 350 392 C440 305 515 315 605 332 C710 352 748 270 806 190 C850 128 895 111 920 135 C948 160 975 126 1008 118"
                fill="none"
                stroke="url(#workflowLine)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.35, delay: 0.35, ease: 'easeInOut' }}
              />

              {steps.map((item, index) => (
                <g key={item.step}>
                  <motion.circle
                    cx={item.dot.cx}
                    cy={item.dot.cy}
                    r="22"
                    fill={isDark ? '#0F172A' : '#FFFFFF'}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                      duration: 0.45,
                      delay: 0.8 + index * 0.22,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                  <motion.circle
                    cx={item.dot.cx}
                    cy={item.dot.cy}
                    r="11"
                    fill={isDark ? '#7C3AED' : '#C9CDD2'}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                      duration: 0.45,
                      delay: 0.9 + index * 0.22,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                  <motion.circle
                    cx={item.dot.cx}
                    cy={item.dot.cy}
                    r="18"
                    fill="none"
                    stroke={isDark ? '#7C3AED' : '#F26A57'}
                    strokeWidth="2"
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={
                      inView
                        ? { scale: [0.85, 1.25, 0.85], opacity: [0.55, 0, 0.55] }
                        : {}
                    }
                    transition={{
                      duration: 2.2,
                      delay: 1 + index * 0.22,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </g>
              ))}
            </svg>

            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 22 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 1 + index * 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`absolute z-20 w-[285px] ${item.contentClass}`}
              >
                <span
                  className={`pointer-events-none absolute -z-10 text-[126px] font-black leading-none ${
                    isDark ? 'text-white/[0.035]' : 'text-slate-950/[0.035]'
                  } ${item.numberClass}`}
                >
                  {item.step}
                </span>

                <h3
                  className={`font-[family-name:var(--font-heading)] text-base font-black ${
                    isDark ? 'text-white' : 'text-slate-950'
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`mt-3 text-sm leading-7 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="relative z-10 mt-10 grid gap-4 lg:hidden">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.25 + index * 0.1 }}
                className={`relative overflow-hidden rounded-2xl border p-5 ${
                  isDark
                    ? 'border-white/10 bg-white/[0.04]'
                    : 'border-slate-200 bg-slate-50'
                }`}
              >
                <span
                  className={`absolute right-5 top-3 text-6xl font-black leading-none ${
                    isDark ? 'text-white/[0.04]' : 'text-slate-950/[0.05]'
                  }`}
                >
                  {item.step}
                </span>

                <div
                  className={`mb-4 h-3 w-3 rounded-full ${
                    isDark ? 'bg-[#7C3AED]' : 'bg-[#F26A57]'
                  }`}
                />

                <h3
                  className={`font-[family-name:var(--font-heading)] text-lg font-black ${
                    isDark ? 'text-white' : 'text-slate-950'
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`mt-2 text-sm leading-7 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}