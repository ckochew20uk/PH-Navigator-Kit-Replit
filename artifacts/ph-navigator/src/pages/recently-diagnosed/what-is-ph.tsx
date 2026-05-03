import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

export default function WhatIsPH() {
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">What is Pulmonary Hypertension?</h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              An overview of pulmonary hypertension (PH), how it affects your body, and the different types of the condition.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-p:text-foreground/90 prose-headings:text-primary max-w-none mb-12">
            <h2>The Basics</h2>
            <p>
              <strong>Pulmonary hypertension (PH)</strong> is a rare, complex, and serious condition where the blood pressure in the lungs is higher than normal. 
            </p>
            <p>
              The word "pulmonary" means relating to the lungs, and "hypertension" means high blood pressure. However, it is very different from regular high blood pressure (systemic hypertension) which is measured with a cuff on your arm. PH affects the arteries in the lungs and the right side of the heart.
            </p>

            <div className="bg-card border border-border p-6 rounded-xl shadow-sm my-8">
              <h3 className="text-xl font-bold mt-0 mb-4 text-primary">How it affects the body</h3>
              <p className="mb-0 text-foreground/80">
                In a healthy body, the right side of the heart pumps blood through the pulmonary arteries into the lungs, where it picks up oxygen. The blood then returns to the left side of the heart to be pumped to the rest of the body.
              </p>
              <p className="mb-0 mt-4 text-foreground/80">
                In a person with PH, the walls of the pulmonary arteries become thick, stiff, or blocked. This narrows the space for blood to flow through, increasing the pressure. The right side of the heart has to work much harder to push blood through these narrowed arteries. Over time, this extra strain can cause the heart muscle to become weak and enlarged, leading to right heart failure.
              </p>
            </div>

            <h2>Common Symptoms</h2>
            <p>
              In the early stages, the symptoms of PH may be mild or unnoticeable. As the disease progresses, symptoms become more severe. Because many symptoms are similar to other heart and lung conditions, PH can be difficult to diagnose.
            </p>
            <ul>
              <li><strong>Breathlessness (dyspnea):</strong> Initially during exercise, but eventually while at rest.</li>
              <li><strong>Fatigue:</strong> Feeling constantly tired or exhausted.</li>
              <li><strong>Dizziness or fainting (syncope):</strong> Especially during physical activity.</li>
              <li><strong>Chest pain (angina):</strong> Pressure or pain in the chest.</li>
              <li><strong>Swelling (edema):</strong> In the ankles, legs, or abdomen due to fluid retention.</li>
              <li><strong>Palpitations:</strong> A racing or pounding heartbeat.</li>
            </ul>

            <h2 className="mt-12">The Five Groups of PH</h2>
            <p>
              The World Health Organization (WHO) categorises pulmonary hypertension into five groups based on the underlying cause. Knowing your group is critical, as it determines your treatment plan.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full mb-16">
            <AccordionItem value="group1" className="border border-border mb-4 rounded-lg px-2 shadow-sm bg-white overflow-hidden">
              <AccordionTrigger className="hover:no-underline px-4 py-4">
                <div className="flex flex-col text-left">
                  <span className="font-bold text-primary text-xl">Group 1: Pulmonary Arterial Hypertension (PAH)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-lg text-foreground/80">
                <p className="mb-4">PAH occurs when the arteries in the lungs become narrowed, thickened, or stiff. It can be:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Idiopathic:</strong> The cause is unknown (the most common type of PAH).</li>
                  <li><strong>Heritable:</strong> Passed down through genetics.</li>
                  <li><strong>Associated:</strong> Linked to other conditions like connective tissue diseases (e.g., scleroderma), congenital heart disease, liver disease, or HIV infection.</li>
                  <li><strong>Drug or toxin-induced:</strong> Associated with certain weight-loss drugs or illegal drug use.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="group2" className="border border-border mb-4 rounded-lg px-2 shadow-sm bg-white overflow-hidden">
              <AccordionTrigger className="hover:no-underline px-4 py-4">
                <div className="flex flex-col text-left">
                  <span className="font-bold text-primary text-xl">Group 2: PH due to Left Heart Disease</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-lg text-foreground/80">
                <p>This is the most common form of PH overall. It happens when the left side of the heart is not pumping efficiently (due to issues like heart valve disease or left ventricular failure). The pressure builds up in the left heart and backs up into the lungs, increasing pressure in the pulmonary veins.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="group3" className="border border-border mb-4 rounded-lg px-2 shadow-sm bg-white overflow-hidden">
              <AccordionTrigger className="hover:no-underline px-4 py-4">
                <div className="flex flex-col text-left">
                  <span className="font-bold text-primary text-xl">Group 3: PH due to Lung Disease or Hypoxia</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-lg text-foreground/80">
                <p>This group is caused by underlying chronic lung conditions or prolonged periods of low oxygen levels (hypoxia). Common causes include Chronic Obstructive Pulmonary Disease (COPD), pulmonary fibrosis, interstitial lung disease, or severe sleep apnea.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="group4" className="border border-border mb-4 rounded-lg px-2 shadow-sm bg-white overflow-hidden">
              <AccordionTrigger className="hover:no-underline px-4 py-4">
                <div className="flex flex-col text-left">
                  <span className="font-bold text-primary text-xl">Group 4: Chronic Thromboembolic Pulmonary Hypertension (CTEPH)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-lg text-foreground/80">
                <p>CTEPH occurs when old blood clots (pulmonary emboli) block or narrow the arteries in the lungs over a long period. Unlike other forms of PH, CTEPH can sometimes be cured or significantly improved with a specialised surgery called Pulmonary Endarterectomy (PEA) or a procedure called Balloon Pulmonary Angioplasty (BPA).</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="group5" className="border border-border rounded-lg px-2 shadow-sm bg-white overflow-hidden">
              <AccordionTrigger className="hover:no-underline px-4 py-4">
                <div className="flex flex-col text-left">
                  <span className="font-bold text-primary text-xl">Group 5: PH with Unclear or Multifactorial Causes</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-lg text-foreground/80">
                <p>This group includes a rare mix of conditions that don't fit into the other four groups, or where multiple factors contribute to PH. Examples include certain blood disorders, systemic disorders like sarcoidosis (when it doesn't fit Group 1 or 3), or metabolic disorders.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-muted p-6 rounded-xl border border-border">
            <div>
              <h4 className="font-bold text-primary text-xl mb-1">Next Step</h4>
              <p className="text-foreground/80">Learn what to expect during the diagnosis process.</p>
            </div>
            <Link href="/recently-diagnosed/diagnostic-journey">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
                The Diagnostic Journey <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
