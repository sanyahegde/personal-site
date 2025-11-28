'use client'

import { motion } from 'framer-motion'

const CodeBackground = () => {
  // Sparse code snippets - only a few, spread out
  const leftSideCode = [
    `const engineer = {`,
    `  name: "Sanya"`,
    `};`,
    `function build() {`,
    `  return code;`,
    `}`
  ]

  const rightSideCode = [
    `class Developer {`,
    `  learn() {}`,
    `}`,
    `const projects = []`
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Left side code */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 font-mono text-xs sm:text-sm">
        {leftSideCode.map((line, i) => (
          <motion.div
            key={`left-${i}`}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0.15, 0.3],
              y: [0, -20, -40, -20, 0]
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
            className="absolute"
            style={{
              left: `${5 + i * 2}%`,
              top: `${10 + i * 15}%`,
              color: i % 2 === 0 ? '#0d9488' : '#14b8a6',
              textShadow: '0 0 8px currentColor',
              filter: 'blur(0.3px)'
            }}
          >
            {line}
          </motion.div>
        ))}
      </div>

      {/* Right side code */}
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 font-mono text-xs sm:text-sm">
        {rightSideCode.map((line, i) => (
          <motion.div
            key={`right-${i}`}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0.15, 0.3],
              y: [0, -25, -50, -25, 0]
            }}
            transition={{
              duration: 18 + i * 3,
              repeat: Infinity,
              delay: i * 2.5,
              ease: "easeInOut"
            }}
            className="absolute"
            style={{
              right: `${5 + i * 2}%`,
              top: `${15 + i * 18}%`,
              color: i % 2 === 0 ? '#14b8a6' : '#0d9488',
              textShadow: '0 0 8px currentColor',
              filter: 'blur(0.3px)'
            }}
          >
            {line}
          </motion.div>
        ))}
      </div>

      {/* Very sparse floating elements - only 3-4 total */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`float-${i}`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.25, 0.1, 0.25],
            y: [0, -30, -60, -30, 0],
            x: [0, 15, -15, 0]
          }}
          transition={{
            duration: 25 + i * 4,
            repeat: Infinity,
            delay: i * 5,
            ease: "easeInOut"
          }}
          className="absolute font-mono text-xs"
          style={{
            left: i % 2 === 0 ? `${8 + i * 3}%` : `${92 - i * 3}%`,
            top: `${20 + i * 25}%`,
            color: i % 2 === 0 ? '#0d9488' : '#14b8a6',
            textShadow: '0 0 8px currentColor',
            filter: 'blur(0.3px)'
          }}
        >
          {i % 2 === 0 ? '<Code />' : 'function()'}
        </motion.div>
      ))}
    </div>
  )
}

export default CodeBackground

