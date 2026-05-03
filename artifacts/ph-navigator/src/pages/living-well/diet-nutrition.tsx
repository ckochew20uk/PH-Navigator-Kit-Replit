import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DietNutrition() {
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Diet & Nutrition</h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              What you eat and drink plays a crucial role in managing PH symptoms, particularly regarding fluid retention.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-p:text-foreground/90 prose-headings:text-primary max-w-none">
            <h2>The Importance of Sodium (Salt) Restriction</h2>
            <p>
              When the right side of the heart is under strain, the body tends to hold onto sodium and water. This fluid retention (edema) causes swelling in the legs, ankles, and abdomen, and puts extra pressure on your heart and lungs, worsening breathlessness.
            </p>
            <p>
              <strong>Most PH specialists recommend limiting sodium intake to less than 2,000 mg (about 1 teaspoon of salt) per day.</strong>
            </p>
            
            <div className="bg-card border border-border p-6 rounded-xl shadow-sm my-8">
              <h3 className="text-xl font-bold mt-0 mb-4 text-primary">Tips for reducing sodium:</h3>
              <ul className="mb-0 space-y-2">
                <li>Remove the salt shaker from the table.</li>
                <li>Avoid highly processed foods, canned soups, frozen meals, and fast food (these are the biggest hidden sources of sodium).</li>
                <li>Read nutrition labels carefully. Look for "low sodium" or "no added salt".</li>
                <li>Use herbs, spices, lemon juice, and vinegar to flavour food instead of salt.</li>
                <li>Avoid salt substitutes that contain potassium chloride without checking with your doctor first, as some PH medications can affect potassium levels.</li>
              </ul>
            </div>

            <h2>Fluid Management</h2>
            <p>
              In addition to restricting salt, your doctor may ask you to limit the amount of fluid you consume each day, usually to about 1.5 to 2 litres. This includes water, tea, coffee, juice, soup, and foods that are mostly liquid (like jelly or ice cream).
            </p>
            <p>
              <strong>Daily Weighing:</strong> Weigh yourself every morning at the same time, in similar clothing, after going to the toilet and before eating breakfast. A sudden weight gain (e.g., 1.5-2kg in 1-2 days) is often an early sign of fluid retention and should be reported to your PH nurse or doctor immediately.
            </p>

            <h2>Dietary Considerations for Warfarin</h2>
            <p>
              If you take Warfarin (a blood thinner) for CTEPH or another condition, you need to be mindful of your Vitamin K intake, as Vitamin K helps blood clot. You don't need to avoid Vitamin K completely, but you must keep your intake <strong>consistent</strong> day-to-day. Sudden changes in how much spinach, kale, broccoli, or Brussels sprouts you eat can affect your INR levels.
            </p>

            <h2>General Healthy Eating</h2>
            <p>
              Maintaining a healthy weight reduces the workload on your heart. A balanced diet rich in vegetables, fruits, whole grains, and lean proteins is recommended. If you experience fatigue or nausea that makes eating difficult, try having smaller, more frequent meals throughout the day rather than three large ones.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
