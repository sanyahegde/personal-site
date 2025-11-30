'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import CurrentlyBuilding from '@/components/CurrentlyBuilding'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
export default function Home() {
  useEffect(() => {
    // Always use light mode (white background)
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }, [])

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Header />
      <main className="bg-white dark:bg-[#0a192f]">
        <Hero />
        <About />
        <TechStack />
        <CurrentlyBuilding />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
} 