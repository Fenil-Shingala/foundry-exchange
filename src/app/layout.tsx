import type { Metadata } from "next";
import { Rajdhani, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideRailAds from "@/components/SideRailAds";
import "./globals.css";

// Machined, square-shouldered industrial heading font — forged metal / foundry aesthetic
const rajdhani = Rajdhani({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

// Technical engineering & hardware body font — optimal for specs, numbers, and dense catalogs
const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Precision monospaced font for ASTM standards, chemistry formulas, and tolerances
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://foundryexchange.com"),
  title: "Foundry Exchange | The B2B Marketplace for Metal Casting & Foundry",
  description:
    "Everything Foundry. One Exchange. Buy, sell, trade, and source ferrous and non-ferrous castings, foundry equipment, raw materials, tooling, and testing services.",
  keywords: [
    "foundry marketplace",
    "metal castings",
    "ductile iron",
    "foundry equipment",
    "die casting",
    "sand casting",
    "metallurgical supplies",
    "B2B exchange",
  ],
  icons: {
    icon: "/foundry-logo.png",
  },
  openGraph: {
    title: "Foundry Exchange | B2B Metal Casting & Equipment Marketplace",
    description:
      "Buy, sell, trade, and source industrial castings, melt equipment, alloys, and foundry services.",
    url: "https://foundryexchange.com",
    siteName: "Foundry Exchange",
    images: [
      {
        url: "/foundry-logo.png",
        width: 800,
        height: 600,
        alt: "Foundry Exchange Monogram Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${rajdhani.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-surface text-ink antialiased font-body">
        <Header />
        {/* Floating Side-Rail Advertisements */}
        <SideRailAds />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
