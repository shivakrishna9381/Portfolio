import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowUpRight,
  Bot,
  Palette,
  RefreshCw,
  Sparkles,
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const features = [
  {
    icon: Sparkles,
    title: 'Personalized Approach',
    description:
      'Every project is built around your goals and requirements, ensuring solutions that are practical, user-focused, and tailored to your needs.',
  },
  {
    icon: Palette,
    title: 'Design + Development',
    description:
      'I combine UI/UX design with development skills to create products that not only look great but also perform smoothly across devices.',
  },
  {
    icon: Bot,
    title: 'AI-Powered Solutions',
    description:
      'From machine learning applications to intelligent automation, I leverage AI technologies to build smarter and more impactful digital experiences.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Learning',
    description:
      'Technology evolves every day, and so do I. I stay updated with modern tools, frameworks, and design trends to deliver better solutions.',
  },
]

export default function Features() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden py-12 lg:py-16 ${
        isDark ? 'bg-[#050510]' : 'bg-[#F8FAFC]'
      }`}
    >
      <div
        className={`absolute inset-0 ${
          isDark
            ? 'bg-[radial-gradient(circle_at_20%_16%,rgba(124,58,237,0.20),transparent_34%),radial-gradient(circle_at_82%_62%,rgba(168,85,247,0.12),transparent_34%)]'
            : 'bg-[radial-gradient(circle_at_20%_16%,rgba(124,58,237,0.10),transparent_34%),radial-gradient(circle_at_82%_62%,rgba(168,85,247,0.09),transparent_34%)]'
        }`}
      />

      {!isDark && (
        <div
          className="absolute inset-0 opacity-65"
          style={{
            backgroundImage:
              'linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
      )}

      <div className="relative z-10 mx-auto max-w-[1220px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-8 max-w-3xl text-center lg:mb-9"
        >
          <h2
            className={`font-[family-name:var(--font-heading)] text-4xl font-black leading-tight sm:text-5xl lg:text-6xl ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}
          >
            Built With{' '}
            <span className="">
              Purpose
            </span>
          </h2>

          <p
            className={`mx-auto mt-4 max-w-2xl text-sm leading-7 sm:text-base ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            A focused mix of design thinking, development skill, AI knowledge,
            and continuous improvement for better digital results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.12 }}
          className={`relative overflow-hidden rounded-3xl border backdrop-blur-xl ${
            isDark
              ? 'border-white/10 bg-[#0B0B18]/82 shadow-[0_24px_80px_rgba(0,0,0,0.42)]'
              : 'border-white bg-white/90 shadow-[0_24px_76px_rgba(88,28,135,0.11)]'
          }`}
        >
          <div
            className={`absolute inset-0 ${
              isDark
                ? 'bg-[linear-gradient(135deg,rgba(124,58,237,0.14),transparent_40%,rgba(168,85,247,0.08))]'
                : 'bg-[linear-gradient(135deg,rgba(124,58,237,0.07),rgba(255,255,255,0.55)_42%,rgba(168,85,247,0.08))]'
            }`}
          />

          <div className="relative grid lg:grid-cols-[1.02fr_0.98fr]">
            <div className="relative flex min-h-[340px] items-end overflow-hidden px-6 pb-4 pt-6 sm:min-h-[380px] sm:px-8 lg:min-h-[440px] lg:px-10 lg:pb-6">
              <div className="absolute left-6 top-6 z-20 max-w-[460px] sm:left-8 sm:top-8">
                <h3
                  className={`font-[family-name:var(--font-heading)] text-[20px] font-medium leading-[1.35] sm:text-[24px] lg:text-[26px] ${
                    isDark ? 'text-white' : 'text-slate-950'
                  }`}
                >
                  I build with clarity first, then shape the interface experience and technical 
                  <br className="hidden sm:block" />
                  foundation around the real goal.
                  <br className="hidden sm:block" />
                  
                </h3>
              </div>

              <div className="relative mx-auto h-[270px] w-full max-w-[540px] translate-y-10 sm:h-[315px] lg:translate-y-14">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 34,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className={`absolute left-1/2 top-[57%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border sm:h-[520px] sm:w-[520px] ${
                    isDark
                      ? 'border-[#A855F7]/30 shadow-[0_0_82px_rgba(124,58,237,0.18)]'
                      : 'border-[#7C3AED]/25 shadow-[0_0_76px_rgba(124,58,237,0.12)]'
                  }`}
                  style={{
                    backgroundImage: isDark
                      ? 'radial-gradient(circle, rgba(196,181,253,0.78) 1.2px, transparent 1.55px)'
                      : 'radial-gradient(circle, rgba(124,58,237,0.58) 1.2px, transparent 1.55px)',
                    backgroundSize: '18px 18px',
                    maskImage:
                      'radial-gradient(ellipse at center, black 0%, black 55%, transparent 73%)',
                    WebkitMaskImage:
                      'radial-gradient(ellipse at center, black 0%, black 55%, transparent 73%)',
                  }}
                />

                <div
                  className={`absolute left-1/2 top-[57%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[520px] sm:w-[520px] ${
                    isDark
                      ? 'bg-[radial-gradient(circle_at_center,transparent_45%,rgba(5,5,16,0.96)_74%)]'
                      : 'bg-[radial-gradient(circle_at_center,transparent_45%,rgba(248,250,252,0.92)_74%)]'
                  }`}
                />

                <motion.img
                  src="/assets/locationme.png"
                  alt="Shiva Krishna location marker"
                  initial={{ opacity: 0, y: 18, scale: 0.92 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute left-1/2 top-[9%] z-30 h-[118px] w-auto -translate-x-1/2 object-contain drop-shadow-[0_22px_42px_rgba(124,58,237,0.35)] sm:h-[145px] lg:top-[7%] lg:h-[160px]"
                />
              </div>
            </div>

            <div
              className={`relative border-t p-5 sm:p-6 lg:border-l lg:border-t-0 lg:p-7 ${
                isDark ? 'border-white/10' : 'border-slate-200'
              }`}
            >
              <div className="grid gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon

                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: 22 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.55,
                        delay: 0.25 + index * 0.08,
                      }}
                      className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                        isDark
                          ? 'border-white/10 bg-white/[0.04] hover:border-[#A855F7]/40 hover:bg-white/[0.06]'
                          : 'border-slate-200 bg-white/90 hover:border-[#7C3AED]/30 hover:shadow-[0_16px_42px_rgba(88,28,135,0.10)]'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                            isDark
                              ? 'bg-[#7C3AED]/14 text-[#C4B5FD]'
                              : 'bg-violet-100 text-[#7C3AED]'
                          }`}
                        >
                          <Icon size={23} />
                        </div>

                        <div className="min-w-0">
                          <div className="mb-2 flex items-center justify-between gap-3">
                            <h3
                              className={`font-[family-name:var(--font-heading)] text-base font-bold ${
                                isDark ? 'text-white' : 'text-slate-950'
                              }`}
                            >
                              {feature.title}
                            </h3>

                            <ArrowUpRight
                              size={18}
                              className={`shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                                isDark ? 'text-slate-500' : 'text-slate-400'
                              }`}
                            />
                          </div>

                          <p
                            className={`text-sm leading-6 ${
                              isDark ? 'text-slate-400' : 'text-slate-600'
                            }`}
                          >
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}