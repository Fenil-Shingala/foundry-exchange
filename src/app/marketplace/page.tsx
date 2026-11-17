import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Layers,
  Hammer,
  Factory,
  Wrench,
  Flame,
  Droplets,
  Box,
  SlidersHorizontal,
  ShieldCheck,
  Thermometer,
  ArrowRight,
  Search,
  FileText,
  BadgeCheck,
  CheckCircle,
} from "lucide-react";
import { foundryCategories } from "@/data/categories";
import { featuredListings } from "@/data/listings";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Industrial Marketplace | Foundry Exchange",
  description:
    "Explore the complete metallurgical clearinghouse. Browse verified ferrous & non-ferrous castings, open & closed die forgings, melt shop equipment, tooling matchplates, and certified raw alloys.",
};

function renderCategoryIcon(iconName: string) {
  const iconProps = { className: "h-6 w-6 transition-colors duration-200" };
  switch (iconName) {
    case "Layers":
      return <Layers {...iconProps} />;
    case "Hammer":
      return <Hammer {...iconProps} />;
    case "Factory":
      return <Factory {...iconProps} />;
    case "Wrench":
      return <Wrench {...iconProps} />;
    case "Flame":
      return <Flame {...iconProps} />;
    case "Droplets":
      return <Droplets {...iconProps} />;
    case "Box":
      return <Box {...iconProps} />;
    case "SlidersHorizontal":
      return <SlidersHorizontal {...iconProps} />;
    case "ShieldCheck":
      return <ShieldCheck {...iconProps} />;
    case "Thermometer":
      return <Thermometer {...iconProps} />;
    default:
      return <Factory {...iconProps} />;
  }
}

export default function MarketplacePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Header Banner */}
      <div className="bg-navy py-14 sm:py-20 text-white border-b-2 border-brand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Marketplace</span>
          </div>

          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
              Primary Industrial Clearinghouse
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white font-heading">
              Foundry &amp; Forging Marketplace
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-body">
              Direct access to specialized foundry sectors, primary liquid melt
              hardware, certified finish-machined castings, and circular tooling
              assets across North America and global trade corridors.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md hover:bg-brand-hover transition-colors cursor-pointer"
              >
                <span>Browse All 48+ Products</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/rfq"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-white hover:text-navy transition-all cursor-pointer"
              >
                <FileText className="h-4 w-4" />
                <span>Post Custom RFQ</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Taxonomy Sector Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[3px] w-10 bg-brand" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Industrial Taxonomy
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-brand font-heading">
              10 Specialized Foundry Divisions
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-mono">
            10 DIVISIONS • 5,800+ ACTIVE ASSETS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foundryCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/marketplace/${cat.id}`}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 border-t-2 border-t-brand bg-white p-6 shadow-xs hover:border-brand hover:shadow-xl transition-all cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white border border-brand transition-transform group-hover:scale-105">
                    {renderCategoryIcon(cat.iconName)}
                  </div>
                  {cat.productCount && (
                    <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-mono font-bold text-navy">
                      {cat.productCount.toLocaleString()}+ items
                    </span>
                  )}
                </div>

                <p className="text-[11px] font-bold uppercase tracking-wider text-brand mb-1">
                  {cat.subheading}
                </p>
                <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-brand group-hover:text-brand-hover transition-colors">
                  {cat.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {cat.description}
                </p>

                {/* Subcategories tags */}
                {cat.subcategories && (
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <p className="text-[10px] uppercase tracking-wider font-bold text-slate-500 mb-2">
                      Key Capabilities:
                    </p>
                    <ul className="space-y-1">
                      {cat.subcategories.slice(0, 3).map((sub, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-1.5 text-xs text-slate-700"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                          <span className="truncate">{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-brand group-hover:text-brand-hover">
                <span>View Full Division</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 3. Featured Verified Listings Highlight */}
      <div className="bg-white py-16 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="h-[3px] w-10 bg-brand" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand">
                  Live Available Inventory
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-brand font-heading">
                Featured Verified Machinery &amp; Castings
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand hover:text-brand-hover cursor-pointer"
            >
              <span>Explore All Listings</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredListings.slice(0, 8).map((listing) => (
              <Link
                key={listing.id}
                href={`/listings/${listing.id}`}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-brand hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="relative h-44 w-full bg-slate-100">
                  <Image
                    src={listing.imageUrl}
                    alt={listing.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 rounded-md bg-navy/90 backdrop-blur-xs px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    {listing.category}
                  </div>
                  <div className="absolute top-2 right-2 rounded-md bg-brand px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    {listing.status}
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-mono font-bold text-brand uppercase">
                      {listing.alloySpec}
                    </p>
                    <h3 className="font-heading text-base font-bold text-brand group-hover:text-brand-hover transition-colors line-clamp-2 mt-1">
                      {listing.title}
                    </h3>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-heading text-lg font-extrabold text-navy">
                      {listing.priceEstimate}
                    </span>
                    <span className="text-[11px] font-bold text-brand group-hover:underline flex items-center gap-1">
                      Inspect <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Bottom CTA Bar */}
      <div className="bg-navy py-12 text-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl font-bold uppercase text-white">
              Need To Liquidate Foundry Equipment or Post Open Capacity?
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              Submit your inventory or tooling directly to our verified industrial procurement network.
            </p>
          </div>
          <Link
            href="/rfq"
            className="shrink-0 rounded-lg bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-hover transition-colors shadow-md cursor-pointer"
          >
            Submit Listing / RFQ
          </Link>
        </div>
      </div>
    </div>
  );
}
