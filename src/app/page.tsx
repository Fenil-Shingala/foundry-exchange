import React from "react";
import Hero from "@/components/Hero";
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

      {/* 2. Sub-Hero Content Column */}
      <div className="w-full home-sub-hero transition-all duration-300">
        {/* 1. How It Works (3-Step Sourcing Workflow) */}
        <HowItWorks />

        {/* 2. Browse by Category Grid (Industrial Taxonomy) */}
        <CategoryGrid />

        {/* 3. Featured Listings (Core Products Section - Ready Stock, Made to Order & Surplus Lots) */}
        <FeaturedListings />

        {/* 4. Industrial Auctions & Plant Liquidations (Timed Auction Events & High-Value Machinery Lots) */}
        <AuctionSection />

        {/* 5. 50% Castings & 50% Forgings Dual Capability Division */}
        <CastingsForgingsDualSection />

        {/* 6. Exchange Modes (8 Transaction & Procurement Channels) */}
        <ExchangeModes />

        {/* 7. Why Foundry Exchange (Metallurgical Verification & Trust) */}
        <WhySection />

        {/* 8. Industries Served */}
        <IndustriesSection />

        {/* 9. Industry Associations & Governing Bodies */}
        <AssociationsSection />

        {/* 10. Call-to-Action Band */}
        <CTASection />

        {/* 11. Contact / Technical Inquiry Form */}
        <ContactForm />
      </div>
    </>
  );
}
