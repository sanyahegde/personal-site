'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Play, Code } from 'lucide-react'
import CodeBackground from './CodeBackground'

const Projects = () => {

  const projects = [
    {
      title: 'Trackr',
      category: 'Full Stack Development',
      bullets: [
        'Developed a social goal-tracking app designed to support 500+ users, allowing friends to connect, collaborate on shared objectives, and set goals with customizable privacy settings, driving user engagement through collaborative features',
        'Built interactive dashboards using React with user-friendly, accessible UIs to track individual and group progress, integrating leaderboards designed to boost group participation in shared objectives',
        'Integrated secure authentication using Auth0, allowing for social logins and user permissions management, reducing onboarding time and ensuring compliance with data security best practices'
      ],
      technologies: ['React', 'Node', 'Express', 'PostgreSQL'],
      github: 'https://github.com/sanyahegde/trackr',
      live: '#',
      demo: '#',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'NotionCards',
      category: 'Web Application',
      bullets: [
        'Created a web app to convert Notion toggles into flashcards, enabling users to organize 200+ cards into customizable decks, reducing the time spent creating and managing flashcards by up to 50% compared to manual methods',
        'Enhanced information retention by deploying a spaced repetition algorithm with an engaging interface, dynamically prioritizing flashcards based on user-rated difficulty',
        'Implemented a study session feature using MongoDB to store user progress and session data, allowing students to set review schedules'
      ],
      technologies: ['React', 'FastAPI', 'MongoDB', 'Notion'],
      github: 'https://github.com/sanyahegde/notioncards',
      live: '#',
      demo: '#',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Bifocal',
      category: 'Web Application',
      bullets: [
        'Built a web application focused on improving user experience and functionality',
        'Implemented modern UI/UX patterns and responsive design',
        'Developed with scalable architecture and best practices'
      ],
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/sanyahegde/bifocal',
      live: '#',
      demo: '#',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'StockProphet',
      category: 'Machine Learning & Cloud',
      bullets: [
        'Developed a classification model using the Random Forest algorithm to classify stock price movement (up or down) based on historical stock data, achieving 70% accuracy on test dataset using features like open, close, volume, and moving averages',
        'Incorporated Reddit sentiment analysis to display real-time social media sentiment alongside predictions, analyzing over 1,000 posts per day for comprehensive stock tracking',
        'Deployed the model via FastAPI on AWS Lambda, integrated with API Gateway to create a serverless REST API for stock movement predictions'
      ],
      technologies: ['Python', 'JavaScript', 'Pandas', 'Sci-Kit Learn', 'FastAPI', 'AWS'],
      github: 'https://github.com/sanyahegde/stockprophet',
      live: '#',
      demo: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Comet Marketplace',
      category: 'E-Commerce Platform',
      bullets: [
        'Developed a full-stack marketplace platform with user authentication and product management',
        'Implemented secure payment processing and order management system',
        'Built responsive design for seamless shopping experience across devices'
      ],
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com/sanyahegde/comet-marketplace',
      live: '#',
      demo: '#',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'OneView',
      category: 'Data Visualization',
      bullets: [
        'Created a comprehensive data visualization and analytics platform',
        'Implemented interactive dashboards with real-time data updates',
        'Built advanced filtering and export capabilities for data analysis'
      ],
      technologies: ['React', 'D3.js', 'FastAPI', 'PostgreSQL', 'Python'],
      github: 'https://github.com/sanyahegde/oneview',
      live: '#',
      demo: '#',
      color: 'from-teal-500 to-cyan-500'
    }
  ]

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
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
            Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden hover:border-teal-500/50 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  {/* Category */}
                  <p className="text-xs text-teal-600 dark:text-teal-400 mb-2 font-semibold uppercase tracking-wider">
                    {project.category}
                  </p>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {project.title}
              </h3>
              
                  {/* One-sentence summary instead of long bullets */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-base flex-1">
                    {project.bullets[0].split('.')[0] + '.'}
              </p>

                  {/* Technologies - Compact */}
              <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                        className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium border border-gray-200 dark:border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2.5 py-1 text-gray-500 dark:text-gray-400 text-xs">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
              </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-teal-600 dark:hover:bg-teal-600 transition-all duration-200 text-sm font-semibold hover:scale-105"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-200 text-sm font-semibold hover:scale-105"
                      >
                        <Play size={16} />
                        <span>Demo</span>
                      </a>
                    )}
                    {project.live && project.live !== '#' && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-white dark:bg-gray-800 border-2 border-teal-500/30 text-teal-600 dark:text-teal-400 rounded-lg hover:border-teal-500 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-200 text-sm font-semibold"
                >
                        <ExternalLink size={16} />
                  <span>Live</span>
                </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 