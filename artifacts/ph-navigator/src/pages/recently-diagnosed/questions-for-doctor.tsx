import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function QuestionsForDoctor() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full">
      <section className="bg-muted py-10 border-b border-border/50 print:hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/recently-diagnosed">
            <Button variant="ghost" className="mb-6 -ml-4 text-primary hover:bg-primary/10">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Recently Diagnosed
            </Button>
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Questions to Ask Your Doctor</h1>
                <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-2xl">
                  Specialist appointments can be overwhelming. Taking a list of questions ensures you get the answers you need without forgetting anything important.
                </p>
              </div>
              <Button 
                onClick={handlePrint} 
                className="bg-secondary hover:bg-secondary/90 text-white shrink-0 shadow-sm"
              >
                <Printer className="mr-2 h-4 w-4" /> Print this list
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 print:py-0">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="hidden print:block mb-8">
            <h1 className="text-3xl font-serif font-bold text-primary mb-2">PH Navigator: Questions for Your Specialist</h1>
            <p className="text-sm text-foreground/70 border-b pb-4">Take this list to your next appointment. Add your own questions at the bottom.</p>
          </div>

          <div className="space-y-8">
            <Card className="shadow-sm print:shadow-none print:border-none print:mb-6">
              <CardHeader className="bg-muted/50 print:bg-transparent print:px-0">
                <CardTitle className="text-2xl font-serif text-primary">At Your First Appointment or Diagnosis</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 print:px-0">
                <ul className="space-y-4 text-lg text-foreground/90">
                  <li className="flex items-start gap-3"><div className="w-5 h-5 rounded border border-primary mt-1 shrink-0 print:border-black"></div> What type (WHO Group) of pulmonary hypertension do I have?</li>
                  <li className="flex items-start gap-3"><div className="w-5 h-5 rounded border border-primary mt-1 shrink-0 print:border-black"></div> What is the underlying cause, if known?</li>
                  <li className="flex items-start gap-3"><div className="w-5 h-5 rounded border border-primary mt-1 shrink-0 print:border-black"></div> Are my symptoms typical for my stage of the disease?</li>
                  <li className="flex items-start gap-3"><div className="w-5 h-5 rounded border border-primary mt-1 shrink-0 print:border-black"></div> What are the goals of my treatment?</li>
                  <li className="flex items-start gap-3"><div className="w-5 h-5 rounded border border-primary mt-1 shrink-0 print:border-black"></div> Who will be my main point of contact (e.g., PH nurse specialist)?</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-sm print:shadow-none print:border-none print:mb-6">
              <CardHeader className="bg-muted/50 print:bg-transparent print:px-0">
                <CardTitle className="text-2xl font-serif text-primary">Discussing Treatment Options</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 print:px-0">
                <ul className="space-y-4 text-lg text-foreground/90">
                  <li className="flex items-start gap-3"><div className="w-5 h-5 rounded border border-primary mt-1 shrink-0 print:border-black"></div> What medications are you recommending and how do they work?</li>
                  <li className="flex items-start gap-3"><div className="w-5 h-5 rounded border border-primary mt-1 shrink-0 print:border-black"></div> What are the possible side effects, and what should I do if I experience them?</li>
                  <li className="flex items-start gap-3"><div className="w-5 h-5 rounded border border-primary mt-1 shrink-0 print:border-black"></div> Will these interact with other medications or supplements I am taking?</li>
                  <li className="flex items-start gap-3"><div className="w-5 h-5 rounded border border-primary mt-1 shrink-0 print:border-black"></div> Do I need to be on oxygen therapy now or in the future?</li>
                  <li className="flex items-start gap-3"><div className="w-5 h-5 rounded border border-primary mt-1 shrink-0 print:border-black"></div> How soon will we know if the treatment is working?</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-sm print:shadow-none print:border-none print:mb-6">
              <CardHeader className="bg-muted/50 print:bg-transparent print:px-0">
                <CardTitle className="text-2xl font-serif text-primary">Lifestyle & Daily Management</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 print:px-0">
                <ul className="space-y-4 text-lg text-foreground/90">
                  <li className="flex items-start gap-3"><div className="w-5 h-5 rounded border border-primary mt-1 shrink-0 print:border-black"></div> Are there dietary restrictions I should follow (e.g., salt, fluids)?</li>
                  <li className="flex items-start gap-3"><div className="w-5 h-5 rounded border border-primary mt-1 shrink-0 print:border-black"></div> What kind of exercise is safe for me? Should I do pulmonary rehabilitation?</li>
                  <li className="flex items-start gap-3"><div className="w-5 h-5 rounded border border-primary mt-1 shrink-0 print:border-black"></div> Are there restrictions on travel, especially flying or high altitudes?</li>
                  <li className="flex items-start gap-3"><div className="w-5 h-5 rounded border border-primary mt-1 shrink-0 print:border-black"></div> Are there support groups or psychological support services you recommend?</li>
                </ul>
              </CardContent>
            </Card>
            
            <div className="mt-12 print:block">
              <h3 className="text-xl font-serif font-bold text-primary mb-4 print:text-black">Your own questions / Notes:</h3>
              <div className="space-y-8">
                <div className="border-b border-border/60 w-full"></div>
                <div className="border-b border-border/60 w-full"></div>
                <div className="border-b border-border/60 w-full"></div>
                <div className="border-b border-border/60 w-full"></div>
                <div className="border-b border-border/60 w-full"></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Print-specific CSS overrides */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body { background: white !important; color: black !important; }
          .container { max-width: 100% !important; padding: 0 !important; }
        }
      `}} />
    </div>
  );
}
