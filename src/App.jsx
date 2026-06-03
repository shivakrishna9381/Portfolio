import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Features from './components/Features'
import Process from './components/Process'
import TechStack from './components/TechStack'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgressBar from './components/ScrollProgressBar'
import { useTheme } from './context/ThemeContext'

export default function App() {
  const { isDark } = useTheme()

  return (
    <div className={`min-h-screen overflow-x-clip transition-colors duration-300 ${isDark ? 'bg-[#0F172A]' : 'bg-[#F8FAFC]'}`}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Features />
      <Process />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollProgressBar />
    </div>
  )
}
