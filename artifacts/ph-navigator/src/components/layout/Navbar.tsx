import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';
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
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

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
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            item.sub ? (
              <DropdownMenu key={item.title}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "text-base font-semibold px-3 py-2 h-auto text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-md",
                      isActive(item.path) && "text-primary bg-muted/50"
                    )}
                  >
                    {item.title} <ChevronDown className="ml-1 h-4 w-4" />
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
                      <Link href={subItem.path} className="block w-full px-4 py-2 text-base hover:bg-muted hover:text-primary rounded-sm">
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
                    "text-base font-semibold px-3 py-2 h-auto text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-md",
                    isActive(item.path) && "text-primary bg-muted/50"
                  )}
                >
                  {item.title}
                </Button>
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Toggle */}
        <Button variant="ghost" size="icon" className="lg:hidden text-primary" onClick={toggleMenu}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-md max-h-[calc(100vh-5rem)] overflow-y-auto pb-4">
          <nav className="flex flex-col px-4 py-2">
            {navItems.map((item) => (
              <div key={item.title} className="py-2 border-b border-border/50 last:border-0">
                <Link href={item.path} onClick={() => setIsOpen(false)} className={cn("block py-2 text-lg font-bold text-primary", isActive(item.path) && "text-destructive")}>
                  {item.title}
                </Link>
                {item.sub && (
                  <div className="flex flex-col pl-4 mt-1 border-l-2 border-muted">
                    {item.sub.map((subItem) => (
                      <Link key={subItem.path} href={subItem.path} onClick={() => setIsOpen(false)} className="py-2 text-base text-foreground/80 hover:text-primary">
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="py-4 mt-2 border-t border-border">
              <Link href="/for-healthcare-professionals" onClick={() => setIsOpen(false)} className="text-secondary font-semibold">
                For Healthcare Professionals
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
