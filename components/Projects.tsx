'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, Github, Play, Code, X } from 'lucide-react'
import CodeBackground from './CodeBackground'

const Projects = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [videoUrl, setVideoUrl] = useState('')

  const openVideoModal = (url: string) => {
    setVideoUrl(url)
    setVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setVideoModalOpen(false)
    setVideoUrl('')
  }

  const projects = [
    {
      title: 'Trackr',
      category: 'iOS Application',
      description: 'A social goal-tracking iOS app where friends can share goals, compete on leaderboards, and track progress together.',
      technologies: ['Swift', 'SwiftUI', 'Go'],
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
      category: 'Full Stack + ML/AI Application',
      description: 'HackAI 2025 overall winner - <a href="https://devpost.com/software/safeguard-t26z0j?_gl=1*thicsa*_gcl_au*MTQyOTY1MzAyNC4xNzU3OTYwNjM3*_ga*MTk1MjAwOTQ0OS4xNzQ1MDMyODY0*_ga_0YHJK3Y10M*czE3NjQzNjk5NDQkbzI1JGcxJHQxNzY0MzcwMTA2JGo2MCRsMCRoMA.." target="_blank" rel="noopener noreferrer" class="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 underline">Devpost</a>. A responsive web platform that uses RAG and NLP to analyze message patterns for behavioral insights and risk assessment.',
      technologies: ['React', 'TypeScript', 'RAG', 'NLP', 'Machine Learning', 'DSM-5', 'MCP'],
      github: 'https://github.com/mounikasaka1/hackai',
      live: '#',
      demo: '#',
      video: 'https://youtu.be/U_1Hpi4J-AQ',
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
      title: 'VRCarAid',
      category: 'VR + 3D Design',
      description: 'WEHack Winner (Toyota Track). A VR/AR learning tool built in 48 hours. Turned a Toyota Camry interior into an interactive VR experience using Blender, 3D modeling, and Reality Composer. Designed an accessible driving-simulation tool that helps new drivers practice controls, orientation, and safety concepts in a portable virtual environment.',
      technologies: ['3D Modeling', 'Animation', 'Augmented Reality', 'Blender', 'Figma', 'Reality Composer', 'Reality Converter', 'UI/UX'],
      github: '#',
      live: '#',
      demo: '#',
      video: 'https://youtu.be/uyoE0Nef5vQ',
      color: 'from-purple-500 to-indigo-500'
    }
  ]

  return (
    <section id="projects" className="section-padding bg-white dark:bg-[#0a192f] relative overflow-hidden py-20">
      <CodeBackground />
      <div className="container-custom max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Projects
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl border-4 border-gray-200 dark:border-gray-700 overflow-hidden hover:border-teal-500 dark:hover:border-teal-500 hover:shadow-3xl transition-all duration-300 h-full flex flex-col relative">
                {/* Gradient accent bar */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="p-10 flex-1 flex flex-col">
                  {/* Category */}
                  <p className="text-sm text-teal-600 dark:text-teal-400 mb-4 font-bold uppercase tracking-wider">
                    {project.category}
                  </p>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
              
                  {/* Description */}
                  <div className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg flex-1" dangerouslySetInnerHTML={{ __html: project.description }} />

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-semibold border-2 border-gray-200 dark:border-gray-600 hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-6 border-t-2 border-gray-200 dark:border-gray-700">
                    {project.github && project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-gray-900 dark:bg-white/20 text-white rounded-lg hover:bg-teal-600 dark:hover:bg-white/30 transition-all duration-200 text-sm font-semibold hover:scale-105"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
                    )}
                    {project.video && (
                      <button
                        onClick={() => openVideoModal(project.video!)}
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-200 text-sm font-semibold hover:scale-105"
                      >
                        <Play size={16} />
                        <span>Watch</span>
                      </button>
                    )}
                    {project.live && project.live !== '#' && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-white dark:bg-white/10 border-2 border-teal-500/30 dark:border-white/30 text-teal-600 dark:text-white rounded-lg hover:border-teal-500 dark:hover:border-white/50 hover:bg-teal-50 dark:hover:bg-white/20 transition-all duration-200 text-sm font-semibold"
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

      {/* Video Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeVideoModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              {/* Modal Content */}
        <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-4xl w-full relative"
              >
                {/* Close Button */}
                <button
                  onClick={closeVideoModal}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
                >
                  <X size={24} />
                </button>
                
                {/* Video Container */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={videoUrl.replace('youtu.be/', 'youtube.com/embed/').replace('watch?v=', 'embed/')}
                    title="Project Video"
                    className="absolute top-0 left-0 w-full h-full rounded-t-xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                
                {/* Modal Footer */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Diving into 3D modeling - won WEHack Track
                  </p>
                </div>
              </motion.div>
        </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects 