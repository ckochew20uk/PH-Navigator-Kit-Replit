import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "wouter";
import Fuse from "fuse.js";
import { Search, X, ArrowRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { searchIndex, SearchItem } from "@/data/searchIndex";

const fuse = new Fuse(searchIndex, {
  keys: [
    { name: "title", weight: 0.4 },
    { name: "description", weight: 0.3 },
    { name: "keywords", weight: 0.2 },
    { name: "category", weight: 0.1 },
  ],
  threshold: 0.35,
  includeScore: true,
  minMatchCharLength: 2,
});

const RECENT_KEY = "ph-nav-recent-searches";
const MAX_RECENT = 5;

function getRecent(): SearchItem[] {
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
  } catch {
    return [];
  }
}

function addRecent(item: SearchItem) {
  const prev = getRecent().filter((r) => r.path !== item.path);
  localStorage.setItem(RECENT_KEY, JSON.stringify([item, ...prev].slice(0, MAX_RECENT)));
}

const categoryColours: Record<string, string> = {
  "Recently Diagnosed": "bg-sky-100 text-sky-700",
  "Treatments": "bg-teal-100 text-teal-700",
  "Living Well": "bg-emerald-100 text-emerald-700",
  "Carers": "bg-violet-100 text-violet-700",
  "Community": "bg-orange-100 text-orange-700",
  "Resources": "bg-amber-100 text-amber-700",
  "Find a Specialist": "bg-blue-100 text-blue-700",
  "Healthcare Professionals": "bg-indigo-100 text-indigo-700",
  "About": "bg-slate-100 text-slate-600",
  "General": "bg-slate-100 text-slate-600",
};

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [recent, setRecent] = useState<SearchItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [, navigate] = useLocation();

  useEffect(() => {
    if (open) {
      setQuery("");
      setResults([]);
      setActiveIndex(0);
      setRecent(getRecent());
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setActiveIndex(0);
      return;
    }
    const hits = fuse.search(query).map((r) => r.item);
    setResults(hits);
    setActiveIndex(0);
  }, [query]);

  const displayItems = query.trim() ? results : recent;
  const showingRecent = !query.trim() && recent.length > 0;

  const navigate_to = useCallback(
    (item: SearchItem) => {
      addRecent(item);
      navigate(item.path);
      onClose();
    },
    [navigate, onClose]
  );

  useEffect(() => {
    const el = listRef.current?.children[activeIndex] as HTMLElement | undefined;
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, displayItems.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && displayItems[activeIndex]) {
      navigate_to(displayItems[activeIndex]);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10dvh] px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[75dvh]">
        {/* Search input row */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border/40">
          <Search className="h-5 w-5 text-primary shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Search topics, symptoms, treatments…"
            className="flex-1 bg-transparent text-base text-foreground placeholder:text-foreground/40 outline-none"
            aria-label="Search PH Navigator"
            autoComplete="off"
            spellCheck={false}
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-full hover:bg-muted text-foreground/40 hover:text-foreground transition-colors"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded border border-border text-xs text-foreground/40 font-mono">
            Esc
          </kbd>
        </div>

        {/* Results / recent */}
        <div className="overflow-y-auto flex-1">
          {displayItems.length > 0 ? (
            <>
              {showingRecent && (
                <p className="px-4 pt-3 pb-1 text-xs font-bold text-foreground/40 uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> Recent
                </p>
              )}
              {query && results.length > 0 && (
                <p className="px-4 pt-3 pb-1 text-xs font-bold text-foreground/40 uppercase tracking-wider">
                  {results.length} result{results.length !== 1 ? "s" : ""}
                </p>
              )}
              <ul ref={listRef} className="px-2 pb-3">
                {displayItems.map((item, i) => {
                  const isActive = i === activeIndex;
                  const badge = categoryColours[item.category] ?? "bg-slate-100 text-slate-600";
                  return (
                    <li key={item.path}>
                      <button
                        onClick={() => navigate_to(item)}
                        onMouseEnter={() => setActiveIndex(i)}
                        className={cn(
                          "w-full flex items-start gap-3 px-3 py-3 rounded-xl text-left transition-colors",
                          isActive ? "bg-primary/8" : "hover:bg-muted/60"
                        )}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-sm text-foreground">
                              {item.title}
                            </span>
                            <span className={cn("text-[10px] font-bold px-1.5 py-0.5 rounded-full", badge)}>
                              {item.category}
                            </span>
                          </div>
                          <p className="text-xs text-foreground/55 mt-0.5 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                        <ArrowRight className={cn(
                          "h-4 w-4 shrink-0 mt-0.5 transition-colors",
                          isActive ? "text-primary" : "text-foreground/25"
                        )} />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : query.trim() ? (
            <div className="flex flex-col items-center justify-center py-12 text-foreground/40">
              <Search className="h-10 w-10 mb-3 opacity-30" />
              <p className="text-sm font-medium">No results for &ldquo;{query}&rdquo;</p>
              <p className="text-xs mt-1">Try a different term or browse the menu</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-foreground/35">
              <Search className="h-10 w-10 mb-3 opacity-25" />
              <p className="text-sm font-medium">Search PH Navigator</p>
              <p className="text-xs mt-1">Try &ldquo;oxygen&rdquo;, &ldquo;travel&rdquo;, or &ldquo;medication&rdquo;</p>
            </div>
          )}
        </div>

        {/* Footer hint */}
        <div className="border-t border-border/30 px-4 py-2.5 flex items-center gap-4 text-[11px] text-foreground/35">
          <span className="flex items-center gap-1"><kbd className="font-mono">↑↓</kbd> navigate</span>
          <span className="flex items-center gap-1"><kbd className="font-mono">↵</kbd> open</span>
          <span className="flex items-center gap-1"><kbd className="font-mono">Esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
}
