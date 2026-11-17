"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, BadgeCheck, ArrowRight, Layers } from "lucide-react";
import { featuredListings, ProductListing } from "@/data/listings";

export default function FeaturedListings() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredListings =
    activeFilter === "All"
      ? featuredListings
      : featuredListings.filter((l) => l.status === activeFilter);

  // Show only 9 products in 2 rows + 1 "View All" card (10 cards total = exactly 2 rows on desktop)
  const displayedListings = filteredListings.slice(0, 9);

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
        return "bg-blue-50 text-navy-900 border-blue-200";
      case "Made to Order":
        return "bg-blue-50 text-cobalt border-blue-200";
      case "Surplus":
        return "bg-slate-100 text-navy border-slate-300";
      case "Auction":
        return "bg-red-50 text-brand border-brand/30";
      default:
        return "bg-slate-100 text-navy border-slate-200";
    }
  };

  const parseListingPrice = (priceEstimate: string, status: ProductListing["status"]) => {
    const defaultLabel =
      status === "Made to Order"
        ? "Target"
        : status === "Auction"
        ? "Bid"
        : "Price";

    if (priceEstimate.includes("/")) {
      const parts = priceEstimate.split("/");
      return {
        label: defaultLabel,
        amount: parts[0].trim(),
        unit: `/${parts[1].trim()}`,
      };
    }
    if (priceEstimate.startsWith("Bidding Starts ")) {
      return {
        label: "Auction",
        amount: priceEstimate.replace("Bidding Starts ", "").trim(),
        unit: "Opening",
      };
    }
    if (priceEstimate.toLowerCase().includes("rfq")) {
      return {
        label: "Inquiry",
        amount: "RFQ",
        unit: "Lot Basis",
      };
    }
    return {
      label: defaultLabel,
      amount: priceEstimate.trim(),
      unit: null,
    };
  };

  return (
    <section
      id="marketplace"
      className="bg-white py-20 border-b border-slate-200"
    >
      <div className="w-full px-3 sm:px-6 lg:px-4 xl:px-5">
        {/* Section Header with Precast Accent */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-8 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[3px] w-10 bg-brand" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Spotlight Products &amp; Assets
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-brand font-heading">
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
                className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 cursor-pointer ${
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

        {/* Product Cards Grid — 5 columns on large screens for balanced 2x5 layout (9 products + 1 View All card) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-cols-5-desktop gap-3 xl:gap-3.5">
          {displayedListings.map((listing) => {
            const priceData = parseListingPrice(listing.priceEstimate, listing.status);

            return (
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
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.srcset = "";
                      target.src = "/images/fallback-product.jpg";
                    }}
                  />

                  {/* Status Badge */}
                  <span
                    className={`absolute top-2.5 left-2.5 rounded border px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-wider shadow-2xs ${getStatusBadgeStyle(
                      listing.status,
                    )}`}
                  >
                    {listing.status}
                  </span>

                  {/* Category Pill */}
                  <span className="absolute bottom-2.5 right-2.5 rounded bg-navy-900/90 backdrop-blur-xs px-2 py-0.5 text-[9.5px] font-semibold uppercase tracking-wider text-white">
                    {listing.category}
                  </span>
                </Link>

                {/* Product Info */}
                <div className="p-3.5 xl:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mb-1">
                      <MapPin className="h-3 w-3 text-brand shrink-0" />
                      <span className="truncate">{listing.location}</span>
                    </div>

                    <Link href={`/listings/${listing.id}`} className="block cursor-pointer">
                      <h3 className="font-heading text-sm xl:text-[15px] font-bold uppercase tracking-tight text-brand group-hover:text-brand-hover transition-colors line-clamp-2 min-h-[2.4rem] leading-snug">
                        {listing.title}
                      </h3>
                    </Link>

                    <p className="mt-1 text-xs font-semibold text-slate-700 line-clamp-1">
                      {listing.alloySpec}
                    </p>

                    {/* Standard Spec Tags (Monospace) */}
                    <div className="mt-2.5 flex flex-wrap gap-1">
                      {listing.standards.slice(0, 2).map((std) => (
                        <span
                          key={std}
                          title={std}
                          className="inline-block max-w-[125px] truncate rounded-md bg-navy-50 px-1.5 py-0.5 text-[10px] font-mono font-bold text-navy border border-navy-200/80 whitespace-nowrap"
                        >
                          {std}
                        </span>
                      ))}
                      {listing.standards.length > 2 && (
                        <span className="text-[10px] font-mono font-bold text-brand bg-red-50 border border-brand/20 px-1.5 py-0.5 rounded-md self-center shrink-0">
                          +{listing.standards.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-slate-100">
                    {/* Vendor Verification */}
                    <div className="flex items-center justify-between gap-1 text-slate-500 mb-2">
                      <span
                        className="truncate min-w-0 font-medium text-[11px] text-slate-600"
                        title={listing.vendorName}
                      >
                        {listing.vendorName}
                      </span>
                      {listing.vendorVerified && (
                        <span className="shrink-0 inline-flex items-center gap-0.5 text-[9.5px] font-bold text-brand bg-red-50 px-1.5 py-0.5 rounded border border-brand/20 whitespace-nowrap">
                          <BadgeCheck className="h-3 w-3 text-brand shrink-0" />
                          Verified
                        </span>
                      )}
                    </div>

                    {/* Price & Action */}
                    <div className="flex items-center justify-between gap-1">
                      <div className="min-w-0 flex-1">
                        <span className="block text-[9px] uppercase font-bold text-slate-400 tracking-wider leading-none mb-1 truncate">
                          {priceData.label}
                        </span>
                        <div className="flex items-baseline gap-0.5 whitespace-nowrap overflow-hidden">
                          <span className="font-heading text-[13.5px] 2xl:text-[15px] font-black text-brand tracking-tight leading-none whitespace-nowrap">
                            {priceData.amount}
                          </span>
                          {priceData.unit && (
                            <span className="text-[10px] 2xl:text-[10.5px] font-semibold text-slate-500 whitespace-nowrap leading-none">
                              {priceData.unit}
                            </span>
                          )}
                        </div>
                      </div>

                      <Link
                        href={`/listings/${listing.id}`}
                        className="shrink-0 rounded bg-brand px-2 py-1 text-[10.5px] font-bold uppercase tracking-wider text-white hover:bg-brand-hover shadow-2xs hover:scale-105 transition-all text-center whitespace-nowrap cursor-pointer"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}

          {/* 10th Card: View All Products Card */}
          <article className="group flex flex-col justify-between rounded-xl border-2 border-brand/40 border-t-4 border-t-brand bg-white overflow-hidden shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-xl">
            {/* Visual Box */}
            <Link
              href="/products"
              className="relative aspect-4/3 w-full bg-navy-950 flex flex-col items-center justify-center p-5 text-center border-b border-navy-800 block cursor-pointer group-hover:bg-navy-900 transition-colors"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white border border-brand shadow-md mb-2 transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-brand group-hover:border-brand">
                <Layers className="h-6 w-6 transition-colors duration-200" />
              </div>
              <span className="font-heading text-base sm:text-lg font-bold uppercase tracking-tight text-white group-hover:text-brand transition-colors">
                Explore Full Catalog
              </span>
              <span className="mt-1 text-xs font-mono font-bold text-slate-300">
                +{featuredListings.length - displayedListings.length} More Certified Lots
              </span>

              {/* Status Badge */}
              <span className="absolute top-2.5 left-2.5 rounded bg-brand text-white px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider shadow-2xs">
                Full Catalog
              </span>

              {/* Category Pill */}
              <span className="absolute bottom-2.5 right-2.5 rounded bg-navy-900/90 border border-navy-700 px-2 py-0.5 text-[9.5px] font-mono font-bold uppercase text-slate-300">
                {featuredListings.length} Total Lots
              </span>
            </Link>

            {/* Card Info */}
            <div className="p-3.5 xl:p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mb-1">
                  <MapPin className="h-3 w-3 text-brand shrink-0" />
                  <span className="truncate">Global Foundries &amp; Warehouses</span>
                </div>

                <Link href="/products" className="block">
                  <h3 className="font-heading text-sm xl:text-[15px] font-bold uppercase tracking-tight text-brand group-hover:text-brand-hover transition-colors line-clamp-2 min-h-[2.4rem] leading-snug">
                    View All Metal Castings, Forgings &amp; Melt Assets
                  </h3>
                </Link>

                <p className="mt-1 text-xs font-semibold text-slate-700 line-clamp-1">
                  Complete Certified Industrial Inventory
                </p>

                {/* Standard Spec Tags */}
                <div className="mt-2.5 flex flex-wrap gap-1">
                  <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-mono font-medium text-navy border border-slate-200/60">
                    ASTM / DIN / ISO
                  </span>
                  <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-mono font-medium text-navy border border-slate-200/60">
                    Ready Stock
                  </span>
                  <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-mono font-medium text-navy border border-slate-200/60">
                    Made to Order
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-2.5 border-t border-slate-100">
                {/* Verification */}
                <div className="flex items-center justify-between gap-1 text-slate-500 mb-2">
                  <span className="truncate min-w-0 font-medium text-[11px] text-slate-600">
                    100% Verified Foundries
                  </span>
                  <span className="shrink-0 inline-flex items-center gap-0.5 text-[9.5px] font-bold text-brand bg-red-50 px-1.5 py-0.5 rounded border border-brand/20 whitespace-nowrap">
                    <BadgeCheck className="h-3 w-3 text-brand shrink-0" />
                    Verified
                  </span>
                </div>

                {/* Action Link Button */}
                <Link
                  href="/products"
                  className="w-full rounded bg-brand py-2 px-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-hover shadow-2xs hover:scale-[1.02] transition-all flex items-center justify-center gap-1.5 text-center cursor-pointer"
                >
                  <span>View All Products</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </article>
        </div>

        {/* View All Bar */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-brand bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-brand shadow-xs hover:bg-brand hover:text-white transition-all cursor-pointer"
          >
            <span>View All Marketplace Listings ({featuredListings.length})</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
