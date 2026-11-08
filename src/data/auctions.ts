export interface AuctionSubcategory {
  name: string;
  count: number;
}

export interface AuctionCategory {
  id: string;
  name: string;
  shortName: string;
  count: number;
  subcategories: AuctionSubcategory[];
  popularBrands: string[];
  featuredLot: {
    lotNumber: string;
    title: string;
    currentBid: string;
    endsIn: string;
    imageUrl: string;
  };
}

export interface AuctionEventLotPreview {
  lotNumber: string;
  title: string;
  currentBid: string;
  bidsCount: number;
  imageUrl: string;
}

export interface AuctionEvent {
  id: string;
  title: string;
  auctioneer: {
    name: string;
    code: string;
    verified: boolean;
  };
  type: "TIMED" | "LIVE WEBCAST";
  status: "LIVE NOW" | "CLOSING SOON" | "UPCOMING";
  categoryTag: string;
  closingDate: string;
  timeRemaining: string;
  location: string;
  totalLots: number;
  buyersPremium: string;
  riggingAvailable: boolean;
  catalogUrl: string;
  previewLots: [
    AuctionEventLotPreview,
    AuctionEventLotPreview,
    AuctionEventLotPreview,
    AuctionEventLotPreview
  ];
}

export interface HotAuctionLot {
  id: string;
  lotNumber: string;
  title: string;
  category: string;
  specs: string;
  currentBid: string;
  nextBid: string;
  bidsCount: number;
  timeRemaining: string;
  reserveStatus: "Reserve Met" | "No Reserve";
  location: string;
  imageUrl: string;
}

