import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, Pill, ClipboardList } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TreatmentsHub() {
  return (
    <div className="w-full">
      <section className="bg-muted py-12 md:py-20 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Treatments & Clinical Facts</h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8">
              While there is no cure for PH, treatments have advanced significantly. Understand the medications available and what your clinical test results mean for your management.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <Link href="/treatments/explained" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow border-t-4 border-t-primary flex flex-col group">
                <CardHeader>
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    <Pill size={28} />
                  </div>
                  <CardTitle className="text-2xl font-serif text-primary">Treatments Explained</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-lg text-foreground/80 mb-6 flex-1">
                    A guide to the main classes of PH medications, oxygen therapy, and surgical options including transplantation.
                  </p>
                  <div className="text-secondary font-bold flex items-center group-hover:text-primary transition-colors mt-auto">
                    View treatments <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/treatments/test-results" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow border-t-4 border-t-secondary flex flex-col group">
                <CardHeader>
                  <div className="bg-secondary/10 w-14 h-14 rounded-full flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
                    <ClipboardList size={28} />
                  </div>
                  <CardTitle className="text-2xl font-serif text-primary">Understanding Test Results</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-lg text-foreground/80 mb-6 flex-1">
                    Demystify terms like mPAP, PCWP, and 6MWT. Understand what your test results actually measure.
                  </p>
                  <div className="text-secondary font-bold flex items-center group-hover:text-primary transition-colors mt-auto">
                    Read the guide <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

          </div>

          <div className="mt-16 bg-white p-8 rounded-xl border border-border shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-4">Important Disclaimer</h3>
            <p className="text-foreground/80">
              The information in this section is for educational purposes only. Treatment for pulmonary hypertension is highly individualised based on your specific WHO Group, overall health, and how your body responds to therapy. Never change or stop your medications without consulting your PH specialist team.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
