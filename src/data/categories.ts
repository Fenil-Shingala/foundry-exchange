export interface Category {
  id: string;
  name: string;
  subheading: string;
  description: string;
  iconName: string;
  href: string;
  featuredTags: string[];
  subcategories?: string[];
  productCount?: number;
  topApplications?: string[];
}

export const foundryCategories: Category[] = [
  {
    id: "castings",
    name: "Castings",
    subheading: "Ferrous & Non-Ferrous",
    description: "Grey iron, ductile iron, carbon & alloy steel, aluminum, brass, bronze, and precision investment castings.",
    iconName: "Layers",
    href: "/marketplace/castings",
    featuredTags: ["ASTM A48", "Ductile 65-45-12", "A356 Al", "Stainless 316"],
    productCount: 1420,
    subcategories: [
      "Centrifugal Pump Volute Casings & Bowls",
      "Flanged & Rotary Industrial Valve Bodies",
      "High-Manganese Jaw Crusher Liners (Mn18Cr2)",
      "Excavator & Loader Pivot Brackets",
      "Railway Bogie Frames & Coupler Knuckles",
      "Silica-Sol Precision Investment Castings",
      "Vacuum-Sealed Molding (V-Process) Bases",
      "AWWA Ductile Iron Waterworks Fittings"
    ],
    topApplications: ["Pumps & Valves", "Mining & Quarrying", "Rail & Automotive", "Water Infrastructure"]
  },
  {
    id: "forgings",
    name: "Forgings",
    subheading: "Open & Closed Die, Rolled Rings",
    description: "High-integrity open-die shafts, impression drop forgings, seamless rolled rings, and high-pressure flanges in carbon, alloy & stainless steel.",
    iconName: "Hammer",
    href: "/marketplace/forgings",
    featuredTags: ["ASTM A105", "A182 F316L", "4140 Q&T", "ASTM A350 LF2"],
    productCount: 1890,
    subcategories: [
      "Seamless Rolled Rings (up to 200\" OD)",
      "Heavy Stepped Pinion Shafts (up to 35ft)",
      "Pancake Forged Discs & Tube Sheets",
      "Forged Automotive Steering Knuckles",
      "High-Pressure Frac Pump Fluid End Blocks",
      "Class 600# to 2500# Weld Neck Flanges",
      "Grade 80 Alloy Safety Bow Shackles",
      "Closed-Die Agricultural Sweeps & Yokes"
    ],
    topApplications: ["Wind Energy", "Oilfield & Frac", "Heavy Trucking", "Rigging & Marine"]
  },
  {
    id: "equipment",
    name: "Foundry & Forge Equipment",
    subheading: "Primary & Auxiliary Machinery",
    description: "Hot forging mechanical presses, coreless induction melt systems, cold knuckle presses, flaskless green sand lines, and automated trimming presses.",
    iconName: "Factory",
    href: "/marketplace/equipment",
    featuredTags: ["Sutherland 1000T", "Inductotherm 3.5T", "KNP Cold Forge", "DISA Match"],
    productCount: 380,
    subcategories: [
      "Hot & Warm Forging Mechanical Presses (FPG-X Series)",
      "Cold Forging Knuckle Joint Presses (KNP Series)",
      "Multi-Axis Hydraulic Cored Forging Presses",
      "Mechanical & Hydraulic Flash Trimming Presses",
      "Coreless Induction Melting Systems (VIP Power-Trak)",
      "Automatic Matchplate Green Sand Lines",
      "Robotic Grinding & Fettling Cells",
      "I-PRESS® Digital Automation & Tonnage Controls"
    ],
    topApplications: ["Closed-Die Forge Shops", "Iron & Steel Foundries", "Automotive Stamping"]
  },
  {
    id: "tooling",
    name: "Patterns & Tooling",
    subheading: "Molds, Cores & Dies",
    description: "CNC machined urethane & aluminum patterns, high-pressure die cast inserts, and permanent shell tooling.",
    iconName: "Wrench",
    href: "/marketplace/tooling",
    featuredTags: ["Matchplates", "Die Cast Dies", "Core Boxes"],
    productCount: 420,
    subcategories: [
      "CNC Hardened Aluminum Matchplates",
      "Cold-Box & Shell Core Tooling Boxes",
      "H13 Forging Impression Die Blocks",
      "High-Pressure Die Casting Tooling Inserts"
    ]
  },
  {
    id: "raw-materials",
    name: "Raw Materials & Alloys",
    subheading: "Melt Feedstock & Inoculants",
    description: "Premium foundry pig iron, shredded heavy melt scrap, Ferro-Silicon (FeSi), Ferro-Manganese, and nodulizers.",
    iconName: "Flame",
    href: "/marketplace/raw-materials",
    featuredTags: ["Foundry Pig Iron", "FeSi 75%", "HMS 1/2 Scrap"],
    productCount: 650,
    subcategories: [
      "Low-Phosphorus Virgin Pig Iron (Briquettes)",
      "Ductile Iron Re-Melt Scrap Bundles",
      "Ferro-Silicon (FeSi 75%) & Inoculants",
      "Magnesium-Ferrosilicon Nodulizers"
    ]
  },
  {
    id: "sand-binders",
    name: "Sand & Binders",
    subheading: "Aggregate & Chemical Systems",
    description: "High-purity silica sand, chromite chill sand, furan resins, phenolic urethanes, and bentonite clays.",
    iconName: "Droplets",
    href: "/marketplace/sand-binders",
    featuredTags: ["AFS 55 Silica", "Chromite Sand", "No-Bake Resin"],
    productCount: 310,
    subcategories: [
      "High-Purity Sub-Angular Silica Sand (AFS 45-60)",
      "South African Chromite Sand (Anti-Veining)",
      "Furan & Phenolic No-Bake Chemical Resins",
      "Western & Southern Sodium Bentonite"
    ]
  },
  {
    id: "refractories",
    name: "Refractories",
    subheading: "Thermal Linings & Protection",
    description: "Alumina-magnesite ramming mixes, dense firebrick, ladle shrouds, crucibles, and fiber insulation boards.",
    iconName: "Box",
    href: "/marketplace/refractories",
    featuredTags: ["90% Alumina Dry Vibe", "Isostatic Crucibles", "Zircon Patch"],
    productCount: 290,
    subcategories: [
      "Spinel-Forming Dry Vibratable Mass (Al2O3-MgO)",
      "Isostatically Pressed Silicon Carbide Crucibles",
      "High-Alumina Ladle Bricks & Shrouds",
      "Microporous Ceramic Fiber Boards"
    ]
  },
  {
    id: "machining-finishing",
    name: "Machining & Finishing",
    subheading: "Post-Cast Processing",
    description: "Robotic fettling, horizontal & vertical CNC machining, thermal stress relief, shot peening, and e-coating.",
    iconName: "SlidersHorizontal",
    href: "/marketplace/machining-finishing",
    featuredTags: ["5-Axis CNC", "Stress Relief", "Robotic Grinding"],
    productCount: 480,
    subcategories: [
      "5-Axis Heavy Horizontal CNC Machining",
      "Heavy Boring & Flange Facing (Up to 4m Dia)",
      "Robotic Foundry Casting Fettling & Risering",
      "Sub-Zero Cryogenic Treatment & Shot Peening"
    ]
  },
  {
    id: "testing-inspection",
    name: "Testing & Inspection",
    subheading: "Quality & Metallurgical QA",
    description: "Optical emission spectrometry (OES), ultrasonic NDT, X-ray radiography, tensile testing, and CMM scans.",
    iconName: "ShieldCheck",
    href: "/marketplace/testing-inspection",
    featuredTags: ["OES Chemistry", "Radiography RT", "CMM Inspection"],
    productCount: 240,
    subcategories: [
      "Spark Optical Emission Spectrometry (OES)",
      "Phased Array Ultrasonic Testing (PAUT / UT Level 1/2)",
      "Coordinate Measuring Machine (CMM 3D Scanning)",
      "Hydrostatic High-Pressure Proof Testing (up to 500 Bar)",
      "Third-Party China Foundry Audits (SGS / BV / DNV GL)"
    ]
  },
  {
    id: "heat-treating",
    name: "Heat Treating & Ovens",
    subheading: "Thermal Processing & Quench",
    description: "Car bottom furnaces, continuous austempering, solution annealing, quench tanks, and vacuum hardening ovens.",
    iconName: "Thermometer",
    href: "/marketplace/heat-treating",
    featuredTags: ["Car Bottom 1200°C", "Austempering", "Q&T Oil Quench"],
    productCount: 195,
    subcategories: [
      "15-Ton Gas-Fired Car Bottom Annealing Furnaces",
      "Continuous Salt-Bath Austempering Lines (ADI)",
      "Water & Polymer Rapid Agitation Quench Tanks",
      "Vacuum Heat Treating & Carburizing Ovens"
    ]
  },
];
