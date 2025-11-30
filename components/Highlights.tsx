'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import CodeBackground from './CodeBackground'

// Photo Grid Component
const PhotoGrid = ({ photos }: { photos: Array<{ id: string; src: string; caption?: string }> }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {photos.map((photo, index) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            {photo.src ? (
              <img
                src={photo.src}
                alt={photo.caption || `Photo ${index + 1}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            ) : (
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Photo {index + 1}</span>
              </div>
            )}
            {photo.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium">{photo.caption}</p>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Life Chapter Section Component
const LifeChapterSection = ({ 
  title, 
  content, 
  imageSide = 'right' 
}: { 
  title: string
  content: string
  imageSide?: 'left' | 'right'
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className={`flex flex-col ${imageSide === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <div className="h-1 w-20 bg-[#0d9488] mb-6"></div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
            {content}
          </p>
        </div>
        <div className="flex-1 w-full">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-200 to-gray-300">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-gray-400">Image placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

// Blog Card Component
const BlogCard = ({ 
  title, 
  summary, 
  slug 
}: { 
  title: string
  summary: string
  slug: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gray-400 text-sm">Blog thumbnail</span>
          </div>
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-white/90 rounded-full text-xs font-medium text-gray-600">
              Coming soon
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0d9488] transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4 text-base">
            {summary}
          </p>
          <button className="flex items-center space-x-2 text-[#0d9488] hover:text-[#0d9488]/80 font-medium group-hover:translate-x-1 transition-transform">
            <span>Read more</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

// Carousel Component
const SnippetsCarousel = ({ snippets }: { snippets: Array<{ id: string; caption: string }> }) => {
  return (
    <div className="overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
      <div className="flex space-x-4">
        {snippets.map((snippet, index) => (
          <motion.div
            key={snippet.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-64 group"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-gray-200 to-gray-300">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-400 text-xs">Photo {index + 1}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium">{snippet.caption}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const Highlights = () => {
  // Section 1: Photo Highlights
  const photos = [
    { id: '1', src: '/TOYOTA.jpg', caption: 'Toyota internship' },
    { id: '2', src: '/Q2.jpg', caption: 'Q2 Software internship' },
    { id: '3', src: '/SWARMHACK.jpg', caption: 'Toyota Global Hackathon Internal' },
    { id: '4', src: '/hiking.jpeg', caption: 'Mountain trail' },
    { id: '5', src: '/sanyahiking.jpeg', caption: 'Hiking in the mountains' },
    { id: '6', src: '/hackathon.jpg', caption: 'Hackathon weekend' },
  ]

  // Section 2: Life Chapters
  const lifeChapters = [
    {
      title: 'Hiking Era',
      content: 'Maple Pass was the hike that made me realize I actually enjoy suffering. I also beat my group by 1.5 hours by accident. Oops. The North Cascades became my favorite place on earth, no competition. Now I\'m training for Mount Baker and Rainier—because apparently I like challenging myself in the most physical way possible.',
      imageSide: 'right' as const
    },
    {
      title: 'The Seattle–Dallas–NYC Shuffle',
      content: 'I bounce between these three cities like I\'m collecting experiences. Seattle for the mountains and coffee, Dallas for family and warmth, NYC for the energy and food. My favorite? Depends on the food that week. It\'s chaotic, but so am I.',
      imageSide: 'left' as const
    },
    {
      title: 'Engineering Journey',
      content: 'Started with curiosity, stayed for the problem-solving. From debugging WebSockets at 2am to building production systems that actually matter. Every bug teaches me something, every feature ships with a story. This is what I love doing.',
      imageSide: 'right' as const
    },
    {
      title: 'Hackathon Weekends',
      content: 'Thriving on Red Bull and questionable ideas since freshman year. Weekend coding sprints are my happy place. There\'s something beautiful about turning chaos into something that works, even if it\'s just for 48 hours.',
      imageSide: 'left' as const
    },
    {
      title: 'Cooking Era',
      content: 'Currently making Thai jasmine rice like it\'s a personality trait. Costco chicken era continues. There\'s something meditative about cooking after a long day of coding—simple, satisfying, and delicious.',
      imageSide: 'right' as const
    },
    {
      title: 'Fitness & Mobility Training',
      content: 'Currently in my "getting ready for Mount Baker" phase. Lately I\'m in my mobility era because mountain goals are real and my shoulders complain. Ask me again in two months when I\'m actually ready.',
      imageSide: 'left' as const
    },
    {
      title: 'Why I Build Things',
      content: 'Because there\'s something magical about turning ideas into reality. Because I want my components to stop yelling at me. Because building things that matter is what makes me feel alive. Every project is a story, every line of code is a choice.',
      imageSide: 'right' as const
    }
  ]

  // Section 3: Projects
  const projects = [
    {
      title: 'Diving into 3D Modeling',
      summary: 'Exploring 3D modeling and design through hands-on projects and experimentation.',
      link: 'https://youtu.be/uyoE0Nef5vQ'
    },
    {
      title: 'NotionCards',
      summary: 'A web app to convert Notion toggles into flashcards with spaced repetition algorithm.',
      link: 'https://github.com/sanyahegde/notion-cards'
    },
    {
      title: 'Comet Marketplace',
      summary: 'A full-stack marketplace platform with user authentication and product management.',
      link: 'https://github.com/sanyahegde/CometMarketplace'
    },
    {
      title: 'OneView',
      summary: 'A comprehensive data visualization and analytics platform with interactive dashboards.',
      link: 'https://github.com/sanyahegde/oneview'
    }
  ]

  // Section 4: Blog Posts
  const blogPosts = [
    {
      title: 'How I built NotionCards',
      summary: 'Turning Notion toggles into a spaced repetition flashcard system that actually works. Spoiler: it involved way more debugging than I expected, but the result was worth every late night.',
      slug: 'notioncards-build'
    },
    {
      title: 'Debugging mistakes I made early on',
      summary: 'The bugs that taught me the most about writing better code and thinking systematically. Some were embarrassing, all were valuable lessons.',
      slug: 'debugging-mistakes'
    },
    {
      title: 'Trackr: the origin story',
      summary: 'The journey from "this would be cool" to a social goal-tracking app supporting 500+ users. Includes all the mistakes, the pivots, and the moments that made it real.',
      slug: 'trackr-journey'
    },
    {
      title: 'Preparing for Mount Baker',
      summary: 'Training for a mountain isn\'t just physical—it\'s mental, it\'s planning, it\'s learning to respect the mountain. Here\'s what I\'m doing to get ready for 2025.',
      slug: 'mount-baker-prep'
    }
  ]

  // Section 4: Snippets Carousel
  const snippets = [
    { id: '1', caption: 'Maple Pass: my Roman Empire' },
    { id: '2', caption: 'Seattle sunsets after shipping a backend feature' },
    { id: '3', caption: 'Thai jasmine rice supremacy' },
    { id: '4', caption: 'Hackathon weekend chaos' },
    { id: '5', caption: 'Training for Mount Baker' },
    { id: '6', caption: 'NYC energy' },
    { id: '7', caption: 'Dallas warmth' },
    { id: '8', caption: 'Coding late nights' }
  ]

  return (
    <section className="min-h-screen bg-white py-20 relative overflow-hidden">
      <CodeBackground />
      <div className="container-custom max-w-7xl relative z-10">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Highlights
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            A visual journey through my life, work, and the things I care about
          </p>
        </motion.div>

        {/* Section 1: Photo Highlights Grid */}
        <motion.section
              initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Photo Highlights
          </h2>
          <PhotoGrid photos={photos} />
        </motion.section>

        {/* Section 2: Life Chapters */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
            Life Chapters
          </h2>
          <div className="space-y-24">
            {lifeChapters.map((chapter, index) => (
              <LifeChapterSection
                key={chapter.title}
                title={chapter.title}
                content={chapter.content}
                imageSide={chapter.imageSide}
              />
          ))}
        </div>
        </motion.section>

        {/* Section 3: Projects */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0d9488] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 text-base">
                      {project.summary}
                    </p>
                    <div className="flex items-center space-x-2 text-[#0d9488] hover:text-[#0d9488]/80 font-medium group-hover:translate-x-1 transition-transform">
                      <span>View project</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 4: Mini Blog Cards */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Writing
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                summary={post.summary}
                slug={post.slug}
              />
            ))}
          </div>
        </motion.section>

        {/* Section 5: Snippets Carousel */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Snippets of My Life
          </h2>
          <SnippetsCarousel snippets={snippets} />
        </motion.section>
      </div>
    </section>
  )
}

export default Highlights 
