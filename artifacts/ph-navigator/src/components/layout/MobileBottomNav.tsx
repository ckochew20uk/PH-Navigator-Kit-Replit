import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  Home,
  HeartPulse,
  Leaf,
  Search,
  LayoutGrid,
  X,
  ChevronRight,
  ChevronDown,
  Stethoscope,
  Users,
  MapPin,
  Info,
  HeartHandshake,
  BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useSearch } from "@/contexts/SearchContext";

const bottomTabs = [
  { label: "Home", path: "/", icon: Home, exact: true },
  { label: "Diagnosed", path: "/recently-diagnosed", icon: HeartPulse },
  { label: "Living Well", path: "/living-well", icon: Leaf },
  { label: "Resources", path: "/resource-library", icon: BookOpen },
];

interface SubItem {
  title: string;
  path: string;
}
interface NavSection {
  title: string;
  path: string;
  icon: React.ElementType;
  sub?: SubItem[];
}

const drawerSections: NavSection[] = [
  {
    title: "Treatments",
    path: "/treatments",
    icon: Stethoscope,
    sub: [
      { title: "Treatments Explained", path: "/treatments/explained" },
      { title: "Understanding Test Results", path: "/treatments/test-results" },
    ],
  },
  {
    title: "Community Voices",
    path: "/community-voices",
    icon: Users,
  },
  {
    title: "Caring for Someone",
    path: "/caring-for-someone",
    icon: HeartHandshake,
    sub: [
      { title: "Understanding the Carer's Role", path: "/caring-for-someone/carers-role" },
      { title: "Protecting Your Wellbeing", path: "/caring-for-someone/carer-wellbeing" },
      { title: "Carer Support Networks", path: "/caring-for-someone/carer-support" },
    ],
  },
  {
    title: "Find a Specialist",
    path: "/find-specialist",
    icon: MapPin,
  },
  {
    title: "About Us",
    path: "/about",
    icon: Info,
    sub: [
      { title: "The Partnership", path: "/about/partnership" },
      { title: "Advisory Panel", path: "/about/advisory-panel" },
    ],
  },
];

