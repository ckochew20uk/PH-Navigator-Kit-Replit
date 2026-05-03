import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, UserCheck, Shield, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CaringForSomeoneHub() {
  const sections = [
    {
      title: "Understanding the Carer's Role",
      desc: "Navigating medications, appointments, emergencies, and medical authority.",
      path: "/caring-for-someone/carers-role",
      icon: <UserCheck size={28} />,
      color: "border-t-primary",
      iconColor: "text-primary",
      iconBg: "bg-primary/10"
    },
    {
      title: "Protecting Your Wellbeing",
      desc: "Recognising burnout, finding respite, and maintaining your own health.",
      path: "/caring-for-someone/carer-wellbeing",
      icon: <Shield size={28} />,
      color: "border-t-destructive",
      iconColor: "text-destructive",
      iconBg: "bg-destructive/10"
    },
    {
      title: "Carer Support Networks",
      desc: "Connecting with Carer Gateway, peer support, and local organisations.",
      path: "/caring-for-someone/carer-support",
      icon: <Users size={28} />,
      color: "border-t-secondary",
      iconColor: "text-secondary",
      iconBg: "bg-secondary/10"
    }
  ];

  return (
    <div className="w-full">
      <section className="bg-muted py-12 md:py-20 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Caring for Someone with PH</h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8 max-w-3xl">
              When a loved one is diagnosed with pulmonary hypertension, the whole family is affected. As a carer, your role is vital, but it is also demanding. You need support too.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
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

          <div className="mt-16 bg-white p-8 rounded-xl border border-border shadow-sm text-center">
            <h3 className="text-xl font-bold text-primary mb-4">A message to carers</h3>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto italic">
              "You cannot pour from an empty cup. Taking time for yourself is not selfish—it is absolutely essential for your survival and for the quality of care you provide."
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
