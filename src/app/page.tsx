import React from "react";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import HowItWorks from "@/components/HowItWorks";
import ExchangeModes from "@/components/ExchangeModes";
import FeaturedListings from "@/components/FeaturedListings";
import WhySection from "@/components/WhySection";
import IndustriesSection from "@/components/IndustriesSection";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Browse by Category Grid */}
      <CategoryGrid />

      {/* How It Works (3 Steps) */}
      <HowItWorks />

      {/* Exchange Modes (8 Modes Grid) */}
      <ExchangeModes />

      {/* Featured Listings (Sample Product Cards) */}
      <FeaturedListings />

      {/* Why Foundry Exchange */}
      <WhySection />

      {/* Industries Served */}
      <IndustriesSection />

      {/* Call-to-Action Band */}
      <CTASection />

      {/* Contact / Technical Inquiry Form */}
      <ContactForm />
    </>
  );
}
