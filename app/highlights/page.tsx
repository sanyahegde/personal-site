'use client'

import { useState, useEffect } from 'react'
import Highlights from '@/components/Highlights'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ThemeToggle from '@/components/ThemeToggle'

export default function HighlightsPage() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      <Header />
      <div className="pt-16">
        <Highlights />
      </div>
      <Footer />
    </div>
  )
} 