export interface AuctionSubcategory {
  name: string;
  count: number;
}

export interface AuctionCategory {
  id: string;
  name: string;
  shortName: string;
  lotCount: number;
  iconName: string;
  subcategories: AuctionSubcategory[];
  topBrands: string[];
  featuredLot: {
    title: string;
    lotNumber: string;
    currentBid: string;
    bidsCount: number;
    closingIn: string;
    imageUrl: string;
  };
}

export interface AuctionEvent {
  id: string;
  title: string;
  slug: string;
  auctioneer: {
    name: string;
    logoUrl?: string;
    verified: boolean;
  };
  auctionType: "Timed Online" | "Live Webcast";
  closingDate: string;
  closesIn: string;
  location: string;
  totalLots: number;
  buyersPremium: string;
  inspectionDates: string;
  riggingAvailable: boolean;
  featuredCategory: string;
  previewImages: {
    title: string;
    lotNumber: string;
    imageUrl: string;
    currentBid: string;
  }[];
  description: string;
}

export interface HotAuctionLot {
  id: string;
  lotNumber: string;
  title: string;
  category: string;
  alloyOrSpec: string;
  location: string;
  currentBid: number;
  bidIncrement: number;
  bidsCount: number;
  reserveMet: boolean;
  closesIn: string;
  imageUrl: string;
  leadTimeOrDisassembly: string;
  auctionType: "Timed Online" | "Live Webcast";
  eventId: string;
}

