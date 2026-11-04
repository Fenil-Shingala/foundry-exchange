import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t-2 border-brand">
      {/* Top Pre-footer Trust Badge — USA Navy-900 */}
      <div className="border-b border-navy-800 bg-navy-900 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 border border-navy-700 text-brand shadow-2xs">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold uppercase tracking-tight text-white">
                B2B Digital Clearinghouse for the Metal Casting &amp; Tooling
                Industry
              </h4>
              <p className="text-xs text-slate-400">
                Connecting foundries, pattern shops, and industrial OEMs across
                North American and global corridors.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-slate-300">
            <span className="rounded bg-navy-800 px-3 py-1 border border-navy-700">
              ASTM Standards
            </span>
            <span className="rounded bg-navy-800 px-3 py-1 border border-navy-700">
              DIN EN Specs
            </span>
            <span className="rounded bg-navy-800 px-3 py-1 border border-navy-700">
              ISO Framework
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Info & Address */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-block bg-white p-1.5 rounded-sm border border-slate-200 shadow-xs"
            >
              <Image
                src="/logo.png"
                alt="Foundry Exchange Logo"
                width={190}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The premier B2B industrial exchange built specifically for the
              metal casting sector. Connecting American and global foundries,
              pattern shops, melt equipment manufacturers, and OEMs.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-brand" />
                <a
                  href={`tel:${siteConfig.contactPhone}`}
                  className="hover:text-white font-medium"
                >
                  {siteConfig.contactPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-brand" />
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="hover:text-white font-medium"
                >
                  {siteConfig.contactEmail}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 text-brand shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  {siteConfig.officeAddress}
                </span>
              </div>
            </div>

            {/* Social Icons (SVGs) */}
            <div className="flex items-center gap-3 pt-3">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-800 text-slate-300 hover:bg-brand hover:text-white transition-colors"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.95 0-1.72-.78-1.72-1.73s.77-1.73 1.72-1.73c.96 0 1.73.78 1.73 1.73 0 .95-.77 1.73-1.73 1.73m1.4 10.24V10.63H5.06v8.37h2.8z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-800 text-slate-300 hover:bg-brand hover:text-white transition-colors"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-800 text-slate-300 hover:bg-brand hover:text-white transition-colors"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-800 text-slate-300 hover:bg-brand hover:text-white transition-colors"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 1: Marketplace */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
              Marketplace
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/#marketplace" className="hover:text-white">
                  Ferrous Castings
                </Link>
              </li>
              <li>
                <Link href="/#marketplace" className="hover:text-white">
                  Non-Ferrous Alloys
                </Link>
              </li>
              <li>
                <Link href="/#marketplace" className="hover:text-white">
                  Foundry Equipment
                </Link>
              </li>
              <li>
                <Link href="/#marketplace" className="hover:text-white">
                  Patterns &amp; Tooling
                </Link>
              </li>
              <li>
                <Link href="/#marketplace" className="hover:text-white">
                  Pig Iron &amp; Scrap
                </Link>
              </li>
              <li>
                <Link href="/#marketplace" className="hover:text-white">
                  Refractory Linings
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/#services" className="hover:text-white">
                  24-Hour RFQ Routing
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white">
                  Spectrometry &amp; NDT
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white">
                  Tooling Escrow &amp; Audit
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white">
                  Heavy Freight Routing
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white">
                  Melt Shop Auctions
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white">
                  B2B Barter Clearing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Knowledge */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
              Knowledge
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/#contact-form" className="hover:text-white">
                  ASTM Casting Standards
                </Link>
              </li>
              <li>
                <Link href="/#contact-form" className="hover:text-white">
                  Ductile vs. Grey Iron Guide
                </Link>
              </li>
              <li>
                <Link href="/#contact-form" className="hover:text-white">
                  Induction Furnace Safety
                </Link>
              </li>
              <li>
                <Link href="/#contact-form" className="hover:text-white">
                  Metallurgical Glossary
                </Link>
              </li>
              <li>
                <Link href="/#contact-form" className="hover:text-white">
                  Green Sand Optimization
                </Link>
              </li>
              <li>
                <Link href="/#contact-form" className="hover:text-white">
                  Surplus Tooling Economics
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Foundry Exchange
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  Metallurgical Advisory
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  Verified Vendor Program
                </Link>
              </li>
              <li>
                <Link href="/#contact-form" className="hover:text-white">
                  Careers in Foundry Tech
                </Link>
              </li>
              <li>
                <Link href="/#contact-form" className="hover:text-white">
                  Press &amp; Industry News
                </Link>
              </li>
              <li>
                <Link href="/#contact-form" className="hover:text-white">
                  Contact Sourcing Desk
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-16 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2026 Foundry Exchange™ (FE). All rights reserved. Registered
            Industrial Trademark.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/#contact-form" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/#contact-form" className="hover:text-white">
              Terms of Exchange
            </Link>
            <Link href="/#contact-form" className="hover:text-white">
              Metallurgical Disclaimers
            </Link>
            <Link href="/#contact-form" className="hover:text-white">
              Security &amp; Escrow
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
