'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, MapPin, Code } from 'lucide-react'
import TypewriterTagline from './TypewriterTagline'
import CodeBackground from './CodeBackground'

const Hero = () => {
  const [currentCode, setCurrentCode] = useState(0)
  const [displayedCode, setDisplayedCode] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  
  const codeSnippets = [
    `// debugging at 2am be like
const bug = findBug();
while (!bug.fixed) {
  console.log("why isn't this working?");
  bug = findBug(); // still broken
}
// finally fixed it
return "it was a typo";`,
    `// my thought process
if (project.idea === "cool") {
  const motivation = "high";
  const sleep = "low";
  build(project);
} else {
  procrastinate();
}`,
    `// me trying to optimize
function optimize() {
  const start = performance.now();
  // ... 3 hours later ...
  const end = performance.now();
  return end - start; // slower than before
}`
  ]

  // Typewriter effect for code
  useEffect(() => {
    const currentSnippet = codeSnippets[currentCode]
    const lines = currentSnippet.split('\n')
    
    // Reset when code changes
    setDisplayedCode('')
    setIsTyping(true)
    
    let lineIndex = 0
    let charIndex = 0
    let timeoutId: NodeJS.Timeout
    
    const typeNextChar = () => {
      if (lineIndex < lines.length) {
        const currentLine = lines[lineIndex]
        
        if (charIndex < currentLine.length) {
          // Type next character
          const char = currentLine[charIndex]
          setDisplayedCode((prev) => {
            const lines = prev.split('\n')
            if (lines[lineIndex]) {
              lines[lineIndex] += char
            } else {
              lines[lineIndex] = char
            }
            return lines.join('\n')
          })
          charIndex++
          
          // Variable typing speed (faster for code)
          const baseSpeed = 30
          const variation = Math.random() * 15 - 5
          const speed = baseSpeed + variation
          timeoutId = setTimeout(typeNextChar, speed)
        } else {
          // Move to next line
          if (lineIndex < lines.length - 1) {
            setDisplayedCode((prev) => prev + '\n')
            lineIndex++
            charIndex = 0
            // Small pause between lines
            timeoutId = setTimeout(typeNextChar, 100)
          } else {
            // Typing complete
            setIsTyping(false)
          }
        }
      }
    }
    
    // Start typing after a brief delay
    timeoutId = setTimeout(typeNextChar, 500)
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [currentCode])

  // Cycle through code snippets
  useEffect(() => {
    if (!isTyping) {
      const interval = setInterval(() => {
        setCurrentCode((prev) => (prev + 1) % codeSnippets.length)
      }, 5000) // Wait 5 seconds after typing completes
      return () => clearInterval(interval)
    }
  }, [isTyping, currentCode])

  // Blinking cursor animation
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  const socialLinks = [
    { icon: Github, url: 'https://github.com/sanyahegde', label: 'GitHub', color: 'hover:bg-gray-900 hover:text-white' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/sanya-hegde-591327225/', label: 'LinkedIn', color: 'hover:bg-blue-600 hover:text-white' },
    { icon: Mail, url: 'mailto:sanyahegde7@gmail.com', label: 'Email', color: 'hover:bg-red-500 hover:text-white' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0a192f] py-20 relative overflow-hidden">
      <CodeBackground />
      <div className="container-custom max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start lg:items-center">
          {/* Left Column - Profile Content */}
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-6"
          >
            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-start mb-6"
            >
              <div className="relative">
                <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-xl bg-gray-100 dark:bg-gray-800">
                  <img 
                    src="/sanyahegde.jpg" 
                    alt="Sanya Hegde" 
                    className="w-full h-full object-cover"
                    loading="eager"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerHTML = '<span class="text-4xl md:text-5xl font-bold text-gray-400 dark:text-gray-500 flex items-center justify-center w-full h-full bg-gray-200 dark:bg-gray-700">SH</span>';
                      }
                    }}
                  />
                </div>
              </div>
            </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
          >
              Sanya Hegde
              <span className="block mt-3">
                <TypewriterTagline />
              </span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300"
          >
              Computer Science Student
          </motion.h2>

            {/* Location */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start space-x-2 text-gray-500 dark:text-gray-400"
            >
              <MapPin size={18} />
              <span className="text-lg">Dallas, Texas</span>
            </motion.div>

            {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start space-x-3 pt-2"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-all duration-200 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
          </motion.div>

            {/* Professional Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed pt-4 max-w-xl mx-auto lg:mx-0"
            >
              I build web applications and software projects that blend problem-solving with thoughtful design. Always learning, always building.
            </motion.p>
        </motion.div>

          {/* Right Column - Code Display */}
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:-mt-6"
          >
            <div className="relative bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
              {/* Code Editor Header */}
              <div className="flex items-center space-x-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <Code size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-400 font-mono">code.js</span>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm">
                <pre className="text-gray-300 leading-relaxed">
                  {displayedCode.split('\n').map((line, i) => {
                    const allLines = displayedCode.split('\n')
                    const isLastLine = i === allLines.length - 1
                    const isCurrentlyTyping = isTyping && isLastLine
                    const originalLine = codeSnippets[currentCode].split('\n')[i] || ''
                    
                    // Determine syntax color for the line
                    const getLineColor = (lineText: string) => {
                      if (lineText.includes('//')) return 'text-gray-500'
                      if (lineText.includes('const') || lineText.includes('function') || lineText.includes('class') || lineText.includes('while') || lineText.includes('if') || lineText.includes('else') || lineText.includes('return')) {
                        return 'text-purple-400'
                      }
                      if (lineText.includes('"') || lineText.includes("'")) {
                        return 'text-green-400'
                      }
                      return 'text-gray-300'
                    }
                    
                    return (
                      <div key={i} className="flex">
                        <span className="text-gray-500 mr-4 select-none">{i + 1}</span>
                        <span className={getLineColor(originalLine)}>
                          {line || '\u00A0'}
                          {isCurrentlyTyping && showCursor && (
                            <span className="text-teal-400 ml-0.5">|</span>
                          )}
                        </span>
                      </div>
                    )
                  })}
                  {!isTyping && displayedCode && showCursor && (
                    <div className="flex">
                      <span className="text-gray-500 mr-4 select-none">{displayedCode.split('\n').length}</span>
                      <span className="text-teal-400">|</span>
                    </div>
                  )}
                  {displayedCode === '' && showCursor && (
                    <div className="flex">
                      <span className="text-gray-500 mr-4 select-none">1</span>
                      <span className="text-teal-400">|</span>
                    </div>
                  )}
                </pre>
              </div>
            </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 