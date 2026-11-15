export interface Advertisement {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  actionText: string;
  actionHref: string;
  sponsorName: string;
}

export const leftRailAds: Advertisement[] = [
  {
    id: "ad-left-1",
    badge: "CASTINGS",
    title: "U.S. Foundries",
    subtitle: "Municipal & Industrial Castings",
    imageUrl: "/images/ads/usfoundries-logo.png",
    actionText: "Visit Site",
    actionHref: "https://usfoundries.com/",
    sponsorName: "United States Foundries Inc.",
  },
  {
    id: "ad-left-2",
    badge: "FORGINGS",
    title: "All Metals & Forge",
    subtitle: "Custom Open-Die Forged Shapes",
    imageUrl: "/images/ads/steelforge-logo.png",
    actionText: "Visit Site",
    actionHref: "https://steelforge.com/custom-forged-shapes/",
    sponsorName: "All Metals & Forge Group",
  },
  {
    id: "ad-left-3",
    badge: "FORGINGS",
    title: "Carbo Forge",
    subtitle: "IATF 16949 Closed-Die Forgings",
    imageUrl: "/images/ads/carboforge-logo.png",
    actionText: "Visit Site",
    actionHref: "https://carboforge.com",
    sponsorName: "Carbo Forge Inc.",
  },
  {
    id: "ad-left-4",
    badge: "TESTING & QA",
    title: "Verify Casting",
    subtitle: "Foundry QC & NDT Inspection",
    imageUrl: "/images/ads/verifycasting-logo.png",
    actionText: "Visit Site",
    actionHref: "https://www.verifycasting.com/",
    sponsorName: "Verify Casting",
  },
  {
    id: "ad-left-5",
    badge: "TOOLING & CAD",
    title: "GoEngineer",
    subtitle: "SOLIDWORKS, Tooling & 3D Additive",
    imageUrl: "/images/ads/goengineer-logo.png",
    actionText: "Visit Site",
    actionHref: "https://www.goengineer.com/",
    sponsorName: "GoEngineer",
  },
];

export const rightRailAds: Advertisement[] = [
  {
    id: "ad-right-1",
    badge: "FOUNDRY",
    title: "Agro Foundries",
    subtitle: "Ductile & Gray Iron Castings",
    imageUrl: "/images/ads/agrofoundries-logo.png",
    actionText: "Visit Site",
    actionHref: "https://www.agrofoundries.com/",
    sponsorName: "Agro Foundries",
  },
  {
    id: "ad-right-2",
    badge: "FORGE PRESSES",
    title: "Sutherland Presses",
    subtitle: "Forging & Metalforming Presses",
    imageUrl: "/images/ads/sutherland-logo.png",
    actionText: "Visit Site",
    actionHref: "https://www.sutherlandpresses.com/#/",
    sponsorName: "Sutherland Presses",
  },
  {
    id: "ad-right-3",
    badge: "FORGINGS",
    title: "Shivam Forge",
    subtitle: "Closed Die Drop Forgings",
    imageUrl: "/images/ads/shivamforge-logo.png",
    actionText: "Visit Site",
    actionHref: "https://shivamforge.com",
    sponsorName: "Shivam Forge",
  },
  {
    id: "ad-right-4",
    badge: "EQUIPMENT",
    title: "Vince Hagan Co.",
    subtitle: "Concrete Batching & Heavy Equipment",
    imageUrl: "/images/ads/vincehagan-logo.png",
    actionText: "Visit Site",
    actionHref: "https://www.vincehagan.com/",
    sponsorName: "The Vince Hagan Company",
  },
  {
    id: "ad-right-5",
    badge: "HEAVY FORGE",
    title: "Lehigh Heavy Forge",
    subtitle: "Heavy Open-Die Steel Forgings",
    imageUrl: "/images/ads/lhforge-logo.png",
    actionText: "Visit Site",
    actionHref: "https://lhforge.com/",
    sponsorName: "Lehigh Heavy Forge",
  },
];
