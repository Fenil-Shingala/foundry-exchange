"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, BadgeCheck, ArrowRight } from "lucide-react";
import { featuredListings, ProductListing } from "@/data/listings";

export default function FeaturedListings() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredListings =
    activeFilter === "All"
      ? featuredListings
      : featuredListings.filter((l) => l.status === activeFilter);

  const filterTabs = [
    { name: "All", count: featuredListings.length },
    {
      name: "Ready Stock",
      count: featuredListings.filter((l) => l.status === "Ready Stock").length,
    },
    {
      name: "Made to Order",
      count: featuredListings.filter((l) => l.status === "Made to Order").length,
    },
    {
      name: "Surplus",
      count: featuredListings.filter((l) => l.status === "Surplus").length,
    },
  ];

  const getStatusBadgeStyle = (status: ProductListing["status"]) => {
    switch (status) {
      case "Ready Stock":
        return "bg-emerald-50 text-emerald-800 border-emerald-200";
      case "Made to Order":
        return "bg-blue-50 text-cobalt border-blue-200";
      case "Surplus":
        return "bg-indigo-50 text-indigo-900 border-indigo-200";
      case "Auction":
        return "bg-purple-50 text-purple-800 border-purple-200";
      default:
        return "bg-slate-100 text-navy border-slate-200";
    }
  };

  return (
    <section
      id="marketplace"
      className="bg-white py-20 border-b border-slate-200"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Header with Precast Accent */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-8 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[3px] w-10 bg-brand" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Spotlight Products &amp; Assets
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-navy font-heading">
              Featured Marketplace Listings
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Verified casting lots, precision forgings, plant machinery, pattern tooling, and
              metallurgical alloys ready for order or inquiry.
            </p>
          </div>

          {/* Filter Tabs — Single-line Segmented Control with Live Counts */}
          <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 p-1 shrink-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden shadow-2xs">
            {filterTabs.map((tab) => (
              <button
                key={tab.name}
                type="button"
                onClick={() => setActiveFilter(tab.name)}
                className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${
                  activeFilter === tab.name
                    ? "bg-brand text-white shadow-xs"
                    : "text-slate-600 hover:text-navy hover:bg-white"
                }`}
              >
                <span>{tab.name}</span>
                <span
                  className={`inline-flex items-center justify-center px-1.5 py-0.5 rounded text-[10px] font-mono font-bold leading-none ${
                    activeFilter === tab.name
                      ? "bg-white/25 text-white"
                      : "bg-slate-200/80 text-slate-500"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid — 5 columns on large screens for balanced 2x5 layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-cols-5-desktop gap-5 xl:gap-6">
          {filteredListings.map((listing) => (
            <article
              key={listing.id}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 border-t-2 border-t-transparent hover:border-t-brand bg-white overflow-hidden shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-xl"
            >
              {/* Product Image Box */}
              <Link
                href={`/listings/${listing.id}`}
                className="relative aspect-4/3 w-full bg-navy-950 overflow-hidden border-b border-slate-100 block cursor-pointer"
              >
                <Image
                  src={listing.imageUrl}
                  alt={listing.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Status Badge */}
                <span
                  className={`absolute top-3 left-3 rounded border px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider shadow-2xs ${getStatusBadgeStyle(
                    listing.status,
                  )}`}
                >
                  {listing.status}
                </span>

                {/* Category Pill */}
                <span className="absolute bottom-3 right-3 rounded bg-navy-900/90 backdrop-blur-xs px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                  {listing.category}
                </span>
              </Link>

              {/* Product Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mb-1">
                    <MapPin className="h-3 w-3 text-brand shrink-0" />
                    <span className="truncate">{listing.location}</span>
                  </div>

                  <Link href={`/listings/${listing.id}`} className="block">
                    <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-navy group-hover:text-brand transition-colors line-clamp-2">
                      {listing.title}
                    </h3>
                  </Link>

                  <p className="mt-1.5 text-xs font-semibold text-slate-700 line-clamp-1">
                    {listing.alloySpec}
                  </p>

                  {/* Standard Spec Tags (Monospace) */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {listing.standards.slice(0, 2).map((std) => (
                      <span
                        key={std}
                        className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-mono font-medium text-navy border border-slate-200/60"
                      >
                        {std}
                      </span>
                    ))}
                    {listing.standards.length > 2 && (
                      <span className="text-[10px] font-mono font-medium text-slate-400 self-center">
                        +{listing.standards.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100">
                  {/* Vendor Verification */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="truncate max-w-[150px] font-medium text-[11px]">
                      {listing.vendorName}
                    </span>
                    {listing.vendorVerified && (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-brand bg-red-50 px-1.5 py-0.5 rounded border border-brand/20">
                        <BadgeCheck className="h-3 w-3 text-brand" />
                        Verified
                      </span>
                    )}
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-slate-400">
                        {listing.status === "Made to Order"
                          ? "Target"
                          : "Price"}
                      </span>
                      <span className="font-heading text-base font-extrabold text-brand">
                        {listing.priceEstimate}
                      </span>
                    </div>

                    <Link
                      href={`/listings/${listing.id}`}
                      className="rounded-md bg-brand px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-hover shadow-2xs hover:scale-105 transition-all"
                    >
                      View Lot
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Bar */}
        <div className="mt-12 text-center">
          <Link
            href="/#contact-form"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-brand bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-brand shadow-xs hover:bg-brand hover:text-white transition-all"
          >
            <span>View All Marketplace Listings</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