// 1. BidSpotter-adapted Foundry & Metallurgy Heavy Machinery Taxonomy
export const auctionCategories: AuctionCategory[] = [
  {
    id: "melt-shop",
    name: "Melt Shop & Furnaces",
    shortName: "Melt Shop",
    lotCount: 142,
    iconName: "Flame",
    subcategories: [
      { name: "Coreless Induction Furnaces", count: 48 },
      { name: "Channel Holding Furnaces", count: 22 },
      { name: "Electric Arc Furnaces (EAF)", count: 14 },
      { name: "Pouring Ladles & Preheaters", count: 36 },
      { name: "VIP Power-Trak Inverter Cabinets", count: 12 },
      { name: "Closed-Loop Cooling Skids", count: 10 },
    ],
    topBrands: ["Inductotherm", "ABP Induction", "Ajax Tocco", "Pillar"],
    featuredLot: {
      title: "2019 Inductotherm 3.5T Coreless Induction Furnace (2500 kW)",
      lotNumber: "Lot #101",
      currentBid: "$78,500",
      bidsCount: 29,
      closingIn: "1d 08h",
      imageUrl: "/images/listings/furnace.svg",
    },
  },
  {
    id: "molding-sand",
    name: "Molding & Sand Systems",
    shortName: "Molding Lines",
    lotCount: 89,
    iconName: "Layers",
    subcategories: [
      { name: "Automatic Flaskless Molding Lines", count: 26 },
      { name: "Continuous Green Sand Mullers", count: 18 },
      { name: "Vibratory Shakeout Decks", count: 15 },
      { name: "Thermal Sand Reclamation Units", count: 14 },
      { name: "Pneumatic Sand Transporters", count: 16 },
    ],
    topBrands: ["DISA", "Hunter", "Simpson", "Roberts Sinto"],
    featuredLot: {
      title: "DISA Match 24/28 High-Speed Flaskless Molding System",
      lotNumber: "Lot #118",
      currentBid: "$92,000",
      bidsCount: 34,
      closingIn: "2d 04h",
      imageUrl: "/images/listings/molding.svg",
    },
  },
  {
    id: "coremaking-tooling",
    name: "Coremaking & Tooling",
    shortName: "Core & Tooling",
    lotCount: 64,
    iconName: "Wrench",
    subcategories: [
      { name: "Cold-Box Core Shooters (25L - 100L)", count: 24 },
      { name: "Shell Core Machines", count: 16 },
      { name: "Gas Scrubbers & Amine Generators", count: 10 },
      { name: "Surplus CNC Matchplates & Tooling", count: 14 },
    ],
    topBrands: ["Laempe", "Loramendi", "EMI", "Redford Carver"],
    featuredLot: {
      title: "Laempe LHL-40 Automatic Cold Box Core Shooter with Scrubber",
      lotNumber: "Lot #142",
      currentBid: "$46,000",
      bidsCount: 18,
      closingIn: "2d 11h",
      imageUrl: "/images/listings/pattern.svg",
    },
  },
  {
    id: "fettling-blast",
    name: "Fettling & Shot Blast",
    shortName: "Fettling & Blast",
    lotCount: 76,
    iconName: "Sparkles",
    subcategories: [
      { name: "Rubber Belt Tumblast Machines", count: 28 },
      { name: "Spinner Hanger Blast Rooms", count: 18 },
      { name: "Robotic Grinding & Fettling Cells", count: 14 },
      { name: "Abrasive Cut-Off Saws", count: 16 },
    ],
    topBrands: ["Wheelabrator", "Pangborn", "BCP", "Maus Robotic"],
    featuredLot: {
      title: "Wheelabrator 14 cu.ft Continuous Rubber Belt Tumblast",
      lotNumber: "Lot #204",
      currentBid: "$34,500",
      bidsCount: 22,
      closingIn: "1d 19h",
      imageUrl: "/images/listings/casing.svg",
    },
  },
  {
    id: "heat-treat",
    name: "Heat Treating & Ovens",
    shortName: "Heat Treat",
    lotCount: 48,
    iconName: "Cpu",
    subcategories: [
      { name: "Car-Bottom Annealing Furnaces", count: 16 },
      { name: "Continuous Stress-Relief Ovens", count: 12 },
      { name: "Oil & Water Quenching Tanks", count: 10 },
      { name: "Digital Pyrometry & Control Panels", count: 10 },
    ],
    topBrands: ["Seco/Warwick", "Surface Combustion", "Lindberg/MPH"],
    featuredLot: {
      title: "Seco/Warwick 1200°C Car-Bottom Stress Relief Furnace (10T)",
      lotNumber: "Lot #230",
      currentBid: "$58,000",
      bidsCount: 15,
      closingIn: "3d 02h",
      imageUrl: "/images/listings/refractory.svg",
    },
  },
  {
    id: "qa-metallurgy",
    name: "Metallurgical Lab & QA",
    shortName: "Lab QA",
    lotCount: 35,
    iconName: "ShieldCheck",
    subcategories: [
      { name: "Optical Emission Spectrometers (OES)", count: 12 },
      { name: "Brinell & Rockwell Hardness Testers", count: 9 },
      { name: "Hydraulic Tensile / Charpy Testers", count: 8 },
      { name: "Real-time Industrial X-Ray NDT", count: 6 },
    ],
    topBrands: ["Thermo Fisher", "SPECTRO", "Wilson", "Olympus"],
    featuredLot: {
      title: "Thermo Fisher ARL 3460 Optical Emission Spectrometer (Fe/Al/Cu)",
      lotNumber: "Lot #288",
      currentBid: "$21,400",
      bidsCount: 26,
      closingIn: "0d 16h",
      imageUrl: "/images/listings/valve.svg",
    },
  },
  {
    id: "cranes-handling",
    name: "Cranes & Heavy Handling",
    shortName: "Cranes & Handling",
    lotCount: 52,
    iconName: "Truck",
    subcategories: [
      { name: "Hot Metal Overhead Bridge Cranes (20T-50T)", count: 14 },
      { name: "Scrap Charging Buckets & Magnets", count: 15 },
      { name: "Heavy Heavy-Duty Transfer Cars", count: 11 },
      { name: "Foundry-Spec Pneumatic Forklifts", count: 12 },
    ],
    topBrands: ["Konecranes", "Demag", "Yale", "Caterpillar"],
    featuredLot: {
      title: "Konecranes 30-Ton Foundry Duty Bridge Crane with Auxiliary Hoist",
      lotNumber: "Lot #310",
      currentBid: "$64,000",
      bidsCount: 19,
      closingIn: "4d 12h",
      imageUrl: "/images/listings/impeller.svg",
    },
  },
  {
    id: "surplus-alloys",
    name: "Surplus Alloys & Ingots",
    shortName: "Alloy Lots",
    lotCount: 94,
    iconName: "Boxes",
    subcategories: [
      { name: "Certified Virgin Pig Iron Lots", count: 32 },
      { name: "Ferro-Silicon & Ferro-Manganese Briquettes", count: 24 },
      { name: "Secondary Aluminum Ingot Bundles (A380)", count: 22 },
      { name: "High-Purity Silicon Carbide & Inoculants", count: 16 },
    ],
    topBrands: ["Rio Tinto", "Elkem", "Globe Specialty", "Miller and Company"],
    featuredLot: {
      title: "60 Metric Tons Certified Low-Phosphorus Virgin Pig Iron",
      lotNumber: "Lot #345",
      currentBid: "$31,200",
      bidsCount: 31,
      closingIn: "1d 22h",
      imageUrl: "/images/listings/pig-iron.svg",
    },
  },
  {
    id: "plant-liquidations",
    name: "Plant Closures & Liquidations",
    shortName: "Plant Closures",
    lotCount: 6,
    iconName: "Building2",
    subcategories: [
      { name: "Complete Iron & Steel Foundry Buyouts", count: 3 },
      { name: "Die Casting & Machining Plant Liquidations", count: 2 },
      { name: "Consolidated Auction Events", count: 1 },
    ],
    topBrands: ["FE Industrial Auctions", "PPL Group Clearing", "Rhein-Ruhr Recovery"],
    featuredLot: {
      title: "Entire 45,000 Sq.Ft Automotive Iron Foundry — Turnkey Asset Catalog",
      lotNumber: "Catalog #01",
      currentBid: "420 Lots",
      bidsCount: 145,
      closingIn: "2d 14h",
      imageUrl: "/images/listings/furnace.svg",
    },
  },
];

