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
│   ├── logo.png                # Brand logo (FE monogram + ladle + typography)
│   ├── images/
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
│   │   ├── page.tsx            # Complete Home page composing all 10 core sections
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
│   │   ├── CTASection.tsx      # "Put your foundry on the map" call-to-action band
│   │   ├── ContactForm.tsx     # Technical inquiry desk form (UI only)
│   │   └── Footer.tsx          # Full industrial footer with links, standards & social SVGs
│   └── data/
│       ├── categories.ts       # Foundry category taxonomy & tags
│       ├── listings.ts         # Mock product cards with typed metallurgical specs
│       └── siteConfig.ts       # Single source of truth for stats, modes, & contact details
├── tailwind.config.ts          # Tailwind CSS design tokens
└── tsconfig.json
```

---

## 🎨 Where to Edit Config, Colors & Content

### 1. Brand Colors & Theme Tokens (USA Flag & Industrial Palette)
- Edit [`src/app/globals.css`](file:///d:/Projects/foundry-exchange/src/app/globals.css) and [`tailwind.config.ts`](file:///d:/Projects/foundry-exchange/tailwind.config.ts):
  - `--color-brand`: `#c82425` (Industrial Old Glory Red — Primary Logo & Action Color)
  - `--color-navy`: `#0c1a30` & `#081224` (USA Deep Industrial Navy — Hero, Utility Bar, Footer & Headings)
  - `--color-cobalt`: `#1d4ed8` (American Engineering Cobalt — Verified badges, specs, & trust indicators)
  - `--color-surface`: `#ffffff` & `#f8fafc` (Crisp White & Clean Slate canvas)
  - `--color-molten`: `#f26a1b` (Molten heat accents for melt temperatures & furnace glows)

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

---

## 📋 Assumptions & Items Requiring Real Content

| Item | Current Mock State | How to Replace with Real Data |
| :--- | :--- | :--- |
| **Operational Stats** | Placeholder figures (e.g. `840+` vendors, `$42.5M` volume) | Update values in `src/data/siteConfig.ts` once platform analytics are connected. |
| **Product Photos** | Custom industrial SVG blueprint graphics in `/public/images/listings/` | Swap file paths in `src/data/listings.ts` to point to real product photography or CDN URLs. |
| **Contact Desk API** | Submits to client state & logs to console | Attach your backend endpoint (e.g., Route Handler in `/api/contact` or CRM webhook) in `src/components/ContactForm.tsx`. |
| **Phone & Address** | `+1 (800) 459-CAST`, Cleveland Hub | Update `contactPhone`, `contactEmail`, and `officeAddress` in `src/data/siteConfig.ts`. |
| **Authentication Links** | Links point to `/login` and `/signup` | Connect to your preferred auth provider (e.g. Auth0, NextAuth, Clerk). |
