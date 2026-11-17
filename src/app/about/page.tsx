import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  Factory,
  Users,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us & Industrial Governance | Foundry Exchange",
  description:
    "Learn about Foundry Exchange: our metallurgical mission, technical advisory board, verified supplier code, and industrial career network.",
};

const advisoryBoardMembers = [
  {
    name: "Dr. Arthur Vance, Ph.D., PE",
    role: "Chief Metallurgical Advisor",
    background: "Former Director of Ferrous Metallurgy, Case Western Reserve; 34 years in ductile iron spheroidal graphite nucleation research.",
  },
  {
    name: "Robert M. Sterling",
    role: "Industrial Melt Equipment Specialist",
    background: "Ex-VP Operations, Inductotherm North America; oversaw 120+ coreless induction melt shop installations across USA and Canada.",
  },
  {
    name: "Elena Rostova, M.Sc.",
    role: "Director of NDT & Quality Systems",
    background: "ASNT Level III Inspector in Radiography (RT) and Ultrasonic Testing (UT); advisor on subsea valve casting integrity.",
  },
  {
    name: "Marcus Thorne",
    role: "Foundry Operations & Tooling Lead",
    background: "Past President of Patternmakers Association; 28 years designing high-speed Disamatic tooling and permanent mold dies.",
  },
];

const openCareers = [
  {
    title: "Senior Sourcing Metallurgist (Iron & Steel)",
    location: "Cleveland, OH (Hybrid)",
    department: "Metallurgical Desk",
    type: "Full-Time",
  },
  {
    title: "Heavy Equipment Field Inspector",
    location: "Hamilton, ON / Great Lakes Corridor",
    department: "Plant Auctions & Appraisals",
    type: "Full-Time",
  },
  {
    title: "Cross-Border Industrial Logistics Coordinator",
    location: "Monterrey, NL / Laredo, TX",
    department: "USMCA Freight Operations",
    type: "Full-Time",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-slate-50 py-16 sm:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand hover:text-brand-hover mb-8 cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home Exchange</span>
        </Link>

        {/* Header */}
        <div>
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand">
            About Foundry Exchange
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-brand font-heading">
            The Digital Backbone of the Metal Casting Industry
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            Foundry Exchange was established to solve one of heavy
            industry&apos;s most persistent bottlenecks: fragmented procurement,
            opaque pricing, and idle capital in the form of surplus tooling and
            melt assets.
          </p>
        </div>

        {/* Content Sections */}
        <div className="mt-12 space-y-12">
          {/* Section 1: Mission */}
          <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-2xs">
            <h2 className="font-heading text-2xl font-bold uppercase text-brand">
              Our Metallurgical Mission
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Metal casting accounts for over 90% of all manufactured durable
              goods and heavy machinery. Yet foundries and OEMs historically
              operated on fragmented fax sheets, brokers, and informal contacts.
              Foundry Exchange provides a structured, ASTM and ISO compliant
              marketplace connecting verified casting facilities with buyers
              across North America, Europe, and global trade corridors.
            </p>
          </section>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-2xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-brand border border-brand/20 mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-lg font-bold uppercase text-brand">
                Strict Quality Standards
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Every casting specification is governed by international
                metallurgical classifications including ASTM A48, ASTM A536, DIN
                EN 1561/1563, and ISO 9001 quality system certifications.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-2xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-navy mb-4 border border-blue-200">
                <Factory className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-lg font-bold uppercase text-brand">
                Circular Tooling Economy
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                By enabling foundries to buy, sell, or barter surplus
                matchplates, pattern sets, core boxes, and flasks, we eliminate
                months of lead times and tons of industrial tooling waste.
              </p>
            </div>
          </div>

          {/* Section 2: Advisory Board */}
          <section id="advisory-board" className="rounded-2xl border border-slate-200 bg-white p-8 shadow-2xs scroll-mt-24">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[3px] w-8 bg-brand" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Executive Governance
              </span>
            </div>
            <h2 className="font-heading text-2xl font-bold uppercase text-brand">
              Technical Advisory Board
            </h2>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed mb-6">
              Our advisory board brings over a century of hands-on foundry management, melt metallurgy, and industrial quality assurance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {advisoryBoardMembers.map((m) => (
                <div
                  key={m.name}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="font-heading text-base font-bold uppercase text-brand">
                    {m.name}
                  </h3>
                  <span className="block text-[11px] font-bold uppercase text-brand mt-0.5">
                    {m.role}
                  </span>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {m.background}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Verified Supplier Program */}
          <section id="verified-program" className="rounded-2xl border border-slate-200 bg-white p-8 shadow-2xs scroll-mt-24">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[3px] w-8 bg-brand" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Facility Accreditation
              </span>
            </div>
            <h2 className="font-heading text-2xl font-bold uppercase text-brand">
              Foundry Exchange Verified Program
            </h2>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed mb-6">
              Every foundry and forge vendor awarded verified status undergoes rigorous credentialing before listing capacity or bidding on RFQ packages:
            </p>

            <div className="space-y-3">
              {[
                "Active operating facility audit with confirmed continuous induction or arc melting capacity.",
                "Mandatory ISO 9001:2015 certification; IATF 16949 required for automotive powertrain components.",
                "Calibrated Optical Emission Spectrometry (OES) logs and standardized 3.1 Mill Test Report issuance.",
                "Lien-free title verification for all surplus equipment and machinery consigned to the exchange.",
              ].map((req, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Supplier Code */}
          <section id="supplier-code" className="rounded-2xl border border-slate-200 bg-white p-8 shadow-2xs scroll-mt-24">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[3px] w-8 bg-brand" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Ethics &amp; Environmental Stewardship
              </span>
            </div>
            <h2 className="font-heading text-2xl font-bold uppercase text-brand">
              Supplier Code of Conduct
            </h2>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Foundry Exchange requires all network melt facilities to observe stringent environmental controls, OSHA pouring deck safety protocols, zero child/forced labor, and strict adherence to environmental air permit regulations regarding baghouse particulate emissions.
            </p>
          </section>

          {/* Section 5: Foundry Careers */}
          <section id="careers" className="rounded-2xl border border-slate-200 bg-white p-8 shadow-2xs scroll-mt-24">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[3px] w-8 bg-brand" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Talent &amp; Engineering
              </span>
            </div>
            <h2 className="font-heading text-2xl font-bold uppercase text-brand">
              Careers at Foundry Exchange
            </h2>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed mb-6">
              We are expanding our metallurgical advisory and field inspection operations across our Cleveland, Hamilton, and Monterrey hubs.
            </p>

            <div className="space-y-3">
              {openCareers.map((c) => (
                <div
                  key={c.title}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50"
                >
                  <div>
                    <h3 className="font-heading text-sm font-bold uppercase text-brand">
                      {c.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                      {c.location} • {c.department}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="shrink-0 rounded-lg bg-navy px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand transition-colors text-center cursor-pointer"
                  >
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
