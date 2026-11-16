import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
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
  ArrowLeft,
  FileText,
  CheckCircle,
  MapPin,
  Clock,
} from "lucide-react";
import { foundryCategories, Category } from "@/data/categories";
import { featuredListings } from "@/data/listings";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return foundryCategories.map((c) => ({
    category: c.id,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = foundryCategories.find((c) => c.id === categorySlug);
  if (!category) {
    return {
      title: "Category Not Found | Foundry Exchange",
    };
  }

  return {
    title: `${category.name} (${category.subheading}) | Foundry Exchange`,
    description: category.description,
  };
}

function renderCategoryIcon(iconName: string) {
  const iconProps = { className: "h-8 w-8 text-white" };
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
      return <Factory {...iconProps} />;
  }
}

export default async function CategoryDetailPage({
  params,
}: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = foundryCategories.find((c) => c.id === categorySlug);

  if (!category) {
    notFound();
  }

  // Filter listings loosely matching the category name or keywords
  const matchedListings = featuredListings.filter((l) => {
    const catLow = category.name.toLowerCase();
    const lCat = l.category.toLowerCase();
    if (category.id === "castings" && lCat.includes("casting")) return true;
    if (category.id === "forgings" && lCat.includes("forg")) return true;
    if (
      category.id === "equipment" &&
      (lCat.includes("melt") || lCat.includes("furnace") || lCat.includes("equip"))
    )
      return true;
    if (category.id === "tooling" && (lCat.includes("tool") || lCat.includes("pattern")))
      return true;
    if (category.id === "raw-materials" && (lCat.includes("raw") || lCat.includes("alloy") || lCat.includes("scrap")))
      return true;
    if (category.id === "heat-treating" && (lCat.includes("heat") || lCat.includes("oven")))
      return true;
    if (category.id === "testing-inspection" && (lCat.includes("test") || lCat.includes("lab")))
      return true;
    if (category.id === "machining-finishing" && (lCat.includes("machin") || lCat.includes("fettling")))
      return true;
    return lCat.includes(catLow);
  });

  // Fallback to first 4 listings if none strictly matched
  const displayListings =
    matchedListings.length > 0 ? matchedListings : featuredListings.slice(0, 4);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Header Hero */}
      <div className="bg-navy py-12 sm:py-16 text-white border-b-2 border-brand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/marketplace" className="hover:text-white transition-colors">
              Marketplace
            </Link>
            <span>/</span>
            <span className="text-white">{category.name}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand border border-brand shadow-md">
                  {renderCategoryIcon(category.iconName)}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400 block">
                    {category.subheading}
                  </span>
                  <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-brand font-heading">
                    {category.name}
                  </h1>
                </div>
              </div>

              <p className="mt-3 text-base text-slate-200 leading-relaxed font-body">
                {category.description}
              </p>

              {/* Featured specs tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {category.featuredTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/20 bg-white/10 px-3 py-1 text-xs font-mono font-bold text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Stats Box */}
            <div className="bg-navy-950 border border-navy-800 p-6 rounded-xl flex flex-col justify-center shrink-0 min-w-[220px]">
              <span className="text-xs font-bold uppercase text-slate-400">
                Active Listings
              </span>
              <span className="text-4xl font-extrabold text-white font-heading mt-1">
                {category.productCount ? `${category.productCount.toLocaleString()}+` : "250+"}
              </span>
              <p className="text-[11px] text-slate-400 mt-2">
                Verified North American &amp; Global Suppliers
              </p>
              <Link
                href="/rfq"
                className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-lg bg-brand py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-hover transition-colors cursor-pointer"
              >
                <span>Post Division RFQ</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Subcategories & Technical Specs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {category.subcategories && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[3px] w-10 bg-brand" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Division Classifications
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-brand font-heading mb-6">
              Subcategories &amp; Component Types
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.subcategories.map((sub, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col justify-between"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-50 border border-navy-200 text-[10px] font-mono font-bold text-navy">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xs font-bold uppercase text-navy leading-snug">
                      {sub}
                    </h3>
                  </div>
                  <Link
                    href="/rfq"
                    className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-brand hover:text-brand-hover cursor-pointer"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Top Applications */}
        {category.topApplications && (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[3px] w-10 bg-brand" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Industrial End-Markets
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold uppercase text-navy font-heading mb-4">
              Primary Sectors Utilizing {category.name}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {category.topApplications.map((app, i) => (
                <div
                  key={i}
                  className="rounded-lg bg-slate-50 border border-slate-200 p-4 text-center"
                >
                  <CheckCircle className="h-5 w-5 text-brand mx-auto mb-2" />
                  <span className="text-xs font-bold uppercase text-navy block">
                    {app}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. Active Verified Listings in this Category */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="h-[3px] w-10 bg-brand" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand">
                  Available Inventory
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-brand font-heading">
                Verified {category.name} Listings
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand hover:text-brand-hover cursor-pointer"
            >
              <span>View All Catalog Items</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayListings.map((listing) => (
              <Link
                key={listing.id}
                href={`/listings/${listing.id}`}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-brand hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="relative h-44 w-full bg-slate-100">
                  <Image
                    src={listing.imageUrl}
                    alt={listing.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 rounded-md bg-navy/90 backdrop-blur-xs px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    {listing.category}
                  </div>
                  <div className="absolute top-2 right-2 rounded-md bg-brand px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    {listing.status}
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-mono font-bold text-brand uppercase">
                      {listing.alloySpec}
                    </p>
                    <h3 className="font-heading text-base font-bold text-navy group-hover:text-brand transition-colors line-clamp-2 mt-1">
                      {listing.title}
                    </h3>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-heading text-lg font-extrabold text-navy">
                      {listing.priceEstimate}
                    </span>
                    <span className="text-[11px] font-bold text-brand group-hover:underline flex items-center gap-1">
                      Inspect <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 5. Back to Categories Navigation Bar */}
        <div className="flex items-center justify-between border-t border-slate-200 pt-8">
          <Link
            href="/marketplace"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand hover:text-brand-hover cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All 10 Divisions</span>
          </Link>
          <Link
            href="/rfq"
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-hover transition-colors cursor-pointer"
          >
            <FileText className="h-4 w-4" />
            <span>Post RFQ for {category.name}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
