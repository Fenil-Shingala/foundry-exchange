export interface Advertisement {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  videoUrl?: string;
  actionText: string;
  actionHref: string;
  sponsorName: string;
}

export const leftRailAds: Advertisement[] = [
  {
    id: "ad-left-1",
    badge: "CASTINGS",
    title: "U.S. Foundries",
    subtitle: "Heavy Iron Melt & Castings",
    imageUrl: "/images/ads/usfoundries-goods.jpg",
    actionText: "Visit Site",
    actionHref: "https://usfoundries.com/",
    sponsorName: "United States Foundries Inc.",
  },
  {
    id: "ad-left-2",
    badge: "FORGINGS",
    title: "All Metals & Forge",
    subtitle: "Custom Forged Steel Shapes",
    imageUrl: "/images/ads/steelforge-goods.jpg",
    actionText: "Visit Site",
    actionHref: "https://steelforge.com/custom-forged-shapes/",
    sponsorName: "All Metals & Forge Group",
  },
  {
    id: "ad-left-3",
    badge: "FORGINGS",
    title: "Carbo Forge",
    subtitle: "Closed-Die Hammer Forgings",
    imageUrl: "/images/ads/carboforge-goods.jpg",
    actionText: "Visit Site",
    actionHref: "https://carboforge.com",
    sponsorName: "Carbo Forge Inc.",
  },
  {
    id: "ad-left-4",
    badge: "TESTING & QA",
    title: "Verify Casting",
    subtitle: "Pump Casing Inspection & QC",
    imageUrl: "/images/ads/verifycasting-goods.jpg",
    actionText: "Visit Site",
    actionHref: "https://www.verifycasting.com/",
    sponsorName: "Verify Casting",
  },
  {
    id: "ad-left-5",
    badge: "TOOLING & CAD",
    title: "GoEngineer",
    subtitle: "3D Additive Tooling Systems",
    imageUrl: "/images/ads/goengineer-goods.jpg",
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
    subtitle: "Ductile Iron Engine Supports",
    imageUrl: "/images/ads/agrofoundries-goods.jpg",
    videoUrl: "/ads/agrofoundries.mp4",
    actionText: "Visit Site",
    actionHref: "https://www.agrofoundries.com/",
    sponsorName: "Agro Foundries",
  },
  {
    id: "ad-right-2",
    badge: "FORGE PRESSES",
    title: "Sutherland Presses",
    subtitle: "High-Tonnage Forging Presses",
    imageUrl: "/images/ads/sutherland-goods.jpg",
    actionText: "Visit Site",
    actionHref: "https://www.sutherlandpresses.com/#/",
    sponsorName: "Sutherland Presses",
  },
  {
    id: "ad-right-3",
    badge: "FORGINGS",
    title: "Shivam Forge",
    subtitle: "Precision Forged Drive Shafts",
    imageUrl: "/images/ads/shivamforge-goods.jpg",
    actionText: "Visit Site",
    actionHref: "https://shivamforge.com",
    sponsorName: "Shivam Forge",
  },
  {
    id: "ad-right-4",
    badge: "EQUIPMENT",
    title: "Vince Hagan Co.",
    subtitle: "Heavy Batching Plant Systems",
    imageUrl: "/images/ads/vincehagan-goods.jpg",
    actionText: "Visit Site",
    actionHref: "https://www.vincehagan.com/",
    sponsorName: "The Vince Hagan Company",
  },
  {
    id: "ad-right-5",
    badge: "HEAVY FORGE",
    title: "Lehigh Heavy Forge",
    subtitle: "50-Ton Open-Die Ring Forgings",
    imageUrl: "/images/ads/lhforge-goods.jpg",
    actionText: "Visit Site",
    actionHref: "https://lhforge.com/",
    sponsorName: "Lehigh Heavy Forge",
  },
];
