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

  // Section 2: Blog Posts
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

        {/* Section 2: Mini Blog Cards */}
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

      </div>
    </section>
  )
}

export default Highlights 
