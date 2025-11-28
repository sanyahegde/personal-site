'use client'

import { Sun, Moon } from 'lucide-react'

interface ThemeToggleProps {
  isDark: boolean
  onToggle: () => void
}

const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-24 right-6 z-50 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}

export default ThemeToggle 