// 2. Featured Auction Events (Modeled after BidSpotter PPL Group 4-Image Card Format)
export const auctionEvents: AuctionEvent[] = [
  {
    id: "event-001",
    title: "Complete 45,000 Sq.Ft Automotive Ductile Iron Foundry Liquidation",
    slug: "automotive-ductile-foundry-detroit",
    auctioneer: {
      name: "PPL Industrial Asset Group",
      verified: true,
    },
    auctionType: "Timed Online",
    closingDate: "Closing Oct 28, 2026",
    closesIn: "2d 14h 35m",
    location: "Detroit, MI, USA",
    totalLots: 420,
    buyersPremium: "15% Buyer's Premium",
    inspectionDates: "Oct 24 - 26 (By Appointment)",
    riggingAvailable: true,
    featuredCategory: "Melt Shop & Furnaces",
    description:
      "Full facility liquidation of high-capacity tier-1 automotive casting plant. Features twin 3.5T induction melt systems, DISA Match molding lines, robotic fettling cells, and complete QA spectrometry lab.",
    previewImages: [
      {
        title: "Twin Inductotherm 3.5T Induction Furnaces with 2500 kW Power-Trak",
        lotNumber: "Lot 101",
        imageUrl: "/images/listings/furnace.svg",
        currentBid: "$78,500",
      },
      {
        title: "DISA Match 24/28 Flaskless Automatic Green Sand Molding Line",
        lotNumber: "Lot 118",
        imageUrl: "/images/listings/molding.svg",
        currentBid: "$92,000",
      },
      {
        title: "Wheelabrator 14 cu.ft Continuous Tumblast Shot Blaster",
        lotNumber: "Lot 204",
        imageUrl: "/images/listings/casing.svg",
        currentBid: "$34,500",
      },
      {
        title: "Thermo Fisher ARL 3460 Optical Emission Spectrometer",
        lotNumber: "Lot 288",
        imageUrl: "/images/listings/valve.svg",
        currentBid: "$21,400",
      },
    ],
  },
  {
    id: "event-002",
    title: "Rhein-Ruhr Heavy Alloy Melt Deck & Centrifugal Casting Facility",
    slug: "rhein-ruhr-alloy-melt-deck",
    auctioneer: {
      name: "EuroMelt Industrial Liquidators",
      verified: true,
    },
    auctionType: "Live Webcast",
    closingDate: "Closing Nov 02, 2026",
    closesIn: "4d 08h 15m",
    location: "Dortmund, Germany",
    totalLots: 185,
    buyersPremium: "18% BP · Wire / Escrow",
    inspectionDates: "Oct 30 - Nov 01",
    riggingAvailable: true,
    featuredCategory: "Melt Shop & Furnaces",
    description:
      "Surplus heavy equipment from European mineral wear casting facility. High-frequency vacuum induction units, 30-ton hot metal bridge cranes, and heavy-duty car bottom annealing furnaces.",
    previewImages: [
      {
        title: "ABP Induction 5-Ton Coreless Crucible Furnace with Tilt Skids",
        lotNumber: "Lot 12",
        imageUrl: "/images/listings/furnace.svg",
        currentBid: "$115,000",
      },
      {
        title: "Seco/Warwick 10-Ton Car-Bottom Annealing Furnace (1250°C)",
        lotNumber: "Lot 44",
        imageUrl: "/images/listings/refractory.svg",
        currentBid: "$58,000",
      },
      {
        title: "Konecranes 30-Ton Hot Metal Overhead Bridge Crane (Span 24m)",
        lotNumber: "Lot 87",
        imageUrl: "/images/listings/impeller.svg",
        currentBid: "$64,000",
      },
      {
        title: "75 Metric Tons High-Chrome White Iron Re-melt Scrap Ingots",
        lotNumber: "Lot 109",
        imageUrl: "/images/listings/pig-iron.svg",
        currentBid: "$41,000",
      },
    ],
  },
  {
    id: "event-003",
    title: "Precision Die Casting & 5-Axis Fettling Cell Plant Closure",
    slug: "precision-die-casting-monterrey",
    auctioneer: {
      name: "Norte Asset Recovery Partners",
      verified: true,
    },
    auctionType: "Timed Online",
    closingDate: "Closing Nov 06, 2026",
    closesIn: "6d 12h 45m",
    location: "Monterrey, Mexico",
    totalLots: 260,
    buyersPremium: "15% Buyer's Premium",
    inspectionDates: "Nov 02 - 04",
    riggingAvailable: true,
    featuredCategory: "Coremaking & Tooling",
    description:
      "Complete closure of aluminum powertrain die casting facility. Features cold chamber die cast cells (600T - 1200T), robotic trimming presses, 5-axis DMG Mori CNC mills, and CMM laser inspection arms.",
    previewImages: [
      {
        title: "Buhler 840T Cold Chamber Aluminum Die Casting Cell with Ladler",
        lotNumber: "Lot 05",
        imageUrl: "/images/listings/valve.svg",
        currentBid: "$138,000",
      },
      {
        title: "DMG Mori DMU 50 5-Axis CNC High-Speed Pattern Mill",
        lotNumber: "Lot 22",
        imageUrl: "/images/listings/pattern.svg",
        currentBid: "$84,000",
      },
      {
        title: "Zeiss Contura G2 Bridge-Type CMM Coordinate Measuring Machine",
        lotNumber: "Lot 65",
        imageUrl: "/images/listings/casing.svg",
        currentBid: "$37,500",
      },
      {
        title: "40 Metric Tons A380 Aluminum Secondary Die Casting Ingot Lot",
        lotNumber: "Lot 130",
        imageUrl: "/images/listings/pig-iron.svg",
        currentBid: "$33,800",
      },
    ],
  },
];

