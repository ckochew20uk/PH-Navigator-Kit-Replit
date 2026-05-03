import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, Stethoscope, Clock, Activity, FileHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DiagnosticJourney() {
  const steps = [
    {
      title: '1. GP Referral',
      icon: <Stethoscope className="h-8 w-8 text-primary" />,
      content: 'Your journey typically begins with your General Practitioner (GP). You might visit them due to breathlessness or unexplained fatigue. They will perform initial checks and, if they suspect a heart or lung issue, refer you to a specialist (cardiologist or respiratory physician).',
    },
    {
      title: '2. Initial Specialist Appointment',
      icon: <FileHeart className="h-8 w-8 text-primary" />,
      content: 'The specialist will review your medical history, perform a physical examination, and order a series of non-invasive tests to rule out common conditions like asthma or standard heart failure.',
    },
    {
      title: '3. Non-Invasive Testing',
      icon: <Activity className="h-8 w-8 text-primary" />,
      content: 'You will likely undergo several tests, including an Echocardiogram (an ultrasound of your heart) which is the most useful screening test for PH. Other tests might include a V/Q scan (to check for blood clots in the lungs), pulmonary function tests, and blood tests.',
    },
    {
      title: '4. Right Heart Catheterisation (RHC)',
      icon: <Activity className="h-8 w-8 text-secondary" />,
      content: 'If the echocardiogram suggests PH, you will need a Right Heart Catheterisation. This is the "gold standard" test required to definitively diagnose PH. It involves passing a thin tube through a vein into the right side of your heart to measure pressures directly.',
    },
    {
      title: '5. Diagnosis & Treatment Plan',
      icon: <Stethoscope className="h-8 w-8 text-secondary" />,
      content: 'Once diagnosed and categorised into a specific WHO Group (1-5), your specialist team will develop a tailored treatment plan. This may involve specific PH medications, oxygen therapy, or in some cases, referral for surgical options.',
    }
  ];

  return (
    <div className="w-full">
      <section className="bg-muted py-10 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/recently-diagnosed">
            <Button variant="ghost" className="mb-6 -ml-4 text-primary hover:bg-primary/10">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Recently Diagnosed
            </Button>
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">The Diagnostic Journey</h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              Getting a confirmed diagnosis of pulmonary hypertension can take time. Understanding the process can help you feel more prepared and less anxious.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card border border-border p-6 md:p-8 rounded-xl shadow-sm mb-12 flex gap-6 items-start">
            <div className="bg-accent/20 p-4 rounded-full text-accent hidden md:flex shrink-0">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">A Note on Timelines</h3>
              <p className="text-lg text-foreground/80">
                Because PH symptoms mimic many common conditions (like asthma or lack of fitness), the diagnostic process often involves ruling out other diseases first. It is not uncommon for it to take months—or sometimes longer—from your first GP visit to a confirmed PH diagnosis. While this can be frustrating, these tests are essential to ensure you receive the correct treatment.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-primary mb-10">Step-by-Step Process</h2>
          
          <div className="relative border-l-4 border-muted ml-6 md:ml-10 space-y-12 pb-8">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[22px] md:-left-[26px] bg-white border-4 border-muted rounded-full p-1.5 md:p-2">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3 pt-1">{step.title}</h3>
                <p className="text-lg text-foreground/80">{step.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-between items-center bg-muted p-6 rounded-xl border border-border">
            <div>
              <h4 className="font-bold text-primary text-xl mb-1">Prepare for your appointments</h4>
              <p className="text-foreground/80">Take a list of questions to make the most of your specialist visits.</p>
            </div>
            <Link href="/recently-diagnosed/questions-for-doctor">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
                View Questions <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
