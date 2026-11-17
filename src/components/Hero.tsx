"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  ArrowRight,
  ChevronRight,
  Layers,
  Hammer,
  Factory,
  Wrench,
  Flame,
  Droplets,
  Box,
  ShieldCheck,
  Gavel,
  BookOpen,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import CustomDropdown, { DropdownOption } from "@/components/CustomDropdown";

const heroQuickLinks = [
  { label: "Castings", href: "/marketplace/castings", icon: Layers },
  { label: "Forgings", href: "/marketplace/forgings", icon: Hammer },
  { label: "Equipment", href: "/marketplace/equipment", icon: Factory },
  { label: "Tooling", href: "/marketplace/tooling", icon: Wrench },
  { label: "Raw Alloys", href: "/marketplace/raw-materials", icon: Flame },
  { label: "Sand Systems", href: "/marketplace/sand-binders", icon: Droplets },
  { label: "Refractories", href: "/marketplace/refractories", icon: Box },
  { label: "Lab & QA", href: "/marketplace/testing-inspection", icon: ShieldCheck },
  { label: "Live Auctions", href: "/auctions", icon: Gavel, badge: "HOT" },
  { label: "Glossary A–Z", href: "/glossary", icon: BookOpen, badge: "82" },
];

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
        router.push("/marketplace");
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

      {/* Desktop Quick Links Sidebar (Positioned on the Left Side of Hero Section) */}
      <aside
        aria-label="Hero Sector Quick Links"
        className="hidden min-[1360px]:flex flex-col w-[160px] min-[1660px]:w-[180px] absolute left-2 min-[1660px]:left-3 top-6 bottom-6 z-20 text-left"
      >
        <div className="flex-1 rounded-2xl border border-navy-700/80 bg-navy-900/95 p-2.5 shadow-2xl backdrop-blur-md flex flex-col justify-between">
          <div>
            {/* Quick Links Heading */}
            <div className="flex items-center justify-center gap-1.5 pb-2 mb-2 border-b border-navy-800">
              <span className="h-0.5 w-2.5 bg-brand rounded-full" />
              <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-white">
                Quick Links
              </h3>
              <span className="h-0.5 w-2.5 bg-brand rounded-full" />
            </div>

            {/* Vertical Category Links */}
            <nav className="flex flex-col gap-1">
              {heroQuickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center justify-between rounded-lg border border-red-700/60 bg-brand hover:bg-brand-hover px-2 py-1.5 transition-all cursor-pointer shadow-xs"
                  title={`Go to ${link.label}`}
                >
                  <div className="flex items-center gap-1.5 min-w-0">
                    <link.icon className="h-3 w-3 text-white shrink-0" />
                    <span className="text-[10.5px] min-[1660px]:text-[11px] font-bold text-white truncate">
                      {link.label}
                    </span>
                  </div>
                  {link.badge && (
                    <span className="shrink-0 rounded bg-white/20 border border-white/30 px-1 py-0.2 text-[8px] font-mono font-extrabold text-white">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Bottom All Categories Link */}
          <Link
            href="/marketplace"
            className="mt-2 flex items-center justify-center gap-1 rounded-lg bg-brand border border-red-700/60 hover:bg-brand-hover py-1.5 text-[9px] font-bold uppercase tracking-wider text-white transition-all cursor-pointer shadow-xs"
          >
            <span>All Categories</span>
            <ChevronRight className="h-3 w-3 text-white" />
          </Link>
        </div>
      </aside>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-10 text-center">
        {/* Centered Brand Header Logo */}
        <div className="mx-auto mb-6 sm:mb-7 lg:mb-8 flex justify-center">
          <Link
            href="/"
            aria-label="Foundry Exchange Home"
            className="inline-flex items-center justify-center bg-white px-6 sm:px-8 md:px-10 lg:px-11 xl:px-12 py-3.5 sm:py-4 md:py-5 lg:py-5.5 xl:py-6 rounded-2xl md:rounded-3xl shadow-2xl border border-white/60 cursor-pointer"
          >
            <Image
              src="/foundry-logo.png"
              alt="Foundry Exchange Logo"
              width={420}
              height={140}
              priority
              className="h-14 sm:h-[68px] md:h-[78px] lg:h-[86px] xl:h-[100px] 2xl:h-[114px] w-auto object-contain"
            />
          </Link>
        </div>

        {/* USA Industrial Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-navy-700 bg-navy-900/90 px-4 py-1.5 text-xs font-semibold tracking-wide text-zinc-200 shadow-inner mb-6 backdrop-blur-xs">
          <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse" />
          <span className="text-white font-bold tracking-wider uppercase font-mono">
            The Frontier of Foundries &amp; Forgings
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-300">
            Castings • Forgings • Equipment • Raw Materials
          </span>
        </div>

        {/* Strong Heading — Single Line Fluid Typography */}
        <h1 className="mx-auto w-full max-w-7xl font-bold uppercase tracking-tight text-white font-heading whitespace-nowrap leading-none mt-2 text-[clamp(1.15rem,3.2vw,3.75rem)]">
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-brand-hover hover:shadow-lg focus:outline-hidden focus:ring-2 focus:ring-brand shrink-0 cursor-pointer"
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
              className="hover:text-brand hover:underline transition-colors cursor-pointer"
            >
              ASTM A536 Ductile
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setKeyword("Induction Furnace")}
              className="hover:text-brand hover:underline transition-colors cursor-pointer"
            >
              Induction Furnace
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setKeyword("Foundry Pig Iron")}
              className="hover:text-brand hover:underline transition-colors cursor-pointer"
            >
              Pig Iron
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setKeyword("Green Sand Matchplate")}
              className="hover:text-brand hover:underline transition-colors cursor-pointer"
            >
              Tooling Matchplates
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Quick Links (Hidden on desktop ≥1360px where Left Sidebar is displayed) */}
        <div className="min-[1360px]:hidden mx-auto mt-6 max-w-4xl">
          <div className="flex items-center justify-center gap-2 mb-2.5">
            <span className="h-[2px] w-6 bg-brand" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-white">
              Quick Links
            </span>
            <span className="h-[2px] w-6 bg-brand" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {heroQuickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group inline-flex items-center gap-1.5 rounded-lg border border-red-700/60 bg-brand hover:bg-brand-hover px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-xs backdrop-blur-xs cursor-pointer hover:-translate-y-0.5"
              >
                <link.icon className="h-3.5 w-3.5 text-white" />
                <span>{link.label}</span>
                {link.badge && (
                  <span className="rounded bg-white/20 border border-white/30 px-1 py-0.2 text-[9px] font-mono font-extrabold text-white">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Dual Primary CTAs: USA Red & White/Navy */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/rfq"
            className="inline-flex items-center gap-2.5 rounded-lg bg-brand px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-brand-hover hover:scale-[1.02] focus:outline-hidden focus:ring-2 focus:ring-brand cursor-pointer"
          >
            <span>Post an RFQ</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/marketplace"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-navy shadow-sm transition-all hover:bg-slate-100 focus:outline-hidden cursor-pointer"
          >
            <span>List Your Products</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
