import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Industrial Metallurgy Desk | Foundry Exchange",
  description:
    "Connect directly with Foundry Exchange metallurgists, equipment appraisers, and logistics coordinators across our North American & global operations hubs.",
};

const globalHubs = [
  {
    country: "USA",
    city: "Cleveland, Ohio",
    role: "Headquarters & Primary Metallurgical Lab",
    address: "1400 Industrial Parkway, Cleveland, OH 44114",
    phone: "+1 (800) 459-CAST",
    email: "foundryxchange@gmail.com",
    hours: "24/7 RFQ Routing • 07:00 - 18:00 EST Lab Desk",
  },
  {
    country: "Canada",
    city: "Hamilton, Ontario",
    role: "Infrastructure & Heavy Melt Operations Hub",
    address: "880 Burlington St E, Hamilton, ON L8L 4K9",
    phone: "+1 (800) 459-2278",
    email: "canada@foundryexchange.com",
    hours: "08:00 - 17:00 EST Heavy Transport Desk",
  },
  {
    country: "Mexico",
    city: "Monterrey, Nuevo León",
    role: "Manufacturing & Cross-Border Logistics Hub",
    address: "Av. Industrial San Jerónimo 402, Monterrey, NL 64640",
    phone: "+52 (81) 8000-CAST",
    email: "mexico@foundryexchange.com",
    hours: "08:00 - 18:00 CST USMCA Customs Dispatch",
  },
];

export default function ContactPage() {
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
            <span className="text-white">Contact &amp; Support Desk</span>
          </div>

          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
              North American &amp; Global Operations Hubs
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white font-heading">
              Contact Metallurgy &amp; Sourcing Desk
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-body">
              Whether you need drawing feasibility assessment, freight clearance
              for a 40-ton casting, or want to list complete melt deck assets, our
              metallurgical team is available 24/7.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Global Operations Hubs Cards */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {globalHubs.map((hub) => (
            <div
              key={hub.country}
              className="rounded-xl border border-slate-200 border-t-2 border-t-brand bg-white p-6 shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="rounded bg-navy px-2.5 py-0.5 text-xs font-mono font-bold text-white uppercase">
                  {hub.country}
                </span>
                <span className="text-xs font-bold text-slate-500 font-mono">
                  {hub.city}
                </span>
              </div>

              <h3 className="font-heading text-lg font-bold uppercase text-navy">
                {hub.role}
              </h3>

              <div className="mt-4 space-y-2 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span>{hub.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand shrink-0" />
                  <a href={`tel:${hub.phone}`} className="hover:text-brand font-medium">
                    {hub.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-brand shrink-0" />
                  <a href={`mailto:${hub.email}`} className="hover:text-brand font-medium">
                    {hub.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                  <Clock className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  <span>{hub.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Interactive Contact Form */}
      <div className="mt-8">
        <ContactForm />
      </div>
    </div>
  );
}
