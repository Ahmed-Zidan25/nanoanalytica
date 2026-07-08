'use client'

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">ParticleSize</h3>
            <p className="text-muted-foreground text-sm">
              Automated particle measurement from SEM and TEM images. Precision meets automation.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">API</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Security</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 ParticleSize. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">LinkedIn</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
