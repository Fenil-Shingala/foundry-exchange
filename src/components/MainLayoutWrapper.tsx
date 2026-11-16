"use client";

import React, { Suspense } from "react";
import { usePathname } from "next/navigation";
import { isSideRailAdsActive } from "@/config/adsConfig";
import SideRailAds from "@/components/SideRailAds";

function AdsContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showAds = isSideRailAdsActive(pathname || "/");

  return (
    <>
      {showAds && <SideRailAds />}
      <main
        className={`flex-1 w-full transition-all duration-300 ${
          showAds ? "layout-with-ads" : "layout-without-ads"
        }`}
      >
        {children}
      </main>
    </>
  );
}

export default function MainLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <main className="flex-1 w-full layout-with-ads">{children}</main>
      }
    >
      <AdsContent>{children}</AdsContent>
    </Suspense>
  );
}
