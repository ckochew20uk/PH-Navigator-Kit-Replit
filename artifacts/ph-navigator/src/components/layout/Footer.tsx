import React from 'react';
import { Link } from 'wouter';
import { Logo } from '@/components/ui/logo';
import { NewsletterSignup } from '@/components/NewsletterSignup';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground border-t-[8px] border-secondary">
      {/* Newsletter Band */}
      <div className="bg-primary/90 border-b border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-secondary font-semibold text-sm uppercase tracking-wide mb-2">Stay connected</p>
              <h2 className="text-3xl font-serif font-bold text-white mb-3 leading-snug">
                Updates from the PH community
              </h2>
              <p className="text-primary-foreground/75 text-lg leading-relaxed">
                New resources, research news, upcoming events, and support information — delivered to your inbox. Sign up to stay informed about what matters to you.
              </p>
            </div>
            <div>
              <NewsletterSignup variant="footer" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="pt-14 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-white inline-block p-4 rounded-xl mb-6 shadow-md">
                <Logo size="lg" />
              </div>
              <p className="text-primary-foreground/90 text-lg mb-6 leading-relaxed max-w-md">
                Navigating life with pulmonary hypertension — together. A trusted guide for patients and carers across Australia and New Zealand.
              </p>
              <div className="space-y-2 text-primary-foreground/80 text-sm">
                <p className="font-semibold text-white">A partnership between:</p>
                <p>Pulmonary Hypertension Association Australia (PHA Australia)</p>
                <p>Pulmonary Hypertension Society of Australia and New Zealand (PHSANZ)</p>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold mb-4 text-white border-b border-primary-foreground/20 pb-2">Support</h3>
              <ul className="space-y-3">
                <li><Link href="/recently-diagnosed" className="text-primary-foreground/80 hover:text-secondary transition-colors">Recently Diagnosed</Link></li>
                <li><Link href="/treatments" className="text-primary-foreground/80 hover:text-secondary transition-colors">Treatments</Link></li>
                <li><Link href="/living-well" className="text-primary-foreground/80 hover:text-secondary transition-colors">Living Well</Link></li>
                <li><Link href="/caring-for-someone" className="text-primary-foreground/80 hover:text-secondary transition-colors">For Carers</Link></li>
                <li><Link href="/resource-library" className="text-primary-foreground/80 hover:text-secondary transition-colors">Resource Library</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold mb-4 text-white border-b border-primary-foreground/20 pb-2">Community</h3>
              <ul className="space-y-3">
                <li><Link href="/community-voices" className="text-primary-foreground/80 hover:text-secondary transition-colors">Patient Stories</Link></li>
                <li><Link href="/find-specialist" className="text-primary-foreground/80 hover:text-secondary transition-colors">Find a Specialist</Link></li>
                <li><Link href="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">About Us</Link></li>
                <li><Link href="/for-healthcare-professionals" className="text-primary-foreground/80 hover:text-secondary transition-colors">For Professionals</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold mb-4 text-white border-b border-primary-foreground/20 pb-2">Emergency</h3>
              <ul className="space-y-3 text-primary-foreground/80">
                <li>Medical Emergency: <strong className="text-white">000</strong></li>
                <li>Lifeline: <strong className="text-white">13 11 14</strong></li>
                <li>Beyond Blue: <strong className="text-white">1300 22 4636</strong></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>&copy; {currentYear} PHA Australia and PHSANZ. All rights reserved.</p>
            <div className="flex gap-4">
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer">Terms of Use</span>
              <span className="hover:text-white cursor-pointer">Accessibility</span>
            </div>
          </div>

          <div className="mt-8 text-xs text-primary-foreground/50 text-center max-w-4xl mx-auto">
            <p>Disclaimer: The information provided on PH Navigator is for educational purposes only and does not substitute for professional medical advice. Always consult with your PH specialist team regarding your treatment and care.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
