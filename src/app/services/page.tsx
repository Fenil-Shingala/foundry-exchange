import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Repeat,
  Gavel,
  Truck,
  ShieldCheck,
  ClipboardCheck,
  Microscope,
  Anchor,
  Archive,
  Flame,
  Factory,
  Globe,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  Coins,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial Foundry Services | Foundry Exchange",
  description:
    "Comprehensive metallurgical & operational services: 24-hour RFQ routing, insured heavy freight, certified plant audits, melt decommission, escrow protection, and asset valuations.",
};

const foundryServices = [
  {
    id: "rfq-routing",
    name: "24-Hr RFQ Routing Desk",
    tagline: "Algorithmic matching of CAD drawing packages to open melt schedules",
    description:
      "Our metallurgical sourcing desk standardizes your 2D drawings and 3D CAD models, classifies parting line complexity, and distributes packages to certified foundries with immediate flask and melt capacity.",
    icon: FileText,
    turnaround: "Guaranteed 24-48 Hours",
    standards: ["ISO 9001", "ITAR Compliant", "Strict Mutual NDA"],
  },
  {
    id: "barter-clearance",
    name: "Barter Exchange & Capacity Clearing",
    tagline: "Offset furnace melt hours and pattern labor against consumables",
    description:
      "Convert idle melting shifts, heat treat cycles, or pattern machining capacity into standardized exchange credit units to purchase scrap pig iron, ferro-alloys, dry vibratable refractories, or tooling dies.",
    icon: Repeat,
    turnaround: "Bilateral or Multilateral Settlement",
    standards: ["Uniform Exchange Valuations", "Automated Ledger"],
  },
  {
    id: "asset-liquidation",
    name: "Foundry Asset Liquidation & Dispersal",
    tagline: "Turnkey plant liquidations and timed equipment auctions",
    description:
      "Complete end-to-end monetization of surplus melt decks, green sand carousels, shot blast units, and CNC machines through targeted industrial auctions reaching thousands of verified foundry executives.",
    icon: Gavel,
    turnaround: "30-45 Day Auction Windows",
    standards: ["Full UCC Lien Checks", "Marketing across 40+ Countries"],
  },
  {
    id: "insured-freight",
    name: "Insured Heavy Freight & Multimodal Logistics",
    tagline: "Specialized transportation for 500-ton castings and melt hardware",
    description:
      "Dedicated heavy-haul flatbed, drop-deck, rail, and maritime logistics with comprehensive cargo insurance. We manage heavy overweight highway permits, police escorts, and port crane staging.",
    icon: Truck,
    turnaround: "Instant North American Freight Quotes",
    standards: ["\$1M-\$20M Cargo Cover", "DOT Overweight Permitted"],
  },
  {
    id: "escrow-protection",
    name: "Milestone Escrow Payment Protection",
    tagline: "Zero counterparty risk for multi-thousand-dollar casting orders",
    description:
      "Buyer deposits are locked in third-party banking escrow. Funds release in milestones: tooling pattern proof, first-article CMM inspection, and final 3.1 MTR signoff at destination.",
    icon: ShieldCheck,
    turnaround: "Same-Day Wire Clearing Upon Release",
    standards: ["FDIC Insured Banking Partners", "Defined Dispute Mechanism"],
  },
  {
    id: "plant-audits",
    name: "Third-Party Foundry Plant Audits",
    tagline: "Onsite technical and metallurgical verification audits",
    description:
      "Independent metallurgical engineers conduct onsite audits of melt shop cleanliness, spectrometer calibration logs, sand lab AFS testing rigor, pouring temperature pyrometry, and scrap segregation.",
    icon: ClipboardCheck,
    turnaround: "5-Day Onsite Audit Dossier",
    standards: ["ISO 9001:2015", "IATF 16949", "AFS Audit Guidelines"],
  },
  {
    id: "asset-valuations",
    name: "Certified Industrial Machinery Valuations",
    tagline: "Accredited equipment appraisal for insurance, M&A, and lending",
    description:
      "Desktop and onsite appraisals by ASA/AMEA-certified machinery appraisers specializing in induction melting equipment, forging presses, coremaking lines, and pattern shop machine tools.",
    icon: Coins,
    turnaround: "7-10 Business Days",
    standards: ["USPAP Compliant", "Orderly & Forced Liquidation Value"],
  },
  {
    id: "rigging-logistics",
    name: "Certified Rigging & Machinery Extraction",
    tagline: "Safe electrical disconnection, match-marking, and heavy crane lifts",
    description:
      "Certified master riggers specialize in disconnecting and extracting multi-ton induction furnace coils, hydraulic press crowns, shot blast dust collectors, and continuous mixers from operating foundry pits.",
    icon: Anchor,
    turnaround: "Scheduled Shutdown Windows",
    standards: ["OSHA Certified Riggers", "Match-Marked Electrical Drawings"],
  },
  {
    id: "pattern-clearing",
    name: "Surplus Pattern & Tooling Clearinghouse",
    tagline: "Repurpose and adapt existing matchplates and dies",
    description:
      "Catalog, store, and transfer surplus aluminum matchplates, cold-box core tooling, and forging die blocks between non-competing foundries, bypassing 16-24 week pattern shop lead times.",
    icon: Archive,
    turnaround: "Immediate Tooling Transfer",
    standards: ["CAD Blueprints & Gating Analysis Included"],
  },
  {
    id: "alloy-advisory",
    name: "Alloy Chemistry & Melt Deck Advisory",
    tagline: "Metallurgical consulting on charge optimization and inoculation",
    description:
      "Senior foundry metallurgists provide remote and onsite guidance on optimizing charge mixes (pig iron vs shredded scrap), reducing chill defects, magnesium recovery in ductile iron, and degassing.",
    icon: Flame,
    turnaround: "On-Call Metallurgical Hotline",
    standards: ["ASTM A536 / A48 / DIN EN Metallurgists"],
  },
  {
    id: "melt-decommission",
    name: "Melt Shop Decommissioning & Relining",
    tagline: "Safe environmental tear-out and refractory refractory teardown",
    description:
      "Turnkey decommissioning of obsolete cupolas, arc furnaces (EAF), and coreless induction decks with certified disposal of spent refractory linings, PCB transformer fluids, and baghouse dust.",
    icon: Factory,
    turnaround: "Full Project Management",
    standards: ["EPA Compliant Handling", "Certified Manifest Records"],
  },
  {
    id: "export-clearances",
    name: "Export Clearances & International Tariff Desk",
    tagline: "Seamless cross-border customs handling across North America and EU",
    description:
      "Harmonized Tariff Schedule (HTS) classification, USMCA / CUSMA origin declarations, EUR.1 certifications, and metallurgical export documentation for seamless cross-border freight.",
    icon: Globe,
    turnaround: "Pre-Cleared Shipping Documents",
    standards: ["CBP C-TPAT Certified", "HTS Chapter 72 & 73 Specialists"],
  },
];

