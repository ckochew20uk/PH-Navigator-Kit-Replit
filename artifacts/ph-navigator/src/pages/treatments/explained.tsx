import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

export default function TreatmentsExplained() {
  return (
    <div className="w-full">
      <section className="bg-muted py-10 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/treatments">
            <Button variant="ghost" className="mb-6 -ml-4 text-primary hover:bg-primary/10">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Treatments
            </Button>
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Treatments Explained</h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              An overview of the targeted therapies and supportive treatments used to manage pulmonary hypertension.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-p:text-foreground/90 prose-headings:text-primary max-w-none mb-12">
            <h2>Targeted PH Therapies</h2>
            <p>
              Targeted therapies (often used for WHO Group 1 PAH) work by relaxing blood vessels in the lungs, reducing the excess cells that narrow the arteries, and helping the heart pump more effectively. Your specialist may prescribe one or a combination of these medications.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full mb-16">
            <AccordionItem value="era" className="border border-border mb-4 rounded-lg px-2 shadow-sm bg-white overflow-hidden">
              <AccordionTrigger className="hover:no-underline px-4 py-4">
                <div className="flex flex-col text-left">
                  <span className="font-bold text-primary text-xl">Endothelin Receptor Antagonists (ERAs)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-lg text-foreground/80">
                <p className="mb-4">People with PAH often have too much endothelin, a substance in the blood that causes blood vessels to constrict (narrow). ERAs block the effect of endothelin, helping vessels relax.</p>
                <p><strong>Common examples:</strong> Bosentan, Macitentan, Ambrisentan.</p>
                <p><strong>How taken:</strong> Oral tablets.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pde5" className="border border-border mb-4 rounded-lg px-2 shadow-sm bg-white overflow-hidden">
              <AccordionTrigger className="hover:no-underline px-4 py-4">
                <div className="flex flex-col text-left">
                  <span className="font-bold text-primary text-xl">Phosphodiesterase-5 (PDE-5) Inhibitors</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-lg text-foreground/80">
                <p className="mb-4">These medications work by allowing the lungs to produce more nitric oxide, a natural substance that helps relax and widen blood vessels.</p>
                <p><strong>Common examples:</strong> Sildenafil, Tadalafil.</p>
                <p><strong>How taken:</strong> Oral tablets.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sgc" className="border border-border mb-4 rounded-lg px-2 shadow-sm bg-white overflow-hidden">
              <AccordionTrigger className="hover:no-underline px-4 py-4">
                <div className="flex flex-col text-left">
                  <span className="font-bold text-primary text-xl">Soluble Guanylate Cyclase (sGC) Stimulators</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-lg text-foreground/80">
                <p className="mb-4">Similar to PDE-5 inhibitors, sGC stimulators enhance the body's sensitivity to nitric oxide, promoting blood vessel relaxation. They are also used for patients with CTEPH (Group 4) who cannot have surgery.</p>
                <p><strong>Common example:</strong> Riociguat.</p>
                <p><strong>How taken:</strong> Oral tablets.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="prostacyclin" className="border border-border mb-4 rounded-lg px-2 shadow-sm bg-white overflow-hidden">
              <AccordionTrigger className="hover:no-underline px-4 py-4">
                <div className="flex flex-col text-left">
                  <span className="font-bold text-primary text-xl">Prostacyclin Analogues & Agonists</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-lg text-foreground/80">
                <p className="mb-4">Prostacyclin is a natural substance that keeps blood vessels open and prevents clots. People with PAH often do not produce enough of it. These medications replace or mimic it.</p>
                <p><strong>Common examples:</strong> Epoprostenol, Iloprost, Treprostinil, Selexipag.</p>
                <p><strong>How taken:</strong> Depending on the specific medication, they can be given via continuous intravenous (IV) infusion, continuous subcutaneous (under the skin) infusion, inhaled via a nebuliser, or as oral tablets.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="prose prose-lg prose-p:text-foreground/90 prose-headings:text-primary max-w-none">
            <h2>Supportive Therapies</h2>
            <p>
              In addition to targeted therapies, your doctor may prescribe medications to manage symptoms or complications of PH.
            </p>
            <ul>
              <li><strong>Diuretics (water pills):</strong> Help the kidneys remove excess fluid from the body, reducing swelling in the legs and abdomen, and decreasing the workload on the heart.</li>
              <li><strong>Anticoagulants (blood thinners):</strong> Prevent blood clots from forming or growing larger, especially important in CTEPH.</li>
              <li><strong>Oxygen Therapy:</strong> Supplemental oxygen may be required if oxygen levels in your blood are low, especially during exertion, sleep, or air travel.</li>
            </ul>

            <h2 className="mt-12">Surgical Options</h2>
            <p>
              For specific types of PH or very advanced disease, surgical interventions may be considered.
            </p>
            <ul>
              <li><strong>Pulmonary Endarterectomy (PEA):</strong> A highly specialised surgery specifically for Group 4 (CTEPH) patients to remove old blood clots from the lung arteries. It can be potentially curative.</li>
              <li><strong>Balloon Pulmonary Angioplasty (BPA):</strong> A less invasive procedure for CTEPH patients who are not suitable for PEA. A balloon is inflated to widen narrowed arteries.</li>
              <li><strong>Lung Transplantation:</strong> Considered only for a small number of patients with advanced PH who do not respond to maximal medical therapy.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
