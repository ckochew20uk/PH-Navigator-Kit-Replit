import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ExerciseActivity() {
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Exercise & Physical Activity</h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              Safe, appropriate exercise can improve your muscle strength, reduce fatigue, and enhance your quality of life.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-p:text-foreground/90 prose-headings:text-primary max-w-none">
            
            <div className="bg-accent/20 border border-accent/30 p-6 rounded-xl mb-10">
              <p className="font-bold m-0 text-primary">
                Important: Always discuss an exercise plan with your PH specialist before starting. The type and amount of safe exercise depends highly on the severity of your PH.
              </p>
            </div>

            <h2>Why Exercise Matters</h2>
            <p>
              In the past, patients with PH were told to avoid exercise. Research now shows that supervised, carefully tailored exercise (such as pulmonary or cardiac rehabilitation) is safe and highly beneficial. It conditions your muscles to use oxygen more efficiently, meaning your heart doesn't have to work as hard during daily activities.
            </p>

            <h2>Safe Exercise Principles</h2>
            <ul>
              <li><strong>Listen to your body:</strong> This is the golden rule. If you feel dizzy, lightheaded, or experience chest pain, stop immediately and rest.</li>
              <li><strong>Don't push through the pain:</strong> "No pain, no gain" does not apply to PH. Exercise should feel like a mild to moderate exertion, never exhausting.</li>
              <li><strong>Avoid heavy lifting or straining:</strong> Do not do exercises that require you to bear down or hold your breath (Valsalva maneuver), such as heavy weightlifting, push-ups, or severe straining. This causes sudden, dangerous spikes in chest pressure.</li>
              <li><strong>Keep breathing:</strong> Always breathe continuously during exertion.</li>
              <li><strong>Avoid isometric exercises:</strong> Things like planks or holding a static position put too much strain on the heart. Focus on dynamic, continuous movements like walking, light cycling, or swimming.</li>
            </ul>

            <h2>Pacing and Energy Conservation</h2>
            <p>
              Daily chores count as physical activity. Learn to "pace" yourself to avoid exhaustion.
            </p>
            <ul>
              <li>Break large tasks into smaller, manageable chunks.</li>
              <li>Rest before you feel tired.</li>
              <li>Sit down to perform tasks like showering, getting dressed, or preparing food.</li>
              <li>Use a rolling cart to move items around the house instead of carrying them.</li>
            </ul>

            <h2>Rehabilitation Programs</h2>
            <p>
              Ask your doctor about a referral to a supervised pulmonary or cardiac rehabilitation program. These programs are run by specialised physiotherapists and nurses who will monitor your oxygen levels, heart rate, and blood pressure while you exercise, creating a safe, tailored plan for you to eventually continue at home.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
