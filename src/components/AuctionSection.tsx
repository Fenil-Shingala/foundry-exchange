"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Gavel,
  Clock,
  MapPin,
  ShieldCheck,
  Radio,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import {
  auctionEvents,
  hotAuctionLots,
  HotAuctionLot,
} from "@/data/auctions";

export default function AuctionSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [placedBids, setPlacedBids] = useState<Record<string, number>>({});
  const [activeTab, setActiveTab] = useState<"events" | "lots">("events");

  const filterTabs = [
    { id: "all", name: "All Liquidation Catalogs", count: auctionEvents.length },
    { id: "melt-shop", name: "Melt Shop & Furnaces", count: 142 },
    { id: "molding-sand", name: "Molding Lines", count: 89 },
    { id: "fettling-blast", name: "Fettling & Blast", count: 76 },
    { id: "coremaking-tooling", name: "Tooling & Patterns", count: 64 },
  ];

  const filteredEvents =
    selectedCategory === "all"
      ? auctionEvents
      : auctionEvents.filter((e) =>
          selectedCategory === "melt-shop"
            ? e.featuredCategory === "Melt Shop & Furnaces"
            : selectedCategory === "coremaking-tooling"
            ? e.featuredCategory === "Coremaking & Tooling"
            : true
        );

  const handleQuickBid = (lot: HotAuctionLot) => {
    const current = placedBids[lot.id] || lot.currentBid;
    const nextBid = current + lot.bidIncrement;
    setPlacedBids((prev) => ({
      ...prev,
      [lot.id]: nextBid,
    }));
  };

  return (
    <section id="auctions" className="relative isolate bg-slate-50/60 py-20 border-b border-slate-200 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with Precast Accent */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[3px] w-10 bg-brand" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Industrial Liquidations &amp; Timed Bidding
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-navy font-heading">
              Live Foundry Auctions &amp; Plant Closures
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-600 leading-relaxed">
              Direct B2B auction bidding on complete melt decks, automated molding systems, core machines, and metallurgical testing labs. Verified ownership, escrow-secured funds, and on-site rigging inspection.
            </p>
          </div>

          {/* Live Status Badge */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-bold text-emerald-800 shadow-2xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>4 Live Catalogs · 865+ Lots Active</span>
            </div>

            <Link
              href="/#contact-form"
              className="inline-flex items-center gap-1.5 rounded-lg border border-navy-700 bg-navy-950 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-navy-900 transition-all"
            >
              <Gavel className="h-3.5 w-3.5 text-brand" />
              <span>Consign Melt Shop</span>
            </Link>
          </div>
        </div>

        {/* Index Callout Bar (PrecastXchange Signature Style) */}
        <div className="flex items-baseline gap-4 border-l-[3px] border-brand pl-4 mb-8">
          <span className="font-heading text-2xl font-black text-brand tracking-tight">
            08
          </span>
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-navy font-heading">
              Certified Liquidations · Timed Online &amp; Live Webcast Auctions
            </p>
            <p className="text-xs text-slate-500">
              Auction catalogs curated by licensed industrial liquidators with full 3.1 metallurgical test certs.
            </p>
          </div>
        </div>

        {/* View Toggle (Catalog Events vs Hot Lots) & Category Pills */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-8">
          {/* Category Filter Pills (From BidSpotter Heavy Equipment Taxonomy) */}
          <div className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-1">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === tab.id
                    ? "bg-brand text-white shadow-xs"
                    : "bg-white text-slate-600 border border-slate-200 hover:text-navy hover:border-slate-300"
                }`}
              >
                <span>{tab.name}</span>
                <span
                  className={`inline-flex items-center justify-center px-1.5 py-0.5 rounded text-[10px] font-mono font-bold leading-none ${
                    selectedCategory === tab.id
                      ? "bg-white/25 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Toggle between Event Catalogs and Quick Hot Lots */}
          <div className="inline-flex items-center rounded-lg border border-slate-200 bg-white p-1 shrink-0 shadow-2xs">
            <button
              type="button"
              onClick={() => setActiveTab("events")}
              className={`rounded-md px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "events"
                  ? "bg-navy-950 text-white shadow-xs"
                  : "text-slate-600 hover:text-navy"
              }`}
            >
              Auction Catalogs ({filteredEvents.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("lots")}
              className={`rounded-md px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "lots"
                  ? "bg-navy-950 text-white shadow-xs"
                  : "text-slate-600 hover:text-navy"
              }`}
            >
              Hot Lots Bidding (4)
            </button>
          </div>
        </div>

        {/* 1. AUCTION EVENTS VIEW (Modeled directly after BidSpotter PPL Group 4-Image Card Format) */}
        {activeTab === "events" && (
          <div className="space-y-8">
            {filteredEvents.map((evt) => (
              <div
                key={evt.id}
                className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-brand transition-all duration-300 overflow-hidden"
              >
                {/* Event Card Header Bar */}
                <div className="bg-slate-50/80 px-6 py-4 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Auctioneer Identity */}
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-navy-950 text-brand font-black text-xs font-heading">
                        FE
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-navy">
                        {evt.auctioneer.name}
                      </span>
                      {evt.auctioneer.verified && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          <ShieldCheck className="h-3 w-3" />
                          Verified Clearing House
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Auction Type & Closing Countdown */}
                  <div className="flex items-center gap-3">
                    {evt.auctionType === "Live Webcast" ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 border border-rose-200 px-3 py-1 text-xs font-bold text-rose-800 font-mono">
                        <Radio className="h-3 w-3 text-brand animate-pulse" />
                        LIVE WEBCAST
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-navy-800 font-mono">
                        <Clock className="h-3 w-3 text-cobalt" />
                        TIMED ONLINE
                      </span>
                    )}

                    <div className="inline-flex items-center gap-1.5 rounded-md bg-navy-950 px-3 py-1 text-xs font-bold text-white font-mono shadow-inner">
                      <Clock className="h-3 w-3 text-brand" />
                      <span>{evt.closesIn}</span>
                    </div>
                  </div>
                </div>

                {/* Event Main Content */}
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-navy font-heading group-hover:text-brand transition-colors">
                        {evt.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                        <span className="inline-flex items-center gap-1 font-semibold text-slate-700">
                          <MapPin className="h-3.5 w-3.5 text-brand" />
                          {evt.location}
                        </span>
                        <span>•</span>
                        <span className="font-medium text-slate-600">
                          Inspection: {evt.inspectionDates}
                        </span>
                        <span>•</span>
                        <span className="font-semibold text-navy">
                          {evt.buyersPremium}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <Link
                        href="/#contact-form"
                        className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-brand-hover hover:scale-[1.02] transition-all"
                      >
                        <span>View Catalog ({evt.totalLots} Lots)</span>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href="/#contact-form"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-navy hover:border-brand hover:text-brand transition-colors"
                      >
                        <span>Register to Bid</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {evt.description}
                  </p>

                  {/* 4-Image Lot Preview Grid (BidSpotter Signature Feature) */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                        Featured Highlight Lots Preview
                      </span>
                      <span className="text-[11px] font-bold text-brand uppercase tracking-wider">
                        4 of {evt.totalLots} Lots Shown
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {evt.previewImages.map((lot, idx) => (
                        <div
                          key={idx}
                          className="group/lot relative flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/50 p-3 hover:bg-white hover:border-brand hover:shadow-md transition-all duration-200"
                        >
                          {/* Image Canvas with Blueprint Theme */}
                          <div className="relative flex h-36 w-full items-center justify-center rounded-lg bg-navy-950 p-3 overflow-hidden border border-navy-800">
                            {/* Blueprint grid effect */}
                            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3c6596_1px,transparent_1px)] [background-size:12px_12px]" />
                            <Image
                              src={lot.imageUrl}
                              alt={lot.title}
                              width={160}
                              height={100}
                              className="relative z-10 max-h-24 w-auto object-contain transition-transform duration-200 group-hover/lot:scale-110"
                            />
                            {/* Lot Number Tag */}
                            <span className="absolute top-2 left-2 z-20 rounded bg-navy-900/90 px-2 py-0.5 text-[10px] font-mono font-bold text-white border border-navy-700">
                              {lot.lotNumber}
                            </span>
                          </div>

                          {/* Lot Description */}
                          <div className="mt-3">
                            <h4 className="text-xs font-bold text-navy line-clamp-2 leading-snug group-hover/lot:text-brand transition-colors">
                              {lot.title}
                            </h4>
                          </div>

                          {/* Lot Price & Bid Action */}
                          <div className="mt-3 pt-2.5 border-t border-slate-200/80 flex items-center justify-between text-xs">
                            <div>
                              <span className="text-[10px] text-slate-400 font-mono block">Current Bid</span>
                              <span className="font-extrabold text-navy font-mono text-sm">
                                {lot.currentBid}
                              </span>
                            </div>
                            <Link
                              href="/#contact-form"
                              className="rounded px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-navy-950 text-white hover:bg-brand transition-colors"
                            >
                              Bid
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. HOT INDIVIDUAL LOTS QUICK-BID GRID */}
        {activeTab === "lots" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotAuctionLots.map((lot) => {
              const currentBid = placedBids[lot.id] || lot.currentBid;
              const nextBid = currentBid + lot.bidIncrement;
              const hasBid = !!placedBids[lot.id];

              return (
                <div
                  key={lot.id}
                  className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-xl hover:border-brand transition-all duration-200"
                >
                  <div>
                    {/* Top Row: Lot Number & Countdown */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="rounded bg-navy-50 text-navy border border-navy-200 px-2 py-0.5 text-[11px] font-mono font-bold uppercase tracking-wider">
                        {lot.lotNumber}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-brand bg-red-50 border border-red-100 px-2 py-0.5 rounded">
                        <Clock className="h-3 w-3" />
                        {lot.closesIn}
                      </span>
                    </div>

                    {/* Image Canvas */}
                    <div className="relative flex h-40 w-full items-center justify-center rounded-lg bg-navy-950 p-4 overflow-hidden border border-navy-800">
                      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3c6596_1px,transparent_1px)] [background-size:12px_12px]" />
                      <Image
                        src={lot.imageUrl}
                        alt={lot.title}
                        width={180}
                        height={120}
                        className="relative z-10 max-h-28 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                      />
                      <span className="absolute bottom-2 right-2 z-20 text-[10px] font-mono text-emerald-400 bg-navy-900/90 px-2 py-0.5 rounded border border-navy-700">
                        Reserve Met
                      </span>
                    </div>

                    {/* Category & Location */}
                    <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="font-semibold text-slate-600 truncate">{lot.category}</span>
                      <span className="inline-flex items-center gap-1 shrink-0">
                        <MapPin className="h-3 w-3 text-brand" />
                        {lot.location}
                      </span>
                    </div>

                    {/* Lot Title */}
                    <h3 className="mt-2 text-sm font-bold text-navy leading-snug group-hover:text-brand transition-colors line-clamp-2">
                      {lot.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 font-mono">
                      {lot.alloyOrSpec}
                    </p>
                  </div>

                  {/* Bidding Engine Footer */}
                  <div className="mt-5 pt-3 border-t border-slate-100">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">
                          Current High Bid
                        </span>
                        <span className="text-lg font-black text-navy font-mono">
                          ${currentBid.toLocaleString()}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-mono text-slate-400 block">
                          Activity
                        </span>
                        <span className="text-xs font-bold text-slate-600 font-mono">
                          {hasBid ? lot.bidsCount + 1 : lot.bidsCount} Bids
                        </span>
                      </div>
                    </div>

                    {/* Quick Bid Action Button */}
                    <button
                      type="button"
                      onClick={() => handleQuickBid(lot)}
                      className={`w-full flex items-center justify-center gap-2 rounded-lg py-2.5 px-3 text-xs font-bold uppercase tracking-wider transition-all shadow-2xs ${
                        hasBid
                          ? "bg-emerald-600 text-white hover:bg-emerald-700"
                          : "bg-brand text-white hover:bg-brand-hover hover:scale-[1.01]"
                      }`}
                    >
                      <Gavel className="h-3.5 w-3.5" />
                      {hasBid ? (
                        <span>You Placed ${currentBid.toLocaleString()}!</span>
                      ) : (
                        <span>Quick Bid ${nextBid.toLocaleString()}</span>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Consignment Callout Banner — Deep Navy with Flame Red Accent */}
        <div className="mt-14 rounded-2xl bg-navy-950 p-8 text-white border-l-4 border-brand shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-brand" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
                  Melt Shop &amp; Foundry Asset Consignment
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white font-heading">
                Retiring Equipment or Closing a Foundry Facility?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Consign your idle induction furnaces, green sand molding lines, and surplus alloy inventory with Foundry Exchange. Gain direct access to 8,400+ verified global casting buyers, guaranteed escrow disbursement, and zero upfront listing fees.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Link
                href="/#contact-form"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-brand-hover hover:scale-[1.02] transition-all"
              >
                <span>Request Asset Appraisal</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#contact-form"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy-700 bg-navy-900 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-navy-900 transition-all"
              >
                <span>Learn About Escrow</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