export const auctionCategories: AuctionCategory[] = [
  {
    id: "melt-shop",
    name: "Melt Shop & Furnaces",
    shortName: "Melt Shop",
    count: 142,
    subcategories: [
      { name: "Coreless Induction Furnaces", count: 48 },
      { name: "Channel Holding Furnaces", count: 22 },
      { name: "VIP Power-Trak Inverters", count: 24 },
      { name: "Pouring Ladles & Preheaters", count: 36 },
      { name: "Closed-Loop Cooling Skids", count: 12 },
    ],
    popularBrands: ["Inductotherm", "ABP Induction", "Ajax Tocco", "Pillar"],
    featuredLot: {
      lotNumber: "Lot 102",
      title: "Inductotherm 3.5T Coreless Induction Furnace (2500 kW)",
      currentBid: "$62,500",
      endsIn: "1d 08h",
      imageUrl: "/images/listings/furnace.svg",
    },
  },
  {
    id: "molding",
    name: "Molding & Sand Systems",
    shortName: "Molding",
    count: 89,
    subcategories: [
      { name: "Automatic Green Sand Lines", count: 28 },
      { name: "Flaskless Molding Systems", count: 21 },
      { name: "Continuous Sand Mullers", count: 18 },
      { name: "Thermal Sand Reclamation", count: 12 },
      { name: "Vibratory Shakeout Tables", count: 10 },
    ],
    popularBrands: ["DISA", "Hunter", "Simpson", "Roberts Sinto"],
    featuredLot: {
      lotNumber: "Lot 145",
      title: "DISA Match 24/28 Flaskless Molding System with Turntable",
      currentBid: "$48,000",
      endsIn: "2d 04h",
      imageUrl: "/images/listings/molding.svg",
    },
  },
  {
    id: "coremaking",
    name: "Coremaking & Tooling",
    shortName: "Coremaking",
    count: 64,
    subcategories: [
      { name: "Cold-Box Core Shooters", count: 26 },
      { name: "Shell Core Machines", count: 14 },
      { name: "CNC Aluminum Matchplates", count: 15 },
      { name: "Gas Scrubbers & Generators", count: 9 },
    ],
    popularBrands: ["Laempe", "Loramendi", "EMI", "Redford"],
    featuredLot: {
      lotNumber: "Lot 188",
      title: "Laempe LB25 Cold-Box Core Shooter with Amine Gas Generator",
      currentBid: "$29,000",
      endsIn: "1d 22h",
      imageUrl: "/images/listings/pattern.svg",
    },
  },
  {
    id: "fettling",
    name: "Fettling & Shot Blast",
    shortName: "Fettling & Blast",
    count: 76,
    subcategories: [
      { name: "Tumblast Rubber Belt Machines", count: 25 },
      { name: "Spinner Hanger Blast Rooms", count: 18 },
      { name: "Robotic Grinding Cells", count: 17 },
      { name: "Abrasive Cut-Off Saws", count: 16 },
    ],
    popularBrands: ["Wheelabrator", "Pangborn", "BCP", "Maus"],
    featuredLot: {
      lotNumber: "Lot 210",
      title: "Wheelabrator 14 cu.ft Rubber Belt Tumblast with Dust Collector",
      currentBid: "$34,500",
      endsIn: "3d 11h",
      imageUrl: "/images/listings/casing.svg",
    },
  },
  {
    id: "heat-treat",
    name: "Heat Treating & Ovens",
    shortName: "Heat Treating",
    count: 48,
    subcategories: [
      { name: "Car-Bottom Annealing Furnaces", count: 16 },
      { name: "Quench Tanks & Agitators", count: 12 },
      { name: "Stress-Relief Ovens", count: 14 },
      { name: "Pyrometry & Data Recorders", count: 6 },
    ],
    popularBrands: ["Seco/Warwick", "Surface Combustion", "Lindberg", "Wellman"],
    featuredLot: {
      lotNumber: "Lot 265",
      title: "Seco/Warwick 15-Ton Car Bottom Annealing Furnace (1100°C)",
      currentBid: "$51,000",
      endsIn: "4d 06h",
      imageUrl: "/images/listings/furnace.svg",
    },
  },
  {
    id: "metallurgical-lab",
    name: "Metallurgical Lab & QA",
    shortName: "Lab & Testing",
    count: 35,
    subcategories: [
      { name: "Optical Emission Spectrometers", count: 14 },
      { name: "Universal Tensile Testers", count: 8 },
      { name: "Brinell & Rockwell Testers", count: 7 },
      { name: "Ultrasonic NDT & X-Ray Systems", count: 6 },
    ],
    popularBrands: ["Thermo Fisher", "SPECTRO", "Wilson", "Olympus"],
    featuredLot: {
      lotNumber: "Lot 312",
      title: "Thermo Scientific ARL 3460 Optical Emission Spectrometer",
      currentBid: "$18,500",
      endsIn: "2d 16h",
      imageUrl: "/images/listings/impeller.svg",
    },
  },
  {
    id: "cranes-handling",
    name: "Cranes & Heavy Handling",
    shortName: "Cranes & Handling",
    count: 52,
    subcategories: [
      { name: "Hot Metal Overhead Bridge Cranes", count: 18 },
      { name: "Charging Hoists & Ladle Bail Arms", count: 14 },
      { name: "Scrap Lifting Magnets", count: 11 },
      { name: "Heavy Heavy-Duty Forklifts", count: 9 },
    ],
    popularBrands: ["Konecranes", "Demag", "Yale", "Caterpillar"],
    featuredLot: {
      lotNumber: "Lot 340",
      title: "Konecranes 25/10 Ton Hot Metal Overhead Bridge Crane (60' Span)",
      currentBid: "$74,000",
      endsIn: "5d 02h",
      imageUrl: "/images/listings/furnace.svg",
    },
  },
  {
    id: "surplus-alloys",
    name: "Surplus Alloys & Ingots",
    shortName: "Surplus Alloys",
    count: 94,
    subcategories: [
      { name: "Foundry Grade Pig Iron (Lots)", count: 32 },
      { name: "Ductile Iron Re-Melt Scrap", count: 28 },
      { name: "Ferro-Silicon & Inoculants", count: 20 },
      { name: "A380 Aluminum Ingot Bundles", count: 14 },
    ],
    popularBrands: ["Rio Tinto", "Elkem", "Globe Specialty", "Hydro"],
    featuredLot: {
      lotNumber: "Lot 405",
      title: "100 MT Certified Low-Phosphorus Virgin Pig Iron (Briquetted)",
      currentBid: "$46,000",
      endsIn: "1d 14h",
      imageUrl: "/images/listings/pig-iron.svg",
    },
  },
  {
    id: "plant-liquidations",
    name: "Plant Closures & Liquidations",
    shortName: "Plant Liquidations",
    count: 6,
    subcategories: [
      { name: "Complete Iron & Steel Foundries", count: 2 },
      { name: "Non-Ferrous Die Cast Plants", count: 2 },
      { name: "Pattern Shops & Model Studios", count: 1 },
      { name: "Continuous Cast Bar Facilities", count: 1 },
    ],
    popularBrands: ["FE Clearing", "PPL Group", "Hilco", "Tiger Group"],
    featuredLot: {
      lotNumber: "Event 01",
      title: "Complete 60,000 Sq.Ft Automotive Ductile Iron Foundry Liquidation",
      currentBid: "450 Lots",
      endsIn: "Closing Oct 24",
      imageUrl: "/images/listings/casing.svg",
    },
  },
];

