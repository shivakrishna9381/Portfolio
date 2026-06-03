import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Code2, GraduationCap, Palette } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Student Developer',
    text: 'Learning, building, and improving through real-world projects.',
  },
  {
    icon: Code2,
    title: 'AI & Full Stack',
    text: 'Focused on AI, ML, React, backend systems, and modern web apps.',
  },
  {
    icon: Palette,
    title: 'UI/UX Mindset',
    text: 'Designing clean interfaces that feel simple, useful, and polished.',
  },
  {
    icon: Briefcase,
    title: 'Open to Work',
    text: 'Available for freelance projects and entry-level roles.',
  },
]

export default function About() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })

  return (
    <section
      id="about"
      ref={ref}
      className={`relative overflow-hidden py-20 lg:py-28 ${
        isDark ? 'bg-[#0B1120]' : 'bg-[#F8FAFC]'
      }`}
    >
      <div
        className={`absolute inset-0 pointer-events-none ${
          isDark
            ? 'bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.15),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(8,145,178,0.12),transparent_32%)]'
            : 'bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.10),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(8,145,178,0.08),transparent_32%)]'
        }`}
      />

      {!isDark && (
        <div
          className="absolute inset-0 opacity-60 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px)',
            backgroundSize: '46px 46px',
          }}
        />
      )}

      <div className="relative z-10 mx-auto max-w-[1180px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-12 max-w-3xl text-center lg:mb-16"
        >
          <h2
            className={`font-[family-name:var(--font-heading)] text-4xl font-black leading-tight sm:text-5xl lg:text-6xl ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}
          >
            About{' '}
            <span className="">
              Me
            </span>
          </h2>

          <p
            className={`mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            A student developer building intelligent, user-friendly digital
            products with AI, full-stack development, and clean interface design.
          </p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-start"
          >
            <div
              className={`relative w-full max-w-[330px] overflow-hidden rounded-2xl border p-5 sm:max-w-[360px] sm:p-6 ${
                isDark
                  ? 'border-white/10 bg-white/[0.04] shadow-[0_24px_70px_rgba(0,0,0,0.34)]'
                  : 'border-slate-200 bg-white/90 shadow-[0_22px_60px_rgba(15,23,42,0.10)]'
              }`}
            >
              <div className="absolute inset-x-8 top-8 h-24 rounded-full bg-[#7C3AED]/18 blur-3xl" />

              <div
                className={`relative flex h-[270px] items-end justify-center rounded-xl ${
                  isDark
                    ? 'bg-[linear-gradient(180deg,rgba(124,58,237,0.10),rgba(15,23,42,0.18))]'
                    : 'bg-[linear-gradient(180deg,rgba(237,233,254,0.75),rgba(255,255,255,0.65))]'
                }`}
              >
                <img
                  src="/assets/Facecardcharacter.svg"
                  alt="Shiva Krishna Thogiti"
                  className="h-[250px] w-auto object-contain sm:h-[265px]"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pt-1"
          >
            <div className="max-w-2xl">
              

              
              <div
                className={`mt-5 space-y-4 text-sm leading-7 sm:text-[15px] ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                
                <p>
                  I'm Shiva Krishna Thogiti, a Full Stack Developer, AI & ML Engineer, and UI/UX Designer from Warangal. I build intelligent applications, modern web experiences, and user-focused digital products by combining technology, design, and problem-solving.

From AI-powered solutions and machine learning projects to responsive web applications and intuitive interfaces, I enjoy turning ideas into impactful products that solve real-world challenges. I'm passionate about continuous learning, creative thinking, and building experiences that make a difference.

                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => {
                const Icon = item.icon

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.32 + index * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-1 ${
                      isDark
                        ? 'border-white/10 bg-white/[0.04] hover:border-[#7C3AED]/35 hover:bg-white/[0.06]'
                        : 'border-slate-200 bg-white/90 hover:border-[#7C3AED]/25 hover:shadow-[0_14px_36px_rgba(15,23,42,0.10)]'
                    }`}
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#7C3AED]/10 text-[#7C3AED]">
                      <Icon size={20} />
                    </div>

                    <h4
                      className={`mb-1 text-sm font-bold ${
                        isDark ? 'text-white' : 'text-slate-950'
                      }`}
                    >
                      {item.title}
                    </h4>

                    <p
                      className={`text-sm leading-6 ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {item.text}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}