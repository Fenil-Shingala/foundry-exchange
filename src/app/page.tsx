import React from "react";
import Hero from "@/components/Hero";
import SideRailAds from "@/components/SideRailAds";
import CategoryGrid from "@/components/CategoryGrid";
import CastingsForgingsDualSection from "@/components/CastingsForgingsDualSection";
import HowItWorks from "@/components/HowItWorks";
import ExchangeModes from "@/components/ExchangeModes";
import FeaturedListings from "@/components/FeaturedListings";
import WhySection from "@/components/WhySection";
import IndustriesSection from "@/components/IndustriesSection";
import AssociationsSection from "@/components/AssociationsSection";
import CTASection from "@/components/CTASection";
import AuctionSection from "@/components/AuctionSection";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section (Full width, clean, ads are hidden during hero) */}
      <Hero />

      {/* Floating Side-Rail Advertisements (Home Page Only) */}
      <SideRailAds />

      {/* 
        2. Sub-Hero Content Column
        With side-rail ads attached to the viewport edges (w-[155px] / w-[175px]), we apply
        protective side padding so full-width sections seamlessly fill the entire space between
        the left and right ads without overlapping.
      */}
      <div className="w-full min-[1360px]:px-[175px] min-[1660px]:px-[195px] transition-all duration-300">
        {/* Browse by Category Grid */}
        <CategoryGrid />

        {/* 50% Castings & 50% Forgings Dual Capability Division */}
        <CastingsForgingsDualSection />

        {/* How It Works (4 Steps) */}
        <HowItWorks />

        {/* Exchange Modes (8 Modes Grid) */}
        <ExchangeModes />

        {/* Featured Listings (Sample Product Cards) */}
        <FeaturedListings />

        {/* Why Foundry Exchange */}
        <WhySection />

        {/* Industries Served */}
        <IndustriesSection />

        {/* Industry Associations & Governing Bodies */}
        <AssociationsSection />

        {/* Call-to-Action Band */}
        <CTASection />

        {/* Industrial Auctions & Plant Liquidations (BidSpotter Style) */}
        <AuctionSection />

        {/* Contact / Technical Inquiry Form */}
        <ContactForm />
      </div>
    </>
  );
}
