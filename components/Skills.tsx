'use client'

import { motion } from 'framer-motion'
import CodeBackground from './CodeBackground'

const Skills = () => {

  const skills = [
    'Java', 'Python', 'C++', 'JavaScript', 'HTML/CSS', 'SQL',
    'Angular', 'Node.js', 'Flask', 'FastAPI', 'Spring Boot',
    'Git', 'Docker', 'AWS', 'Linux', 'Tableau',
    'S3', 'Lambda', 'EC2', 'ECS', 'API Gateway', 'DynamoDB',
    'GraphQL', 'WebSockets', 'Socket.IO', 'RabbitMQ', 'Redis',
    'PostgreSQL', 'MongoDB', 'React', 'Express'
  ]

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
      <CodeBackground />
      <div className="container-custom max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Skills & Technologies
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
        </motion.div>

        {/* Custom Square Tags with Gradient Borders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3"
        >
          {skills.map((skill, index) => (
            <motion.button
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.08, rotate: index % 2 === 0 ? 2 : -2 }}
              transition={{ duration: 0.2, delay: index * 0.02 }}
              viewport={{ once: true }}
              className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-semibold border-2 border-teal-500/40 hover:border-teal-500 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:text-teal-700 dark:hover:text-teal-300 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {skill}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 