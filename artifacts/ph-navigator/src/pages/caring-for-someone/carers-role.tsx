import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CarersRole() {
  return (
    <div className="w-full">
      <section className="bg-muted py-10 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/caring-for-someone">
            <Button variant="ghost" className="mb-6 -ml-4 text-primary hover:bg-primary/10">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Carers Hub
            </Button>
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Understanding the Carer's Role</h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              Caring for someone with PH involves complex logistics, from managing medications and oxygen to coordinating medical appointments.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-p:text-foreground/90 prose-headings:text-primary max-w-none">
            
            <h2>The Practical Realities</h2>
            <p>
              Depending on the severity of your loved one's PH, your role as a carer might range from occasional help with transport, to full-time assistance with daily living. Common responsibilities include:
            </p>
            <ul>
              <li><strong>Medication management:</strong> PH requires a strict medication regimen. You may need to organise Webster-paks, handle complex IV/subcutaneous pump preparations, and track scripts.</li>
              <li><strong>Oxygen logistics:</strong> If your loved one is on oxygen therapy, you will likely manage the ordering of cylinders, maintain concentrators, and ensure portable oxygen is charged and ready when leaving the house.</li>
              <li><strong>Symptom monitoring:</strong> Keeping an eye out for increased breathlessness, swelling, or sudden weight gain, and communicating these to the medical team.</li>
              <li><strong>Advocacy:</strong> Acting as a second set of ears at appointments, taking notes, and speaking up when your loved one is too tired to do so.</li>
            </ul>

            <div className="bg-card border border-border p-6 rounded-xl shadow-sm my-10">
              <h3 className="text-xl font-bold mt-0 mb-4 text-primary">Preparing for Emergencies</h3>
              <p className="mb-4 text-foreground/80">
                Because PH is rare, general emergency medical staff (like paramedics or local hospital ED staff) may not be familiar with the condition or the specific medications.
              </p>
              <ul className="mb-0 text-foreground/80">
                <li>Keep a printed summary of your loved one's diagnosis, current medications, and the contact number for their PH specialist team on the fridge or by the front door.</li>
                <li><strong>Crucial:</strong> If your loved one is on an continuous IV or subcutaneous prostacyclin pump, <strong>the pump must never be stopped or turned off</strong>. Ensure emergency personnel know this immediately.</li>
              </ul>
            </div>

            <h2>Legal and Medical Authority</h2>
            <p>
              It is important to have conversations about future care early, while your loved one is relatively well and able to make their wishes known clearly.
            </p>
            <ul>
              <li><strong>Enduring Power of Attorney (Medical):</strong> This legal document allows your loved one to appoint you (or someone else) to make medical decisions on their behalf if they become too unwell to make those decisions themselves.</li>
              <li><strong>Advance Care Directive:</strong> Also known as a "Living Will," this document outlines your loved one's preferences for future healthcare and end-of-life care. Having this in place removes the burden of guessing what they would have wanted during a crisis.</li>
            </ul>
            <p>
              Rules and forms for these documents vary by Australian state. Ask the hospital social worker or your solicitor for the correct documentation for your area.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
