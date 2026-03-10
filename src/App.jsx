import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollingText from './components/ScrollingText'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Features from './components/Features'
import Stats from './components/Stats'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgressBar from './components/ScrollProgressBar'
import { useTheme } from './context/ThemeContext'

export default function App() {
  const { isDark } = useTheme()

  return (
    <div className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${isDark ? 'bg-[#0F172A]' : 'bg-[#F8FAFC]'}`}>
      <Navbar />
      <Hero />
      <ScrollingText />
      <About />
      <Services />
      <Projects />
      <Features />
      <Stats />
      <Process />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <ScrollProgressBar />
    </div>
  )
}
