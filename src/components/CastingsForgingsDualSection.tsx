"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  Hammer,
  Check,
  ArrowRight,
  Flame,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";

export default function CastingsForgingsDualSection() {
  const [activeGuideView, setActiveGuideView] = useState<"quick" | "table">("quick");

  return (
    <section
      id="castings-forgings"
      className="relative z-20 border-b border-navy-800 bg-navy-950 py-16 sm:py-20 text-white overflow-hidden"
    >
      {/* Background Ambience Subtle Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-40 left-1/4 h-[400px] w-[500px] rounded-full opacity-15 blur-3xl"
          style={{
            background: "radial-gradient(circle, #c82425 0%, #062040 70%, transparent 100%)",
          }}
        />
        <div
          className="absolute -bottom-40 right-1/4 h-[400px] w-[500px] rounded-full opacity-15 blur-3xl"
          style={{
            background: "radial-gradient(circle, #1d4ed8 0%, #062040 70%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================================================================ */}
        {/* SECTION HEADER (Clean, readable, consistent with site signature) */}
        {/* ================================================================ */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[3px] w-10 bg-brand" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Dual Sourcing Division
            </span>
            <span className="h-[3px] w-10 bg-brand" aria-hidden="true" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white">
            Metal Castings &amp; Precision Forgings
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            One unified digital marketplace for both liquid-metal casting and heavy solid forging. Source near-net complex geometries or mission-critical fatigue strength from pre-audited facilities.
          </p>
        </div>

        {/* ================================================================ */}
        {/* 50 / 50 DUAL CAPABILITY CARDS (Clean, user-friendly, high contrast) */}
        {/* ================================================================ */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* -------------------------------------------------------------- */}
          {/* CARD 1: METAL CASTINGS                                         */}
          {/* -------------------------------------------------------------- */}
          <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-navy-700 bg-navy-900/90 shadow-xl transition-all duration-300 hover:border-brand/70 hover:shadow-2xl">
            <div>
              {/* Photo Banner with Clean Floating Badges */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-navy-950">
                <Image
                  src="/images/capabilities/metal-casting.jpg"
                  alt="Liquid metal casting ladle pour into sand mold"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />

                {/* Top Badge: Process Type */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-brand/90 px-3 py-1 text-xs font-mono font-bold uppercase text-white shadow-md backdrop-blur-xs">
                    <Flame className="h-3.5 w-3.5" />
                    Castings
                  </span>
                </div>

                {/* Bottom Badge: Capacity Spec */}
                <div className="absolute bottom-3 left-4 text-xs font-mono text-white">
                  <span className="rounded bg-navy-950/90 px-2.5 py-1 font-semibold border border-navy-700 backdrop-blur-xs">
                    Pour: Up to 50 MT
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand/10 text-brand border border-brand/20">
                    <Layers className="h-4 w-4" />
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight">
                    Foundry Castings
                  </h3>
                </div>

                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Best for intricate internal coring, thin-wall cooling channels, and complex geometries produced directly from liquid melt.
                </p>

                {/* Clean Scannable Capability Rows */}
                <div className="mt-6 space-y-3.5 border-t border-navy-800/80 pt-5 text-xs sm:text-sm">
                  {/* Processes */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand">
                      <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <span className="font-bold text-white">Core Processes:</span>
                      <span className="ml-1 text-slate-300">
                        Green Sand, No-Bake Resin Sand, Investment (Lost Wax), High-Pressure Die Casting, Centrifugal.
                      </span>
                    </div>
                  </div>

                  {/* Materials */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand">
                      <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <span className="font-bold text-white">Materials &amp; Specs:</span>
                      <span className="ml-1 text-slate-300">
                        Ductile &amp; Gray Iron (ASTM A536, A48), Carbon &amp; Stainless Cast Steel (ASTM A216 WCB, A351 CF8M).
                      </span>
                    </div>
                  </div>

                  {/* Quality Standards */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand">
                      <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <span className="font-bold text-white">Tolerances &amp; QA:</span>
                      <span className="ml-1 text-slate-300">
                        ISO 8062-3 Grades CT4–CT10, NDT Radiography (ASTM E94), Magnetic Particle (ASTM E709), 3.1 MTR.
                      </span>
                    </div>
                  </div>

                  {/* Typical Parts */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand">
                      <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <span className="font-bold text-white">Typical Applications:</span>
                      <span className="ml-1 text-slate-300">
                        Pump volutes, valve bodies, motor frames, transmission cases, mining impellers, gearboxes.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="border-t border-navy-800 bg-navy-950/60 p-6 sm:p-8 pt-4">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="/#contact-form"
                  className="w-full sm:w-auto flex-1 rounded-lg bg-brand px-5 py-3 text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-brand-hover shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Post Casting RFQ</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/#marketplace"
                  className="w-full sm:w-auto rounded-lg bg-navy-800 px-5 py-3 text-center text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-200 border border-navy-700 hover:bg-white hover:text-navy-950 transition-colors"
                >
                  Browse Castings
                </Link>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------- */}
          {/* CARD 2: PRECISION FORGINGS                                     */}
          {/* -------------------------------------------------------------- */}
          <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-navy-700 bg-navy-900/90 shadow-xl transition-all duration-300 hover:border-blue-500/70 hover:shadow-2xl">
            <div>
              {/* Photo Banner with Clean Floating Badges */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-navy-950">
                <Image
                  src="/images/capabilities/precision-forging.jpg"
                  alt="Industrial hydraulic press forging incandescent steel billet"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />

                {/* Top Badge: Process Type */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-600/90 px-3 py-1 text-xs font-mono font-bold uppercase text-white shadow-md backdrop-blur-xs">
                    <Hammer className="h-3.5 w-3.5" />
                    Forgings
                  </span>
                </div>

                {/* Bottom Badge: Capacity Spec */}
                <div className="absolute bottom-3 left-4 text-xs font-mono text-white">
                  <span className="rounded bg-navy-950/90 px-2.5 py-1 font-semibold border border-navy-700 backdrop-blur-xs">
                    Press: Up to 15,000T
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Hammer className="h-4 w-4" />
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight">
                    Precision Forgings
                  </h3>
                </div>

                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Best for high-impact fatigue strength, directional unbroken grain flow, and zero internal porosity under extreme stress.
                </p>

                {/* Clean Scannable Capability Rows */}
                <div className="mt-6 space-y-3.5 border-t border-navy-800/80 pt-5 text-xs sm:text-sm">
                  {/* Processes */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                      <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <span className="font-bold text-white">Core Processes:</span>
                      <span className="ml-1 text-slate-300">
                        Closed-Die (Impression Drop), Open-Die Hydraulic Press, Seamless Rolled Ring, Precision Upset.
                      </span>
                    </div>
                  </div>

                  {/* Materials */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                      <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <span className="font-bold text-white">Materials &amp; Specs:</span>
                      <span className="ml-1 text-slate-300">
                        Carbon &amp; Alloy Forgings (ASTM A105, AISI 4140/4340 Q&amp;T), High-Temp Stainless (ASTM A182, A350 LF2).
                      </span>
                    </div>
                  </div>

                  {/* Quality Standards */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                      <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <span className="font-bold text-white">Tolerances &amp; QA:</span>
                      <span className="ml-1 text-slate-300">
                        100% Volumetric Ultrasonic Testing (ASTM A388 Class 1), Continuous Grain Flow Alignment, Charpy V-Notch.
                      </span>
                    </div>
                  </div>

                  {/* Typical Parts */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                      <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <span className="font-bold text-white">Typical Applications:</span>
                      <span className="ml-1 text-slate-300">
                        High-pressure flanges, crankshafts, turbine discs, pinions, landing gears, heavy-duty shafting.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="border-t border-navy-800 bg-navy-950/60 p-6 sm:p-8 pt-4">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="/#contact-form"
                  className="w-full sm:w-auto flex-1 rounded-lg bg-blue-600 px-5 py-3 text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-blue-500 shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Post Forging RFQ</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/#marketplace"
                  className="w-full sm:w-auto rounded-lg bg-navy-800 px-5 py-3 text-center text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-200 border border-navy-700 hover:bg-white hover:text-navy-950 transition-colors"
                >
                  Browse Forgings
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* SIMPLE, READABLE PROCESS SELECTION GUIDE                         */}
        {/* ================================================================ */}
        <div className="mt-14 rounded-2xl border border-navy-700 bg-navy-900/90 p-6 sm:p-8 shadow-xl">
          {/* Header with Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-navy-800 pb-5">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand">
                Engineering Decision Guide
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white mt-1">
                Which Process Fits Your Component?
              </h3>
            </div>

            <div className="inline-flex rounded-lg bg-navy-950 p-1 border border-navy-800 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setActiveGuideView("quick")}
                className={`rounded-md px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeGuideView === "quick"
                    ? "bg-brand text-white shadow-xs"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Quick Decision Guide
              </button>
              <button
                type="button"
                onClick={() => setActiveGuideView("table")}
                className={`rounded-md px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeGuideView === "table"
                    ? "bg-brand text-white shadow-xs"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Side-by-Side Specs
              </button>
            </div>
          </div>

          {/* VIEW 1: Clean, User-Friendly 3-Card Decision Guide */}
          {activeGuideView === "quick" && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Box 1: When to Choose Castings */}
              <div className="rounded-xl border border-navy-800 bg-navy-950/70 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand/20 text-brand">
                      <Layers className="h-3.5 w-3.5" />
                    </span>
                    <h4 className="font-heading text-base font-bold uppercase text-white">
                      Choose Casting If:
                    </h4>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 shrink-0 text-brand mt-0.5" />
                      <span><strong>Complex internal cavities:</strong> You require intricate sand cores (e.g. cooling passages or manifolds).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 shrink-0 text-brand mt-0.5" />
                      <span><strong>Large piece size:</strong> Structural parts up to 50 MT that exceed available forging press dies.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 shrink-0 text-brand mt-0.5" />
                      <span><strong>Tooling budget:</strong> Economical urethane/wood tooling for low-to-medium production volumes.</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-5 pt-3 border-t border-navy-800/80">
                  <span className="text-[11px] font-mono text-brand font-semibold block">
                    Ideal: Impellers, Pumps, Housings, Manifolds
                  </span>
                </div>
              </div>

              {/* Box 2: When to Choose Forgings */}
              <div className="rounded-xl border border-navy-800 bg-navy-950/70 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-500/20 text-blue-400">
                      <Hammer className="h-3.5 w-3.5" />
                    </span>
                    <h4 className="font-heading text-base font-bold uppercase text-white">
                      Choose Forging If:
                    </h4>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 shrink-0 text-blue-400 mt-0.5" />
                      <span><strong>Severe fatigue &amp; shock:</strong> Critical parts subject to cyclic impact, vibration, or high torque.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 shrink-0 text-blue-400 mt-0.5" />
                      <span><strong>Zero internal porosity:</strong> Solid plastic deformation eliminates gas pockets and voids.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 shrink-0 text-blue-400 mt-0.5" />
                      <span><strong>Continuous grain flow:</strong> Metal fibers conform strictly to part profiles for maximum fracture toughness.</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-5 pt-3 border-t border-navy-800/80">
                  <span className="text-[11px] font-mono text-blue-400 font-semibold block">
                    Ideal: Flanges, Shafts, Pinions, Landing Gears
                  </span>
                </div>
              </div>

              {/* Box 3: Technical Engineering Assistance */}
              <div className="rounded-xl border border-brand/40 bg-gradient-to-b from-brand/10 to-navy-950/90 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/20 text-white">
                      <HelpCircle className="h-3.5 w-3.5" />
                    </span>
                    <h4 className="font-heading text-base font-bold uppercase text-white">
                      Unsure Which Process?
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Our on-staff metallurgical engineers review your 3D CAD files, operating stresses, and production targets to recommend the most cost-effective manufacturing route.
                  </p>
                  <div className="mt-4 space-y-1.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-3.5 w-3.5 text-brand" />
                      <span>Free DFM (Design for Manufacturability)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-3.5 w-3.5 text-brand" />
                      <span>24-Hour Spec Turnaround</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-navy-800/80">
                  <Link
                    href="/#contact-form"
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-white px-4 py-2.5 text-xs font-bold uppercase text-navy-950 hover:bg-slate-100 transition-colors shadow-sm"
                  >
                    <span>Consult An Exchange Metallurgist</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* VIEW 2: Clean, Spacious Side-by-Side Spec Table */}
          {activeGuideView === "table" && (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-navy-700 bg-navy-950/80 text-[11px] font-mono uppercase tracking-wider text-slate-300">
                    <th className="py-3 px-4 font-bold text-white">Key Criterion</th>
                    <th className="py-3 px-4 font-bold text-brand">Metal Castings</th>
                    <th className="py-3 px-4 font-bold text-blue-400">Precision Forgings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-800/80 font-sans">
                  <tr className="hover:bg-navy-800/30 transition-colors">
                    <td className="py-3 px-4 font-semibold text-white">Starting Material State</td>
                    <td className="py-3 px-4 text-slate-300">Liquid molten metal poured into sand or permanent molds</td>
                    <td className="py-3 px-4 text-slate-300">Solid heated billet deformed under high-tonnage compressive dies</td>
                  </tr>
                  <tr className="hover:bg-navy-800/30 transition-colors">
                    <td className="py-3 px-4 font-semibold text-white">Internal Cavities &amp; Cores</td>
                    <td className="py-3 px-4 text-emerald-400 font-medium">Virtually unlimited (sand core technology)</td>
                    <td className="py-3 px-4 text-slate-300">Limited (deep hollows require secondary machining)</td>
                  </tr>
                  <tr className="hover:bg-navy-800/30 transition-colors">
                    <td className="py-3 px-4 font-semibold text-white">Structural Fatigue Strength</td>
                    <td className="py-3 px-4 text-slate-300">Good (uniform multi-directional properties)</td>
                    <td className="py-3 px-4 text-emerald-400 font-medium">Superior (15%–30% higher due to unbroken grain flow)</td>
                  </tr>
                  <tr className="hover:bg-navy-800/30 transition-colors">
                    <td className="py-3 px-4 font-semibold text-white">Internal Porosity Risk</td>
                    <td className="py-3 px-4 text-slate-300">Managed via gating, risers &amp; NDT radiography</td>
                    <td className="py-3 px-4 text-emerald-400 font-medium">Virtually zero (gas pockets compressed shut)</td>
                  </tr>
                  <tr className="hover:bg-navy-800/30 transition-colors">
                    <td className="py-3 px-4 font-semibold text-white">Weight Range Capacity</td>
                    <td className="py-3 px-4 text-slate-300">From 50g up to 50 metric tons</td>
                    <td className="py-3 px-4 text-slate-300">From 100g up to 25 metric tons (die/press bounded)</td>
                  </tr>
                  <tr className="hover:bg-navy-800/30 transition-colors">
                    <td className="py-3 px-4 font-semibold text-white">Common Governing Specs</td>
                    <td className="py-3 px-4 font-mono text-slate-300">ASTM A536, ASTM A216, ISO 8062-3 CT4–CT10</td>
                    <td className="py-3 px-4 font-mono text-slate-300">ASTM A105, ASTM A182, ASTM A388 UT Class 1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
