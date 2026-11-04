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
    badge: "B2B EXCHANGE",
    title: "PrecastXchange",
    subtitle: "Heavy Precast & Machinery",
    imageUrl: "/images/ads/precastxchange-logo.png",
    actionText: "Visit Site",
    actionHref: "https://www.precastxchange.com/",
    sponsorName: "PrecastXchange",
  },
  {
    id: "ad-left-2",
    badge: "ENGINEERING",
    title: "Precast Engineering",
    subtitle: "Structural CAD & Detailing",
    imageUrl: "/images/ads/precast-eng-logo.png",
    actionText: "Visit Site",
    actionHref: "https://precast-eng.vercel.app/",
    sponsorName: "Precast Engineering",
  },
  {
    id: "ad-left-3",
    badge: "PRODUCTION",
    title: "Precast Industries",
    subtitle: "Architectural & Civil Precast",
    imageUrl: "/images/ads/precast-industries-logo.png",
    actionText: "Visit Site",
    actionHref: "https://precastindustries.com/",
    sponsorName: "Precast Industries",
  },
  {
    id: "ad-left-4",
    badge: "STANDARDS",
    title: "Precast Engineering Org",
    subtitle: "Technical Guidelines & Specs",
    imageUrl: "/images/ads/precast-org-logo.png",
    actionText: "Visit Site",
    actionHref: "https://www.precastengineering.org/",
    sponsorName: "Precast Engineering Org",
  },
];

export const rightRailAds: Advertisement[] = [
  {
    id: "ad-right-1",
    badge: "MARKETPLACE",
    title: "Engineers Marketplace",
    subtitle: "Find & Hire Expert Engineers",
    imageUrl: "/images/ads/engineersmp-logo.webp",
    actionText: "Visit Site",
    actionHref: "https://www.engineersmp.com/",
    sponsorName: "Engineers MP",
  },
  {
    id: "ad-right-2",
    badge: "PROJECTS",
    title: "Engineers MP Platform",
    subtitle: "Certified Construction Teams",
    imageUrl: "/images/ads/engineersmp-hero.jpg",
    actionText: "Visit Site",
    actionHref: "https://www.engineersmp.com/",
    sponsorName: "Engineers MP",
  },
  {
    id: "ad-right-3",
    badge: "SOLUTIONS",
    title: "Precast Eng Solutions",
    subtitle: "Trench Forms & Precast Systems",
    imageUrl: "/images/ads/precast-trench.jpg",
    actionText: "Visit Site",
    actionHref: "https://precast-eng.vercel.app/",
    sponsorName: "Precast Engineering",
  },
  {
    id: "ad-right-4",
    badge: "B2B EXCHANGE",
    title: "PrecastXchange Network",
    subtitle: "Certified Equipment Clearing",
    imageUrl: "/images/ads/precastxchange-logo.png",
    actionText: "Visit Site",
    actionHref: "https://www.precastxchange.com/",
    sponsorName: "PrecastXchange",
  },
];

