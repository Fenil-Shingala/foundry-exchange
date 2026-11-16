"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Zap, ChevronRight } from "lucide-react";
import {
  leftRailAds,
  rightRailAds,
  Advertisement,
} from "@/data/advertisements";

interface RailProps {
  side: "left" | "right";
  ads: Advertisement[];
  visible: boolean;
  bottomOffset?: number;
  speed?: number; // Pixels to advance per animation frame
}

export const quickCategoryLinks = [
  { name: "Castings", href: "/marketplace/castings", count: "1,420" },
  { name: "Forgings", href: "/marketplace/forgings", count: "1,890" },
  { name: "Equipment", href: "/marketplace/equipment", count: "840" },
  { name: "Tooling & Dies", href: "/marketplace/tooling", count: "510" },
  { name: "Raw Alloys", href: "/marketplace/raw-materials", count: "620" },
  { name: "Sand Systems", href: "/marketplace/sand-binders", count: "290" },
  { name: "Refractories", href: "/marketplace/refractories", count: "340" },
  { name: "Machining", href: "/marketplace/machining", count: "480" },
  { name: "Lab & Testing", href: "/marketplace/testing-inspection", count: "215" },
  { name: "Heat Treating", href: "/marketplace/heat-treating", count: "310" },
  { name: "Live Auctions", href: "/auctions", count: "Live", isHot: true },
  { name: "Glossary A–Z", href: "/glossary", count: "82", isNew: true },
];

