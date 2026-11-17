"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Scale,
  Award,
  Layers,
  Search,
  CheckCircle,
  FileText,
  Flame,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import { glossaryTerms as allGlossaryTerms } from "@/data/glossary";

export default function KnowledgePage() {
  const [activeTab, setActiveTab] = useState<"astm" | "din" | "processes" | "glossary">("astm");
  const [searchFilter, setSearchFilter] = useState("");

  const astmStandards = [
    {
      code: "ASTM A48",
      title: "Standard Specification for Gray Iron Castings",
      grades: "Class 20, 25, 30, 35, 40, 50, 60",
      tensile: "20 to 60 ksi (138 to 414 MPa)",
      matrix: "Ferrite / Pearlite with Flake Graphite (Type A, VII)",
      applications: "Engine blocks, machine tool bases, brake rotors, pump volutes, counterweights.",
      notes: "Exceptional vibration damping capacity and thermal conductivity with superior compressive strength.",
    },
    {
      code: "ASTM A536",
      title: "Standard Specification for Ductile Iron Castings",
      grades: "60-40-18, 65-45-12, 80-55-06, 100-70-03, 120-90-02",
      tensile: "60 to 120 ksi (414 to 827 MPa)",
      matrix: "Ferritic to fully Pearlitic with Spheroidal Graphite (Nodularity > 85%)",
      applications: "Steering knuckles, automotive crankshafts, hydraulic cylinders, waterworks valves & fittings.",
      notes: "High elongation (up to 18%) and impact resistance approaching carbon steel at lower pour cost.",
    },
    {
      code: "ASTM A105",
      title: "Carbon Steel Forgings for Piping Applications",
      grades: "Standard Grade Carbon (0.35% max C, 0.60-1.05% Mn)",
      tensile: "70 ksi (485 MPa) min, Yield: 36 ksi (250 MPa) min",
      matrix: "Normalized or Quenched & Tempered Fine-Grained Ferrite-Pearlite",
      applications: "Flanges, fittings, valves, pressure vessel connections up to Class 2500#.",
      notes: "Primary specification for high-temperature pressure piping service.",
    },
    {
      code: "ASTM A182",
      title: "Forged or Rolled Alloy & Stainless Steel Pipe Flanges",
      grades: "F304, F316L, F11, F22, F51 (Duplex 2205), F53 (Super Duplex)",
      tensile: "75 to 116 ksi (515 to 800 MPa)",
      matrix: "Austenitic, Martensitic, or Austenitic-Ferritic Duplex microstructure",
      applications: "Subsea manifolds, chemical reactors, refinery valves, nuclear primary loops.",
      notes: "Strict PREn (Pitting Resistance Equivalent) controls and ferrite grain boundary verification.",
    },
    {
      code: "ASTM A216",
      title: "Steel Castings, Carbon, Suitable for Fusion Welding for High-Temperature Service",
      grades: "WCA, WCB, WCC",
      tensile: "60 to 75 ksi (415 to 515 MPa)",
      matrix: "Normalized Carbon Steel",
      applications: "Industrial valve bodies, pressure containment hulls, steam turbine casings.",
      notes: "Standard cast steel for industrial pressure-containing parts; highly weldable.",
    },
    {
      code: "ASTM A350",
      title: "Carbon and Low-Alloy Steel Forgings, Requiring Notch Toughness Testing",
      grades: "LF1, LF2 (Class 1 & 2), LF3, LF6",
      tensile: "70 to 95 ksi (485 to 655 MPa)",
      matrix: "Normalized and Tempered fine grain structure",
      applications: "Arctic pipeline flanges, LNG transfer skids, cryo valve forgings.",
      notes: "Mandatory Charpy V-Notch impact testing down to -50°F (-46°C).",
    },
  ];

  const dinStandards = [
    {
      code: "DIN EN 1561 (EN-GJL)",
      equivalent: "ASTM A48 Grey Cast Iron",
      grades: "EN-GJL-150, EN-GJL-200, EN-GJL-250, EN-GJL-300",
      tensile: "150 to 300 N/mm²",
      characteristics: "Lamellar flake graphite structure with high damping and excellent thermal shock resistance.",
    },
    {
      code: "DIN EN 1563 (EN-GJS)",
      equivalent: "ASTM A536 Spheroidal Graphite Ductile Iron",
      grades: "EN-GJS-400-18, EN-GJS-400-15, EN-GJS-500-7, EN-GJS-600-3",
      tensile: "400 to 600 N/mm²",
      characteristics: "Nodular graphite with high ductility (18% elongation) and superior fatigue strength for safety-critical parts.",
    },
    {
      code: "DIN EN 10283 (1.4408)",
      equivalent: "ASTM A351 CF8M Cast Stainless",
      grades: "GX5CrNiMo19-11-2 (1.4408), 1.4308 (CF8)",
      tensile: "440 to 650 N/mm²",
      characteristics: "Austenitic corrosion-resistant cast steel for aggressive acid and maritime environments.",
    },
    {
      code: "DIN EN 10250-2",
      equivalent: "ASTM A105 / A350 Open Die Steel Forgings",
      grades: "C22.8, 16Mo3, 13CrMo4-5, 42CrMo4",
      tensile: "410 to 850 N/mm²",
      characteristics: "Unalloyed and alloyed quality open-die forgings for pressure vessels and power generation shafts.",
    },
  ];

  const castingProcesses = [
    {
      name: "Green Sand Molding",
      leadTime: "3 - 6 Weeks",
      tolerance: "ISO 8062-3 DCTG 9 - 11",
      weightRange: "0.5 kg to 5,000 kg",
      pros: "Lowest tooling cost, high production speed, fully recyclable silica sand.",
      cons: "Rougher surface finish (RMS 250-500), larger machining allowances required.",
      bestFor: "Automotive brackets, municipal iron waterworks, pipe fittings, agricultural gearcases.",
    },
    {
      name: "No-Bake Chemically Bonded Sand",
      leadTime: "4 - 8 Weeks",
      tolerance: "ISO 8062-3 DCTG 8 - 10",
      weightRange: "50 kg to 50,000 kg",
      pros: "High mold rigidity, excellent dimensional stability for massive castings, low gas defects.",
      cons: "Chemical resin cost, slower cycle times than green sand lines.",
      bestFor: "Large pump volutes, mining crusher frames, wind turbine hubs, heavy gear blanks.",
    },
    {
      name: "Lost-Wax Precision Investment Casting",
      leadTime: "6 - 10 Weeks",
      tolerance: "ISO 8062-3 DCTG 4 - 6",
      weightRange: "0.01 kg to 100 kg",
      pros: "Near-net shape, intricate internal passages, fine surface finish (RMS 63-125), minimal machining.",
      cons: "Higher tooling and wax mold processing costs.",
      bestFor: "Impellers, aerospace brackets, surgical instruments, stainless valve internals.",
    },
    {
      name: "Open-Die vs Closed-Die Forging",
      leadTime: "4 - 12 Weeks",
      tolerance: "EN 10254 / DIN 7526",
      weightRange: "1 kg to 35,000 kg",
      pros: "Continuous directional grain flow, highest fracture toughness and fatigue resistance.",
      cons: "Requires heavy mechanical/hydraulic presses and precision die blocks.",
      bestFor: "High-pressure fluid ends, turbine rotor shafts, crane hooks, seamless rolled rings.",
    },
  ];

  const featuredGlossary = allGlossaryTerms.slice(0, 8);

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
            <span className="text-white">Knowledge Center</span>
          </div>

          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
              Engineering &amp; Metallurgy Reference Library
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white font-heading">
              Foundry Standards &amp; Metallurgy Desk
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-body">
              Verified technical reference for casting designers, metallurgists,
              and procurement engineers. Explore ASTM standards, DIN EN equivalents,
              dimensional tolerance limits, and process capability guides.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Main Content Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* Tab Navigation Toolbar */}
        <div className="mb-10 rounded-xl border border-navy-200 bg-white p-3.5 sm:p-4 shadow-xs">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <button
              type="button"
              onClick={() => setActiveTab("astm")}
              className={`rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "astm"
                  ? "bg-brand text-white shadow-xs"
                  : "bg-navy-50 text-navy border border-navy-200 hover:border-brand hover:text-brand hover:bg-white"
              }`}
            >
              ASTM Standards (US)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("din")}
              className={`rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "din"
                  ? "bg-brand text-white shadow-xs"
                  : "bg-navy-50 text-navy border border-navy-200 hover:border-brand hover:text-brand hover:bg-white"
              }`}
            >
              DIN EN Standards (EU)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("processes")}
              className={`rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "processes"
                  ? "bg-brand text-white shadow-xs"
                  : "bg-navy-50 text-navy border border-navy-200 hover:border-brand hover:text-brand hover:bg-white"
              }`}
            >
              Casting &amp; Forging Processes
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("glossary")}
              className={`rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "glossary"
                  ? "bg-brand text-white shadow-xs"
                  : "bg-navy-50 text-navy border border-navy-200 hover:border-brand hover:text-brand hover:bg-white"
              }`}
            >
              Foundry Glossary
            </button>
          </div>
        </div>
        {/* ASTM Standards Tab */}
        {activeTab === "astm" && (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[3px] w-10 bg-brand" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                North American Metallurgical Standards
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-navy font-heading mb-8">
              Key ASTM Specifications for Castings &amp; Forgings
            </h2>

            <div className="space-y-6">
              {astmStandards.map((std) => (
                <div
                  key={std.code}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="rounded bg-navy px-3 py-1 text-sm font-mono font-bold text-white">
                        {std.code}
                      </span>
                      <h3 className="font-heading text-lg font-bold uppercase text-navy">
                        {std.title}
                      </h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="font-bold uppercase tracking-wider text-slate-500 block">
                        Common Grades:
                      </span>
                      <p className="font-mono text-slate-800 mt-0.5">{std.grades}</p>
                    </div>
                    <div>
                      <span className="font-bold uppercase tracking-wider text-slate-500 block">
                        Tensile Performance:
                      </span>
                      <p className="font-mono text-brand font-bold mt-0.5">{std.tensile}</p>
                    </div>
                    <div>
                      <span className="font-bold uppercase tracking-wider text-slate-500 block">
                        Microstructure &amp; Matrix:
                      </span>
                      <p className="text-slate-700 mt-0.5">{std.matrix}</p>
                    </div>
                    <div>
                      <span className="font-bold uppercase tracking-wider text-slate-500 block">
                        Typical Applications:
                      </span>
                      <p className="text-slate-700 mt-0.5">{std.applications}</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                    <span className="font-bold text-navy">Engineering Note: </span>
                    {std.notes}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DIN EN Standards Tab */}
        {activeTab === "din" && (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[3px] w-10 bg-brand" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                European Harmonized Specifications
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-navy font-heading mb-8">
              DIN EN Standards &amp; Cross-Reference Table
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dinStandards.map((din) => (
                <div
                  key={din.code}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs"
                >
                  <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-3">
                    <span className="rounded bg-brand px-2.5 py-1 text-xs font-mono font-bold text-white">
                      {din.code}
                    </span>
                    <span className="text-xs font-bold text-navy font-mono">
                      ≈ {din.equivalent}
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="font-bold uppercase text-slate-500 block">
                        Designated Material Grades:
                      </span>
                      <p className="font-mono text-slate-800 font-bold mt-0.5">
                        {din.grades}
                      </p>
                    </div>
                    <div>
                      <span className="font-bold uppercase text-slate-500 block">
                        Tensile Range:
                      </span>
                      <p className="font-mono text-brand font-bold mt-0.5">
                        {din.tensile}
                      </p>
                    </div>
                    <div>
                      <span className="font-bold uppercase text-slate-500 block">
                        Metallurgical Behavior:
                      </span>
                      <p className="text-slate-600 mt-0.5 leading-relaxed">
                        {din.characteristics}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Casting & Forging Processes Tab */}
        {activeTab === "processes" && (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[3px] w-10 bg-brand" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Manufacturing Methodologies
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-navy font-heading mb-8">
              Process Capabilities, Tolerances &amp; Lead Times
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {castingProcesses.map((proc) => (
                <div
                  key={proc.name}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs"
                >
                  <h3 className="font-heading text-xl font-bold uppercase text-navy mb-4 border-b border-slate-100 pb-2">
                    {proc.name}
                  </h3>

                  <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-lg mb-4 text-center">
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase font-bold">
                        Lead Time
                      </span>
                      <span className="font-mono text-xs font-bold text-navy">
                        {proc.leadTime}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase font-bold">
                        Tolerance
                      </span>
                      <span className="font-mono text-[11px] font-bold text-brand">
                        {proc.tolerance}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase font-bold">
                        Weight
                      </span>
                      <span className="font-mono text-xs font-bold text-navy">
                        {proc.weightRange}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <p className="text-slate-700">
                      <strong className="text-navy">Advantages: </strong>
                      {proc.pros}
                    </p>
                    <p className="text-slate-600">
                      <strong className="text-slate-500">Limitations: </strong>
                      {proc.cons}
                    </p>
                    <p className="text-brand font-medium pt-2 border-t border-slate-100">
                      <strong className="text-navy">Optimal Parts: </strong>
                      {proc.bestFor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Glossary Tab */}
        {activeTab === "glossary" && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-[3px] w-10 bg-brand" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-wider text-brand font-mono">
                    Terminology &amp; Definitions
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-navy font-heading">
                  Foundry &amp; Metallurgical Engineering Glossary
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Featured metallurgical definitions. Explore the dedicated A–Z index for full 60+ ASTM/ISO standards.
                </p>
              </div>
              <Link
                href="/glossary"
                className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-hover transition-colors shadow-md cursor-pointer shrink-0"
              >
                <span>Open Full A–Z Glossary (60+ Terms)</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredGlossary.map((term) => (
                <div
                  key={term.term}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs hover:border-brand hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className="h-7 w-7 rounded-md bg-navy text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                          {term.letter}
                        </span>
                        <h3 className="font-heading text-lg font-bold uppercase text-navy">
                          {term.term}
                        </h3>
                      </div>
                      <span className="rounded-md bg-navy-50 border border-navy-200 px-2 py-0.5 text-[10px] font-mono font-bold text-navy shrink-0">
                        {term.category}
                      </span>
                    </div>

                    {term.astmOrIsoSpec && (
                      <div className="mb-2">
                        <span className="rounded-md bg-red-50 border border-brand/20 px-2 py-0.5 text-[10px] font-mono font-bold text-brand">
                          {term.astmOrIsoSpec}
                        </span>
                      </div>
                    )}

                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {term.definition}
                    </p>

                    <div className="mt-3 rounded border-l-2 border-brand bg-slate-50 p-2.5 text-[11px] text-slate-600">
                      <strong className="text-navy uppercase text-[10px] block mb-0.5">
                        Industrial Significance
                      </strong>
                      {term.industrialSignificance}
                    </div>
                  </div>

                  {term.relatedCategoryHref && (
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={term.relatedCategoryHref}
                        className="text-xs font-bold text-brand hover:text-navy inline-flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>{term.relatedCategoryLabel || "View Listings"}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Banner to dedicated A-Z page */}
            <div className="mt-8 rounded-xl border border-navy-200 bg-navy-50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-heading text-base font-bold uppercase text-navy">
                  Looking for Complete A–Z Technical Definitions?
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Search across 63+ terms covering ductile iron, gating ratios, molding sand, spectrometry, induction melting, and forging specs.
                </p>
              </div>
              <Link
                href="/glossary"
                className="inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-navy-900 transition-colors shadow-xs cursor-pointer shrink-0"
              >
                <span>Browse Alphabetical Index (A–Z)</span>
                <ArrowRight className="h-3.5 w-3.5 text-brand" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* 4. Bottom Support CTA */}
      <div className="bg-navy py-12 text-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl font-bold uppercase text-white">
              Need Metallurgical Guidance on an Active Drawing Package?
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              Our on-call foundry metallurgists review ASTM chemistry and casting feasibility before RFQ distribution.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-lg bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-hover transition-colors shadow-md cursor-pointer"
          >
            Consult Metallurgy Desk
          </Link>
        </div>
      </div>
    </div>
  );
}
