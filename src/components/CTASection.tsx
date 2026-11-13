import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall, ShieldCheck, Factory } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-brand py-16 sm:py-20 text-white shadow-xl">
      {/* Subtle industrial molten gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          background:
            "radial-gradient(circle at 80% 50%, #ffffff 0%, #0c1a30 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1 text-xs font-bold text-white backdrop-blur-xs mb-4 border border-white/20">
              <Factory className="h-3.5 w-3.5 text-white" />
              <span>Foundry Network Expansion</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight font-heading text-white">
              Put Your Foundry On The Map
            </h2>

            <p className="mt-4 text-base sm:text-lg text-white/95 font-normal leading-relaxed">
              Connect directly with Tier-1 OEMs, EPC contractors, and global
              equipment builders actively searching for casting capacity,
              surplus induction furnaces, and certified alloy inventory.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs font-semibold text-white/90">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-white" />
                Verified Industrial Buyers
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-white" />
                Zero Upfront Listing Fees
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-white" />
                Guaranteed Escrow Protection
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <Link
              href="/#contact-form"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-7 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl transition-all hover:bg-navy-dark hover:scale-[1.02]"
            >
              <span>List Your Products</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-white/10 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-xs transition-all hover:bg-white hover:text-brand"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Talk to Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
