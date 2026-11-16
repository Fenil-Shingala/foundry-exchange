/**
 * Foundry Exchange - Side Rail Advertisements Global Configuration
 * 
 * Manage side rail ads visibility site-wide or per-route using simple boolean flags.
 * When ads are disabled for any page (or globally), the page layout automatically
 * expands to full width with ZERO manual styling changes needed in page files.
 */

export interface AdsConfig {
  /** Master switch: set to false to instantly disable all side-rail ads across the entire site */
  enabled: boolean;

  /**
   * Route-specific flags.
   * Set any route to false to disable side rail ads for that specific page.
   * Set to true to enable.
   */
  routes: Record<string, boolean>;
}

export const adsConfig: AdsConfig = {
  enabled: true, // Master switch: turn false to remove all side rail ads site-wide
  routes: {
    "/": true,
    "/marketplace": true,
    "/marketplace/[category]": true,
    "/products": true,
    "/products/[id]": true,
    "/auctions": true,
    "/exchange": true,
    "/services": true,
    "/knowledge": true,
    "/glossary": true,
    "/about": true,
    "/contact": true,
    "/rfq": true,
    "/login": false, // Disabled for clean, uncluttered login view
  },
};

/**
 * Checks whether side rail ads should be displayed for the given pathname.
 */
export function isSideRailAdsActive(pathname: string): boolean {
  if (!adsConfig.enabled) return false;

  const cleanPath = pathname.split("?")[0].split("#")[0];

  // Exact match
  if (typeof adsConfig.routes[cleanPath] === "boolean") {
    return adsConfig.routes[cleanPath];
  }

  // Dynamic route matches
  if (cleanPath.startsWith("/marketplace/")) {
    return adsConfig.routes["/marketplace/[category]"] ?? true;
  }
  if (cleanPath.startsWith("/products/")) {
    return adsConfig.routes["/products/[id]"] ?? true;
  }
  if (cleanPath.startsWith("/listings/")) {
    return adsConfig.routes["/products/[id]"] ?? true;
  }

  return true; // Default fallback: enabled
}
