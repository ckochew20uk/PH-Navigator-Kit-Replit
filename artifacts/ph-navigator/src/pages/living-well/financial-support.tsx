import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FinancialSupport() {
  return (
    <div className="w-full">
      <section className="bg-muted py-10 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/living-well">
            <Button variant="ghost" className="mb-6 -ml-4 text-primary hover:bg-primary/10">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Living Well
            </Button>
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Financial & Practical Support</h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              Navigating life with a chronic illness often brings financial challenges and logistical hurdles. Learn about the systems available in Australia to support you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            
            <Card className="shadow-sm border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary">The NDIS and PH</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground/80 mb-4">
                  The National Disability Insurance Scheme (NDIS) provides funding to Australians with a permanent and significant disability. While having pulmonary hypertension does not automatically guarantee NDIS access, many patients are eligible based on the functional impact of the disease.
                </p>
                <p className="text-lg text-foreground/80 mb-4">
                  To be eligible, you must prove that your condition significantly impacts your ability to perform everyday activities (like showering, cooking, or moving around your home) and that these impairments are likely to be permanent.
                </p>
                <p className="text-lg text-foreground/80">
                  <strong>Tip:</strong> The NDIS assesses how your condition affects your daily life, not just the medical diagnosis. When applying, be honest about your "worst days," not your best days. Ask your specialist and a physiotherapist/occupational therapist to provide detailed evidence of your functional limitations.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-t-4 border-t-secondary">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary">Medications and the PBS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground/80 mb-4">
                  Targeted PH therapies are extremely expensive, but in Australia, they are heavily subsidised by the government through the Pharmaceutical Benefits Scheme (PBS) if you meet strict medical criteria.
                </p>
                <p className="text-lg text-foreground/80 mb-4">
                  To access these subsidised medications, you must be treated at an approved PH specialist centre. Your specialist must submit detailed paperwork (including RHC results and 6MWT distances) to the government to prove you qualify.
                </p>
                <p className="text-lg text-foreground/80">
                  <strong>The PBS Safety Net:</strong> If you or your family require a lot of medication in a calendar year, the PBS Safety Net protects you from high out-of-pocket costs. Once you reach the threshold, your medicines will either be free or significantly cheaper for the rest of the year. Ask your pharmacist to keep a record of your PBS spending.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-t-4 border-t-accent">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary">Travel Assistance Schemes (IPTAAS)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground/80 mb-4">
                  Because PH is a rare disease, you will likely need to travel to a major city hospital to see a specialist team. If you live in a regional or rural area, you can claim financial assistance to help cover the costs of travel and accommodation.
                </p>
                <p className="text-lg text-foreground/80 mb-4">
                  Each state and territory has its own scheme. For example, in NSW it is called the Isolated Patients Travel and Accommodation Assistance Scheme (IPTAAS); in Victoria, it's the VPTAS; in Queensland, the PTSS.
                </p>
                <p className="text-lg text-foreground/80">
                  Your hospital social worker can provide the forms and help you understand what you are entitled to claim. Make sure you get the paperwork signed by your doctor during your visit.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-t-4 border-t-destructive">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary">Work and Centrelink</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground/80 mb-4">
                  Many people with PH find they need to reduce their working hours, change the type of work they do, or stop working altogether due to severe fatigue and breathlessness.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-foreground/80">
                  <li><strong>Disability Support Pension (DSP):</strong> You may be eligible for the DSP through Services Australia (Centrelink) if you are unable to work 15 hours or more a week due to your condition. The application process is complex and requires substantial medical evidence.</li>
                  <li><strong>Superannuation / Income Protection:</strong> Check your superannuation policy. Many include Income Protection Insurance or Total and Permanent Disability (TPD) insurance, which you may be able to claim if you can no longer work.</li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
