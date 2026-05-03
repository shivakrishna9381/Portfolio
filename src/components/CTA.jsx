import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function CTA() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 lg:py-40 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative w-11/12 mx-auto rounded-4xl overflow-hidden"
          style={{ aspectRatio: '16/9' }}
        >
          {/* Gradient Background - Purple */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#9333EA] via-[#7E22CE] to-[#5B21B6]" />
          
          {/* Animated 3D Geometric Shapes - Bottom Right */}
          <motion.div
            animate={{
              x: [0, 40, -30, 0],
              y: [0, -50, 40, 0],
              rotate: [0, 15, -10, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br from-[#C084FC]/30 to-[#A855F7]/20 rounded-3xl blur-3xl"
            style={{ transform: 'rotateX(45deg) rotateY(45deg)' }}
          />

          {/* Animated Geometric - Top Right */}
          <motion.div
            animate={{
              x: [0, -50, 30, 0],
              y: [0, 40, -30, 0],
              rotate: [0, -20, 15, 0],
              scale: [1, 0.95, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br from-[#A855F7]/25 to-[#7E22CE]/15 rounded-3xl blur-3xl"
            style={{ transform: 'rotateX(-30deg) rotateY(30deg)' }}
          />

          {/* Animated Grid Pattern */}
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              backgroundPosition: '0% 0%',
            }}
          />

          {/* Content Container - Two Column Layout */}
          <div className="relative z-10 h-full flex items-center px-12 md:px-16">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-md">
                  <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-white">Get Started</span>
                </div>

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Let's Build Something{' '}
                  <span className="bg-gradient-to-r from-purple-200 to-purple-300 bg-clip-text text-transparent">
                    Amazing Together
                  </span>
                </h2>

                {/* Description */}
                <p className="text-lg text-purple-100 mb-10 leading-relaxed">
                  Ready to bring your idea to life? Let's collaborate and create something extraordinary.
                </p>

                {/* CTA Button */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300 shadow-2xl"
                >
                  Start Your Project
                  <motion.div
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={22} />
                  </motion.div>
                </motion.a>
              </motion.div>

              {/* Right Side - Animated Card Preview */}
              <motion.div
                initial={{ opacity: 0, x: 40, rotateY: 20 }}
                animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden md:block perspective"
              >
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                    rotateX: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="bg-white rounded-3xl p-8 shadow-2xl"
                >
                  {/* Card Header */}
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Portfolio</p>
                      <h3 className="text-xl font-bold text-gray-900">Your Project</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">→</span>
                    </div>
                  </div>

                  {/* Card Stats */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-2xl font-bold text-gray-900">100%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        animate={{ width: ['0%', '100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-full bg-gradient-to-r from-purple-400 to-purple-600"
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-3 gap-3 mt-8">
                    <button className="py-3 px-4 rounded-xl bg-purple-100 text-purple-600 font-semibold text-sm hover:bg-purple-200 transition">
                      Preview
                    </button>
                    <button className="py-3 px-4 rounded-xl bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200 transition">
                      Details
                    </button>
                    <button className="py-3 px-4 rounded-xl bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200 transition">
                      Share
                    </button>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
