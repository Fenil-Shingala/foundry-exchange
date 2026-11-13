import React from "react";
import { Search, ShieldCheck, FileCheck2, ArrowRight } from "lucide-react";

const steps = [
  {
    stepNumber: "01",
    title: "Find & Source",
    summary:
      "Discover inventory stock, open melt capacity, or submit CAD tooling packages.",
    description:
      "Filter through thousands of certified casting products, surplus induction equipment, or post a targeted RFQ detailing your alloy chemistry, annual volume, and geometric tolerances.",
    icon: Search,
    highlight: "Real-time inventory & capacity index",
  },
  {
    stepNumber: "02",
    title: "Verify Against Spec",
    summary:
      "Audit certifications, metallurgical chemistry, and mechanical properties.",
    description:
      "All participating facilities are pre-screened for ISO 9001, IATF 16949, or AFS compliance. Review 3.1 Mill Test reports, optical spectrometry, and NDT radiography before committing.",
    icon: ShieldCheck,
    highlight: "Zero ghost vendors • Audited melt shops",
  },
  {
    stepNumber: "03",
    title: "Quote & Collect",
    summary: "Receive standardized line-item bids and manage freight dispatch.",
    description:
      "Compare verified bids covering pattern tooling, casting piece price, heat treatment, and finish machining. Finalize terms with milestone payments and integrated freight routing.",
    icon: FileCheck2,
    highlight: "24-hour average quote turnaround",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="services"
      className="section-blueprint text-white py-20 md:py-24 border-b border-navy-800 relative"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-[3px] w-10 bg-brand" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Streamlined Procurement
            </span>
            <span className="h-[3px] w-10 bg-brand" aria-hidden="true" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white font-heading">
            How The Exchange Works
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            A transparent, three-step procurement and liquid asset exchange
            designed specifically for foundrymen, OEMs, and metallurgical
            engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.stepNumber}
                className="relative flex flex-col justify-between rounded-xl border border-navy-700 bg-navy-900/90 p-8 shadow-xl backdrop-blur-xs transition-all hover:border-brand hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading text-4xl font-extrabold text-brand">
                      {step.stepNumber}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 border border-navy-600 text-white shadow-xs">
                      <Icon className="h-6 w-6 text-brand" />
                    </div>
                  </div>

                  <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-brand">
                    {step.summary}
                  </p>
                  <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-navy-800 flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <span className="h-2 w-2 rounded-full bg-brand" />
                  <span>{step.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout in Brand Red & Navy */}
        <div className="mt-14 rounded-xl border-2 border-brand bg-navy-950 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <div className="flex items-center gap-2 text-brand font-bold text-xs uppercase tracking-wider mb-1">
              <span>● Immediate Specification Routing</span>
            </div>
            <h4 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white">
              Have an urgent casting drawing or melt schedule requirement?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Upload your 2D/3D CAD models and specification sheet to initiate
              the 24-hour foundry matching process.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="http://foundrydrawings.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-hover shadow-lg hover:scale-105 transition-all"
            >
              <span>Submit RFQ Now</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
