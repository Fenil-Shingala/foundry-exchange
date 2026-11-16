"use client";

import React, { useState, useEffect, useRef } from "react";
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
  ChevronRight,
  Gavel,
  Clock,
  Store,
  ArrowLeftRight,
  Wrench,
  BookOpen,
  Info,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { auctionCategories } from "@/data/auctions";

export interface OperationsHub {
  id: string;
  code: string;
  name: string;
  subtitle: string;
  flag: React.ReactNode;
}

export const operationsHubs: OperationsHub[] = [
  {
    id: "usa",
    code: "US",
    name: "USA",
    subtitle: "Headquarters & Foundry Operations",
    flag: (
      <svg
        className="h-3.5 w-5 rounded-[2px] shadow-2xs border border-white/20 shrink-0"
        viewBox="0 0 7410 3900"
        aria-label="USA Flag"
      >
        <rect width="7410" height="3900" fill="#c82425" />
        <path
          d="M0,450H7410M0,1050H7410M0,1650H7410M0,2250H7410M0,2850H7410M0,3450H7410"
          stroke="#ffffff"
          strokeWidth="300"
        />
        <rect width="2964" height="2100" fill="#0a3161" />
        <g fill="#ffffff">
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
    ),
  },
  {
    id: "canada",
    code: "CA",
    name: "Canada",
    subtitle: "Infrastructure & Casting Hub",
    flag: (
      <svg
        className="h-3.5 w-5 rounded-[2px] shadow-2xs border border-white/20 shrink-0"
        viewBox="0 0 1000 500"
        aria-label="Canada Flag"
      >
        <rect width="250" height="500" fill="#c82425" />
        <rect x="250" width="500" height="500" fill="#ffffff" />
        <rect x="750" width="250" height="500" fill="#c82425" />
        <path
          d="M500,80 L525,170 L595,150 L560,215 L625,230 L595,275 L620,320 L535,310 L545,345 L505,335 L505,420 L495,420 L495,335 L455,345 L465,310 L380,320 L405,275 L375,230 L440,215 L405,150 L475,170 Z"
          fill="#c82425"
        />
      </svg>
    ),
  },
  {
    id: "mexico",
    code: "MX",
    name: "Mexico",
    subtitle: "Manufacturing & Logistics Hub",
    flag: (
      <svg
        className="h-3.5 w-5 rounded-[2px] shadow-2xs border border-white/20 shrink-0"
        viewBox="0 0 900 500"
        aria-label="Mexico Flag"
      >
        <rect width="300" height="500" fill="#0a3161" />
        <rect x="300" width="300" height="500" fill="#ffffff" />
        <rect x="600" width="300" height="500" fill="#c82425" />
        <circle cx="450" cy="250" r="42" fill="#0a3161" opacity="0.9" />
        <path d="M435,258 Q450,225 465,258 Q450,248 435,258 Z" fill="#062040" />
        <path d="M430,268 Q450,282 470,268" stroke="#0a3161" strokeWidth="4" fill="none" />
      </svg>
    ),
  },
];