export const auctionEvents: AuctionEvent[] = [
  {
    id: "auction-event-01",
    title: "Complete 60,000 Sq.Ft Automotive Ductile Iron Foundry Liquidation",
    auctioneer: {
      name: "PPL Industrial Asset Group",
      code: "PPL",
      verified: true,
    },
    type: "TIMED",
    status: "LIVE NOW",
    categoryTag: "Melt Shop & Molding",
    closingDate: "October 24, 2026",
    timeRemaining: "2d 14h 28m",
    location: "Detroit, MI, USA",
    totalLots: 450,
    buyersPremium: "15% BP",
    riggingAvailable: true,
    catalogUrl: "/#auctions",
    previewLots: [
      {
        lotNumber: "Lot 101",
        title: "Inductotherm 5-Ton Coreless Induction Furnace (3500 kW)",
        currentBid: "$82,000",
        bidsCount: 31,
        imageUrl: "/images/listings/furnace.svg",
      },
      {
        lotNumber: "Lot 102",
        title: "DISA 24/28 Automatic Flaskless Molding Line",
        currentBid: "$64,500",
        bidsCount: 26,
        imageUrl: "/images/listings/molding.svg",
      },
      {
        lotNumber: "Lot 103",
        title: "Wheelabrator 28 cu.ft Heavy Duty Tumblast Machine",
        currentBid: "$36,000",
        bidsCount: 19,
        imageUrl: "/images/listings/casing.svg",
      },
      {
        lotNumber: "Lot 104",
        title: "Thermo Fisher ARL 3460 Optical Emission Spectrometer",
        currentBid: "$19,500",
        bidsCount: 14,
        imageUrl: "/images/listings/impeller.svg",
      },
    ],
  },
  {
    id: "auction-event-02",
    title: "Major Precision Die-Casting & CNC Fettling Facility Closure",
    auctioneer: {
      name: "Prestige Equipment Liquidators",
      code: "PEL",
      verified: true,
    },
    type: "LIVE WEBCAST",
    status: "LIVE NOW",
    categoryTag: "Die Casting & CNC",
    closingDate: "November 03, 2026",
    timeRemaining: "4d 18h 12m",
    location: "Stuttgart, Germany",
    totalLots: 280,
    buyersPremium: "18% BP",
    riggingAvailable: true,
    catalogUrl: "/#auctions",
    previewLots: [
      {
        lotNumber: "Lot 201",
        title: "Bühler 800-Ton Cold Chamber Die Casting Machine Cell",
        currentBid: "$115,000",
        bidsCount: 42,
        imageUrl: "/images/listings/valve.svg",
      },
      {
        lotNumber: "Lot 202",
        title: "Maus 5-Axis CNC Automatic Robotic Fettling Grinder",
        currentBid: "$42,000",
        bidsCount: 18,
        imageUrl: "/images/listings/impeller.svg",
      },
      {
        lotNumber: "Lot 203",
        title: "StrikoWestofen 1500 kg Gas-Fired Shaft Melting Furnace",
        currentBid: "$38,500",
        bidsCount: 22,
        imageUrl: "/images/listings/furnace.svg",
      },
      {
        lotNumber: "Lot 204",
        title: "Carl Zeiss Contura G2 Bridge-Type CMM Scanner",
        currentBid: "$26,000",
        bidsCount: 15,
        imageUrl: "/images/listings/pattern.svg",
      },
    ],
  },
  {
    id: "auction-event-03",
    title: "Surplus Green Sand Molding, Sand Mullers & Pattern Shop Assets",
    auctioneer: {
      name: "Great Lakes Machinery Clearing",
      code: "GLMC",
      verified: true,
    },
    type: "TIMED",
    status: "CLOSING SOON",
    categoryTag: "Molding & Tooling",
    closingDate: "October 18, 2026",
    timeRemaining: "0d 18h 45m",
    location: "Cleveland, OH, USA",
    totalLots: 195,
    buyersPremium: "15% BP",
    riggingAvailable: true,
    catalogUrl: "/#auctions",
    previewLots: [
      {
        lotNumber: "Lot 301",
        title: "Simpson 2F Multi-Mull Continuous Green Sand Mixer",
        currentBid: "$28,500",
        bidsCount: 17,
        imageUrl: "/images/listings/molding.svg",
      },
      {
        lotNumber: "Lot 302",
        title: "Hunter HMP-20 Automated Matchplate Molding Machine",
        currentBid: "$35,000",
        bidsCount: 23,
        imageUrl: "/images/listings/pattern.svg",
      },
      {
        lotNumber: "Lot 303",
        title: "FMS 15 TPH Thermal Sand Reclamation Kiln & Cooler",
        currentBid: "$47,000",
        bidsCount: 12,
        imageUrl: "/images/listings/refractory.svg",
      },
      {
        lotNumber: "Lot 304",
        title: "Carrier Vibrating Shakeout Conveyor (30' Length)",
        currentBid: "$14,200",
        bidsCount: 9,
        imageUrl: "/images/listings/casing.svg",
      },
    ],
  },
];

