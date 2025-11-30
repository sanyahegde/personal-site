'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Home } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Determine active section based on scroll position
      const sections = ['home', 'about', 'projects', 'experience', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
    { name: 'Highlights', href: '/highlights' },
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      // Navigate to a different page
      router.push(href)
    } else {
      // Scroll to section on current page
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  const goHome = () => {
    router.push('/')
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0a192f]/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-gradient">Sanya Hegde</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {pathname === '/' ? (
              // Show regular navigation on main page
              navItems.map((item) => {
                const sectionId = item.href.replace('#', '')
                const isActive = activeSection === sectionId || (sectionId === 'home' && activeSection === 'home')
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative transition-colors duration-200 font-medium ${
                      isActive
                        ? 'text-teal-400'
                        : 'text-white/80 hover:text-teal-400'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-teal-500 to-emerald-500" />
                    )}
                  </button>
                )
              })
            ) : (
              // Show home button and highlights on other pages
              <>
                <button
                  onClick={goHome}
                  className="text-white/80 hover:text-teal-400 transition-colors duration-200 font-medium flex items-center space-x-2"
                >
                  <Home size={16} />
                  <span>Home</span>
                </button>
                <button
                  onClick={() => scrollToSection('#highlights')}
                    className="text-white/80 hover:text-teal-400 transition-colors duration-200 font-medium"
                >
                  Highlights
                </button>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a192f] shadow-lg border-t border-white/20">
            <nav className="flex flex-col space-y-1 p-4">
              {pathname === '/' ? (
                // Show regular navigation on main page
                navItems.map((item) => {
                  const sectionId = item.href.replace('#', '')
                  const isActive = activeSection === sectionId || (sectionId === 'home' && activeSection === 'home')
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`text-left py-3 px-4 rounded-lg transition-all duration-200 font-medium ${
                        isActive
                          ? 'text-teal-400 bg-teal-500/20'
                          : 'text-white/80 hover:text-teal-400 hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                    </button>
                  )
                })
              ) : (
                // Show home button and highlights on other pages
                <>
                  <button
                    onClick={goHome}
                    className="text-left py-3 px-4 text-white/80 hover:text-teal-400 hover:bg-white/10 rounded-lg transition-all duration-200 font-medium flex items-center space-x-2"
                  >
                    <Home size={16} />
                    <span>Home</span>
                  </button>
                  <button
                    onClick={() => scrollToSection('#highlights')}
                    className="text-left py-3 px-4 text-white/80 hover:text-teal-400 hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
                  >
                    Highlights
                  </button>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 