export function MobileBottomNav() {
  const [location] = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const { openSearch } = useSearch();

  const isActive = (path: string, exact = false) =>
    exact ? location === path : location === path || location.startsWith(path + "/");

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setExpandedSection(null);
  };

  const toggleSection = (title: string) =>
    setExpandedSection((prev) => (prev === title ? null : title));

  const handleSearchClick = () => {
    closeDrawer();
    openSearch();
  };

  return (
    <>
      {/* ── Slide-up More drawer ── */}
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={closeDrawer}
          />

          {/* Drawer panel */}
          <div className="lg:hidden fixed bottom-16 left-0 right-0 z-50 rounded-t-2xl bg-white shadow-2xl border-t border-border/30 max-h-[75dvh] flex flex-col">
            {/* Handle + header */}
            <div className="relative flex items-center justify-between px-5 pt-4 pb-3 border-b border-border/30">
              <div className="w-10 h-1 rounded-full bg-muted absolute left-1/2 -translate-x-1/2 top-2" />
              <p className="text-sm font-bold text-foreground/60 uppercase tracking-wider">More sections</p>
              <button
                onClick={closeDrawer}
                className="p-1.5 rounded-full hover:bg-muted text-foreground/50 hover:text-foreground transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Search shortcut inside drawer */}
            <button
              onClick={handleSearchClick}
              className="mx-3 mt-3 flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/60 hover:bg-muted text-foreground/60 hover:text-foreground transition-colors"
            >
              <Search className="h-4 w-4" />
              <span className="text-sm font-medium">Search all topics…</span>
            </button>

            {/* Scrollable section list */}
            <div className="overflow-y-auto flex-1 px-3 py-2">
              {drawerSections.map((section) => {
                const Icon = section.icon;
                const active = isActive(section.path);
                const isExpanded = expandedSection === section.title;

                return (
                  <div key={section.path} className="mb-1">
                    <div className="flex items-center">
                      <Link
                        href={section.path}
                        onClick={section.sub ? undefined : closeDrawer}
                        className={cn(
                          "flex-1 flex items-center gap-3 px-3 py-3.5 rounded-xl transition-colors",
                          active ? "bg-primary/8 text-primary" : "text-foreground hover:bg-muted"
                        )}
                      >
                        <span className={cn(
                          "flex items-center justify-center w-9 h-9 rounded-lg shrink-0",
                          active ? "bg-primary/15" : "bg-muted"
                        )}>
                          <Icon className={cn("h-5 w-5", active ? "text-primary" : "text-foreground/60")} />
                        </span>
                        <span className="font-semibold text-base">{section.title}</span>
                      </Link>

                      {section.sub && (
                        <button
                          onClick={() => toggleSection(section.title)}
                          className="p-3 rounded-xl text-foreground/40 hover:text-foreground hover:bg-muted transition-colors ml-1"
                          aria-label={isExpanded ? "Collapse" : "Expand"}
                        >
                          {isExpanded
                            ? <ChevronDown className="h-4 w-4" />
                            : <ChevronRight className="h-4 w-4" />}
                        </button>
                      )}
                    </div>

                    {section.sub && isExpanded && (
                      <div className="ml-12 mb-1 space-y-0.5">
                        {section.sub.map((sub) => (
                          <Link
                            key={sub.path}
                            href={sub.path}
                            onClick={closeDrawer}
                            className={cn(
                              "block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                              isActive(sub.path)
                                ? "text-primary bg-primary/8"
                                : "text-foreground/70 hover:text-primary hover:bg-muted"
                            )}
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Healthcare professionals CTA */}
            <div className="px-4 py-4 border-t border-border/30">
              <Link
                href="/for-healthcare-professionals"
                onClick={closeDrawer}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-secondary text-white font-bold text-sm hover:bg-secondary/85 transition-colors"
              >
                For Healthcare Professionals
              </Link>
            </div>
          </div>
        </>
      )}

      {/* ── Fixed bottom tab bar ── */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border/40 shadow-[0_-2px_16px_rgba(0,0,0,0.06)]">
        <div className="flex items-stretch h-16">
          {bottomTabs.map((tab) => {
            const Icon = tab.icon;
            const active = isActive(tab.path, tab.exact);
            return (
              <Link
                key={tab.path}
                href={tab.path}
                className={cn(
                  "flex-1 flex flex-col items-center justify-center gap-0.5 transition-colors pt-1",
                  active ? "text-primary" : "text-foreground/45 hover:text-foreground/70"
                )}
              >
                <Icon className={cn("h-6 w-6", active && "stroke-[2.5]")} />
                <span className="text-[10px] font-semibold tracking-wide">{tab.label}</span>
              </Link>
            );
          })}

          {/* Search tab */}
          <button
            onClick={handleSearchClick}
            className="flex-1 flex flex-col items-center justify-center gap-0.5 transition-colors pt-1 text-foreground/45 hover:text-foreground/70"
            aria-label="Search"
          >
            <Search className="h-6 w-6" />
            <span className="text-[10px] font-semibold tracking-wide">Search</span>
          </button>

          {/* More tab */}
          <button
            onClick={() => setIsDrawerOpen((v) => !v)}
            className={cn(
              "flex-1 flex flex-col items-center justify-center gap-0.5 transition-colors pt-1",
              isDrawerOpen ? "text-primary" : "text-foreground/45 hover:text-foreground/70"
            )}
          >
            <LayoutGrid className={cn("h-6 w-6", isDrawerOpen && "stroke-[2.5]")} />
            <span className="text-[10px] font-semibold tracking-wide">More</span>
          </button>
        </div>

        {/* iOS home indicator clearance */}
        <div className="h-safe-bottom bg-white" />
      </nav>
    </>
  );
}
