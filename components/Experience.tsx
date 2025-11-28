'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const workExperience = [
    {
      title: 'Software Engineer Intern',
      company: 'Q2 Software',
      period: 'May 2024 – August 2024',
      location: 'Austin, TX',
      bullets: [
        'Worked on the Q2 Console team under Reporting, developing and maintaining financial reporting features for banking applications',
        'Collaborated with cross-functional teams to implement new reporting capabilities and improve existing functionality',
        'Contributed to code reviews and participated in agile development processes'
      ],
      technologies: ['JavaScript', 'React', 'Node.js', 'SQL', 'Git']
    },
    {
      title: 'Software Engineer Intern',
      company: 'Toyota Motor North America',
      period: 'May 2024 – August 2024',
      location: 'Plano, TX',
      bullets: [
        'Improved a supplier-facing web application built with Angular and Node.js by redesigning UI elements to enhance customer interaction and leveraging GraphQL to reduce redundant data queries, decreasing data over-fetching by 30%',
        'Developed an automated Java batch job using Jenkins to validate shipment data and generate freight manifests, securely storing outputs in regional AWS S3 buckets, saving operators 30 minutes of manual effort weekly',
        'Engineered an ETL pipeline on AWS EC2 to extract and transform 2D trailer data from Excel into structured inputs for freight manifests, loading them to the TOPS server for 3D visualizations, improving load accuracy by 50% for suppliers',
        'Designed and implemented SQL validation workflows to ensure supplier data integrity and prevent invalid transactions/users, improving system reliability and reducing manual errors'
      ],
      technologies: ['Angular', 'Node.js', 'Java', 'GraphQL', 'AWS', 'S3', 'EC2', 'Jenkins', 'SQL']
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Texas at Dallas',
      period: 'May 2026',
      location: 'Richardson, TX',
      description: 'Honors: AES Scholarship. Relevant Courses: Data Structures & Algorithms, Computer Architecture, Linear Algebra, Systems Programming in UNIX.',
      gpa: null
    }
  ]

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Experience
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Work Experience
          </motion.h3>

          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l-4 border-teal-500/40 pl-6 pb-6 last:pb-0 relative group"
              >
                <div className="mb-2">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {job.title}
                      </h4>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mt-1">
                    <span className="font-medium">{job.company}</span>
                    <span>•</span>
                    <span>{job.period}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <ul className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed text-sm space-y-2 list-disc list-inside">
                  {job.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                      className="px-2.5 py-1 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 rounded text-xs font-medium border border-teal-200 dark:border-teal-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Education
          </motion.h3>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={`${edu.school}-${edu.degree}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l-2 border-gray-200 dark:border-gray-700 pl-6"
              >
                <div className="mb-2">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h4>
                </div>
                
                <div className="space-y-2 text-base text-gray-600 dark:text-gray-400 mb-3">
                  <div className="flex items-center">
                    <GraduationCap size={18} className="mr-2" />
                    <span className="font-semibold">{edu.school}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={18} className="mr-2" />
                    {edu.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={18} className="mr-2" />
                    {edu.location}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 