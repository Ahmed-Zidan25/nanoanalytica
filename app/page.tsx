import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { UseCases } from '@/components/use-cases'
import { Advantages } from '@/components/advantages'
import { ContactCTA } from '@/components/contact-cta'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 space-y-12">
        <Hero />
        <Features />
        <UseCases />
        <Advantages />
        <ContactCTA />
        <Footer />
      </div>
    </main>
  )
}
