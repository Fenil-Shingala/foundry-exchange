# Foundry Exchange (FE) — B2B Metal Casting & Foundry Marketplace

A modern, high-performance B2B marketplace and digital exchange platform engineered for the metal casting, foundry equipment, and metallurgical supplies industry.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Verification
```bash
npm run build
npm run start
```

---

## 🏗️ Folder Structure

```
foundry-exchange/
├── public/
│   ├── foundry-logo.png                # Brand logo (FE monogram + ladle + typography)
│   ├── images/
│   │   ├── associations/       # Official high-resolution association vector & retina marks
│   │   │   ├── cfa.svg         # Canadian Foundry Association official vector
│   │   │   ├── aia-canada.svg  # AIA Canada official vector
│   │   │   ├── eff.svg         # European Foundry Federation official vector
│   │   │   └── afs-detroit-windsor.png # AFS Detroit Windsor Chapter (600x578 RGBA transparent)
│   │   ├── ads/                # Side-rail B2B partner advert badges & logos
│   │   └── listings/           # Industrial vector product illustrations (SVG)
│   │       ├── casing.svg
│   │       ├── furnace.svg
│   │       ├── impeller.svg
│   │       ├── molding.svg
│   │       ├── pattern.svg
│   │       ├── pig-iron.svg
│   │       ├── refractory.svg
│   │       └── valve.svg
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind v4 theme definitions and font bindings
│   │   ├── layout.tsx          # Root layout with fonts, metadata, Header & Footer
│   │   ├── page.tsx            # Complete Home page composing all core sections
│   │   └── about/
│   │       └── page.tsx        # About page route with metallurgical mission
│   ├── components/
│   │   ├── Header.tsx          # Utility bar + Sticky header + search + mobile drawer
│   │   ├── Hero.tsx            # Industrial hero with molten glow & search bar
│   │   ├── CategoryGrid.tsx    # 8 Foundry categories with specs & explore tags
│   │   ├── HowItWorks.tsx      # 3-step procurement process (Find, Verify, Quote)
│   │   ├── ExchangeModes.tsx   # 8 transaction modes (Buy, Sell, RFQ, Trade, Barter, Rent, Auction, Surplus)
│   │   ├── FeaturedListings.tsx# 8 sample product cards with specs, filter tabs & badges
│   │   ├── WhySection.tsx      # Value props: ASTM/ISO standards, logistics, circular tooling
│   │   ├── IndustriesSection.tsx# 6 end-market industrial sectors served
│   │   ├── AssociationsSection.tsx# Industry Standards & Global Foundry Associations
│   │   ├── CTASection.tsx      # "Put your foundry on the map" call-to-action band
│   │   ├── ContactForm.tsx     # Technical inquiry desk form (UI only)
│   │   ├── SideRailAds.tsx     # Sticky B2B industrial side rails with clearance margins
│   │   └── Footer.tsx          # Full industrial footer with links, standards & social SVGs
│   └── data/
│       ├── associations.ts     # Recognized governing bodies & regional chapters data
│       ├── categories.ts       # Foundry category taxonomy & tags
│       ├── listings.ts         # Mock product cards with typed metallurgical specs
│       └── siteConfig.ts       # Single source of truth for stats, modes, & contact details
├── tailwind.config.ts          # Tailwind CSS design tokens
└── tsconfig.json
```

---

## 🎨 Brand Design Tokens & Strict Palette Guidelines

> [!IMPORTANT]
> **Strict No-Black & No-Golden Palette Policy:**
> 1. **Zero Black Rule:** Black (`#000000`, `#07070B`, or pitch-black/charcoal tints) is **strictly prohibited** across the entire website. All dark, structural, and technical blueprint surfaces must utilize the official **Deep American Industrial Navy** (`#062040` / `bg-navy-950` and `#0a3161` / `bg-navy-900`).
> 2. **No Golden / Amber Tones:** Yellow, golden, or amber colors are not permitted for badges, buttons, or cards. The `Surplus` status badge strictly utilizes **Industrial Indigo** (`bg-indigo-50 text-indigo-900 border-indigo-200`).

