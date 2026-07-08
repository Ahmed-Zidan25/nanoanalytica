'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  const scrollToContact = () => {
    const element = document.getElementById('contact-section')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="relative w-10 h-10">
            <Image
              src="/logo.png"
              alt="Nanoanalytica Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black bg-gradient-to-r from-primary via-accent to-chart-3 bg-clip-text text-transparent">NanoAnalyticA</span>
            <span className="text-xs font-bold text-accent">Software</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="/" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Use Cases
          </Link>
          <Link href="/" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            About
          </Link>
        </nav>

        {/* CTA Button */}
        <Button
          onClick={scrollToContact}
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Request Demo
        </Button>
      </div>
    </header>
  )
}
