'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'
import CodeBackground from './CodeBackground'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Texas at Dallas',
      period: 'May 2026',
      location: 'Richardson, TX',
      honors: 'AES Scholarship',
      relevantCourses: [
        'Artificial Intelligence',
        'Machine Learning',
        'Computer Architecture',
        'Operating Systems',
        'Advanced Algorithms and Data Structures',
        'Computer Networks',
        'Software Project Planning and Management',
        'Object Oriented Design',
        'Linear Algebra',
        'UNIX',
        'Database Systems',
        'Software Engineering'
      ],
      gpa: null
    }
  ]

  return (
    <section id="education" className="section-padding bg-white dark:bg-[#0a192f] relative overflow-hidden py-16">
      <CodeBackground />
      <div className="container-custom max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            Education
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={`${edu.school}-${edu.degree}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-l-4 border-teal-500/40 pl-8 pb-6 bg-white dark:bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg"
            >
              <div className="mb-4">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {edu.degree}
                </h4>
              </div>
              
              <div className="space-y-3 text-lg text-gray-600 dark:text-gray-400 mb-6">
                <div className="flex items-center">
                  <GraduationCap size={22} className="mr-3 text-teal-400" />
                  <span className="font-semibold">{edu.school}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={22} className="mr-3 text-teal-400" />
                  {edu.period}
                </div>
                <div className="flex items-center">
                  <MapPin size={22} className="mr-3 text-teal-400" />
                  {edu.location}
                </div>
                {edu.honors && (
                  <div className="flex items-center">
                    <span className="text-teal-400 font-semibold">Honors: </span>
                    <span className="ml-2">{edu.honors}</span>
                  </div>
                )}
              </div>
              
              {/* Relevant Courses - Interactive Tiles */}
              <div className="mb-4">
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-5">Relevant Courses</h5>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {edu.relevantCourses.map((course, courseIndex) => (
                    <motion.div
                      key={course}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.3, delay: courseIndex * 0.03 }}
                      viewport={{ once: true }}
                      className="px-4 py-2.5 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:border-teal-400/50 transition-all duration-200 cursor-default text-center"
                    >
                      {course}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

