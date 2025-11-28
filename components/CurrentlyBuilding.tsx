'use client'

import { motion } from 'framer-motion'

const CurrentlyBuilding = () => {
  const items = [
    {
      title: 'NotionCards 2.0',
      description: 'Adding AI-powered study suggestions'
    },
    {
      title: 'Practicing DSA',
      description: 'Daily LeetCode grind'
    },
    {
      title: 'Working on Trackr',
      description: 'Adding real-time collaboration'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Currently Building
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
            What I'm working on right now
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-xl h-full">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
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

