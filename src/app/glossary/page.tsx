"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  X,
  BookOpen,
  Layers,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
  ExternalLink,
  ChevronRight,
  Flame,
} from "lucide-react";
import {
  glossaryTerms,
  glossaryCategories,
  GlossaryCategory,
  GlossaryTerm,
} from "@/data/glossary";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [selectedLetter, setSelectedLetter] = useState<string>("ALL");

  // Calculate available letters in the dataset
  const availableLetters = useMemo(() => {
    const letters = new Set<string>();
    glossaryTerms.forEach((item) => {
      if (item.letter) {
        letters.add(item.letter.toUpperCase());
      }
    });
    return letters;
  }, []);

  // Filtered terms based on search, category, and letter
  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter((term) => {
      // 1. Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTerm = term.term.toLowerCase().includes(q);
        const matchesDef = term.definition.toLowerCase().includes(q);
        const matchesSignificance = term.industrialSignificance
          .toLowerCase()
          .includes(q);
        const matchesSpec = term.astmOrIsoSpec?.toLowerCase().includes(q);
        const matchesCategory = term.category.toLowerCase().includes(q);

        if (
          !matchesTerm &&
          !matchesDef &&
          !matchesSignificance &&
          !matchesSpec &&
          !matchesCategory
        ) {
          return false;
        }
      }

      // 2. Category Filter
      if (selectedCategory !== "ALL" && term.category !== selectedCategory) {
        return false;
      }

      // 3. Letter Filter
      if (selectedLetter !== "ALL" && term.letter.toUpperCase() !== selectedLetter) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedLetter]);

  // Count terms per category for badge counters
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { ALL: glossaryTerms.length };
    glossaryCategories.forEach((cat) => {
      counts[cat] = glossaryTerms.filter((t) => t.category === cat).length;
    });
    return counts;
  }, []);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("ALL");
    setSelectedLetter("ALL");
  };

  const isFiltered =
    searchQuery.trim() !== "" ||
    selectedCategory !== "ALL" ||
    selectedLetter !== "ALL";

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Header Banner */}
      <div className="bg-navy text-white border-b-2 border-brand py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-slate-300 mb-4"
          >
            <Link
              href="/"
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
            <Link
              href="/knowledge"
              className="hover:text-white transition-colors cursor-pointer"
            >
              Knowledge Center
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
            <span className="text-brand font-semibold">
              Foundry Glossary (A–Z)
            </span>
          </nav>

          <div className="flex items-center gap-3 mb-2">
            <span className="h-[3px] w-10 bg-brand" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand font-mono">
              Engineering Reference &amp; Specifications
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight font-heading text-white">
            Foundry &amp; Metallurgical Engineering Glossary
          </h1>

          <p className="mt-3 max-w-3xl text-sm sm:text-base text-slate-300 leading-relaxed">
            The definitive A–Z industrial technical glossary for foundry
            engineers, metallurgists, quality directors, and casting buyers.
            Explore authentic engineering terminology covering ASTM/ISO
            metallurgical specs, green sand &amp; no-bake molding, induction
            melting, closed-die forging, and non-destructive examination.
          </p>

          {/* Metrics Bar */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-1 font-mono font-bold text-white border border-white/20">
              <BookOpen className="h-3.5 w-3.5 text-brand" />
              {glossaryTerms.length} Technical Definitions
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-1 font-mono font-bold text-white border border-white/20">
              <Layers className="h-3.5 w-3.5 text-cobalt" />
              {glossaryCategories.length} Engineering Disciplines
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-1 font-mono font-bold text-white border border-white/20">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              ASTM / ISO / DIN EN Cross-Referenced
            </span>
          </div>
        </div>
      </div>

      {/* 2. Controls Toolbar: Search, A-Z Ribbon, Categories */}
      <div className="bg-white border-b border-navy-100 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-5 space-y-4">
          {/* Top Row: Search Input + Active Letter Stats */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Box */}
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search term, ASTM spec, alloying chemistry, defect, or molding process..."
                className="w-full rounded-lg border border-navy-200 bg-slate-50 py-2.5 pl-10 pr-10 text-xs sm:text-sm text-navy placeholder:text-slate-400 focus:border-brand focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-brand shadow-inner transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-navy cursor-pointer p-1"
                  aria-label="Clear search query"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Quick Status & Reset */}
            <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
              <span className="font-mono text-xs font-bold text-navy bg-navy-50 px-3 py-2 rounded-lg border border-navy-200">
                {filteredTerms.length} / {glossaryTerms.length} Terms
              </span>
              {isFiltered && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-bold text-brand hover:bg-red-100 transition-colors cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Middle Row: A–Z Alphabetical Jump Ribbon */}
          <div className="overflow-x-auto no-scrollbar pt-1">
            <div className="flex items-center gap-1 min-w-max pb-1">
              <button
                type="button"
                onClick={() => setSelectedLetter("ALL")}
                className={`px-3 py-1.5 rounded-md text-xs font-mono font-bold transition-all cursor-pointer ${
                  selectedLetter === "ALL"
                    ? "bg-brand text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-navy-50 hover:text-navy"
                }`}
              >
                ALL (A–Z)
              </button>

              {ALPHABET.map((char) => {
                const hasTerms = availableLetters.has(char);
                const isSelected = selectedLetter === char;

                return (
                  <button
                    key={char}
                    type="button"
                    disabled={!hasTerms}
                    onClick={() => setSelectedLetter(char)}
                    className={`h-8 w-8 rounded-md text-xs font-mono font-bold flex items-center justify-center transition-all ${
                      isSelected
                        ? "bg-brand text-white shadow-xs ring-2 ring-brand/30 cursor-pointer"
                        : hasTerms
                        ? "bg-slate-100 text-slate-800 hover:bg-navy hover:text-white cursor-pointer"
                        : "bg-slate-50 text-slate-300 opacity-40 cursor-not-allowed"
                    }`}
                  >
                    {char}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Row: Category Selector Pills */}
          <div className="overflow-x-auto no-scrollbar pt-1">
            <div className="flex items-center gap-2 min-w-max pb-1">
              <button
                type="button"
                onClick={() => setSelectedCategory("ALL")}
                className={`rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === "ALL"
                    ? "bg-navy text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <span>All Disciplines</span>
                <span className="font-mono text-[10px] opacity-80">
                  ({categoryCounts["ALL"]})
                </span>
              </button>

              {glossaryCategories.map((category) => {
                const isSelected = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? "bg-navy text-white shadow-xs"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    <span>{category}</span>
                    <span className="font-mono text-[10px] opacity-80">
                      ({categoryCounts[category] || 0})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Glossary Terms Grid */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {filteredTerms.length === 0 ? (
          /* Empty Search State */
          <div className="rounded-2xl border border-navy-200 bg-white p-12 text-center shadow-xs">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy-50 text-navy mb-4">
              <BookOpen className="h-7 w-7 text-brand" />
            </div>
            <h3 className="text-xl font-heading font-bold uppercase text-brand">
              No Matching Foundry Terms Found
            </h3>
            <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
              We couldn&apos;t find any terms matching &quot;{searchQuery}&quot;
              {selectedCategory !== "ALL" && ` in ${selectedCategory}`}
              {selectedLetter !== "ALL" && ` starting with letter ${selectedLetter}`}.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-hover transition-colors shadow-xs cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset All Filters</span>
              </button>
            </div>
          </div>
        ) : (
          /* Terms Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTerms.map((term) => (
              <article
                key={term.term}
                className="rounded-xl border border-navy-200 bg-white p-6 shadow-xs hover:border-brand hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Letter + Name + Category */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="h-9 w-9 rounded-lg bg-navy text-white font-mono font-bold text-sm flex items-center justify-center shrink-0 shadow-2xs">
                        {term.letter}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-brand leading-snug">
                        {term.term}
                      </h3>
                    </div>
                  </div>

                  {/* Badges: Category & Spec */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="rounded-md bg-navy-50 border border-navy-200 px-2 py-0.5 text-[10px] font-mono font-bold text-navy">
                      {term.category}
                    </span>
                    {term.astmOrIsoSpec && (
                      <span className="rounded-md bg-red-50 border border-brand/20 px-2 py-0.5 text-[10px] font-mono font-bold text-brand">
                        {term.astmOrIsoSpec}
                      </span>
                    )}
                  </div>

                  {/* Definition */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {term.definition}
                  </p>

                  {/* Industrial Significance Box */}
                  <div className="mt-3.5 rounded-lg border-l-3 border-brand bg-slate-50 p-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-navy block mb-0.5">
                      Industrial Significance
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {term.industrialSignificance}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Cross-link to related Marketplace Category */}
                {term.relatedCategoryHref && (
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={term.relatedCategoryHref}
                      className="group inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-navy transition-colors cursor-pointer"
                    >
                      <span>
                        {term.relatedCategoryLabel || "View Marketplace Listings"}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      RFQ Ready
                    </span>
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </main>

      {/* 4. Bottom Support / Sourcing Desk CTA */}
      <div className="bg-navy py-12 sm:py-16 text-white border-t-2 border-brand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <Flame className="h-4 w-4 text-brand" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand">
                Foundry Engineering Support Desk
              </span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-white">
              Need Metallurgical Guidance or Material Certification?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our Cleveland metallurgical desk works directly with North American and
              global foundries to verify chemical spectrometry, gating ratios,
              and ASTM specification compliance before RFQ release.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/rfq"
              className="rounded-lg bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-hover transition-colors shadow-md cursor-pointer"
            >
              Submit Drawing / RFQ
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-navy transition-colors cursor-pointer"
            >
              Contact Metallurgist
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
