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

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-center gap-2">
      {/* Progress Bar Background */}
      <div
        className={`w-1 rounded-full transition-colors duration-300 ${
          isDark ? 'bg-gray-700' : 'bg-gray-300'
        }`}
        style={{ height: '120px' }}
      >
        {/* Progress Fill */}
        <motion.div
          className="w-1 rounded-full bg-gradient-to-t from-[#7C3AED] to-[#A78BFA]"
          style={{ height: `${scrollProgress}%` }}
          transition={{ duration: 0.2 }}
        />
      </div>

      {/* Back to Top Button */}
      <motion.button
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
        onClick={scrollToTop}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group cursor-pointer ${
          isDark
            ? 'bg-[#7C3AED]/20 hover:bg-[#7C3AED]/40 border border-[#7C3AED]/50 hover:border-[#7C3AED] shadow-lg shadow-[#7C3AED]/20'
            : 'bg-[#EDE9FE] hover:bg-[#DDD6FE] border border-[#7C3AED]/30 hover:border-[#7C3AED] shadow-lg shadow-[#7C3AED]/10'
        }`}
        whileHover={{ y: -4 }}
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
  )
}
