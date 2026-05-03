import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <path d="M24 12C24 12 16 19 16 26C16 30.4183 19.5817 34 24 34C28.4183 34 32 30.4183 32 26C32 19 24 12 24 12Z" fill="#1B5FAF" fillOpacity="0.8"/>
        <path d="M28 16C28 16 20 23 20 30C20 34.4183 23.5817 38 28 38C32.4183 38 36 34.4183 36 30C36 23 28 16 28 16Z" fill="#3AADA8" fillOpacity="0.8"/>
        <circle cx="26" cy="27" r="4" fill="#E8735A" stroke="white" strokeWidth="1.5"/>
      </svg>
      <div className="flex flex-col -gap-1">
        <span className="text-[#1B5FAF] font-serif font-bold text-xl leading-none">PH</span>
        <span className="text-[#3AADA8] font-sans font-semibold text-lg leading-none">Navigator</span>
      </div>
    </div>
  );
}
