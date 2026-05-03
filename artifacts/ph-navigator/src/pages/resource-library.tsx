import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import { FileText, Download, Search, BookOpen, Filter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

type Category =
  | 'All'
  | 'Newly Diagnosed'
  | 'Treatments'
  | 'Living Well'
  | 'For Carers'
  | 'For Healthcare Professionals';

interface Resource {
  id: string;
  title: string;
  description: string;
  category: Exclude<Category, 'All'>;
  pages: number;
  featured?: boolean;
  updated: string;
}

const resources: Resource[] = [
  {
    id: 'what-is-ph',
    title: 'What is Pulmonary Hypertension? A Patient Guide',
    description:
      'A plain-language introduction to PH — what it is, how it affects your body, the different WHO groups, and what your diagnosis means for daily life.',
    category: 'Newly Diagnosed',
    pages: 8,
    featured: true,
    updated: 'March 2025',
  },
  {
    id: 'just-diagnosed',
    title: "You've Just Been Diagnosed — What Now?",
    description:
      "A calm, step-by-step guide for the days immediately after a PH diagnosis. Covers who to tell, what to expect at your next appointments, and how to find support.",
    category: 'Newly Diagnosed',
    pages: 6,
    featured: true,
    updated: 'February 2025',
  },
  {
    id: 'questions-for-doctor',
    title: 'Questions to Ask Your Specialist',
    description:
      'A printable question list for your first and ongoing specialist appointments, organised by stage of care.',
    category: 'Newly Diagnosed',
    pages: 4,
    updated: 'January 2025',
  },
  {
    id: 'understanding-rhc',
    title: 'Understanding Your Right Heart Catheterisation',
    description:
      'What to expect before, during, and after a right heart catheterisation — including how to read your results (mPAP, PCWP, PVR) and what they mean.',
    category: 'Newly Diagnosed',
    pages: 5,
    updated: 'April 2025',
  },
  {
    id: 'ph-groups-explained',
    title: 'The Five WHO Groups of PH — Explained',
    description:
      'Breaks down each WHO classification group with its causes, distinguishing features, and implications for treatment choice.',
    category: 'Newly Diagnosed',
    pages: 7,
    updated: 'December 2024',
  },
  {
    id: 'medications-overview',
    title: 'PH Medications: An Overview',
    description:
      "A clear summary of the four main drug classes used in PH — ERAs, PDE5 inhibitors, prostacyclins, and sGC stimulators — how they work and how they're taken.",
    category: 'Treatments',
    pages: 10,
    featured: true,
    updated: 'March 2025',
  },
  {
    id: 'oxygen-therapy-guide',
    title: 'Living with Supplemental Oxygen',
    description:
      'Everything you need to know about home oxygen: equipment types, safety, travelling with oxygen concentrators, and connecting with your oxygen supplier.',
    category: 'Treatments',
    pages: 9,
    updated: 'January 2025',
  },
  {
    id: 'reading-test-results',
    title: 'Understanding Your Test Results',
    description:
      "Helps patients interpret the most common PH tests — echocardiogram, 6-minute walk test, NT-proBNP, and lung function — with clear explanations of normal ranges and what changes may mean.",
    category: 'Treatments',
    pages: 6,
    updated: 'February 2025',
  },
  {
    id: 'warfarin-diet',
    title: 'Anticoagulation and Diet: What to Know if You Take Warfarin',
    description:
      'Practical guidance on managing vitamin K in your diet when anticoagulated, including food lists and how to manage fluctuating INR results.',
    category: 'Treatments',
    pages: 4,
    updated: 'November 2024',
  },
  {
    id: 'exercise-rehab',
    title: 'Exercise Rehabilitation in PH',
    description:
      'Evidence-based guidance on safe physical activity for PH patients — why it helps, how to start, pacing techniques, what to avoid, and cardiac rehabilitation programs.',
    category: 'Living Well',
    pages: 8,
    featured: true,
    updated: 'April 2025',
  },
  {
    id: 'travel-oxygen',
    title: 'Flying with PH and Oxygen: A Practical Guide',
    description:
      'Step-by-step guidance for air travel with pulmonary hypertension — pre-flight assessments, HAST testing, airline documentation, portable concentrator approvals, and destination planning.',
    category: 'Living Well',
    pages: 11,
    updated: 'March 2025',
  },
  {
    id: 'diet-nutrition',
    title: 'Eating Well with PH',
    description:
      'Dietary recommendations for PH patients including sodium restriction, fluid management, heart-healthy eating, and managing nutrition on complex medication regimens.',
    category: 'Living Well',
    pages: 7,
    updated: 'January 2025',
  },
  {
    id: 'mental-wellbeing',
    title: 'Your Mental Wellbeing Matters: Living with PH',
    description:
      'Addresses the psychological impact of PH — anxiety, depression, grief — and offers practical coping strategies, support options, and guidance on when to seek professional help.',
    category: 'Living Well',
    pages: 9,
    updated: 'February 2025',
  },
  {
    id: 'financial-support',
    title: 'Navigating Financial Support with PH',
    description:
      'An Australian guide to financial assistance options including NDIS, Centrelink DSP, PBS costs, IPTAAS for rural patients, and employment considerations.',
    category: 'Living Well',
    pages: 10,
    updated: 'April 2025',
  },
  {
    id: 'energy-conservation',
    title: 'Energy Conservation Techniques',
    description:
      'Practical strategies for managing limited energy through pacing, prioritising, positioning, and planning — helping you do more of what matters most.',
    category: 'Living Well',
    pages: 5,
    updated: 'December 2024',
  },
  {
    id: 'carers-guide',
    title: 'A Guide for Carers of People with PH',
    description:
      'Everything a carer needs to know — the practical realities of supporting someone with PH, coordinating care, managing medications, and recognising signs of deterioration.',
    category: 'For Carers',
    pages: 12,
    featured: true,
    updated: 'March 2025',
  },
  {
    id: 'carer-wellbeing',
    title: 'Looking After Yourself as a Carer',
    description:
      "A compassionate guide to preventing carer burnout — recognising the signs, finding respite, and maintaining your own physical and mental health alongside your caring role.",
    category: 'For Carers',
    pages: 6,
    updated: 'February 2025',
  },
  {
    id: 'advance-care-planning',
    title: 'Advance Care Planning and Legal Preparations',
    description:
      "An introduction to advance care directives, enduring powers of attorney, and other legal preparations relevant to PH patients and their families.",
    category: 'For Carers',
    pages: 8,
    updated: 'January 2025',
  },
  {
    id: 'talking-to-children',
    title: "Talking to Children About a Parent's PH Diagnosis",
    description:
      "Age-appropriate guidance on how to explain pulmonary hypertension to children, answer their questions honestly, and maintain family connection through a difficult diagnosis.",
    category: 'For Carers',
    pages: 5,
    updated: 'November 2024',
  },
  {
    id: 'gp-referral-guide',
    title: 'PH Referral Criteria for General Practitioners',
    description:
      'A concise clinical summary of when to suspect PH, the appropriate referral pathway to a specialist centre, and what investigations to order before referral.',
    category: 'For Healthcare Professionals',
    pages: 4,
    updated: 'April 2025',
  },
  {
    id: 'diagnostic-algorithm',
    title: 'Diagnostic Algorithm: Investigating Suspected PH',
    description:
      'A step-by-step clinical algorithm for investigating suspected pulmonary hypertension in adults, consistent with ESC/ERS 2022 guidelines.',
    category: 'For Healthcare Professionals',
    pages: 3,
    updated: 'March 2025',
  },
  {
    id: 'patient-handout-ph',
    title: 'Patient Information Handout: Pulmonary Hypertension',
    description:
      'A printable one-page summary of PH suitable for giving to newly diagnosed patients at their first specialist appointment.',
    category: 'For Healthcare Professionals',
    pages: 2,
    updated: 'February 2025',
  },
];

const categories: Category[] = [
  'All',
  'Newly Diagnosed',
  'Treatments',
  'Living Well',
  'For Carers',
  'For Healthcare Professionals',
];

const categoryColours: Record<Exclude<Category, 'All'>, string> = {
  'Newly Diagnosed': 'bg-[#E8735A]/15 text-[#C45A43] border-[#E8735A]/30',
  'Treatments': 'bg-[#1B5FAF]/10 text-[#1B5FAF] border-[#1B5FAF]/20',
  'Living Well': 'bg-[#3AADA8]/15 text-[#2D8A86] border-[#3AADA8]/30',
  'For Carers': 'bg-[#7EB8D4]/20 text-[#4A8FAD] border-[#7EB8D4]/40',
  'For Healthcare Professionals': 'bg-[#1C3347]/10 text-[#1C3347] border-[#1C3347]/20',
};

const filterButtonBase =
  'px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer whitespace-nowrap';

export default function ResourceLibrary() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = useMemo(() => {
    return resources.filter((r) => {
      const matchesCategory = activeCategory === 'All' || r.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featured = resources.filter((r) => r.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.07 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-muted py-14 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-accent/20 blur-3xl pointer-events-none -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-secondary/10 blur-3xl pointer-events-none -ml-12 -mb-12" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 text-secondary font-semibold text-sm mb-4">
              <BookOpen className="h-4 w-4" />
              Patient Resources
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight mb-4">
              Resource Library
            </h1>
            <p className="text-xl text-foreground/75 leading-relaxed">
              Downloadable fact sheets, guides, and clinical summaries — all reviewed by the PH Navigator Medical Advisory Panel and written in plain language for patients, carers, and clinicians.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-12 border-b border-border/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">Most Downloaded</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {featured.map((resource) => (
              <motion.div key={resource.id} variants={itemVariants}>
                <FeaturedCard resource={resource} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Full Library */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <h2 className="text-2xl font-serif font-bold text-primary">All Resources</h2>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
              <Input
                type="search"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 rounded-full border-border focus-visible:ring-primary text-base"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 flex-wrap mb-8">
            <Filter className="h-4 w-4 text-foreground/50 shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`${filterButtonBase} ${
                  activeCategory === cat
                    ? 'bg-primary text-white border-primary shadow-sm'
                    : 'bg-transparent text-foreground/70 border-border hover:border-primary/40 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results Grid */}
          <AnimatePresence mode="wait">
            {filteredResources.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16 text-foreground/50"
              >
                <FileText className="h-12 w-12 mx-auto mb-4 text-foreground/20" />
                <p className="text-lg font-medium">No resources match your search.</p>
                <p className="text-base mt-1">Try a different keyword or category.</p>
              </motion.div>
            ) : (
              <motion.div
                key={`${activeCategory}-${searchQuery}`}
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
              >
                {filteredResources.map((resource) => (
                  <motion.div key={resource.id} variants={itemVariants}>
                    <ResourceCard resource={resource} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Advisory disclaimer */}
          <div className="mt-12 rounded-xl border border-border bg-muted/50 p-6 flex gap-4 items-start">
            <div className="shrink-0 w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-secondary" stroke="currentColor" strokeWidth={2}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-primary text-base mb-1">Reviewed by the Medical Advisory Panel</p>
              <p className="text-foreground/70 text-base leading-relaxed">
                All resources in this library are reviewed and approved by the PH Navigator Medical Advisory Panel and updated regularly. They are intended as general information and do not replace advice from your treating team. Always discuss any changes to your care with your PH specialist.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeaturedCard({ resource }: { resource: Resource }) {
  return (
    <Card className="border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200 bg-card h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
            <FileText className="h-5 w-5 text-destructive" />
          </div>
          <Badge variant="outline" className={`text-xs font-semibold border ${categoryColours[resource.category]}`}>
            {resource.category}
          </Badge>
        </div>
        <CardTitle className="text-base font-bold text-primary leading-snug mt-3">{resource.title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-4 flex-1">
        <p className="text-sm text-foreground/70 leading-relaxed line-clamp-3">{resource.description}</p>
      </CardContent>
      <CardFooter className="pt-0 flex items-center justify-between">
        <span className="text-xs text-foreground/50">{resource.pages} pages · Updated {resource.updated}</span>
        <DownloadButton />
      </CardFooter>
    </Card>
  );
}

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Card className="border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200 bg-card h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-md bg-muted flex items-center justify-center shrink-0">
            <FileText className="h-4 w-4 text-primary/60" />
          </div>
          <Badge variant="outline" className={`text-xs font-semibold border ${categoryColours[resource.category]}`}>
            {resource.category}
          </Badge>
        </div>
        <CardTitle className="text-base font-bold text-primary leading-snug">{resource.title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-4 flex-1">
        <CardDescription className="text-sm leading-relaxed line-clamp-3 text-foreground/70">
          {resource.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-0 flex items-center justify-between border-t border-border/40 mt-auto pt-3">
        <span className="text-xs text-foreground/45">{resource.pages} pages · {resource.updated}</span>
        <DownloadButton />
      </CardFooter>
    </Card>
  );
}

function DownloadButton() {
  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={() => {
        alert('In the published site, this will download the PDF fact sheet. Content is currently being finalised by the Medical Advisory Panel.');
      }}
      className="h-8 px-3 text-secondary hover:text-secondary hover:bg-secondary/10 font-semibold text-sm gap-1.5"
    >
      <Download className="h-3.5 w-3.5" />
      PDF
    </Button>
  );
}
