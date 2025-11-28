'use client'

import { motion } from 'framer-motion'
import { Heart, Coffee, BookOpen, Music, Gamepad2, Plane, Trophy, Star, Zap, Palette, Home } from 'lucide-react'
import { useRouter } from 'next/navigation'

const Highlights = () => {
  const router = useRouter()
  
  const personalHighlights = [
    {
      icon: Heart,
      title: 'Passions & Interests',
      items: [
        'Open source contribution',
        'Tech meetups & conferences',
        'Mentoring junior developers',
        'Reading tech blogs & books'
      ],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Coffee,
      title: 'Daily Rituals',
      items: [
        'Morning coffee + code review',
        'Daily standup with team',
        'Evening learning session',
        'Weekend project building'
      ],
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: BookOpen,
      title: 'Currently Learning',
      items: [
        'Rust programming language',
        'Machine Learning basics',
        'Advanced React patterns',
        'System design principles'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Music,
      title: 'Work Vibes',
      items: [
        'Lo-fi coding music',
        'Nature sounds for focus',
        'Classical during debugging',
        'Silence for complex problems'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Gamepad2,
      title: 'Gaming & Hobbies',
      items: [
        'Strategy games (Civilization)',
        'Puzzle solving',
        'Chess enthusiast',
        'Escape room lover'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Plane,
      title: 'Travel & Adventure',
      items: [
        'Tech conferences worldwide',
        'Mountain hiking',
        'City exploration',
        'Cultural experiences'
      ],
      color: 'from-cyan-500 to-blue-500'
    }
  ]

  const funFacts = [
    {
      icon: Trophy,
      title: 'Achievements',
      content: 'Led a team of 8 developers to deliver a project 2 weeks ahead of schedule'
    },
    {
      icon: Star,
      title: 'Fun Fact',
      content: 'I can solve a Rubik\'s cube in under 2 minutes while explaining the algorithms'
    },
    {
      icon: Zap,
      title: 'Superpower',
      content: 'I can debug complex issues by just looking at the code (most of the time!)'
    },
    {
      icon: Palette,
      title: 'Creative Side',
      content: 'I design my own UI components and sometimes create digital art'
    }
  ]

  const currentGoals = [
    'Build a successful SaaS product',
    'Contribute to major open source projects',
    'Speak at a major tech conference',
    'Mentor 100+ developers',
    'Learn 5 new programming languages',
    'Visit 20+ countries for tech events'
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Get to Know <span className="text-gradient">Me Better</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Beyond the code, here are some personal highlights, fun facts, and insights that make me who I am. 
            Let's connect on a more personal level!
          </p>
        </motion.div>

        {/* Personal Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {personalHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <highlight.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {highlight.title}
              </h3>
              
              <ul className="space-y-2">
                {highlight.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Fun Facts Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Fun Facts & <span className="text-gradient">Achievements</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {funFacts.map((fact, index) => (
              <motion.div
                key={fact.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <fact.icon size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {fact.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {fact.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Current <span className="text-gradient">Goals</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {currentGoals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {goal}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Back to Main Page Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => router.push('/')}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <Home size={20} />
            <span>Back to Main Page</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Highlights 