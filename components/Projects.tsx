'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Play, Code } from 'lucide-react'
import CodeBackground from './CodeBackground'

const Projects = () => {

  const projects = [
    {
      title: 'Trackr',
      category: 'Full Stack Development',
      description: 'A social goal-tracking app where friends can share goals, compete on leaderboards, and actually stick to their New Year\'s resolutions (for once).',
      technologies: ['React', 'Node', 'Express', 'PostgreSQL'],
      github: 'https://github.com/sanyahegde/trackr-ios',
      live: '#',
      demo: '#',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'NotionCards',
      category: 'Web Application',
      description: 'Turned my Notion study notes into flashcards because manually making 200+ cards was getting old. Now with spaced repetition so I actually remember things.',
      technologies: ['React', 'FastAPI', 'MongoDB', 'Notion'],
      github: 'https://github.com/sanyahegde/notion-cards',
      live: '#',
      demo: '#',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Bifocal',
      category: 'Web Application',
      description: 'Won HackAI overall winner - <a href="https://devpost.com/software/safeguard-t26z0j?_gl=1*thicsa*_gcl_au*MTQyOTY1MzAyNC4xNzU3OTYwNjM3*_ga*MTk1MjAwOTQ0OS4xNzQ1MDMyODY0*_ga_0YHJK3Y10M*czE3NjQzNjk5NDQkbzI1JGcxJHQxNzY0MzcwMTA2JGo2MCRsMCRoMA.." target="_blank" rel="noopener noreferrer" class="text-teal-400 hover:text-teal-300 underline">Devpost</a>. Built in 48 hours fueled by Red Bull and questionable life choices.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/mounikasaka1/hackai',
      live: '#',
      demo: '#',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'StockProphet',
      category: 'Machine Learning & Cloud',
      description: 'Tried to predict stock prices using ML and Reddit sentiment. Spoiler: the market is still unpredictable, but at least the model works.',
      technologies: ['Python', 'JavaScript', 'Pandas', 'Sci-Kit Learn', 'FastAPI', 'AWS'],
      github: 'https://github.com/sanyahegde/stockprophet',
      live: '#',
      demo: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Comet Marketplace',
      category: 'E-Commerce Platform',
      description: 'Built a full-stack marketplace because I wanted to understand how Stripe actually works. Turns out payment processing is harder than it looks.',
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com/sanyahegde/CometMarketplace',
      live: '#',
      demo: '#',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'OneView',
      category: 'Data Visualization',
      description: 'Made data actually look good with interactive dashboards. Because spreadsheets are boring and charts should be fun.',
      technologies: ['React', 'D3.js', 'FastAPI', 'PostgreSQL', 'Python'],
      github: 'https://github.com/sanyahegde/oneview',
      live: '#',
      demo: '#',
      color: 'from-teal-500 to-cyan-500'
    }
  ]

  return (
    <section id="projects" className="section-padding bg-[#0a192f] dark:bg-[#0a192f] relative overflow-hidden py-20">
      <CodeBackground />
      <div className="container-custom max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20 overflow-hidden hover:border-teal-400/50 hover:shadow-2xl transition-all duration-300 h-full flex flex-col group-hover:bg-white/15">
                <div className="p-8 flex-1 flex flex-col">
                  {/* Category */}
                  <p className="text-xs text-teal-400 mb-3 font-semibold uppercase tracking-wider">
                    {project.category}
                  </p>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
                {project.title}
              </h3>
              
                  {/* Description */}
                  <div className="text-white/80 mb-6 leading-relaxed text-base flex-1" dangerouslySetInnerHTML={{ __html: project.description }} />

                  {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                  <span
                    key={tech}
                        className="px-3 py-1.5 bg-teal-500/20 text-teal-300 rounded-md text-xs font-medium border border-teal-400/30 hover:bg-teal-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4 border-t border-white/20">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all duration-200 text-sm font-semibold hover:scale-105"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
                    {project.title === 'Bifocal' && project.demo && project.demo !== '#' && (
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
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-white/10 border-2 border-white/30 text-white rounded-lg hover:border-white/50 hover:bg-white/20 transition-all duration-200 text-sm font-semibold"
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