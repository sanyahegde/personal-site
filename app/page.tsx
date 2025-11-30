'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import CurrentlyBuilding from '@/components/CurrentlyBuilding'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ThemeToggle from '@/components/ThemeToggle'

export default function Home() {
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
      <main className="bg-[#0a192f] dark:bg-[#0a192f]">
        <Hero />
        <About />
        <CurrentlyBuilding />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
} 