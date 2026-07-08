'use client'

import { CheckCircle } from 'lucide-react'

const advantages = [
  'Zero manual intervention required',
  'Consistent results across all image types',
  'Processes images 10x faster than manual methods',
  'Reproducible and audit-trail ready',
  'API integration for workflow automation',
  'Batch processing capabilities',
  'Customizable analysis parameters',
  'Export to multiple formats',
]

export function Advantages() {
  const statColors = ['text-primary', 'text-accent', 'text-chart-3', 'text-chart-4']
  const statBgColors = ['from-primary/10 to-background', 'from-accent/10 to-background', 'from-chart-3/10 to-background', 'from-chart-4/10 to-background']

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/50 relative overflow-hidden">
      {/* Animated decorative elements */}
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 -translate-y-1/2 animate-pulse" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left side - Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Why We&apos;re <span className="text-gradient">Different</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We built the only truly automated solution for particle measurement. While others offer semi-automated tools, we deliver end-to-end automation that eliminates human error and saves weeks of lab time.
            </p>

            {/* Grid of advantages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center gap-3 group cursor-default animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 group-hover:text-accent transition-all duration-300" />
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">{advantage}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Stats/Visual */}
          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            {[
              { value: '10x', label: 'Faster than manual methods', index: 0 },
              { value: '99.9%', label: 'Accuracy rate', index: 1 },
              { value: '0', label: 'Manual intervention needed', index: 2 },
              { value: '∞', label: 'Batch processing limit', index: 3 },
            ].map((stat, index) => (
              <div key={index} className={`p-8 rounded-xl bg-gradient-to-br ${statBgColors[index]} border border-border/50 hover:border-primary/60 card-animate group`}>
                <div className={`text-5xl font-bold ${statColors[index]} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
