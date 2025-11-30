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
      description: 'Honors: AES Scholarship. Relevant Courses: Artificial Intelligence, Machine Learning, Computer Architecture, Operating Systems, Advanced Algorithms and Data Structures',
      gpa: null
    }
  ]

  return (
    <section id="education" className="section-padding bg-[#0a192f] dark:bg-[#0a192f] relative overflow-hidden py-16">
      <CodeBackground />
      <div className="container-custom max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
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
              className="border-l-4 border-teal-500/40 pl-8 pb-6 bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg"
            >
              <div className="mb-4">
                <h4 className="text-2xl font-bold text-white mb-3">
                  {edu.degree}
                </h4>
              </div>
              
              <div className="space-y-3 text-lg text-white/80 mb-4">
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
              </div>
              
              <p className="text-white/80 text-base leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

