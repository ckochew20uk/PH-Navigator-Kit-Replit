import React from 'react';

// Brand Colors
const colors = {
  deepPlum: '#1B5FAF',
  coralRose: '#E8735A',
  seafoamTeal: '#38AFA3',
  warmCream: '#FAF7F2',
  deepCharcoal: '#1C3347',
  white: '#FFFFFF'
};

interface LogoProps {
  className?: string;
  theme?: 'color' | 'monochrome' | 'white';
  layout?: 'stacked' | 'horizontal' | 'icon-only';
  appIcon?: boolean;
}

const LogoIcon = ({ theme = 'color', className = "w-24 h-24" }: { theme?: 'color' | 'monochrome' | 'white', className?: string }) => {
  const leftColor = theme === 'color' ? colors.deepPlum : theme === 'white' ? colors.white : colors.deepPlum;
  const rightColor = theme === 'color' ? colors.seafoamTeal : theme === 'white' ? colors.white : colors.deepPlum;
  const heartColor = theme === 'color' ? colors.coralRose : theme === 'white' ? colors.white : colors.deepPlum;
  const ringColor = theme === 'color' ? colors.white : theme === 'white' ? colors.deepPlum : colors.warmCream;

  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left Pin */}
      <path 
        d="M 40 15 C 23.4 15 10 28.4 10 45 C 10 67.5 40 85 40 85 C 40 85 45 81.3 45.4 79.5 C 38.3 73.1 17 55.4 17 45 C 17 32.3 27.3 22 40 22 C 48.1 22 55.2 26.2 59 32.5 C 60 27.4 55.4 15 40 15 Z" 
        fill={leftColor} 
      />
      <path 
        d="M 40 15 C 23.4 15 10 28.4 10 45 C 10 67.5 40 85 40 85 C 40 85 70 67.5 70 45 C 70 28.4 56.6 15 40 15 Z" 
        fill={leftColor} 
        opacity={theme === 'color' ? "0.9" : "1"}
      />
      
      {/* Right Pin */}
      <path 
        d="M 60 15 C 43.4 15 30 28.4 30 45 C 30 67.5 60 85 60 85 C 60 85 90 67.5 90 45 C 90 28.4 76.6 15 60 15 Z" 
        fill={rightColor} 
        opacity={theme === 'color' ? "0.9" : "1"}
        style={{ mixBlendMode: theme === 'color' ? 'multiply' : 'normal' }}
      />
      
      {/* Center Heart / Circle Overlap */}
      <circle cx="50" cy="45" r="14" fill={ringColor} />
      <path 
        d="M50 51.5C50 51.5 41 45 41 39.5C41 36.5 43.5 34 46.5 34C48.2 34 49.7 34.8 50 36C50.3 34.8 51.8 34 53.5 34C56.5 34 59 36.5 59 39.5C59 45 50 51.5 50 51.5Z" 
        fill={heartColor} 
      />
    </svg>
  );
};

const Logo = ({ theme = 'color', layout = 'stacked', className = "", appIcon = false }: LogoProps) => {
  const textColorPH = theme === 'color' ? colors.deepPlum : theme === 'white' ? colors.white : colors.deepPlum;
  const textColorNav = theme === 'color' ? colors.seafoamTeal : theme === 'white' ? colors.white : colors.deepPlum;
  
  if (appIcon) {
    return (
      <div 
        className={`flex items-center justify-center rounded-2xl shadow-lg ${className}`}
        style={{ backgroundColor: theme === 'color' ? colors.deepPlum : theme === 'white' ? colors.deepCharcoal : colors.warmCream }}
      >
        <LogoIcon theme={theme === 'color' ? 'white' : theme} className="w-3/4 h-3/4" />
      </div>
    );
  }

  if (layout === 'icon-only') {
    return <LogoIcon theme={theme} className={className} />;
  }

  return (
    <div className={`flex ${layout === 'horizontal' ? 'flex-row items-center gap-4' : 'flex-col items-center gap-2'} ${className}`}>
      <LogoIcon theme={theme} className={layout === 'horizontal' ? "w-16 h-16" : "w-24 h-24"} />
      <div className={`flex ${layout === 'horizontal' ? 'flex-row items-baseline gap-2' : 'flex-col items-center'}`}>
        <span 
          style={{ fontFamily: "'Playfair Display', serif", color: textColorPH }} 
          className={`font-bold ${layout === 'horizontal' ? 'text-4xl' : 'text-5xl'} leading-none`}
        >
          PH
        </span>
        <span 
          style={{ fontFamily: "'Nunito', sans-serif", color: textColorNav }} 
          className={`font-semibold tracking-wide ${layout === 'horizontal' ? 'text-2xl' : 'text-2xl mt-1'}`}
        >
          Navigator
        </span>
      </div>
    </div>
  );
};

