"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Upload,
  CheckCircle,
  ShieldCheck,
  Clock,
  Building,
  Mail,
  Phone,
  Send,
  HelpCircle,
} from "lucide-react";

export default function RFQPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    processType: "Ferrous Castings (Ductile / Grey Iron)",
    alloySpec: "ASTM A536 Ductile Iron (65-45-12)",
    estimatedWeight: "25 - 100 kg",
    annualQuantity: "500 - 2,500 pcs/year",
    machiningRequired: "Rough Machined",
    testingRequired: ["3.1 Digital MTR", "Volumetric UT"],
    deliveryTimeline: "4 - 8 Weeks",
    name: "",
    company: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleCheckboxChange = (test: string) => {
    setFormData((prev) => {
      const exists = prev.testingRequired.includes(test);
      if (exists) {
        return {
          ...prev,
          testingRequired: prev.testingRequired.filter((t) => t !== test),
        };
      } else {
        return {
          ...prev,
          testingRequired: [...prev.testingRequired, test],
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("RFQ Submitted:", formData);
    setSubmitted(true);
  };

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
            <span className="text-white">Post an RFQ</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/20 border border-brand/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-300 mb-3">
              <Clock className="h-3.5 w-3.5" />
              Guaranteed 24-Hour Routing
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white font-heading">
              Post an Industrial Casting or Forging RFQ
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-body">
              Submit your engineering drawings and metallurgical specifications.
              Our proprietary clearinghouse matches your drawing packages with
              verified foundries with open pour schedules and certified metallurgy.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Main RFQ Form Container */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        {submitted ? (
          <div className="rounded-2xl border-2 border-brand bg-white p-12 text-center shadow-lg">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-brand mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-brand" />
            </div>
            <h2 className="text-3xl font-extrabold uppercase text-brand font-heading">
              RFQ Package Successfully Routed!
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Your drawing package for <strong className="text-navy">{formData.alloySpec}</strong> has been assigned tracking code <span className="font-mono font-bold text-brand">FE-RFQ-{Math.floor(100000 + Math.random() * 900000)}</span>.
              A senior foundry metallurgist is reviewing gating and parting lines. You will receive matched supplier bids within 24 business hours.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/marketplace"
                className="rounded-lg bg-navy px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand transition-colors cursor-pointer"
              >
                Browse Marketplace
              </Link>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Submit Another RFQ
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm"
          >
            {/* Form Section 1: Process & Alloy */}
            <div className="border-b border-slate-200 pb-8 mb-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand mb-1">
                <span>Step 1 of 4</span>
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-brand mb-6">
                Process Classification &amp; Metallurgy
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Manufacturing Process *
                  </label>
                  <select
                    value={formData.processType}
                    onChange={(e) =>
                      setFormData({ ...formData, processType: e.target.value })
                    }
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-xs text-slate-800 focus:border-brand focus:outline-hidden"
                  >
                    <option>Ferrous Castings (Ductile / Grey Iron)</option>
                    <option>Steel Castings (Carbon / High-Alloy / Duplex)</option>
                    <option>Non-Ferrous Castings (Aluminum / Bronze / Brass)</option>
                    <option>Precision Investment Castings (Lost Wax)</option>
                    <option>Open-Die Steel Forgings (Shafts / Discs / Rings)</option>
                    <option>Closed-Die Hammer &amp; Press Forgings</option>
                    <option>Tooling, CNC Matchplates &amp; Core Boxes</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Target Alloy Specification *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.alloySpec}
                    onChange={(e) =>
                      setFormData({ ...formData, alloySpec: e.target.value })
                    }
                    placeholder="e.g. ASTM A536 65-45-12, ASTM A105, 4140 Q&T"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-xs text-slate-800 focus:border-brand focus:outline-hidden"
                  />
                </div>
              </div>
            </div>

            {/* Form Section 2: Quantities & Machining */}
            <div className="border-b border-slate-200 pb-8 mb-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand mb-1">
                <span>Step 2 of 4</span>
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-brand mb-6">
                Batch Dimensions &amp; Machining State
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Estimated Part Weight *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.estimatedWeight}
                    onChange={(e) =>
                      setFormData({ ...formData, estimatedWeight: e.target.value })
                    }
                    placeholder="e.g. 45 kg (100 lbs)"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-xs text-slate-800 focus:border-brand focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Annual Estimated Volume *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.annualQuantity}
                    onChange={(e) =>
                      setFormData({ ...formData, annualQuantity: e.target.value })
                    }
                    placeholder="e.g. 500 pcs/year"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-xs text-slate-800 focus:border-brand focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Supply Condition *
                  </label>
                  <select
                    value={formData.machiningRequired}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        machiningRequired: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-xs text-slate-800 focus:border-brand focus:outline-hidden"
                  >
                    <option>As-Cast (Shot Blasted &amp; Degated)</option>
                    <option>Rough Machined (Proof Turn)</option>
                    <option>Finish CNC Machined to Print</option>
                    <option>Heat Treated Only (Annealed / Q&amp;T)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Form Section 3: Quality Testing */}
            <div className="border-b border-slate-200 pb-8 mb-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand mb-1">
                <span>Step 3 of 4</span>
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-brand mb-4">
                Mandatory Quality &amp; Lab Certifications
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "3.1 Digital MTR",
                  "Volumetric UT",
                  "Magnetic Particle (MPI)",
                  "Radiography (RT)",
                  "CMM 3D Scan",
                  "Charpy Impact CVN",
                  "Brinell Hardness",
                  "PPAP Level 3",
                  "Hydrostatic Proof",
                ].map((test) => (
                  <label
                    key={test}
                    className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700 cursor-pointer hover:border-brand hover:bg-white transition-all"
                  >
                    <input
                      type="checkbox"
                      checked={formData.testingRequired.includes(test)}
                      onChange={() => handleCheckboxChange(test)}
                      className="rounded text-brand focus:ring-brand"
                    />
                    <span className="font-medium">{test}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Form Section 4: Contact & Drawing Upload */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand mb-1">
                <span>Step 4 of 4</span>
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-brand mb-6">
                Drawing Package &amp; Buyer Coordinates
              </h3>

              {/* Mock Upload Zone */}
              <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer mb-6">
                <Upload className="h-8 w-8 text-brand mx-auto mb-2" />
                <p className="text-xs font-bold uppercase text-navy">
                  Click to attach CAD Models or 2D Drawings
                </p>
                <p className="text-[11px] text-slate-500 mt-1">
                  Supports STEP, IGES, DXF, DWG, SLDPRT, PDF (up to 50MB per file)
                </p>
                <span className="inline-block mt-3 text-[10px] font-mono bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-600">
                  Protected under strict automatic Mutual NDA
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Engineering / Sourcing Lead"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-xs text-slate-800 focus:border-brand focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="OEM / Tier-1 Manufacturer"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-xs text-slate-800 focus:border-brand focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="procurement@company.com"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-xs text-slate-800 focus:border-brand focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Direct Telephone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-xs text-slate-800 focus:border-brand focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Additional Engineering Tolerances or Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  placeholder="Detail parting line restrictions, core configurations, critical dimensional fits, or delivery destination..."
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-xs text-slate-800 focus:border-brand focus:outline-hidden"
                />
              </div>
            </div>

            {/* Submit Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="h-4 w-4 text-brand" />
                <span>Encrypted transfer • Only audited foundries receive prints</span>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto rounded-lg bg-brand px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-hover transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="h-4 w-4" />
                <span>Submit RFQ for Routing</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
