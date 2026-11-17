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
  SlidersHorizontal,
  Thermometer,
  FileText,
  Building2,
  Zap,
  Sparkles,
  Truck,
  Boxes,
  ArrowLeftRight,
  FileCheck2,
  BadgeCheck,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import CustomDropdown, { DropdownOption } from "@/components/CustomDropdown";

const heroQuickLinks = [
  { label: "Castings", href: "/marketplace/castings", icon: Layers },
  { label: "Forgings", href: "/marketplace/forgings", icon: Hammer },
  { label: "Equipment", href: "/marketplace/equipment", icon: Factory },
  { label: "Tooling & Dies", href: "/marketplace/tooling", icon: Wrench },
  { label: "Raw Alloys", href: "/marketplace/raw-materials", icon: Flame },
  { label: "Sand Systems", href: "/marketplace/sand-binders", icon: Droplets },
  { label: "Refractories", href: "/marketplace/refractories", icon: Box },
  { label: "Melt Furnaces", href: "/marketplace/equipment", icon: Zap },
  { label: "Fettling & Blast", href: "/marketplace/machining-finishing", icon: Sparkles },
  { label: "Machining", href: "/marketplace/machining-finishing", icon: SlidersHorizontal },
  { label: "Heat Treating", href: "/marketplace/heat-treating", icon: Thermometer },
  { label: "Lab & Testing", href: "/marketplace/testing-inspection", icon: ShieldCheck },
  { label: "Live Auctions", href: "/auctions", icon: Gavel, badge: "HOT" },
  { label: "Plant Closures", href: "/auctions", icon: Building2, badge: "LIVE" },
  { label: "Post an RFQ", href: "/rfq", icon: FileText, badge: "24h" },
  { label: "ASTM / DIN Specs", href: "/knowledge", icon: FileCheck2, badge: "SPEC" },
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
        className="hidden min-[1360px]:flex flex-col w-[172px] min-[1660px]:w-[190px] absolute left-2.5 min-[1660px]:left-3.5 top-3 bottom-3 z-20 text-left"
      >
        <div className="flex-1 rounded-2xl border border-navy-700/80 bg-navy-900/95 p-2 min-[1660px]:p-2.5 shadow-2xl backdrop-blur-md flex flex-col justify-between overflow-hidden">
          {/* Quick Links Heading */}
          <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-navy-800 shrink-0 px-0.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
              <h3 className="text-[11.5px] min-[1660px]:text-xs font-heading font-extrabold uppercase tracking-wider text-white">
                Quick Links
              </h3>
            </div>
            <span className="rounded bg-navy-950 border border-navy-700/70 px-1.5 py-0.5 text-[9px] min-[1660px]:text-[10px] font-mono font-bold text-slate-300">
              17 Sectors
            </span>
          </div>

          {/* Vertical Category Links (17 Sectors & Action Hubs) */}
          <nav className="flex flex-col justify-between flex-1 min-h-0 gap-1 py-0.5">
            {heroQuickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group flex items-center justify-between rounded-lg border border-red-500/40 bg-brand hover:bg-brand-hover px-2.5 h-[32px] min-[1660px]:h-[34px] transition-all cursor-pointer shadow-xs shrink-0"
                title={`Go to ${link.label}`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <link.icon className="h-3.5 w-3.5 text-white shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] min-[1660px]:text-[11.5px] font-bold text-white truncate tracking-tight">
                    {link.label}
                  </span>
                </div>
                {link.badge && (
                  <span className="shrink-0 rounded bg-navy-950/80 border border-white/20 px-1.5 py-0.5 text-[8px] min-[1660px]:text-[8.5px] font-mono font-extrabold text-white">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Bottom All Categories Link */}
          <Link
            href="/marketplace"
            className="mt-1 flex items-center justify-center gap-1.5 rounded-lg border border-navy-700 bg-navy-950 hover:bg-white hover:text-navy hover:border-white h-[30px] text-[10px] min-[1660px]:text-[11px] font-bold uppercase tracking-wider text-slate-200 transition-all cursor-pointer shadow-xs shrink-0 group/all"
          >
            <span>All Categories</span>
            <ChevronRight className="h-3 w-3 text-brand group-hover/all:text-navy transition-colors" />
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
