import React from "react";

export type LogoVariant = "primary" | "white" | "mark";
export type LogoSize = "sm" | "md" | "lg";

const heights: Record<LogoSize, number> = { sm: 48, md: 64, lg: 80 };

interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
}

// Inline SVG recreation of the pin+heart mark — scalable, no network request
function LogoMark({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Right teal pin (behind) */}
      <path
        d="M60 88 C50 74 40 60 40 40 A20 20 0 1 1 80 40 C80 60 70 74 60 88Z"
        fill="#3AADA8"
      />
      {/* Left navy pin (front) */}
      <path
        d="M40 82 C30 68 18 54 18 34 A22 22 0 1 1 62 34 C62 54 50 68 40 82Z"
        fill="#1B5FAF"
      />
      {/* White ring */}
      <circle cx="50" cy="50" r="14" fill="white" />
      {/* Coral heart centre */}
      <circle cx="50" cy="50" r="10" fill="#E8735A" />
    </svg>
  );
}

// Wordmark text to match the logo design
function LogoWordmark({ white = false }: { white?: boolean }) {
  return (
    <span className="flex flex-col leading-none select-none" aria-hidden="true">
      <span
        className="font-bold tracking-tight"
        style={{
          fontFamily: "Nunito, sans-serif",
          fontSize: "1.125rem",
          color: white ? "white" : "#1B5FAF",
          letterSpacing: "-0.01em",
        }}
      >
        PH
      </span>
      <span
        className="font-semibold tracking-tight"
        style={{
          fontFamily: "Nunito, sans-serif",
          fontSize: "1rem",
          color: white ? "rgba(255,255,255,0.85)" : "#3AADA8",
          marginTop: "-2px",
        }}
      >
        Navigator
      </span>
    </span>
  );
}

export function Logo({ variant = "primary", size = "md", className }: LogoProps) {
  const h = heights[size];
  const markSize = Math.round(h * 0.72);

  if (variant === "mark") {
    return (
      <span className={className} aria-label="PH Navigator">
        <LogoMark size={h} />
      </span>
    );
  }

  if (variant === "white") {
    return (
      <span
        className={`inline-flex items-center gap-2.5 ${className ?? ""}`}
        aria-label="PH Navigator"
      >
        {/* White version of the mark */}
        <svg
          width={markSize}
          height={markSize}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M60 88 C50 74 40 60 40 40 A20 20 0 1 1 80 40 C80 60 70 74 60 88Z"
            fill="rgba(255,255,255,0.7)"
          />
          <path
            d="M40 82 C30 68 18 54 18 34 A22 22 0 1 1 62 34 C62 54 50 68 40 82Z"
            fill="white"
          />
          <circle cx="50" cy="50" r="14" fill="rgba(255,255,255,0.2)" />
          <circle cx="50" cy="50" r="10" fill="rgba(255,255,255,0.9)" />
        </svg>
        <LogoWordmark white />
      </span>
    );
  }

  // Primary — SVG mark + styled wordmark (no image loading needed, matches the logo design)
  // Also offer the actual uploaded PNG if it has loaded
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className ?? ""}`}
      aria-label="PH Navigator"
    >
      <LogoMark size={markSize} />
      <LogoWordmark />
    </span>
  );
}
