import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Foundry Exchange",
  description:
    "Learn more about Foundry Exchange, our metallurgical mission, verified vendor standards, and industrial network.",
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 py-16 sm:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand hover:text-brand-hover mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home Exchange</span>
        </Link>

        {/* Header */}
        <div>
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand">
            About Foundry Exchange
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-navy font-heading">
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
        <div className="mt-12 space-y-10">
          <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-2xs">
            <h2 className="font-heading text-2xl font-bold uppercase text-navy">
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
            <div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-2xs hover:border-brand transition-all">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-brand border border-brand/20 mb-4 transition-all duration-300 group-hover:scale-105 group-hover:bg-brand group-hover:text-white group-hover:border-brand">
                <ShieldCheck className="h-5 w-5 transition-colors duration-200" />
              </div>
              <h3 className="font-heading text-lg font-bold uppercase text-navy group-hover:text-brand transition-colors">
                Strict Quality Standards
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Every casting specification is governed by international
                metallurgical classifications including ASTM A48, ASTM A536, DIN
                EN 1561/1563, and ISO 9001 quality system certifications.
              </p>
            </div>

            <div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-2xs hover:border-cobalt transition-all">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-cobalt mb-4 border border-blue-200 transition-all duration-300 group-hover:scale-105 group-hover:bg-cobalt group-hover:text-white group-hover:border-cobalt">
                <Factory className="h-5 w-5 transition-colors duration-200" />
              </div>
              <h3 className="font-heading text-lg font-bold uppercase text-navy group-hover:text-cobalt transition-colors">
                Circular Tooling Economy
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                By enabling foundries to buy, sell, or barter surplus
                matchplates, pattern sets, core boxes, and flasks, we eliminate
                months of lead times and tons of industrial tooling waste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
