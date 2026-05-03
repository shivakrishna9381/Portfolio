import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function ScrollProgressBar() {
  const { isDark } = useTheme()
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = window.scrollY
      const progress = windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0
      
      setScrollProgress(progress)
      
      // Show button when scrolled down
      setIsVisible(scrolled > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // Circle progress calculation
  const radius = 22
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference

  return (
    <>
      {/* Back to Top Button with Progress Border - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isVisible
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.8, pointerEvents: 'none' }
        }
        transition={{
          duration: 0.3,
          type: 'spring',
          stiffness: 200,
          damping: 20,
        }}
        className="fixed right-6 bottom-6 z-50"
      >
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* Background Circle Ring */}
          <svg className="absolute inset-0 w-16 h-16 -rotate-90" viewBox="0 0 64 64">
            <circle
              cx="32"
              cy="32"
              r={radius}
              fill="none"
              className={`transition-colors duration-300 ${
                isDark ? 'stroke-gray-700' : 'stroke-gray-300'
              }`}
              strokeWidth="2"
            />
          </svg>

          {/* Progress Circle Ring */}
          <svg className="absolute inset-0 w-16 h-16 -rotate-90" viewBox="0 0 64 64">
            <motion.circle
              cx="32"
              cy="32"
              r={radius}
              fill="none"
              stroke="url(#gradientRing)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              transition={{ duration: 0.3 }}
            />
            <defs>
              <linearGradient id="gradientRing" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#A78BFA" />
              </linearGradient>
            </defs>
          </svg>

          {/* Button */}
          <motion.button
            onClick={scrollToTop}
            className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group cursor-pointer flex-shrink-0 ${
              isDark
                ? 'bg-[#7C3AED]/40 hover:bg-[#7C3AED]/60 hover:border-[#A78BFA] shadow-lg shadow-[#7C3AED]/40'
                : 'bg-[#EDE9FE] hover:bg-[#DDD6FE] shadow-lg shadow-[#7C3AED]/20'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp
              size={20}
              className={`transition-colors duration-300 ${
                isDark ? 'text-[#A78BFA] group-hover:text-white' : 'text-[#7C3AED] group-hover:text-[#5B21B6]'
              }`}
            />
          </motion.button>
        </div>
      </motion.div>
    </>
  )
}
