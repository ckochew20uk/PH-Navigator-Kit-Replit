import React from "react";
import { Heart, Wind, Activity, Mail, ExternalLink, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const colors = {
  deepPlum: "#4A3268",
  coralRose: "#D96B55",
  seafoamTeal: "#38AFA3",
  softLavender: "#A88FCA",
  warmCream: "#FAF7F2",
  deepCharcoal: "#2C2438",
  white: "#FFFFFF",
};

const LogoMark = ({ className = "" }: { className?: string }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M15 10C10.5817 10 7 13.5817 7 18C7 24 15 32 15 32C15 32 23 24 23 18C23 13.5817 19.4183 10 15 10Z" fill={colors.deepPlum} fillOpacity="0.9"/>
    <path d="M25 10C20.5817 10 17 13.5817 17 18C17 24 25 32 25 32C25 32 33 24 33 18C33 13.5817 29.4183 10 25 10Z" fill={colors.seafoamTeal} fillOpacity="0.9"/>
    <circle cx="20" cy="17" r="5" fill={colors.coralRose}/>
    <circle cx="20" cy="17" r="3" fill={colors.white} stroke={colors.coralRose} strokeWidth="1"/>
  </svg>
);

const Logo = () => (
  <div className="flex items-center gap-2">
    <LogoMark />
    <div className="flex items-baseline gap-1 text-2xl">
      <span className="font-bold text-[#4A3268]" style={{ fontFamily: "'Playfair Display', serif" }}>PH</span>
      <span className="font-semibold text-[#38AFA3]" style={{ fontFamily: "'Nunito', sans-serif" }}>Navigator</span>
    </div>
  </div>
);

export function BrandInAction() {
  return (
    <div className="min-h-screen text-[#2C2438]" style={{ backgroundColor: colors.warmCream, fontFamily: "'Nunito', sans-serif" }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap');
          
          .font-heading {
            font-family: 'Playfair Display', serif;
          }
          
          .font-body {
            font-family: 'Nunito', sans-serif;
          }

          .hero-gradient {
            background: linear-gradient(135deg, #FAF7F2 0%, #EAE0F5 100%);
          }
        `}
      </style>

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-[#A88FCA]/30" style={{ backgroundColor: colors.warmCream }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-6 font-semibold text-[#4A3268]">
            <a href="#" className="hover:text-[#38AFA3] transition-colors">About PH</a>
            <a href="#" className="hover:text-[#38AFA3] transition-colors">Resources</a>
            <a href="#" className="hover:text-[#38AFA3] transition-colors">Support Groups</a>
            <a href="#" className="hover:text-[#38AFA3] transition-colors">News</a>
            <a href="#" className="hover:text-[#38AFA3] transition-colors">For Healthcare Providers</a>
          </nav>
          <Button style={{ backgroundColor: colors.coralRose, color: colors.white }} className="hover:opacity-90 font-bold rounded-full px-6">
            Get Support
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient py-24 sm:py-32">
        <div className="absolute inset-0 z-0 opacity-[0.03] flex items-center justify-end overflow-hidden pointer-events-none">
          <LogoMark className="w-[800px] h-[800px] -mr-48" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start max-w-3xl">
          <h1 className="font-heading text-5xl sm:text-6xl font-bold leading-tight mb-6 text-[#4A3268]">
            You do not have to navigate pulmonary hypertension alone.
          </h1>
          <p className="text-xl mb-10 text-[#2C2438]/80 max-w-2xl leading-relaxed">
            PH Navigator is here to guide you with trusted information, resources, and connections to support groups across Australia. We are your compass on this journey.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button style={{ backgroundColor: colors.coralRose, color: colors.white }} className="hover:opacity-90 text-lg px-8 py-6 rounded-full font-bold">
              Explore Resources
            </Button>
            <Button variant="outline" style={{ borderColor: colors.deepPlum, color: colors.deepPlum }} className="hover:bg-[#4A3268]/5 text-lg px-8 py-6 rounded-full font-bold bg-transparent">
              Find a Support Group
            </Button>
          </div>
        </div>
      </section>

      {/* Explainer Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-t-4 shadow-sm" style={{ borderTopColor: colors.seafoamTeal }}>
            <CardHeader>
              <Heart className="w-8 h-8 mb-4" style={{ color: colors.coralRose }} />
              <CardTitle className="font-heading text-2xl text-[#4A3268]">What is PH?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#2C2438]/80 leading-relaxed">
                Pulmonary hypertension (PH) is a rare lung disease that affects the blood vessels in the lungs and the right side of the heart.
              </p>
            </CardContent>
          </Card>
          <Card className="border-t-4 shadow-sm" style={{ borderTopColor: colors.seafoamTeal }}>
            <CardHeader>
              <Wind className="w-8 h-8 mb-4" style={{ color: colors.seafoamTeal }} />
              <CardTitle className="font-heading text-2xl text-[#4A3268]">Types of PH</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#2C2438]/80 leading-relaxed">
                There are five main groups of pulmonary hypertension, each with different causes and treatment approaches.
              </p>
            </CardContent>
          </Card>
          <Card className="border-t-4 shadow-sm" style={{ borderTopColor: colors.seafoamTeal }}>
            <CardHeader>
              <Activity className="w-8 h-8 mb-4" style={{ color: colors.softLavender }} />
              <CardTitle className="font-heading text-2xl text-[#4A3268]">Life with PH</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#2C2438]/80 leading-relaxed">
                Living with PH presents unique challenges, but with the right care team and support, you can manage your symptoms effectively.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold text-[#4A3268] mb-4">Resources for your journey</h2>
          <p className="text-lg text-[#2C2438]/70 max-w-2xl mx-auto">Expert-reviewed information to help you understand your diagnosis, treatments, and daily management.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { tag: "Newly Diagnosed", title: "Newly Diagnosed Guide", excerpt: "A comprehensive handbook covering the basics of pulmonary hypertension, what to expect, and questions for your doctor." },
            { tag: "Treatment", title: "Managing Your Medications", excerpt: "Learn about the different types of PH therapies, how they work, and strategies for managing side effects." },
            { tag: "Communication", title: "Talking to Your Care Team", excerpt: "Tips for effectively communicating your symptoms and concerns during specialist appointments." }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#A88FCA]/20 flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider mb-4 inline-block" style={{ color: colors.seafoamTeal }}>
                  {item.tag}
                </span>
                <h3 className="font-heading text-2xl font-bold mb-3 text-[#4A3268]">{item.title}</h3>
                <p className="text-[#2C2438]/80 mb-6 flex-grow">{item.excerpt}</p>
                <a href="#" className="font-bold flex items-center gap-1 hover:underline mt-auto" style={{ color: colors.coralRose }}>
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 mt-8" style={{ backgroundColor: `${colors.softLavender}20` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold text-[#4A3268] mb-6">Find others who understand</h2>
              <p className="text-lg text-[#2C2438]/80 mb-6">
                Connecting with people who share similar experiences can be profoundly validating. Our network of patient support groups offers a safe space to share stories, advice, and encouragement.
              </p>
              <ul className="space-y-3 mb-8 text-[#2C2438]/80">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.coralRose }}></div>
                  In-person meetings across major cities
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.coralRose }}></div>
                  Virtual support for regional patients
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.coralRose }}></div>
                  Specialised carer and family networks
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#A88FCA]/20">
              <h3 className="font-heading text-2xl font-bold text-[#4A3268] mb-2">Find a Support Group</h3>
              <p className="text-[#2C2438]/70 mb-6">Enter your postcode to find local and virtual meetings near you.</p>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="postcode" className="sr-only">Postcode</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input id="postcode" placeholder="e.g. 2000" className="pl-10 py-6 text-lg rounded-xl border-[#A88FCA]/40 focus-visible:ring-[#38AFA3]" />
                  </div>
                </div>
                <Button className="w-full py-6 text-lg rounded-xl font-bold" style={{ backgroundColor: colors.deepPlum, color: colors.white }}>
                  Search Groups
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 text-center" style={{ backgroundColor: colors.deepPlum }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#A88FCA]/30">
            <div className="pt-6 md:pt-0">
              <p className="font-heading text-3xl font-bold text-white mb-2">6,000+</p>
              <p className="text-[#FAF7F2]/80">Australians living with PH</p>
            </div>
            <div className="pt-6 md:pt-0">
              <p className="font-heading text-3xl font-bold text-white mb-2">20+</p>
              <p className="text-[#FAF7F2]/80">Support Groups Nationwide</p>
            </div>
            <div className="pt-6 md:pt-0">
              <p className="font-heading text-3xl font-bold text-white mb-2">Trusted</p>
              <p className="text-[#FAF7F2]/80">by patients since 2015</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-16 pb-8" style={{ backgroundColor: colors.deepCharcoal, color: colors.warmCream }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="mb-6 opacity-90 brightness-0 invert">
                <Logo />
              </div>
              <p className="text-[#FAF7F2]/70 mb-6 max-w-sm">
                Providing guidance, resources, and a supportive community for Australians affected by pulmonary hypertension.
              </p>
              <div className="flex items-center gap-4 text-[#FAF7F2]/80">
                <a href="#" className="hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                  <span className="sr-only">Email us</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3 text-[#FAF7F2]/70">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About PH</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Find a Group</a></li>
                <li><a href="#" className="hover:text-white transition-colors">News & Events</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-white">Resources</h4>
              <ul className="space-y-3 text-[#FAF7F2]/70">
                <li><a href="#" className="hover:text-white transition-colors">Newly Diagnosed</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Living with PH</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carer Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Clinical Trials</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-white">Partners</h4>
              <ul className="space-y-3 text-[#FAF7F2]/70">
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
                    PHSANZ <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
                    PHA Australia <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#FAF7F2]/50">
            <p>
              A partnership initiative between the Pulmonary Hypertension Society of Australia and New Zealand (PHSANZ) and Pulmonary Hypertension Association Australia (PHAA).
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
