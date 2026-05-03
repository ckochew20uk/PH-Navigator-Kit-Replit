import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Partnership() {
  return (
    <div className="w-full">
      <section className="bg-muted py-10 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/about">
            <Button variant="ghost" className="mb-6 -ml-4 text-primary hover:bg-primary/10">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to About Us
            </Button>
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">The Partnership</h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              PH Navigator is the result of a landmark collaboration between the patient advocacy community and clinical specialists.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-p:text-foreground/90 prose-headings:text-primary max-w-none">
            
            <h2>Two Voices, One Goal</h2>
            <p>
              Historically, medical information online has either been highly clinical and impossible for patients to understand, or written by laypeople without the necessary medical accuracy. PH Navigator was built to bridge this gap.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-10">
              <div className="bg-card border border-border p-8 rounded-xl shadow-sm border-t-4 border-t-primary">
                <h3 className="font-serif text-2xl font-bold mt-0 mb-4 text-primary">PHA Australia</h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Patient Advocacy</p>
                <p>
                  The Pulmonary Hypertension Association Australia represents the lived experience. They ensure the tone of this site is warm, the advice is practical, and the realities of daily life with PH are accurately reflected. They advocate for patient rights, fund research, and run peer support networks.
                </p>
              </div>

              <div className="bg-card border border-border p-8 rounded-xl shadow-sm border-t-4 border-t-secondary">
                <h3 className="font-serif text-2xl font-bold mt-0 mb-4 text-primary">PHSANZ</h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Medical Expertise</p>
                <p>
                  The Pulmonary Hypertension Society of Australia and New Zealand is the peak professional body for clinicians treating PH. They ensure every medical fact, treatment description, and piece of clinical advice on this platform is evidence-based, accurate, and reflects current best-practice guidelines.
                </p>
              </div>
            </div>

            <h2>How PH Navigator was Developed</h2>
            <p>
              This platform was built through a co-design process. Focus groups of newly diagnosed patients were asked what information they desperately needed but couldn't find. Clinical nurse consultants were asked what questions they answer every day.
            </p>
            <p>
              Every article on this site passes through a rigorous dual-review process: first by the Medical Advisory Panel for clinical accuracy, and then by the Patient Review Panel to ensure the language is accessible and empathetic.
            </p>

            <div className="bg-muted p-8 rounded-xl my-10 flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
                <Mail size={32} />
              </div>
              <div>
                <h3 className="font-bold text-xl mt-0 mb-2 text-primary">Contact Us</h3>
                <p className="m-0 text-foreground/90">
                  If you have feedback on the website, wish to share your patient story, or need to contact PHA Australia for general inquiries:
                </p>
                <p className="mt-4 font-semibold text-primary">
                  Email: hello@phnavigator.org.au
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