export default function ServicesPage() {
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
            <span className="text-white">Services</span>
          </div>

          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
              Foundry Operations &amp; Commercial Infrastructure
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-brand font-heading">
              12 Specialized Industrial Services
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-body">
              Beyond buying and selling, Foundry Exchange powers the physical and
              metallurgical infrastructure of metal casting—from drawing
              standardization and heavy crane rigging to milestone escrow and
              customs clearances.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/rfq"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md hover:bg-brand-hover transition-colors cursor-pointer"
              >
                <span>Request Service / RFQ</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#fee-structure"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-white hover:text-navy transition-all cursor-pointer"
              >
                <span>View Fee Structure</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 12 Services Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foundryServices.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                id={svc.id}
                className="flex flex-col justify-between rounded-xl border border-slate-200 border-t-2 border-t-brand bg-white p-6 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white border border-brand">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-mono font-bold text-navy">
                      {svc.turnaround}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-navy">
                    {svc.name}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-brand uppercase">
                    {svc.tagline}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">
                    {svc.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <p className="text-[10px] uppercase font-bold text-slate-400 mb-2">
                      Key Standards &amp; Assurance:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {svc.standards.map((std, i) => (
                        <span
                          key={i}
                          className="rounded-md bg-navy-50 border border-navy-200 px-2.5 py-0.5 text-[10.5px] font-mono text-navy font-bold"
                        >
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand hover:text-brand-hover cursor-pointer"
                  >
                    <span>Engage Service</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Fee Structure Section */}
      <div id="fee-structure" className="bg-white py-16 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Clear &amp; Predictable Pricing
            </span>
            <h2 className="mt-2 text-3xl font-extrabold uppercase font-heading text-navy">
              Transparent Commercial Fee Structure
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              No hidden broker fees or inflated surcharges. We charge simple, transparent success-based margins on settled transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-xs">
              <span className="block text-xs font-bold uppercase text-brand">
                Standard Marketplace
              </span>
              <h3 className="font-heading text-2xl font-bold uppercase text-navy mt-1">
                Direct Buy &amp; Catalog
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-navy font-heading">
                  1.5% - 3%
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  transaction fee
                </span>
              </div>
              <p className="mt-4 text-xs text-slate-600 leading-relaxed">
                Applies only upon confirmed delivery and acceptance. Includes full escrow payment protection and basic shipping coordination.
              </p>
              <ul className="mt-6 space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brand shrink-0" />
                  <span>Zero listing or upload fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brand shrink-0" />
                  <span>Free 3.1 MTR digital vault</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brand shrink-0" />
                  <span>Automated invoicing &amp; net-30 terms</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border-2 border-brand bg-white p-8 shadow-md relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-0.5 text-[10px] font-bold uppercase text-white tracking-wider">
                Most Popular
              </div>
              <span className="block text-xs font-bold uppercase text-brand">
                Custom Casting Routing
              </span>
              <h3 className="font-heading text-2xl font-bold uppercase text-navy mt-1">
                Drawing RFQ Engine
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-navy font-heading">
                  Free
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  for qualified OEM buyers
                </span>
              </div>
              <p className="mt-4 text-xs text-slate-600 leading-relaxed">
                Submitting CAD drawing packages and receiving comparable foundry quotes carries no charge for engineering and purchasing buyers.
              </p>
              <ul className="mt-6 space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brand shrink-0" />
                  <span>24-Hour guaranteed quote routing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brand shrink-0" />
                  <span>Automatic mutual NDA execution</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brand shrink-0" />
                  <span>Pattern tooling escrow release</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-xs">
              <span className="block text-xs font-bold uppercase text-brand">
                Plant Liquidations
              </span>
              <h3 className="font-heading text-2xl font-bold uppercase text-navy mt-1">
                Auctions &amp; Dispersals
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-navy font-heading">
                  Custom
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  commission basis
                </span>
              </div>
              <p className="mt-4 text-xs text-slate-600 leading-relaxed">
                Tiered commission scale based on total gross asset realization. Includes turnkey marketing, rigging coordination, and onsite inspection management.
              </p>
              <ul className="mt-6 space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brand shrink-0" />
                  <span>Full plant appraisal included</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brand shrink-0" />
                  <span>Certified rigging extraction oversight</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brand shrink-0" />
                  <span>International bidder verification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
