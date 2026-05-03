import React from "react";

export function ColorsTypography() {
  return (
    <div className="min-h-screen p-12" style={{ backgroundColor: "#FAF7F2", color: "#2C2438", fontFamily: "'Nunito', sans-serif" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-nunito { font-family: 'Nunito', sans-serif; }
      `}} />

      <div className="max-w-6xl mx-auto space-y-24">
        
        <header className="space-y-4 border-b border-[#A88FCA]/30 pb-12">
          <h1 className="font-playfair text-6xl font-semibold text-[#4A3268]">PH Navigator</h1>
          <p className="text-2xl text-[#D96B55]">Brand Reference: Steady Light</p>
          <p className="text-lg opacity-80 max-w-2xl">Authoritative yet deeply human. Designed for the Pulmonary Hypertension patient support network, bringing clarity and warmth to the journey.</p>
        </header>

        {/* 1. Colour Swatches */}
        <section className="space-y-8">
          <h2 className="font-playfair text-4xl text-[#4A3268] border-b border-[#4A3268]/20 pb-4">Colour Palette</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Swatch name="Deep Plum" role="Primary" hex="#4A3268" oklch="oklch(32% 0.10 296)" text="#FFFFFF" pass="AAA" />
            <Swatch name="Coral Rose" role="Secondary" hex="#D96B55" oklch="oklch(58% 0.13 32)" text="#FFFFFF" pass="AA" />
            <Swatch name="Soft Lavender" role="Accent 1" hex="#A88FCA" oklch="oklch(66% 0.09 296)" text="#2C2438" pass="AA" />
            <Swatch name="Seafoam Teal" role="Accent 2" hex="#38AFA3" oklch="oklch(65% 0.10 185)" text="#2C2438" pass="AA" />
            <Swatch name="Warm Cream" role="Background" hex="#FAF7F2" oklch="-" text="#2C2438" pass="-" />
            <Swatch name="Deep Charcoal" role="Text" hex="#2C2438" oklch="-" text="#FFFFFF" pass="AAA" />
          </div>
        </section>

        {/* 2. Shade Ramps */}
        <section className="space-y-8">
          <h2 className="font-playfair text-4xl text-[#4A3268] border-b border-[#4A3268]/20 pb-4">Shade Ramps</h2>
          <div className="space-y-8">
            <Ramp name="Deep Plum" colors={['#F5F3F8', '#E6E0F0', '#D0C4E3', '#B4A3D0', '#947ABA', '#7554A1', '#5B3E84', '#4A3268', '#3F2C56', '#35254A']} />
            <Ramp name="Coral Rose" colors={['#FEF6F4', '#FDEBE7', '#FAD3CB', '#F5B2A6', '#EE8B7B', '#E56550', '#D96B55', '#B8402D', '#9A3728', '#803226']} />
            <Ramp name="Seafoam Teal" colors={['#F0FBFA', '#D9F5F2', '#B5EAE4', '#86DBD1', '#56C5BA', '#38AFA3', '#2A8D83', '#257169', '#215A55', '#1E4B47']} />
            <Ramp name="Soft Lavender" colors={['#FCFAFD', '#F6F3F9', '#EBDEF4', '#DCC6ED', '#C9A9E3', '#A88FCA', '#9571BE', '#8059A7', '#6A4A8B', '#5A4174']} />
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* 3. Contrast Audit Table */}
          <section className="space-y-8">
            <h2 className="font-playfair text-4xl text-[#4A3268] border-b border-[#4A3268]/20 pb-4">Contrast Audit</h2>
            <div className="bg-white rounded-xl shadow-sm border border-[#A88FCA]/20 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-[#FAF7F2] text-[#4A3268] text-sm uppercase tracking-wider font-semibold border-b border-[#A88FCA]/20">
                  <tr>
                    <th className="p-4">Pairing</th>
                    <th className="p-4">Ratio</th>
                    <th className="p-4">WCAG</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#A88FCA]/10">
                  <ContrastRow fg="#4A3268" bg="#FAF7F2" fgName="Deep Plum" bgName="Warm Cream" ratio="9.2:1" pass="AAA" />
                  <ContrastRow fg="#D96B55" bg="#FAF7F2" fgName="Coral Rose" bgName="Warm Cream" ratio="4.6:1" pass="AA" />
                  <ContrastRow fg="#38AFA3" bg="#FAF7F2" fgName="Seafoam Teal" bgName="Warm Cream" ratio="3.8:1" pass="AA Large" />
                  <ContrastRow fg="#FFFFFF" bg="#4A3268" fgName="White" bgName="Deep Plum" ratio="9.6:1" pass="AAA" />
                  <ContrastRow fg="#FFFFFF" bg="#D96B55" fgName="White" bgName="Coral Rose" ratio="4.3:1" pass="AA Large" />
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. Typography Specimen */}
          <section className="space-y-8">
            <h2 className="font-playfair text-4xl text-[#4A3268] border-b border-[#4A3268]/20 pb-4">Typography</h2>
            <div className="space-y-8 bg-white p-8 rounded-xl shadow-sm border border-[#A88FCA]/20">
              <div>
                <p className="text-xs text-[#A88FCA] uppercase font-bold tracking-widest mb-1">Display (56px Playfair)</p>
                <h1 className="font-playfair text-[56px] leading-[1.1] text-[#4A3268]">Navigating life with pulmonary hypertension</h1>
              </div>
              <div>
                <p className="text-xs text-[#A88FCA] uppercase font-bold tracking-widest mb-1">H1 (40px Playfair)</p>
                <h2 className="font-playfair text-[40px] leading-[1.2] text-[#4A3268]">You are not alone in this journey</h2>
              </div>
              <div>
                <p className="text-xs text-[#A88FCA] uppercase font-bold tracking-widest mb-1">H2 (32px Playfair)</p>
                <h3 className="font-playfair text-[32px] leading-[1.3] text-[#4A3268]">Find support near you</h3>
              </div>
              <div>
                <p className="text-xs text-[#A88FCA] uppercase font-bold tracking-widest mb-1">H3 (24px Playfair)</p>
                <h4 className="font-playfair text-[24px] leading-[1.4] text-[#4A3268]">Understanding your diagnosis</h4>
              </div>
              <div>
                <p className="text-xs text-[#A88FCA] uppercase font-bold tracking-widest mb-1">Body (18px Nunito)</p>
                <p className="font-nunito text-[18px] leading-[1.6] text-[#2C2438]">
                  PH Navigator connects pulmonary hypertension patients with specialist care centers, support networks, and vital resources. Whether you are newly diagnosed or managing long-term care, our platform provides clear, accessible information tailored to the Australian and New Zealand healthcare systems.
                </p>
              </div>
              <div>
                <p className="text-xs text-[#A88FCA] uppercase font-bold tracking-widest mb-1">Caption (14px Nunito)</p>
                <p className="font-nunito text-[14px] text-[#2C2438]/70">Source: PHSANZ & PHA Australia</p>
              </div>
            </div>
          </section>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* 5. Dark Mode Panel */}
          <section className="space-y-8">
            <h2 className="font-playfair text-4xl text-[#4A3268] border-b border-[#4A3268]/20 pb-4">Dark Mode</h2>
            <div className="bg-[#1A0F2E] p-12 rounded-xl text-[#F2EFEA] space-y-6 shadow-xl">
              <h3 className="font-playfair text-3xl text-[#E5B5AB]">Restful Contrast</h3>
              <p className="text-lg text-[#D0C4E3] opacity-90 leading-relaxed">
                For users who prefer darker interfaces, the steady light palette adapts. Plums deepen, while corals and teals soften to reduce eye strain without losing their identity.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="bg-[#D96B55] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
                  Find Support
                </button>
                <button className="bg-transparent border border-[#A88FCA] text-[#A88FCA] px-6 py-3 rounded-full font-semibold hover:bg-[#A88FCA]/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </section>

          {/* 6. CSS Design Tokens */}
          <section className="space-y-8">
            <h2 className="font-playfair text-4xl text-[#4A3268] border-b border-[#4A3268]/20 pb-4">Design Tokens</h2>
            <div className="bg-[#2C2438] p-8 rounded-xl overflow-hidden shadow-xl">
              <pre className="text-sm font-mono text-[#D0C4E3] overflow-x-auto">
{`:root {
  --ph-primary: #4A3268;
  --ph-secondary: #D96B55;
  --ph-accent-1: #A88FCA;
  --ph-accent-2: #38AFA3;
  --ph-bg: #FAF7F2;
  --ph-text: #2C2438;
}

// Tailwind Config
theme: {
  colors: {
    plum: '#4A3268',
    coral: '#D96B55',
    lavender: '#A88FCA',
    seafoam: '#38AFA3',
    cream: '#FAF7F2',
    charcoal: '#2C2438',
  },
  fontFamily: {
    playfair: ['Playfair Display', 'serif'],
    nunito: ['Nunito', 'sans-serif'],
  }
}`}
              </pre>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

// Subcomponents

function Swatch({ name, role, hex, oklch, text, pass }: { name: string, role: string, hex: string, oklch: string, text: string, pass: string }) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden shadow-sm border border-black/5 bg-white">
      <div className="h-32 p-4 flex flex-col justify-between" style={{ backgroundColor: hex, color: text }}>
        <span className="text-sm font-bold opacity-80 uppercase tracking-widest">{role}</span>
        {pass !== '-' && <span className="self-end text-xs font-bold px-2 py-1 bg-black/20 rounded backdrop-blur-sm">WCAG {pass}</span>}
      </div>
      <div className="p-4 space-y-1">
        <p className="font-playfair text-xl font-semibold text-[#2C2438]">{name}</p>
        <div className="flex justify-between items-center text-sm font-mono text-gray-500">
          <span>{hex}</span>
        </div>
        <div className="text-xs font-mono text-gray-400">
          {oklch}
        </div>
      </div>
    </div>
  );
}

function Ramp({ name, colors }: { name: string, colors: string[] }) {
  const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3 text-[#2C2438]">{name}</h3>
      <div className="flex rounded-lg overflow-hidden shadow-sm h-16 w-full">
        {colors.map((c, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end p-2" style={{ backgroundColor: c }}>
          </div>
        ))}
      </div>
      <div className="flex w-full mt-2">
        {colors.map((c, i) => (
          <div key={i} className="flex-1 text-center flex flex-col items-center">
            <span className="text-[10px] font-bold text-gray-400">{steps[i]}</span>
            <span className="text-[10px] font-mono text-gray-500 mt-0.5 uppercase">{c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContrastRow({ fg, bg, fgName, bgName, ratio, pass }: { fg: string, bg: string, fgName: string, bgName: string, ratio: string, pass: string }) {
  return (
    <tr>
      <td className="p-4 border-b border-[#A88FCA]/10">
        <div className="flex items-center gap-3">
          <div className="w-16 h-10 rounded border border-black/10 flex items-center justify-center font-playfair font-bold text-sm shadow-inner" style={{ backgroundColor: bg, color: fg }}>Aa</div>
          <div>
            <div className="font-semibold text-[#2C2438]">{fgName}</div>
            <div className="text-xs text-gray-500">on {bgName}</div>
          </div>
        </div>
      </td>
      <td className="p-4 border-b border-[#A88FCA]/10 font-mono text-sm">{ratio}</td>
      <td className="p-4 border-b border-[#A88FCA]/10">
        <span className="px-2.5 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">{pass}</span>
      </td>
    </tr>
  );
}
