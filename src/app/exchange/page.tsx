import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShoppingCart,
  Tag,
  FileText,
  ArrowLeftRight,
  Repeat,
  Factory,
  Gavel,
  Archive,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  TrendingUp,
  Scale,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "8 Dynamic Exchange Modes | Foundry Exchange",
  description:
    "Explore how heavy industry transacts on Foundry Exchange. From spot purchasing and bilateral barter trading to plant auctions and circular tooling leases.",
};

function renderModeIcon(iconName: string) {
  const iconProps = { className: "h-6 w-6 transition-colors duration-200" };
  switch (iconName) {
    case "ShoppingCart":
      return <ShoppingCart {...iconProps} />;
    case "Tag":
      return <Tag {...iconProps} />;
    case "FileText":
      return <FileText {...iconProps} />;
    case "ArrowLeftRight":
      return <ArrowLeftRight {...iconProps} />;
    case "Repeat":
      return <Repeat {...iconProps} />;
    case "Factory":
      return <Factory {...iconProps} />;
    case "Gavel":
      return <Gavel {...iconProps} />;
    case "Archive":
      return <Archive {...iconProps} />;
    default:
      return <ShoppingCart {...iconProps} />;
  }
}

// In-depth details for each exchange mode
const exchangeModeDetails = [
  {
    id: "buy",
    name: "Direct Buy (Ready Stock)",
    badge: "Immediate Dispatch",
    tagline: "Instant order execution on certified inventory",
    description:
      "Purchase verified off-the-shelf castings, standard ingots, refractory linings, and replacement machinery components with immediate warehouse dispatch. No production lead times.",
    iconName: "ShoppingCart",
    howItWorks: [
      "Select certified SKU from verified inventory catalog",
      "Confirm chemistry, 3.1 MTR, and dimensional tolerances",
      "Secure payment via encrypted escrow or approved industrial net-30 terms",
      "Multimodal freight arranged with tracking within 24 hours",
    ],
    idealFor: "Urgent breakdown replacements, maintenance spares, standard ingots, and recurring inventory buffer stocks.",
    ctaText: "Browse Ready Stock",
    ctaLink: "/products",
  },
  {
    id: "sell",
    name: "Sell Products (Foundry Listings)",
    badge: "Qualified Buyers",
    tagline: "Monetize recurring capacity and manufactured stock",
    description:
      "List recurring foundry production runs, standard casting programs, certified alloy ingots, or tooling inventory directly to thousands of qualified heavy industrial procurement agents.",
    iconName: "Tag",
    howItWorks: [
      "Upload facility certification (ISO 9001 / IATF 16949 / AFS) and listing details",
      "Specify ASTM / DIN alloy grades, mold flask limits, and minimum order batches",
      "Receive direct inquiries and purchase orders through the portal",
      "Guaranteed fund disbursement upon proof of delivery and buyer acceptance",
    ],
    idealFor: "Operating foundries, forge shops, alloy recyclers, and pattern tooling manufacturers.",
    ctaText: "List Foundry Inventory",
    ctaLink: "/rfq",
  },
  {
    id: "rfq",
    name: "Post an RFQ (Custom Castings)",
    badge: "CAD & Drawing Match",
    tagline: "Direct metallurgical routing to matched foundries",
    description:
      "Upload CAD 3D models, 2D engineering prints, and metallurgical specifications. Our proprietary matching engine routes your drawing package to verified foundries with open pour schedules.",
    iconName: "FileText",
    howItWorks: [
      "Submit drawing package (STEP, IGES, PDF) with alloy and heat treat criteria",
      "Automated NDA protection and metallurgical taxonomy filtering",
      "Receive itemized, comparable quotes covering tooling, piece price, and sample lead time",
      "Award order with escrow milestone protection (tooling sample, first article, full batch)",
    ],
    idealFor: "OEM engineering teams, Tier-1 contractors, EPC developers, and equipment builders.",
    ctaText: "Create Drawing RFQ",
    ctaLink: "/rfq",
  },
  {
    id: "trade",
    name: "Trade & Swap (Bilateral Foundry)",
    badge: "Foundry Bilateral",
    tagline: "Balance raw materials and alloy balances peer-to-peer",
    description:
      "Exchange surplus alloy chemistry, scrap parcels, or secondary materials directly between operating foundries to optimize melt deck feedstock without intermediaries.",
    iconName: "ArrowLeftRight",
    howItWorks: [
      "Post excess certified alloy scrap, pig iron lots, or ferro-alloys",
      "Specify desired counter-materials (e.g., trade 30 tons FeSi 75% for low-phos pig iron)",
      "Foundry Exchange verifies metallurgical chemistry equivalency and value delta",
      "Balanced swap executed with delta settlement handled through exchange ledger",
    ],
    idealFor: "Melt deck managers and foundry purchasing directors balancing scrap silos and bulk alloys.",
    ctaText: "Initiate Trade Proposal",
    ctaLink: "/contact",
  },
  {
    id: "barter",
    name: "Barter Exchange (Resource Offset)",
    badge: "Zero-Cash Capacity Swap",
    tagline: "Trade idle furnace hours for essential consumables",
    description:
      "Trade excess melting capacity, heat treat furnace hours, or pattern-making labor against essential consumables, refractories, inoculants, and raw metals without cash outflow.",
    iconName: "Repeat",
    howItWorks: [
      "Register idle furnace shifts, induction pouring hours, or heat treating time",
      "Browse available consumables (e.g., dry-vibe alumina, sand binders, ferro-alloys)",
      "Smart clearinghouse calculates standard value units per metric ton poured/treated",
      "Perform production work and receive matched material shipments",
    ],
    idealFor: "Foundries facing seasonal capacity dips wishing to maintain operating margins and staff.",
    ctaText: "Explore Barter Desk",
    ctaLink: "/contact",
  },
  {
    id: "rent-lease",
    name: "Rent / Lease (Plant Capital)",
    badge: "Asset Flexibility",
    tagline: "Capital melt hardware and testing gear on flexible terms",
    description:
      "Lease heavy capital melt equipment, standby coreless power units, test instruments, spectrometer trucks, or sand reconditioning machinery to handle temporary surges.",
    iconName: "Factory",
    howItWorks: [
      "Select machinery class (induction inverters, shakeout units, CMM inspection arms)",
      "Choose operating lease term (1 month to 3 years) with buyout options",
      "Full mechanical inspection and rigging certification prior to mobilization",
      "Option to transition to permanent purchase at depreciated book value",
    ],
    idealFor: "Fast-growing foundries taking on surge contracts without long-term debt liabilities.",
    ctaText: "Review Lease Options",
    ctaLink: "/contact",
  },
  {
    id: "auction",
    name: "Plant Auctions (Live & Timed Bids)",
    badge: "Maximized Asset Recovery",
    tagline: "Liquidate or acquire complete plant lines in competitive events",
    description:
      "Bid on complete foundry lines, automated green sand molding carousels, induction tilt furnaces, and plant closures through transparent, timed online events.",
    iconName: "Gavel",
    howItWorks: [
      "Register verified bidding credentials and submit refundable deposit",
      "Access detailed asset catalogs, video demonstrations, and electrical inspection sheets",
      "Place real-time or proxy bids during the timed auction closing window",
      "Coordinated rigging removal window with certified heavy-machinery transport",
    ],
    idealFor: "Plant managers seeking discounted heavy capital gear and retiring foundry owners liquidating assets.",
    ctaText: "View Live Auctions",
    ctaLink: "/auctions",
  },
  {
    id: "surplus",
    name: "Surplus Tooling (Circular Tooling)",
    badge: "Fraction of Lead Time",
    tagline: "Repurpose idle patterns, matchplates, dies, and flasks",
    description:
      "Acquire certified idle patterns, CNC matchplates, forging dies, and flask sets from other foundries at a fraction of machining lead times and tooling costs.",
    iconName: "Archive",
    howItWorks: [
      "Search catalog by component class, outer dimensions, and parting lines",
      "Inspect CAD scans and gating / runner layouts of existing tooling",
      "License or purchase tooling package with verified title release",
      "Retrofit gating to match your shop's molding line within days",
    ],
    idealFor: "Foundries facing 16-24 week pattern shop backlogs on new casting bids.",
    ctaText: "Search Surplus Tooling",
    ctaLink: "/marketplace/tooling",
  },
];

