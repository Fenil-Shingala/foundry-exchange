import React from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Tag,
  FileText,
  ArrowLeftRight,
  Repeat,
  Factory,
  Gavel,
  Archive,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

function renderModeIcon(iconName: string) {
  const iconProps = { className: "h-6 w-6 text-white" };
  switch (iconName) {
    case "ShoppingCart":
      return <ShoppingCart {...iconProps} />;
    case "Tag":
      return <Tag {...iconProps} />;
    case "FileText":
      return <FileText {...iconProps} />;
    case "ArrowLeftRight":
      return <ArrowLeftRight {...iconProps} />;
    case "Repeat":
      return <Repeat {...iconProps} />;
    case "Factory":
      return <Factory {...iconProps} />;
    case "Gavel":
      return <Gavel {...iconProps} />;
    case "Archive":
      return <Archive {...iconProps} />;
    default:
      return <ShoppingCart {...iconProps} />;
  }
}

export default function ExchangeModes() {
  return (
    <section
      id="exchange"
      className="bg-surface py-20 border-b border-slate-200"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[3px] w-10 bg-brand" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Versatile Commercial Channels
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-navy font-heading">
              8 Dynamic Exchange Modes
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
              Unlike static directories, Foundry Exchange accommodates how heavy
              industry actually transacts—from spot purchases and barter trades
              to plant auctions and tooling leases.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-full bg-red-50 border border-brand/20 px-3 py-1 text-xs font-bold text-brand">
              Multi-Transaction Engine
            </span>
          </div>
        </div>

        {/* 8-Card Mode Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.exchangeModes.map((mode) => (
            <div
              key={mode.id}
              className="group relative flex flex-col justify-between rounded-xl border border-slate-200 border-t-2 border-t-brand bg-white p-6 shadow-sm transition-all hover:border-brand hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-xs group-hover:scale-105 transition-transform">
                    {renderModeIcon(mode.iconName)}
                  </div>
                  <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-navy">
                    {mode.badge}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-navy group-hover:text-brand transition-colors">
                  {mode.name}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  {mode.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="/#contact-form"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand hover:text-brand-hover"
                >
                  <span>Explore {mode.name}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