export function LogoConcepts() {
  return (
    <div className="min-h-screen py-16 px-8 md:px-16 lg:px-24" style={{ backgroundColor: colors.warmCream, color: colors.deepCharcoal, fontFamily: "'Nunito', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&family=Playfair+Display:wght@700&display=swap');
      `}</style>

      <header className="max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: colors.deepPlum }}>
          PH Navigator — Logo Concepts
        </h1>
        <p className="text-lg opacity-80 max-w-2xl">
          Visual identity system showcasing the overlapping pin mark, representing the partnership between PHSANZ and PHA Australia, united by patient care.
        </p>
      </header>

      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* Variation 1: Full Lockup */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">1. Full Lockup</h2>
            <p className="text-sm opacity-70">Primary presentation. Use for hero sections, covers, and large empty spaces.</p>
          </div>
          <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-black/10 shadow-sm">
            <div className="p-16 flex items-center justify-center" style={{ backgroundColor: colors.warmCream }}>
              <Logo theme="color" layout="stacked" className="scale-125" />
            </div>
            <div className="p-16 flex items-center justify-center" style={{ backgroundColor: colors.deepCharcoal }}>
              <Logo theme="white" layout="stacked" className="scale-125" />
            </div>
          </div>
        </section>

        {/* Variation 2: Horizontal Lockup */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">2. Horizontal Lockup</h2>
            <p className="text-sm opacity-70">Secondary presentation. Use for navbars, letterheads, and wide spaces.</p>
          </div>
          <div className="p-12 rounded-2xl border border-black/10 shadow-sm space-y-12 bg-white">
            <div>
              <p className="text-xs font-semibold text-gray-400 mb-6 uppercase tracking-wider">Large (180px)</p>
              <Logo theme="color" layout="horizontal" />
            </div>
            <div className="pt-8 border-t border-black/5">
              <p className="text-xs font-semibold text-gray-400 mb-6 uppercase tracking-wider">Medium Navbar Size (36px)</p>
              {/* Simulate smaller size by scaling down the component itself, since internal classes are fixed */}
              <div className="flex items-center gap-3">
                <LogoIcon theme="color" className="w-10 h-10" />
                <div className="flex items-baseline gap-1.5">
                  <span style={{ fontFamily: "'Playfair Display', serif", color: colors.deepPlum }} className="font-bold text-2xl leading-none">PH</span>
                  <span style={{ fontFamily: "'Nunito', sans-serif", color: colors.seafoamTeal }} className="font-semibold tracking-wide text-sm">Navigator</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Variation 3: Icon Only / App Icon */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">3. The Mark & App Icon</h2>
            <p className="text-sm opacity-70">Use when space is limited or brand is already established in context.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl border border-black/10 bg-white flex flex-col items-center justify-center gap-6">
              <Logo appIcon className="w-32 h-32" />
              <p className="text-xs font-medium text-gray-500">App Store Container</p>
            </div>
            <div className="p-8 rounded-2xl border border-black/10 flex flex-col items-center justify-center gap-6" style={{ backgroundColor: colors.warmCream }}>
              <LogoIcon className="w-32 h-32" />
              <p className="text-xs font-medium text-gray-500">Bare Icon (Light)</p>
            </div>
            <div className="p-8 rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-6" style={{ backgroundColor: colors.deepCharcoal }}>
              <LogoIcon theme="white" className="w-32 h-32" />
              <p className="text-xs font-medium text-gray-400">Bare Icon (Dark)</p>
            </div>
            <div className="p-8 rounded-2xl border border-black/10 bg-white flex flex-col items-center justify-center gap-6">
              <div className="flex items-center justify-center w-32 h-32 bg-gray-50 rounded border border-dashed border-gray-300">
                <LogoIcon className="w-8 h-8" />
              </div>
              <p className="text-xs font-medium text-gray-500">Favicon (32px)</p>
            </div>
          </div>
        </section>

        {/* Variation 4: Monochrome */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">4. Monochrome</h2>
            <p className="text-sm opacity-70">For single-color printing, embossing, and limited palettes.</p>
          </div>
          <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-black/10 shadow-sm">
            <div className="p-16 flex items-center justify-center bg-white">
              <Logo theme="monochrome" layout="horizontal" />
            </div>
            <div className="p-16 flex items-center justify-center" style={{ backgroundColor: colors.deepCharcoal }}>
              <div className="flex flex-row items-center gap-4">
                <LogoIcon theme="white" className="w-16 h-16" />
                <div className="flex flex-row items-baseline gap-2">
                  <span style={{ fontFamily: "'Playfair Display', serif", color: colors.white }} className="font-bold text-4xl leading-none">PH</span>
                  <span style={{ fontFamily: "'Nunito', sans-serif", color: colors.white }} className="font-semibold tracking-wide text-2xl">Navigator</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default LogoConcepts;
