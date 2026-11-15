import React from "react";
import Link from "next/link";
import {
  Layers,
  Hammer,
  Factory,
  Wrench,
  Flame,
  Droplets,
  Box,
  SlidersHorizontal,
  ShieldCheck,
  Thermometer,
  ArrowRight,
} from "lucide-react";
import { foundryCategories } from "@/data/categories";

function renderCategoryIcon(iconName: string) {
  const iconProps = { className: "h-6 w-6 transition-colors duration-200" };
  switch (iconName) {
    case "Layers":
      return <Layers {...iconProps} />;
    case "Hammer":
      return <Hammer {...iconProps} />;
    case "Factory":
      return <Factory {...iconProps} />;
    case "Wrench":
      return <Wrench {...iconProps} />;
    case "Flame":
      return <Flame {...iconProps} />;
    case "Droplets":
      return <Droplets {...iconProps} />;
    case "Box":
      return <Box {...iconProps} />;
    case "SlidersHorizontal":
      return <SlidersHorizontal {...iconProps} />;
    case "ShieldCheck":
      return <ShieldCheck {...iconProps} />;
    case "Thermometer":
      return <Thermometer {...iconProps} />;
    default:
      return <Layers {...iconProps} />;
  }
}

export default function CategoryGrid() {
  return (
    <section
      id="categories"
      className="relative z-10 bg-surface py-20 border-b border-slate-200"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* PrecastXchange Signature Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[3px] w-10 bg-brand" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Industrial Taxonomy
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy uppercase font-heading">
              Browse by Category
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
              Direct access to specialized foundry sectors, from primary liquid
              melt hardware to certified finish-machined castings.
            </p>
          </div>

          <Link
            href="/#marketplace"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand hover:text-brand-hover hover:underline"
          >
            <span>View All Categories &amp; Specs</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 10-Card Grid with Bold Brand Red Top Border (4 cards per row on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-6">
          {foundryCategories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative flex flex-col justify-between rounded-xl border border-slate-200 border-t-4 border-t-brand bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-lg"
            >
              <div className="flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand text-white border border-brand shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:bg-white group-hover:text-brand group-hover:border-brand group-hover:shadow-md">
                    {renderCategoryIcon(category.iconName)}
                  </div>
                  <span className="inline-flex items-center justify-center rounded-full bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-navy transition-all duration-200 hover:bg-brand hover:text-white hover:border-brand hover:scale-105 group-hover:border-slate-300">
                    Explore
                  </span>
                </div>

                <h3 className="font-heading text-lg xl:text-xl font-bold uppercase tracking-tight text-navy group-hover:text-brand transition-colors min-h-[3.25rem] flex items-start">
                  {category.name}
                </h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider min-h-[2rem] flex items-start mt-0.5">
                  {category.subheading}
                </p>

                <p className="mt-2.5 text-xs leading-relaxed text-[#C82425] line-clamp-3 min-h-[3.25rem]">
                  {category.description}
                </p>
              </div>

              {/* Tag Chips & Footer Section - Uniform, pixel-aligned across all cards */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="h-[52px] flex flex-col justify-between">
                  {/* Line 1: Primary Specification Tag */}
                  <div className="flex items-center">
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-mono font-medium text-navy truncate max-w-full">
                      {category.featuredTags[0]}
                    </span>
                  </div>

                  {/* Line 2: Secondary Specification Tag + Count Badge */}
                  <div className="flex items-center gap-1.5">
                    {category.featuredTags[1] && (
                      <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10.5px] font-mono font-medium text-navy truncate">
                        {category.featuredTags[1]}
                      </span>
                    )}
                    {category.featuredTags.length > 2 && (
                      <span className="shrink-0 rounded bg-slate-50 border border-slate-200/70 px-1.5 py-0.5 text-[10.5px] font-mono font-medium text-slate-500">
                        +{category.featuredTags.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs font-bold text-navy group-hover:text-brand transition-colors pt-2 border-t border-slate-100">
                  <span>Explore Listings</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
