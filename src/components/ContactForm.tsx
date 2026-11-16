"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Shield,
  Clock,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import CustomDropdown, { DropdownOption } from "@/components/CustomDropdown";

const inquiryOptions: DropdownOption[] = [
  {
    value: "RFQ & Casting Sourcing",
    label: "RFQ & Casting Sourcing (Ferrous / Non-Ferrous)",
  },
  {
    value: "Listing Plant Equipment",
    label: "Listing Foundry Equipment or Molds",
  },
  {
    value: "Raw Materials & Alloys",
    label: "Raw Materials, Pig Iron & Scrap Lots",
  },
  {
    value: "Metallurgical Testing & NDT",
    label: "Testing, Spectrometry & NDT Services",
  },
  {
    value: "General Exchange Inquiry",
    label: "General Foundry Exchange Inquiry",
  },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "RFQ & Casting Sourcing",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inquiry submitted:", formData);
    setSubmitted(true);
  };

  return (
    <section
      id="contact-form"
      className="bg-slate-50 py-20 border-b border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand">
                Industrial Sourcing Desk
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-navy font-heading">
                Connect With An Exchange Metallurgist
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether you need advice on high-chrome ASTM A532 castings, want
                to liquidate surplus induction melting capacity, or require
                bespoke pattern matchplates, our team is ready to assist.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-slate-200 text-brand shadow-2xs shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Direct Line
                    </span>
                    <a
                      href={`tel:${siteConfig.contactPhone}`}
                      className="text-sm font-bold text-navy hover:text-brand"
                    >
                      {siteConfig.contactPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-slate-200 text-cobalt shadow-2xs shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Engineering Inquiries
                    </span>
                    <a
                      href={`mailto:${siteConfig.contactEmail}`}
                      className="text-sm font-bold text-navy hover:text-brand"
                    >
                      {siteConfig.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-slate-200 text-navy shadow-2xs shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Foundry Clearinghouse Hub
                    </span>
                    <p className="text-sm font-semibold text-slate-700">
                      {siteConfig.officeAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-slate-200 text-cobalt shadow-2xs shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Desk Response SLA
                    </span>
                    <p className="text-sm font-semibold text-slate-700">
                      Mon – Fri: 07:00 – 19:00 EST • 24/7 RFQ Ingestion
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-slate-200 bg-white p-4 flex items-center gap-3 shadow-2xs">
              <Shield className="h-8 w-8 text-cobalt shrink-0" />
              <p className="text-xs text-slate-600">
                <strong className="text-navy font-bold">
                  Standard Mutual NDA Protection:
                </strong>{" "}
                All drawing files, tooling packages, and metallurgy specs
                submitted through Foundry Exchange remain strictly confidential.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-cobalt mb-4 border border-blue-200">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-navy">
                    Inquiry Received Successfully
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, {formData.name}. Our casting &amp; metallurgy
                    desk will review your requirements and respond within 24
                    hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        inquiryType: "RFQ & Casting Sourcing",
                        message: "",
                      });
                    }}
                    className="mt-6 rounded-md bg-navy px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-navy-dark"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-4 mb-2">
                    <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-navy">
                      Submit Your Technical Inquiry
                    </h3>
                    <p className="text-xs text-slate-500">
                      Fill out the form below. An engineering specialist will
                      review your specs.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-sm text-navy focus:border-cobalt focus:bg-white focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1">
                        Company / Foundry *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Midwest Castings Corp"
                        className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-sm text-navy focus:border-cobalt focus:bg-white focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="jdoe@foundry.com"
                        className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-sm text-navy focus:border-cobalt focus:bg-white focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+1 (555) 000-0000"
                        className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-sm text-navy focus:border-cobalt focus:bg-white focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1">
                      Inquiry Category *
                    </label>
                    <CustomDropdown
                      options={inquiryOptions}
                      value={formData.inquiryType}
                      onChange={(val) =>
                        setFormData({ ...formData, inquiryType: val })
                      }
                      variant="light"
                      size="md"
                      name="inquiryType"
                      buttonClassName="bg-slate-50/70 border-slate-300 font-medium text-navy text-sm py-2.5"
                      menuClassName="w-full"
                      aria-label="Inquiry Category"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1">
                      Project Details &amp; Specifications *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Specify material grade (e.g. ASTM A48 Class 30, Ductile 65-45-12), estimated weight, quantity, pattern status, or equipment description..."
                      className="w-full rounded-lg border border-slate-300 bg-slate-50/50 p-3.5 text-sm text-navy focus:border-cobalt focus:bg-white focus:outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-brand py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-brand-hover focus:outline-hidden focus:ring-2 focus:ring-cobalt"
                  >
                    <span>Submit Inquiry to Exchange</span>
                    <Send className="h-4 w-4" />
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    By submitting, you agree to our Terms of Exchange and
                    Industrial Privacy Policy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
