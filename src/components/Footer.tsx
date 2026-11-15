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
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 border border-navy-700 text-brand shadow-2xs">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold uppercase tracking-tight text-white">
                Digital Clearinghouse for the Metal Casting &amp; Tooling
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
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-16">
        {/* Brand Showcase: Left Text, Centered Logo, Right Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 pb-12 border-b border-navy-800">
          {/* Left Column: Mission Statement */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0">
              The premier industrial exchange built specifically for the
              metal casting and forging sectors. Connecting North American and global foundries,
              pattern shops, melt equipment builders, and OEMs.
            </p>
          </div>

          {/* Center Column: Prominent Centered Brand Logo */}
          <div className="order-1 lg:order-2 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center bg-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl shadow-lg border border-white/20 hover:scale-105 transition-transform"
            >
              <Image
                src="/foundry-logo.png"
                alt="Foundry Exchange Logo"
                width={360}
                height={108}
                className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Right Column: Contact & Socials */}
          <div className="order-3 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center lg:items-end justify-center lg:justify-end gap-6 lg:gap-8 shrink-0">
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand" />
                <a
                  href={`tel:${siteConfig.contactPhone}`}
                  className="hover:text-white font-semibold text-sm"
                >
                  {siteConfig.contactPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand" />
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="hover:text-white font-medium"
                >
                  {siteConfig.contactEmail}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  {siteConfig.officeAddress}
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy-800 text-slate-300 hover:bg-brand hover:text-white transition-all shadow-xs"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.95 0-1.72-.78-1.72-1.73s.77-1.73 1.72-1.73c.96 0 1.73.78 1.73 1.73 0 .95-.77 1.73-1.73 1.73m1.4 10.24V10.63H5.06v8.37h2.8z" />
                </svg>
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy-800 text-slate-300 hover:bg-brand hover:text-white transition-all shadow-xs"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy-800 text-slate-300 hover:bg-brand hover:text-white transition-all shadow-xs"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122-2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy-800 text-slate-300 hover:bg-brand hover:text-white transition-all shadow-xs"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Eight Columns of Specialized Industrial Details (12 Lines Content Per Column) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 pt-10">
          {/* Column 1: Ferrous & Non-Ferrous Castings */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              <span>Castings</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Ductile Iron A536</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Grey Iron A48</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">High-Mn Hadfield</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Carbon &amp; Alloy</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Chrome White Iron</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Ni-Resist Castings</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Austempered (ADI)</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Investment 316/304</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Aluminum Die Cast</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Manganese Bronze</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Pump Volute Bodies</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">V-Process Castings</Link></li>
            </ul>
          </div>

          {/* Column 2: Precision Forgings */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              <span>Forgings</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Open-Die Shafts</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Drop Forgings</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Seamless Rings</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">A105 Flanges</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">4140/4340 Pins</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Titanium Parts</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Closed-Die Sweeps</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Stepped Pinions</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Frac Fluid Ends</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">A350 LF2 Discs</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">F51 Duplex Forging</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Heavy Gear Blanks</Link></li>
            </ul>
          </div>

          {/* Column 3: Melt Equipment */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              <span>Melt Shop</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Induction Furnaces</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">EAF Melt Pots</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Sand Mixers</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Core Blowers</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Heat Treat Ovens</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Shot Blast Units</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Pouring Ladles</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Furnace Power Leads</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Induction Coils</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Sand Mullers</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Reclamation Kilns</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Robotic Grinders</Link></li>
            </ul>
          </div>

          {/* Column 4: Tooling & Patterns */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              <span>Tooling</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">CNC Matchplates</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Core Box Tooling</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Die Cast Dies</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Urethane Masters</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">3D Sand Printing</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Tooling Escrow</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">H13 Die Blocks</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Permanent Molds</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Flaskless Jackets</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Pattern Storage</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Cope &amp; Drag Sets</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Shell Core Inserts</Link></li>
            </ul>
          </div>

          {/* Column 5: Raw Materials */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              <span>Raw Materials</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Foundry Pig Iron</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">FeSi 75% Alloy</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">HMS 1/2 Scrap</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Inoculants</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Refractory Linings</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Ingot Feeds</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">AFS Silica Sand</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Chromite Chill Sand</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Low-Phos Briquettes</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Ferro-Manganese</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">MgFeSi Nodulizers</Link></li>
              <li><Link href="/#marketplace" className="hover:text-white transition-colors">Dry Vibe Alumina</Link></li>
            </ul>
          </div>

          {/* Column 6: Metallurgy & Lab QA */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              <span>QA &amp; Lab</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/#contact-form" className="hover:text-white transition-colors">3.1 Digital MTRs</Link></li>
              <li><Link href="/#contact-form" className="hover:text-white transition-colors">Volumetric UT</Link></li>
              <li><Link href="/#contact-form" className="hover:text-white transition-colors">OES Spark Testing</Link></li>
              <li><Link href="/#contact-form" className="hover:text-white transition-colors">MPI Crack Tests</Link></li>
              <li><Link href="/#contact-form" className="hover:text-white transition-colors">Charpy Impact V</Link></li>
              <li><Link href="/#contact-form" className="hover:text-white transition-colors">PPAP L3 Packages</Link></li>
              <li><Link href="/#contact-form" className="hover:text-white transition-colors">Brinell Hardness</Link></li>
              <li><Link href="/#contact-form" className="hover:text-white transition-colors">Radiography (RT)</Link></li>
              <li><Link href="/#contact-form" className="hover:text-white transition-colors">Ferrite / Pearlite</Link></li>
              <li><Link href="/#contact-form" className="hover:text-white transition-colors">Hydrostatic Proof</Link></li>
              <li><Link href="/#contact-form" className="hover:text-white transition-colors">CMM 3D Scans</Link></li>
              <li><Link href="/#contact-form" className="hover:text-white transition-colors">Third-Party Audits</Link></li>
            </ul>
          </div>

          {/* Column 7: Commercial Services */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              <span>Services</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/#services" className="hover:text-white transition-colors">24-Hr RFQ Routing</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Barter Exchange</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Asset Liquidation</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Insured Freight</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Escrow Protection</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Plant Audits</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Asset Valuations</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Rigging Logistics</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Pattern Clearing</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Alloy Advisory</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Melt Decommission</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Export Clearances</Link></li>
            </ul>
          </div>

          {/* Column 8: Company & Governance */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              <span>Company</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Advisory Board</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Verified Program</Link></li>
              <li><Link href="/#associations" className="hover:text-white transition-colors">Associations</Link></li>
              <li><Link href="/#contact-form" className="hover:text-white transition-colors">ASTM / DIN Specs</Link></li>
              <li><Link href="/#contact-form" className="hover:text-white transition-colors">Sourcing Desk</Link></li>
              <li><Link href="/#categories" className="hover:text-white transition-colors">Taxonomy Index</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Fee Structure</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Supplier Code</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Rigging Network</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Foundry Careers</Link></li>
              <li><Link href="/#contact-form" className="hover:text-white transition-colors">Contact Metallurgy</Link></li>
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
