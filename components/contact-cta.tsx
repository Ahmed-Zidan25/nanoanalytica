'use client'

import { useState, FormEvent } from 'react'
import { Button } from './ui/button'
import { Mail, ArrowRight } from 'lucide-react'

export function ContactCTA() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Demo request for:', email)
    setIsSubmitted(true)
    setEmail('')
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact-section" className="py-16 md:py-24 bg-gradient-to-b from-background via-primary/5 to-secondary/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Main heading */}
          <div className="text-center mb-10 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ready to <span className="text-gradient">Transform Your Analysis?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Schedule a personalized live demo and see how <span className="font-black bg-gradient-to-r from-accent via-chart-4 to-primary bg-clip-text text-transparent">NanoAnalyticA Software</span> can accelerate your research and production workflows.
            </p>
          </div>

          {/* Contact form */}
          <div className="bg-gradient-to-br from-card via-card to-primary/5 border border-border/50 hover:border-primary/30 rounded-2xl p-8 md:p-12 shadow-2xl shadow-primary/10 card-animate transition-all duration-500 relative overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                  <input
                    type="email"
                    placeholder="your@company.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-background/50 border border-border rounded-lg pl-12 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50"
                  />
                </div>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  placeholder="Your institution or company"
                  className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-accent/50"
                />
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Primary Interest
                </label>
                <select className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50">
                  <option>Research & Academia</option>
                  <option>Coatings & Paints</option>
                  <option>Dyes & Pigments</option>
                  <option>Materials Science</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white font-semibold py-3 rounded-lg gap-2 group btn-glow shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/50"
                >
                  {isSubmitted ? (
                    <span className="animate-pulse">Demo request received!</span>
                  ) : (
                    <>
                      Request Your Live Demo
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                We&apos;ll contact you within 24 hours to schedule your personalized demo. No credit card required.
              </p>
            </form>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-background border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 card-animate">
              <div className="text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">500+</div>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-accent/10 to-background border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 card-animate" style={{ animationDelay: '0.1s' }}>
              <div className="text-2xl font-bold text-accent mb-1">50+</div>
              <p className="text-sm text-muted-foreground">Organizations</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-chart-3/10 to-background border border-chart-3/20 hover:border-chart-3/50 transition-all duration-300 hover:shadow-lg hover:shadow-chart-3/20 card-animate" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl font-bold text-chart-3 mb-1">99.9%</div>
              <p className="text-sm text-muted-foreground">Uptime SLA</p>
            </div>
          </div>

          {/* Direct contact info */}
          <div className="mt-6 text-center animate-fade-in-up">
            <p className="text-sm text-muted-foreground mb-2">
              Or reach out directly at{' '}
              <a 
                href="mailto:ahmadibrahim.zidan@gmail.com" 
                className="text-primary hover:text-accent font-semibold underline transition-colors duration-300 hover:scale-105 inline-block"
              >
                ahmadibrahim.zidan@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
