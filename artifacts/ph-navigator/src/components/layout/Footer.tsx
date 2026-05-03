import React from 'react';
import { Link } from 'wouter';
import { Logo } from '@/components/ui/logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t-[8px] border-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white/95 inline-block p-3 rounded-lg mb-6 shadow-md">
              <Logo />
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
    </footer>
  );
}
