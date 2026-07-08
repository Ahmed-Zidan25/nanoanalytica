'use client'

import { ArrowRight, Zap } from 'lucide-react'
import { Button } from './ui/button'

export function Hero() {
const handleContactClick = () => {
const element = document.getElementById('contact-section')
element?.scrollIntoView({ behavior: 'smooth' })
}

return ( <section className="relative h-screen overflow-hidden">

```
  {/* 🎬 Background Video */}
  <div className="absolute inset-0 z-0">
    <iframe
      className="w-full h-full object-cover pointer-events-none"
      src="https://www.youtube.com/embed/52GoRYP1les?autoplay=1&mute=1&loop=1&playlist=52GoRYP1les&controls=0&showinfo=0&modestbranding=1"
      title="Nano Background"
      allow="autoplay; fullscreen"
    />
  </div>

  {/* 🌑 Dark Overlay for readability */}
  <div className="absolute inset-0 bg-black/70 z-10" />

  {/* ✨ Optional gradient overlay (premium look) */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10" />

  {/* 🌟 Decorative elements (kept but subtle) */}
  <div className="absolute top-10 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl z-10 animate-float" />
  <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl z-10 animate-pulse" />

  {/* 📦 Content */}
  <div className="container mx-auto px-4 md:px-6 relative z-20 h-full flex items-center">
    <div className="max-w-3xl mx-auto text-center text-white">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20 animate-fade-in-down">
        <Zap className="w-4 h-4 text-primary animate-pulse" />
        <span className="text-sm font-medium">The Only Fully Automated Solution</span>
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
        Measure Every <span className="text-gradient">Particle</span> with Precision
      </h1>

      <p className="text-lg md:text-xl font-semibold mb-4 animate-fade-in-up">
        <span className="bg-gradient-to-r from-accent via-chart-4 to-primary bg-clip-text text-transparent">
          Powered by NanoAnalyticA Software
        </span>
      </p>

      {/* Subheading */}
      <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed animate-fade-in-up">
        Automated particle size measurement from SEM and TEM images. Eliminate manual analysis and unlock insights at scale.
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
        <Button
          size="lg"
          className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white gap-2 px-8 py-6 text-base font-semibold rounded-lg shadow-lg transition-all duration-300"
          onClick={handleContactClick}
        >
          Request Live Demo
          <ArrowRight className="w-5 h-5" />
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="px-8 py-6 text-base font-semibold border-white/40 text-white hover:bg-white/10 rounded-lg transition-all duration-300"
        >
          Learn More
        </Button>
      </div>

    </div>
  </div>
</section>
```

)
}
