import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CarerSupport() {
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Connecting with Carer Support Networks</h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              There is formal, funded support available for carers in Australia. You do not have to manage this alone.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            
            <Card className="shadow-sm border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary">Carer Gateway</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground/80 mb-4">
                  Carer Gateway is an Australian Government initiative providing free services and support for carers. It is the first place you should register.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-foreground/80 mb-6">
                  <li><strong>Free counselling:</strong> Provided over the phone or in person.</li>
                  <li><strong>Peer support:</strong> Connect with other carers in similar situations.</li>
                  <li><strong>Respite care:</strong> Help arranging emergency or planned breaks.</li>
                  <li><strong>Financial support packages:</strong> One-off funding for things like a laptop for studying, transport costs, or cleaning services to ease your burden.</li>
                </ul>
                <div className="bg-muted p-4 rounded-md">
                  <p className="font-bold text-primary mb-1">Contact Carer Gateway</p>
                  <p className="text-foreground/80">Call 1800 422 737 (Monday to Friday, 8am to 5pm) or visit carergateway.gov.au</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-t-4 border-t-secondary">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary">State-Based Carer Organisations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground/80 mb-4">
                  Each state and territory has its own Carers association (e.g., Carers NSW, Carers Victoria) that operates as part of Carers Australia. They advocate for carer rights and offer specific local workshops, events, and retreats.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-t-4 border-t-accent">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary">PH-Specific Peer Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground/80 mb-4">
                  While general carer support is helpful, sometimes you need to speak with someone who understands the specific anxieties of pulmonary hypertension (like managing an IV pump or dealing with extreme breathlessness).
                </p>
                <p className="text-lg text-foreground/80">
                  PHA Australia can help connect carers with other families managing PH. Ask your hospital's PH nurse specialist if they facilitate a local support group.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-t-4 border-t-destructive">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary">Financial Assistance for Carers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground/80 mb-4">
                  Services Australia (Centrelink) provides specific payments for eligible carers:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-foreground/80">
                  <li><strong>Carer Payment:</strong> An income support payment if you are unable to work due to providing constant care.</li>
                  <li><strong>Carer Allowance:</strong> A smaller, income-tested supplementary payment for parents or carers providing daily care.</li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
