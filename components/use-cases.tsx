'use client'

import { Beaker, Palette, Factory, Microscope } from 'lucide-react'

const useCases = [
  {
    icon: Beaker,
    category: 'Research',
    title: 'Academic Research',
    description: 'Accelerate particle characterization studies with automated, reproducible measurements. Perfect for materials science, nanotechnology, and chemistry labs.',
  },
  {
    icon: Palette,
    category: 'Industrial',
    title: 'Coatings & Paints',
    description: 'Ensure consistent pigment and particle size distribution across batches. Meet quality standards and reduce production variability.',
  },
  {
    icon: Factory,
    category: 'Industrial',
    title: 'Dyes & Pigments',
    description: 'Control particle size specifications with precision. Streamline quality control and optimize formulations for better performance.',
  },
  {
    icon: Microscope,
    category: 'Research',
    title: 'Material Analysis',
    description: 'Comprehensive particle characterization for composites, ceramics, and advanced materials. Get precise morphological data instantly.',
  },
]

export function UseCases() {
  const accentColors = ['text-primary', 'text-accent', 'text-chart-3', 'text-chart-4']
  const bgColors = ['bg-primary/10', 'bg-accent/10', 'bg-chart-3/10', 'bg-chart-4/10']

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="text-gradient">Researchers & Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From academic institutions to Fortune 500 manufacturers, our platform delivers results that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-xl bg-card border border-border/50 hover:border-primary/60 card-animate relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${bgColors[index]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10`} />
                
                <div className="flex items-start gap-6 relative z-10">
                  <div className={`w-14 h-14 rounded-lg ${bgColors[index]} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-md`}>
                    <Icon className={`w-7 h-7 ${accentColors[index]} group-hover:scale-125 transition-transform duration-300`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-semibold ${accentColors[index]} uppercase tracking-wide`}>
                        {useCase.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
