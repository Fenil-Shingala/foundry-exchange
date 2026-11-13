"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  leftRailAds,
  rightRailAds,
  Advertisement,
} from "@/data/advertisements";

interface RailProps {
  side: "left" | "right";
  ads: Advertisement[];
  visible: boolean;
  speed?: number; // Pixels to advance per animation frame
}

function RailColumn({ side, ads, visible, speed = 0.55 }: RailProps) {
  const isLeft = side === "left";
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

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
      aria-label={`${side} side advertisements`}
      className={`fixed z-30 w-[155px] min-[1660px]:w-[175px] transition-all duration-500 ease-out ${
        isLeft ? "left-2" : "right-2"
      } ${
        visible
          ? "hidden min-[1360px]:flex flex-col opacity-100 translate-y-0 pointer-events-auto"
          : "hidden opacity-0 -translate-y-4 pointer-events-none"
      }`}
      style={{
        top: "128px",
        bottom: "16px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Scrollable Container with Top & Bottom Fade Masks */}
      <div
        ref={scrollContainerRef}
        onWheel={handleWheel}
        className="flex-1 overflow-y-auto overflow-x-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex flex-col gap-2.5 pb-2"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 14px, black calc(100% - 14px), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 14px, black calc(100% - 14px), transparent 100%)",
        }}
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
                className="relative block w-full overflow-hidden"
                title={`Visit ${ad.title}`}
              >
                {/* Media Presentation: Logo on crisp white plate, Photo with object-cover */}
                <div
                  className={`relative h-[85px] min-[1660px]:h-[95px] w-full overflow-hidden flex items-center justify-center ${mediaBg}`}
                >
                  <Image
                    src={ad.imageUrl}
                    alt={ad.title}
                    fill
                    sizes="(max-width: 1660px) 155px, 175px"
                    className={`transition-transform duration-500 ease-out group-hover/ad:scale-105 ${
                      isLogo ? "object-contain p-2" : "object-cover"
                    }`}
                  />

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
                  className="rounded-[3px] bg-brand py-1 px-1 text-center text-[8px] min-[1660px]:text-[8.5px] font-bold uppercase leading-none tracking-wide text-white transition-colors hover:bg-brand-hover whitespace-nowrap truncate flex items-center justify-center gap-1 h-[22px] shadow-2xs"
                >
                  <span>{ad.actionText}</span>
                  <ExternalLink className="h-2 w-2 opacity-80 shrink-0" />
                </Link>

                <Link
                  href="/#contact-form"
                  className="rounded-[3px] bg-navy-800/80 py-1 px-1 text-center text-[8px] min-[1660px]:text-[8.5px] font-bold uppercase leading-none tracking-wide text-slate-200 transition-colors hover:bg-white hover:text-navy-950 whitespace-nowrap truncate flex items-center justify-center h-[22px] border border-navy-700/60"
                  title="Sponsor an ad rail on Foundry Exchange"
                >
                  Advertise
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </aside>
  );
}

export default function SideRailAds() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let animFrame = 0;

    const checkVisibility = () => {
      const scrollY = window.scrollY;

      // 1. Hero Check: Rails are ONLY visible AFTER the hero section has ended
      const hero = document.getElementById("hero-section");
      let hasHeroEnded = false;
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        // Hero has ended when its bottom edge reaches or passes the top sticky header area
        hasHeroEnded = heroBottom <= 165;
      } else {
        hasHeroEnded = scrollY > 600;
      }

      // 2. Footer Collision Prevention: Hide completely when footer enters view
      const footer = document.querySelector("footer");
      let isFooterInView = false;
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        isFooterInView = footerTop <= window.innerHeight + 30;
      }

      // The ads are strictly visible ONLY after hero and before footer
      const shouldBeVisible = hasHeroEnded && !isFooterInView;
      setVisible(shouldBeVisible);

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
  }, []);

  return (
    <>
      {/* Left Skyscraper Rail — Continuous Auto-Scroll Feed */}
      <RailColumn
        side="left"
        ads={leftRailAds}
        visible={visible}
        speed={0.52}
      />

      {/* Right Skyscraper Rail — Continuous Auto-Scroll Feed */}
      <RailColumn
        side="right"
        ads={rightRailAds}
        visible={visible}
        speed={0.62}
      />
    </>
  );
}
