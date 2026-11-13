"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Gavel,
  Clock,
  MapPin,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  Boxes,
  Truck,
  Flame,
  Award,
} from "lucide-react";
import {
  auctionEvents,
  hotAuctionLots,
  auctionCategories,
  AuctionEvent,
} from "@/data/auctions";

export default function AuctionSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [biddingLotId, setBiddingLotId] = useState<string | null>(null);
  const [bidSuccessMessage, setBidSuccessMessage] = useState<string | null>(null);

  const filteredEvents =
    activeCategory === "all"
      ? auctionEvents
      : auctionEvents.filter((ev) =>
          ev.categoryTag.toLowerCase().includes(activeCategory.toLowerCase())
        );

  const handleQuickBid = (lotNumber: string, nextBid: string) => {
    setBiddingLotId(lotNumber);
    setBidSuccessMessage(`Bid of ${nextBid} successfully submitted for ${lotNumber}!`);
    setTimeout(() => {
      setBiddingLotId(null);
      setBidSuccessMessage(null);
    }, 3500);
  };

  return (
    <section id="auctions" className="relative isolate bg-slate-50 py-20 border-b border-slate-200 scroll-mt-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* 1. Section Header & Live Bidding Status */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[3px] w-10 bg-brand" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Industrial Liquidations &amp; Timed Bidding
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-navy font-heading">
              Live Foundry Auctions &amp; Plant Closures
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-600 leading-relaxed">
              Acquire decommissioned melt decks, automated molding systems, fettling robotics, and surplus pattern tooling directly through verified liquidations with escrow protection.
            </p>
          </div>

          {/* Live Status Badge */}
          <div className="flex items-center gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50/80 px-3.5 py-2 text-xs font-semibold text-emerald-900 shrink-0 shadow-2xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
            </span>
            <span>
              <strong>3 Active Catalogs</strong> · 925+ Auction Lots Live
            </span>
          </div>
        </div>

        {/* 2. BidSpotter-Style Category Filter Strip */}
        <div className="mb-10 flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden border-b border-slate-200 pb-3">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${
              activeCategory === "all"
                ? "bg-navy-950 text-white shadow-xs"
                : "bg-white text-slate-600 border border-slate-200 hover:border-brand hover:text-navy"
            }`}
          >
            All Liquidation Catalogs ({auctionEvents.length})
          </button>
          {auctionCategories.slice(0, 6).map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.shortName)}
              className={`rounded-lg px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${
                activeCategory.toLowerCase() === cat.shortName.toLowerCase()
                  ? "bg-brand text-white shadow-xs"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-brand hover:text-navy"
              }`}
            >
              <span>{cat.shortName}</span>
              <span className="ml-1.5 text-[10px] font-mono opacity-80">
                ({cat.count})
              </span>
            </button>
          ))}
        </div>

        {/* 3. BidSpotter Signature Auction Event Cards (4-Image Lot Previews) */}
        <div className="space-y-8 mb-16">
          {filteredEvents.map((event: AuctionEvent) => (
            <div
              key={event.id}
              className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all duration-200 hover:border-brand hover:shadow-lg"
            >
              {/* Event Header Banner */}
              <div className="bg-slate-50/80 p-5 sm:p-6 border-b border-slate-200 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    {/* Clearing House / Auctioneer Badge */}
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-navy-50 text-navy border border-navy-200">
                      <Award className="h-3 w-3 text-brand" />
                      {event.auctioneer.name}
                    </span>

                    {/* Auction Format Badge */}
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider ${
                        event.type === "LIVE WEBCAST"
                          ? "bg-brand/10 text-brand border border-brand/20"
                          : "bg-cobalt/10 text-cobalt border border-cobalt/20"
                      }`}
                    >
                      {event.type === "LIVE WEBCAST" && (
                        <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                      )}
                      {event.type}
                    </span>

                    {/* Category Tag */}
                    <span className="text-[11px] font-semibold text-slate-500">
                      • {event.categoryTag}
                    </span>
                  </div>

                  {/* Event Title */}
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-navy font-heading group-hover:text-brand transition-colors">
                    {event.title}
                  </h3>

                  {/* Location & Closing Date */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
                    <span className="flex items-center gap-1 font-medium">
                      <MapPin className="h-3.5 w-3.5 text-brand shrink-0" />
                      {event.location}
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="flex items-center gap-1 text-slate-700">
                      <span>Closing:</span>
                      <strong>{event.closingDate}</strong>
                    </span>
                  </div>
                </div>

                {/* Live Countdown & Register Button */}
                <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-3 shrink-0 pt-2 lg:pt-0">
                  <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 border border-slate-200 text-xs shadow-2xs">
                    <Clock className="h-3.5 w-3.5 text-brand shrink-0 animate-pulse" />
                    <span className="text-slate-500 font-medium">Time Left:</span>
                    <span className="font-mono font-bold text-navy text-sm">
                      {event.timeRemaining}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Link
                      href="/#contact-form"
                      className="inline-flex items-center justify-center gap-1.5 rounded-md bg-brand px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-brand-hover transition-all"
                    >
                      <span>Register to Bid</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* 4-Image Lot Preview Bar (Exact BidSpotter Signature Layout) */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-bold uppercase tracking-wider text-navy font-heading flex items-center gap-1.5">
                    <Boxes className="h-4 w-4 text-brand" />
                    Featured Machinery Lots (Click Lot to Inspect)
                  </span>
                  <span className="text-slate-500 font-mono">
                    Showing 4 of {event.totalLots} Lots
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {event.previewLots.map((lot, idx) => (
                    <div
                      key={idx}
                      className="group/lot rounded-lg border border-slate-200 bg-white p-3 hover:border-brand hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        {/* Lot Image Preview */}
                        <div className="relative h-28 w-full rounded-md bg-slate-50 flex items-center justify-center overflow-hidden border border-slate-100 mb-2.5">
                          <Image
                            src={lot.imageUrl}
                            alt={lot.title}
                            width={160}
                            height={90}
                            className="max-h-20 w-auto object-contain transition-transform duration-200 group-hover/lot:scale-105"
                          />
                          <span className="absolute top-2 left-2 rounded bg-navy-950/90 text-white font-mono font-bold text-[10px] px-1.5 py-0.5 shadow-2xs">
                            {lot.lotNumber}
                          </span>
                        </div>

                        {/* Lot Title */}
                        <h4 className="text-xs font-bold text-navy line-clamp-2 leading-snug group-hover/lot:text-brand transition-colors">
                          {lot.title}
                        </h4>
                      </div>

                      {/* Bidding Metrics */}
                      <div className="mt-3 pt-2 border-t border-slate-100 flex items-baseline justify-between">
                        <div>
                          <p className="text-[10px] uppercase font-bold text-slate-400">
                            Current Bid
                          </p>
                          <p className="text-xs font-mono font-black text-navy">
                            {lot.currentBid}
                          </p>
                        </div>
                        <span className="text-[10px] font-mono text-slate-500">
                          {lot.bidsCount} bids
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Event Card Footer */}
              <div className="bg-slate-50/70 px-5 sm:px-6 py-3.5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-1 font-semibold text-navy">
                    <Gavel className="h-3.5 w-3.5 text-brand" />
                    <strong>{event.totalLots} Lots in Catalog</strong>
                  </span>
                  <span className="text-slate-300">|</span>
                  <span>Buyer&apos;s Premium: <strong>{event.buyersPremium}</strong></span>
                  {event.riggingAvailable && (
                    <>
                      <span className="text-slate-300">|</span>
                      <span className="flex items-center gap-1 text-emerald-700 font-medium">
                        <Truck className="h-3.5 w-3.5" />
                        Rigging &amp; Loading Available On-Site
                      </span>
                    </>
                  )}
                </div>

                <Link
                  href="/#contact-form"
                  className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-brand hover:text-brand-dark transition-colors"
                >
                  <span>Explore Complete Catalog ({event.totalLots} Lots)</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Hot Individual Lots Closing Soon Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Flame className="h-4 w-4 text-brand" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand">
                  Live Timed Bidding
                </span>
              </div>
              <h3 className="text-2xl font-extrabold uppercase tracking-tight text-navy font-heading">
                Hot Foundry Equipment Lots Closing Today
              </h3>
            </div>
            <Link
              href="/#contact-form"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-navy hover:text-brand transition-colors"
            >
              <span>View All 180+ Active Lots</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Quick Bid Feedback Alert */}
          {bidSuccessMessage && (
            <div className="mb-4 rounded-lg bg-emerald-50 border border-emerald-300 p-3 text-xs font-bold text-emerald-900 flex items-center gap-2 shadow-sm transition-all">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>{bidSuccessMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotAuctionLots.map((lot) => (
              <div
                key={lot.id}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-xs hover:border-brand hover:shadow-lg transition-all"
              >
                <div>
                  {/* Lot Image with Badges */}
                  <div className="relative h-36 w-full rounded-lg bg-navy-950 p-4 flex items-center justify-center overflow-hidden mb-4 border border-navy-800">
                    <Image
                      src={lot.imageUrl}
                      alt={lot.title}
                      width={180}
                      height={90}
                      className="max-h-24 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                    />
                    <span className="absolute top-2.5 left-2.5 rounded bg-brand text-white font-mono font-bold text-[10px] px-2 py-0.5 shadow-2xs">
                      {lot.lotNumber}
                    </span>
                    <span className="absolute top-2.5 right-2.5 rounded bg-navy-900/90 text-slate-300 font-mono text-[10px] px-2 py-0.5 border border-navy-700">
                      {lot.reserveStatus}
                    </span>
                  </div>

                  {/* Category & Title */}
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 mb-1">
                    <span>{lot.category}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-slate-400" />
                      {lot.location}
                    </span>
                  </div>
                  <h4 className="font-heading text-base font-bold uppercase tracking-tight text-navy leading-snug group-hover:text-brand transition-colors line-clamp-2">
                    {lot.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-600 line-clamp-2 font-mono">
                    {lot.specs}
                  </p>

                  {/* Live Clock */}
                  <div className="mt-3 flex items-center justify-between py-2 border-y border-slate-100 text-xs">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <Clock className="h-3.5 w-3.5 text-brand animate-pulse" />
                      <span className="font-mono font-bold text-navy">
                        {lot.timeRemaining}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-mono">
                      {lot.bidsCount} bids placed
                    </span>
                  </div>

                  {/* Bid Information */}
                  <div className="mt-3 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400">
                        Current Bid
                      </span>
                      <p className="text-lg font-mono font-black text-navy leading-tight">
                        {lot.currentBid}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-slate-400">
                        Next Required
                      </span>
                      <p className="text-xs font-mono font-bold text-brand">
                        {lot.nextBid}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Bid Button */}
                <div className="mt-5">
                  <button
                    type="button"
                    onClick={() => handleQuickBid(lot.lotNumber, lot.nextBid)}
                    disabled={biddingLotId === lot.lotNumber}
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white py-2 text-xs font-bold uppercase tracking-wider text-navy hover:border-brand hover:bg-brand hover:text-white transition-all shadow-2xs group/btn disabled:opacity-50"
                  >
                    <Gavel className="h-3.5 w-3.5 text-brand group-hover/btn:text-white transition-colors" />
                    <span>Quick Bid {lot.nextBid}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Consignment / Liquidation Banner (Modeled after BidSpotter Seller CTA) */}
        <div className="rounded-2xl bg-navy-950 p-8 sm:p-10 border border-navy-800 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/20 px-3 py-1 border border-brand/30 text-xs font-bold uppercase tracking-wider text-brand mb-4">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>Asset Recovery &amp; Liquidation Services</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight font-heading text-white">
              Have Idle Melt Equipment or Closing a Facility?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Consign your induction furnaces, molding lines, pattern tooling, or complete foundry operations with Foundry Exchange. Gain direct exposure to 8,400+ verified global metalcasting buyers with guaranteed escrow clearing and bonded rigging oversight.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/#contact-form"
                className="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-brand-hover hover:scale-[1.02] transition-all"
              >
                <span>Request Liquidation Proposal</span>
              </Link>
              <Link
                href="/#contact-form"
                className="inline-flex items-center justify-center rounded-lg border border-navy-700 bg-navy-900/80 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-navy-950 transition-all"
              >
                <span>Consignment Commission Rates</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
