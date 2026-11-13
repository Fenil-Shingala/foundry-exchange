import React from "react";
import {
  BadgeCheck,
  Scale,
  MapPin,
  Clock,
  RefreshCw,
  CheckCircle,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

function renderFeatureIcon(iconName: string) {
  const iconProps = { className: "h-6 w-6 text-white" };
  switch (iconName) {
    case "BadgeCheck":
      return <BadgeCheck {...iconProps} />;
    case "Scale":
      return <Scale {...iconProps} />;
    case "MapPin":
      return <MapPin {...iconProps} />;
    case "Clock":
      return <Clock {...iconProps} />;
    case "RefreshCw":
      return <RefreshCw {...iconProps} />;
    default:
      return <BadgeCheck {...iconProps} />;
  }
}

export default function WhySection() {
  return (
    <section className="bg-surface py-20 border-b border-slate-200">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[3px] w-10 bg-brand" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Industrial Grade Advantage
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-navy font-heading leading-tight">
              Why Heavy Industry Chooses Foundry Exchange
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              Generalist B2B marketplaces fail the casting industry because they treat a 500-ton heat-treated ductile iron casting like consumer goods. Foundry Exchange was built from the melt deck up to handle metallurgical rigor, tooling longevity, and heavy logistics.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Direct connection to audited melt shops and foundries",
                "Strict ASTM, SAE, DIN EN & ISO metallurgical validation",
                "Comprehensive chemical, tensile & NDT report attachments",
                "Reduced pattern tooling costs through surplus reuse",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-bold text-navy">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Testimonial in USA Navy Card with Red Highlight */}
            <div className="mt-8 rounded-xl bg-navy-950 p-6 text-white border-l-4 border-brand shadow-lg">
              <p className="text-xs text-slate-200 italic leading-relaxed">
                “Foundry Exchange cut our casting sourcing timeline from 7 weeks down to 6 days for our ASTM A536 ductile pump housings.”
              </p>
              <div className="mt-4 pt-3 border-t border-navy-800 flex items-center justify-between text-[11px] text-slate-300 font-bold uppercase tracking-wider">
                <span>VP Procurement • Midwest Flow Systems</span>
                <span className="text-brand font-extrabold">Verified Buyer</span>
              </div>
            </div>
          </div>

          {/* Right Column Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {siteConfig.whyFeatures.map((feat, idx) => (
              <div
                key={feat.title}
                className={`rounded-xl border border-slate-200 border-t-2 border-t-brand bg-white p-6 shadow-sm transition-all hover:border-brand hover:shadow-lg ${
                  idx === 4 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand text-white shadow-xs mb-4">
                  {renderFeatureIcon(feat.iconName)}
                </div>

                <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-navy">
                  {feat.title}
                </h3>
                <p className="mt-2 text-xs font-bold text-brand">
                  {feat.summary}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {feat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
