import { ProductListing } from "./listings";

export interface DetailGalleryImage {
  src: string;
  alt: string;
  caption: string;
  badge: string;
}

export interface DetailVariant {
  id: string;
  name: string;
  short: string;
  badge: string;
  priceOffset: number;
  image: string;
  swatchColor: string;
}

export interface DetailSizeOption {
  id: string;
  label: string;
  param1: string; // e.g. Bore or OD or Tonnage or Size
  param2: string; // e.g. PCD or Length or Stroke or Grade
  param3: string; // e.g. Weight or SPM or Yield
  param4: string; // e.g. Test or Pressure or Voltage
}

export interface DetailFeature {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface DetailSpecRow {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface DetailChemicalElement {
  element: string;
  name: string;
  standardRange: string;
  actualValue: string;
  status: "pass" | "compliant";
}

export interface DetailMechanicalProperty {
  property: string;
  standardReq: string;
  actualValue: string;
  testMethod: string;
}

export interface DetailMicrostructure {
  matrix: string;
  nodularityOrGrain: string;
  inclusionRating: string;
  heatTreatmentCondition: string;
}

export interface DetailTechnicalDoc {
  id: string;
  title: string;
  format: "PDF" | "STEP" | "DWG";
  size: string;
  type: "Inspection Report" | "Mill Test Certificate" | "CAD Model" | "Datasheet";
  badge: string;
  description: string;
}

export interface DetailSupplierDossier {
  foundryName: string;
  headquarters: string;
  established: number;
  meltCapacity: string;
  certifications: string[];
  inspectionAgencies: string[];
  furnaces: string;
  testingLab: string;
  verifiedDate: string;
  badge: string;
}

export interface DetailFAQ {
  question: string;
  answer: string;
}

export interface ProductDetailData {
  parsedBasePrice: number;
  priceSuffix: string;
  listPrice: number;
  galleryImages: DetailGalleryImage[];
  videoPoster: string;
  videoTitle: string;
  variants: DetailVariant[];
  sizes: DetailSizeOption[];
  sizeTableHeader: [string, string, string, string, string];
  features: DetailFeature[];
  specRows: DetailSpecRow[];
  editorialBadge: string;
  editorialTitle: string;
  editorialText: string;
  painPointsTitle: string;
  painPoints: { title: string; text: string }[];
  // Point 4: Expanded Technical Metallurgy, Documents & Trust Data
  chemicalComposition: DetailChemicalElement[];
  mechanicalProperties: DetailMechanicalProperty[];
  microstructure: DetailMicrostructure;
  technicalDocs: DetailTechnicalDoc[];
  supplierDossier: DetailSupplierDossier;
  faqs: DetailFAQ[];
}

export function getProductDetailData(listing: ProductListing): ProductDetailData {
  // 1. Parse Price
  let parsedBasePrice = 2850;
  let priceSuffix = "USD";
  const numMatch = listing.priceEstimate.replace(/,/g, "").match(/\$?(\d+(?:\.\d+)?)/);
  if (numMatch) {
    parsedBasePrice = parseFloat(numMatch[1]);
  }
  if (listing.priceEstimate.includes("/ unit")) priceSuffix = "USD / unit";
  else if (listing.priceEstimate.includes("/ pc")) priceSuffix = "USD / pc";
  else if (listing.priceEstimate.includes("/ MT")) priceSuffix = "USD / MT";
  else if (listing.priceEstimate.includes("/ ring")) priceSuffix = "USD / ring";
  else if (listing.priceEstimate.includes("/ block")) priceSuffix = "USD / block";

  const listPrice = Math.round(parsedBasePrice * 1.48);

  // 2. Build Category / Product specific content
  const id = listing.id.toLowerCase();
  const title = listing.title.toLowerCase();

  let galleryImages: DetailGalleryImage[] = [];
  let variants: DetailVariant[] = [];
  let sizes: DetailSizeOption[] = [];
  let sizeTableHeader: [string, string, string, string, string] = ["Size / Spec", "Dimension 1", "Dimension 2", "Weight / Load", "Test Rating"];
  let features: DetailFeature[] = [];
  let editorialBadge = "US Industrial Gear & Metallurgy Guide";
  let editorialTitle = `Why Leading Engineers Choose ${listing.title}`;
  let editorialText = listing.description;
  let painPointsTitle = "Frustrated With Inconsistent Sourcing That Fails Factory Acceptance?";
  let painPoints = [
    {
      title: "Subsurface Voids & Internal Porosity:",
      text: "Untrusted suppliers skip riser calculations and ultrasonic checks. Every lot on Foundry Exchange is pre-audited with volumetric NDT Level II verification."
    },
    {
      title: "Questionable Paper MTRs & Fake Alloy Certs:",
      text: "Unverified brokers pass paper sheets. We enforce direct digital Optical Emission Spectrometry (OES) reports with full trace heat number stamps."
    },
    {
      title: "Machining Warpage & Dimensional Shift:",
      text: "Poor tooling causes leaky flanges and mismatched datum faces. Our verified partners hold ISO 8062 CT5 tolerances on 5-axis CNC centers."
    }
  ];

  // =========================================================================
  // 1. fl-001: HEAVY-DUTY PUMP VOLUTE CASING (Castings)
  // =========================================================================
  if (id === "fl-001") {
    galleryImages = [
      { src: "/images/listings/volute-casing-machined.jpg", alt: "Fully Machined Pump Volute Casing", caption: "Finished Centrifugal Pump Volute Casing", badge: "Machined & Inspected" },
      { src: "/images/gallery/verifycasting-pump-body.png", alt: "High-Precision Heavy Casting Body (VerifyCasting)", caption: "High-Precision Heavy Casting Body", badge: "ISO 8062 CT5" },
      { src: "/images/capabilities/metal-casting.jpg", alt: "Induction Melt Pour Deck Action", caption: "Induction Melt Pour Deck & Inoculation", badge: "1420°C Cast" },
      { src: "/images/gallery/cnc-machining-operation.jpg", alt: "5-Axis Precision Flange Machining", caption: "5-Axis Precision Flange Facing & Bolt Bores", badge: "Ra 3.2 µm" },
      { src: "/images/gallery/ndt-ultrasonic-testing.jpg", alt: "Hydrostatic Pressure Containment Test", caption: "Hydrostatic Pressure Containment Test (25 Bar)", badge: "25 Bar Proof" },
      { src: "/images/gallery/packaging-dispatch.jpg", alt: "ISPM-15 Heavy Timber Export Crate", caption: "ISPM-15 Heavy Timber Export Crate", badge: "FOB Ready" },
    ];
    variants = [
      { id: "v1", name: "Ductile Iron EN-GJS-400-15 / ASTM A536 65-45-12", short: "Ductile 65-45-12", badge: "Standard Hydraulic", priceOffset: 0, image: listing.imageUrl, swatchColor: "#475569" },
      { id: "v2", name: "Austenitic Stainless Steel ASTM A351 CF8M (316)", short: "316 Stainless", badge: "Severe Corrosive", priceOffset: 1200, image: listing.imageUrl, swatchColor: "#94a3b8" },
      { id: "v3", name: "High-Chrome White Iron (ASTM A532 Class III)", short: "27% High-Chrome", badge: "Mining Slurry", priceOffset: 850, image: listing.imageUrl, swatchColor: "#1e293b" },
    ];
    sizeTableHeader = ["Casing Frame", "Suction Flange", "Discharge Flange", "Net Mass", "Hydro Pressure"];
    sizes = [
      { id: "s1", label: "Model 4x3-10", param1: "DN100 (4\") ANSI 150#", param2: "DN80 (3\") ANSI 150#", param3: "320 kg", param4: "25 Bar Proof" },
      { id: "s2", label: "Model 6x4-13", param1: "DN150 (6\") ANSI 150#", param2: "DN100 (4\") ANSI 150#", param3: "480 kg", param4: "25 Bar Proof" },
      { id: "s3", label: "Model 8x6-15", param1: "DN200 (8\") ANSI 150#", param2: "DN150 (6\") ANSI 150#", param3: "750 kg", param4: "30 Bar Proof" },
      { id: "s4", label: "Model 10x8-18", param1: "DN250 (10\") ANSI 300#", param2: "DN200 (8\") ANSI 300#", param3: "1,150 kg", param4: "35 Bar Proof" },
    ];
    features = [
      { number: "FEATURE 01", title: "Optimized Volute Hydraulic Flow Dynamics", description: "Engineered spiral volute geometry minimizes hydraulic turbulence and eliminates localized cavitation erosion across dynamic pump operating speeds.", image: "/images/listings/volute-casing-machined.jpg", imageAlt: "Optimized Volute Hydraulic Flow" },
      { number: "FEATURE 02", title: "100% Volumetric Hydrostatic Pressure Containment", description: "Proof-tested to 25 bar with zero pressure loss or wall weeping, verified with calibrated digital transducers and EN 10204 3.1 inspection certification.", image: "/images/gallery/ndt-ultrasonic-testing.jpg", imageAlt: "Hydrostatic Pressure Containment" },
      { number: "FEATURE 03", title: "Precision 5-Axis CNC Machining to ISO 8062 CT5", description: "Flanges, cutwater, and wear ring bores are single-datum machined on horizontal boring mills for rapid shaft alignment and leak-free seal seating.", image: "/images/gallery/cnc-machining-operation.jpg", imageAlt: "Precision 5-Axis CNC Machining" },
    ];
    editorialTitle = "Why Process Engineers Specify Heavy-Duty Ductile Iron Volute Casings";
    editorialText = "Industrial slurry and high-pressure chemical transfer systems require structural integrity under dynamic hydraulic shock. Heavy ductile iron volute casings deliver high fracture toughness and vibration damping compared to welded fabrications.";
  }

  // =========================================================================
  // 2. fl-002: INDUCTOTHERM 3.5T CORELESS INDUCTION FURNACE (Foundry Equipment)
  // =========================================================================
  else if (id === "fl-002") {
    galleryImages = [
      { src: "/images/listings/induction-melting-furnace.jpg", alt: "Inductotherm 3.5T Induction Furnace Pouring", caption: "Inductotherm 3.5T Coreless Induction Furnace", badge: "2500 kW Melt Deck" },
      { src: "/images/capabilities/metal-casting.jpg", alt: "Active Melt Tap & Inoculation Stream", caption: "Active Molten Metal Tap & Ladle Transfer", badge: "1550°C Tap" },
      { src: "/images/gallery/sutherland-ipress-control.jpg", alt: "VIP Power-Trak Touchscreen Control Console", caption: "VIP Power-Trak Digital Control & Melt Diagnostics", badge: "VIP Power-Trak" },
      { src: "/images/gallery/sutherland-forge-line.jpg", alt: "Induction Power Coil & Water Cooling Manifold Deck", caption: "Heavy Copper Induction Coil & Water Cooling Skid", badge: "Heavy Busbars" },
      { src: "/images/gallery/bulk-port-warehouse-staging.jpg", alt: "Foundry De-Installation & Logistics Staging Deck", caption: "Decommissioned Melt System Staging Deck", badge: "Turnkey Package" },
      { src: "/images/gallery/packaging-dispatch.jpg", alt: "VIP Power Cabinets Sealed in Weatherproof Packaging", caption: "Power Supply Skids & Spare Coil Packaging", badge: "Export Crating" },
    ];
    variants = [
      { id: "v1", name: "Complete Turnkey System (Dual Pots + 2500 kW Supply)", short: "Complete Turnkey", badge: "Ready for Inspection", priceOffset: 0, image: listing.imageUrl, swatchColor: "#0f172a" },
      { id: "v2", name: "Furnace Bodies Only with Hydraulic Tilt Cylinders", short: "Furnace Pots Only", badge: "Melt Bodies", priceOffset: -45000, image: listing.imageUrl, swatchColor: "#1e293b" },
      { id: "v3", name: "Includes Closed-Loop Evaporative Cooling Tower Skid", short: "With Water Skid", badge: "Full Plant Package", priceOffset: 18000, image: listing.imageUrl, swatchColor: "#1e3a8a" },
    ];
    sizeTableHeader = ["Sub-System", "Nominal Rating", "Cooling Requirement", "Floor Footprint", "Voltage Rating"];
    sizes = [
      { id: "s1", label: "Furnace Pot 1", param1: "3,500 kg (Steel)", param2: "350 GPM De-ionized", param3: "2.8 x 2.4 m", param4: "1,200 V Coil" },
      { id: "s2", label: "Furnace Pot 2", param1: "3,500 kg (Steel)", param2: "350 GPM De-ionized", param3: "2.8 x 2.4 m", param4: "1,200 V Coil" },
      { id: "s3", label: "VIP Power Supply", param1: "2,500 kW / 500 Hz", param2: "220 GPM Glycol", param3: "3.6 x 1.8 x 2.2 m", param4: "480 V / 3-Phase Input" },
      { id: "s4", label: "Hydraulic Skid", param1: "210 Bar Operating", param2: "Air-Cooled Oil", param3: "1.8 x 1.2 m", param4: "30 HP Motor" },
    ];
    features = [
      { number: "FEATURE 01", title: "VIP Power-Trak High-Efficiency Solid-State Inverter", description: "Maintains full 2500 kW power draw from cold charge to liquid metal bath, achieving 480 kWh/ton melting efficiency and rapid heat cycles.", image: "/images/listings/induction-melting-furnace.jpg", imageAlt: "VIP Power-Trak Inverter" },
      { number: "FEATURE 02", title: "Heavy-Wall Oxygen-Free Copper Induction Coil", description: "Custom-extruded copper tubing with ceramic insulation and magnetic shunts prevents coil distortion and provides maximum magnetic flux transfer.", image: "/images/gallery/sutherland-forge-line.jpg", imageAlt: "Induction Coil Assembly" },
      { number: "FEATURE 03", title: "Smooth Proportional Hydraulic Pouring Control", description: "Dual hydraulic tilting cylinders provide precise molten stream metering directly into transfer ladles with zero splashing or temperature drop.", image: "/images/capabilities/metal-casting.jpg", imageAlt: "Hydraulic Pouring System" },
    ];
    editorialTitle = "Coreless Induction Melting: Maximizing Foundry Throughput & Alloy Chemistry Control";
    editorialText = "Modern ferrous and non-ferrous foundries demand rapid turnaround and precise melt temperature maintenance. The Inductotherm 3.5T Coreless Furnace combines solid-state VIP power tracking with robust mechanical tilt structures for high-productivity melt shops.";
  }

  // =========================================================================
  // 3. fl-003: CUSTOM HIGH-CHROME IMPELLER CASTINGS (Castings)
  // =========================================================================
  else if (id === "fl-003") {
    galleryImages = [
      { src: "/images/listings/mining-slurry-impeller.jpg", alt: "High-Chrome Slurry Pump Impeller", caption: "ASTM A532 Class III High-Chrome Impeller", badge: "650 HBW Hardness" },
      { src: "/images/gallery/verifycasting-wear-liner.jpg", alt: "Companion Slurry Wear Liners & Throatbushes (VerifyCasting)", caption: "Companion Slurry Wear Liners & Throatbushes", badge: "Wear Resistant" },
      { src: "/images/capabilities/metal-casting.jpg", alt: "High-Chrome Electric Arc Melt Pour Deck", caption: "Electric Arc High-Chrome Pour & Inoculation", badge: "1480°C Pour" },
      { src: "/images/gallery/steelforge-gear-blanks.jpg", alt: "Impeller Hub & Shroud Machining Blank", caption: "Impeller Hub & Shroud Precision Machining Blank", badge: "ISO 1940 G2.5" },
      { src: "/images/gallery/steelforge-rings-250-rms.jpg", alt: "Wear Ring Sealing Faces & Expeller Vane Details", caption: "Precision Back Vane & Wear Ring Sealing Faces", badge: "250 RMS Finish" },
      { src: "/images/gallery/packaging-dispatch.jpg", alt: "Heavy Timber Export Crate with Anti-Shock Mounts", caption: "Heavy Timber Export Crate with Anti-Shock Mounts", badge: "FOB Ready" },
    ];
    variants = [
      { id: "v1", name: "High-Chrome White Iron (27% Cr, ASTM A532 Class III)", short: "27% Cr Alloy", badge: "Extreme Slurry Abrasion", priceOffset: 0, image: listing.imageUrl, swatchColor: "#475569" },
      { id: "v2", name: "Hypereutectic 35% Cr with Molybdenum", short: "35% Cr + Mo", badge: "Acid Leach Slurry", priceOffset: 850, image: listing.imageUrl, swatchColor: "#1e293b" },
      { id: "v3", name: "Martensitic Ni-Hard 4 Alloy Cast Iron", short: "Ni-Hard 4", badge: "Impact & Gouging", priceOffset: -450, image: listing.imageUrl, swatchColor: "#334155" },
    ];
    sizeTableHeader = ["Impeller Dia", "Inlet Eye Bore", "Vane Count", "Casting Mass", "Rockwell Hardness"];
    sizes = [
      { id: "s1", label: "250 mm Tier", param1: "120 mm Eye", param2: "4 Vane Closed", param3: "45 kg", param4: "62 HRC (650 HBW)" },
      { id: "s2", label: "400 mm Tier", param1: "180 mm Eye", param2: "5 Vane Closed", param3: "115 kg", param4: "63 HRC (660 HBW)" },
      { id: "s3", label: "650 mm Tier", param1: "280 mm Eye", param2: "5 Vane Heavy", param3: "340 kg", param4: "65 HRC (680 HBW)" },
      { id: "s4", label: "900 mm Tier", param1: "380 mm Eye", param2: "4 Vane Large Solid", param3: "780 kg", param4: "65 HRC (680 HBW)" },
    ];
    features = [
      { number: "FEATURE 01", title: "High-Chrome Carbide Microstructure (62-65 HRC)", description: "Solidified with over 35% volumetric fraction of hard eutectic M7C3 chromium carbides embedded in a tough martensitic matrix, outlasting carbon steel by 8:1.", image: "/images/listings/mining-slurry-impeller.jpg", imageAlt: "High-Chrome Carbide Microstructure" },
      { number: "FEATURE 02", title: "Dynamic Precision Balancing to ISO 1940 G2.5", description: "Dynamically dual-plane balanced on digital vertical balancers, eliminating pump vibration and dramatically extending mechanical seal and shaft bearing operating life.", image: "/images/gallery/steelforge-gear-blanks.jpg", imageAlt: "Dynamic Precision Balancing" },
      { number: "FEATURE 03", title: "Hydrodynamic Vane Geometry Optimized for Heavy Tailings Slurry", description: "Designed with thick expelling back vanes to prevent slurry solids recirculation behind the impeller and reduce shaft gland packing pressure.", image: "/images/gallery/verifycasting-wear-liner.jpg", imageAlt: "Hydrodynamic Vane Geometry" },
    ];
    editorialTitle = "Severe Slurry Abrasion: Why Mineral Processing Plants Specify 27% Chrome Castings";
    editorialText = "Grinding mill discharge and tailings slurries destroy standard steel impellers within weeks. High-chromium white irons provide the extreme micro-hardness required to resist scouring quartz and copper ore particle wear.";
  }

  // =========================================================================
  // 4. fl-004: FOUNDRY-GRADE LOW-PHOSPHORUS PIG IRON (Raw Materials)
  // =========================================================================
  else if (id === "fl-004" || title.includes("pig iron")) {
    galleryImages = [
      { src: "/images/listings/foundry-pig-iron-stack.jpg", alt: "Briquetted Low-Phosphorus Pig Iron Stack", caption: "Certified Low-Phosphorus Pig Iron Briquettes", badge: "Virgin Feedstock" },
      { src: "/images/capabilities/metal-casting.jpg", alt: "Blast Furnace Hot Iron Runner Tapping", caption: "Blast Furnace Iron Tapping & Runner Deck", badge: "1450°C Virgin Melt" },
      { src: "/images/gallery/bulk-port-warehouse-staging.jpg", alt: "Port Breakbulk Warehouse & Crane Staging", caption: "Port Breakbulk & Container Logistics", badge: "Rotterdam FOB Port" },
      { src: "/images/gallery/nickel-cathode-warehouse.jpg", alt: "Certified Virgin Charge Metal & Raw Stock Staging", caption: "Virgin Melt Stock & Charge Material Storage", badge: "3.1 Trace Heat Report" },
      { src: "/images/gallery/packaging-dispatch.jpg", alt: "Export Banded Pallet Staging", caption: "ISPM-15 Heat-Treated Export Pallet Skid", badge: "1200kg Banded" },
      { src: "/images/gallery/steelforge-forged-blocks.jpg", alt: "Companion High-Purity Charge Metal Ingot Billets", caption: "Companion High-Purity Charge Metal Ingot Billets", badge: "Low-Ti Low-P" },
    ];
    variants = [
      { id: "v1", name: "Standard Low-P Foundry Pig Iron (P < 0.035%)", short: "Low-P Standard", badge: "General Ductile Base", priceOffset: 0, image: listing.imageUrl, swatchColor: "#475569" },
      { id: "v2", name: "Ultra-Low Titanium S.G. Base (Ti < 0.015%)", short: "Ultra-Low Ti", badge: "Wind Energy Ductile", priceOffset: 45, image: listing.imageUrl, swatchColor: "#1e293b" },
      { id: "v3", name: "Nodular S.G. High-Carbon Ingot Grade", short: "Nodular Grade", badge: "High Purity", priceOffset: 25, image: listing.imageUrl, swatchColor: "#334155" },
      { id: "v4", name: "High-Silicon Inoculated Grade (Si 2.8 - 3.2%)", short: "High Silicon", badge: "Thin-Wall Castings", priceOffset: 60, image: listing.imageUrl, swatchColor: "#64748b" },
    ];
    sizeTableHeader = ["Lot Allocation", "Lot Mass", "Packaging Format", "Container Allocation", "Certified Purity"];
    sizes = [
      { id: "s1", label: "Trial Lot (5 MT)", param1: "5 Metric Tons", param2: "Steel-Banded Pallets", param3: "5,000 kg Net", param4: "99.1% Fe Base" },
      { id: "s2", label: "25 MT Container", param1: "25 Metric Tons", param2: "20ft FCL Container", param3: "25,000 kg Net", param4: "3.1 MTR Certified" },
      { id: "s3", label: "50 MT Dual FCL", param1: "50 Metric Tons", param2: "2x 20ft Containers", param3: "50,000 kg Net", param4: "3.1 MTR Certified" },
      { id: "s4", label: "100 MT Rail Lot", param1: "100 Metric Tons", param2: "Gondola Railcar", param3: "100,000 kg Net", param4: "Full Heat Trace" },
      { id: "s5", label: "500 MT Bulk Vessel", param1: "500 Metric Tons", param2: "Hold Breakbulk", param3: "500,000 kg Net", param4: "3.2 Inspection Cert" },
    ];
    features = [
      { number: "FEATURE 01", title: "Virgin Blast Furnace Chemistry (<0.035% P, <0.020% S)", description: "Direct blast furnace reduction delivers ultra-pure iron charge feedstock free from tramp zinc, lead, and copper elements, preventing pearlite stabilization in ductile iron production.", image: "/images/listings/foundry-pig-iron-stack.jpg", imageAlt: "Virgin Blast Furnace Chemistry" },
      { number: "FEATURE 02", title: "Direct Optical Emission Spectrometry (OES) Heat Verification", description: "Every production heat undergoes dual-channel spark emission spectrometry with full 24-element assay documentation delivered with digital 3.1 mill test reports.", image: "/images/gallery/nickel-cathode-warehouse.jpg", imageAlt: "Spectrometric Assay Heat Traceability" },
      { number: "FEATURE 03", title: "Uniform Briquetted Shape for Automated Charging & High Recovery", description: "Standard 8–10 kg notched briquettes ensure rapid dissolution in induction and cupola furnaces, minimizing melt slag volume and electrical kWh consumption per ton.", image: "/images/gallery/bulk-port-warehouse-staging.jpg", imageAlt: "Uniform Briquetted Pig Iron" },
    ];
    editorialTitle = "Why Precision Ductile Iron Foundries Specify Virgin Blast Furnace Pig Iron Over Scrap Steel";
    editorialText = "Producing high-integrity ductile and CGI castings requires precise control of carbon equivalents and micro-alloying residuals. Virgin low-phosphorus pig iron provides predictable nucleation kinetics and eliminates unpredictable tramp element embrittlement found in commodity scrap charges.";
  }

  // =========================================================================
  // 5. fl-005: DISA MATCH 24/28 FLASKLESS MOLDING LINE (Foundry Equipment)
  // =========================================================================
  else if (id === "fl-005") {
    galleryImages = [
      { src: "/images/listings/green-sand-molding-line.jpg", alt: "DISA Match 24/28 Flaskless Molding System", caption: "DISA Match 24/28 Flaskless Molding System", badge: "180 Molds/Hr" },
      { src: "/images/gallery/sutherland-sp2-660.jpg", alt: "Hydraulic Matchplate Squeeze Head & Die Bolster", caption: "Hydraulic Squeeze Head & Pattern Carrier", badge: "High Density" },
      { src: "/images/gallery/sutherland-ipress-control.jpg", alt: "DISA Match Touchscreen PLC Station", caption: "PLC Digital Control & Automatic Core Setter", badge: "Allen Bradley" },
      { src: "/images/gallery/sutherland-forge-line.jpg", alt: "Continuous Mold Cooling Conveyor & Shakeout Track", caption: "Mold Cooling Conveyor Line & Shakeout Deck", badge: "Automated Line" },
      { src: "/images/gallery/bulk-port-warehouse-staging.jpg", alt: "Foundry De-Installation & Logistics Staging Deck", caption: "Modular Plant Staging & Component Logistics", badge: "Turnkey Package" },
      { src: "/images/gallery/packaging-dispatch.jpg", alt: "Hydraulic Power Units in Export Timber Skids", caption: "Hydraulic Power Pack & Electronic Skid Packaging", badge: "ISPM-15 Ready" },
    ];
    variants = [
      { id: "v1", name: "Complete Automated Line (Molder + Conveyor + Core Setter)", short: "Complete Line", badge: "Turnkey System", priceOffset: 0, image: listing.imageUrl, swatchColor: "#0f172a" },
      { id: "v2", name: "Molding Machine Only with Pattern Bolster", short: "Molder Only", badge: "Machine Unit", priceOffset: -28000, image: listing.imageUrl, swatchColor: "#1e293b" },
      { id: "v3", name: "Includes Sand Aerator & Return Sand Belt System", short: "With Sand Feed", badge: "Full Sand Package", priceOffset: 22000, image: listing.imageUrl, swatchColor: "#1e3a8a" },
    ];
    sizeTableHeader = ["Line Component", "Mold Dimension", "Production Speed", "Sand Consumption", "Hydraulic Power"];
    sizes = [
      { id: "s1", label: "Molding Chamber", param1: "24\" x 28\" (610x711 mm)", param2: "180 uncored / hr", param3: "45 TPH Green Sand", param4: "75 kW Hydraulic" },
      { id: "s2", label: "Mold Height Tier", param1: "7\" to 12\" (178-305 mm)", param2: "150 cored / hr", param3: "55 TPH Green Sand", param4: "75 kW Hydraulic" },
      { id: "s3", label: "Cooling Conveyor", param1: "35 Meter Total Length", param2: "Synchronized Index", param3: "Continuous Belt", param4: "15 kW Drive" },
    ];
    features = [
      { number: "FEATURE 01", title: "Dual-Chamber High-Pressure Sand Blow & Hydraulic Squeeze", description: "Delivers exceptional mold hardness exceeding 90 Dietert across deep pockets, eliminating sand wash defects and maintaining tight casting tolerances.", image: "/images/listings/green-sand-molding-line.jpg", imageAlt: "High Pressure Squeeze System" },
      { number: "FEATURE 02", title: "Quick-Change Matchplate Pattern Clamping System", description: "Toolless pneumatic pattern plate exchange cuts changeover times to under 3 minutes, making short-run jobbing production highly profitable.", image: "/images/gallery/sutherland-sp2-660.jpg", imageAlt: "Quick Change Pattern System" },
      { number: "FEATURE 03", title: "Automated CSE Core Setting Station Integration", description: "Synchronized robotic core setter places intricate sand cores with sub-millimeter precision into open drag molds without disrupting molding cycle cadence.", image: "/images/gallery/sutherland-ipress-control.jpg", imageAlt: "Automated Core Setter" },
    ];
    editorialTitle = "Flaskless Green Sand Molding: High-Speed Precision for Modern Jobbing Foundries";
    editorialText = "Automotive and municipal cast iron foundries rely on automated flaskless matchplate lines to achieve high throughput with minimal sand-to-metal ratios. DISA Match technology delivers repeatable parting-line accuracy with low maintenance overhead.";
  }

  // =========================================================================
  // 6. fl-006: AUTOMOTIVE TRANSMISSION CASE TOOLING & MATCHPLATES (Patterns & Tooling)
  // =========================================================================
  else if (id === "fl-006") {
    galleryImages = [
      { src: "/images/listings/cnc-machining-operation.jpg", alt: "CNC Machining of Hardened Transmission Matchplates", caption: "High-Precision 5-Axis CNC Tooling Machining", badge: "7075 Al Base" },
      { src: "/images/gallery/carboforge-automotive.png", alt: "Automotive Transmission Proof Forgings (CarboForge)", caption: "Automotive CV & Transmission Cavity Proof Runs", badge: "IATF 16949" },
      { src: "/images/gallery/carboforge-steel-forgings-2.png", alt: "Transmission Gearbox Internal Bosses & Cavities", caption: "Sample Transmission Hubs & Internal Cavity Proofs", badge: "Zero Scrap" },
      { src: "/images/gallery/shivam-arm-knuckle.jpg", alt: "Hardened Matchplate Core Print Alignment", caption: "Hardened Matchplate Core Print & Cavity Alignment", badge: "DIN ISO 2768" },
      { src: "/images/gallery/steelforge-gear-blanks.jpg", alt: "Precision Gating, Risers & Core Print Master Gauges", caption: "Gating System, Risers & CMM Master Gauges", badge: "CMM Verified" },
      { src: "/images/gallery/packaging-dispatch.jpg", alt: "VCI Anti-Corrosion Sealed Wooden Storage Crate", caption: "VCI Anti-Corrosion Sealed Wooden Storage Crate", badge: "Export Ready" },
    ];
    variants = [
      { id: "v1", name: "Cast Tooling Urethane on Al 7075 Base (Standard)", short: "Urethane/Al 7075", badge: "80k+ Cycle Life", priceOffset: 0, image: listing.imageUrl, swatchColor: "#475569" },
      { id: "v2", name: "Hardened Tool Steel Inserts for High-Wear Parting Lines", short: "Steel Insert Tier", badge: "200k+ Cycle Life", priceOffset: 3200, image: listing.imageUrl, swatchColor: "#1e293b" },
      { id: "v3", name: "Includes Complete CAD 3D Solid Model & Gating CAM Files", short: "With Full CAD/CAM", badge: "Digital Twin", priceOffset: 1500, image: listing.imageUrl, swatchColor: "#1d4ed8" },
    ];
    sizeTableHeader = ["Tooling Section", "Mold Size Fit", "Cavity Count", "Total Assembly Mass", "Tolerance Class"];
    sizes = [
      { id: "s1", label: "Cope Matchplate", param1: "24\" x 28\" DISA Fit", param2: "2 Cavities", param3: "115 kg", param4: "DIN ISO 2768-m" },
      { id: "s2", label: "Drag Matchplate", param1: "24\" x 28\" DISA Fit", param2: "2 Cavities", param3: "128 kg", param4: "DIN ISO 2768-m" },
      { id: "s3", label: "Core Box Set", param1: "6-Piece Core Box", param2: "Hydraulic Split", param3: "240 kg", param4: "DIN ISO 2768-f" },
    ];
    features = [
      { number: "FEATURE 01", title: "High-Wear Resistant Polyurethane Faced Al 7075 Carrier", description: "Combines the lightweight stiffness of aerospace aluminum plates with ultra-high abrasion urethane faces, resisting green sand scouring over 100,000 molding cycles.", image: "/images/listings/cnc-machining-operation.jpg", imageAlt: "Wear Resistant Tooling" },
      { number: "FEATURE 02", title: "Integrated Computational Fluid Dynamic Gating & Risers", description: "Pre-engineered runner systems designed using magma simulation software to eliminate gas turbulence, oxide inclusions, and shrinkage porosity in thin-wall transmission ribs.", image: "/images/gallery/steelforge-gear-blanks.jpg", imageAlt: "CFD Gating Design" },
      { number: "FEATURE 03", title: "Precision Hardened Dowel Pin Bushings for Zero Mismatch", description: "Tool steel guide pins hold parting line shift under 0.15 mm, eliminating excess grinding fettling and ensuring seamless robotic machining clamping in customer plants.", image: "/images/gallery/carboforge-automotive.png", imageAlt: "Precision Alignment Pins" },
    ];
    editorialTitle = "Automotive Tooling Integrity: How High-Precision Matchplates Drive Foundry Profitability";
    editorialText = "Producing automotive transmission cases requires exact wall thickness repeatability and tight casting tolerances. Quality matchplates with hardened inserts prevent mold shift and drastically cut fettling labor costs.";
  }

  // =========================================================================
  // 7. fl-007: HIGH-PURITY FUSED ALUMINA CRUCIBLES & RAMMING MIX (Refractories)
  // =========================================================================
  else if (id === "fl-007") {
    galleryImages = [
      { src: "/images/listings/packaging-dispatch.jpg", alt: "Palletized Moisture-Proof 25kg Refractory Bags", caption: "Palletized 25kg Multi-Wall Refractory Bags", badge: "25 MT Stock" },
      { src: "/images/gallery/bulk-port-warehouse-staging.jpg", alt: "Port Breakbulk Warehouse Refractory Lot Staging", caption: "Port Warehouse Staging & Container Logistics", badge: "Mumbai Port" },
      { src: "/images/capabilities/metal-casting.jpg", alt: "High-Temperature 1750°C Furnace Crucible in Action", caption: "High-Temperature 1750°C Furnace Crucible in Action", badge: "1750°C Service" },
      { src: "/images/gallery/nickel-cathode-warehouse.jpg", alt: "Refractory & Crucible Staging Warehouse Deck", caption: "High-Purity Refractory Raw Material Storage", badge: "92% Al2O3" },
      { src: "/images/listings/foundry-pig-iron-stack.jpg", alt: "Companion Ingot & Raw Charge Material Storage", caption: "Companion High-Purity Melt Charge Materials", badge: "Spinel Forming" },
      { src: "/images/gallery/bulk-port-warehouse-staging.jpg", alt: "ISPM-15 Certified Export Pallet Shrink-Wrapped", caption: "ISPM-15 Certified Export Pallet Shrink-Wrapped", badge: "ISO 13765" },
    ];
    variants = [
      { id: "v1", name: "Al2O3-MgO Dry Vibratable Spinel Mass (92% Al2O3)", short: "92% Al2O3 Spinel", badge: "Steel & Stainless", priceOffset: 0, image: listing.imageUrl, swatchColor: "#94a3b8" },
      { id: "v2", name: "Ultra-High Purity 98% White Fused Alumina", short: "98% Alumina", badge: "Superalloys & Titanium", priceOffset: 240, image: listing.imageUrl, swatchColor: "#cbd5e1" },
      { id: "v3", name: "Silica-Based Acidic Ramming Mix for Cast Iron", short: "Silica Ramming", badge: "Grey & Ductile Iron", priceOffset: -220, image: listing.imageUrl, swatchColor: "#64748b" },
    ];
    sizeTableHeader = ["Packaging Tier", "Net Weight", "Pallet Allocation", "Grain Distribution", "Sintering Temp"];
    sizes = [
      { id: "s1", label: "Sample Pallet (1 MT)", param1: "1,000 kg Net", param2: "40 x 25kg Bags", param3: "0 - 5 mm Granular", param4: "1,600°C Sinter" },
      { id: "s2", label: "Production Lot (5 MT)", param1: "5,000 kg Net", param2: "5 Wooden Skids", param3: "0 - 5 mm Granular", param4: "1,650°C Sinter" },
      { id: "s3", label: "FCL Container (25 MT)", param1: "25,000 kg Net", param2: "20ft FCL Container", param3: "0 - 5 mm Granular", param4: "1,750°C Max Service" },
    ];
    features = [
      { number: "FEATURE 01", title: "In-Situ Spinel Reaction for Thermal Shock Immunity", description: "Formulated with reactive magnesia that forms magnesium aluminate spinel during initial furnace firing, creating a dense barrier that blocks slag erosion.", image: "/images/capabilities/metal-casting.jpg", imageAlt: "In-Situ Spinel Reaction" },
      { number: "FEATURE 02", title: "Controlled Multi-Screen Grain Size Packing Density", description: "Continuous Fuller-Thompson particle size distribution allows dry vibratory packing density exceeding 3.0 g/cm³, preventing metal penetration and finning.", image: "/images/listings/packaging-dispatch.jpg", imageAlt: "Controlled Grain Packing" },
      { number: "FEATURE 03", title: "Zero Moisture Multi-Wall Moisture Barrier Packaging", description: "Bags are vacuum sealed with polyethylene vapor barriers, ensuring zero hydration of free magnesia and guaranteeing instant sintering stability.", image: "/images/gallery/bulk-port-warehouse-staging.jpg", imageAlt: "Vapor Barrier Packaging" },
    ];
    editorialTitle = "Induction Furnace Lining Life: How High-Purity Fused Alumina Extends Campaign Hours";
    editorialText = "Coreless induction furnaces melting high-alloy steels endure severe thermal cycling and chemical slag corrosion. High-purity alumina-spinel refractory linings provide the chemical inertness needed to avoid furnace washouts and unexpected shutdowns.";
  }

  // =========================================================================
  // 8. fl-008: PRECISION DIE-CAST ALUMINUM VALVE BODIES (Castings)
  // =========================================================================
  else if (id === "fl-008") {
    galleryImages = [
      { src: "/images/listings/investment-cast-valve.jpg", alt: "A380 Precision Die-Cast Valve Body", caption: "A380 High-Integrity Die-Cast Valve Body", badge: "Die-Cast A380" },
      { src: "/images/gallery/verifycasting-ball-valve.png", alt: "Precision Flanged Pneumatic Valve Body (VerifyCasting)", caption: "High-Precision Flanged Pneumatic Valve Body", badge: "API 6D Spec" },
      { src: "/images/gallery/shivam-valve-body.jpg", alt: "Companion Bonnet & Actuator Mount Assembly", caption: "Companion Bonnet, Actuator Mount & Sealing Cavity", badge: "Pressure Tested" },
      { src: "/images/gallery/shivam-flange.png", alt: "Precision Machined Flange Faces & Bolt Bores", caption: "Precision CNC Flange Facing & Bolt Bores", badge: "Ra 0.8 µm" },
      { src: "/images/gallery/steelforge-blind-flange.png", alt: "6 Bar Certified Hydrostatic Pressure Test", caption: "6 Bar Certified Pressure Containment Test", badge: "6 Bar Proof" },
      { src: "/images/gallery/packaging-dispatch.jpg", alt: "Foam-Cushioned Export Carton & Pallet Skid", caption: "Foam-Cushioned Export Carton & Pallet Skid", badge: "Cleanroom Packaged" },
    ];
    variants = [
      { id: "v1", name: "ASTM B85 A380 Standard Die-Cast Alloy", short: "A380 Die-Cast", badge: "High Fluidity", priceOffset: 0, image: listing.imageUrl, swatchColor: "#94a3b8" },
      { id: "v2", name: "JIS ADC12 Low-Silicon Precision Tier", short: "ADC12 Alloy", badge: "Tight Tolerances", priceOffset: 1.20, image: listing.imageUrl, swatchColor: "#cbd5e1" },
      { id: "v3", name: "Anodized Corrosion Proof Marine Finish", short: "Anodized Clear", badge: "Salt Spray Proof", priceOffset: 2.80, image: listing.imageUrl, swatchColor: "#64748b" },
    ];
    sizeTableHeader = ["Valve Port Size", "Body Length", "Port Diameter", "Unit Net Mass", "Leak Test Proof"];
    sizes = [
      { id: "s1", label: "DN25 (1\" Port)", param1: "95 mm", param2: "25 mm Bore", param3: "0.85 kg", param4: "6 Bar Bubble-Tight" },
      { id: "s2", label: "DN40 (1.5\" Port)", param1: "120 mm", param2: "38 mm Bore", param3: "1.40 kg", param4: "6 Bar Bubble-Tight" },
      { id: "s3", label: "DN50 (2\" Port)", param1: "150 mm", param2: "50 mm Bore", param3: "2.10 kg", param4: "6 Bar Bubble-Tight" },
      { id: "s4", label: "DN80 (3\" Port)", param1: "200 mm", param2: "75 mm Bore", param3: "3.80 kg", param4: "6 Bar Bubble-Tight" },
    ];
    features = [
      { number: "FEATURE 01", title: "Automated 800T Cold Chamber High-Pressure Die Casting", description: "Real-time shot speed and pressure monitoring eliminates gas entrapment and delivers ultra-sound pressure-tight aluminum walls.", image: "/images/listings/investment-cast-valve.jpg", imageAlt: "Cold Chamber Die Casting" },
      { number: "FEATURE 02", title: "Integrated Leak-Free O-Ring Seal Groves & Reamed Stem Bores", description: "Multi-axis CNC centers machine the internal ball cavity and blowout-proof stem bores in a single clamping datum, ensuring bubble-tight shutoff to API 598.", image: "/images/gallery/shivam-flange.png", imageAlt: "Precision Reamed Stem Bores" },
      { number: "FEATURE 03", title: "100% Real-Time Digital X-Ray & Air-Under-Water Testing", description: "Every casting lot undergoes automated X-ray volumetric inspection and 6 bar submerged air leak testing with certified zero bubble release.", image: "/images/gallery/verifycasting-ball-valve.png", imageAlt: "Digital X-Ray Inspection" },
    ];
    editorialTitle = "Why Hydraulic & Pneumatic Engineers Choose High-Pressure Die-Cast Aluminum Bodies";
    editorialText = "Weight reduction and smooth internal passages make die-cast aluminum valve bodies the ideal choice for automotive automation and industrial pneumatic manifold systems. Precision casting eliminates secondary machining and ensures leak-free pressure retention.";
  }

  // =========================================================================
  // 9. fl-009: HIGH-PRESSURE FORGED PIPING FLANGES (Forgings)
  // =========================================================================
  else if (id === "fl-009") {
    galleryImages = [
      { src: "/images/listings/forged-piping-flange.jpg", alt: "ASME B16.5 Class 600# Weld Neck Flange", caption: "ASME B16.5 Class 600# Weld Neck Flange", badge: "Class 600# Spec" },
      { src: "/images/gallery/shivam-flange.png", alt: "Precision Raised-Face Finish & Bolt Hole Drilling (Shivam Forge)", caption: "Precision Raised-Face Finish & Bolt Bores", badge: "Ra 3.2 µm Serrated" },
      { src: "/images/gallery/steelforge-blind-flange.png", alt: "Companion High-Pressure Blind Flange (SteelForge)", caption: "Companion High-Pressure Blind Flange & RTJ Ring Grooves", badge: "ASTM A105 / F316L" },
      { src: "/images/gallery/steelforge-rings-250-rms.jpg", alt: "Continuous Grain Flow Neck Transition & Bore", caption: "Continuous Grain Flow Neck Transition & Bore", badge: "Normalized" },
      { src: "/images/gallery/steelforge-rolled-rings.jpg", alt: "Heavy Closed-Die Forging Press Line In Action", caption: "Heavy Closed-Die Forging Press Line In Action", badge: "100% Ultrasonic" },
      { src: "/images/gallery/packaging-dispatch.jpg", alt: "VCI-Shrunk Steel-Banded Palletized Export Skid", caption: "VCI-Shrunk Steel-Banded Palletized Export Skid", badge: "FOB Houston" },
    ];
    variants = [
      { id: "v1", name: "ASTM A105 Carbon Steel (Normalized)", short: "A105 Carbon", badge: "Standard Class 600", priceOffset: 0, image: listing.imageUrl, swatchColor: "#475569" },
      { id: "v2", name: "ASTM A182 F316L Austenitic Stainless Steel", short: "316L Stainless", badge: "Corrosion Proof", priceOffset: 145, image: listing.imageUrl, swatchColor: "#94a3b8" },
      { id: "v3", name: "ASTM A350 LF2 Low-Temperature Impact Tier (-46°C)", short: "LF2 Low Temp", badge: "Arctic / Cryogenic", priceOffset: 45, image: listing.imageUrl, swatchColor: "#1e293b" },
    ];
    sizeTableHeader = ["Nominal Pipe Size", "Outside Diameter", "Bolt Circle PCD", "Flange Mass", "Hydro Test Rating"];
    sizes = [
      { id: "s1", label: "2\" Class 600#", param1: "165 mm (6.5\")", param2: "127 mm (8 Holes)", param3: "7.5 kg", param4: "155 Bar Hydro" },
      { id: "s2", label: "4\" Class 600#", param1: "275 mm (10.75\")", param2: "216 mm (8 Holes)", param3: "18.5 kg", param4: "155 Bar Hydro" },
      { id: "s3", label: "6\" Class 600#", param1: "355 mm (14.0\")", param2: "292 mm (12 Holes)", param3: "37.0 kg", param4: "155 Bar Hydro" },
      { id: "s4", label: "8\" Class 600#", param1: "420 mm (16.5\")", param2: "349 mm (12 Holes)", param3: "59.0 kg", param4: "155 Bar Hydro" },
    ];
    features = [
      { number: "FEATURE 01", title: "Continuous Radial Grain Flow Following Flange Hub Geometry", description: "Hot closed-die forging directs metallic grain flow lines seamlessly from the weld neck into the flange rim, providing maximum hoop strength against internal pressure surges.", image: "/images/listings/forged-piping-flange.jpg", imageAlt: "Continuous Grain Flow" },
      { number: "FEATURE 02", title: "Precision Spiral Serrated Phonographic Gasket Sealing Face", description: "CNC machined with ASME B16.5 compliant serrated concentric or spiral grooves (Ra 3.2–6.3 µm) ensuring 100% seal retention with spiral-wound metallic gaskets.", image: "/images/gallery/shivam-flange.png", imageAlt: "Serrated Gasket Face" },
      { number: "FEATURE 03", title: "Full Ingot Traceability & EN 10204 3.1 Certification", description: "Supplied with complete chemical, tensile, Charpy V-notch impact test reports and permanent heat lot stampings along the flange outer rim.", image: "/images/gallery/steelforge-blind-flange.png", imageAlt: "Traceable MTR Certification" },
    ];
    editorialTitle = "Severe Piping Safety: Why Petrochemical Plants Specify Forged Steel Flanges Over Plate Rings";
    editorialText = "High-pressure hydrocarbon piping systems cannot tolerate laminar inclusions or weld-seam weak spots. Closed-die forged flanges deliver isotropic tensile properties and certified low-temperature impact toughness.";
  }

  // =========================================================================
  // 10. fl-010 & fl-016: HEAVY OPEN-DIE FORGED STEPPED SHAFTS (Forgings)
  // =========================================================================
  else if (id === "fl-010" || id === "fl-016" || title.includes("stepped") || title.includes("rotor shaft")) {
    galleryImages = [
      { src: "/images/listings/stepped-rotor-shaft.jpg", alt: "Heavy Forged Stepped Rotor Shaft", caption: "Finished AISI 4340 Q&T Stepped Rotor Shaft", badge: "35ft Length" },
      { src: "/images/gallery/steelforge-large-step-shaft.jpg", alt: "Open-Die Cogging Step Shaft (SteelForge)", caption: "Open-Die Hydraulic Cogging & Journal Step Forging", badge: "850 MPa Tensile" },
      { src: "/images/gallery/steelforge-long-step-shafts.jpg", alt: "Multi-Step Forged Shaft Staging Deck", caption: "Multi-Step Forged Shaft Staging on Machining Deck", badge: "Vacuum-Degassed" },
      { src: "/images/gallery/shivam-forged-shaft.jpg", alt: "Companion Pinion Shafts & Rotor Couplings (Shivam Forge)", caption: "Companion Pinion Shafts & High-Torsion Steps", badge: "Ra 0.8 µm Finish" },
      { src: "/images/gallery/steelforge-forged-cylinders.jpg", alt: "Heavy-Duty Center Lathe Bearing Step Grinding", caption: "Heavy-Duty Lathe Turning of Bearing Steps", badge: "ASTM A388 Class 1" },
      { src: "/images/gallery/packaging-dispatch.jpg", alt: "Heavy Timber V-Cradle Shipping Skid with VCI Wrap", caption: "Heavy Timber V-Cradle Shipping Skid with VCI Wrap", badge: "FOB Pittsburgh" },
    ];
    variants = [
      { id: "v1", name: "AISI 4340 Quenched & Tempered (Vacuum-Degassed)", short: "4340 Q&T", badge: "Standard High Fatigue", priceOffset: 0, image: listing.imageUrl, swatchColor: "#1e293b" },
      { id: "v2", name: "30CrNiMo8 European Heavy Turbine Grade", short: "30CrNiMo8", badge: "Cryogenic Toughness", priceOffset: 3500, image: listing.imageUrl, swatchColor: "#0f172a" },
      { id: "v3", name: "AISI 4140 Normalized & Tempered (General Duty)", short: "4140 N&T", badge: "Economical Power", priceOffset: -2800, image: listing.imageUrl, swatchColor: "#475569" },
    ];
    sizeTableHeader = ["Shaft Configuration", "Journal Diameter", "Total Length", "Finished Mass", "Proof Tensile"];
    sizes = [
      { id: "s1", label: "Medium Tier (20ft)", param1: "350 mm", param2: "6,096 mm (20 ft)", param3: "6,800 kg", param4: "850 MPa" },
      { id: "s2", label: "Standard Tier (28ft)", param1: "420 mm", param2: "8,534 mm (28 ft)", param3: "11,200 kg", param4: "880 MPa" },
      { id: "s3", label: "Large Tier (35ft)", param1: "500 mm", param2: "10,668 mm (35 ft)", param3: "16,500 kg", param4: "920 MPa" },
      { id: "s4", label: "Heavy Turbine (42ft)", param1: "620 mm", param2: "12,800 mm (42 ft)", param3: "24,000 kg", param4: "950 MPa" },
    ];
    features = [
      { number: "FEATURE 01", title: "Vacuum-Degassed AISI 4340 Alloy Steel Metallurgy", description: "Forged from vacuum-degassed ingots with hydrogen flaking prevention, delivering superior core toughness and high torsional fatigue resistance under peak power loads.", image: "/images/listings/stepped-rotor-shaft.jpg", imageAlt: "Vacuum Degassed Rotor Metallurgy" },
      { number: "FEATURE 02", title: "Continuous Axial Grain Flow Structure for Dynamic Balance", description: "Hydraulic open-die press cogging aligns metallic grain fibers along the shaft longitudinal axis, minimizing runout and dynamic vibration at high rotational RPM.", image: "/images/gallery/steelforge-large-step-shaft.jpg", imageAlt: "Continuous Axial Grain Flow" },
      { number: "FEATURE 03", title: "100% Volumetric Ultrasonic Testing to ASTM A388 Class 1", description: "Scanned with straight and angle beam ultrasonic probes across the entire body and step transitions to verify zero internal porosity or inclusions.", image: "/images/gallery/shivam-forged-shaft.jpg", imageAlt: "100% Volumetric Ultrasonic Examination" },
    ];
    editorialTitle = "Why Power Generation & Marine Propulsion Engineers Rely on Forged Stepped Rotors";
    editorialText = "Turbine rotors and marine propulsion shafts cannot tolerate center-line segregation or internal micro-voids. Vacuum-degassed open-die forgings provide uniform isotropic strength and certified dimensional stability through rigorous quench and temper heat treatment.";
  }

  // =========================================================================
  // 11. fl-011: SEAMLESS ROLLED RINGS (Forgings)
  // =========================================================================
  else if (id === "fl-011" || ((title.includes("rolled ring") || title.includes("rings") || title.includes("yaw & pitch")) && !title.includes("steering"))) {
    galleryImages = [
      { src: "/images/listings/seamless-rolled-ring.jpg", alt: "Seamless Rolled Ring Forging", caption: "Seamless Rolled Ring Forging", badge: "72\" OD x 56\" ID" },
      { src: "/images/gallery/steelforge-rolled-rings.jpg", alt: "Heavy Radial-Axial Ring Rolling Mill In Action (SteelForge)", caption: "Heavy Radial-Axial Ring Rolling Mill In Action", badge: "Continuous Hoop" },
      { src: "/images/gallery/steelforge-rings-250-rms.jpg", alt: "Skim-Cut Rough Machined Ring Surface", caption: "Skim-Cut Rough Machined Ring Surface", badge: "250 RMS Finish" },
      { src: "/images/gallery/steelforge-blind-flange.png", alt: "Companion Forged Blind Flanges & Retaining Rings", caption: "Companion Forged Blind Flanges & Retaining Rings", badge: "ASTM A105 / 4140" },
      { src: "/images/gallery/steelforge-forged-blocks.jpg", alt: "Punched & Pierced Ring Preform Billet Staging", caption: "Punched & Pierced Ring Preform Billet Staging", badge: "ASTM A388 Level 1" },
      { src: "/images/gallery/packaging-dispatch.jpg", alt: "Heavy Timber Circular Ring Export Skid", caption: "Heavy Timber Circular Ring Export Skid", badge: "ISPM-15 Certified" },
    ];
    variants = [
      { id: "v1", name: "AISI 4140 Quenched & Tempered", short: "4140 Q&T", badge: "Standard High Fatigue", priceOffset: 0, image: listing.imageUrl, swatchColor: "#475569" },
      { id: "v2", name: "AISI 4340 Nickel-Chromium-Moly", short: "4340 Ni-Cr", badge: "Heavy Torsion Rigidity", priceOffset: 1200, image: listing.imageUrl, swatchColor: "#1e293b" },
      { id: "v3", name: "ASTM A105 Normalized Carbon Steel", short: "A105 Carbon", badge: "General Industrial", priceOffset: -800, image: listing.imageUrl, swatchColor: "#64748b" },
      { id: "v4", name: "17-4PH Precipitation Hardened Stainless", short: "17-4PH SS", badge: "Offshore Marine Grade", priceOffset: 2400, image: listing.imageUrl, swatchColor: "#94a3b8" },
    ];
    sizeTableHeader = ["Ring Size", "Outer Dia (OD)", "Inner Dia (ID)", "Face Height", "Proof Tensile"];
    sizes = [
      { id: "s1", label: "Ring Ø40\"", param1: "1,016 mm", param2: "762 mm", param3: "250 mm", param4: "850 MPa" },
      { id: "s2", label: "Ring Ø72\"", param1: "1,828 mm", param2: "1,420 mm", param3: "350 mm", param4: "850 MPa" },
      { id: "s3", label: "Ring Ø100\"", param1: "2,540 mm", param2: "2,080 mm", param3: "420 mm", param4: "900 MPa" },
      { id: "s4", label: "Ring Ø140\"", param1: "3,556 mm", param2: "3,020 mm", param3: "500 mm", param4: "920 MPa" },
      { id: "s5", label: "Ring Ø200\"", param1: "5,080 mm", param2: "4,400 mm", param3: "650 mm", param4: "950 MPa" },
    ];
    features = [
      { number: "FEATURE 01", title: "Continuous Circular Grain Flow Structure", description: "Unlike cut plate rings with transverse weak zones, radial-axial ring rolling aligns metallic grain fibers along the continuous hoop circumference, increasing dynamic fatigue life by 40%.", image: "/images/listings/seamless-rolled-ring.jpg", imageAlt: "Continuous Circular Grain Flow" },
      { number: "FEATURE 02", title: "100% Volumetric Ultrasonic Examination to ASTM A388", description: "Every rolled ring undergoes straight-beam and angle-beam ultrasonic scan across 100% of the cross-section to guarantee freedom from internal inclusions, hydrogen flaking, or shrinkage porosity.", image: "/images/gallery/steelforge-rolled-rings.jpg", imageAlt: "Ultrasonic NDT Scanning" },
      { number: "FEATURE 03", title: "Precision Rough Machined to 250 RMS Finish", description: "Supplied skim-cut to remove forging scale, saving customer CNC insert tool life and providing accurate datum surfaces for final raceway finish machining.", image: "/images/gallery/steelforge-rings-250-rms.jpg", imageAlt: "CNC Turning & Machining" },
    ];
    editorialTitle = "Why Wind Turbine & Slew Bearing Engineers Choose Seamless Rolled Rings Over Welded Fabrications";
    editorialText = "Heavy industrial slew bearings and wind turbine pitch rings endure millions of high-cycle alternating stress reversals. Seamless rolled rings forge out internal gas porosity and weld-seam heat affected zones, delivering isotropic mechanical properties and uniform hardness throughout the cross-section.";
  }

  // =========================================================================
  // 12. fl-012: HIGH-MANGANESE JAW CRUSHER LINERS (Castings)
  // =========================================================================
  else if (id === "fl-012") {
    galleryImages = [
      { src: "/images/listings/jaw-crusher-liner.jpg", alt: "Austenitic Hadfield Steel Mn18Cr2 Jaw Crusher Plate", caption: "Mn18Cr2 Austenitic Hadfield Steel Jaw Plate", badge: "Mn18Cr2 Grade" },
      { src: "/images/gallery/verifycasting-wear-liner.jpg", alt: "Heavy Corrugated Wear Face & Tooth Profile (VerifyCasting)", caption: "Heavy Corrugated Wear Face & Tooth Profile", badge: "Severe Impact" },
      { src: "/images/capabilities/metal-casting.jpg", alt: "1480°C High-Manganese Electric Arc Furnace Tap", caption: "1480°C High-Manganese Melt Pour & Ladle Inoculation", badge: "1480°C Pour" },
      { src: "/images/gallery/steelforge-forged-blocks.jpg", alt: "Heavy Back Ribbing & Mounting Wedge Recesses", caption: "Heavy Back Ribbing & Mounting Wedge Recesses", badge: "Zero Porosity" },
      { src: "/images/gallery/bulk-port-warehouse-staging.jpg", alt: "Heavy Mining Yard Staging & Crane Rigging Deck", caption: "Heavy Mining Yard Staging & Logistics Deck", badge: "FOB Brazil" },
      { src: "/images/gallery/packaging-dispatch.jpg", alt: "Heavy Steel-Banded Timber Export Pallet Skid", caption: "Heavy Steel-Banded Timber Export Pallet Skid", badge: "100% MPI Tested" },
    ];
    variants = [
      { id: "v1", name: "ASTM A128 Grade E-1 (Mn18Cr2) Standard High-Wear", short: "Mn18Cr2 Alloy", badge: "Quarry & Gravel", priceOffset: 0, image: listing.imageUrl, swatchColor: "#475569" },
      { id: "v2", name: "Extreme Duty Mn22Cr2 (Primary Taconite Crushing)", short: "Mn22Cr2 Hard Rock", badge: "Extreme Hard Rock", priceOffset: 650, image: listing.imageUrl, swatchColor: "#1e293b" },
      { id: "v3", name: "Titanium Carbide (TiC) Insert Embedded Wear Zones", short: "TiC Reinforced", badge: "3x Extended Life", priceOffset: 1400, image: listing.imageUrl, swatchColor: "#0f172a" },
    ];
    sizeTableHeader = ["Crusher Model", "Plate Dimensions", "Tooth Profile", "Net Casting Weight", "Work Hardening"];
    sizes = [
      { id: "s1", label: "Jaw 24x36", param1: "1,150 x 850 x 85 mm", param2: "Deep Corrugated Sharp", param3: "680 kg", param4: "220 -> 550 HBW" },
      { id: "s2", label: "Jaw 30x42", param1: "1,420 x 1,050 x 95 mm", param2: "Heavy Quarry Bell Tooth", param3: "850 kg", param4: "220 -> 550 HBW" },
      { id: "s3", label: "Jaw 44x48", param1: "1,750 x 1,220 x 110 mm", param2: "Wide Pitch Heavy Slab", param3: "1,450 kg", param4: "220 -> 580 HBW" },
      { id: "s4", label: "Jaw 60x48", param1: "2,100 x 1,350 x 130 mm", param2: "Primary Mine High-Tooth", param3: "2,200 kg", param4: "220 -> 600 HBW" },
    ];
    features = [
      { number: "FEATURE 01", title: "Authentic Hadfield Austenitic Manganese Metallurgy", description: "Water-toughened solution heat treatment at 1050°C retains 100% austenitic microstructure, allowing surface work-hardening from 220 HBW up to 550 HBW under rock impact.", image: "/images/listings/jaw-crusher-liner.jpg", imageAlt: "Hadfield Austenitic Manganese Metallurgy" },
      { number: "FEATURE 02", title: "Precision Flat Back Planing for Tight Frame Seating", description: "Rear mounting faces are machine-planed or epoxy-leveled to guarantee 100% contact area against crusher swing and fixed jaw frames, preventing plate cracking.", image: "/images/gallery/steelforge-forged-blocks.jpg", imageAlt: "Precision Flat Back Planing" },
      { number: "FEATURE 03", title: "Engineered Corrugation Geometry for Efficient Rock Breakage", description: "Optimized tooth pitches minimize gouging slippage and promote pure compressive rock cleavage, increasing crushing capacity while reducing kWh consumption per ton.", image: "/images/gallery/verifycasting-wear-liner.jpg", imageAlt: "Engineered Corrugation Geometry" },
    ];
    editorialTitle = "Severe Impact Crushing: Why Aggregate Producers Rely on Hadfield Manganese Castings";
    editorialText = "Crushing granite, river gravel, and basalt exerts immense compressive and gouging forces. Authentic Hadfield manganese steel possesses the unique ability to work-harden under repeated impact while retaining an ultra-ductile core that prevents brittle catastrophic fracture.";
  }

  // =========================================================================
  // 13. fl-013 & fl-017: SUTHERLAND PRESSES (Foundry Equipment)
  // =========================================================================
  else if (id === "fl-013" || id === "fl-017" || title.includes("sutherland") || (title.includes("press") && !title.includes("flange") && !title.includes("shaft"))) {
    galleryImages = [
      { src: listing.imageUrl, alt: listing.title, caption: "Heavy Capital Equipment Production Unit", badge: "Factory Floor" },
      { src: "/images/gallery/sutherland-sp2-660.jpg", alt: "SP2-660 Slide Ram & Precision Tooling Workspace (Sutherland)", caption: "Active Press Tooling Workspace & Die Bolster", badge: "Heavy Tonnage Line" },
      { src: "/images/gallery/sutherland-ipress-control.jpg", alt: "I-PRESS® Touchscreen Control & Real-Time Diagnostics (Sutherland)", caption: "I-PRESS® Touchscreen Digital Control Console", badge: "Rockwell AB Plus" },
      { src: "/images/gallery/sutherland-servo-press.jpg", alt: "Heavy Cast Steel Bed & X-Angle Slide Guidance", caption: "Heavy Cast Steel Bed & X-Angle Slide Guidance", badge: "Tight Tolerances" },
      { src: "/images/gallery/sutherland-forge-line.jpg", alt: "Automated Forge Line & Billet Transfer Workspace", caption: "Automated Induction Billet Heater & Transfer Line", badge: "Turnkey Package" },
      { src: "/images/gallery/carboforge-steel-forgings-2.png", alt: "Sample Net-Shape Production Parts", caption: "Sample Net-Shape Closed-Die Forged Production Parts", badge: "Zero Scrap" },
    ];
    variants = [
      { id: "v1", name: "Standard Operational Configuration", short: "Standard OEM", badge: "Ready for Inspection", priceOffset: 0, image: listing.imageUrl, swatchColor: "#0f172a" },
      { id: "v2", name: "Turnkey Rigging & De-Installation Package", short: "Turnkey Extraction", badge: "Complete Logistics", priceOffset: 18500, image: listing.imageUrl, swatchColor: "#1e3a8a" },
      { id: "v3", name: "Reconditioned with New Digital PLC Panel", short: "Modernized PLC", badge: "12-Mo Warranty", priceOffset: 34000, image: listing.imageUrl, swatchColor: "#1d4ed8" },
      { id: "v4", name: "Includes Spare Tooling & Wear Cassettes", short: "With Spare Tooling", badge: "High Value Bundle", priceOffset: 12000, image: listing.imageUrl, swatchColor: "#0f172a" },
    ];
    sizeTableHeader = ["Model / Capacity", "Rated Tonnage", "Stroke Length", "Bed Area", "Operating Speed"];
    sizes = [
      { id: "s1", label: "400 Ton Tier", param1: "400 Ton", param2: "220 mm", param3: "1,100 x 950 mm", param4: "45 SPM" },
      { id: "s2", label: "600 Ton Tier", param1: "600 Ton", param2: "280 mm", param3: "1,350 x 1,100 mm", param4: "35 SPM" },
      { id: "s3", label: "1000 Ton Tier", param1: "1,000 Ton", param2: "350 mm", param3: "1,650 x 1,300 mm", param4: "28 SPM" },
      { id: "s4", label: "1600 Ton Tier", param1: "1,600 Ton", param2: "420 mm", param3: "1,950 x 1,500 mm", param4: "22 SPM" },
      { id: "s5", label: "2500 Ton Tier", param1: "2,500 Ton", param2: "500 mm", param3: "2,400 x 1,800 mm", param4: "18 SPM" },
    ];
    features = [
      { number: "FEATURE 01", title: "X-Angle Slide Guidance for Thermal Expansion", description: "Maintains micron-level die clearance even under intense hot forging heat expansion, eliminating slide binding and extending die life by over 30%.", image: listing.imageUrl, imageAlt: "X-Angle Slide Guidance" },
      { number: "FEATURE 02", title: "I-PRESS® AB Plus Touchscreen Controls & Telemetry", description: "Equipped with Rockwell Allen-Bradley GuardLogix safety architecture, real-time tonnage signature monitors, and thermal bearing temperature diagnostics.", image: "/images/gallery/sutherland-ipress-control.jpg", imageAlt: "Digital Press Control System" },
      { number: "FEATURE 03", title: "Pre-Stressed Heavy Steel Tie-Rod Frame", description: "Solid steel cast bed, upright columns, and upper crown pre-stressed with high-tensile steel tie rods for maximum rigidity under full rated working load.", image: "/images/gallery/sutherland-sp2-660.jpg", imageAlt: "Heavy Steel Press Frame" },
    ];
    editorialTitle = "Industrial Machinery Reliability: Why Production Forge Shops Rely on Heavy Sutherland Presses";
    editorialText = "Forging heavy automotive crankshafts, steering knuckles, and flanges requires repeatable bottom-dead-center accuracy under punishing dynamic shock loads. Modern press architecture with X-angle guidance and pneumatic wet clutches ensures uptime and rapid cycle times.";
  }

  // =========================================================================
  // 14. fl-014: COMMERCIAL VEHICLE FORGED STEERING KNUCKLES (Forgings)
  // =========================================================================
  else if (id === "fl-014" || (title.includes("steering") && title.includes("knuckle"))) {
    galleryImages = [
      { src: "/images/listings/forged-steering-knuckle.jpg", alt: "Commercial Vehicle Forged Steering Knuckle", caption: "Finished Machined Steering Knuckle", badge: "100% Inspected" },
      { src: "/images/gallery/shivam-arm-knuckle.jpg", alt: "Closed-Die Forged Knuckle Blank (Shivam Forge)", caption: "Closed-Die Forged Knuckle Blank (Shivam Forge)", badge: "2000T Line" },
      { src: "/images/gallery/shivam-steering-arm.png", alt: "Companion Forged Steering Arm (Shivam Forge)", caption: "Companion Heavy Commercial Vehicle Steering Arm", badge: "IATF 16949" },
      { src: "/images/gallery/shivam-track-arm.jpg", alt: "Companion Suspension Track Arm", caption: "Companion Forged Suspension Track Arm & Stub Axle", badge: "High Fatigue" },
      { src: "/images/gallery/shivam-ball-joint.jpg", alt: "Machined Ball Joint Socket & Kingpin Bores", caption: "Precision Machined Ball Joint Socket & Kingpin Bores", badge: "ISO 2768-m" },
      { src: "/images/gallery/carboforge-automotive.png", alt: "Staged Chassis Forgings in VCI Crates (CarboForge)", caption: "Staged Chassis Forgings in VCI Anti-Corrosion Crates", badge: "OEM Ready" },
    ];
    variants = [
      { id: "v1", name: "SAE 4140H Chromium-Moly Alloy Steel", short: "4140H Alloy", badge: "Standard OEM Class 8", priceOffset: 0, image: listing.imageUrl, swatchColor: "#475569" },
      { id: "v2", name: "AISI 4340 High-Toughness Nickel Alloy", short: "4340 Heavy Duty", badge: "Extreme Severe Service", priceOffset: 45, image: listing.imageUrl, swatchColor: "#1e293b" },
      { id: "v3", name: "SAE 8620 Carburized High Surface Wear", short: "8620 Carburized", badge: "High Abrasion", priceOffset: 25, image: listing.imageUrl, swatchColor: "#334155" },
    ];
    sizeTableHeader = ["Vehicle Class", "Spindle Diameter", "Kingpin Bore", "Part Mass", "Yield Strength"];
    sizes = [
      { id: "s1", label: "Class 5 Medium Duty", param1: "65 mm", param2: "45 mm", param3: "18.5 kg", param4: "750 MPa" },
      { id: "s2", label: "Class 7 Heavy Truck", param1: "80 mm", param2: "55 mm", param3: "28.5 kg", param4: "850 MPa" },
      { id: "s3", label: "Class 8 Linehaul Tractor", param1: "95 mm", param2: "65 mm", param3: "36.0 kg", param4: "950 MPa" },
      { id: "s4", label: "Severe Duty Vocational", param1: "110 mm", param2: "75 mm", param3: "48.5 kg", param4: "1,050 MPa" },
    ];
    features = [
      { number: "FEATURE 01", title: "Continuous Unbroken Grain Flow Following High-Stress Contours", description: "Hot impression die forging aligns metallic grain fibers along the knuckle spindle and kingpin bosses, eliminating transverse weak spots and increasing fatigue life by 45%.", image: "/images/listings/forged-steering-knuckle.jpg", imageAlt: "Directional Grain Flow Structure" },
      { number: "FEATURE 02", title: "100% Wet Fluorescent Magnetic Particle Inspection (ASTM E1444)", description: "Every critical stress section is inspected under UV black light to verify zero surface laps, seam defects, or quenching micro-cracks before dispatch.", image: "/images/gallery/shivam-arm-knuckle.jpg", imageAlt: "Magnetic Particle Inspection" },
      { number: "FEATURE 03", title: "Automated 5-Axis CNC Precision Spindle & Caliper Mount Machining", description: "Pre-machined bearing journals, tapered tie rod holes, and disc brake caliper mounts hold tight ISO 2768-m tolerances for instant production line assembly.", image: "/images/gallery/shivam-steering-arm.png", imageAlt: "5-Axis CNC Precision Machining" },
    ];
    editorialTitle = "Why Commercial Vehicle Engineers Specify Closed-Die Forged Steering Knuckles Over Castings";
    editorialText = "Steering knuckles support the entire front axle load and endure dynamic shock loads over highway potholes and curbs. Forged alloy steel provides superior fracture toughness and yield strength, ensuring zero catastrophic failures in safety-critical vehicle steering systems.";
  }

  // =========================================================================
  // 15. fl-015: SILICA-SOL PRECISION INVESTMENT CAST VALVES (Castings)
  // =========================================================================
  else if (id === "fl-015" || title.includes("investment cast valve")) {
    galleryImages = [
      { src: "/images/listings/investment-cast-valve.jpg", alt: "CF8M Stainless Steel Ball Valve Body", caption: "CF8M (316) Stainless Steel Ball Valve Body", badge: "Silica-Sol Cast" },
      { src: "/images/gallery/verifycasting-ball-valve.png", alt: "High-Precision Flanged Ball Valve Body (VerifyCasting)", caption: "High-Precision Flanged Ball Valve Body", badge: "API 6D Spec" },
      { src: "/images/gallery/shivam-valve-body.jpg", alt: "Investment Cast Valve Body & Bonnet Assembly (Shivam Forge)", caption: "Investment Cast Valve Body & Bonnet Assembly", badge: "Pressure Tested" },
      { src: "/images/gallery/shivam-flange.png", alt: "Precision Machined Flange Faces & Bolt Bores (Shivam Forge)", caption: "Precision CNC Flange Facing & Bolt Bores", badge: "Ra 0.8 µm" },
      { src: "/images/gallery/steelforge-blind-flange.png", alt: "100% Hydrostatic Pressure & Helium Leak Test", caption: "100% Hydrostatic Pressure & Helium Leak Test", badge: "25 Bar Certified" },
      { src: "/images/gallery/packaging-dispatch.jpg", alt: "Foam-Cushioned Export Carton & Pallet Skid", caption: "Foam-Cushioned Export Carton & Pallet Skid", badge: "Cleanroom Packaged" },
    ];
    variants = [
      { id: "v1", name: "ASTM A351 CF8M (AISI 316 Stainless)", short: "316 CF8M", badge: "Standard Chemical", priceOffset: 0, image: listing.imageUrl, swatchColor: "#94a3b8" },
      { id: "v2", name: "ASTM A351 CF3M (Low-Carbon 316L)", short: "316L CF3M", badge: "Intergranular Proof", priceOffset: 12, image: listing.imageUrl, swatchColor: "#cbd5e1" },
      { id: "v3", name: "ASTM A351 CN7M (Alloy 20 Acid Service)", short: "Alloy 20", badge: "Sulfuric Acid Proof", priceOffset: 45, image: listing.imageUrl, swatchColor: "#64748b" },
      { id: "v4", name: "ASTM A995 4A (2205 Duplex Stainless)", short: "Duplex 2205", badge: "High Yield Strength", priceOffset: 28, image: listing.imageUrl, swatchColor: "#334155" },
    ];
    sizeTableHeader = ["Nominal Flange", "Port Diameter", "Face-to-Face Length", "Body Mass", "Hydro Proof Test"];
    sizes = [
      { id: "s1", label: "DN50 (2\")", param1: "50 mm Bore", param2: "178 mm (ANSI 150#)", param3: "8.5 kg", param4: "30 Bar Hydro" },
      { id: "s2", label: "DN80 (3\")", param1: "80 mm Bore", param2: "203 mm (ANSI 150#)", param3: "14.2 kg", param4: "30 Bar Hydro" },
      { id: "s3", label: "DN100 (4\")", param1: "100 mm Bore", param2: "229 mm (ANSI 150#)", param3: "22.5 kg", param4: "30 Bar Hydro" },
      { id: "s4", label: "DN150 (6\")", param1: "150 mm Bore", param2: "394 mm (ANSI 300#)", param3: "48.0 kg", param4: "50 Bar Hydro" },
    ];
    features = [
      { number: "FEATURE 01", title: "Silica-Sol Investment Casting for Ra 3.2 µm As-Cast Finish", description: "Automated multi-layer zircon slurry shell dipping eliminates sand burn-in, delivering smooth internal fluid passages that minimize flow turbulence and head loss.", image: "/images/listings/investment-cast-valve.jpg", imageAlt: "Silica-Sol Investment Casting" },
      { number: "FEATURE 02", title: "ASTM A351 CF8M Austenitic Stainless Metallurgy", description: "Solution-annealed at 1050°C to dissolve carbides, providing maximum pitting resistance equivalent numbers (PREN > 24) in severe chloride marine and chemical environments.", image: "/images/gallery/verifycasting-ball-valve.png", imageAlt: "Austenitic Stainless Metallurgy" },
      { number: "FEATURE 03", title: "Precision Reamed Stem & Ball Cavity Tolerances", description: "Multi-axis CNC centers machine the internal ball cavity and blowout-proof stem bores in a single clamping datum, ensuring bubble-tight shutoff to API 598.", image: "/images/gallery/shivam-flange.png", imageAlt: "Precision Reamed Valve Cavity" },
    ];
    editorialTitle = "Why Process Engineers Specify Silica-Sol Investment Cast Valve Bodies";
    editorialText = "Chemical plants and offshore platforms demand zero fugitive emissions and leak-tight shutoff. Silica-sol investment cast stainless steel provides superior surface integrity and dimensional accuracy compared to conventional sand castings.";
  }

  // =========================================================================
  // 16. fl-018: VACUUM-PROCESS (V-PROCESS) HEAVY CAST MACHINE BASE (Castings)
  // =========================================================================
  else if (id === "fl-018" || title.includes("machine base")) {
    galleryImages = [
      { src: "/images/gallery/steelforge-forged-blocks.jpg", alt: "Massive Grey Iron HT250 Machine Base Bed Casting", caption: "Massive High-Damping Grey Iron Machine Base Bed", badge: "HT250 / Class 35" },
      { src: "/images/gallery/verifycasting-pump-body.png", alt: "Zero-Draft V-Process Internal Ribbing & Geometry", caption: "Zero-Draft V-Process Internal Ribbing & Way Geometry", badge: "V-Process Draft" },
      { src: "/images/capabilities/metal-casting.jpg", alt: "High-Damping Grey Iron Induction Melt & Pour Deck", caption: "Induction Furnace Cast Iron Melt Pour", badge: "1420°C Cast" },
      { src: "/images/gallery/cnc-machining-operation.jpg", alt: "5-Axis Precision Slideway Planing & Way Grinding", caption: "5-Axis Precision Slideway Planing & Way Grinding", badge: "Ra 1.6 µm Flat" },
      { src: "/images/gallery/steelforge-rings-250-rms.jpg", alt: "CMM Full-Bed Coordinate Measuring & Flatness Verification", caption: "CMM Full-Bed Coordinate Measuring & Flatness", badge: "0.01mm / m" },
      { src: "/images/gallery/packaging-dispatch.jpg", alt: "Heavy Timber Shipping Skid with Anti-Vibration Pads", caption: "Heavy Timber Shipping Skid with Anti-Vibration Pads", badge: "FOB Cleveland" },
    ];
    variants = [
      { id: "v1", name: "High-Damping Grey Iron HT250 / ASTM A48 Class 35", short: "HT250 Grey Iron", badge: "Superior Damping", priceOffset: 0, image: listing.imageUrl, swatchColor: "#475569" },
      { id: "v2", name: "Ductile Iron 65-45-12 High Shock Resistance Tier", short: "Ductile 65-45-12", badge: "High Dynamic Load", priceOffset: 850, image: listing.imageUrl, swatchColor: "#1e293b" },
      { id: "v3", name: "Stress-Relieved & Thermal Aging Annealed Tier", short: "Thermal Annealed", badge: "Zero Aging Drift", priceOffset: 450, image: listing.imageUrl, swatchColor: "#334155" },
    ];
    sizeTableHeader = ["Bed Model", "Overall Length", "Bed Width", "Casting Mass", "Slideway Flatness"];
    sizes = [
      { id: "s1", label: "Base 2.5m Tier", param1: "2,500 mm", param2: "1,200 mm", param3: "1,850 kg", param4: "0.012 mm / m" },
      { id: "s2", label: "Base 3.5m Tier", param1: "3,500 mm", param2: "1,450 mm", param3: "2,400 kg", param4: "0.010 mm / m" },
      { id: "s3", label: "Base 5.0m Tier", param1: "5,000 mm", param2: "1,800 mm", param3: "4,200 kg", param4: "0.008 mm / m" },
      { id: "s4", label: "Base 6.5m Heavy", param1: "6,500 mm", param2: "2,200 mm", param3: "6,800 kg", param4: "0.008 mm / m" },
    ];
    features = [
      { number: "FEATURE 01", title: "Vacuum-Sealed Molding (V-Process) Zero-Draft Architecture", description: "Utilizes plastic film under differential vacuum pressure to solidify dry, unbonded sand, producing dead-flat vertical ribs with zero pattern draft angle and silky Ra 3.2 µm finish.", image: "/images/gallery/steelforge-forged-blocks.jpg", imageAlt: "V-Process Zero Draft" },
      { number: "FEATURE 02", title: "Exceptional Vibration Damping Capacity (Class 35 Grey Iron)", description: "High flake graphite volume absorbs high-frequency chatter vibration 4x faster than steel weldments, ensuring flawless surface finishes during high-speed CNC milling.", image: "/images/gallery/verifycasting-pump-body.png", imageAlt: "Vibration Damping Grey Iron" },
      { number: "FEATURE 03", title: "Vibratory & Thermal Stress Relief for Permanent Dimensional Stability", description: "Double-cycle heat treatment eliminates internal residual solidification stresses, guaranteeing that precision guideways maintain sub-micron alignment over decades.", image: "/images/gallery/cnc-machining-operation.jpg", imageAlt: "Thermal Stress Relief" },
    ];
    editorialTitle = "Why Machine Tool Builders Choose V-Process Cast Iron Bases Over Fabricated Steel Beds";
    editorialText = "Precision 5-axis CNC machining centers and coordinate measuring machines depend on uncompromising bed stiffness and vibration attenuation. Grey iron cast via the V-process delivers superior thermal damping without internal sand inclusions.";
  }

  // =========================================================================
  // 17. fl-019: FORGED HIGH-PRESSURE FRAC PUMP FLUID END MONOBLOCK (Forgings)
  // =========================================================================
  else if (id === "fl-019" || title.includes("fluid end") || title.includes("frac pump")) {
    galleryImages = [
      { src: "/images/listings/frac-pump-fluid-end.jpg", alt: "Forged High-Pressure Frac Pump Fluid End Block", caption: "15,000 PSI AISI 4330V Modified Fluid End Block", badge: "Quintuplex Block" },
      { src: "/images/gallery/steelforge-forged-blocks.jpg", alt: "Open-Die Forged Block Ingot (SteelForge)", caption: "Open-Die Hydraulic Forged Monoblock Ingot", badge: "3.5:1 Reduction" },
      { src: "/images/gallery/carboforge-oil-gas.png", alt: "Companion Oil & Gas Valve Manifolds (CarboForge)", caption: "Companion Oil & Gas Valve Manifolds & Crosses", badge: "API 6A / 16C" },
      { src: "/images/gallery/steelforge-blind-flange.png", alt: "Deep CNC Gun-Drilling of Suction/Discharge Bores", caption: "Deep CNC Gun-Drilling of Suction/Discharge Bores", badge: "Ra 0.4 µm" },
      { src: "/images/gallery/shivam-flange.png", alt: "Autofrettaged Bore Threading & High-Pressure Sealing", caption: "Autofrettaged Bore Threading & High-Pressure Sealing", badge: "Zero Inclusions" },
      { src: "/images/gallery/packaging-dispatch.jpg", alt: "Heavy Timber Export Skid with VCI Shroud", caption: "Heavy Steel-Banded Timber Export Skid with VCI Shroud", badge: "ISPM-15 Ready" },
    ];
    variants = [
      { id: "v1", name: "AISI 4330V Modified High-Strength Alloy Steel", short: "4330V Mod", badge: "Standard Frac Fleet", priceOffset: 0, image: listing.imageUrl, swatchColor: "#1e293b" },
      { id: "v2", name: "Stainless Steel 17-4PH (Sour Gas Service)", short: "17-4PH SS", badge: "Corrosion Resistant", priceOffset: 6500, image: listing.imageUrl, swatchColor: "#94a3b8" },
      { id: "v3", name: "Nickel Alloy 718 Extreme Harsh Corrosive", short: "Inconel 718", badge: "Ultra Harsh Service", priceOffset: 14500, image: listing.imageUrl, swatchColor: "#0f172a" },
    ];
    sizeTableHeader = ["Pump Design", "Plunger Bore", "Pressure Rating", "Block Weight", "Proof Tensile"];
    sizes = [
      { id: "s1", label: "Triplex 4.5\" Bore", param1: "4.50 Inch", param2: "10,000 PSI", param3: "3,800 kg", param4: "950 MPa" },
      { id: "s2", label: "Triplex 5.0\" Bore", param1: "5.00 Inch", param2: "15,000 PSI", param3: "4,600 kg", param4: "1,050 MPa" },
      { id: "s3", label: "Quintuplex 4.5\" Bore", param1: "4.50 Inch", param2: "15,000 PSI", param3: "6,200 kg", param4: "1,050 MPa" },
      { id: "s4", label: "Quintuplex 5.5\" Bore", param1: "5.50 Inch", param2: "15,000 PSI", param3: "7,800 kg", param4: "1,100 MPa" },
    ];
    features = [
      { number: "FEATURE 01", title: "AISI 4330V Modified Metallurgy with 130 ksi Minimum Yield Strength", description: "Enriched with vanadium for fine grain structure and high fracture toughness, resisting cyclic fatigue crack propagation under 15,000 PSI pressure pulsations.", image: "/images/listings/frac-pump-fluid-end.jpg", imageAlt: "High Strength Alloy Metallurgy" },
      { number: "FEATURE 02", title: "Forged Open-Die Monoblock Structure Eliminating Weak Intersecting Bores", description: "Consolidated with 3.5:1 minimum forging reduction to seal all center-line shrinkage, providing isotropic mechanical properties across all valve bore intersections.", image: "/images/gallery/steelforge-forged-blocks.jpg", imageAlt: "Forged Monoblock Structure" },
      { number: "FEATURE 03", title: "NACE MR0175 / ISO 15156 Sour Service Crack Resistant Verification", description: "Meets strict hardness cap and Charpy V-notch impact toughness requirements (-40°C test) for dependable service in harsh oilfield fracturing basins.", image: "/images/gallery/carboforge-oil-gas.png", imageAlt: "Sour Service Crack Resistant" },
    ];
    editorialTitle = "Well Stimulation Equipment Reliability: Why Frac Operators Insist on Forged Fluid Ends";
    editorialText = "Hydraulic fracturing pumps operate continuously at 15,000 PSI with abrasive proppant slurry. Forged monoblock fluid ends eliminate microscopic casting defects and provide the fatigue endurance needed to prevent catastrophic field washouts.";
  }

  // =========================================================================
  // 18. fl-015 & fl-020: RIGGING HARDWARE & DROP FORGED SAFETY SHACKLES (Forgings)
  // =========================================================================
  else if (id === "fl-020" || title.includes("shackle")) {
    galleryImages = [
      { src: "/images/listings/forged-safety-shackle.jpg", alt: "Drop Forged Alloy Safety Bow Shackle", caption: "Grade 80 Drop Forged Alloy Steel Bow Shackle", badge: "55-Ton WLL" },
      { src: "/images/gallery/carboforge-hardware.png", alt: "Closed-Die Hot Forged Alloy Shackle Bodies (CarboForge)", caption: "Closed-Die Hot Forged Alloy Shackle Bodies & Pins", badge: "ASME B30.26" },
      { src: "/images/gallery/carboforge-steel-forgings-8.png", alt: "Companion Heavy Rigging Hooks & Turnbuckles", caption: "Companion Heavy Rigging Hooks, Eyebolts & Turnbuckles", badge: "Grade 80 Rigging" },
      { src: "/images/gallery/carboforge-steel-forgings-4.png", alt: "Companion Heavy Lifting Eyebolts & Swivel Hoist Rings", caption: "Companion Heavy Lifting Eyebolts & Swivel Rings", badge: "Tight Tolerance" },
      { src: "/images/gallery/shivam-flange.png", alt: "CNC Threading of Shackle Eye & Pin Alignment", caption: "CNC Threading of Shackle Eye & Precision Pin Alignment", badge: "2x Proof Tested" },
      { src: "/images/gallery/packaging-dispatch.jpg", alt: "Export Steel Kegs & Heavy Pallet Staging", caption: "Export Steel Kegs & Heavy Pallet Staging", badge: "EN 13889 Certified" },
    ];
    variants = [
      { id: "v1", name: "High-Strength Quenched & Tempered Alloy Steel", short: "Grade 80 Q&T", badge: "Standard Heavy Rigging", priceOffset: 0, image: listing.imageUrl, swatchColor: "#475569" },
      { id: "v2", name: "Grade 100 Ultra-High Tensile Lifting Tier", short: "Grade 100", badge: "25% Higher WLL", priceOffset: 35, image: listing.imageUrl, swatchColor: "#1e293b" },
      { id: "v3", name: "Hot-Dip Galvanized Marine Corrosion Finish", short: "HDG Marine", badge: "Offshore Salt Spray", priceOffset: 18, image: listing.imageUrl, swatchColor: "#94a3b8" },
    ];
    sizeTableHeader = ["Working Load (WLL)", "Nominal Size", "Pin Diameter", "Jaw Width", "Proof Test Load"];
    sizes = [
      { id: "s1", label: "8.5 Ton WLL Tier", param1: "1.00 Inch (25 mm)", param2: "28 mm Pin", param3: "43 mm Jaw", param4: "170 kN (Proof)" },
      { id: "s2", label: "12.0 Ton WLL Tier", param1: "1.25 Inch (32 mm)", param2: "35 mm Pin", param3: "51 mm Jaw", param4: "240 kN (Proof)" },
      { id: "s3", label: "17.0 Ton WLL Tier", param1: "1.50 Inch (38 mm)", param2: "42 mm Pin", param3: "60 mm Jaw", param4: "340 kN (Proof)" },
      { id: "s4", label: "25.0 Ton WLL Tier", param1: "1.75 Inch (45 mm)", param2: "51 mm Pin", param3: "74 mm Jaw", param4: "500 kN (Proof)" },
      { id: "s5", label: "55.0 Ton WLL Tier", param1: "2.25 Inch (57 mm)", param2: "65 mm Pin", param3: "95 mm Jaw", param4: "1,100 kN (Proof)" },
    ];
    features = [
      { number: "FEATURE 01", title: "5:1 Safety Factor Exceeding ASME B30.26 & EN 13889 Requirements", description: "Engineered with a true safety factor guaranteeing extreme plastic deformation warnings well before catastrophic rupture under overload conditions.", image: "/images/listings/forged-safety-shackle.jpg", imageAlt: "5:1 Safety Factor" },
      { number: "FEATURE 02", title: "Heat-Treated Quenched & Tempered Microstructure with Sub-Zero Toughness", description: "Closed-die drop forged from high-grade alloy steel and heat-treated to retain minimum 40 Joules Charpy impact toughness at -20°C for arctic construction and offshore marine lifts.", image: "/images/gallery/carboforge-hardware.png", imageAlt: "Heat Treated Alloy Microstructure" },
      { number: "FEATURE 03", title: "Individually Proof-Tested to 200% WLL with Traceable Serial Number Stamp", description: "Every shackle bow and bolt pin is proof-load tested on a calibrated tensile bed and permanently stamped with batch heat codes and CE conformity marks.", image: "/images/gallery/carboforge-steel-forgings-8.png", imageAlt: "Proof Load Testing Certification" },
    ];
    editorialTitle = "Critical Lifting Safety: Why Rigging Engineers Trust Drop Forged Alloy Shackles";
    editorialText = "Overhead lifting applications require uncompromising reliability. Drop forged alloy steel shackles eliminate the brittle failure risks of cast iron or low-carbon steel, providing ductile elongation under overload and certified traceability.";
  }

  // =========================================================================
  // DEFAULT / FALLBACK SCENARIO
  // =========================================================================
  else {
    galleryImages = [
      { src: listing.imageUrl, alt: listing.title, caption: "Finished Product Inspection", badge: "Pre-Tested" },
      { src: "/images/gallery/verifycasting-pump-body.png", alt: "Precision Heavy Industrial Component", caption: "High-Precision Industrial Component", badge: "ISO 9001" },
      { src: "/images/capabilities/metal-casting.jpg", alt: "High-Temperature Metallurgical Processing", caption: "Metallurgical Processing & Pouring", badge: "Heat Traceable" },
      { src: "/images/gallery/cnc-machining-operation.jpg", alt: "Precision CNC Machining & Datum Alignment", caption: "Precision CNC Machining & Datum Alignment", badge: "Tight Tolerance" },
      { src: "/images/gallery/steelforge-forged-blocks.jpg", alt: "Quality Assurance NDT Inspection Staging", caption: "Quality Assurance NDT Verification", badge: "100% Tested" },
      { src: "/images/gallery/packaging-dispatch.jpg", alt: "ISPM-15 Heavy Timber Export Packaging", caption: "ISPM-15 Heavy Timber Export Packaging", badge: "FOB Ready" },
    ];
    variants = [
      { id: "v1", name: listing.alloySpec, short: "Default Spec", badge: "OEM Baseline", priceOffset: 0, image: listing.imageUrl, swatchColor: "#64748b" },
      { id: "v2", name: "High-Tensile Quenched & Tempered Grade", short: "High Tensile", badge: "High Toughness", priceOffset: 250, image: listing.imageUrl, swatchColor: "#475569" },
      { id: "v3", name: "Corrosion-Resistant Stainless Grade", short: "Stainless Spec", badge: "Corrosion Proof", priceOffset: 650, image: listing.imageUrl, swatchColor: "#94a3b8" },
    ];
    sizeTableHeader = ["Size / Rating", "Dimension 1", "Dimension 2", "Total Mass", "Pressure / Rating"];
    sizes = [
      { id: "s1", label: "Tier 1", param1: "Standard 1", param2: "Fit 1", param3: "120 kg", param4: "Certified" },
      { id: "s2", label: "Tier 2", param1: "Standard 2", param2: "Fit 2", param3: "240 kg", param4: "Certified" },
      { id: "s3", label: "Tier 3", param1: "Standard 3", param2: "Fit 3", param3: "480 kg", param4: "Certified" },
    ];
    features = [
      { number: "FEATURE 01", title: "Engineered Microstructure & Strict Inoculation", description: "Treated with precise inoculants ensuring homogenous metallurgy and exceptional compressive strength.", image: listing.imageUrl, imageAlt: "Engineered Microstructure" },
      { number: "FEATURE 02", title: "100% Quality Assurance & Non-Destructive Testing", description: "Volumetrically inspected and tested to governing standards with third-party verification.", image: "/images/gallery/steelforge-forged-blocks.jpg", imageAlt: "Quality Assurance" },
      { number: "FEATURE 03", title: "Precision 5-Axis CNC Machining", description: "Finished with precision CNC sealing faces and reamed bolt holes for effortless field assembly.", image: "/images/gallery/cnc-machining-operation.jpg", imageAlt: "Precision CNC Machining" },
    ];
  }

  // 3. Build Spec Rows
  const specRows: DetailSpecRow[] = [
    { label: "Product Listing ID", value: listing.id, highlight: true },
    { label: "Primary Category", value: listing.category },
    { label: "Material / Alloy Specification", value: listing.alloySpec, highlight: true },
    { label: "Weight / Nominal Capacity", value: listing.weightOrCapacity },
    { label: "Governing Standards", value: listing.standards.join(" • ") },
    { label: "Inventory / Lead Time", value: listing.leadTime },
    { label: "Stock Location", value: listing.location },
    { label: "Verified Vendor", value: listing.vendorName + (listing.vendorVerified ? " (Pre-Audited ✓)" : "") },
    { label: "Inspection & Certification", value: "EN 10204 3.1 MTR • 100% Volumetric Ultrasonic / Pressure Tested" },
  ];

  // 4. Point 4: Generate Metallurgy, Documents, Supplier Dossier & FAQs
  const metallurgyData = getMetallurgyAndTrustData(listing);

  return {
    parsedBasePrice,
    priceSuffix,
    listPrice,
    galleryImages,
    videoPoster: listing.imageUrl,
    videoTitle: `${listing.title} • Live QA Video`,
    variants,
    sizes,
    sizeTableHeader,
    features,
    specRows,
    editorialBadge,
    editorialTitle,
    editorialText,
    painPointsTitle,
    painPoints,
    chemicalComposition: metallurgyData.chemicalComposition,
    mechanicalProperties: metallurgyData.mechanicalProperties,
    microstructure: metallurgyData.microstructure,
    technicalDocs: metallurgyData.technicalDocs,
    supplierDossier: metallurgyData.supplierDossier,
    faqs: metallurgyData.faqs
  };
}

// =========================================================================
// POINT 4: METALLURGICAL MATRIX, TECHNICAL DOCS & SUPPLIER DOSSIER ENGINE
// =========================================================================
function getMetallurgyAndTrustData(listing: ProductListing) {
  const cat = listing.category.toLowerCase();
  const alloy = listing.alloySpec.toLowerCase();

  let chemicalComposition: DetailChemicalElement[] = [];
  let mechanicalProperties: DetailMechanicalProperty[] = [];
  let microstructure: DetailMicrostructure;

  // 1. DUCTILE / GREY CAST IRON
  if (alloy.includes("ductile") || alloy.includes("a536") || alloy.includes("en-gjs") || alloy.includes("grey iron") || alloy.includes("ht250") || alloy.includes("a48")) {
    chemicalComposition = [
      { element: "C", name: "Carbon", standardRange: "3.40 – 3.85%", actualValue: "3.64%", status: "compliant" },
      { element: "Si", name: "Silicon", standardRange: "2.30 – 2.80%", actualValue: "2.52%", status: "compliant" },
      { element: "Mn", name: "Manganese", standardRange: "0.15 – 0.40%", actualValue: "0.27%", status: "compliant" },
      { element: "P", name: "Phosphorus", standardRange: "≤ 0.040%", actualValue: "0.018%", status: "pass" },
      { element: "S", name: "Sulfur", standardRange: "≤ 0.015%", actualValue: "0.007%", status: "pass" },
      { element: "Mg", name: "Magnesium (Nodularizer)", standardRange: "0.035 – 0.055%", actualValue: "0.042%", status: "compliant" },
      { element: "Cu", name: "Copper", standardRange: "≤ 0.20%", actualValue: "0.06%", status: "pass" },
      { element: "Fe", name: "Iron Base", standardRange: "Balance", actualValue: "93.44%", status: "compliant" },
    ];
    mechanicalProperties = [
      { property: "Tensile Strength (Rm)", standardReq: "≥ 400 MPa (58 ksi)", actualValue: "448 MPa (65.0 ksi)", testMethod: "ASTM E8M / ISO 6892-1" },
      { property: "Yield Strength (Rp0.2)", standardReq: "≥ 250 MPa (36 ksi)", actualValue: "284 MPa (41.2 ksi)", testMethod: "ASTM E8M / ISO 6892-1" },
      { property: "Elongation at Break (A5)", standardReq: "≥ 15.0%", actualValue: "18.4%", testMethod: "ASTM E8M Gauge L0=50mm" },
      { property: "Brinell Hardness (HBW 10/3000)", standardReq: "130 – 180 HBW", actualValue: "158 HBW", testMethod: "ASTM E10 / ISO 6506-1" },
      { property: "Charpy V-Notch Impact (-20°C)", standardReq: "≥ 12 Joules", actualValue: "15.8 Joules", testMethod: "ASTM E23 / ISO 148-1" },
    ];
    microstructure = {
      matrix: "> 85% Ferrite, < 15% Pearlite (Ferritic-Pearlitic ductile matrix)",
      nodularityOrGrain: "≥ 90% Nodularity (Type I & II Spheroidal Graphite per ASTM A247)",
      inclusionRating: "JK Class A/B/C/D Severity ≤ 0.5 per ASTM E45 Method A",
      heatTreatmentCondition: "As-cast with controlled mold-cooling & stress-relieving",
    };
  }
  // 2. FORGED CARBON & ALLOY STEEL (4140, 4330V, A105, A182, F316L, 1045, etc.)
  else if (cat.includes("forging") || alloy.includes("4140") || alloy.includes("4330") || alloy.includes("a105") || alloy.includes("a182") || alloy.includes("forged") || alloy.includes("shackle")) {
    chemicalComposition = [
      { element: "C", name: "Carbon", standardRange: "0.38 – 0.43%", actualValue: "0.41%", status: "compliant" },
      { element: "Mn", name: "Manganese", standardRange: "0.75 – 1.00%", actualValue: "0.86%", status: "compliant" },
      { element: "Cr", name: "Chromium", standardRange: "0.80 – 1.10%", actualValue: "0.98%", status: "compliant" },
      { element: "Mo", name: "Molybdenum", standardRange: "0.15 – 0.25%", actualValue: "0.22%", status: "compliant" },
      { element: "Si", name: "Silicon", standardRange: "0.15 – 0.35%", actualValue: "0.27%", status: "compliant" },
      { element: "Ni", name: "Nickel", standardRange: "≤ 0.25%", actualValue: "0.12%", status: "pass" },
      { element: "P", name: "Phosphorus", standardRange: "≤ 0.025%", actualValue: "0.011%", status: "pass" },
      { element: "S", name: "Sulfur", standardRange: "≤ 0.015%", actualValue: "0.004%", status: "pass" },
    ];
    mechanicalProperties = [
      { property: "Tensile Strength (Rm)", standardReq: "≥ 850 MPa (123 ksi)", actualValue: "945 MPa (137.1 ksi)", testMethod: "ASTM A370 / ISO 6892-1" },
      { property: "Yield Strength (Rp0.2)", standardReq: "≥ 650 MPa (94 ksi)", actualValue: "735 MPa (106.6 ksi)", testMethod: "ASTM A370 / ISO 6892-1" },
      { property: "Elongation (A5)", standardReq: "≥ 14.0%", actualValue: "17.2%", testMethod: "ASTM A370 Longitudinal" },
      { property: "Reduction of Area (Z)", standardReq: "≥ 45.0%", actualValue: "53.5%", testMethod: "ASTM A370" },
      { property: "Charpy V-Notch Impact (-40°C)", standardReq: "≥ 42 Joules", actualValue: "64 Joules", testMethod: "ASTM E23 Sub-zero Charpy" },
      { property: "Surface Hardness", standardReq: "260 – 310 HBW", actualValue: "282 HBW", testMethod: "ASTM E10 Brinell" },
    ];
    microstructure = {
      matrix: "Tempered Martensite with uniform fine-grain carbide dispersion",
      nodularityOrGrain: "Prior Austenite Grain Size ASTM 7 – 8 per ASTM E112",
      inclusionRating: "Non-metallic inclusions JK Thin ≤ 1.0, Heavy ≤ 0.5 per ASTM E45",
      heatTreatmentCondition: "Normalized 880°C, Quenched 850°C Oil, Tempered 610°C",
    };
  }
  // 3. HIGH CHROME / HADFIELD MANGANESE WEAR ALLOY
  else if (alloy.includes("chrome") || alloy.includes("a532") || alloy.includes("manganese") || alloy.includes("a128") || alloy.includes("crusher")) {
    chemicalComposition = [
      { element: "Cr", name: "Chromium", standardRange: "24.0 – 28.0%", actualValue: "26.2%", status: "compliant" },
      { element: "C", name: "Carbon", standardRange: "2.60 – 3.30%", actualValue: "2.95%", status: "compliant" },
      { element: "Mo", name: "Molybdenum", standardRange: "1.00 – 2.50%", actualValue: "1.85%", status: "compliant" },
      { element: "Mn", name: "Manganese", standardRange: "0.50 – 1.50%", actualValue: "0.92%", status: "compliant" },
      { element: "Si", name: "Silicon", standardRange: "0.30 – 0.80%", actualValue: "0.58%", status: "compliant" },
      { element: "Ni", name: "Nickel", standardRange: "≤ 1.50%", actualValue: "0.84%", status: "compliant" },
      { element: "P", name: "Phosphorus", standardRange: "≤ 0.050%", actualValue: "0.024%", status: "pass" },
      { element: "S", name: "Sulfur", standardRange: "≤ 0.040%", actualValue: "0.012%", status: "pass" },
    ];
    mechanicalProperties = [
      { property: "Rockwell C Hardness (HRC)", standardReq: "62 – 66 HRC", actualValue: "64.2 HRC", testMethod: "ASTM E18 / ISO 6508" },
      { property: "Compressive Strength", standardReq: "≥ 2,200 MPa", actualValue: "2,460 MPa", testMethod: "ASTM E9 Cylindrical" },
      { property: "Transverse Rupture Strength", standardReq: "≥ 650 MPa", actualValue: "725 MPa", testMethod: "ISO 3327 3-Point Bend" },
      { property: "Micro-Hardness (Eutectic Carbides)", standardReq: "1,400 – 1,800 HV0.1", actualValue: "1,620 HV0.1", testMethod: "ASTM E384 Vickers" },
    ];
    microstructure = {
      matrix: "High-hardness martensitic matrix with discontinuous M7C3 eutectic carbides",
      nodularityOrGrain: "Carbide Volume Fraction: 32 – 36% with titanium grain inoculant",
      inclusionRating: "Deoxidized with calcium-silicon to prevent brittle boundary stringers",
      heatTreatmentCondition: "Destabilization heat treatment at 980°C, forced air quench, double sub-critical temper",
    };
  }
  // 4. STAINLESS STEEL / INVESTMENT CAST
  else if (alloy.includes("cf8m") || alloy.includes("316") || alloy.includes("stainless") || alloy.includes("cf8")) {
    chemicalComposition = [
      { element: "Cr", name: "Chromium", standardRange: "18.0 – 21.0%", actualValue: "19.35%", status: "compliant" },
      { element: "Ni", name: "Nickel", standardRange: "9.0 – 12.0%", actualValue: "10.45%", status: "compliant" },
      { element: "Mo", name: "Molybdenum", standardRange: "2.0 – 3.0%", actualValue: "2.42%", status: "compliant" },
      { element: "C", name: "Carbon", standardRange: "≤ 0.080%", actualValue: "0.038%", status: "pass" },
      { element: "Mn", name: "Manganese", standardRange: "≤ 1.50%", actualValue: "1.10%", status: "compliant" },
      { element: "Si", name: "Silicon", standardRange: "≤ 1.50%", actualValue: "0.82%", status: "compliant" },
      { element: "P", name: "Phosphorus", standardRange: "≤ 0.040%", actualValue: "0.021%", status: "pass" },
      { element: "S", name: "Sulfur", standardRange: "≤ 0.020%", actualValue: "0.008%", status: "pass" },
    ];
    mechanicalProperties = [
      { property: "Tensile Strength (Rm)", standardReq: "≥ 485 MPa (70 ksi)", actualValue: "565 MPa (81.9 ksi)", testMethod: "ASTM A370 / ASTM E8" },
      { property: "Yield Strength (Rp0.2)", standardReq: "≥ 205 MPa (30 ksi)", actualValue: "252 MPa (36.5 ksi)", testMethod: "ASTM A370 0.2% Offset" },
      { property: "Elongation (A5)", standardReq: "≥ 30.0%", actualValue: "44.5%", testMethod: "ASTM A370" },
      { property: "Brinell Hardness", standardReq: "≤ 180 HBW", actualValue: "155 HBW", testMethod: "ASTM E10" },
      { property: "Intergranular Corrosion Test", standardReq: "No sensitization", actualValue: "Passed Practice E (168h CuSO4)", testMethod: "ASTM A262 Practice E" },
    ];
    microstructure = {
      matrix: "Austenitic matrix with 8 – 12% delta ferrite for hot-cracking prevention",
      nodularityOrGrain: "Grain size ASTM 5 – 7 uniform equiaxed investment shell structure",
      inclusionRating: "Vacuum induction degassed, low sulfur/phosphorus clean melt",
      heatTreatmentCondition: "Solution Annealed at 1080°C followed by rapid water quench",
    };
  }
  // 5. EQUIPMENT & MACHINERY METALLURGICAL / STRUCTURAL DEFAULTS
  else {
    chemicalComposition = [
      { element: "Fe", name: "Structural Iron/Steel Base", standardRange: "Machinery Spec", actualValue: "Verified Heat", status: "compliant" },
      { element: "C", name: "Carbon", standardRange: "0.20 – 0.45%", actualValue: "0.32%", status: "compliant" },
      { element: "Mn", name: "Manganese", standardRange: "0.60 – 1.20%", actualValue: "0.88%", status: "compliant" },
      { element: "Si", name: "Silicon", standardRange: "0.20 – 0.60%", actualValue: "0.35%", status: "compliant" },
      { element: "Cr", name: "Chromium / Alloy Additions", standardRange: "OEM Certified", actualValue: "0.65%", status: "compliant" },
      { element: "P", name: "Phosphorus", standardRange: "≤ 0.035%", actualValue: "0.016%", status: "pass" },
      { element: "S", name: "Sulfur", standardRange: "≤ 0.035%", actualValue: "0.012%", status: "pass" },
    ];
    mechanicalProperties = [
      { property: "Design Working Pressure / Load Capacity", standardReq: "Governing Machine Rating", actualValue: "100% Certified FAT Load", testMethod: "Factory Acceptance Test (FAT)" },
      { property: "Structural Weldment Integrity", standardReq: "AWS D1.1 / ISO 5817 Level B", actualValue: "100% UT / Magnetic Particle Inspected", testMethod: "ASTM E164 Ultrasonic" },
      { property: "Dynamic Vibration Damping", standardReq: "ISO 10816-1 Class I/II", actualValue: "< 1.2 mm/s RMS (Precision Smooth)", testMethod: "Tri-axial FFT Spectral Sensor" },
      { property: "Thermal Uniformity Survey (TUS)", standardReq: "AMS 2750G / CQI-9 Class 2", actualValue: "± 4.5°C across all hearth zones", testMethod: "9-Point Thermocouple Grid" },
    ];
    microstructure = {
      matrix: "Stress-relieved Normalized Pearlitic-Ferritic machine structure",
      nodularityOrGrain: "Vibration-absorbing graphite flake network / fine-grain steel weldment",
      inclusionRating: "Certified structural steel grade per EN 10025-2 S355J2 / ASTM A36",
      heatTreatmentCondition: "Vibratory / Thermal stress relief at 580°C for dimensional stability",
    };
  }

  // TECHNICAL DOWNLOAD DOCUMENTS
  const technicalDocs: DetailTechnicalDoc[] = [
    {
      id: "doc-mtr",
      title: "Certified Mill Test Report (EN 10204 3.1 MTR)",
      format: "PDF",
      size: "1.4 MB",
      type: "Mill Test Certificate",
      badge: "Heat Traceable",
      description: "Direct Optical Emission Spectrometry (OES) chemical assay, tensile/yield test bars, Charpy impact pulls, and raw ladle heat numbers."
    },
    {
      id: "doc-cmm",
      title: "First Article CMM Laser Metrology & Inspection Report",
      format: "PDF",
      size: "2.8 MB",
      type: "Inspection Report",
      badge: "ISO 8062 CT5",
      description: "Full 3D coordinate measuring machine (Zeiss CMM) datum inspection, true position tolerances, concentricity, and flange face flatness."
    },
    {
      id: "doc-cad",
      title: "3D Solid Neutral CAD Engineering Model",
      format: "STEP",
      size: "14.2 MB",
      type: "CAD Model",
      badge: "STEP AP242",
      description: "Production-ready 3D boundary model with exact machining allowances, draft angles, shrinkage compensations, and datum planes."
    },
    {
      id: "doc-spec",
      title: "Technical Engineering Datasheet & Tolerancing Manual",
      format: "PDF",
      size: "950 KB",
      type: "Datasheet",
      badge: "ASTM / ISO",
      description: "Complete design guide covering hydrotest pressure envelope, bolt torquing patterns, rigging points, and mating flange specs."
    }
  ];

  // SUPPLIER & FACILITY DOSSIER
  const supplierDossier: DetailSupplierDossier = {
    foundryName: listing.vendorName,
    headquarters: listing.location,
    established: 1984,
    meltCapacity: "45,000 MT Annual Melt Capacity",
    certifications: [
      "ISO 9001:2015 Quality Management",
      "IATF 16949:2016 Automotive Standard",
      "PED 2014/68/EU Pressure Equipment Directive",
      "AD 2000-Merkblatt W0 Technical Spec",
      "ISO 14001:2015 Environmental System",
      "ISO 45001 Occupational Health & Safety"
    ],
    inspectionAgencies: [
      "TÜV SÜD",
      "SGS Industrial Services",
      "Lloyd's Register",
      "DNV GL",
      "Bureau Veritas"
    ],
    furnaces: "2x 5.0 MT Medium Frequency Coreless Induction Furnaces (Inductotherm VIP Power-Trak)",
    testingLab: "Thermo Fisher 32-Channel Spark OES Spectrometer, 1000 kN Schenck Tensile Pull Frame, Krautkramer USM 36 Ultrasonic Detector, Zeiss Accura 3D CMM",
    verifiedDate: "Verified Q4 2026 (Foundry Exchange Compliance On-Site Audit)",
    badge: "Verified Tier-1 Casting & Forge Facility"
  };

  // TECHNICAL PROCUREMENT FAQS
  const faqs: DetailFAQ[] = [
    {
      question: "What is the Minimum Order Quantity (MOQ) and sample lot policy?",
      answer: "For Ready Stock inventory, the MOQ is 1 unit (single lot trial). For repeat Made-to-Order foundry heats or closed-die forging runs, minimum economical batch sizes start at 5 units or 1,500 kg total heat weight. Pre-series prototype sample castings can be poured prior to full production release."
    },
    {
      question: "Are Material Test Reports (MTR 3.1) and heat numbers supplied with every order?",
      answer: "Yes. Every shipment is accompanied by a certified EN 10204 Type 3.1 Inspection Certificate. Chemical composition is verified via Optical Emission Spectrometry (OES), and physical test coupons are poured from the identical ladle heat and tested for tensile, yield, elongation, and Charpy impact."
    },
    {
      question: "Who owns the foundry pattern tooling or forging dies after fabrication?",
      answer: "Tooling is 100% customer-owned upon payment of the tooling invoice. Tooling matchplates and dies are stamped with your corporate asset serial number, maintained with preventative repair, and stored free of charge in our climate-controlled tooling vault for up to 3 years between production orders."
    },
    {
      question: "Can we appoint an independent third-party inspection (TPI) agency before dispatch?",
      answer: "Absolutely. We routinely host pre-shipment witness testing and factory acceptance audits by TÜV, SGS, DNV, Lloyd's Register, or your internal QA team. Inspection scopes can include dimensional CMM verification, magnetic particle testing (MPI), liquid penetrant (PT), ultrasonic testing (UT), or hydrostatic pressure tests."
    },
    {
      question: "How does the Foundry Exchange Escrow and Quality Guarantee protect buyers?",
      answer: "Your payment is deposited into secure neutral escrow at the time of purchase. Funds are never released to the foundry or forge until the material arrives at your facility and your quality control team inspects and approves the dimensional CMM report and MTR certifications within the agreed acceptance window."
    },
    {
      question: "What export packing and shipping incoterms are available?",
      answer: "All orders are packaged in ISPM-15 certified heat-treated timber crates with VCI (Vapor Corrosion Inhibitor) plastic encapsulation and moisture-absorbing desiccant packs. Standard quotes are FOB Port of Origin, with optional turnkey CIF destination port or DDP to your plant receiving dock."
    }
  ];

  return {
    chemicalComposition,
    mechanicalProperties,
    microstructure,
    technicalDocs,
    supplierDossier,
    faqs
  };
}
