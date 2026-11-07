"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Phone,
  Mail,
  Search,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Clock,
  Gavel,
  Flame,
  Layers,
  Wrench,
  Sparkles,
  Cpu,
  ShieldCheck,
  Truck,
  Boxes,
  Building2,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { auctionCategories } from "@/data/auctions";

function renderCategoryIcon(iconName: string) {
  const iconProps = { className: "h-4 w-4 text-brand shrink-0" };
  switch (iconName) {
    case "Flame":
      return <Flame {...iconProps} />;
    case "Layers":
      return <Layers {...iconProps} />;
    case "Wrench":
      return <Wrench {...iconProps} />;
    case "Sparkles":
      return <Sparkles {...iconProps} />;
    case "Cpu":
      return <Cpu {...iconProps} />;
    case "ShieldCheck":
      return <ShieldCheck {...iconProps} />;
    case "Truck":
      return <Truck {...iconProps} />;
    case "Boxes":
      return <Boxes {...iconProps} />;
    case "Building2":
      return <Building2 {...iconProps} />;
    default:
      return <Gavel {...iconProps} />;
  }
}

export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTaxonomyOpen, setMobileTaxonomyOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleOutsideClick = () => {
      setHoveredCategory(null);
    };
    const handleScroll = () => {
      setHoveredCategory(null);
    };
    if (hoveredCategory) {
      const timer = setTimeout(() => {
        window.addEventListener("click", handleOutsideClick);
      }, 50);
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        clearTimeout(timer);
        window.removeEventListener("click", handleOutsideClick);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [hoveredCategory]);

  const handleSearchSubmit = (e: React.FormEvent) => {
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

  const navItems = [
    { num: "01", label: "Marketplace", href: "/#marketplace" },
    { num: "02", label: "Auctions", href: "/#auctions" },
    { num: "03", label: "Exchange", href: "/#exchange" },
    { num: "04", label: "Services", href: "/#services" },
    { num: "05", label: "Knowledge", href: "/#contact-form" },
    { num: "06", label: "About", href: "/about" },
  ];

  const activeCategoryData = auctionCategories.find(
    (c) => c.id === hoveredCategory
  );

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* 1. Top Utility Bar — USA Industrial Navy-950 */}
      <div className="bg-navy-950 text-slate-300 text-xs border-b border-navy-800">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={`tel:${siteConfig.contactPhone}`}
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 text-brand" />
              <span className="font-semibold">{siteConfig.contactPhone}</span>
            </a>
            <span className="hidden text-navy-700 sm:inline">|</span>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="hidden items-center gap-1.5 transition-colors hover:text-white sm:flex"
            >
              <Mail className="h-3.5 w-3.5 text-cobalt" />
              <span>{siteConfig.contactEmail}</span>
            </a>
            <span className="hidden text-navy-700 lg:inline">|</span>
            <div className="hidden items-center gap-2 text-slate-300 lg:flex">
              {/* Crisp SVG USA Flag */}
              <svg
                className="h-3.5 w-5 rounded-[2px] shadow-2xs border border-white/20 shrink-0"
                viewBox="0 0 7410 3900"
                aria-label="USA Flag"
              >
                <rect width="7410" height="3900" fill="#b22234" />
                <path
                  d="M0,450H7410M0,1050H7410M0,1650H7410M0,2250H7410M0,2850H7410M0,3450H7410"
                  stroke="#fff"
                  strokeWidth="300"
                />
                <rect width="2964" height="2100" fill="#3c3b6e" />
                <g fill="#fff">
                  <circle cx="494" cy="350" r="100" />
                  <circle cx="988" cy="350" r="100" />
                  <circle cx="1482" cy="350" r="100" />
                  <circle cx="1976" cy="350" r="100" />
                  <circle cx="2470" cy="350" r="100" />
                  <circle cx="741" cy="700" r="100" />
                  <circle cx="1235" cy="700" r="100" />
                  <circle cx="1729" cy="700" r="100" />
                  <circle cx="2223" cy="700" r="100" />
                  <circle cx="494" cy="1050" r="100" />
                  <circle cx="988" cy="1050" r="100" />
                  <circle cx="1482" cy="1050" r="100" />
                  <circle cx="1976" cy="1050" r="100" />
                  <circle cx="2470" cy="1050" r="100" />
                </g>
              </svg>
              <span className="text-[11px] font-semibold tracking-wide text-slate-300">
                Serving North American &amp; Global Foundries
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/#contact-form"
              className="transition-colors hover:text-white font-medium"
            >
              Login
            </Link>
            <span className="text-navy-700">•</span>
            <Link
              href="/#contact-form"
              className="font-bold text-white transition-colors hover:text-brand"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Navigation — PrecastXchange Signature Navy-900 with Red Underline Bar */}
      <div className="bg-navy-900 text-white border-b-2 border-brand">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 lg:gap-5 px-4 sm:px-6 lg:px-8">
          {/* Logo on clean badge */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative flex items-center bg-white px-3 sm:px-4 py-1.5 rounded-md shadow-sm border border-white/20">
              <Image
                src="/foundry-exchange-logo.png"
                alt="Foundry Exchange Logo"
                width={220}
                height={65}
                priority
                className="h-11 sm:h-12 md:h-13 lg:h-14 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Compact Search Bar — Dark Navy theme with Red focus */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden lg:flex relative items-center w-40 xl:w-48 2xl:w-60 shrink-0 transition-all focus-within:w-56 xl:focus-within:w-64"
          >
            <Search className="absolute left-3.5 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search castings, furnaces..."
              className="w-full rounded-full border border-navy-700 bg-navy-950/80 py-1.5 pl-9 pr-3 text-xs text-white placeholder:text-slate-400 shadow-inner transition-all focus:border-brand focus:bg-navy-950 focus:outline-hidden focus:ring-1 focus:ring-brand"
            />
          </form>

          {/* Desktop Navigation Links — Precast-inspired Sheet Numbers & Red Hover Accents */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 whitespace-nowrap shrink-0">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative flex flex-col justify-center py-2 text-left transition-colors"
              >
                <span className="font-mono text-[10px] text-brand font-bold leading-none mb-0.5">
                  {item.num}
                </span>
                <span className="text-xs xl:text-sm font-bold tracking-wide text-white group-hover:text-brand transition-colors">
                  {item.label}
                </span>
                {/* Red Underline indicator */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Header Action Buttons — Red & Crisp White Dual CTAs */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0 whitespace-nowrap">
            <Link
              href="/#contact-form"
              className="rounded-md bg-brand px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-brand-hover hover:scale-[1.02] whitespace-nowrap shrink-0"
            >
              Post RFQ
            </Link>
            <Link
              href="/#contact-form"
              className="rounded-md border border-navy-600 bg-navy-800 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-all hover:bg-white hover:text-navy-900 whitespace-nowrap shrink-0"
            >
              List Products
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex p-2 text-white xl:hidden rounded-md hover:bg-navy-800 focus:outline-hidden focus:ring-2 focus:ring-brand shrink-0"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-brand" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Panel in Deep Navy */}
        {mobileMenuOpen && (
          <div className="border-t border-navy-800 bg-navy-900 px-4 py-6 shadow-2xl xl:hidden text-white">
            {/* Mobile Search */}
            <form onSubmit={handleSearchSubmit} className="relative mb-5">
              <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search castings, furnaces, scrap..."
                className="w-full rounded-md border border-navy-700 bg-navy-950 py-2.5 pl-10 pr-4 text-sm text-white focus:border-brand focus:outline-hidden"
              />
            </form>

            <div className="flex flex-col space-y-3 pb-5 border-b border-navy-800 text-base font-semibold">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-slate-200 hover:text-brand py-1.5"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-brand">{item.num}</span>
                    <span>{item.label}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-navy-600" />
                </Link>
              ))}
            </div>

            {/* Mobile Equipment Taxonomy Accordion (From BidSpotter) */}
            <div className="pt-4 pb-2 border-b border-navy-800">
              <button
                type="button"
                onClick={() => setMobileTaxonomyOpen(!mobileTaxonomyOpen)}
                className="flex w-full items-center justify-between py-2 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white"
              >
                <div className="flex items-center gap-2">
                  <Gavel className="h-3.5 w-3.5 text-brand" />
                  <span>Auction Machinery Taxonomy ({auctionCategories.length})</span>
                </div>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileTaxonomyOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileTaxonomyOpen && (
                <div className="mt-2 space-y-2 pl-4 py-2 border-l border-navy-700 text-xs">
                  {auctionCategories.map((cat) => (
                    <Link
                      key={cat.id}
                      href="/#auctions"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-1 text-slate-300 hover:text-brand"
                    >
                      <span>{cat.name}</span>
                      <span className="rounded bg-navy-800 px-1.5 py-0.5 font-mono text-[10px] text-slate-400">
                        {cat.lotCount} Lots
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile CTAs */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <Link
                href="/#contact-form"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-md bg-brand py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-hover shadow-xs"
              >
                Post RFQ
              </Link>
              <Link
                href="/#contact-form"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-md border border-navy-600 bg-navy-800 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-navy-900"
              >
                List Products
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* 3. BidSpotter-inspired Equipment & Auction Taxonomy Secondary Bar (Desktop) */}
      <div
        className="relative bg-navy-950 text-slate-300 border-b border-navy-800 hidden lg:block"
        onMouseLeave={() => setHoveredCategory(null)}
      >
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 text-xs">
          {/* Horizontal Category Nav Items */}
          <div className="flex items-center gap-1 xl:gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {auctionCategories.map((cat) => {
              const isHovered = hoveredCategory === cat.id;
              return (
                <div
                  key={cat.id}
                  onMouseEnter={() => setHoveredCategory(cat.id)}
                  className="relative"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setHoveredCategory(
                        hoveredCategory === cat.id ? null : cat.id
                      )
                    }
                    className={`inline-flex items-center gap-1.5 px-2.5 py-2 font-bold uppercase tracking-wider transition-all whitespace-nowrap text-[11px] ${
                      isHovered
                        ? "bg-navy-900 text-white border-b-2 border-brand"
                        : "text-slate-300 hover:text-white hover:bg-navy-900/60"
                    }`}
                  >
                    <span>{cat.shortName}</span>
                    <span
                      className={`text-[10px] font-mono px-1 py-0.2 rounded ${
                        isHovered
                          ? "bg-brand text-white"
                          : "bg-navy-800 text-slate-400"
                      }`}
                    >
                      {cat.lotCount}
                    </span>
                    <ChevronDown
                      className={`h-3 w-3 text-slate-400 transition-transform ${
                        isHovered ? "rotate-180 text-brand" : ""
                      }`}
                    />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right: Live Liquidation Ticker Indicator */}
          <Link
            href="/#auctions"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 shrink-0 ml-4 transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>4 Live Catalogs · 865+ Lots</span>
          </Link>
        </div>

        {/* 4. Interactive Mega-Menu Dropdown on Hover (BidSpotter Full Detail Showcase) */}
        {activeCategoryData && (
          <div
            className="absolute left-0 right-0 top-full z-50 border-b-2 border-brand bg-navy-950 text-slate-200 shadow-2xl py-6 transition-all animate-in fade-in slide-in-from-top-1 duration-150"
            onMouseEnter={() => setHoveredCategory(activeCategoryData.id)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Category Mega Header */}
              <div className="flex items-center justify-between pb-4 border-b border-navy-800 mb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 border border-navy-700">
                    {renderCategoryIcon(activeCategoryData.iconName)}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-extrabold uppercase tracking-tight text-white">
                      {activeCategoryData.name}
                    </h3>
                    <p className="text-xs text-slate-400">
                      Foundry Machinery &amp; Equipment Lots · Verified Liquidations
                    </p>
                  </div>
                </div>

                <Link
                  href="/#auctions"
                  onClick={() => setHoveredCategory(null)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand hover:text-white transition-colors"
                >
                  <span>Explore All {activeCategoryData.lotCount} Lots in {activeCategoryData.shortName}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* 3-Column Mega Menu Body */}
              <div className="grid grid-cols-12 gap-8">
                {/* Column 1: Subcategories List (6 of 12 cols) */}
                <div className="col-span-6">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    Machinery &amp; Component Sub-Classifications
                  </span>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {activeCategoryData.subcategories.map((sub, idx) => (
                      <Link
                        key={idx}
                        href="/#auctions"
                        onClick={() => setHoveredCategory(null)}
                        className="group flex items-center justify-between rounded-md p-2 hover:bg-navy-900 transition-colors"
                      >
                        <span className="text-xs font-medium text-slate-300 group-hover:text-white group-hover:translate-x-0.5 transition-transform">
                          {sub.name}
                        </span>
                        <span className="font-mono text-[10px] text-slate-400 bg-navy-900/80 px-2 py-0.5 rounded border border-navy-800 group-hover:border-brand/60 group-hover:text-brand">
                          {sub.count}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 2: Top Brands & Quality Audits (3 of 12 cols) */}
                <div className="col-span-3 border-l border-navy-800 pl-6">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    Indexed OEM Builders
                  </span>
                  <ul className="space-y-2 mb-4">
                    {activeCategoryData.topBrands.map((brand, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                        <span className="font-semibold text-white">{brand}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 rounded-lg bg-navy-900/90 p-3 border border-navy-800 text-[11px] text-slate-400">
                    <p className="leading-relaxed">
                      <strong className="text-white">Escrow Guarantee:</strong> Equipment lots undergo 3.1 mill cert and physical mechanical inspection prior to escrow clearance.
                    </p>
                  </div>
                </div>

                {/* Column 3: Featured Hot Auction Lot Preview (3 of 12 cols) */}
                <div className="col-span-3 border-l border-navy-800 pl-6">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    Featured Live Lot
                  </span>
                  <div className="rounded-xl border border-navy-800 bg-navy-900/80 p-3 shadow-md hover:border-brand transition-colors">
                    {/* Lot Thumbnail */}
                    <div className="relative flex h-28 w-full items-center justify-center rounded-lg bg-navy-950 p-2 border border-navy-800 overflow-hidden mb-2">
                      <Image
                        src={activeCategoryData.featuredLot.imageUrl}
                        alt={activeCategoryData.featuredLot.title}
                        width={140}
                        height={80}
                        className="max-h-20 w-auto object-contain"
                      />
                      <span className="absolute top-1.5 left-1.5 rounded bg-navy-900/95 px-1.5 py-0.5 text-[9px] font-mono font-bold text-white border border-navy-700">
                        {activeCategoryData.featuredLot.lotNumber}
                      </span>
                      <span className="absolute top-1.5 right-1.5 inline-flex items-center gap-1 rounded bg-red-950/90 text-brand px-1.5 py-0.5 text-[9px] font-mono font-bold border border-red-900">
                        <Clock className="h-2.5 w-2.5" />
                        {activeCategoryData.featuredLot.closingIn}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-white line-clamp-2 leading-snug">
                      {activeCategoryData.featuredLot.title}
                    </h4>

                    <div className="mt-2.5 pt-2 border-t border-navy-800 flex items-center justify-between text-xs">
                      <div>
                        <span className="text-[9px] font-mono text-slate-400 block">Current High Bid</span>
                        <span className="font-mono font-black text-white text-sm">
                          {activeCategoryData.featuredLot.currentBid}
                        </span>
                      </div>
                      <Link
                        href="/#auctions"
                        onClick={() => setHoveredCategory(null)}
                        className="rounded px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-brand text-white hover:bg-brand-hover transition-colors"
                      >
                        Bid Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
