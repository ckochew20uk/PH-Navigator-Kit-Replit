import React from 'react';
import { Link, useLocation } from 'wouter';
import { ChevronDown } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [location] = useLocation();

  const isActive = (path: string) => location.startsWith(path);

  const navItems = [
    {
      title: 'Recently Diagnosed',
      path: '/recently-diagnosed',
      sub: [
        { title: 'What is PH?', path: '/recently-diagnosed/what-is-ph' },
        { title: 'The Diagnostic Journey', path: '/recently-diagnosed/diagnostic-journey' },
        { title: 'Questions for Your Doctor', path: '/recently-diagnosed/questions-for-doctor' },
      ],
    },
    {
      title: 'Treatments',
      path: '/treatments',
      sub: [
        { title: 'Treatments Explained', path: '/treatments/explained' },
        { title: 'Understanding Test Results', path: '/treatments/test-results' },
      ],
    },
    {
      title: 'Living Well',
      path: '/living-well',
      sub: [
        { title: 'Diet & Nutrition', path: '/living-well/diet-nutrition' },
        { title: 'Exercise & Physical Activity', path: '/living-well/exercise' },
        { title: 'Travel & Oxygen', path: '/living-well/travel-oxygen' },
        { title: 'Mental Wellbeing', path: '/living-well/mental-wellbeing' },
        { title: 'Financial Support', path: '/living-well/financial-support' },
      ],
    },
    { title: 'Community Voices', path: '/community-voices' },
    {
      title: 'Caring for Someone',
      path: '/caring-for-someone',
      sub: [
        { title: "Understanding the Carer's Role", path: '/caring-for-someone/carers-role' },
        { title: 'Protecting Your Wellbeing', path: '/caring-for-someone/carer-wellbeing' },
        { title: 'Carer Support Networks', path: '/caring-for-someone/carer-support' },
      ],
    },
    { title: 'Resource Library', path: '/resource-library' },
    { title: 'Find a Specialist', path: '/find-specialist' },
    {
      title: 'About Us',
      path: '/about',
      sub: [
        { title: 'The Partnership', path: '/about/partnership' },
        { title: 'Advisory Panel', path: '/about/advisory-panel' },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo size="md" />
        </Link>

        {/* Desktop Nav — hidden on mobile (bottom tab bar handles mobile nav) */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            item.sub ? (
              <DropdownMenu key={item.title}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "text-sm font-semibold px-2.5 py-2 h-auto text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-md",
                      isActive(item.path) && "text-primary bg-muted/50"
                    )}
                  >
                    {item.title} <ChevronDown className="ml-1 h-3.5 w-3.5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64 p-2 bg-card border-border">
                  <DropdownMenuItem asChild className="p-0">
                    <Link href={item.path} className="block w-full px-4 py-2 font-bold text-primary hover:bg-muted rounded-sm">
                      {item.title} Overview
                    </Link>
                  </DropdownMenuItem>
                  {item.sub.map((subItem) => (
                    <DropdownMenuItem asChild key={subItem.path} className="p-0">
                      <Link href={subItem.path} className="block w-full px-4 py-2 text-sm hover:bg-muted hover:text-primary rounded-sm">
                        {subItem.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link key={item.title} href={item.path}>
                <Button
                  variant="ghost"
                  className={cn(
                    "text-sm font-semibold px-2.5 py-2 h-auto text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-md",
                    isActive(item.path) && "text-primary bg-muted/50"
                  )}
                >
                  {item.title}
                </Button>
              </Link>
            )
          ))}
        </nav>
      </div>
    </header>
  );
}
