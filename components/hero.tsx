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
      className="w-full h-full pointer-events-none"
      src="https://www.youtube.com/embed/52GoRYP1les?autoplay=1&mute=1&loop=1&playlist=52GoRYP1les&controls=0&modestbranding=1"
      title="Nano Background"
      allow="autoplay; fullscreen"
    />
  </div>

  {/* 🌑 Overlay */}
  <div className="absolute inset-0 bg-black/70 z-10" />

  {/* 🌟 Content */}
  <div className="container mx-auto px-4 md:px-6 relative z-20 h-full flex items-center">
    <div className="max-w-3xl mx-auto text-center text-white">

      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
        <Zap className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium">The Only Fully Automated Solution</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        Measure Every <span className="text-gradient">Particle</span> with Precision
      </h1>

      <p className="text-xl text-white/80 mb-8">
        Automated particle size measurement from SEM and TEM images.
      </p>

      <div className="flex gap-4 justify-center">
        <Button onClick={handleContactClick}>
          Request Live Demo
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>

        <Button variant="outline">
          Learn More
        </Button>
      </div>

    </div>
  </div>
</section>
```

)
}