export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategoryMegaMenu, setActiveCategoryMegaMenu] = useState<
    string | null
  >(null);
  const [showCategoryBar, setShowCategoryBar] = useState(true);
  const [activeHubId, setActiveHubId] = useState("usa");
  const [hubDropdownOpen, setHubDropdownOpen] = useState(false);
  const hubDropdownRef = useRef<HTMLDivElement>(null);

  const activeHub =
    operationsHubs.find((h) => h.id === activeHubId) || operationsHubs[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        hubDropdownRef.current &&
        !hubDropdownRef.current.contains(event.target as Node)
      ) {
        setHubDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setHubDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Preserved previous scroll-detection code per user instruction (commented out to keep category bar permanently visible):
  /*
  useEffect(() => {
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;
    let accumulatedDown = 0;
    let accumulatedUp = 0;
    let isVisible = true;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // When at the very top of the page, keep category bar visible
      if (currentScrollY <= 30) {
        accumulatedDown = 0;
        accumulatedUp = 0;
        if (!isVisible) {
          isVisible = true;
          setShowCategoryBar(true);
        }
        return;
      }

      if (delta > 0) {
        // Scrolling DOWN: accumulate downward distance and reset upward distance
        accumulatedDown += delta;
        accumulatedUp = 0;

        // Hide category bar cleanly once user scrolls down by 30px
        if (accumulatedDown >= 30 && isVisible) {
          isVisible = false;
          setShowCategoryBar(false);
          setActiveCategoryMegaMenu(null);
        }
      } else if (delta < 0) {
        // Scrolling UP: accumulate upward distance and reset downward distance
        accumulatedUp += Math.abs(delta);
        accumulatedDown = 0;

        // Reveal category bar when user scrolls up by 25px
        if (accumulatedUp >= 25 && !isVisible) {
          isVisible = true;
          setShowCategoryBar(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  */

  const handleSearchSubmit = (e: React.FormEvent) => {
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

  const navItems = [
    { num: "01", label: "Marketplace", href: "/marketplace", icon: Store },
    { num: "02", label: "Auctions", href: "/auctions", icon: Gavel },
    { num: "03", label: "Exchange", href: "/exchange", icon: ArrowLeftRight },
    { num: "04", label: "Services", href: "/services", icon: Wrench },
    { num: "05", label: "Knowledge", href: "/knowledge", icon: BookOpen },
    { num: "06", label: "About", href: "/about", icon: Info },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* 1. Top Utility Bar — USA Industrial Navy-950 */}
      <div className="bg-navy-950 text-slate-300 text-[11px] border-b border-navy-800">
        <div className="w-full flex h-8 items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={`tel:${siteConfig.contactPhone}`}
              className="flex items-center gap-1.5 transition-colors hover:text-white cursor-pointer"
            >
              <Phone className="h-3.5 w-3.5 text-brand" />
              <span className="font-semibold">{siteConfig.contactPhone}</span>
            </a>
            <span className="hidden text-navy-700 sm:inline">|</span>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="hidden items-center gap-1.5 transition-colors hover:text-white sm:flex cursor-pointer"
            >
              <Mail className="h-3.5 w-3.5 text-cobalt" />
              <span>{siteConfig.contactEmail}</span>
            </a>
            <span className="hidden text-navy-700 lg:inline">|</span>

            {/* Global Operations Hub Dropdown (USA, Canada, Mexico) matching megafoundries.com */}
            <div className="relative hidden lg:block" ref={hubDropdownRef}>
              <button
                type="button"
                onClick={() => setHubDropdownOpen(!hubDropdownOpen)}
                className="group flex items-center gap-2 rounded-md py-1 px-2.5 text-slate-300 transition-all hover:bg-navy-900 hover:text-white border border-navy-800 hover:border-navy-700 cursor-pointer"
                aria-expanded={hubDropdownOpen}
                aria-haspopup="true"
              >
                <div className="flex items-center gap-1.5">
                  {activeHub.flag}
                  <span className="font-mono text-[11px] font-bold text-white group-hover:text-brand transition-colors">
                    {activeHub.code}
                  </span>
                  <span className="text-[11px] font-bold text-white group-hover:text-brand transition-colors">
                    {activeHub.name}
                  </span>
                </div>
                <span className="text-[11px] font-semibold tracking-wide text-slate-300">
                  • Serving North American &amp; Global Foundries
                </span>
                <span className="text-[9px] font-mono font-bold uppercase px-1.5 py-0.2 rounded bg-navy-900 text-brand border border-navy-700 shadow-2xs">
                  3 Hubs
                </span>
                <ChevronDown
                  className={`h-3 w-3 text-slate-400 transition-transform duration-200 group-hover:text-white ${
                    hubDropdownOpen ? "rotate-180 text-brand" : ""
                  }`}
                />
              </button>

              {/* Operations Hub Dropdown Popover */}
              {hubDropdownOpen && (
                <div className="absolute left-0 top-full mt-1.5 w-84 rounded-xl border border-navy-700 bg-navy-950 p-2.5 shadow-2xl z-50">
                  {/* Popover Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-navy-800 px-1">
                    <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-slate-400">
                      Global Operations Hub
                    </span>
                    <span className="text-[9px] font-mono font-bold uppercase text-brand bg-brand/10 px-1.5 py-0.5 rounded border border-brand/20">
                      3 Active Hubs
                    </span>
                  </div>

                  {/* Hub Options List */}
                  <div className="mt-2 space-y-1">
                    {operationsHubs.map((hub) => {
                      const isActive = hub.id === activeHubId;
                      return (
                        <button
                          key={hub.id}
                          type="button"
                          onClick={() => {
                            setActiveHubId(hub.id);
                            setHubDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between p-2 rounded-lg border text-left transition-all group/hub cursor-pointer ${
                            isActive
                              ? "bg-navy-900/95 border-brand/60 shadow-xs"
                              : "bg-navy-950 border-transparent hover:border-navy-700 hover:bg-navy-900/50"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-navy-700 bg-navy-900 font-mono text-xs font-bold text-white shadow-2xs group-hover/hub:border-brand/40 transition-colors">
                              {hub.code}
                            </span>
                            <div>
                              <div className="flex items-center gap-1.5">
                                {hub.flag}
                                <span className="text-xs font-bold text-white group-hover/hub:text-brand transition-colors">
                                  {hub.name}
                                </span>
                              </div>
                              <span className="text-[10px] text-slate-400 block leading-tight mt-0.5">
                                {hub.subtitle}
                              </span>
                            </div>
                          </div>

                          {isActive ? (
                            <span className="rounded bg-brand px-1.5 py-0.5 text-[8px] font-mono font-bold uppercase tracking-wider text-white shadow-xs">
                              Active
                            </span>
                          ) : (
                            <ChevronRight className="h-4 w-4 text-slate-500 group-hover/hub:text-white group-hover/hub:translate-x-0.5 transition-all" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="transition-colors hover:text-white font-medium cursor-pointer"
            >
              Login
            </Link>
            <span className="text-navy-700">•</span>
            <Link
              href="/login"
              className="font-bold text-white transition-colors hover:text-brand cursor-pointer"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Navigation — PrecastXchange Signature Navy-900 with Red Underline Bar */}
      <div className="bg-navy-900 text-white border-b-2 border-brand">
        {/* Main Header Bar: Search in Center, Nav on Right */}
        <div className="w-full flex h-13 sm:h-14 items-center justify-between gap-4 lg:gap-6 px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Left Zone: Brand Logo (Preserved as placeholder if needed) */}
          {/* <Link href="/" className="flex items-center shrink-0">
            <div className="relative flex items-center bg-white px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-xl shadow-md border border-white/40 transition-transform hover:scale-105">
              <Image
                src="/foundry-logo.png"
                alt="Foundry Exchange Logo"
                width={260}
                height={78}
                priority
                className="h-10 sm:h-12 md:h-13 lg:h-14 w-auto object-contain"
              />
            </div>
          </Link> */}

          {/* Center Zone: Prominent Industrial Search Form */}
          <div className="flex-1 max-w-xl mx-2 lg:mx-6 hidden md:flex items-center">
            <form
              onSubmit={handleSearchSubmit}
              className="relative w-full flex items-center"
            >
              <Search className="absolute left-3.5 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search castings, forgings, tooling, alloys, specifications..."
                className="w-full rounded-full border border-navy-700 bg-navy-950/90 py-1.5 pl-9 pr-4 text-xs text-white placeholder:text-slate-400 shadow-inner transition-all focus:border-brand focus:bg-navy-950 focus:outline-hidden focus:ring-1 focus:ring-brand"
              />
            </form>
          </div>

          {/* Right Zone: Desktop Navigation Links & Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:gap-6 shrink-0">
            <nav className="hidden xl:flex items-center gap-4 2xl:gap-6 whitespace-nowrap shrink-0">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group relative flex flex-col justify-center py-1 text-left transition-colors cursor-pointer"
                >
                  <span className="font-mono text-[9px] text-brand font-bold leading-none mb-0.5 group-hover:text-white transition-colors">
                    {item.num}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <item.icon className="h-3.5 w-3.5 text-slate-300 group-hover:text-brand transition-colors shrink-0" />
                    <span className="text-xs xl:text-sm font-bold tracking-wide text-white group-hover:text-brand transition-colors">
                      {item.label}
                    </span>
                  </div>
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand transition-all duration-200 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex p-2 text-white xl:hidden rounded-md hover:bg-navy-800 focus:outline-hidden focus:ring-2 focus:ring-brand shrink-0 cursor-pointer"
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
        </div>

        {/* 3. BidSpotter-Style Category Header Navigation Bar */}
        <div
          className={`relative bg-navy-950 text-slate-300 text-xs shadow-inner select-none transition-all duration-300 ease-in-out ${
            showCategoryBar
              ? "max-h-16 opacity-100 overflow-visible pointer-events-auto border-t border-navy-800 translate-y-0"
              : "max-h-0 opacity-0 overflow-hidden pointer-events-none border-t-0 -translate-y-1"
          }`}
          onMouseLeave={() => setActiveCategoryMegaMenu(null)}
        >
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
            <div className="flex items-center justify-between gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5">
              {auctionCategories.map((cat) => {
                const isActive = activeCategoryMegaMenu === cat.id;
                return (
                  <div key={cat.id} className="relative shrink-0">
                    <button
                      type="button"
                      onMouseEnter={() => setActiveCategoryMegaMenu(cat.id)}
                      onClick={() =>
                        setActiveCategoryMegaMenu(isActive ? null : cat.id)
                      }
                      className={`inline-flex items-center gap-1.5 py-1 px-2.5 rounded-md text-[11.5px] font-semibold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                        isActive
                          ? "bg-navy-900 text-brand shadow-xs"
                          : "text-slate-300 hover:text-white hover:bg-navy-900/60"
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className="font-mono text-[9.5px] text-slate-400 opacity-80">
                        ({cat.count})
                      </span>
                      <ChevronDown
                        className={`h-2.5 w-2.5 text-slate-400 transition-transform duration-200 ${
                          isActive ? "rotate-180 text-brand" : ""
                        }`}
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* BidSpotter-Style Full Mega-Menu Dropdown */}
          {activeCategoryMegaMenu && (
            <div
              className="absolute top-full left-0 w-full bg-navy-900/98 backdrop-blur-md border-b-2 border-brand shadow-2xl z-50 text-white"
              onMouseEnter={() =>
                setActiveCategoryMegaMenu(activeCategoryMegaMenu)
              }
              onMouseLeave={() => setActiveCategoryMegaMenu(null)}
            >
              {(() => {
                const selectedCat = auctionCategories.find(
                  (c) => c.id === activeCategoryMegaMenu,
                );
                if (!selectedCat) return null;

                return (
                  <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                      {/* Column 1: Subcategories & Active Lots (5 cols) */}
                      <div className="md:col-span-5 space-y-3">
                        <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                          <span className="font-heading text-xs font-bold uppercase tracking-wider text-brand">
                            {selectedCat.name} Subcategories
                          </span>
                          <span className="text-[11px] font-mono text-slate-400">
                            {selectedCat.count} Active Auction Lots
                          </span>
                        </div>
                        <ul className="space-y-1.5">
                          {selectedCat.subcategories.map((sub, sIdx) => (
                            <li key={sIdx}>
                              <Link
                                href="/auctions"
                                onClick={() => setActiveCategoryMegaMenu(null)}
                                className="group flex items-center justify-between py-1 px-2 rounded hover:bg-navy-800 text-xs text-slate-300 hover:text-white transition-colors"
                              >
                                <span className="group-hover:translate-x-0.5 transition-transform">
                                  {sub.name}
                                </span>
                                <span className="font-mono text-[11px] text-slate-400 bg-navy-950 px-1.5 py-0.5 rounded">
                                  {sub.count} lots
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 2: Top Brands & Specs (3 cols) */}
                      <div className="md:col-span-3 space-y-3">
                        <div className="border-b border-navy-800 pb-2">
                          <span className="font-heading text-xs font-bold uppercase tracking-wider text-slate-300">
                            Premier OEM Brands
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {selectedCat.popularBrands.map((brand, bIdx) => (
                            <Link
                              key={bIdx}
                              href="/auctions"
                              onClick={() => setActiveCategoryMegaMenu(null)}
                              className="rounded-md border border-navy-700 bg-navy-950 px-2.5 py-1 text-xs font-semibold text-slate-300 hover:border-brand hover:text-white transition-colors"
                            >
                              {brand}
                            </Link>
                          ))}
                        </div>
                        <div className="pt-4">
                          <Link
                            href="/auctions"
                            onClick={() => setActiveCategoryMegaMenu(null)}
                            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand hover:text-brand-light transition-colors"
                          >
                            <span>Explore All {selectedCat.count} Lots</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>

                      {/* Column 3: Featured Lot Preview (4 cols) */}
                      <div className="md:col-span-4 bg-navy-950/80 rounded-xl border border-navy-800 p-4">
                        <div className="flex items-center justify-between text-[11px] mb-2">
                          <span className="font-mono font-bold text-brand uppercase">
                            {selectedCat.featuredLot.lotNumber}
                          </span>
                          <span className="flex items-center gap-1 text-slate-400">
                            <Clock className="h-3 w-3 text-brand animate-pulse" />
                            <span className="font-mono text-white">
                              {selectedCat.featuredLot.endsIn} left
                            </span>
                          </span>
                        </div>

                        <div className="relative h-44 sm:h-48 w-full rounded-lg bg-navy-900 overflow-hidden mb-3 border border-navy-800">
                          <Image
                            src={selectedCat.featuredLot.imageUrl}
                            alt={selectedCat.featuredLot.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 360px"
                            className="object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>

                        <h4 className="text-xs font-bold text-white line-clamp-2 leading-snug mb-2">
                          {selectedCat.featuredLot.title}
                        </h4>

                        <div className="flex items-baseline justify-between pt-2 border-t border-navy-800">
                          <div>
                            <span className="text-[10px] uppercase font-bold text-slate-400">
                              Current Bid
                            </span>
                            <p className="font-mono font-black text-sm text-white">
                              {selectedCat.featuredLot.currentBid}
                            </p>
                          </div>

                          <Link
                            href="/auctions"
                            onClick={() => setActiveCategoryMegaMenu(null)}
                            className="inline-flex items-center gap-1 rounded bg-brand px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white hover:bg-brand-hover shadow-2xs"
                          >
                            <Gavel className="h-3 w-3" />
                            <span>Bid Now</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
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
                    <span className="font-mono text-xs font-bold text-brand">
                      {item.num}
                    </span>
                    <item.icon className="h-4 w-4 text-slate-300" />
                    <span>{item.label}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-navy-600" />
                </Link>
              ))}
            </div>

            {/* Mobile Auction Categories List */}
            <div className="py-4 border-b border-navy-800">
              <p className="text-xs font-bold uppercase tracking-wider text-brand mb-2">
                Auction Categories
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {auctionCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    href="/auctions"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1 px-2 rounded bg-navy-950 text-slate-300 hover:text-white hover:bg-navy-800 flex items-center justify-between"
                  >
                    <span className="truncate">{cat.shortName}</span>
                    <span className="font-mono text-[10px] text-slate-400">
                      ({cat.count})
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Global Operations Hubs (USA, Canada, Mexico) */}
            <div className="py-4 border-b border-navy-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand">
                  Global Operations Hub
                </span>
                <span className="font-mono text-[10px] text-slate-400 uppercase">
                  3 Active Hubs
                </span>
              </div>
              <div className="space-y-1.5">
                {operationsHubs.map((hub) => {
                  const isActive = activeHubId === hub.id;
                  return (
                    <button
                      key={hub.id}
                      type="button"
                      onClick={() => {
                        setActiveHubId(hub.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between p-2 rounded-lg border text-left transition-all ${
                        isActive
                          ? "border-brand bg-navy-950 text-white"
                          : "border-navy-800 bg-navy-950/60 text-slate-300 hover:bg-navy-800 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-7 w-7 items-center justify-center rounded bg-navy-900 border border-navy-700 font-mono text-[11px] font-bold text-white">
                          {hub.code}
                        </span>
                        <div>
                          <div className="flex items-center gap-1.5">
                            {hub.flag}
                            <span className="text-xs font-bold text-white">
                              {hub.name}
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-400 block">
                            {hub.subtitle}
                          </span>
                        </div>
                      </div>
                      {isActive && (
                        <span className="rounded bg-brand px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white">
                          Active
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile CTAs */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <Link
                href="/rfq"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-md bg-brand py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-hover shadow-xs"
              >
                Post RFQ
              </Link>
              <Link
                href="/marketplace"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-md border border-navy-600 bg-navy-800 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-navy-900"
              >
                List Products
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
