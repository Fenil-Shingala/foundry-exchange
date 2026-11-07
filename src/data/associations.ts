export interface Association {
  id: string;
  name: string;
  acronym: string;
  chapterOrSubtitle?: string;
  region: string;
  role: string;
  description: string;
  logoUrl: string;
  websiteUrl: string;
  standards: string[];
}

export const associations: Association[] = [
  {
    id: "afs-detroit-windsor",
    name: "American Foundry Society",
    acronym: "AFS",
    chapterOrSubtitle: "Detroit Windsor Chapter",
    region: "USA & Canada",
    role: "Foundry Technical Authority & Education",
    description:
      "The premier metalcasting society connecting foundry engineers, patternmakers, and tier-1 casting suppliers across the Michigan and Ontario industrial corridor.",
    logoUrl: "/images/associations/afs-detroit-windsor.png",
    websiteUrl: "https://detroitwindsor.afsinc.org/",
    standards: ["Sand & Molding Standards", "ASTM Spec Compliance", "Foundry Education"],
  },
  {
    id: "cfa",
    name: "Canadian Foundry Association",
    acronym: "CFA",
    chapterOrSubtitle: "National Association",
    region: "Canada",
    role: "National Foundry Trade & Industry Voice",
    description:
      "The unified national voice representing ferrous and non-ferrous Canadian metal casting facilities producing essential components for rail, automotive, and mining.",
    logoUrl: "/images/associations/cfa.svg",
    websiteUrl: "https://foundryassociation.ca/",
    standards: ["Melt Shop Best Practices", "Canadian Casting Codes", "Sustainability Standards"],
  },
  {
    id: "aia-canada",
    name: "Automotive Industries Association of Canada",
    acronym: "AIA",
    chapterOrSubtitle: "Automotive & Powertrain",
    region: "Canada",
    role: "Automotive Supply Chain & Aftermarket",
    description:
      "The national trade association representing the automotive aftermarket, powertrain component manufacturers, and casting supply chain across Canada.",
    logoUrl: "/images/associations/aia-canada.svg",
    websiteUrl: "https://www.aiacanada.com/",
    standards: ["IATF 16949 Alignment", "Powertrain Tolerances", "Supply Chain Benchmarks"],
  },
  {
    id: "eff",
    name: "European Foundry Federation",
    acronym: "EFF",
    chapterOrSubtitle: "European Confederation",
    region: "Europe",
    role: "Continental Foundry Policy & Standardization",
    description:
      "The umbrella organization of 20 European national foundry associations, advancing technical standardization, circular economy benchmarks, and global competitiveness.",
    logoUrl: "/images/associations/eff.svg",
    websiteUrl: "https://eff-eu.org/",
    standards: ["EU Casting Directives", "Circular Economy Benchmarks", "ISO Standardization"],
  },
];