export const hotAuctionLots: HotAuctionLot[] = [
  {
    id: "hot-01",
    lotNumber: "Lot 101",
    title: "Inductotherm 5-Ton Coreless Induction Furnace with 3500 kW VIP Power-Trak",
    category: "Melt Shop",
    specs: "3500 kW · 575V 3-Ph · Dual Steel Frame Shells · Hydraulic Tilt",
    currentBid: "$82,000",
    nextBid: "$83,000",
    bidsCount: 31,
    timeRemaining: "02h 14m 10s",
    reserveStatus: "Reserve Met",
    location: "Detroit, MI, USA",
    imageUrl: "/images/listings/furnace.svg",
  },
  {
    id: "hot-02",
    lotNumber: "Lot 145",
    title: "DISA Match 24/28 Flaskless Molding System with Quick Pattern Shuttle",
    category: "Molding",
    specs: "24x28 inch mold · 180 molds/hr · CSE Core Setter · Touchscreen PLC",
    currentBid: "$48,000",
    nextBid: "$49,000",
    bidsCount: 26,
    timeRemaining: "03h 48m 25s",
    reserveStatus: "Reserve Met",
    location: "Monterrey, Mexico",
    imageUrl: "/images/listings/molding.svg",
  },
  {
    id: "hot-03",
    lotNumber: "Lot 210",
    title: "Wheelabrator 14 cu.ft Heavy-Duty Rubber Belt Tumblast with Baghouse",
    category: "Fettling & Blast",
    specs: "14 cu.ft load · 30 HP direct drive wheel · Reverse pulse dust collector",
    currentBid: "$34,500",
    nextBid: "$35,500",
    bidsCount: 19,
    timeRemaining: "05h 22m 40s",
    reserveStatus: "No Reserve",
    location: "Cleveland, OH, USA",
    imageUrl: "/images/listings/casing.svg",
  },
  {
    id: "hot-04",
    lotNumber: "Lot 312",
    title: "Thermo Scientific ARL 3460 Optical Emission Spectrometer (Fe/Al/Cu bases)",
    category: "QA & Testing",
    specs: "Calibrated for Grey/Ductile Iron, Steel & Bronze · Argon purge · Vacuum optics",
    currentBid: "$18,500",
    nextBid: "$19,000",
    bidsCount: 14,
    timeRemaining: "01h 05m 12s",
    reserveStatus: "Reserve Met",
    location: "Stuttgart, Germany",
    imageUrl: "/images/listings/impeller.svg",
  },
];
