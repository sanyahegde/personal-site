'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0a192f] text-white py-12 relative">
      <div className="container-custom">
        {/* Reach Out Section */}
        <div className="mb-12 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-white mb-4"
          >
            Reach Out
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white/70 mb-8 max-w-2xl mx-auto"
          >
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Feel free to reach out!
          </motion.p>
          
          {/* Social Links Boxes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { 
                name: 'GitHub', 
                url: 'https://github.com/sanyahegde',
                icon: Github,
                color: 'hover:bg-gray-800 hover:border-gray-700'
              },
              { 
                name: 'LinkedIn', 
                url: 'https://www.linkedin.com/in/sanya-hegde-591327225/',
                icon: Linkedin,
                color: 'hover:bg-blue-600 hover:border-blue-500'
              },
              { 
                name: 'Email', 
                url: 'mailto:sanyahegde7@gmail.com',
                icon: Mail,
                color: 'hover:bg-red-500 hover:border-red-400'
              }
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target={social.name !== 'Email' ? '_blank' : undefined}
                rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center space-x-3 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white/90 hover:text-white transition-all duration-200 ${social.color}`}
              >
                <social.icon size={20} />
                <span className="font-medium">{social.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-teal-400 transition-colors duration-200 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>sanyahegde7@gmail.com</li>
              <li>Dallas, Texas</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white/60 text-sm mb-4 md:mb-0"
          >
            © 2024 Sanya Hegde. All rights reserved. Made with{' '}
            <Heart size={16} className="inline text-red-500" /> and lots of coffee.
          </motion.p>
          
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="w-12 h-12 bg-teal-600 hover:bg-teal-700 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer 