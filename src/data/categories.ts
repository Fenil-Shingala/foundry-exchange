export interface Category {
  id: string;
  name: string;
  subheading: string;
  description: string;
  iconName: string;
  href: string;
  featuredTags: string[];
}

export const foundryCategories: Category[] = [
  {
    id: "castings",
    name: "Castings",
    subheading: "Ferrous & Non-Ferrous",
    description: "Grey iron, ductile iron, carbon & alloy steel, aluminum, brass, bronze, and precision investment castings.",
    iconName: "Layers",
    href: "/#contact-form",
    featuredTags: ["ASTM A48", "Ductile 65-45-12", "A356 Al", "Stainless 316"],
  },
  {
    id: "equipment",
    name: "Foundry Equipment",
    subheading: "Primary & Auxiliary Machinery",
    description: "Coreless induction furnaces, pouring ladles, flaskless green sand molding machines, and shot blasters.",
    iconName: "Factory",
    href: "/#contact-form",
    featuredTags: ["Inductotherm 5T", "DISA Match", "Bottom-Pour Ladle"],
  },
  {
    id: "tooling",
    name: "Patterns & Tooling",
    subheading: "Molds, Cores & Dies",
    description: "CNC machined urethane & aluminum patterns, high-pressure die cast inserts, and permanent shell tooling.",
    iconName: "Wrench",
    href: "/#contact-form",
    featuredTags: ["Matchplates", "Die Cast Dies", "Core Boxes"],
  },
  {
    id: "raw-materials",
    name: "Raw Materials & Alloys",
    subheading: "Melt Feedstock & Inoculants",
    description: "Premium foundry pig iron, shredded heavy melt scrap, Ferro-Silicon (FeSi), Ferro-Manganese, and nodulizers.",
    iconName: "Flame",
    href: "/#contact-form",
    featuredTags: ["Foundry Pig Iron", "FeSi 75%", "HMS 1/2 Scrap"],
  },
  {
    id: "sand-binders",
    name: "Sand & Binders",
    subheading: "Aggregate & Chemical Systems",
    description: "High-purity silica sand, chromite chill sand, furan resins, phenolic urethanes, and bentonite clays.",
    iconName: "Droplets",
    href: "/#contact-form",
    featuredTags: ["AFS 55 Silica", "Chromite Sand", "No-Bake Resin"],
  },
  {
    id: "refractories",
    name: "Refractories",
    subheading: "Thermal Linings & Protection",
    description: "Alumina-magnesite ramming mixes, dense firebrick, ladle shrouds, crucibles, and fiber insulation boards.",
    iconName: "Box",
    href: "/#contact-form",
    featuredTags: ["90% Alumina Dry Vibe", "Isostatic Crucibles", "Zircon Patch"],
  },
  {
    id: "machining-finishing",
    name: "Machining & Finishing",
    subheading: "Post-Cast Processing",
    description: "Robotic fettling, horizontal & vertical CNC machining, thermal stress relief, shot peening, and e-coating.",
    iconName: "SlidersHorizontal",
    href: "/#contact-form",
    featuredTags: ["5-Axis CNC", "Stress Relief", "Robotic Grinding"],
  },
  {
    id: "testing-inspection",
    name: "Testing & Inspection",
    subheading: "Quality & Metallurgical QA",
    description: "Optical emission spectrometry (OES), ultrasonic NDT, X-ray radiography, tensile testing, and CMM scans.",
    iconName: "ShieldCheck",
    href: "/#contact-form",
    featuredTags: ["OES Chemistry", "Radiography RT", "CMM Inspection"],
  },
];
