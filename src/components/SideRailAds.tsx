"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { leftRailAds, rightRailAds, Advertisement } from "@/data/advertisements";

interface RailProps {
  side: "left" | "right";
  ads: Advertisement[];
  visible: boolean;
  scrollRef: React.RefObject<HTMLDivElement | null>;
  onDismiss: () => void;
}

function RailColumn({
  side,
  ads,
  visible,
  scrollRef,
  onDismiss,
}: RailProps) {
  const isLeft = side === "left";

  return (
    <aside
      aria-label={`${side} side advertisements`}
      className={`pointer-events-none fixed z-30 w-[155px] min-[1660px]:w-[175px] transition-all duration-300 ease-out ${
        isLeft
          ? "left-2.5 min-[1660px]:left-[calc(50vw-640px-185px)]"
          : "right-2.5 min-[1660px]:right-[calc(50vw-640px-185px)]"
      } ${
        visible
          ? "hidden min-[1360px]:flex flex-col opacity-100 translate-y-0"
          : "hidden opacity-0 -translate-y-5 pointer-events-none"
      }`}
      style={{
        top: "92px",
        bottom: "16px",
      }}
    >
      {/* Top Rail Header with Pulsing Indicator & Dismiss Control */}
      <div className="pointer-events-auto mb-2 flex items-center justify-between rounded-lg border border-navy-700 bg-navy-950/95 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-300 backdrop-blur-md shadow-sm">
        <span className="flex items-center gap-1.5 font-bold text-white">
          <span className="h-2 w-2 rounded-full bg-brand animate-pulse shadow-[0_0_8px_#E3262F]" />
          <span>{isLeft ? "Melt Capacity" : "Live RFQs"}</span>
        </span>
        <button
          type="button"
          onClick={onDismiss}
          className="rounded p-0.5 text-slate-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
          title="Dismiss ad rails"
          aria-label="Dismiss advertisements"
        >
          <X className="h-3 w-3" />
        </button>
      </div>

      {/* Scrollable Container with Smooth Parallax Roll */}
      <div
        ref={scrollRef}
        className="pointer-events-auto flex-1 overflow-y-auto overflow-x-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex flex-col gap-2.5 pb-2"
      >
        {ads.map((ad) => {
          const isExternal = ad.actionHref.startsWith("http");
          const isLogo = ad.imageUrl.includes("-logo");

          return (
            <article
              key={ad.id}
              className="group/ad pointer-events-auto relative w-full shrink-0 overflow-hidden rounded-xl border border-navy-700 bg-navy-950 shadow-lg transition-all duration-300 hover:border-brand/70 hover:shadow-[0_4px_24px_rgba(200,36,37,0.25)] hover:-translate-y-0.5"
            >
              {/* Clickable Full-bleed Photo or Logo Banner */}
              <Link
                href={ad.actionHref}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={`relative block h-[125px] min-[1660px]:h-[140px] w-full overflow-hidden ${
                  isLogo ? "bg-navy-900" : "bg-navy-950"
                }`}
                title={`Visit ${ad.title}`}
              >
                <Image
                  src={ad.imageUrl}
                  alt={ad.title}
                  fill
                  sizes="(max-width: 1660px) 155px, 175px"
                  className={`transition-transform duration-700 ease-out group-hover/ad:scale-105 ${
                    isLogo ? "object-contain p-3.5" : "object-cover"
                  }`}
                />

                {/* Subtle backlight for transparent brand logos */}
                {isLogo && (
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_0%,transparent_70%)]" />
                )}

                {/* Top Vignette for Badges */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-navy-950/80 to-transparent" />

                {/* Bottom Gradient for Text Readability */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy-950 via-navy-950/85 to-transparent" />

                {/* Top Badges */}
                <div className="pointer-events-none absolute left-1.5 top-1.5 right-1.5 z-10 flex items-center justify-between gap-1">
                  <span className="rounded bg-brand px-1.5 py-0.5 text-[8px] font-extrabold uppercase leading-none tracking-wider text-white shadow-xs">
                    Ad
                  </span>
                  <span className="rounded bg-navy-900/90 backdrop-blur-xs px-1.5 py-0.5 text-[8px] font-mono font-semibold uppercase leading-none text-white border border-navy-700 truncate max-w-[95px]">
                    {ad.badge}
                  </span>
                </div>

                {/* Title & Subtitle Overlaid cleanly at the bottom */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-2 pt-4">
                  <h4 className="font-heading text-[11px] font-bold uppercase tracking-tight text-white truncate leading-tight group-hover/ad:text-brand transition-colors drop-shadow-xs">
                    {ad.title}
                  </h4>
                  <p className="mt-0.5 text-[9px] text-slate-300 truncate leading-tight font-sans drop-shadow-xs">
                    {ad.subtitle}
                  </p>
                </div>
              </Link>

              {/* Farm Exchange Style Dual Action Toolbar */}
              <div className="grid grid-cols-2 gap-1 bg-navy-950 p-1 border-t border-navy-800">
                <Link
                  href={ad.actionHref}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="rounded-[3px] bg-brand py-1 px-1 text-center text-[8px] min-[1660px]:text-[8.5px] font-bold uppercase leading-none tracking-wide text-white transition-colors hover:bg-brand-hover whitespace-nowrap truncate flex items-center justify-center h-[22px]"
                >
                  {ad.actionText}
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
  const [dismissed, setDismissed] = useState(false);
  const leftScrollRef = useRef<HTMLDivElement>(null);
  const rightScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animFrame = 0;
    let targetLeft = 0;
    let targetRight = 0;
    let currentLeft = 0;
    let currentRight = 0;
    const lerpSpeed = 0.045;

    const calculateState = () => {
      const scrollY = window.scrollY;
      const scrollMax = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const scrollProgress = Math.min(1, Math.max(0, scrollY / scrollMax));

      // 1. Hero Check: Advertisement rails START only AFTER the Hero section ends
      const hero = document.getElementById("hero-section");
      let hasHeroEnded = false;
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        hasHeroEnded = heroBottom <= 80;
      } else {
        hasHeroEnded = scrollY > 550;
      }

      // 2. Footer / Bottom Check: Advertisement rails MUST HIDE completely when reaching the footer
      const footer = document.querySelector("footer");
      let isFooterInView = false;
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        // As soon as the footer enters the viewport, hide the ads completely
        isFooterInView = footerTop <= window.innerHeight + 40;
      }

      // The ads are ONLY visible between the end of the Hero and before the Footer enters
      const shouldBeVisible = hasHeroEnded && !isFooterInView;
      setVisible(shouldBeVisible);

      // 3. Smooth parallax internal scroll sync
      const leftEl = leftScrollRef.current;
      const rightEl = rightScrollRef.current;

      if (leftEl) {
        targetLeft =
          scrollProgress *
          Math.max(0, leftEl.scrollHeight - leftEl.clientHeight) *
          0.85;
      }
      if (rightEl) {
        targetRight =
          scrollProgress *
          Math.max(0, rightEl.scrollHeight - rightEl.clientHeight) *
          0.85;
      }
    };

    const smoothStep = () => {
      calculateState();
      const leftEl = leftScrollRef.current;
      const rightEl = rightScrollRef.current;

      if (leftEl) {
        currentLeft += (targetLeft - currentLeft) * lerpSpeed;
        leftEl.scrollTop = currentLeft;
      }
      if (rightEl) {
        currentRight += (targetRight - currentRight) * lerpSpeed;
        rightEl.scrollTop = currentRight;
      }

      animFrame = window.requestAnimationFrame(smoothStep);
    };

    animFrame = window.requestAnimationFrame(smoothStep);

    window.addEventListener("scroll", calculateState, { passive: true });
    window.addEventListener("resize", calculateState);

    return () => {
      window.cancelAnimationFrame(animFrame);
      window.removeEventListener("scroll", calculateState);
      window.removeEventListener("resize", calculateState);
    };
  }, []);

  if (dismissed) {
    return null;
  }

  return (
    <>
      {/* Left Skyscraper Rail */}
      <RailColumn
        side="left"
        ads={leftRailAds}
        visible={visible}
        scrollRef={leftScrollRef}
        onDismiss={() => setDismissed(true)}
      />

      {/* Right Skyscraper Rail */}
      <RailColumn
        side="right"
        ads={rightRailAds}
        visible={visible}
        scrollRef={rightScrollRef}
        onDismiss={() => setDismissed(true)}
      />
    </>
  );
}
