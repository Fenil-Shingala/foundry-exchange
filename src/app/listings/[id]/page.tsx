import React from "react";
import ProductDetailPage from "@/components/ProductDetailPage";
import { featuredListings } from "@/data/listings";

interface PageProps {
  params: Promise<{ id: string }>;
}

export const instant = false;

export function generateStaticParams() {
  return featuredListings.map((listing) => ({
    id: listing.id,
  }));
}

export default async function ListingPage({ params }: PageProps) {
  const { id } = await params;
  const listing = featuredListings.find((l) => l.id === id) || featuredListings[0];
  return <ProductDetailPage initialListing={listing} />;
}