export default function ExchangeModesPage() {
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
            <span className="text-white">Exchange</span>
          </div>

          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
              Versatile Commercial Architecture
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-brand font-heading">
              8 Dynamic Exchange Modes
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-body">
              Heavy industry doesn&apos;t transact with a simple shopping cart.
              Foundry Exchange accommodates the complex commercial realities of
              metal casting: long tooling lead times, scrap offset trading, melt
              capacity balancing, and multi-million dollar plant liquidations.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/rfq"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md hover:bg-brand-hover transition-colors"
              >
                <span>Submit Sourcing RFQ</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-white hover:text-navy transition-all"
              >
                <span>Speak to Trading Desk</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Detailed Modes List */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {exchangeModeDetails.map((mode, idx) => (
            <div
              key={mode.id}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-brand transition-all"
            >
              <div className="p-6 sm:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  {/* Left Column: Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white border border-brand shrink-0">
                        {renderModeIcon(mode.iconName)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-slate-400">
                            MODE {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-navy">
                            {mode.badge}
                          </span>
                        </div>
                        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy">
                          {mode.name}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm font-bold text-brand uppercase tracking-wide">
                      {mode.tagline}
                    </p>
                    <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                      {mode.description}
                    </p>

                    {/* How it works steps */}
                    <div className="mt-6 pt-6 border-t border-slate-100">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-3">
                        How This Mode Executes:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {mode.howItWorks.map((step, stepIdx) => (
                          <div
                            key={stepIdx}
                            className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy text-white text-[10px] font-bold">
                              {stepIdx + 1}
                            </span>
                            <span className="leading-snug">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Ideal For */}
                    <div className="mt-4 flex items-baseline gap-2 text-xs text-slate-500">
                      <span className="font-bold uppercase tracking-wider text-slate-700 shrink-0">
                        Primary Applications:
                      </span>
                      <span>{mode.idealFor}</span>
                    </div>
                  </div>

                  {/* Right Column: CTA card */}
                  <div className="lg:w-64 shrink-0 flex flex-col justify-center bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <span className="text-[11px] font-bold uppercase text-slate-500 mb-1">
                      Ready to Proceed?
                    </span>
                    <p className="text-xs text-slate-600 mb-4">
                      Connect with our metallurgical trading desk to begin.
                    </p>
                    <Link
                      href={mode.ctaLink}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-hover transition-colors shadow-xs text-center"
                    >
                      <span>{mode.ctaText}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Escrow & Security Assurance */}
      <div className="bg-navy py-16 text-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-red-400">
              Institutional Safeguards
            </span>
            <h3 className="mt-2 text-3xl font-extrabold uppercase font-heading text-white">
              Every Exchange Protected By Strict Metallurgical Governance
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              Whether you are executing a \$25,000 spot ingot order or a \$2.4M complete melt shop plant closure, Foundry Exchange enforces uniform legal, escrow, and quality checkpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-navy-800 bg-navy-950 p-6 rounded-xl">
              <Scale className="h-8 w-8 text-brand mb-3" />
              <h4 className="font-heading text-lg font-bold uppercase text-white">
                Milestone Escrow Clearing
              </h4>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Funds are held securely and released according to defined inspection milestones: pattern approval, first-article CMM, and final 3.1 MTR verification.
              </p>
            </div>
            <div className="border border-navy-800 bg-navy-950 p-6 rounded-xl">
              <ShieldCheck className="h-8 w-8 text-brand mb-3" />
              <h4 className="font-heading text-lg font-bold uppercase text-white">
                Title &amp; Lien Verification
              </h4>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Every high-value capital piece, press, and furnace undergoes title search and UCC filing verification to guarantee transfer free of encumbrance.
              </p>
            </div>
            <div className="border border-navy-800 bg-navy-950 p-6 rounded-xl">
              <Zap className="h-8 w-8 text-brand mb-3" />
              <h4 className="font-heading text-lg font-bold uppercase text-white">
                24-Hour Settlement Routing
              </h4>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Standardized wire transfers and credit settlements ensure foundries receive payment immediately upon verified bill of lading signoff.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
