"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Gavel,
  Clock,
  MapPin,
  ShieldCheck,
  TrendingUp,
  Boxes,
  Truck,
  Flame,
  Award,
  ArrowRight,
  Filter,
  CheckCircle,
  FileCheck,
} from "lucide-react";
import {
  auctionEvents,
  hotAuctionLots,
  auctionCategories,
} from "@/data/auctions";

export default function AuctionsPage() {
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
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Header Banner */}
      <div className="bg-navy py-14 sm:py-20 text-white border-b-2 border-brand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Auctions</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/20 border border-brand/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-300 mb-3">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
              Live Timed Liquidations &amp; Plant Closures
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-brand font-heading">
              Foundry Auctions &amp; Equipment Liquidations
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-body">
              Acquire complete melt facilities, Disamatic flaskless molding lines,
              Inductotherm coreless furnaces, and CNC pattern shop assets through
              verified timed auctions and industrial plant liquidations.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md hover:bg-brand-hover transition-colors"
              >
                <Gavel className="h-4 w-4" />
                <span>Register to Bid</span>
              </Link>
              <Link
                href="/rfq"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-white hover:text-navy transition-all"
              >
                <Boxes className="h-4 w-4" />
                <span>Consign Plant Equipment</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Success Banner */}
      {bidSuccessMessage && (
        <div className="bg-brand text-white py-3 px-4 text-center font-bold text-sm shadow-md transition-all">
          ✓ {bidSuccessMessage}
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* 3. Category Filter Toolbar */}
        <div className="mb-12 rounded-xl border border-navy-200 bg-white p-4 sm:p-5 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-navy-100 mb-3.5">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-brand shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wider text-navy font-heading">
                Filter Auctions by Equipment Classification
              </span>
            </div>
            <span className="text-xs text-navy/70 font-mono font-medium">
              Showing:{" "}
              <strong className="text-brand font-bold uppercase">
                {activeCategory === "all" ? "All Equipment" : activeCategory}
              </strong>{" "}
              ({filteredEvents.length} active events)
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`shrink-0 rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === "all"
                  ? "bg-navy text-white shadow-xs font-bold"
                  : "bg-navy-50 text-navy border border-navy-200 hover:border-brand hover:text-brand hover:bg-white"
              }`}
            >
              All Auctions ({auctionEvents.length})
            </button>
            {auctionCategories.map((cat) => {
              const isSelected =
                activeCategory.toLowerCase() === cat.shortName.toLowerCase();
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.shortName)}
                  className={`shrink-0 rounded-lg px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? "bg-brand text-white shadow-xs font-bold"
                      : "bg-navy-50 text-navy border border-navy-200 hover:border-brand hover:text-brand hover:bg-white"
                  }`}
                >
                  <span>{cat.shortName}</span>
                  <span className="ml-1.5 text-[10.5px] font-mono opacity-85 font-bold">
                    ({cat.count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. Active Auction Events */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-[3px] w-10 bg-brand" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Major Timed Events
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-navy font-heading mb-8">
            Current Liquidation Auctions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((ev) => (
              <div
                key={ev.id}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:border-brand hover:shadow-xl transition-all"
              >
                <div>
                  {/* Image with status badge */}
                  <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={ev.previewLots[0]?.imageUrl || "/images/listings/induction-melting-furnace.jpg"}
                      alt={ev.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 rounded-md bg-navy/90 backdrop-blur-xs px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                      {ev.categoryTag}
                    </div>
                    <div className="absolute top-3 right-3 rounded-md bg-brand px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                      <Clock className="h-3 w-3" />
                      <span>{ev.timeRemaining}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-mono">
                      <MapPin className="h-3.5 w-3.5 text-brand" />
                      <span>{ev.location}</span>
                    </div>

                    <h3 className="font-heading text-xl font-bold uppercase text-navy group-hover:text-brand transition-colors line-clamp-2">
                      {ev.title}
                    </h3>

                    <p className="mt-3 text-xs leading-relaxed text-slate-600 line-clamp-3">
                      Auctioneer: {ev.auctioneer.name} • Rigging: {ev.riggingAvailable ? "Certified Available" : "By Request"} • Format: {ev.type}
                    </p>

                    {/* Stats pills */}
                    <div className="mt-5 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 text-center">
                      <div className="bg-slate-50 p-2 rounded-lg">
                        <span className="block text-[10px] text-slate-500 uppercase font-bold">
                          Total Lots
                        </span>
                        <span className="font-heading text-lg font-bold text-navy">
                          {ev.totalLots}
                        </span>
                      </div>
                      <div className="bg-slate-50 p-2 rounded-lg">
                        <span className="block text-[10px] text-slate-500 uppercase font-bold">
                          Premium
                        </span>
                        <span className="font-heading text-sm font-bold text-brand">
                          {ev.buyersPremium}
                        </span>
                      </div>
                      <div className="bg-slate-50 p-2 rounded-lg">
                        <span className="block text-[10px] text-slate-500 uppercase font-bold">
                          Status
                        </span>
                        <span className="font-heading text-[11px] font-bold text-navy">
                          {ev.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-6 pt-0">
                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-navy py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand transition-colors"
                  >
                    <span>View Catalog &amp; Register</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Hot Individual Lots */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand mb-1">
                <Flame className="h-4 w-4 text-brand" />
                <span>High Competitive Activity</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-brand font-heading">
                Hot Auction Lots Closing Soon
              </h2>
            </div>
            <p className="text-xs text-slate-500 font-mono">
              REAL-TIME BID FEED
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotAuctionLots.map((lot) => (
              <div
                key={lot.lotNumber}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-brand hover:bg-white transition-all shadow-2xs"
              >
                <div>
                  <div className="relative h-40 w-full rounded-lg overflow-hidden bg-slate-200 mb-3">
                    <Image
                      src={lot.imageUrl}
                      alt={lot.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 rounded bg-navy/90 px-2 py-0.5 text-[10px] font-mono font-bold text-white">
                      {lot.lotNumber}
                    </div>
                    <div className="absolute top-2 right-2 rounded bg-brand px-2 py-0.5 text-[10px] font-bold text-white">
                      {lot.timeRemaining}
                    </div>
                  </div>

                  <h4 className="font-heading text-sm font-bold uppercase text-navy line-clamp-2">
                    {lot.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1">
                    {lot.category} • {lot.location}
                  </p>

                  <div className="mt-3 flex items-baseline justify-between border-t border-slate-200 pt-2">
                    <div>
                      <span className="block text-[10px] uppercase text-slate-400 font-bold">
                        Current Bid
                      </span>
                      <span className="font-heading text-lg font-extrabold text-navy">
                        {lot.currentBid}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-mono">
                      {lot.bidsCount} bids
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-2">
                  <button
                    onClick={() => handleQuickBid(lot.lotNumber, lot.nextBid)}
                    disabled={biddingLotId === lot.lotNumber}
                    className="w-full rounded-lg bg-brand py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-hover transition-colors disabled:opacity-50"
                  >
                    {biddingLotId === lot.lotNumber
                      ? "Submitting..."
                      : `Quick Bid ${lot.nextBid}`}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Auction Assurance & Terms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <ShieldCheck className="h-8 w-8 text-brand mb-3" />
            <h3 className="font-heading text-lg font-bold uppercase text-navy">
              Title Guarantee &amp; Escrow
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Every asset listed has verified lien-free clear title. All winning
              deposits are secured in bank escrow until physical release.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <Truck className="h-8 w-8 text-brand mb-3" />
            <h3 className="font-heading text-lg font-bold uppercase text-navy">
              Rigging &amp; Removal Timelines
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Designated plant rigging windows with pre-certified heavy-haul
              contractors to safely disconnect, crate, and transport melt deck gear.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <FileCheck className="h-8 w-8 text-brand mb-3" />
            <h3 className="font-heading text-lg font-bold uppercase text-navy">
              Mechanical Inspections
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Comprehensive onsite video inspections, hydraulic pressure logs,
              coil megohmmeter reports, and run test certificates available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
