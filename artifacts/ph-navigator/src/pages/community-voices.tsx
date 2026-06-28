import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Quote } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function CommunityVoices() {
  const stories = [
    {
      id: 1,
      name: 'Sarah',
      age: 34,
      diagnosis: 'Group 1 PAH (Idiopathic)',
      timeSince: 'Diagnosed 4 years ago',
      quote: "When I was first diagnosed, I felt like my world had ended. I couldn't walk to the mailbox. Today, with the right medication, I'm back at work part-time and keeping up with my toddler.",
      color: "bg-destructive"
    },
    {
      id: 2,
      name: 'David',
      age: 62,
      diagnosis: 'Group 4 CTEPH',
      timeSince: 'Diagnosed 2 years ago',
      quote: "The PEA surgery was daunting, but it gave me my life back. Before, I was on oxygen 24/7. Now, I'm back to gardening and playing golf. Don't give up hope.",
      color: "bg-primary"
    },
    {
      id: 3,
      name: 'Elena',
      age: 48,
      diagnosis: 'Group 1 PAH (Associated with Scleroderma)',
      timeSince: 'Diagnosed 8 years ago',
      quote: "Learning to pace myself was the hardest part. I had to redefine what a 'productive day' meant. Finding a community who understood exactly how I felt was a turning point.",
      color: "bg-secondary"
    },
    {
      id: 4,
      name: 'Michael',
      age: 55,
      diagnosis: 'Group 3 PH (Associated with COPD)',
      timeSince: 'Diagnosed 1 year ago',
      quote: "The diagnostic journey took over a year of tests and referrals. Once I finally had a name for it and a treatment plan, the anxiety settled. Knowledge truly is power.",
      color: "bg-accent"
    }
  ];

  return (
    <div className="w-full">
      <section className="bg-muted py-12 md:py-20 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Community Voices</h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl">
              Hear from Australians navigating life with pulmonary hypertension. Every journey is unique, but you are not alone on this path.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="bg-accent/10 border border-accent/20 p-4 rounded-lg mb-12 text-sm text-foreground/70 text-center">
            All stories shared with permission. PHA Australia vets and approves all Community Voices content to ensure a safe, supportive environment.
            <span className="block mt-2">
              See the <Link href="/governance-checklist" className="font-semibold text-primary hover:underline">Phase 1 governance checklist</Link> for consent, moderation, withdrawal, retention, and access safeguards for submitted personal or health information.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((story) => (
              <Card key={story.id} className="h-full hover:shadow-lg transition-shadow flex flex-col group border-t-4 border-t-transparent hover:border-t-primary">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className={`${story.color} w-16 h-16 rounded-full flex items-center justify-center text-white font-serif text-2xl font-bold shrink-0`}>
                      {story.name.charAt(0)}
                    </div>
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-primary">{story.name}, {story.age}</h2>
                      <p className="text-sm text-foreground/70 font-semibold">{story.diagnosis}</p>
                      <p className="text-sm text-foreground/60">{story.timeSince}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="relative mb-6 flex-1">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-muted-foreground/20 rotate-180" />
                    <p className="text-lg text-foreground/80 italic relative z-10 pl-4 pt-2">
                      "{story.quote}"
                    </p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-border/50">
                    <Button variant="ghost" className="w-full justify-between text-secondary group-hover:text-primary">
                      Read full story <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Share Your Story</h2>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Your experience could be the exact words someone else needs to hear today. If you're interested in sharing your PH journey with our community, we would love to hear from you.
            </p>
            <Link href="/about/partnership">
              <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-white rounded-full">
                Get in Touch
              </Button>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
