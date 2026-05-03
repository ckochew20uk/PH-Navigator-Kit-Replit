import React from 'react';
import { Link } from 'wouter';

export function UtilityHeader() {
  return (
    <div className="bg-muted py-1.5 px-4 text-xs font-semibold text-muted-foreground border-b border-border/50 hidden md:block">
      <div className="container mx-auto flex justify-between items-center">
        <div>A partnership between PHA Australia & PHSANZ</div>
        <div>
          <Link
            href="/for-healthcare-professionals"
            className="inline-block bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full hover:bg-secondary/85 transition-colors"
          >
            For Healthcare Professionals
          </Link>
        </div>
      </div>
    </div>
  );
}
