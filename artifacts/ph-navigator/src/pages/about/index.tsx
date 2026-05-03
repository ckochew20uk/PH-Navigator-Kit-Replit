import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Info, Users, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutHub() {
  return (
    <div className="w-full">
      <section className="bg-muted py-12 md:py-20 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">About Us & Governance</h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8 max-w-3xl">
              PH Navigator is built on a unique collaboration between patients and medical professionals, ensuring information is both clinically accurate and empathetically delivered.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <Link href="/about/partnership" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow border-t-4 border-t-primary flex flex-col group">
                <CardHeader>
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    <HeartHandshakeIcon size={28} />
                  </div>
                  <CardTitle className="text-2xl font-serif text-primary">The Partnership</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-lg text-foreground/80 mb-6 flex-1">
                    Learn about the collaboration between PHA Australia (patient advocacy) and PHSANZ (medical professionals).
                  </p>
                  <div className="text-secondary font-bold flex items-center group-hover:text-primary transition-colors mt-auto">
                    Read our story <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/about/advisory-panel" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow border-t-4 border-t-secondary flex flex-col group">
                <CardHeader>
                  <div className="bg-secondary/10 w-14 h-14 rounded-full flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
                    <ShieldCheck size={28} />
                  </div>
                  <CardTitle className="text-2xl font-serif text-primary">Advisory Panels</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-lg text-foreground/80 mb-6 flex-1">
                    Meet the Medical Advisory Panel and Patient Review Panel who review and vet all content on PH Navigator.
                  </p>
                  <div className="text-secondary font-bold flex items-center group-hover:text-primary transition-colors mt-auto">
                    Meet the panels <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

          </div>

        </div>
      </section>
    </div>
  );
}

// Temporary icon component since HeartHandshake is not imported directly above
function HeartHandshakeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M12 5 9.04 9.2a2.71 2.71 0 0 0-2.84 3.9l8.17 11.35" />
      <path d="m18 10-3 3" />
    </svg>
  );
}
