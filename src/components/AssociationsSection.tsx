import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ShieldCheck, Award, MapPin } from "lucide-react";
import { associations } from "@/data/associations";

export default function AssociationsSection() {
  return (
    <section id="associations" className="relative isolate bg-surface py-20 border-b border-slate-200 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-[3px] w-10 bg-brand" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Industry Standards &amp; Affiliations
            </span>
            <span className="h-[3px] w-10 bg-brand" aria-hidden="true" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-navy font-heading">
            Global Foundry Associations
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            National institutes, continental federations, and regional chapters. Their metallurgical standards, plant certifications, and testing specifications are what foundry listings are measured against — we index and cross-reference them.
          </p>
        </div>

        {/* Index Accent Bar (PrecastXchange Signature Style) */}
        <div className="mt-12 flex items-baseline gap-4 border-l-[3px] border-brand pl-4">
          <span className="font-heading text-2xl font-black text-brand tracking-tight">
            07
          </span>
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-navy font-heading">
              Recognized Governing Bodies &amp; Regional Chapters
            </p>
            <p className="text-xs text-slate-500">
              Independent metallurgical and trade organizations driving manufacturing excellence.
            </p>
          </div>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {associations.map((assoc) => (
            <div
              key={assoc.id}
              className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-lg"
            >
              <div>
                {/* Logo Canvas Container */}
                <div className="flex h-32 w-full items-center justify-center rounded-lg bg-slate-50/70 p-4 border border-slate-100 group-hover:bg-white group-hover:border-slate-200 transition-colors">
                  <div className="relative h-20 w-full flex items-center justify-center">
                    <Image
                      src={assoc.logoUrl}
                      alt={assoc.name}
                      width={200}
                      height={80}
                      className="max-h-16 w-auto max-w-[85%] object-contain transition-transform duration-200 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Acronym and Region Badges */}
                <div className="mt-4 flex items-center justify-between gap-2 pb-2.5 border-b border-slate-100">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-navy-50 text-navy border border-navy-200 whitespace-nowrap shrink-0">
                    {assoc.acronym}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 whitespace-nowrap">
                    <MapPin className="h-3 w-3 text-brand shrink-0" />
                    <span>{assoc.region}</span>
                  </span>
                </div>

                {/* Association Title */}
                <h3 className="mt-3 font-heading text-lg font-bold uppercase tracking-tight text-navy leading-snug group-hover:text-brand transition-colors">
                  {assoc.name}
                </h3>
                {assoc.chapterOrSubtitle && (
                  <p className="text-xs font-semibold text-brand mt-0.5">
                    {assoc.chapterOrSubtitle}
                  </p>
                )}

                {/* Description */}
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  {assoc.description}
                </p>

                {/* Standards Pills */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {assoc.standards.map((std, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center text-[10px] font-medium font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-2">
                <Link
                  href={assoc.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-navy hover:border-brand hover:bg-brand hover:text-white transition-all shadow-2xs group/btn"
                >
                  <span>Visit Portal</span>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover/btn:text-white transition-colors" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee Trust Rail */}
        <div className="mt-14 rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <Award className="h-5 w-5 text-brand" />
              <span className="text-xs font-bold uppercase tracking-wider text-navy font-heading">
                Continuous Quality &amp; Certification Alignment
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>Verified Foundry Member Network</span>
            </div>
          </div>

          {/* Marquee Track */}
          <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="flex w-max items-center gap-8 py-2 animate-marquee">
              {/* Render twice for continuous infinite scroll */}
              {[...associations, ...associations].map((assoc, index) => (
                <Link
                  key={`${assoc.id}-${index}`}
                  href={assoc.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-20 w-52 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50/50 p-4 transition-all hover:border-brand hover:bg-white hover:shadow-xs group/rail"
                  title={assoc.name}
                >
                  <Image
                    src={assoc.logoUrl}
                    alt={assoc.name}
                    width={160}
                    height={50}
                    className="max-h-12 w-auto max-w-[80%] object-contain transition-transform group-hover/rail:scale-105"
                    unoptimized
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Standards Cross-Reference Disclaimer */}
        <div className="mt-8 rounded-lg bg-navy-50/70 border border-navy-100 p-4 text-center">
          <p className="text-xs text-slate-600 leading-relaxed">
            <strong className="text-navy font-bold">Standardization Notice:</strong> Foundry Exchange respects and cross-references published metallurgical guidelines, chemical classifications, and safety codes formulated by regional casting associations. Listing verification audits are conducted in accordance with ASTM, ISO 9001, and corresponding national foundry specifications.
          </p>
        </div>
      </div>
    </section>
  );
}
