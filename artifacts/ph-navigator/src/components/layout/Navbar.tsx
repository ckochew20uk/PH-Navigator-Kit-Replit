import React from 'react';
import { Link, useLocation } from 'wouter';
import { ChevronDown, Search, LayoutGrid } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { useSearch } from '@/contexts/SearchContext';

interface SubItem { title: string; path: string; }
interface NavItem { title: string; path: string; sub?: SubItem[]; }

const primaryNav: NavItem[] = [
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
];

const moreNav: NavItem[] = [
  { title: 'Community Voices', path: '/community-voices' },
  { title: 'Resource Library', path: '/resource-library' },
  {
    title: 'About Us',
    path: '/about',
    sub: [
      { title: 'The Partnership', path: '/about/partnership' },
      { title: 'Advisory Panel', path: '/about/advisory-panel' },
    ],
  },
];

function NavDropdown({ item, isActive }: { item: NavItem; isActive: (p: string) => boolean }) {
  return (
    <DropdownMenu>
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
        {item.sub!.map((sub) => (
          <DropdownMenuItem asChild key={sub.path} className="p-0">
            <Link href={sub.path} className="block w-full px-4 py-2 text-sm hover:bg-muted hover:text-primary rounded-sm">
              {sub.title}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Navbar() {
  const [location] = useLocation();
  const { openSearch } = useSearch();

  const isActive = (path: string) => location === path || location.startsWith(path + '/');
  const moreActive = moreNav.some((item) => isActive(item.path));

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center gap-1">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 mr-2">
          <Logo size="md" />
        </Link>

        {/* Primary nav items */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1">
          {primaryNav.map((item) =>
            item.sub ? (
              <NavDropdown key={item.path} item={item} isActive={isActive} />
            ) : (
              <Link key={item.path} href={item.path}>
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
          )}

          {/* "More" overflow dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "text-sm font-semibold px-2.5 py-2 h-auto text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-md",
                  moreActive && "text-primary bg-muted/50"
                )}
              >
                <LayoutGrid className="h-3.5 w-3.5 mr-1.5" />
                More <ChevronDown className="ml-1 h-3.5 w-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 p-2 bg-card border-border">
              {moreNav.map((item, idx) => (
                <React.Fragment key={item.path}>
                  {idx > 0 && <DropdownMenuSeparator className="my-1" />}
                  <DropdownMenuItem asChild className="p-0">
                    <Link
                      href={item.path}
                      className={cn(
                        "block w-full px-4 py-2 font-semibold hover:bg-muted hover:text-primary rounded-sm text-sm",
                        isActive(item.path) ? "text-primary" : "text-foreground/80"
                      )}
                    >
                      {item.title}
                    </Link>
                  </DropdownMenuItem>
                  {item.sub?.map((sub) => (
                    <DropdownMenuItem asChild key={sub.path} className="p-0">
                      <Link href={sub.path} className="block w-full px-6 py-1.5 text-sm text-foreground/60 hover:bg-muted hover:text-primary rounded-sm">
                        {sub.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </React.Fragment>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Search — pinned right, shown on all breakpoints */}
        <Button
          variant="ghost"
          onClick={openSearch}
          className="shrink-0 flex items-center gap-2 text-foreground/60 hover:text-primary hover:bg-muted/60 rounded-lg px-3 py-2 h-auto"
          aria-label="Search"
        >
          <Search className="h-4 w-4" />
          <span className="hidden lg:inline text-sm font-medium">Search</span>
          <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 rounded border border-border text-[10px] text-foreground/35 font-mono ml-1">
            ⌘K
          </kbd>
        </Button>
      </div>
    </header>
  );
}
