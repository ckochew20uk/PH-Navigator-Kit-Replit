import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, Utensils, Activity, Plane, HeartHandshake, Wallet } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function LivingWellHub() {
  const sections = [
    {
      title: "Diet & Nutrition",
      desc: "Guidance on sodium restriction, fluid management, and eating well.",
      path: "/living-well/diet-nutrition",
      icon: <Utensils size={28} />,
      color: "border-t-destructive",
      iconColor: "text-destructive",
      iconBg: "bg-destructive/10"
    },
    {
      title: "Exercise & Physical Activity",
      desc: "Safe exercise principles, pacing, and cardiac rehabilitation.",
      path: "/living-well/exercise",
      icon: <Activity size={28} />,
      color: "border-t-primary",
      iconColor: "text-primary",
      iconBg: "bg-primary/10"
    },
    {
      title: "Travel & Oxygen",
      desc: "Logistics for flying, high altitudes, and travelling with oxygen.",
      path: "/living-well/travel-oxygen",
      icon: <Plane size={28} />,
      color: "border-t-secondary",
      iconColor: "text-secondary",
      iconBg: "bg-secondary/10"
    },
    {
      title: "Mental Wellbeing",
      desc: "Coping strategies, managing anxiety, and finding psychological support.",
      path: "/living-well/mental-wellbeing",
      icon: <HeartHandshake size={28} />,
      color: "border-t-accent",
      iconColor: "text-accent",
      iconBg: "bg-accent/10"
    },
    {
      title: "Financial & Practical Support",
      desc: "Navigating the NDIS, Centrelink, and travel assistance schemes (IPTAAS).",
      path: "/living-well/financial-support",
      icon: <Wallet size={28} />,
      color: "border-t-primary",
      iconColor: "text-primary",
      iconBg: "bg-primary/10"
    }
  ];

  return (
    <div className="w-full">
      <section className="bg-muted py-12 md:py-20 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Living Well with PH</h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8 max-w-3xl">
              Managing pulmonary hypertension involves more than just medication. Small lifestyle adjustments can significantly improve your symptoms and quality of life.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {sections.map((item, i) => (
              <Link key={i} href={item.path} className="block h-full">
                <Card className={`h-full hover:shadow-lg transition-shadow border-t-4 ${item.color} flex flex-col group`}>
                  <CardHeader>
                    <div className={`${item.iconBg} w-14 h-14 rounded-full flex items-center justify-center ${item.iconColor} mb-4 group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <CardTitle className="text-2xl font-serif text-primary">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-lg text-foreground/80 mb-6 flex-1">
                      {item.desc}
                    </p>
                    <div className="text-secondary font-bold flex items-center group-hover:text-primary transition-colors mt-auto">
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