// 3. Hot Individual Lots (Direct Quick-Bidding Grid)
export const hotAuctionLots: HotAuctionLot[] = [
  {
    id: "lot-101",
    lotNumber: "Lot #101",
    title: "2019 Inductotherm 3.5T Coreless Induction Furnace (2500 kW Power-Trak)",
    category: "Melt Shop & Furnaces",
    alloyOrSpec: "Steel / Cast Iron Melt Deck",
    location: "Detroit, MI, USA",
    currentBid: 78500,
    bidIncrement: 1000,
    bidsCount: 29,
    reserveMet: true,
    closesIn: "1d 08h 14m",
    imageUrl: "/images/listings/furnace.svg",
    leadTimeOrDisassembly: "Immediate Disassembly",
    auctionType: "Timed Online",
    eventId: "event-001",
  },
  {
    id: "lot-118",
    lotNumber: "Lot #118",
    title: "DISA Match 24/28 Flaskless High-Speed Green Sand Molding Machine",
    category: "Molding & Sand Systems",
    alloyOrSpec: "24x28 inch Mold · Up to 180 Molds/Hr",
    location: "Detroit, MI, USA",
    currentBid: 92000,
    bidIncrement: 2000,
    bidsCount: 34,
    reserveMet: true,
    closesIn: "2d 04h 22m",
    imageUrl: "/images/listings/molding.svg",
    leadTimeOrDisassembly: "Rigging On-Site Available",
    auctionType: "Timed Online",
    eventId: "event-001",
  },
  {
    id: "lot-204",
    lotNumber: "Lot #204",
    title: "Wheelabrator 14 cu.ft Continuous Tumblast Shot Blast Machine",
    category: "Fettling & Shot Blast",
    alloyOrSpec: "Castings Finishing · Dual 30 HP Wheels",
    location: "Detroit, MI, USA",
    currentBid: 34500,
    bidIncrement: 500,
    bidsCount: 22,
    reserveMet: true,
    closesIn: "1d 19h 40m",
    imageUrl: "/images/listings/casing.svg",
    leadTimeOrDisassembly: "Crated for Transport",
    auctionType: "Timed Online",
    eventId: "event-001",
  },
  {
    id: "lot-288",
    lotNumber: "Lot #288",
    title: "Thermo Fisher ARL 3460 Optical Emission Spectrometer (OES)",
    category: "Metallurgical Lab & QA",
    alloyOrSpec: "Fe, Al, Cu, Ni Base Calibrated",
    location: "Detroit, MI, USA",
    currentBid: 21400,
    bidIncrement: 500,
    bidsCount: 26,
    reserveMet: true,
    closesIn: "0d 16h 05m",
    imageUrl: "/images/listings/valve.svg",
    leadTimeOrDisassembly: "Calibrated & Packed",
    auctionType: "Timed Online",
    eventId: "event-001",
  },
];
