import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CrisisBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('ph-navigator-crisis-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const dismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ph-navigator-crisis-dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="bg-destructive text-destructive-foreground py-3 px-4 relative z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-sm sm:text-base font-medium">
        <div className="flex-1 pr-8">
          <p>
            <strong className="font-bold">Emergency:</strong> If you are in crisis or need urgent medical attention, call <strong className="font-bold text-white">000</strong> immediately. 
            <span className="hidden md:inline"> | </span>
            <span className="block md:inline mt-1 md:mt-0">For emotional support: Lifeline <strong className="font-bold text-white">13 11 14</strong> | Beyond Blue <strong className="font-bold text-white">1300 22 4636</strong></span>
          </p>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-2 top-2 sm:relative sm:top-0 sm:right-0 text-white hover:bg-white/20 hover:text-white"
          onClick={dismiss}
          aria-label="Dismiss banner"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
