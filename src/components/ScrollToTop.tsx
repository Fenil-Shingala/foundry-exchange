"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when page has scrolled down more than 350px
      const shouldShow = window.scrollY > 350;
      setVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Temporarily hidden per user instruction — code preserved for future re-enablement:
  return null;

  /*
  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Move to top"
      title="Move to top"
      className={`group fixed z-50 bottom-5 right-4 sm:right-5 flex items-center gap-1.5 rounded-full bg-brand px-3.5 py-2.5 text-white shadow-2xl border-2 border-white/30 transition-all duration-300 hover:bg-brand-hover hover:border-white hover:shadow-[0_8px_25px_rgba(200,36,37,0.45)] hover:-translate-y-1 active:translate-y-0 cursor-pointer ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:-translate-y-0.5" />
      <span className="font-heading text-xs font-bold uppercase tracking-wider">
        Top
      </span>
    </button>
  );
  */
}
