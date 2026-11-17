"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  BadgeCheck,
  Search,
  Filter,
  X,
  ArrowLeft,
  SlidersHorizontal,
  ChevronRight,
  RotateCcw,
} from "lucide-react";
import { featuredListings, ProductListing } from "@/data/listings";

export default function AllProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("default");

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    featuredListings.forEach((l) => set.add(l.category));
    return ["All", ...Array.from(set)];
  }, []);

  // Filter listings based on search, status, and category
  const filteredListings = useMemo(() => {
    return featuredListings.filter((item) => {
      // Status filter
      if (selectedStatus !== "All" && item.status !== selectedStatus) {
        return false;
      }

      // Category filter
      if (selectedCategory !== "All" && item.category !== selectedCategory) {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesAlloy = item.alloySpec.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        const matchesLocation = item.location.toLowerCase().includes(query);
        const matchesVendor = item.vendorName.toLowerCase().includes(query);
        const matchesStandards = item.standards.some((s) =>
          s.toLowerCase().includes(query)
        );

        if (
          !matchesTitle &&
          !matchesAlloy &&
          !matchesCategory &&
          !matchesLocation &&
          !matchesVendor &&
          !matchesStandards
        ) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedStatus, selectedCategory]);

  // Sort listings
  const sortedListings = useMemo(() => {
    const list = [...filteredListings];
    if (sortBy === "title-asc") {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "title-desc") {
      list.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortBy === "category") {
      list.sort((a, b) => a.category.localeCompare(b.category));
    }
    return list;
  }, [filteredListings, sortBy]);

  const statusCounts = useMemo(() => {
    return {
      All: featuredListings.length,
      "Ready Stock": featuredListings.filter((l) => l.status === "Ready Stock").length,
      "Made to Order": featuredListings.filter((l) => l.status === "Made to Order").length,
      Surplus: featuredListings.filter((l) => l.status === "Surplus").length,
      Auction: featuredListings.filter((l) => l.status === "Auction").length,
    };
  }, []);

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

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedStatus("All");
    setSelectedCategory("All");
    setSortBy("default");
  };

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedStatus !== "All" ||
    selectedCategory !== "All" ||
    sortBy !== "default";

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 antialiased font-sans pb-24 border-b border-slate-200">
      {/* Top Header & Breadcrumb Ribbon */}
      <div className="bg-navy-950 text-white border-b border-navy-800 py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4 flex-wrap">
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:text-brand transition-colors text-slate-300"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <span className="text-white font-semibold">Marketplace Products</span>
            <span className="text-slate-600">•</span>
            <span className="text-brand font-mono">{featuredListings.length} Total Verified Lots</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="h-[3px] w-8 bg-brand" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand font-mono">
                  Certified Industrial Inventory
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white font-heading">
                All Marketplace Products &amp; Lots
              </h1>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                Explore our complete inventory of industrial castings, precision forgings, induction
                furnaces, pattern tooling, and certified metallurgical melt stocks with EN 10204 3.1
                spectrometry traceability.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/rfq"
                className="rounded-lg bg-brand hover:bg-brand-hover text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Request Custom Lot RFQ</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar Ribbon */}
      <div className="bg-white border-b border-slate-200 shadow-xs py-3.5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            {/* Search Input Box */}
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by alloy, ASTM spec, title, vendor, location..."
                className="w-full rounded-lg border border-slate-300 bg-slate-50 pl-10 pr-9 py-2 text-xs sm:text-sm text-navy placeholder:text-slate-400 focus:bg-white focus:border-brand focus:outline-hidden transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-navy cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Controls: Category Selector & Sorter */}
            <div className="flex items-center gap-2.5 flex-wrap">
              {/* Category Dropdown */}
              <div className="flex items-center gap-1.5 text-xs">
                <Filter className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-navy focus:border-brand focus:outline-hidden cursor-pointer shadow-2xs"
                >
                  <option value="All">All Categories ({categories.length - 1})</option>
                  {categories
                    .filter((c) => c !== "All")
                    .map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                </select>
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-1.5 text-xs">
                <SlidersHorizontal className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-navy focus:border-brand focus:outline-hidden cursor-pointer shadow-2xs"
                >
                  <option value="default">Default Order</option>
                  <option value="title-asc">Title: A to Z</option>
                  <option value="title-desc">Title: Z to A</option>
                  <option value="category">Group by Category</option>
                </select>
              </div>

              {/* Reset Filters Button */}
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1 rounded-lg border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-bold text-brand hover:bg-brand hover:text-white transition-colors cursor-pointer"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Status Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pt-1 border-t border-slate-100">
            {Object.entries(statusCounts).map(([status, count]) => (
              <button
                key={status}
                type="button"
                onClick={() => setSelectedStatus(status)}
                className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedStatus === status
                    ? "bg-brand text-white shadow-xs"
                    : "text-slate-600 hover:text-navy hover:bg-slate-100"
                }`}
              >
                <span>{status}</span>
                <span
                  className={`inline-flex items-center justify-center px-1.5 py-0.2 rounded text-[10px] font-mono font-bold leading-none ${
                    selectedStatus === status
                      ? "bg-white/25 text-white"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            ))}

            <div className="ml-auto text-xs font-mono text-slate-500 whitespace-nowrap pl-4 hidden sm:block">
              Showing <strong className="text-navy">{sortedListings.length}</strong> of {featuredListings.length} lots
            </div>
          </div>
        </div>
      </div>

      {/* Main Product Grid Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {sortedListings.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-12 text-center max-w-lg mx-auto my-12">
            <Search className="h-10 w-10 text-slate-400 mx-auto mb-3" />
            <h3 className="font-heading text-lg font-bold uppercase text-brand">
              No matching listings found
            </h3>
            <p className="mt-2 text-xs text-slate-500 leading-relaxed">
              We couldn&apos;t find any products matching your current search query or filter combination.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-hover shadow-xs cursor-pointer transition-all"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-[1680px]:grid-cols-5 gap-4 sm:gap-5">
            {sortedListings.map((listing) => {
              const priceData = parseListingPrice(listing.priceEstimate, listing.status);

              return (
                <article
                  key={listing.id}
                  className="group flex flex-col justify-between rounded-xl border border-slate-200 border-t-2 border-t-transparent hover:border-t-brand bg-white overflow-hidden shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-xl"
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
                        listing.status
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
                          className="shrink-0 rounded bg-brand px-2.5 py-1.5 text-[10.5px] font-bold uppercase tracking-wider text-white hover:bg-brand-hover shadow-2xs hover:scale-105 transition-all text-center whitespace-nowrap cursor-pointer"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
