import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Send, MapPin } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Contact() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      'Portfolio Contact from ' + formState.firstName
    )
    const body = encodeURIComponent(
      `Name: ${formState.firstName} ${formState.lastName}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )

    window.location.href = `mailto:shivakrishnachinnu21@gmail.com?subject=${subject}&body=${body}`
  }

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 outline-none ${
    isDark
      ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#7C3AED]/50 focus:bg-white/[0.07]'
      : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#7C3AED]/50 focus:bg-white'
  }`

  return (
    <section id="contact" ref={ref} className="py-32 lg:py-40 relative">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20 lg:mb-24"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mt-3 ${
              isDark ? 'text-white' : 'text-[#0F172A]'
            }`}
          >
            Let's <span className="gradient-text">Connect</span>
          </h2>

          <p
            className={`text-lg mt-4 max-w-md mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            Have questions or need solutions? Fill out the form and I'll get
            back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'shivakrishnachinnu21@gmail.com',
                href: 'mailto:shivakrishnachinnu21@gmail.com',
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Telangana, India',
                href: null,
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className={`group p-5 rounded-2xl transition-all duration-300 ${
                  isDark
                    ? 'bg-[#1E293B]/60 border border-white/5 hover:border-[#7C3AED]/20'
                    : 'bg-white border border-gray-100 hover:border-[#7C3AED]/15 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center ${
                      isDark ? 'bg-[#7C3AED]/10' : 'bg-[#EDE9FE]'
                    }`}
                  >
                    <item.icon className="text-[#7C3AED]" size={20} />
                  </div>

                  <div>
                    <p
                      className={`text-xs font-medium mb-0.5 ${
                        isDark ? 'text-[#A78BFA]' : 'text-[#7C3AED]'
                      }`}
                    >
                      {item.label}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        className={`text-sm font-medium hover:underline ${
                          isDark ? 'text-white' : 'text-gray-800'
                        }`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className={`text-sm font-medium ${
                          isDark ? 'text-white' : 'text-gray-800'
                        }`}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`md:col-span-2 p-6 md:p-8 rounded-2xl ${
              isDark
                ? 'bg-[#1E293B]/60 border border-white/5'
                : 'bg-white border border-gray-100 shadow-xl shadow-gray-200/30'
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input
                name="firstName"
                value={formState.firstName}
                onChange={handleChange}
                type="text"
                placeholder="First Name"
                required
                className={inputClass}
              />

              <input
                name="lastName"
                value={formState.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Last Name"
                required
                className={inputClass}
              />
            </div>

            <div className="mb-4">
              <input
                name="email"
                value={formState.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                required
                className={inputClass}
              />
            </div>

            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={5}
              required
              className={`${inputClass} resize-none mb-6`}
            />

            <button
              type="submit"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:opacity-90 transition-all duration-300"
            >
              Send Message
              <Send
                size={18}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}