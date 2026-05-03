import React, { Suspense } from 'react';
import { CrisisBanner } from './CrisisBanner';
import { UtilityHeader } from './UtilityHeader';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { MobileBottomNav } from './MobileBottomNav';
import { SearchModal } from '@/components/search/SearchModal';
import { SearchProvider, useSearch } from '@/contexts/SearchContext';

function LayoutInner({ children }: { children: React.ReactNode }) {
  const { isOpen, closeSearch } = useSearch();
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground font-sans">
      <CrisisBanner />
      <UtilityHeader />
      <Navbar />
      <main className="flex-1 w-full flex flex-col pb-16 lg:pb-0">
        <Suspense fallback={
          <div className="flex-1 flex items-center justify-center min-h-[50vh]">
            <div className="animate-pulse text-primary/60 text-xl font-serif">Loading...</div>
          </div>
        }>
          {children}
        </Suspense>
      </main>
      <Footer />
      <MobileBottomNav />
      <SearchModal open={isOpen} onClose={closeSearch} />
    </div>
  );
}

interface GlobalLayoutProps {
  children: React.ReactNode;
}

export function GlobalLayout({ children }: GlobalLayoutProps) {
  return (
    <SearchProvider>
      <LayoutInner>{children}</LayoutInner>
    </SearchProvider>
  );
}
