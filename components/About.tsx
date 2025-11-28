'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import CodeBackground from './CodeBackground'

const About = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
      <CodeBackground />
      <div className="container-custom max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            About
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mb-6"></div>
          
          <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            <p className="text-lg">
              I'm a Computer Science student passionate about building innovative software solutions 
              and solving complex problems. I enjoy working on full-stack applications, exploring 
              new technologies, and contributing to open-source projects.
            </p>
            
            <p>
              My academic journey has provided me with a strong foundation in computer science 
              fundamentals, including data structures, algorithms, and software engineering principles. 
              I'm always eager to apply these concepts to real-world projects and learn from 
              experienced developers.
            </p>

            <p>
              When I'm not coding, I enjoy participating in hackathons, contributing to open-source 
              projects, and staying updated with the latest trends in technology. I'm actively 
              seeking opportunities to work on challenging projects and collaborate with talented teams.
            </p>
            </div>

          {/* Download Resume */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            className="mt-8"
            >
            <button className="inline-flex items-center space-x-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-200 font-semibold hover:scale-105 shadow-lg hover:shadow-xl">
              <Download size={20} />
              <span>Download Resume</span>
              </button>
            </motion.div>
          </motion.div>
      </div>
    </section>
  )
}

export default About 