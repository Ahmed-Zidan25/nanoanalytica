'use client'

import { ArrowRight, Zap } from 'lucide-react'
import { Button } from './ui/button'

export function Hero() {
  const handleContactClick = () => {
    const element = document.getElementById('contact-section')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-secondary pt-16 pb-24 md:pt-24 md:pb-32">
      {/* Animated decorative background elements */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-chart-3/5 rounded-full blur-3xl -z-10 opacity-20 animate-float" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 dark:from-primary/30 dark:to-accent/30 rounded-full mb-6 border border-primary/20 animate-fade-in-down">
            <Zap className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">The Only Fully Automated Solution</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Measure Every <span className="text-gradient">Particle</span> with Precision
          </h1>
          <p className="text-lg md:text-xl font-black mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-accent via-chart-4 to-primary bg-clip-text text-transparent">Powered by NanoAnalyticA Software</span>
          </p>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Automated particle size measurement from SEM and TEM images. Eliminate manual analysis and unlock insights at scale for research and industry.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white gap-2 px-8 py-6 text-base font-semibold rounded-lg btn-glow shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/50"
              onClick={handleContactClick}
            >
              Request Live Demo
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base font-semibold border-2 border-primary/50 hover:border-primary hover:bg-primary/5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
