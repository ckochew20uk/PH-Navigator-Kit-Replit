import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, Stethoscope, FileQuestion, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function RecentlyDiagnosed() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-muted py-12 md:py-20 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Recently Diagnosed</h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8">
              Receiving a diagnosis of pulmonary hypertension can be overwhelming and frightening. Take a deep breath. You don't need to understand everything today. Start here to learn the basics and prepare for what comes next.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <Link href="/recently-diagnosed/what-is-ph" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow border-t-4 border-t-destructive flex flex-col group">
                <CardHeader>
                  <div className="bg-destructive/10 w-14 h-14 rounded-full flex items-center justify-center text-destructive mb-4 group-hover:scale-110 transition-transform">
                    <BookOpen size={28} />
                  </div>
                  <CardTitle className="text-2xl font-serif text-primary">What is PH?</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-lg text-foreground/80 mb-6 flex-1">
                    Clear, plain-language explanations of pulmonary hypertension, the different types, and common symptoms.
                  </p>
                  <div className="text-secondary font-bold flex items-center group-hover:text-primary transition-colors mt-auto">
                    Read guide <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/recently-diagnosed/diagnostic-journey" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow border-t-4 border-t-primary flex flex-col group">
                <CardHeader>
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    <Stethoscope size={28} />
                  </div>
                  <CardTitle className="text-2xl font-serif text-primary">Diagnostic Journey</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-lg text-foreground/80 mb-6 flex-1">
                    What to expect from tests like echocardiograms, right heart catheterisations, and lung function tests.
                  </p>
                  <div className="text-secondary font-bold flex items-center group-hover:text-primary transition-colors mt-auto">
                    Understand the journey <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/recently-diagnosed/questions-for-doctor" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow border-t-4 border-t-secondary flex flex-col group">
                <CardHeader>
                  <div className="bg-secondary/10 w-14 h-14 rounded-full flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
                    <FileQuestion size={28} />
                  </div>
                  <CardTitle className="text-2xl font-serif text-primary">Questions for Your Doctor</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-lg text-foreground/80 mb-6 flex-1">
                    A printable, practical list of questions to take to your specialist appointments to ensure you get the answers you need.
                  </p>
                  <div className="text-secondary font-bold flex items-center group-hover:text-primary transition-colors mt-auto">
                    View questions <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

          </div>

          <div className="mt-20 bg-accent/20 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">A Note on Googling</h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              When newly diagnosed, it is natural to search the internet for answers. Please be aware that much of the information online regarding pulmonary hypertension is outdated or clinically inaccurate. Survival rates and treatment options have improved dramatically in recent years. Always rely on information from your specialist team and trusted sources like PH Navigator.
            </p>
            <Link href="/find-specialist">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full">
                Find a Specialist Centre
              </Button>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
