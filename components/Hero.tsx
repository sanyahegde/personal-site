'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, MapPin, Code } from 'lucide-react'
import TypewriterTagline from './TypewriterTagline'

const Hero = () => {
  const [currentCode, setCurrentCode] = useState(0)
  
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCode((prev) => (prev + 1) % codeSnippets.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const socialLinks = [
    { icon: Github, url: 'https://github.com/sanyahegde', label: 'GitHub', color: 'hover:bg-gray-900 hover:text-white' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/sanya-hegde-591327225/', label: 'LinkedIn', color: 'hover:bg-blue-600 hover:text-white' },
    { icon: Mail, url: 'mailto:sanyahegde7@gmail.com', label: 'Email', color: 'hover:bg-red-500 hover:text-white' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 py-20">
      <div className="container-custom max-w-6xl">
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
              <span className="block mt-2">
                <TypewriterTagline />
              </span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400"
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
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-teal-500 hover:text-white transition-all duration-200 hover:scale-110"
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
            className="relative lg:-mt-8"
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
                <motion.pre
                  key={currentCode}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-gray-300 leading-relaxed"
                >
                  {codeSnippets[currentCode].split('\n').map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <span className="text-gray-500 mr-4">{i + 1}</span>
                      <span className={line.includes('const') || line.includes('function') || line.includes('class') 
                        ? 'text-purple-400' 
                        : line.includes('return') || line.includes('build') || line.includes('learn') || line.includes('innovate')
                        ? 'text-yellow-400'
                        : line.includes('"') || line.includes("'")
                        ? 'text-green-400'
                        : 'text-gray-300'
                      }>
                        {line.trim() || '\u00A0'}
                      </span>
                    </motion.div>
                  ))}
                </motion.pre>
              </div>
            </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 