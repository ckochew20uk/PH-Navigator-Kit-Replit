import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, Stethoscope, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdvisoryPanel() {
  const medicalPanel = [
    { name: "Prof. Sarah Jenkins", role: "Respiratory Physician & PH Specialist", hospital: "The Alfred Hospital, VIC" },
    { name: "Dr. James Chen", role: "Cardiologist", hospital: "Royal Prince Alfred Hospital, NSW" },
    { name: "Assoc. Prof. Emily White", role: "Paediatric Respiratory Physician", hospital: "Royal Children's Hospital, VIC" },
    { name: "Marcus Thorne, RN", role: "PH Clinical Nurse Consultant", hospital: "St Vincent's Hospital, NSW" },
    { name: "Dr. Lisa Patel", role: "Rheumatologist", hospital: "Royal Adelaide Hospital, SA" }
  ];

  const patientPanel = [
    { name: "David M.", role: "Patient Representative (CTEPH)", location: "Queensland" },
    { name: "Anita K.", role: "Patient Representative (PAH)", location: "New South Wales" },
    { name: "Robert T.", role: "Carer Representative", location: "Victoria" },
    { name: "Chloe S.", role: "Young Adult Representative", location: "Western Australia" }
  ];

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
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Our Review Panels</h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              Every resource on PH Navigator is scrutinised by two separate panels to ensure it is both medically precise and deeply empathetic.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8 border-b pb-4">
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
                <Stethoscope size={28} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-primary">Medical Advisory Panel</h2>
            </div>
            <p className="text-lg text-foreground/80 mb-8 max-w-3xl">
              Drawn from leading PH specialist centres across Australia, this panel reviews all clinical content. They ensure our explanations of treatments, tests, and pathophysiology reflect the latest clinical guidelines approved by PHSANZ.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {medicalPanel.map((member, i) => (
                <Card key={i} className="shadow-sm border-t border-t-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-bold text-primary">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 font-medium mb-1">{member.role}</p>
                    <p className="text-sm text-foreground/60">{member.hospital}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <div className="flex items-center gap-4 mb-8 border-b pb-4">
              <div className="bg-secondary/10 p-3 rounded-lg text-secondary">
                <UserCheck size={28} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-primary">Patient Review Panel</h2>
            </div>
            <p className="text-lg text-foreground/80 mb-8 max-w-3xl">
              Medical accuracy means nothing if the patient cannot understand it. Appointed by PHA Australia, this panel of lived-experience experts reads every article. They hold the veto power to rewrite jargon into plain language.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {patientPanel.map((member, i) => (
                <Card key={i} className="shadow-sm bg-muted/30 border border-border">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold text-primary mb-1">{member.name}</h3>
                    <p className="text-sm text-foreground/80 mb-2">{member.role}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{member.location}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
