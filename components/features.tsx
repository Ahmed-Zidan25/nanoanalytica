'use client'

import { Zap, Target, BarChart3, Lock, Brain, Clock } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Fully Automated Analysis',
    description: 'No manual processing required. Upload your SEM or TEM images and get instant, accurate measurements.',
  },
  {
    icon: Target,
    title: 'Multi-Dimensional Particles',
    description: 'Measure 0D, 1D, and 2D particles with equal precision. Handle any morphology and complexity.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Get comprehensive statistical analysis, distribution data, and export-ready reports.',
  },
  {
    icon: Lock,
    title: 'Enterprise-Grade Security',
    description: 'Your data is secure with bank-level encryption and full compliance with industry standards.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Detection',
    description: 'Machine learning algorithms trained on thousands of microscope images ensure consistent accuracy.',
  },
  {
    icon: Clock,
    title: 'Real-Time Results',
    description: 'Process batches of images simultaneously and get results in minutes, not days.',
  },
]

export function Features() {
  const colors = ['from-primary/20', 'from-accent/20', 'from-chart-3/20', 'from-chart-4/20', 'from-chart-5/20', 'from-primary/20']
  const borderColors = ['border-primary/30', 'border-accent/30', 'border-chart-3/30', 'border-chart-4/30', 'border-chart-5/30', 'border-primary/30']

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powered by <span className="text-gradient">Innovation</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform combines cutting-edge AI with scientific precision to deliver unmatched particle analysis capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`group p-8 rounded-xl bg-gradient-to-br ${colors[index]} to-background/50 border ${borderColors[index]} hover:border-primary/60 card-animate overflow-hidden relative`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated background shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
                
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colors[index]} to-background flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-md`}>
                  <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
