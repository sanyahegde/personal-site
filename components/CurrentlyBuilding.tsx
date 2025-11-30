'use client'

import { motion } from 'framer-motion'
import CodeBackground from './CodeBackground'

const CurrentlyBuilding = () => {
  const items = [
    {
      title: 'NotionCards 2.0',
      description: 'Adding AI-powered study suggestions'
    },
    {
      title: 'Working on Trackr',
      description: 'Taking Trackr from a personal tracker to a social space'
    }
  ]

  return (
    <section className="section-padding bg-gray-50 dark:bg-[#0a192f] relative overflow-hidden py-20">
      <CodeBackground />
      <div className="container-custom max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Currently Building
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-6 text-xl">
            What I'm working on right now
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border-4 border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 shadow-2xl hover:shadow-3xl h-full relative overflow-hidden">
                {/* Gradient accent bar */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CurrentlyBuilding

