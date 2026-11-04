import React from "react";
import {
  Car,
  Building2,
  Zap,
  Anchor,
  Tractor,
  Pickaxe,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

function renderIndustryIcon(iconName: string) {
  const iconProps = { className: "h-6 w-6 text-white" };
  switch (iconName) {
    case "Car":
      return <Car {...iconProps} />;
    case "Building2":
      return <Building2 {...iconProps} />;
    case "Zap":
      return <Zap {...iconProps} />;
    case "Anchor":
      return <Anchor {...iconProps} />;
    case "Tractor":
      return <Tractor {...iconProps} />;
    case "Pickaxe":
      return <Pickaxe {...iconProps} />;
    default:
      return <Building2 {...iconProps} />;
  }
}

export default function IndustriesSection() {
  return (
    <section className="bg-white py-20 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-[3px] w-10 bg-brand" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              End-Market Sectors
            </span>
            <span className="h-[3px] w-10 bg-brand" aria-hidden="true" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-navy font-heading">
            Industries We Serve
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            From precision powertrain components to high-impact mineral crushing mantles, Foundry Exchange connects specialized melting metallurgy with demanding global sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.industries.map((ind) => (
            <div
              key={ind.name}
              className="group rounded-xl border border-slate-200 border-t-2 border-t-transparent hover:border-t-brand bg-slate-50 p-6 shadow-sm transition-all hover:border-brand hover:shadow-xl hover:bg-white"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-xs group-hover:scale-105 transition-all">
                  {renderIndustryIcon(ind.iconName)}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-navy group-hover:text-brand transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                    {ind.subtitle}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200">
                <p className="text-[11px] uppercase tracking-wider font-bold text-brand mb-2">
                  Common Castings &amp; Standards:
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {ind.applications.map((app, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
