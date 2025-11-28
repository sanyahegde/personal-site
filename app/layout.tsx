import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sanya Hegde - Software Engineer',
  description: 'Computer Science student at University of Texas at Dallas. Software Engineering Intern at Q2 Software and Toyota Motor North America. Passionate about building innovative software solutions.',
  keywords: ['portfolio', 'developer', 'software engineer', 'computer science', 'UTD', 'Q2 Software', 'Toyota'],
  authors: [{ name: 'Sanya Hegde' }],
  creator: 'Sanya Hegde',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sanyahegde.com',
    title: 'Sanya Hegde - Software Engineer',
    description: 'Computer Science student at University of Texas at Dallas. Software Engineering Intern at Q2 Software and Toyota Motor North America.',
    siteName: 'Sanya Hegde Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanya Hegde - Software Engineer',
    description: 'Computer Science student at University of Texas at Dallas. Software Engineering Intern at Q2 Software and Toyota Motor North America.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 