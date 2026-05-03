import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MentalWellbeing() {
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Mental Wellbeing & Coping</h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              A diagnosis of pulmonary hypertension changes your life. It is entirely normal to experience a wide range of emotions, including grief, anger, anxiety, and depression.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-p:text-foreground/90 prose-headings:text-primary max-w-none">
            
            <div className="bg-destructive/10 border border-destructive/20 p-6 rounded-xl mb-10">
              <h3 className="font-bold text-xl mt-0 mb-2 text-destructive">You are not alone</h3>
              <p className="m-0 text-foreground/90">
                If you are struggling right now and need to speak with someone immediately, please call <strong>Lifeline on 13 11 14</strong> or <strong>Beyond Blue on 1300 22 4636</strong>. Support is available 24/7.
              </p>
            </div>

            <h2>The Psychological Impact of PH</h2>
            <p>
              Living with a rare, chronic, and life-limiting illness carries a heavy emotional burden. You may be grieving the loss of your old life, your career, or your physical abilities. You might feel anxious about the future, frightened of medical procedures, or stressed about finances.
            </p>
            <p>
              Furthermore, the physical symptoms of PH—specifically shortness of breath and a racing heart—can actually mimic the physical sensations of a panic attack, creating a cycle where physical symptoms trigger anxiety, which in turn worsens breathlessness.
            </p>

            <h2>Strategies for Coping</h2>
            <ul>
              <li><strong>Acknowledge your feelings:</strong> Don't try to force yourself to be "positive" all the time. Allow yourself to feel angry or sad. Toxic positivity can be exhausting.</li>
              <li><strong>Focus on what you can control:</strong> You cannot cure PH, but you can control taking your medication on time, eating well, attending appointments, and resting when needed.</li>
              <li><strong>Communicate openly:</strong> Talk to your family and friends. Because PH is an "invisible illness" (you might look perfectly healthy while feeling terrible), people around you may not understand your limitations unless you explain them.</li>
              <li><strong>Mindfulness and relaxation:</strong> Techniques such as gentle meditation, progressive muscle relaxation, or simply taking time to rest quietly can help break the cycle of anxiety and breathlessness.</li>
            </ul>

            <div className="bg-muted p-8 rounded-xl my-10">
              <div className="flex items-center gap-3 mb-4">
                <HeartHandshake className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold mt-0 mb-0 text-primary">Seeking Professional Help</h3>
              </div>
              <p className="mb-4">
                You do not have to manage these feelings on your own. Speaking with a psychologist or counsellor who specialises in chronic illness can be transformative.
              </p>
              <p className="mb-0">
                In Australia, ask your GP for a <strong>Mental Health Treatment Plan</strong>. This provides Medicare rebates for up to 10 sessions per calendar year with a registered psychologist, social worker, or occupational therapist.
              </p>
            </div>

            <h2>The Power of Peer Support</h2>
            <p>
              Because PH is so rare, you might be the only person in your town who has it. Connecting with others who truly understand what you are going through can drastically reduce feelings of isolation.
            </p>
            <p>
              PHA Australia coordinates support groups and online communities where patients and carers can share experiences, practical tips, and emotional support in a safe environment.
            </p>
            
          </div>
        </div>
      </section>
    </div>
  );
}
