import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, Plane, Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TravelOxygen() {
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Travel & Oxygen Logistics</h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              Living with PH doesn't mean you can't travel, but it does require careful planning, especially when flying or visiting high altitudes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-p:text-foreground/90 prose-headings:text-primary max-w-none">
            
            <div className="bg-secondary/10 border border-secondary/30 p-6 rounded-xl mb-10 flex gap-4 items-start">
              <Plane className="h-8 w-8 text-secondary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-xl mt-0 mb-2 text-primary">The Golden Rule of PH Travel</h3>
                <p className="m-0 text-foreground/90">
                  Always consult your PH specialist team <strong>before</strong> booking any flights or trips to high-altitude destinations. Never assume you are fit to fly without medical clearance.
                </p>
              </div>
            </div>

            <h2>Flying with PH</h2>
            <p>
              Commercial aircraft cabins are pressurised, but not to sea level. The air pressure inside the cabin is typically equivalent to an altitude of 1,500 to 2,500 metres (5,000 to 8,000 feet). At this pressure, there is less oxygen in the air, which can cause your blood oxygen levels to drop. For someone with PH, this drop in oxygen can cause the pulmonary arteries to constrict further, dangerously increasing the pressure in the right side of the heart.
            </p>

            <h3>The Hypoxia Altitude Simulation Test (HAST)</h3>
            <p>
              If your doctor is unsure how you will cope with a flight, they may arrange a HAST. During this test, you breathe a mixture of air that simulates cabin pressure to see how your body reacts. The results will tell your doctor if you need in-flight supplemental oxygen.
            </p>

            <h2>Travelling with Oxygen</h2>
            <p>
              If you require oxygen for a flight, the planning process must start weeks or months in advance.
            </p>
            <ul>
              <li><strong>Airline Policies:</strong> Every airline has its own policy regarding medical oxygen. Some require you to use their oxygen (and will charge a fee), while others allow you to bring an FAA-approved Portable Oxygen Concentrator (POC).</li>
              <li><strong>Medical Forms:</strong> You will almost certainly need a "Fitness to Fly" or medical clearance form filled out by your specialist.</li>
              <li><strong>Battery Requirements:</strong> If bringing your own POC, airlines typically require you to carry enough battery power for 150% of the flight time (e.g., for a 4-hour flight, you need 6 hours of battery).</li>
              <li><strong>Destination Oxygen:</strong> You must arrange for oxygen supply at your destination. Your current oxygen provider can often help coordinate a rental at your holiday location.</li>
            </ul>

            <div className="flex gap-4 items-start my-8 bg-muted p-6 rounded-xl">
              <Mountain className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mt-0 mb-2 text-primary">Beware of High Altitudes</h3>
                <p className="m-0 text-foreground/90">
                  It's not just flying you need to consider. Travelling by car or train to high-altitude destinations can be equally dangerous. At higher elevations, the air is thinner. If you live at sea level and travel to a high-altitude location, you may experience severe worsening of your PH symptoms. Always check the elevation of your holiday destination.
                </p>
              </div>
            </div>

            <h2>General Travel Tips</h2>
            <ul>
              <li><strong>Medications:</strong> Always pack all your medications in your carry-on luggage, never in checked baggage. Bring more than you need for the trip in case of delays.</li>
              <li><strong>Medical Summary:</strong> Carry a letter from your specialist summarising your condition, your current medications, your specialist's contact details, and emergency instructions.</li>
              <li><strong>Travel Insurance:</strong> Obtain comprehensive travel insurance that explicitly covers pre-existing medical conditions (including pulmonary hypertension). This can be difficult to find and expensive, but it is absolutely essential.</li>
              <li><strong>Hydration and Movement:</strong> Stay hydrated during the flight. Do gentle leg exercises in your seat to reduce the risk of deep vein thrombosis (DVT). Discuss with your doctor if you need to wear compression stockings.</li>
            </ul>

          </div>
        </div>
      </section>
    </div>
  );
}
