import React from 'react';
import { Link } from 'wouter';
import { easeOut, motion } from 'framer-motion';
import { ArrowRight, HeartPulse, ShieldCheck, Users, Activity, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-muted overflow-hidden py-16 md:py-24 lg:py-32">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight mb-6"
            >
              Navigating life with <br className="hidden md:block"/> pulmonary hypertension <br className="hidden md:block"/><span className="text-destructive italic">— together.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl leading-relaxed"
            >
              A calm, trusted guide for people living with a rare lung disease in Australia and New Zealand. You don't have to walk this path alone.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/recently-diagnosed">
                <Button size="lg" className="w-full sm:w-auto bg-destructive hover:bg-destructive/90 text-white text-lg h-14 px-8 rounded-full shadow-md">
                  I'm Newly Diagnosed
                </Button>
              </Link>
              <Link href="/living-well">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary/5 text-lg h-14 px-8 rounded-full">
                  Living with PH
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro / What is PH */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">What is Pulmonary Hypertension?</h2>
              <div className="prose prose-lg prose-p:text-foreground/80 prose-headings:text-primary max-w-none">
                <p>
                  Pulmonary hypertension (PH) is high blood pressure in the lungs. It is a rare, complex condition that affects the arteries in the lungs and the right side of the heart.
                </p>
                <p>
                  Unlike regular high blood pressure, you can't measure it with a cuff on your arm. Because the right side of the heart has to work harder to pump blood through narrowed lung arteries, people with PH often experience breathlessness, fatigue, and chest pain.
                </p>
                <p>
                  While PH is life-limiting and currently has no cure, treatments have advanced significantly. With specialist care, many people live meaningful, fulfilling lives for years after diagnosis.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/recently-diagnosed/what-is-ph">
                  <Button variant="link" className="text-secondary font-bold text-lg p-0 h-auto hover:text-primary group">
                    Learn more about PH <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-muted rounded-2xl p-8 md:p-12 relative">
                <div className="absolute top-0 right-0 p-6 text-accent opacity-50">
                  <ShieldCheck size={120} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 relative z-10">New to PH Navigator?</h3>
                <ul className="space-y-4 relative z-10">
                  <li className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                    <div className="bg-accent/20 p-3 rounded-full text-primary shrink-0">
                      <Activity size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-primary">Understand the condition</h4>
                      <p className="text-foreground/70">Clear, medically-accurate explanations.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                    <div className="bg-accent/20 p-3 rounded-full text-primary shrink-0">
                      <HeartPulse size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-primary">Prepare for appointments</h4>
                      <p className="text-foreground/70">Printable question lists and test guides.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                    <div className="bg-accent/20 p-3 rounded-full text-primary shrink-0">
                      <Users size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-primary">Hear from others</h4>
                      <p className="text-foreground/70">Stories from Australians living with PH.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Navigation Cards */}
      <section className="py-20 bg-muted/30 border-y border-border/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Explore PH Navigator</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">Find the support, information, and resources you need for your stage of the journey.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {[
              { title: "Recently Diagnosed", desc: "Understanding PH, the diagnostic journey, and what to ask your doctor.", path: "/recently-diagnosed", color: "border-t-destructive" },
              { title: "Treatments & Facts", desc: "A guide to PH medications, test results, and clinical information.", path: "/treatments", color: "border-t-primary" },
              { title: "Living Well", desc: "Practical advice on diet, exercise, travel, and mental wellbeing.", path: "/living-well", color: "border-t-secondary" },
              { title: "Community Voices", desc: "Stories and experiences from Australians navigating life with PH.", path: "/community-voices", color: "border-t-accent" },
              { title: "For Carers", desc: "Support and guidance for those caring for someone with PH.", path: "/caring-for-someone", color: "border-t-muted-foreground" },
              { title: "Find a Specialist", desc: "Directory of PH specialist centres across Australia.", path: "/find-specialist", color: "border-t-primary" },
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Link href={item.path} className="block h-full">
                  <Card className={`h-full hover:shadow-md transition-shadow cursor-pointer border-t-4 ${item.color} flex flex-col`}>
                    <CardHeader>
                      <CardTitle className="text-2xl font-serif text-primary">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-lg text-foreground/80">{item.desc}</p>
                    </CardContent>
                    <CardFooter>
                      <span className="text-secondary font-semibold flex items-center group-hover:text-primary transition-colors">
                        Explore <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold mb-8 text-primary-foreground/90">A dedicated partnership for patient care</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="max-w-[300px]">
              <p className="font-serif text-2xl font-bold mb-2">PHA Australia</p>
              <p className="text-sm text-primary-foreground/70">Pulmonary Hypertension Association Australia</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-primary-foreground/20"></div>
            <div className="max-w-[300px]">
              <p className="font-serif text-2xl font-bold mb-2">PHSANZ</p>
              <p className="text-sm text-primary-foreground/70">Pulmonary Hypertension Society of Australia and New Zealand</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
