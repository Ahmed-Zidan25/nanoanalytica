'use client'

import { ArrowRight, Zap } from 'lucide-react'
import { Button } from './ui/button'

export function Hero() {
  const handleContactClick = () => {
    const element = document.getElementById('contact-section')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen overflow-hidden">

      {/* 🎬 Background Video */}
<div className="absolute inset-0 z-0">
  <iframe
    className="w-full h-full pointer-events-none"
    src="https://www.youtube.com/embed/dPgx9EH0e7g?autoplay=1&mute=1&loop=1&playlist=dPgx9EH0e7g&controls=0&modestbranding=1&cc_load_policy=0&iv_load_policy=3&rel=0"
    title="Nano Background"
    allow="autoplay; fullscreen"
  />
</div>

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* 🌟 Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 h-full flex items-center">
        <div className="max-w-3xl mx-auto text-center text-white">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium">
              The Only Fully Automated Solution
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Measure Every{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Particle
            </span>{' '}
            with Precision
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
            Automated particle size measurement from SEM and TEM images.
            Eliminate manual analysis and unlock insights at scale.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white gap-2 px-8 py-6 text-base font-semibold rounded-lg"
              onClick={handleContactClick}
            >
              Request Live Demo
              <ArrowRight className="w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base font-semibold border-white/40 text-white hover:bg-white/10 rounded-lg"
            >
              Learn More
            </Button>

          </div>

        </div>
      </div>
    </section>
  )
}