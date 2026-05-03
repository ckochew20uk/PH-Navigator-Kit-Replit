import React from 'react';
import { Check, X } from 'lucide-react';

export function BrandGuidelines() {
  return (
    <div className="brand-guidelines min-h-screen p-8 md:p-16 lg:p-24 max-w-5xl mx-auto">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

        .brand-guidelines {
          --color-plum: #4A3268;
          --color-coral: #D96B55;
          --color-lavender: #A88FCA;
          --color-lavender-light: #F0EAF9;
          --color-teal: #38AFA3;
          --color-cream: #FAF7F2;
          --color-charcoal: #2C2438;

          --font-display: 'Playfair Display', serif;
          --font-body: 'Nunito', sans-serif;

          background-color: var(--color-cream);
          color: var(--color-charcoal);
          font-family: var(--font-body);
          font-size: 18px;
          line-height: 1.6;
        }

        .brand-guidelines h1,
        .brand-guidelines h2,
        .brand-guidelines h3,
        .brand-guidelines h4,
        .brand-guidelines h5,
        .brand-guidelines h6,
        .font-display {
          font-family: var(--font-display);
          color: var(--color-plum);
        }

        .section-divider {
          height: 1px;
          background-color: var(--color-plum);
          opacity: 0.2;
          margin: 4rem 0;
        }

        .callout-box {
          background-color: var(--color-lavender-light);
          padding: 2rem;
          border-radius: 8px;
        }

        .callout-box-teal {
          background-color: var(--color-lavender-light);
          padding: 2rem;
          border-left: 4px solid var(--color-teal);
          border-radius: 0 8px 8px 0;
        }
        
        .code-panel {
          background-color: var(--color-charcoal);
          color: #e2e8f0;
          padding: 1.5rem;
          border-radius: 8px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          font-size: 14px;
          overflow-x: auto;
        }
      `}</style>

      {/* Header */}
      <header className="mb-16 text-center md:text-left flex flex-col items-center md:items-start">
        <div className="inline-block px-4 py-1 mb-6 text-sm font-bold tracking-widest uppercase border border-[var(--color-plum)] text-[var(--color-plum)] rounded-full">
          Brand Reference
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">PH Navigator</h1>
        <p className="text-xl md:text-2xl text-[var(--color-charcoal)] font-display italic">
          Navigating life with pulmonary hypertension — together.
        </p>
      </header>

      {/* 1. Brand Overview */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <span className="text-3xl font-display text-[var(--color-coral)]">01</span>
          <h2 className="text-3xl font-bold m-0">Brand Overview</h2>
        </div>
        
        <p className="text-xl mb-8 leading-relaxed max-w-3xl">
          Empowering pulmonary hypertension patients, carers, and families across Australia and New Zealand. We provide steady light in the uncertainty, offering clear guidance, emotional support, and practical resources.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="callout-box">
            <h3 className="text-xl font-bold mb-2">Dignified</h3>
            <p className="text-sm m-0">We respect the intelligence and lived experience of our community.</p>
          </div>
          <div className="callout-box">
            <h3 className="text-xl font-bold mb-2">Empowering</h3>
            <p className="text-sm m-0">We provide tools for action, not just information.</p>
          </div>
          <div className="callout-box">
            <h3 className="text-xl font-bold mb-2">Honest</h3>
            <p className="text-sm m-0">We are truthful about challenges without being fatalistic.</p>
          </div>
          <div className="callout-box">
            <h3 className="text-xl font-bold mb-2">Warm</h3>
            <p className="text-sm m-0">We speak like a trusted, knowledgeable companion.</p>
          </div>
          <div className="callout-box">
            <h3 className="text-xl font-bold mb-2">Encouraging</h3>
            <p className="text-sm m-0">We focus on what is possible and finding joy.</p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 2. Colour Usage Rules */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <span className="text-3xl font-display text-[var(--color-coral)]">02</span>
          <h2 className="text-3xl font-bold m-0">Colour Usage Rules</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* DOs */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2 mb-6">
              <Check className="text-[var(--color-teal)]" size={24} />
              Do
            </h3>
            
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-[var(--color-plum)] shrink-0 shadow-sm" />
              <div>
                <p className="font-bold mb-1">Deep Plum for hierarchy</p>
                <p className="text-sm opacity-80">Use for headings, main navigation, and key structural elements.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-[var(--color-coral)] shrink-0 shadow-sm" />
              <div>
                <p className="font-bold mb-1">Coral Rose for action</p>
                <p className="text-sm opacity-80">Use for primary CTAs, alerts, and moments of emotional emphasis.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-[var(--color-teal)] shrink-0 shadow-sm" />
              <div>
                <p className="font-bold mb-1">Seafoam Teal for utility</p>
                <p className="text-sm opacity-80">Use for links, secondary actions, and informational icons.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-[var(--color-cream)] border border-gray-200 shrink-0 shadow-sm" />
              <div>
                <p className="font-bold mb-1">Warm Cream for background</p>
                <p className="text-sm opacity-80">Primary background colour. Never use pure white or pure black.</p>
              </div>
            </div>
          </div>

          {/* DON'Ts */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2 mb-6">
              <X className="text-red-500" size={24} />
              Don't
            </h3>
            
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-md bg-[var(--color-plum)] flex items-center justify-center shrink-0">
                <span className="text-[var(--color-coral)] font-bold">Aa</span>
              </div>
              <div>
                <p className="font-bold mb-1">Coral on Plum</p>
                <p className="text-sm opacity-80">Fails accessibility contrast requirements. Hard to read.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-md bg-[var(--color-cream)] border border-gray-200 flex items-center justify-center shrink-0">
                <span className="text-[var(--color-lavender)] text-xs text-center leading-tight p-1">Body text here</span>
              </div>
              <div>
                <p className="font-bold mb-1">Lavender for text</p>
                <p className="text-sm opacity-80">Too light for reading. Use only for decorative backgrounds/shapes.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-md flex shrink-0 overflow-hidden">
                <div className="w-1/3 bg-[var(--color-plum)]"></div>
                <div className="w-1/3 bg-[var(--color-coral)]"></div>
                <div className="w-1/3 bg-[var(--color-teal)]"></div>
              </div>
              <div>
                <p className="font-bold mb-1">Colour overload</p>
                <p className="text-sm opacity-80">Don't use more than 3 brand colours per layout section. Keep it clean.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 3. Typography Hierarchy */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <span className="text-3xl font-display text-[var(--color-coral)]">03</span>
          <h2 className="text-3xl font-bold m-0">Typography Hierarchy</h2>
        </div>

        <div className="space-y-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 items-baseline border-b border-[var(--color-plum)]/10 pb-4">
            <div className="col-span-1 text-sm opacity-70 mb-2 lg:mb-0">Display</div>
            <div className="col-span-3">
              <div className="text-5xl md:text-6xl font-display font-bold text-[var(--color-plum)] leading-tight">Playfair Display</div>
              <div className="text-sm opacity-70 mt-2">60px / Bold / Line Height 1.1</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 items-baseline border-b border-[var(--color-plum)]/10 pb-4">
            <div className="col-span-1 text-sm opacity-70 mb-2 lg:mb-0">Heading 1</div>
            <div className="col-span-3">
              <div className="text-4xl md:text-5xl font-display font-bold text-[var(--color-plum)] leading-tight">Playfair Display</div>
              <div className="text-sm opacity-70 mt-2">48px / Bold / Line Height 1.2</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 items-baseline border-b border-[var(--color-plum)]/10 pb-4">
            <div className="col-span-1 text-sm opacity-70 mb-2 lg:mb-0">Heading 2</div>
            <div className="col-span-3">
              <div className="text-3xl md:text-4xl font-display font-bold text-[var(--color-plum)] leading-tight">Playfair Display</div>
              <div className="text-sm opacity-70 mt-2">36px / Bold / Line Height 1.3</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 items-baseline border-b border-[var(--color-plum)]/10 pb-4">
            <div className="col-span-1 text-sm opacity-70 mb-2 lg:mb-0">Heading 3</div>
            <div className="col-span-3">
              <div className="text-2xl font-display font-semibold text-[var(--color-plum)] leading-snug">Playfair Display</div>
              <div className="text-sm opacity-70 mt-2">24px / SemiBold / Line Height 1.4</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 items-baseline border-b border-[var(--color-plum)]/10 pb-4">
            <div className="col-span-1 text-sm opacity-70 mb-2 lg:mb-0">Body</div>
            <div className="col-span-3">
              <div className="text-lg font-body text-[var(--color-charcoal)] leading-relaxed">Nunito Regular</div>
              <div className="text-sm opacity-70 mt-2">18px (Min Web) / Regular / Line Height 1.6</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 items-baseline pb-4">
            <div className="col-span-1 text-sm opacity-70 mb-2 lg:mb-0">Caption</div>
            <div className="col-span-3">
              <div className="text-sm font-body text-[var(--color-charcoal)] opacity-80 leading-normal">Nunito Regular</div>
              <div className="text-sm opacity-70 mt-2">14px / Regular / Line Height 1.5</div>
            </div>
          </div>
        </div>

        <div className="callout-box">
          <h4 className="font-bold text-sm uppercase tracking-wider text-[var(--color-plum)] mb-4">In Practice</h4>
          <h3 className="text-3xl font-display font-bold mb-4">Understanding your diagnosis</h3>
          <p className="mb-4 text-lg">
            Receiving a pulmonary hypertension diagnosis can be overwhelming. It's normal to feel confused or anxious about what this means for your future.
          </p>
          <p className="text-lg">
            This guide is designed to help you understand your condition, navigate your treatment options, and find support along the way.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* 4. Voice & Tone Guide */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <span className="text-3xl font-display text-[var(--color-coral)]">04</span>
          <h2 className="text-3xl font-bold m-0">Voice & Tone Guide</h2>
        </div>

        <p className="text-xl mb-8">
          Core tone: <strong className="font-bold">Warm, trustworthy, plain-spoken.</strong> Never clinical or condescending.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold flex items-center gap-2 mb-4 text-[var(--color-teal)]">
              <Check size={20} /> DO
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Use 'we' and 'you' to create a sense of partnership</li>
              <li>Explain medical terms simply when first used</li>
              <li>Acknowledge emotional realities without dwelling on despair</li>
              <li>Use active voice and clear, short sentences</li>
            </ul>
          </div>
          <div className="bg-white/50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold flex items-center gap-2 mb-4 text-red-500">
              <X size={20} /> DON'T
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Use overly academic or detached clinical language</li>
              <li>Minimize the severity of the condition</li>
              <li>Make promises about outcomes or timelines</li>
              <li>Use confusing metaphors for medical concepts</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-6">Before & After Examples</h3>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
            <div className="bg-white border border-gray-200 p-6 rounded-lg relative">
              <span className="absolute top-0 right-0 bg-red-100 text-red-800 text-xs px-2 py-1 rounded-bl-lg font-bold">BEFORE (Clinical)</span>
              <p className="italic text-gray-500 mt-2">"Patients experiencing dyspnea should consult their physician immediately."</p>
            </div>
            <div className="callout-box-teal !py-6 !px-6 m-0 h-full relative">
              <span className="absolute top-0 right-0 bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-bl-lg font-bold">AFTER (Warm)</span>
              <p className="font-medium mt-2">"If you are feeling breathless, talk to your doctor — it is always worth checking."</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
            <div className="bg-white border border-gray-200 p-6 rounded-lg relative">
              <span className="absolute top-0 right-0 bg-red-100 text-red-800 text-xs px-2 py-1 rounded-bl-lg font-bold">BEFORE (Detached)</span>
              <p className="italic text-gray-500 mt-2">"Treatment adherence is necessary for optimal management of PH."</p>
            </div>
            <div className="callout-box-teal !py-6 !px-6 m-0 h-full relative">
              <span className="absolute top-0 right-0 bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-bl-lg font-bold">AFTER (Empowering)</span>
              <p className="font-medium mt-2">"Taking your medication exactly as prescribed gives you the best chance at feeling well."</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 5. Logo Usage Rules */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <span className="text-3xl font-display text-[var(--color-coral)]">05</span>
          <h2 className="text-3xl font-bold m-0">Logo Usage</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2 bg-white border border-gray-200 rounded-lg p-12 flex items-center justify-center relative">
            <div className="absolute top-4 left-4 text-xs font-bold text-gray-400">MINIMUM SIZE: 120PX</div>
            {/* Mock Logo representation */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[var(--color-plum)] flex items-center justify-center text-white font-bold text-sm">PH</div>
              <span className="font-display font-bold text-2xl text-[var(--color-plum)]">Navigator</span>
            </div>
          </div>
          
          <div className="col-span-1 bg-white border border-gray-200 rounded-lg p-12 flex items-center justify-center relative">
            <div className="absolute top-4 left-4 text-xs font-bold text-gray-400">ICON ONLY: 32PX</div>
            {/* Mock Logo Icon representation */}
            <div className="w-12 h-12 rounded-full bg-[var(--color-plum)] flex items-center justify-center text-white font-bold text-lg">PH</div>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-4">Clear Space</h3>
        <div className="bg-white border border-gray-200 p-8 rounded-lg mb-12 flex justify-center">
          <div className="relative border border-dashed border-gray-400 p-6 inline-block">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full pb-1 text-xs text-gray-500">= height of P</div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full pt-1 text-xs text-gray-500">= height of P</div>
            <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 pr-2 text-xs text-gray-500">= width of P</div>
            <div className="absolute right-0 top-1/2 translate-x-full -translate-y-1/2 pl-2 text-xs text-gray-500">= width of P</div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[var(--color-plum)] flex items-center justify-center text-white font-bold text-sm">PH</div>
              <span className="font-display font-bold text-2xl text-[var(--color-plum)]">Navigator</span>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-4">Approved Backgrounds</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-[var(--color-cream)] p-8 rounded-lg flex items-center justify-center border border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[var(--color-plum)] flex items-center justify-center text-white font-bold text-[10px]">PH</div>
              <span className="font-display font-bold text-lg text-[var(--color-plum)]">Navigator</span>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg flex items-center justify-center border border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[var(--color-plum)] flex items-center justify-center text-white font-bold text-[10px]">PH</div>
              <span className="font-display font-bold text-lg text-[var(--color-plum)]">Navigator</span>
            </div>
          </div>
          
          <div className="bg-[var(--color-plum)] p-8 rounded-lg flex items-center justify-center">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[var(--color-plum)] font-bold text-[10px]">PH</div>
              <span className="font-display font-bold text-lg text-white">Navigator</span>
            </div>
          </div>
        </div>

        <div className="bg-red-50 p-6 rounded-lg border border-red-100 flex gap-4 items-start">
          <X className="text-red-500 shrink-0 mt-1" />
          <div>
            <p className="font-bold text-red-800 mb-1">NOT Approved</p>
            <p className="text-sm text-red-700 m-0">Do not place logo on busy photography without an overlay, or on any background that drops contrast below 4.5:1 (such as Coral Rose or Soft Lavender).</p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 6. Accessibility Standards */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <span className="text-3xl font-display text-[var(--color-coral)]">06</span>
          <h2 className="text-3xl font-bold m-0">Accessibility Standards</h2>
        </div>

        <div className="callout-box-teal space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-1">Colour Contrast</h3>
            <p className="text-sm m-0">Must meet WCAG AA minimum: 4.5:1 for normal text, 3:1 for large text and UI components.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-1">Font Sizes</h3>
            <p className="text-sm m-0">Body text minimum 18px for web, 16px for print. Captions minimum 14px.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-1">Touch Targets</h3>
            <p className="text-sm m-0">Interactive elements must be at least 48x48dp on mobile devices.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-1">Motion</h3>
            <p className="text-sm m-0">Respect <code>prefers-reduced-motion</code>. Decorative animations should be disabled; functional animations must be preserved.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-1">Icons & Imagery</h3>
            <p className="text-sm m-0">Icons must be distinguishable at 24px and never rely on colour alone to convey meaning. All images require descriptive alt text, especially medical diagrams.</p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 7. Sample Applications */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <span className="text-3xl font-display text-[var(--color-coral)]">07</span>
          <h2 className="text-3xl font-bold m-0">Sample Applications</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Business Cards */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500">Business Card</h3>
            <div className="aspect-[3.5/2] bg-[var(--color-cream)] border border-gray-200 shadow-md rounded-sm p-6 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[var(--color-plum)] flex items-center justify-center text-white font-bold text-[10px]">PH</div>
                <span className="font-display font-bold text-lg text-[var(--color-plum)]">Navigator</span>
              </div>
              <div>
                <p className="font-bold text-[var(--color-plum)] text-lg mb-0">Sarah Jenkins</p>
                <p className="text-sm text-[var(--color-teal)] font-bold mb-2">Support Coordinator</p>
                <p className="text-xs text-gray-600">sarah@phnavigator.org.au<br/>1800 123 456</p>
              </div>
            </div>
            
            <div className="aspect-[3.5/2] bg-[var(--color-plum)] shadow-md rounded-sm p-6 flex items-center justify-center text-center">
              <p className="font-display text-white italic text-lg max-w-[80%]">
                Navigating life with pulmonary hypertension — together.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Email Header */}
            <div className="space-y-4">
              <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500">Email Header</h3>
              <div className="bg-white border border-gray-200 shadow-sm rounded-t-md overflow-hidden">
                <div className="bg-gray-100 text-[10px] text-center py-2 text-gray-500">
                  Can't read this email? <span className="underline text-[var(--color-teal)]">View in browser</span>
                </div>
                <div className="bg-[var(--color-cream)] p-6 flex justify-between items-center border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-plum)] flex items-center justify-center text-white font-bold text-sm">PH</div>
                  </div>
                  <div className="flex gap-4 text-xs font-bold text-[var(--color-plum)] uppercase">
                    <span>Resources</span>
                    <span>Support</span>
                    <span>Contact</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="w-3/4 h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="w-full h-2 bg-gray-100 rounded mb-1"></div>
                  <div className="w-full h-2 bg-gray-100 rounded mb-1"></div>
                  <div className="w-2/3 h-2 bg-gray-100 rounded"></div>
                </div>
              </div>
            </div>

            {/* Social Post */}
            <div className="space-y-4">
              <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500">Social Post (1080x1080 style)</h3>
              <div className="aspect-square bg-[var(--color-plum)] rounded-md p-8 flex flex-col justify-between max-w-[250px]">
                <div className="flex justify-end">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[var(--color-plum)] font-bold text-[10px]">PH</div>
                </div>
                <p className="font-display text-white text-2xl leading-tight font-bold">
                  "I finally found a community that understands."
                </p>
                <p className="text-white/60 text-xs">phnavigator.org.au</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 8. Design Token Export */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <span className="text-3xl font-display text-[var(--color-coral)]">08</span>
          <h2 className="text-3xl font-bold m-0">Design Tokens</h2>
        </div>
        
        <p className="mb-6">Ready to use CSS variables and Tailwind configuration for development.</p>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">CSS Custom Properties</h3>
            <div className="code-panel">
<pre>{`:root {
  /* Brand Colours */
  --color-plum: #4A3268;
  --color-coral: #D96B55;
  --color-lavender: #A88FCA;
  --color-teal: #38AFA3;
  --color-cream: #FAF7F2;
  --color-charcoal: #2C2438;
  
  /* Typography */
  --font-display: 'Playfair Display', serif;
  --font-body: 'Nunito', sans-serif;
}`}</pre>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Tailwind Config (extend)</h3>
            <div className="code-panel">
<pre>{`theme: {
  extend: {
    colors: {
      brand: {
        plum: '#4A3268',
        coral: '#D96B55',
        lavender: '#A88FCA',
        teal: '#38AFA3',
        cream: '#FAF7F2',
        charcoal: '#2C2438',
      }
    },
    fontFamily: {
      display: ['Playfair Display', 'serif'],
      body: ['Nunito', 'sans-serif'],
    }
  }
}`}</pre>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-24 pt-8 border-t border-[var(--color-plum)]/20 text-center text-sm opacity-60">
        PH Navigator Brand Guidelines • Last Updated {new Date().getFullYear()}
      </footer>
    </div>
  );
}
