import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Stethoscope, Link as LinkIcon, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ForProfessionals() {
  return (
    <div className="w-full">
      <section className="bg-primary text-primary-foreground py-12 md:py-20 border-b-8 border-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm font-semibold mb-6">
              <Stethoscope className="h-4 w-4" /> Clinical Resources
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">For Healthcare Professionals</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-3xl">
              Clinical resources, referral guidelines, and patient education materials provided by PHSANZ.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            <Card className="shadow-md border-border">
              <CardHeader className="bg-muted/30 border-b">
                <CardTitle className="text-2xl font-serif text-primary">Referral Criteria</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-foreground/80 mb-4">
                  Early referral to a designated PH Specialist Centre is critical for improving patient outcomes. Consider referral for patients presenting with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90 mb-6">
                  <li>Unexplained dyspnea on exertion where common causes (asthma, COPD, left heart disease) have been excluded or are out of proportion to symptoms.</li>
                  <li>Echocardiographic signs suggesting elevated right heart pressures (e.g., TRV &gt; 2.8 m/s, right ventricular enlargement/dysfunction).</li>
                  <li>History of pulmonary embolism presenting with persistent breathlessness (query CTEPH).</li>
                  <li>Connective tissue disease (e.g., systemic sclerosis) with declining DLCO or new breathlessness.</li>
                </ul>
                <Button variant="outline" className="w-full text-primary border-primary">
                  <LinkIcon className="mr-2 h-4 w-4" /> View Full Referral Pathway
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-md border-border">
              <CardHeader className="bg-muted/30 border-b">
                <CardTitle className="text-2xl font-serif text-primary">Clinical Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-foreground/80 mb-4">
                  Access the latest consensus guidelines for the diagnosis and management of pulmonary hypertension.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="border border-border p-3 rounded hover:bg-muted transition-colors cursor-pointer flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-primary">ESC/ERS Guidelines (2022)</p>
                      <p className="text-sm text-foreground/60">Diagnosis and treatment of pulmonary hypertension</p>
                    </div>
                    <ExternalLinkIcon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="border border-border p-3 rounded hover:bg-muted transition-colors cursor-pointer flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-primary">TSANZ Guidelines</p>
                      <p className="text-sm text-foreground/60">Australian specific context and PBS prescribing</p>
                    </div>
                    <ExternalLinkIcon className="h-5 w-5 text-muted-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          <h2 className="text-3xl font-serif font-bold text-primary mb-8 border-b pb-4">Patient Education Handouts</h2>
          <p className="text-lg text-foreground/80 mb-8">
            Download and print these one-page resources to give to patients during consultations. They are designed to supplement the information on this website.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "What is PH? (Overview)",
              "Preparing for your RHC",
              "Starting on ERAs/PDE5is",
              "Understanding Oxygen Therapy",
              "Diet and Fluid Restrictions",
              "Traveling with PH"
            ].map((title, i) => (
              <div key={i} className="flex items-center justify-between bg-card border border-border p-4 rounded-lg shadow-sm hover:shadow transition-shadow">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-destructive" />
                  <span className="font-semibold text-foreground">{title}</span>
                </div>
                <Button variant="ghost" size="icon" className="text-secondary hover:text-primary">
                  <Download className="h-5 w-5" />
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-muted p-8 rounded-xl border border-border text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-4">Professional Enquiries</h3>
            <p className="text-foreground/80 mb-6">
              For clinical enquiries, updates to the specialist centre directory, or to contact the PHSANZ executive committee:
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Contact PHSANZ Secretariat
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
}

function ExternalLinkIcon(props: any) {
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
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  );
}
