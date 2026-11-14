"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import CustomDropdown, { DropdownOption } from "@/components/CustomDropdown";

const categoryOptions: DropdownOption[] = [
  { value: "all", label: "All Categories" },
  { value: "castings", label: "Castings (Ferrous/Non-Ferrous)" },
  { value: "forgings", label: "Forgings (Open/Closed Die & Rings)" },
  { value: "equipment", label: "Foundry & Forge Equipment" },
  { value: "tooling", label: "Patterns, Tooling & Dies" },
  { value: "raw-materials", label: "Raw Materials & Alloys" },
  { value: "sand-binders", label: "Sand & Binders" },
  { value: "refractories", label: "Refractories" },
  { value: "machining-finishing", label: "Machining & Finishing" },
  { value: "testing-inspection", label: "Testing & Inspection (NDT)" },
  { value: "heat-treating", label: "Heat Treating & Ovens" },
];

export default function Hero() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      const elem = document.getElementById("marketplace");
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/#marketplace");
      }
    }
  };

  return (
    <section
      id="hero-section"
      className="relative z-20 bg-navy-950 py-20 text-white border-b-2 border-navy-800"
    >
      {/* Background Ambience Container (isolated overflow-hidden prevents clipping dropdowns) */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Molten Glow & Heavy Industrial Atmospheric Lighting */}
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 h-[550px] w-[950px] rounded-full opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at center, #c82425 0%, #0a3161 50%, rgba(6,32,64,0) 80%)",
          }}
        />

        {/* Industrial Blueprint Precision Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-10 text-center">
        {/* Centered Brand Header Logo / Icon */}
        <div className="mx-auto mb-6 flex justify-center">
          <div className="bg-white px-5 py-3 rounded-xl shadow-2xl border border-navy-700/60 inline-flex items-center justify-center transition-transform hover:scale-105">
            <Image
              src="/foundry-logo.png"
              alt="Foundry Exchange Logo"
              width={260}
              height={78}
              priority
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
            />
          </div>
        </div>

        {/* USA Industrial Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-navy-700 bg-navy-900/90 px-4 py-1.5 text-xs font-semibold tracking-wide text-zinc-200 shadow-inner mb-6 backdrop-blur-xs">
          <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse" />
          <span className="text-white font-bold tracking-wider uppercase">
            B2B Foundry & Forge Exchange
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-300">
            Castings • Forgings • Equipment • Raw Materials
          </span>
        </div>

        {/* Strong Heading — Responsive Balanced Typography */}
        <h1 className="mx-auto w-full max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white font-heading leading-tight sm:leading-tight mt-2 text-balance">
          {siteConfig.tagline}
        </h1>

        {/* Subline */}
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
          The specialized digital exchange for buying, selling, trading, and
          sourcing castings, melt-shop equipment, scrap alloys, sand tooling,
          and metallurgical testing.
        </p>

        {/* Search Box Card — High Contrast Deep Navy Surface */}
        <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-navy-700 bg-navy-900/95 p-3 shadow-2xl backdrop-blur-sm">
          <form
            onSubmit={handleSearch}
            className="flex flex-col sm:flex-row items-center gap-2"
          >
            {/* Category Selector */}
            <div className="w-full sm:w-56 shrink-0">
              <CustomDropdown
                options={categoryOptions}
                value={selectedCategory}
                onChange={setSelectedCategory}
                variant="dark"
                size="lg"
                direction="auto"
                buttonClassName="h-[46px] text-xs font-semibold"
                menuClassName="sm:min-w-[290px]"
                aria-label="Filter by Category"
              />
            </div>

            {/* Keyword Input */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search by alloy, ASTM spec, furnace tonnage, or part..."
                className="w-full rounded-lg border border-navy-700 bg-navy-950 py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-400 focus:border-brand focus:outline-hidden"
              />
            </div>

            {/* Submit Button in Brand Red */}
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-brand-hover hover:shadow-lg focus:outline-hidden focus:ring-2 focus:ring-brand shrink-0"
            >
              <span>Search</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {/* Quick Search Chips */}
          <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-2 border-t border-navy-800 text-xs text-slate-300">
            <span className="font-semibold text-slate-400">Popular:</span>
            <button
              type="button"
              onClick={() => setKeyword("ASTM A536 Ductile Iron")}
              className="hover:text-brand hover:underline transition-colors"
            >
              ASTM A536 Ductile
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setKeyword("Induction Furnace")}
              className="hover:text-brand hover:underline transition-colors"
            >
              Induction Furnace
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setKeyword("Foundry Pig Iron")}
              className="hover:text-brand hover:underline transition-colors"
            >
              Pig Iron
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setKeyword("Green Sand Matchplate")}
              className="hover:text-brand hover:underline transition-colors"
            >
              Tooling Matchplates
            </button>
          </div>
        </div>

        {/* Dual Primary CTAs: USA Red & White/Navy */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#contact-form"
            className="inline-flex items-center gap-2.5 rounded-lg bg-brand px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-brand-hover hover:scale-[1.02] focus:outline-hidden focus:ring-2 focus:ring-brand"
          >
            <span>Post an RFQ</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/#contact-form"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-navy shadow-sm transition-all hover:bg-slate-100 focus:outline-hidden"
          >
            <span>List Your Products</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
