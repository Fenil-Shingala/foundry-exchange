export interface ExchangeMode {
  id: string;
  name: string;
  badge: string;
  description: string;
  iconName: string;
  colorClass: string;
}

export interface IndustryServed {
  name: string;
  subtitle: string;
  applications: string[];
  iconName: string;
}

export const siteConfig = {
  name: "Foundry Exchange",
  shortName: "FE",
  tagline: "Everything Foundry. One Exchange.",
  subline:
    "The premier B2B marketplace to buy, sell, trade, and source ferrous & non-ferrous castings, foundry equipment, patterns, raw materials, and metallurgical services.",
  contactPhone: "+1 (800) 459-CAST",
  contactEmail: "foundryxchange@gmail.com",
  officeAddress: "Cleveland Metallurgical Hub, 1400 Industrial Pkwy, Cleveland, OH 44114",
  exchangeModes: [
    {
      id: "buy",
      name: "Direct Buy",
      badge: "Ready Stock",
      description: "Purchase warehouse-verified castings, standard ingots, refractories, and spare parts with immediate dispatch.",
      iconName: "ShoppingCart",
      colorClass: "from-blue-600 to-indigo-600",
    },
    {
      id: "sell",
      name: "Sell Products",
      badge: "Foundries & Vendors",
      description: "List recurring production runs, inventory stock, scrap parcels, or foundry supplies directly to qualified industrial buyers.",
      iconName: "Tag",
      colorClass: "from-emerald-600 to-teal-600",
    },
    {
      id: "rfq",
      name: "Post an RFQ",
      badge: "Custom Castings",
      description: "Upload CAD 3D models and drawing specs; receive guaranteed quotes from verified foundries matching your metallurgy.",
      iconName: "FileText",
      colorClass: "from-brand to-rose-600",
    },
    {
      id: "trade",
      name: "Trade & Swap",
      badge: "B2B Bilateral",
      description: "Exchange surplus alloy inventory, scrap batches, or secondary materials directly between foundries.",
      iconName: "ArrowLeftRight",
      colorClass: "from-amber-600 to-molten",
    },
    {
      id: "barter",
      name: "Barter Exchange",
      badge: "Resource Offset",
      description: "Trade excess melting capacity, heat treat hours, or pattern-making labor against essential consumables and raw metals.",
      iconName: "Repeat",
      colorClass: "from-purple-600 to-violet-600",
    },
    {
      id: "rent-lease",
      name: "Rent / Lease",
      badge: "Plant Capital",
      description: "Lease capital melt equipment, backup coreless power units, test instruments, or mobile spectrometer trucks.",
      iconName: "Factory",
      colorClass: "from-cyan-600 to-blue-700",
    },
    {
      id: "auction",
      name: "Plant Auctions",
      badge: "Live & Timed Bids",
      description: "Bid on full foundry lines, automated molding carousels, induction tilt furnaces, and plant liquidations.",
      iconName: "Gavel",
      colorClass: "from-red-700 to-brand",
    },
    {
      id: "surplus",
      name: "Surplus Tooling",
      badge: "Circular Economy",
      description: "Acquire idle patterns, matchplates, dies, and flasks from other foundries at a fraction of machining lead times.",
      iconName: "Archive",
      colorClass: "from-orange-600 to-amber-700",
    },
  ] as ExchangeMode[],
  industries: [
    {
      name: "Automotive & Commercial Vehicles",
      subtitle: "Engine blocks, brake discs, knuckles & brackets",
      applications: ["Ductile iron steering knuckles", "AlSi alloy engine brackets", "Brake calipers & drums"],
      iconName: "Car",
    },
    {
      name: "Construction & Infrastructure",
      subtitle: "Structural nodes, trench grates, valves & pipes",
      applications: ["Heavy municipal manholes & grates", "High-strength structural cast joints", "Waterworks ductile iron valves"],
    },
    {
      name: "Energy, Oil & Gas",
      subtitle: "Turbine casings, high-pressure valves & flanges",
      applications: ["Subsea choke valve bodies", "Wind turbine hub castings (EN-GJS-400-18U)", "Pump volutes in Super Duplex"],
      iconName: "Zap",
    },
    {
      name: "Marine & Shipbuilding",
      subtitle: "Bronze propellers, rudders & hawse pipes",
      applications: ["Ni-Al bronze propeller blades", "Anchor windlass gears", "Keel counterweights"],
      iconName: "Anchor",
    },
    {
      name: "Agriculture & Forestry",
      subtitle: "Plow points, wheel hubs, sprockets & hitches",
      applications: ["Abrasion-resistant tillage points", "Harvester gearbox cases", "Chassis cast linkages"],
      iconName: "Tractor",
    },
    {
      name: "Mining & Heavy Minerals",
      subtitle: "Crusher jaws, ball mill liners & slurry pumps",
      applications: ["High-manganese Hadfield steel liners", "27% Chrome white iron impellers", "Dragline rigging links"],
      iconName: "Pickaxe",
    },
  ] as IndustryServed[],
  whyFeatures: [
    {
      title: "100% Verified Foundry Vendors",
      summary: "Every supplier profile is audited for active facility operations, induction capacity, and verifiable quality certifications.",
      detail: "No ghost brokers. Direct access to ISO 9001, IATF 16949, and AFS registered melting facilities.",
      iconName: "BadgeCheck",
    },
    {
      title: "Metallurgical Specs & Standards First",
      summary: "Filter every casting and alloy by strict international standards: ASTM, DIN EN, ISO, SAE, and JIS.",
      detail: "Chemistry breakdowns, 3.1 Mill Test certificates, Brinell hardness thresholds, and NDT reports attached directly to RFQs.",
      iconName: "Scale",
    },
    {
      title: "Freight & Delivery Region Routing",
      summary: "Smart geographical logistics filters reduce shipping carbon footprint and heavy freight costs.",
      detail: "Calculate flatbed, rail, and maritime multimodal shipping rates with integrated heavy-haul freight partners.",
      iconName: "MapPin",
    },
    {
      title: "Guaranteed 24-Hour RFQ Turnaround",
      summary: "Proprietary foundry quote router matches your drawing packages to foundries with open pour schedules.",
      detail: "Receive standardized, comparable line-item quotes with tooling, pattern, fettling, and sample turnaround timelines.",
      iconName: "Clock",
    },
    {
      title: "Circular Reuse of Surplus Tooling",
      summary: "Unlock millions in idle foundry capital by buying and selling idle patterns, molds, flasks, and cores.",
      detail: "Avoid months of pattern tooling lead times by adapting certified surplus patterns across peer foundries.",
      iconName: "RefreshCw",
    },
  ],
};