function RailColumn({ side, ads, visible, bottomOffset = 16, speed = 0.55 }: RailProps) {
  const isLeft = side === "left";
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [leftMode, setLeftMode] = useState<"categories" | "ads">("categories");

  // Triplicate ads array for an endless, seamless looping ticker
  const loopingAds = useMemo(() => {
    return [
      ...ads.map((ad, idx) => ({ ...ad, keyId: `${ad.id}-cycle-1-${idx}` })),
      ...ads.map((ad, idx) => ({ ...ad, keyId: `${ad.id}-cycle-2-${idx}` })),
      ...ads.map((ad, idx) => ({ ...ad, keyId: `${ad.id}-cycle-3-${idx}` })),
    ];
  }, [ads]);

  const isHoveredRef = useRef(false);
  const scrollPosRef = useRef(0);
  const cycleHeightRef = useRef(0);

  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  // Continuous Auto-Scroll Animation Loop (Runs whether user scrolls page or not)
  useEffect(() => {
    let animId = 0;
    const container = scrollContainerRef.current;
    if (!container) return;

    const updateHeight = () => {
      if (container) {
        cycleHeightRef.current = container.scrollHeight / 3;
      }
    };

    updateHeight();
    const ro = new ResizeObserver(updateHeight);
    ro.observe(container);

    const step = () => {
      if (!isHoveredRef.current && container) {
        const cycle = cycleHeightRef.current || container.scrollHeight / 3;

        if (cycle > 0) {
          scrollPosRef.current += speed;

          // Seamless infinite wraparound
          if (scrollPosRef.current >= cycle) {
            scrollPosRef.current -= cycle;
          }

          container.scrollTop = scrollPosRef.current;
        }
      }

      animId = window.requestAnimationFrame(step);
    };

    animId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, [speed]);

  // Handle manual mouse-wheel scrolling with seamless wraparound
  const handleWheel = (e: React.WheelEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cycle = cycleHeightRef.current || container.scrollHeight / 3;
    if (cycle > 0) {
      scrollPosRef.current += e.deltaY;
      if (scrollPosRef.current >= cycle * 2) {
        scrollPosRef.current -= cycle;
      } else if (scrollPosRef.current < 0) {
        scrollPosRef.current += cycle;
      }
      container.scrollTop = scrollPosRef.current;
    }
  };

  return (
    <aside
      aria-label={`${side} side navigation and advertisements`}
      className={`fixed z-30 w-[155px] min-[1660px]:w-[175px] transition-all duration-500 ease-out ${
        isLeft ? "left-2" : "right-2"
      } ${
        visible
          ? "hidden min-[1360px]:flex flex-col opacity-100 translate-y-0 pointer-events-auto"
          : "hidden opacity-0 -translate-y-4 pointer-events-none"
      }`}
      style={{
        top: "120px",
        bottom: `${bottomOffset}px`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left Rail Header: Toggle between Quick Categories and Sponsored Ads */}
      {isLeft && (
        <div className="mb-2 shrink-0 rounded-xl border border-navy-700/80 bg-navy-950 p-1 shadow-md flex items-center gap-1">
          <button
            type="button"
            onClick={() => setLeftMode("categories")}
            className={`flex-1 rounded-lg py-1 px-1.5 text-[9px] min-[1660px]:text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1 ${
              leftMode === "categories"
                ? "bg-brand text-white shadow-xs"
                : "text-slate-400 hover:text-white hover:bg-navy-900"
            }`}
            title="Show Quick Category Links"
          >
            <Zap className="h-2.5 w-2.5" />
            <span>Categories</span>
          </button>
          <button
            type="button"
            onClick={() => setLeftMode("ads")}
            className={`flex-1 rounded-lg py-1 px-1.5 text-[9px] min-[1660px]:text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1 ${
              leftMode === "ads"
                ? "bg-brand text-white shadow-xs"
                : "text-slate-400 hover:text-white hover:bg-navy-900"
            }`}
            title="Show Sponsored Ads Feed"
          >
            <span>Ads</span>
          </button>
        </div>
      )}

      {/* Main Content Area: Category Quick Links or Looping Ads Feed */}
      {isLeft && leftMode === "categories" ? (
        <div className="flex-1 overflow-y-auto overflow-x-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex flex-col gap-1.5 pb-2">
          <div className="px-1 py-1 flex items-center justify-between border-b border-navy-800 mb-0.5">
            <span className="text-[9px] font-heading font-bold uppercase tracking-wider text-slate-400">
              Quick Links
            </span>
            <span className="text-[8px] font-mono font-bold text-brand uppercase bg-brand/10 px-1 py-0.2 rounded border border-brand/20">
              12 Sectors
            </span>
          </div>

          {quickCategoryLinks.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group relative flex items-center justify-between rounded-lg border border-navy-800/90 bg-navy-950/95 hover:bg-navy-900 px-2 py-1.5 text-left transition-all hover:border-brand hover:shadow-xs cursor-pointer"
              title={`Explore ${cat.name}`}
            >
              <div className="flex items-center gap-1.5 min-w-0">
                <span
                  className={`h-1.5 w-1.5 rounded-full shrink-0 transition-transform group-hover:scale-125 ${
                    cat.isHot
                      ? "bg-red-500 animate-pulse"
                      : cat.isNew
                      ? "bg-emerald-400"
                      : "bg-brand"
                  }`}
                />
                <span className="text-[10px] min-[1660px]:text-[11px] font-bold text-white group-hover:text-brand transition-colors truncate">
                  {cat.name}
                </span>
              </div>
              <span
                className={`shrink-0 font-mono text-[8px] min-[1660px]:text-[9px] font-bold px-1 py-0.2 rounded border ${
                  cat.isHot
                    ? "bg-red-500/20 text-red-400 border-red-500/40"
                    : cat.isNew
                    ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
                    : "text-slate-400 group-hover:text-white bg-navy-900 border-navy-800"
                }`}
              >
                {cat.count}
              </span>
            </Link>
          ))}

          <Link
            href="/marketplace"
            className="mt-1 flex items-center justify-center gap-1 rounded-lg bg-navy-900 border border-navy-700/80 hover:border-brand hover:bg-brand hover:text-white py-1.5 text-[9px] min-[1660px]:text-[10px] font-bold uppercase tracking-wider text-slate-300 transition-all cursor-pointer"
          >
            <span>All Categories</span>
            <ChevronRight className="h-3 w-3 text-brand group-hover:text-white" />
          </Link>
        </div>
      ) : (
        /* Scrollable Container for Ads */
        <div
          ref={scrollContainerRef}
          onWheel={handleWheel}
          className="flex-1 overflow-y-auto overflow-x-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex flex-col gap-2.5 pb-2"
        >
        {loopingAds.map((ad) => {
          const isExternal = ad.actionHref.startsWith("http");
          const isLogo = ad.imageUrl.includes("-logo");
          const isWhiteLogo = ad.imageUrl.includes("engineersmp-logo");
          const mediaBg = isLogo
            ? isWhiteLogo
              ? "bg-navy-950 p-2.5"
              : "bg-white p-2"
            : "bg-navy-900";

          return (
            <article
              key={ad.keyId}
              className="group/ad pointer-events-auto relative w-full shrink-0 overflow-hidden rounded-xl border border-navy-700/80 bg-navy-950 shadow-md transition-all duration-300 hover:border-brand/70 hover:shadow-[0_6px_22px_rgba(200,36,37,0.22)] hover:-translate-y-0.5"
            >
              {/* Media Container: Photo or Logo */}
              <Link
                href={ad.actionHref}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="relative block w-full overflow-hidden cursor-pointer"
                title={`Visit ${ad.title}`}
              >
                {/* Media Presentation: Logo on crisp white plate, Photo with object-cover */}
                <div
                  className={`relative h-[115px] min-[1660px]:h-[130px] w-full overflow-hidden flex items-center justify-center ${mediaBg}`}
                >
                  {ad.videoUrl ? (
                    <video
                      src={ad.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/ad:scale-105"
                    />
                  ) : (
                    <Image
                      src={ad.imageUrl}
                      alt={ad.title}
                      fill
                      sizes="(max-width: 1660px) 155px, 175px"
                      className={`transition-transform duration-500 ease-out group-hover/ad:scale-105 ${
                        isLogo ? "object-contain p-2" : "object-cover"
                      }`}
                    />
                  )}

                  {/* Top Badges */}
                  <div className="pointer-events-none absolute left-1.5 top-1.5 right-1.5 z-10 flex items-center justify-between gap-1">
                    <span className="rounded bg-brand px-1.5 py-0.5 text-[8px] font-extrabold uppercase leading-none tracking-wider text-white shadow-xs">
                      Ad
                    </span>
                    <span className="rounded bg-navy-950/90 backdrop-blur-xs px-1.5 py-0.5 text-[8px] font-mono font-semibold uppercase leading-none text-white border border-navy-700/80 truncate max-w-[95px] shadow-xs">
                      {ad.badge}
                    </span>
                  </div>
                </div>

                {/* Info Container: Deep Industrial Navy */}
                <div className="bg-navy-950 p-2 border-t border-navy-800/80">
                  <h4 className="font-heading text-[11px] font-bold uppercase tracking-tight text-white truncate leading-tight group-hover/ad:text-brand transition-colors">
                    {ad.title}
                  </h4>
                  <p className="mt-0.5 text-[9px] text-slate-300 truncate leading-tight font-sans">
                    {ad.subtitle}
                  </p>
                </div>
              </Link>

              {/* Action Toolbar */}
              <div className="grid grid-cols-2 gap-1 bg-navy-950/95 px-1.5 pb-1.5 border-t border-navy-800/60">
                <Link
                  href={ad.actionHref}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="rounded-[3px] bg-brand py-1 px-1 text-center text-[8px] min-[1660px]:text-[8.5px] font-bold uppercase leading-none tracking-wide text-white transition-colors hover:bg-brand-hover whitespace-nowrap truncate flex items-center justify-center gap-1 h-[22px] shadow-2xs cursor-pointer"
                >
                  <span>{ad.actionText}</span>
                  <ExternalLink className="h-2 w-2 opacity-80 shrink-0" />
                </Link>

                <Link
                  href="/contact"
                  className="rounded-[3px] bg-navy-800/80 py-1 px-1 text-center text-[8px] min-[1660px]:text-[8.5px] font-bold uppercase leading-none tracking-wide text-slate-200 transition-colors hover:bg-white hover:text-navy-950 whitespace-nowrap truncate flex items-center justify-center h-[22px] border border-navy-700/60 cursor-pointer"
                  title="Sponsor an ad rail on Foundry Exchange"
                >
                  Advertise
                </Link>
              </div>
            </article>
          );
        })}
      </div>
      )}
    </aside>
  );
}

interface SideRailAdsProps {
  alwaysVisible?: boolean;
}

export default function SideRailAds({ alwaysVisible = false }: SideRailAdsProps) {
  const [visible, setVisible] = useState(alwaysVisible);
  const [bottomOffset, setBottomOffset] = useState(16);

  useEffect(() => {
    let animFrame = 0;

    const checkVisibility = () => {
      // 1. Hero Check: Rails are visible after hero ends, or immediately if alwaysVisible / no hero on page
      const hero = document.getElementById("hero-section");
      let hasHeroEnded = false;
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        // Hero has ended when its bottom edge reaches or passes the top sticky header area
        hasHeroEnded = heroBottom <= 165;
      } else {
        hasHeroEnded = true;
      }

      // 2. Footer Collision Avoidance:
      // Dynamically clamp the bottom edge above the footer so ads remain visible without overlapping
      const footer = document.querySelector("footer");
      let calculatedBottom = 16;
      let hasAdequateSpace = true;

      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        // If the top of the footer has entered the viewport:
        if (footerRect.top < window.innerHeight) {
          calculatedBottom = Math.max(16, window.innerHeight - footerRect.top + 16);
        }
        // If the footer occupies almost the entire screen (less than 240px available), hide rails
        const availableHeight = footerRect.top - 120;
        if (availableHeight < 240) {
          hasAdequateSpace = false;
        }
      }

      const shouldBeVisible = (hasHeroEnded || alwaysVisible) && hasAdequateSpace;
      setVisible(shouldBeVisible);
      setBottomOffset(calculatedBottom);

      animFrame = window.requestAnimationFrame(checkVisibility);
    };

    animFrame = window.requestAnimationFrame(checkVisibility);
    window.addEventListener("scroll", checkVisibility, { passive: true });
    window.addEventListener("resize", checkVisibility);

    return () => {
      window.cancelAnimationFrame(animFrame);
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, [alwaysVisible]);

  // Previous clearance for TOP button preserved as commented-out code:
  // const rightBottomOffset = bottomOffset + 56;
  const rightBottomOffset = bottomOffset;

  return (
    <>
      {/* Left Skyscraper Rail — Continuous Auto-Scroll Feed */}
      <RailColumn
        side="left"
        ads={leftRailAds}
        visible={visible}
        bottomOffset={bottomOffset}
        speed={0.52}
      />

      {/* Right Skyscraper Rail — Continuous Auto-Scroll Feed */}
      <RailColumn
        side="right"
        ads={rightRailAds}
        visible={visible}
        bottomOffset={rightBottomOffset}
        speed={0.62}
      />
    </>
  );
}
