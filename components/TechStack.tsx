'use client'

import { motion } from 'framer-motion'
import CodeBackground from './CodeBackground'

const TechStack = () => {
  const allTech = [
    'TypeScript', 'JavaScript', 'Python', 'Go', 'Swift',
    'React', 'Next.js', 'Node.js', 'FastAPI', 'SwiftUI',
    'MongoDB', 'PostgreSQL', 'Redis',
    'AWS', 'Docker', 'Git', 'Tailwind CSS', 'Framer Motion'
  ]

  return (
    <section className="section-padding bg-white dark:bg-[#0a192f] relative overflow-hidden">
      <CodeBackground />
      <div className="container-custom max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Tech Stack
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-4 border-gray-200 dark:border-white/20 shadow-2xl"
        >
          <div className="flex flex-wrap gap-4">
            {allTech.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, y: -4 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-white dark:bg-white/10 backdrop-blur-sm border-2 border-gray-200 dark:border-white/20 rounded-xl text-gray-800 dark:text-gray-200 font-semibold text-base hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:shadow-lg transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack

