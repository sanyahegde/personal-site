'use client'

import { useState, useEffect } from 'react'

const TypewriterTagline = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)
  const [opacity, setOpacity] = useState(0.8)

  const fullText = 'building things that matter'

  useEffect(() => {
    // Only run once on mount
    let currentIndex = 0
    let timeoutId: NodeJS.Timeout

    const typeNextChar = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        currentIndex++

        // Random typing speed between 70-90ms with slight variation
        const baseSpeed = 80
        const variation = Math.random() * 20 - 10 // -10 to +10ms
        const speed = baseSpeed + variation

        timeoutId = setTimeout(typeNextChar, speed)
      } else {
        // Typing complete - fade in to 100% opacity
        setIsTyping(false)
        setTimeout(() => {
          setOpacity(1)
        }, 50)
      }
    }

    // Start typing after a brief delay
    timeoutId = setTimeout(typeNextChar, 300)

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, []) // Empty dependency array ensures it only runs once

  // Blinking cursor animation
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530) // Blink every 530ms for natural feel

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span
      className="text-lg md:text-xl font-medium tracking-wide text-teal-600 dark:text-teal-400 transition-opacity duration-300"
      style={{ opacity }}
    >
      {displayedText}
      {showCursor && (
        <span style={{ color: '#0d9488', opacity: 0.7 }}>
          |
        </span>
      )}
    </span>
  )
}

export default TypewriterTagline

