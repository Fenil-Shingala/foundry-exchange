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
  Gavel,
  Clock,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { auctionCategories } from "@/data/auctions";

export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategoryMegaMenu, setActiveCategoryMegaMenu] = useState<
    string | null
  >(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 40;
      setIsScrolled(scrolled);
      if (scrolled) {
        setActiveCategoryMegaMenu(null);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* 1. Top Utility Bar — USA Industrial Navy-950 */}
      <div className="bg-navy-950 text-slate-300 text-xs border-b border-navy-800">
        <div className="w-full flex h-9 items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">
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
        <div className="w-full flex h-16 sm:h-20 items-center justify-between gap-3 lg:gap-5 px-4 sm:px-6 lg:px-8 xl:px-10">
          <form
            onSubmit={handleSearchSubmit}
            className="flex relative items-center w-52 sm:w-64 xl:w-72 2xl:w-80 shrink-0 transition-all focus-within:w-60 sm:focus-within:w-72"
          >
            <Search className="absolute left-3.5 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search castings & forgings..."
              className="w-full rounded-full border border-navy-700 bg-navy-950/80 py-1.5 pl-9 pr-3 text-xs text-white placeholder:text-slate-400 shadow-inner transition-all focus:border-brand focus:bg-navy-950 focus:outline-hidden focus:ring-1 focus:ring-brand"
            />
          </form>
          {/* Logo in heaer section */}
          {/* <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 lg:gap-5 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative flex items-center bg-white px-3 sm:px-4 py-1.5 rounded-md shadow-sm border border-white/20">
              <Image
                src="/foundry-logo.png"
                alt="Foundry Exchange Logo"
                width={220}
                height={65}
                priority
                className="h-11 sm:h-12 md:h-13 lg:h-14 w-auto object-contain"
              />
            </div>
          </Link>

          <form
            onSubmit={handleSearchSubmit}
            className="hidden lg:flex relative items-center w-40 xl:w-48 2xl:w-60 shrink-0 transition-all focus-within:w-56 xl:focus-within:w-64"
          >
            <Search className="absolute left-3.5 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search castings & forgings..."
              className="w-full rounded-full border border-navy-700 bg-navy-950/80 py-1.5 pl-9 pr-3 text-xs text-white placeholder:text-slate-400 shadow-inner transition-all focus:border-brand focus:bg-navy-950 focus:outline-hidden focus:ring-1 focus:ring-brand"
            />
          </form> */}

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

        {/* 3. BidSpotter-Style Category Header Navigation Bar */}
        <div
          className={`relative bg-navy-950 text-slate-300 text-xs shadow-inner select-none transition-all duration-300 ease-in-out ${
            isScrolled
              ? "max-h-0 opacity-0 overflow-hidden pointer-events-none border-t-0 -translate-y-1"
              : "max-h-16 opacity-100 overflow-visible pointer-events-auto border-t border-navy-800 translate-y-0"
          }`}
          onMouseLeave={() => setActiveCategoryMegaMenu(null)}
        >
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
            <div className="flex items-center justify-between gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-1">
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
                      className={`inline-flex items-center gap-1.5 py-1.5 px-2.5 rounded-md text-xs font-semibold tracking-wide transition-all whitespace-nowrap ${
                        isActive
                          ? "bg-navy-900 text-brand shadow-xs"
                          : "text-slate-300 hover:text-white hover:bg-navy-900/60"
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className="font-mono text-[10px] text-slate-400 opacity-80">
                        ({cat.count})
                      </span>
                      <ChevronDown
                        className={`h-3 w-3 text-slate-400 transition-transform duration-200 ${
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
                                href="/#auctions"
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
                              href="/#auctions"
                              onClick={() => setActiveCategoryMegaMenu(null)}
                              className="rounded-md border border-navy-700 bg-navy-950 px-2.5 py-1 text-xs font-semibold text-slate-300 hover:border-brand hover:text-white transition-colors"
                            >
                              {brand}
                            </Link>
                          ))}
                        </div>
                        <div className="pt-4">
                          <Link
                            href="/#auctions"
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

                        <div className="relative h-24 w-full rounded-lg bg-navy-900 flex items-center justify-center p-2 mb-3 border border-navy-800">
                          <Image
                            src={selectedCat.featuredLot.imageUrl}
                            alt={selectedCat.featuredLot.title}
                            width={140}
                            height={70}
                            className="max-h-18 w-auto object-contain"
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
                            href="/#auctions"
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
                    href="/#auctions"
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
    </header>
  );
}