### 1. Brand Colors & Theme Tokens (American Industrial Navy & Flame Red)
- Defined in [`src/app/globals.css`](file:///d:/Projects/foundry-exchange/src/app/globals.css) and [`tailwind.config.ts`](file:///d:/Projects/foundry-exchange/tailwind.config.ts):
  - `--color-brand`: `#c82425` (American Flame Red — Primary Logo, Active State & Accent)
  - `--color-navy-950`: `#062040` (Deep American Industrial Navy — Hero, Side-Rail Ads, Technical SVGs & Utility Bar)
  - `--color-navy-900`: `#0a3161` (PrecastXchange Signature Navy — Navigation Header, Badges & Cards)
  - `--color-navy-800`: `#13396b` (Subtle Blueprint Borders & Grid lines)
  - `--color-navy-700`: `#21447b` (Technical framing & dividers)
  - `--color-cobalt`: `#1d4ed8` (American Engineering Cobalt — Verified badges, specs, & trust indicators)
  - `--color-surface`: `#ffffff` & `#f8f9fa` (Crisp White & Clean Slate canvas)
  - `--color-molten`: `#f26a1b` (Molten heat accents for melt temperatures & furnace glows)

### 2. Status Badge Palette (`FeaturedListings.tsx`)
- **Ready Stock:** Emerald (`bg-emerald-50 text-emerald-800 border-emerald-200`)
- **Made to Order:** Cobalt Blue (`bg-blue-50 text-cobalt border-blue-200`)
- **Surplus:** Industrial Indigo (`bg-indigo-50 text-indigo-900 border-indigo-200`)
- **Auction:** Purple (`bg-purple-50 text-purple-800 border-purple-200`)

### 2. Company Copy & Operational Stats
- Edit [`src/data/siteConfig.ts`](file:///d:/Projects/foundry-exchange/src/data/siteConfig.ts):
  - Phone number, email address, physical hub address
  - Verified operational stats (verified vendors, listings, transactions, SLA)
  - Exchange transaction modes and descriptions
  - Industries served and why-choose-FE highlights

### 3. Categories & Market Taxonomy
- Edit [`src/data/categories.ts`](file:///d:/Projects/foundry-exchange/src/data/categories.ts) to add or adjust categories, listing counts, and spec tags.

### 4. Featured Product Listings
- Edit [`src/data/listings.ts`](file:///d:/Projects/foundry-exchange/src/data/listings.ts) to update mock listings, alloy specs (ASTM A48, ASTM A536, A380), weights, locations, and pricing.

### 5. Industry Associations & Governing Bodies
- Configured in [`src/data/associations.ts`](file:///d:/Projects/foundry-exchange/src/data/associations.ts) and rendered via [`src/components/AssociationsSection.tsx`](file:///d:/Projects/foundry-exchange/src/components/AssociationsSection.tsx).
- Features 4 verified metallurgical and manufacturing associations with enhanced high-resolution vector and Retina marks:
  1. **AFS (American Foundry Society) — Detroit Windsor Chapter:** High-resolution 600x578 32-bit transparent RGBA mark (`afs-detroit-windsor.png`).
  2. **CFA (Canadian Foundry Association):** Official vector brand SVG with molten metal maple leaf symbol (`cfa.svg`).
  3. **AIA Canada (Automotive Industries Association of Canada):** Official vector brand SVG with Canadian red maple leaf & deep navy typography (`aia-canada.svg`).
  4. **EFF (European Foundry Federation):** Official vector brand SVG with dual-tone teal/blue spark symbol (`eff.svg`).
- Modeled after PrecastXchange's signature section styling with index callout `07 Recognized Governing Bodies & Regional Chapters`, interactive 4-card grid, infinite-scroll logo marquee rail, and standardization compliance notice.

---

## 📋 Assumptions & Items Requiring Real Content

| Item | Current Mock State | How to Replace with Real Data |
| :--- | :--- | :--- |
| **Operational Stats** | Placeholder figures (e.g. `840+` vendors, `$42.5M` volume) | Update values in `src/data/siteConfig.ts` once platform analytics are connected. |
| **Product Photos** | Custom industrial SVG blueprint graphics in `/public/images/listings/` | Swap file paths in `src/data/listings.ts` to point to real product photography or CDN URLs. |
| **Contact Desk API** | Submits to client state & logs to console | Attach your backend endpoint (e.g., Route Handler in `/api/contact` or CRM webhook) in `src/components/ContactForm.tsx`. |
| **Phone & Address** | `+1 (800) 459-CAST`, Cleveland Hub | Update `contactPhone`, `contactEmail`, and `officeAddress` in `src/data/siteConfig.ts`. |
| **Authentication Links** | Links point to `/login` and `/signup` | Connect to your preferred auth provider (e.g. Auth0, NextAuth, Clerk). |
