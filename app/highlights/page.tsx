'use client'

import Highlights from '@/components/Highlights'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HighlightsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <Highlights />
      </div>
      <Footer />
    </div>
  )
} 