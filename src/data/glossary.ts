export type GlossaryCategory =
  | "Melt Shop & Chemistry"
  | "Molding & Tooling"
  | "Forging & Presswork"
  | "QA, Lab & NDT"
  | "Heat Treatment"
  | "Defect Prevention"
  | "Standards & Specs";

export interface GlossaryTerm {
  term: string;
  category: GlossaryCategory;
  letter: string;
  definition: string;
  industrialSignificance: string;
  astmOrIsoSpec?: string;
  relatedCategoryHref?: string;
  relatedCategoryLabel?: string;
}

export const glossaryCategories: GlossaryCategory[] = [
  "Melt Shop & Chemistry",
  "Molding & Tooling",
  "Forging & Presswork",
  "QA, Lab & NDT",
  "Heat Treatment",
  "Defect Prevention",
  "Standards & Specs",
];

export const glossaryTerms: GlossaryTerm[] = [
  // --- A ---
  {
    term: "Austempering (ADI)",
    category: "Heat Treatment",
    letter: "A",
    definition:
      "An isothermal heat-treating cycle consisting of austenitizing followed by rapid quenching into a molten salt bath at 450°F–750°F (230°C–400°C), transforming ductile iron into Austempered Ductile Iron (ADI).",
    industrialSignificance:
      "Produces ausferrite matrix achieving tensile strengths above 1600 MPa with exceptional abrasion resistance, replacing forged steel gears and pinions.",
    astmOrIsoSpec: "ASTM A897 / ISO 17804",
    relatedCategoryHref: "/marketplace/castings",
    relatedCategoryLabel: "Explore ADI Castings",
  },
  {
    term: "ASTM A536",
    category: "Standards & Specs",
    letter: "A",
    definition:
      "The North American standard specification for ductile iron castings, designating mechanical grades by tensile strength, yield strength, and elongation (e.g., 65-45-12 or 80-55-06).",
    industrialSignificance:
      "The benchmark baseline specification used by Tier-1 automotive, mining, and oilfield OEMs for ductile iron casting procurement across USA and Canada.",
    astmOrIsoSpec: "ASTM A536-84(2019)",
    relatedCategoryHref: "/marketplace/castings",
    relatedCategoryLabel: "Browse ASTM A536 Lots",
  },
  {
    term: "AFS Grain Fineness Number (GFN)",
    category: "Molding & Tooling",
    letter: "A",
    definition:
      "A standard American Foundry Society rating indicating the average particle size of silica or chromite sand used in molding and coremaking.",
    industrialSignificance:
      "Higher GFN (65–75) delivers finer casting surface finish (RMS 125), while lower GFN (45–55) optimizes gas permeability in heavy iron sections.",
    astmOrIsoSpec: "AFS Mold & Core Test Handbook",
    relatedCategoryHref: "/marketplace/raw-materials",
    relatedCategoryLabel: "AFS Silica Sand Lots",
  },
  {
    term: "Argon Oxygen Decarburization (AOD)",
    category: "Melt Shop & Chemistry",
    letter: "A",
    definition:
      "A secondary ladle refining process that injects argon and oxygen to reduce carbon in molten steel without excessive oxidation of valuable chromium or nickel.",
    industrialSignificance:
      "Essential for producing high-purity duplex (2205) and austenitic stainless steels (316L) with ultra-low carbon (<0.03%) for corrosion resistance.",
    astmOrIsoSpec: "ASTM A351 / A890",
    relatedCategoryHref: "/marketplace/equipment",
    relatedCategoryLabel: "Refining Equipment",
  },

  // --- B ---
  {
    term: "Brinell Hardness (HBW)",
    category: "QA, Lab & NDT",
    letter: "B",
    definition:
      "A standardized indentation hardness test (ASTM E10) using a 10 mm tungsten carbide ball under a 3000 kgf load to calculate hardness from impression diameter.",
    industrialSignificance:
      "The mandatory macro-hardness standard for foundry castings because the large indent averages local microstructural variations between ferrite, pearlite, and graphite.",
    astmOrIsoSpec: "ASTM E10 / ISO 6506",
    relatedCategoryHref: "/marketplace/testing-inspection",
    relatedCategoryLabel: "Hardness Testing Equipment",
  },
  {
    term: "Bottom-Pour Ladle",
    category: "Melt Shop & Chemistry",
    letter: "B",
    definition:
      "A heavy refractory-lined steel teeming ladle equipped with a bottom nozzle and vertical stopper rod or slide gate mechanism for pouring liquid melt from the vessel bottom.",
    industrialSignificance:
      "Guarantees clean metal entry into the mold by preventing surface slag and oxidized dross from entering the runner system, standard for 5-ton to 50-ton steel pours.",
    astmOrIsoSpec: "AISE Standard No. 9",
    relatedCategoryHref: "/marketplace/equipment",
    relatedCategoryLabel: "Pouring Ladles & Preheaters",
  },
  {
    term: "Bentonite Binder",
    category: "Molding & Tooling",
    letter: "B",
    definition:
      "A natural montmorillonite clay mineral (Western sodium bentonite or Southern calcium bentonite) activated with water to form the cohesive bonding agent in green sand.",
    industrialSignificance:
      "Provides both green compression strength (unbaked strength) and dry shear strength, permitting automated flaskless mold handling at 180 molds/hour.",
    astmOrIsoSpec: "AFS 210-00-S",
    relatedCategoryHref: "/marketplace/raw-materials",
    relatedCategoryLabel: "Foundry Clays & Binders",
  },

  // --- C ---
  {
    term: "Carbon Equivalent (CE)",
    category: "Melt Shop & Chemistry",
    letter: "C",
    definition:
      "A calculated empirical formula: CE = %C + (%Si + %P) / 3, expressing the combined metallurgical effect of carbon, silicon, and phosphorus on the eutectic solidification point of cast iron.",
    industrialSignificance:
      "Foundries maintain hypoeutectic (CE 4.10–4.25) for high-strength grey iron, or near-eutectic (CE 4.30–4.45) for ductile iron to maximize mold fluidity and prevent shrinkage cavities.",
    astmOrIsoSpec: "ASTM A48 / A536",
    relatedCategoryHref: "/marketplace/raw-materials",
    relatedCategoryLabel: "Pig Iron & Scrap Lots",
  },
  {
    term: "Charpy V-Notch (CVN)",
    category: "QA, Lab & NDT",
    letter: "C",
    definition:
      "A standardized high-strain-rate impact test (ASTM E23) measuring the kinetic energy (in Joules or ft-lbs) absorbed by a 10 mm notched bar during dynamic fracture at specified test temperatures.",
    industrialSignificance:
      "Mandatory for sub-zero oilfield and rail components (-20°F or -46°C / -50°F) to ensure cast and forged alloys avoid brittle catastrophic failure under impact.",
    astmOrIsoSpec: "ASTM E23 / ISO 148-1",
    relatedCategoryHref: "/marketplace/testing-inspection",
    relatedCategoryLabel: "Impact Testing & Lab QA",
  },
  {
    term: "Chill (Internal & External)",
    category: "Molding & Tooling",
    letter: "C",
    definition:
      "Metal inserts placed inside the mold cavity (internal chill) or against the mold face (external chill) to accelerate localized solidification in heavy casting junctions.",
    industrialSignificance:
      "Promotes directional solidification toward the riser, eliminating isolated shrink pores in isolated boss sections where direct feeding is physically impossible.",
    astmOrIsoSpec: "AFS Foundry Tooling Guide",
    relatedCategoryHref: "/marketplace/tooling",
    relatedCategoryLabel: "Molds, Cores & Die Tooling",
  },
  {
    term: "Chvorinov's Rule",
    category: "Molding & Tooling",
    letter: "C",
    definition:
      "The governing solidification law: Total Solidification Time t = B * (V / A)^n, where V is volume, A is cooling surface area, B is mold constant, and n ≈ 2.",
    industrialSignificance:
      "Used by gating design engineers to size risers so their modulus (V/A) exceeds the casting modulus by at least 20%, ensuring the riser remains molten longer than the casting.",
    astmOrIsoSpec: "Metallurgical Gating Handbook",
    relatedCategoryHref: "/marketplace/tooling",
    relatedCategoryLabel: "Gating & Pattern Tooling",
  },
  {
    term: "Closed-Die Forging",
    category: "Forging & Presswork",
    letter: "C",
    definition:
      "A precision impression metal deformation process where heated billets are struck inside machined upper and lower dies that completely enclose the workpiece.",
    industrialSignificance:
      "Forces metal to fill intricate geometry with flash relief, achieving exceptional continuous directional grain flow and superior fatigue strength for safety-critical crankshafts.",
    astmOrIsoSpec: "EN 10254 / DIN 7526",
    relatedCategoryHref: "/marketplace/forgings",
    relatedCategoryLabel: "Closed-Die Forged Lots",
  },
  {
    term: "Cold Shut (Misrun Defect)",
    category: "Defect Prevention",
    letter: "C",
    definition:
      "A surface defect where two converging molten metal streams meet in the mold cavity but fail to fuse seamlessly due to premature cooling or surface oxide skins.",
    industrialSignificance:
      "Leaves a distinct crack-like line across the wall thickness that fails hydrostatic and radiographic testing; prevented by optimizing pouring temperature and ingate cross-sections.",
    astmOrIsoSpec: "AFS Casting Defects Atlas",
    relatedCategoryHref: "/marketplace/testing-inspection",
    relatedCategoryLabel: "NDT Inspection Services",
  },
  {
    term: "Cope and Drag",
    category: "Molding & Tooling",
    letter: "C",
    definition:
      "The two halves of a standard foundry mold flask: the 'cope' represents the upper half and the 'drag' represents the lower half, mating along the parting line.",
    industrialSignificance:
      "Core alignment pins and bushings between cope and drag prevent mold shift tolerances below ±0.030 inches on high-speed automated molding lines.",
    astmOrIsoSpec: "AFS Flask Specifications",
    relatedCategoryHref: "/marketplace/tooling",
    relatedCategoryLabel: "Cope & Drag Sets",
  },
  {
    term: "Core Box",
    category: "Molding & Tooling",
    letter: "C",
    definition:
      "A precision machined wooden, urethane, or cast iron box in which sand mixed with chemical binders (phenolic urethane or cold box) is blown and cured to form internal cores.",
    industrialSignificance:
      "Creates complex hollow cavities (such as pump volutes, engine water jackets, and valve passages) that cannot be formed by the outer pattern alone.",
    astmOrIsoSpec: "ISO 8062 CT4-CT6",
    relatedCategoryHref: "/marketplace/tooling",
    relatedCategoryLabel: "Core Box Tooling Lots",
  },

  // --- D ---
  {
    term: "Ductile Iron (Nodular Iron)",
    category: "Melt Shop & Chemistry",
    letter: "D",
    definition:
      "Cast iron treated with magnesium or cerium to cause carbon to precipitate as spherical nodules instead of sharp flakes, combining the fluidity of cast iron with the ductility of steel.",
    industrialSignificance:
      "Possesses 10% to 18% elongation and yield strengths up to 900 MPa; used globally for automotive steering knuckles, heavy truck hubs, and high-pressure water mains.",
    astmOrIsoSpec: "ASTM A536 / EN 1563",
    relatedCategoryHref: "/marketplace/castings",
    relatedCategoryLabel: "Verified Ductile Iron Lots",
  },
  {
    term: "Dendrite Solidification",
    category: "QA, Lab & NDT",
    letter: "D",
    definition:
      "A characteristic tree-like or pine-needle branching crystal structure that forms as liquid steel or iron freezes along thermal gradients during primary solidification.",
    industrialSignificance:
      "Secondary dendrite arm spacing (SDAS) directly controls mechanical yield strength and toughness; faster chill cooling yields finer SDAS and superior mechanical properties.",
    astmOrIsoSpec: "ASTM E45 / ISO 4967",
    relatedCategoryHref: "/marketplace/testing-inspection",
    relatedCategoryLabel: "Microstructure Metallography",
  },
  {
    term: "Desulfurization",
    category: "Melt Shop & Chemistry",
    letter: "D",
    definition:
      "A metallurgical ladle treatment adding calcium carbide (CaC2), lime, or magnesium to scavenge sulfur from liquid iron, reducing sulfur levels below 0.015%.",
    industrialSignificance:
      "Critical prior to ductile iron nodulization because excess sulfur neutralizes magnesium additives, creating harmful flake graphite instead of spherical nodules.",
    astmOrIsoSpec: "AFS Melt Practice Guide",
    relatedCategoryHref: "/marketplace/equipment",
    relatedCategoryLabel: "Ladle Metallurgy Equipment",
  },
  {
    term: "Disamatic Molding",
    category: "Molding & Tooling",
    letter: "D",
    definition:
      "A high-speed, vertically parted flaskless green sand molding technology that squeezes sand cakes between pattern plates and indexes them continuously in an endless string.",
    industrialSignificance:
      "World-standard for high-volume automotive and hardware production, producing up to 450 precision sand molds per hour with minimal parting mismatch.",
    astmOrIsoSpec: "DISA Technical Guidelines",
    relatedCategoryHref: "/marketplace/equipment",
    relatedCategoryLabel: "Flaskless Molding Lines",
  },

  // --- E ---
  {
    term: "EN 10204 3.1 Mill Test Report",
    category: "Standards & Specs",
    letter: "E",
    definition:
      "A legally binding inspection certificate issued by the manufacturing plant's independent quality authority certifying actual optical spectrometry chemistry, tensile/yield tests, and heat treatment traceability.",
    industrialSignificance:
      "Mandatory requirement on Foundry Exchange for all certified structural, energy, and aerospace casting and forging lot listings.",
    astmOrIsoSpec: "EN 10204 Type 3.1",
    relatedCategoryHref: "/marketplace/testing-inspection",
    relatedCategoryLabel: "3.1 MTR Verification",
  },
  {
    term: "Eutectic Cell",
    category: "Melt Shop & Chemistry",
    letter: "E",
    definition:
      "The localized spherical crystal unit of austenite-graphite eutectic that nucleates and grows simultaneously during the final eutectic freezing stage of cast iron.",
    industrialSignificance:
      "A higher eutectic cell count achieved through proper inoculation yields smaller cell boundaries, preventing intercellular micro-shrinkage and improving hydraulic seal tightness.",
    astmOrIsoSpec: "ASTM E2567",
    relatedCategoryHref: "/marketplace/raw-materials",
    relatedCategoryLabel: "Foundry Inoculant Alloys",
  },
  {
    term: "Electric Arc Furnace (EAF)",
    category: "Melt Shop & Chemistry",
    letter: "E",
    definition:
      "A primary heavy melting furnace that strikes electric arcs between massive graphite electrodes and metallic scrap charges, reaching temperatures exceeding 3000°F (1650°C).",
    industrialSignificance:
      "The primary production unit for steel foundry operations, capable of melting 10 to 150 metric tons of heavy scrap with continuous decarburization and dephosphorization.",
    astmOrIsoSpec: "IEEE Std 519 Foundry Standard",
    relatedCategoryHref: "/marketplace/equipment",
    relatedCategoryLabel: "Furnaces & EAF Melt Pots",
  },
  {
    term: "Exothermic Riser Sleeve",
    category: "Molding & Tooling",
    letter: "E",
    definition:
      "A refractory cylinder containing aluminum and iron oxide powders placed around a riser cavity that ignites upon contact with liquid metal, generating intense thermal energy.",
    industrialSignificance:
      "Keeps the riser liquid up to 300% longer than plain sand, permitting a 50% reduction in riser volume and increasing foundry liquid-to-cast yield from 55% to 75%.",
    astmOrIsoSpec: "AFS Riser Sleeves Guide",
    relatedCategoryHref: "/marketplace/raw-materials",
    relatedCategoryLabel: "Riser Sleeves & Refractories",
  },

  // --- F ---
  {
    term: "FeSiMg (Ferrosilicon Magnesium)",
    category: "Melt Shop & Chemistry",
    letter: "F",
    definition:
      "A master alloy containing 4%–6% Magnesium, 44%–48% Silicon, and balanced Iron used as the nodulizing agent in the sandwich or tundish ladle treatment of ductile iron.",
    industrialSignificance:
      "Introduces magnesium safely below its boiling point (1090°C) into 1450°C iron to transform carbon into high-tensile spherical nodules.",
    astmOrIsoSpec: "ASTM A324",
    relatedCategoryHref: "/marketplace/raw-materials",
    relatedCategoryLabel: "Nodulizers & Master Alloys",
  },
  {
    term: "Ferrite / Pearlite Ratio",
    category: "QA, Lab & NDT",
    letter: "F",
    definition:
      "The quantitative phase balance between soft, ductile alpha-iron (ferrite) and harder, lamellar iron carbide-austenite alternating plates (pearlite) in the metallic matrix.",
    industrialSignificance:
      "Fully ferritic matrix (65-45-12) provides maximum elongation and impact toughness, while fully pearlitic matrix (100-70-03) delivers high wear resistance and stiffness.",
    astmOrIsoSpec: "ASTM E2567 / ISO 945",
    relatedCategoryHref: "/marketplace/testing-inspection",
    relatedCategoryLabel: "Metallographic Phase Analysis",
  },
  {
    term: "Flaskless Molding",
    category: "Molding & Tooling",
    letter: "F",
    definition:
      "A high-efficiency green sand or chemically bonded molding method where sand blocks are squeezed in a rigid frame and stripped before mold assembly, pouring without metal flasks.",
    industrialSignificance:
      "Eliminates the enormous capital cost of buying, maintaining, and moving hundreds of heavy cast iron flask sets across shakeout conveyors.",
    astmOrIsoSpec: "AFS Flaskless Manual",
    relatedCategoryHref: "/marketplace/equipment",
    relatedCategoryLabel: "Automated Flaskless Lines",
  },
  {
    term: "Flash (Forging & Casting)",
    category: "Defect Prevention",
    letter: "F",
    definition:
      "Excess metal forced into the narrow clearance gap along the die parting line during closed-die forging, or between mold halves during high-pressure metal casting.",
    industrialSignificance:
      "In forging, flash acts as a hydraulic restrictor forcing metal to fill deep die cavities before being cleanly trimmed off in a trimming press.",
    astmOrIsoSpec: "DIN 7526 Tolerances",
    relatedCategoryHref: "/marketplace/forgings",
    relatedCategoryLabel: "Forging Dies & Trim Tooling",
  },

  // --- G ---
  {
    term: "Gating Ratio",
    category: "Molding & Tooling",
    letter: "G",
    definition:
      "The engineered cross-sectional area proportion between sprue, runner, and ingates (e.g., 1:2:4 unpressurized or 4:2:1 pressurized) in a mold filling network.",
    industrialSignificance:
      "Unpressurized gating (1:2:4 or 1:4:4) maintains laminar liquid velocity below 0.5 m/s, preventing air aspiration and oxide dross defects in aluminum and ductile iron.",
    astmOrIsoSpec: "AFS Gating & Risering Standard",
    relatedCategoryHref: "/marketplace/tooling",
    relatedCategoryLabel: "Tooling & Runner Packages",
  },
  {
    term: "Green Sand",
    category: "Molding & Tooling",
    letter: "G",
    definition:
      "A reusable granular refractory mixture of high-purity silica sand (85%–90%), bentonite clay (6%–10%), sea coal/carbonaceous lustrous additives (2%–5%), and tempered water (2.5%–4%).",
    industrialSignificance:
      "The dominant casting process globally, allowing 98% sand reusability through thermal-mechanical reclamation while producing high-speed ferrous castings.",
    astmOrIsoSpec: "AFS Green Sand Control Manual",
    relatedCategoryHref: "/marketplace/equipment",
    relatedCategoryLabel: "Sand Mullers & Systems",
  },
  {
    term: "Grey Iron (ASTM A48)",
    category: "Melt Shop & Chemistry",
    letter: "G",
    definition:
      "Cast iron characterized by a flake graphite microstructure that fractures along graphite planes, exhibiting high compressive strength and exceptional vibration damping.",
    industrialSignificance:
      "The premier material for heavy CNC machine tool bases, engine cylinder blocks, and brake rotors due to its natural lubricity and internal acoustic damping.",
    astmOrIsoSpec: "ASTM A48 / EN 1561",
    relatedCategoryHref: "/marketplace/castings",
    relatedCategoryLabel: "Grey Iron Casting Lots",
  },
  {
    term: "Grain Flow (Forging)",
    category: "Forging & Presswork",
    letter: "G",
    definition:
      "The unbroken directional orientation of the metallic crystalline lattice following the physical contours of the forged component during plastic deformation.",
    industrialSignificance:
      "Eliminates end-grain exposure and delivers up to 35% higher impact and fatigue strength compared to parts machined from continuous rolled bar stock.",
    astmOrIsoSpec: "ASTM A668 / EN 10250",
    relatedCategoryHref: "/marketplace/forgings",
    relatedCategoryLabel: "Certified Forged Shafts",
  },

  // --- H ---
  {
    term: "Hot Tear",
    category: "Defect Prevention",
    letter: "H",
    definition:
      "A jagged, oxidized crack defect formed during late solidification when thermal contraction is mechanically hindered by rigid cores or mold geometry while metal is in the mushy state.",
    industrialSignificance:
      "Fatal structural defect prevented through collapsible core sands, generous corner fillet radii (R > t/3), and uniform wall thickness transitions.",
    astmOrIsoSpec: "AFS Defects Handbook",
    relatedCategoryHref: "/marketplace/testing-inspection",
    relatedCategoryLabel: "Crack Inspection & NDT",
  },
  {
    term: "H13 Tool Steel",
    category: "Molding & Tooling",
    letter: "H",
    definition:
      "A premium chromium-molybdenum-vanadium hot-work tool steel (ASTM A681) exhibiting extreme red hardness, resistance to thermal shock, and high toughness.",
    industrialSignificance:
      "The universal industry standard alloy for high-pressure die casting dies and hot forging impression blocks subjected to severe cyclic thermal fatigue.",
    astmOrIsoSpec: "ASTM A681 / DIN 1.2344",
    relatedCategoryHref: "/marketplace/tooling",
    relatedCategoryLabel: "Die Blocks & Tooling Stock",
  },
  {
    term: "Hadfield Manganese Steel",
    category: "Melt Shop & Chemistry",
    letter: "H",
    definition:
      "An austenitic alloy steel containing 11%–14% Manganese and 1.0%–1.4% Carbon (ASTM A128) that work-hardens under severe impact from 220 HBW up to 550 HBW.",
    industrialSignificance:
      "The legendary 'indestructible' steel used for mining jaw crusher plates, railroad frogs, dredge buckets, and shot blast cabinet wear liners.",
    astmOrIsoSpec: "ASTM A128 / EN 10293",
    relatedCategoryHref: "/marketplace/castings",
    relatedCategoryLabel: "High-Mn Hadfield Castings",
  },
  {
    term: "Hydrostatic Proof Testing",
    category: "QA, Lab & NDT",
    letter: "H",
    definition:
      "A quality assurance pressure containment test where cast valve bodies, fluid ends, and pump housings are filled with pressurized water up to 1.5x design operating pressure.",
    industrialSignificance:
      "Validates zero through-wall microporosity and verifies mechanical integrity before costly finish CNC machining operations.",
    astmOrIsoSpec: "ASME B16.34 / API 6D",
    relatedCategoryHref: "/marketplace/testing-inspection",
    relatedCategoryLabel: "Pressure Testing Equipment",
  },

  // --- I ---
  {
    term: "Inoculation",
    category: "Melt Shop & Chemistry",
    letter: "I",
    definition:
      "The controlled late addition of ferrosilicon-based nucleating agents (containing trace Ca, Ba, Sr, or Zr) into the pouring stream or ladle right before mold filling.",
    industrialSignificance:
      "Multiplies graphite nucleation sites, eliminating hard carbide 'chill' in thin fins and guaranteeing uniform nodule density throughout the casting.",
    astmOrIsoSpec: "AFS Inoculation Technology",
    relatedCategoryHref: "/marketplace/raw-materials",
    relatedCategoryLabel: "Inoculants & Master Alloys",
  },
  {
    term: "Induction Melting Furnace",
    category: "Melt Shop & Chemistry",
    letter: "I",
    definition:
      "A melt-deck furnace that utilizes high-frequency alternating electric currents passed through water-cooled copper coils to induce intense electromagnetic eddy currents that melt metal charges rapidly.",
    industrialSignificance:
      "Offers precise temperature regulation (±5°C), zero combustion carbon pick-up, low oxidation loss (<1%), and natural electromagnetic stirring.",
    astmOrIsoSpec: "Inductotherm / ABP VIP Standards",
    relatedCategoryHref: "/marketplace/equipment",
    relatedCategoryLabel: "Induction Furnaces & Coils",
  },
  {
    term: "Ingate",
    category: "Molding & Tooling",
    letter: "I",
    definition:
      "The final narrow channel connecting the runner channel directly to the casting cavity through which liquid metal enters the component contour.",
    industrialSignificance:
      "Properly placed ingates prevent jetting, direct metal into lowest points of the mold, and detach easily during fettling without damaging casting walls.",
    astmOrIsoSpec: "AFS Gating Handbook",
    relatedCategoryHref: "/marketplace/tooling",
    relatedCategoryLabel: "Matchplate & Runner Systems",
  },
  {
    term: "Investment Casting (Lost Wax)",
    category: "Molding & Tooling",
    letter: "I",
    definition:
      "A precision casting technique where disposable wax patterns are coated with ceramic slurry to form a seamless shell; wax is melted out ('lost') before firing and pouring.",
    industrialSignificance:
      "Delivers near-net-shape tolerances (ISO 8062 CT4), RMS 63 surface finishes, and razor-sharp knife edges for aerospace turbine blades and medical 316L implants.",
    astmOrIsoSpec: "ISO 8062-3 / ICI Handbook",
    relatedCategoryHref: "/marketplace/castings",
    relatedCategoryLabel: "Precision Investment Castings",
  },

  // --- J ---
  {
    term: "Jolt-Squeeze Machine",
    category: "Molding & Tooling",
    letter: "J",
    definition:
      "A mechanical green sand molding machine that jolts the flask table repeatedly to settle sand around deep pattern contours, followed by hydraulic or pneumatic head squeezing.",
    industrialSignificance:
      "Rugged, reliable workhorse for small-to-medium jobbing foundries producing robust cope-and-drag molds for valves, flanges, and agricultural castings.",
    astmOrIsoSpec: "Osborn / BMM Foundry Standards",
    relatedCategoryHref: "/marketplace/equipment",
    relatedCategoryLabel: "Molding Machinery Lots",
  },
  {
    term: "Jaw Crusher Mantle",
    category: "Defect Prevention",
    letter: "J",
    definition:
      "A heavy corrugated wear casting made from austenitic manganese steel that forms the stationary or moving crushing plate in heavy aggregate rock crushers.",
    industrialSignificance:
      "Demonstrates maximum work-hardening in service; listings on Foundry Exchange are pre-checked for carbon balance and water-quench carbide dissolution.",
    astmOrIsoSpec: "ASTM A128 Grade B2/B3",
    relatedCategoryHref: "/marketplace/castings",
    relatedCategoryLabel: "Mining & Quarry Castings",
  },

  // --- K ---
  {
    term: "Knuckle Joint Press",
    category: "Forging & Presswork",
    letter: "K",
    definition:
      "A specialized mechanical forging press utilizing a toggled knuckle kinematic link that slows slide velocity near bottom dead center (BDC) while multiplying nominal tonnage.",
    industrialSignificance:
      "Delivers exceptionally high squeezing pressure with extended dwell time, ideal for precision cold sizing, coining, and near-net gear blank forming.",
    astmOrIsoSpec: "Sutherland Press Standards",
    relatedCategoryHref: "/marketplace/equipment",
    relatedCategoryLabel: "Forging Presses & Machinery",
  },
  {
    term: "Killed Steel",
    category: "Melt Shop & Chemistry",
    letter: "K",
    definition:
      "Steel that has been completely deoxidized with aluminum, silicon, or titanium prior to pouring, leaving practically no gas evolution during solidification.",
    industrialSignificance:
      "Essential for all heavy forged ingots and structural castings to guarantee high density, freedom from blowhole porosity, and uniform chemistry.",
    astmOrIsoSpec: "ASTM A105 / A216",
    relatedCategoryHref: "/marketplace/raw-materials",
    relatedCategoryLabel: "Steel Ingots & Melt Stock",
  },

  // --- L ---
  {
    term: "Liquidus Temperature",
    category: "Melt Shop & Chemistry",
    letter: "L",
    definition:
      "The critical equilibrium temperature above which an alloy exists purely as a homogeneous liquid state, and below which the first solid crystal begins to freeze.",
    industrialSignificance:
      "Foundries compute liquidus via thermal analysis cups to determine the minimum safe pouring superheat (typically liquidus + 100°C to 150°C) to prevent cold shuts.",
    astmOrIsoSpec: "ASTM E831",
    relatedCategoryHref: "/marketplace/equipment",
    relatedCategoryLabel: "Thermal Analysis Cups",
  },
  {
    term: "Ladle Preheater",
    category: "Melt Shop & Chemistry",
    letter: "L",
    definition:
      "An automated oxy-fuel or natural gas burner station that fires downward into refractory ladles to heat linings up to 1000°C (1832°F) prior to tapping.",
    industrialSignificance:
      "Eliminates thermal shock, prevents dangerous steam explosions from residual refractory moisture, and reduces melt temperature loss during transfer by 80°C.",
    astmOrIsoSpec: "NFPA 86 Furnace Standards",
    relatedCategoryHref: "/marketplace/equipment",
    relatedCategoryLabel: "Ladle Heaters & Melt Deck",
  },
  {
    term: "Loss on Ignition (LOI)",
    category: "Molding & Tooling",
    letter: "L",
    definition:
      "A laboratory test (ASTM D7348) that bakes a dried sand sample at 1800°F (982°C) to measure the percentage weight loss of combustible organic binders and sea coal.",
    industrialSignificance:
      "Strictly controlled in green sand systems (typically 2.0%–3.5%) to ensure enough lustrous carbon is present to prevent sand burn-in while avoiding gas blows.",
    astmOrIsoSpec: "AFS Test 5100-00-S",
    relatedCategoryHref: "/marketplace/raw-materials",
    relatedCategoryLabel: "Foundry Sand & Additives",
  },

  // --- M ---
  {
    term: "Matchplate",
    category: "Molding & Tooling",
    letter: "M",
    definition:
      "A precision tooling plate where the cope pattern is mounted on the top face and the drag pattern is mounted on the bottom face in exact register with runner channels.",
    industrialSignificance:
      "The core production tooling for automated flaskless and jolt-squeeze molding machines, enabling rapid single-step molding of thousands of casting cavities.",
    astmOrIsoSpec: "AFS Pattern Standards",
    relatedCategoryHref: "/marketplace/tooling",
    relatedCategoryLabel: "CNC Matchplates & Tooling",
  },
  {
    term: "Magnetic Particle Inspection (MPI)",
    category: "QA, Lab & NDT",
    letter: "M",
    definition:
      "A non-destructive test (ASTM E709) where a ferromagnetic casting or forging is magnetized and coated with fluorescent magnetic particles to reveal surface and near-surface cracks.",
    industrialSignificance:
      "Standard quality gate for automotive steering knuckles, heavy forging flanged shafts, and crane hooks under ASTM E1444.",
    astmOrIsoSpec: "ASTM E709 / ISO 9934",
    relatedCategoryHref: "/marketplace/testing-inspection",
    relatedCategoryLabel: "MPI Crack Testing Systems",
  },
  {
    term: "Misrun",
    category: "Defect Prevention",
    letter: "M",
    definition:
      "A severe casting defect where the liquid metal fails to completely fill the mold cavity, leaving rounded, unformed edges or incomplete sections.",
    industrialSignificance:
      "Caused by low pouring temperature, interrupted pouring streams, or excessive gating friction; resolved by computer flow simulation and runner re-sizing.",
    astmOrIsoSpec: "AFS Defects Atlas",
    relatedCategoryHref: "/marketplace/tooling",
    relatedCategoryLabel: "Tooling Gating Optimization",
  },
  {
    term: "Modulus (Cooling Modulus)",
    category: "Molding & Tooling",
    letter: "M",
    definition:
      "The geometric ratio of volume to cooling surface area: M = Volume / Surface Area, characterizing the thermal heat-dissipation rate of a section.",
    industrialSignificance:
      "Heavier sections have larger moduli and freeze slower; gating designers place feeding risers on sections with the largest modulus to prevent shrinkage.",
    astmOrIsoSpec: "Chvorinov Thermal Equations",
    relatedCategoryHref: "/marketplace/tooling",
    relatedCategoryLabel: "Risers & Mold Tooling",
  },

  // --- N ---
  {
    term: "Nodularity (ASTM E2567)",
    category: "QA, Lab & NDT",
    letter: "N",
    definition:
      "The quantitative automated image analysis measurement of the percentage of graphite particles in ductile iron that conform to acceptable roundness shapes (Types I & II).",
    industrialSignificance:
      "Critical safety components require >85% or >90% nodularity; lower nodularity (due to late magnesium fade) drastically drops impact resistance and elongation.",
    astmOrIsoSpec: "ASTM E2567 / ISO 16112",
    relatedCategoryHref: "/marketplace/testing-inspection",
    relatedCategoryLabel: "Image Analysis & Lab QA",
  },
  {
    term: "Non-Destructive Testing (NDT)",
    category: "QA, Lab & NDT",
    letter: "N",
    definition:
      "The suite of physical inspection methods (Ultrasonic, Radiographic, Magnetic Particle, Liquid Penetrant, and Hydrostatic) that evaluate internal sound quality without damaging the component.",
    industrialSignificance:
      "Mandatory quality compliance gate required for all structural aerospace, nuclear, defense, and oilfield casting and forging deliveries.",
    astmOrIsoSpec: "ASNT SNT-TC-1A / ISO 9712",
    relatedCategoryHref: "/marketplace/testing-inspection",
    relatedCategoryLabel: "Full NDT Services Suite",
  },
  {
    term: "Normalizing (Heat Treatment)",
    category: "Heat Treatment",
    letter: "N",
    definition:
      "A thermal cycle heating steel or ductile iron 100°F (55°C) above its upper critical transformation temperature (Ac3) followed by still-air cooling to room temperature.",
    industrialSignificance:
      "Refines coarse as-cast or as-forged grain structures, homogenizes dendritic segregation, and relieves residual cooling stresses prior to finish CNC machining.",
    astmOrIsoSpec: "ASTM A802 / SAE AMS 2759",
    relatedCategoryHref: "/marketplace/equipment",
    relatedCategoryLabel: "Heat Treat Ovens & Furnaces",
  },

  // --- O ---
  {
    term: "Open-Die Forging (Smith Forging)",
    category: "Forging & Presswork",
    letter: "O",
    definition:
      "The deformation of heated metal between flat, V-shaped, or swaging dies that do not completely enclose the workpiece, manipulated by hydraulic manipulators.",
    industrialSignificance:
      "The only viable process for manufacturing monster components (1 ton to 50 tons) such as marine propulsion shafts, forged discs, generator rotors, and stepped pinions.",
    astmOrIsoSpec: "ASTM A668 / EN 10250",
    relatedCategoryHref: "/marketplace/forgings",
    relatedCategoryLabel: "Open-Die Forged Shafts",
  },
  {
    term: "Optical Emission Spectrometer (OES)",
    category: "QA, Lab & NDT",
    letter: "O",
    definition:
      "An analytical laboratory instrument that vaporizes a polished metallurgical sample with an electrical spark under argon, analyzing light emission spectrums to determine 25+ chemical elements in 20 seconds.",
    industrialSignificance:
      "The primary quality gate used on every melt heat to confirm carbon, silicon, manganese, magnesium, and tramp element limits before tapping.",
    astmOrIsoSpec: "ASTM E415 / E1251",
    relatedCategoryHref: "/marketplace/testing-inspection",
    relatedCategoryLabel: "OES Spark Spectrometers",
  },

  // --- P ---
  {
    term: "Parting Line",
    category: "Molding & Tooling",
    letter: "P",
    definition:
      "The geometric plane or 3D contour where the cope and drag halves of a foundry mold (or the upper and lower halves of a forging die) meet.",
    industrialSignificance:
      "Careful parting line engineering ensures draft angles allow clean pattern draw without tearing sand walls, minimizing post-cast grinding costs.",
    astmOrIsoSpec: "ISO 8062 Tooling Guidelines",
    relatedCategoryHref: "/marketplace/tooling",
    relatedCategoryLabel: "Pattern & Tooling Packages",
  },
  {
    term: "Pattern Draft",
    category: "Molding & Tooling",
    letter: "P",
    definition:
      "The slight taper (typically 0.5° to 2.0°) applied to vertical pattern walls to permit vertical withdrawal from the compacted sand mold without damaging mold corners.",
    industrialSignificance:
      "Insufficient draft causes mold tears and sand inclusions, while excessive draft adds unwanted machining stock allowance.",
    astmOrIsoSpec: "AFS Patternmaking Manual",
    relatedCategoryHref: "/marketplace/tooling",
    relatedCategoryLabel: "CNC Machined Tooling",
  },
  {
    term: "Permeability (Sand)",
    category: "Molding & Tooling",
    letter: "P",
    definition:
      "The physical property of compacted molding sand allowing hot gases, steam, and air to escape through sand pore networks during liquid metal filling.",
    industrialSignificance:
      "Insufficient sand permeability (<80 AFS) traps mold gases and causes catastrophic blowhole defects and pinhole surface porosity.",
    astmOrIsoSpec: "AFS Sand Test 2110-00-S",
    relatedCategoryHref: "/marketplace/raw-materials",
    relatedCategoryLabel: "Silica Sand & Permeability",
  },
  {
    term: "Pouring Basin",
    category: "Molding & Tooling",
    letter: "P",
    definition:
      "A funnel or reservoir cut into the top of the cope mold above the sprue, designed to maintain a deep pool of liquid metal during the pour.",
    industrialSignificance:
      "Ensures the downsprue remains completely choked with liquid metal, preventing vortexing that sucks atmospheric air and slag into the casting.",
    astmOrIsoSpec: "AFS Gating Practice",
    relatedCategoryHref: "/marketplace/tooling",
    relatedCategoryLabel: "Pouring Basins & Tooling",
  },

  // --- Q ---
  {
    term: "Quench and Temper (Q&T)",
    category: "Heat Treatment",
    letter: "Q",
    definition:
      "A dual-stage heat treatment where steel or alloy iron is heated above austenitizing temperature, rapidly quenched in water, oil, or polymer to form martensite, then reheated (tempered) to restore ductility.",
    industrialSignificance:
      "Delivers the optimal combination of high tensile strength (1200+ MPa) and impact toughness required for heavy mining pins, wear teeth, and forging dies.",
    astmOrIsoSpec: "ASTM A370 / SAE AMS 2759",
    relatedCategoryHref: "/marketplace/equipment",
    relatedCategoryLabel: "Heat Treat Ovens & Quench Tanks",
  },
  {
    term: "Quick Pattern Shuttle",
    category: "Molding & Tooling",
    letter: "Q",
    definition:
      "An automated pneumatic or hydraulic mechanism integrated into modern flaskless molding lines that swaps pattern matchplates in under 30 seconds.",
    industrialSignificance:
      "Enables short production runs (5 to 50 molds) on automated high-speed molding lines without costly downtime.",
    astmOrIsoSpec: "DISA / Hunter Technical Manuals",
    relatedCategoryHref: "/marketplace/equipment",
    relatedCategoryLabel: "Automated Molding Equipment",
  },

  // --- R ---
  {
    term: "Radiographic Testing (RT)",
    category: "QA, Lab & NDT",
    letter: "R",
    definition:
      "An NDT volumetric inspection method (ASTM E94 / E1742) utilizing X-ray or radioactive isotope gamma-ray radiation (Iridium-192 or Cobalt-60) to photograph internal cavities on film or digital detector plates.",
    industrialSignificance:
      "The definitive legal acceptance standard (ASTM E446 / E186) for evaluating internal shrinkage porosity, gas voids, and inclusions in nuclear and military castings.",
    astmOrIsoSpec: "ASTM E94 / ASTM E446",
    relatedCategoryHref: "/marketplace/testing-inspection",
    relatedCategoryLabel: "Radiographic Testing Services",
  },
  {
    term: "Riser (Feeder)",
    category: "Molding & Tooling",
    letter: "R",
    definition:
      "A designed reservoir of molten metal attached to the casting that provides supplemental liquid feed metal to compensate for volume contraction as the casting freezes.",
    industrialSignificance:
      "Properly sized risers ensure that solidification shrinkage occurs entirely within the disposable riser and not inside the finished casting wall.",
    astmOrIsoSpec: "AFS Risering Science",
    relatedCategoryHref: "/marketplace/tooling",
    relatedCategoryLabel: "Risers & Feeders Tooling",
  },
  {
    term: "Rolled Ring Forging",
    category: "Forging & Presswork",
    letter: "R",
    definition:
      "A specialized forging process where a pierced donut preform is rotated between two driven roll dies that squeeze the wall thickness while expanding the internal and external diameter.",
    industrialSignificance:
      "Produces seamless circular rings from 10 inches to 25 feet in diameter with tangential circular grain flow, used for wind turbine slewing rings and pipeline flanges.",
    astmOrIsoSpec: "ASTM A105 / ASTM A668",
    relatedCategoryHref: "/marketplace/forgings",
    relatedCategoryLabel: "Seamless Rolled Rings",
  },
  {
    term: "Refractory Lining",
    category: "Melt Shop & Chemistry",
    letter: "R",
    definition:
      "High-purity ceramic alumina, silica, or magnesia materials (ramming pastes, dry vibe mixes, and precast bricks) that line furnace interiors and pouring ladles.",
    industrialSignificance:
      "Safely contains molten iron and steel up to 3000°F (1650°C), protecting furnace induction coils and operators while resisting chemical erosion from aggressive slag.",
    astmOrIsoSpec: "ASTM C401 Refractory Standards",
    relatedCategoryHref: "/marketplace/raw-materials",
    relatedCategoryLabel: "Refractories & Ramming Mixes",
  },

  // --- S ---
  {
    term: "Sand Muller",
    category: "Molding & Tooling",
    letter: "S",
    definition:
      "A heavy intensive foundry mixer equipped with rotating vertical spring-loaded mulling wheels and crosshead plows that smear clay binder around individual sand grains.",
    industrialSignificance:
      "Essential for activating the green bond of bentonite; inadequate mulling causes sand crumbling, weak mold walls, and sand drop defects.",
    astmOrIsoSpec: "Simpson / Eirich Muller Standards",
    relatedCategoryHref: "/marketplace/equipment",
    relatedCategoryLabel: "Sand Mullers & Mixers",
  },
  {
    term: "Shot Blasting (Fettling)",
    category: "Molding & Tooling",
    letter: "S",
    definition:
      "A mechanical cleaning process where centrifugal blast wheels propel high-velocity cast steel shot (S230–S550) against castings to scour away baked molding sand, core debris, and scale.",
    industrialSignificance:
      "Delivers clean, bare-metal finishes matching SSPC-SP 6 / NACE 3 prior to primer painting, automated NDT crack testing, or finish CNC machining.",
    astmOrIsoSpec: "ISO 8501-1 / SAE J444",
    relatedCategoryHref: "/marketplace/equipment",
    relatedCategoryLabel: "Shot Blast & Tumblast Units",
  },
  {
    term: "Slag Basicity",
    category: "Melt Shop & Chemistry",
    letter: "S",
    definition:
      "The chemical ratio of basic metal oxides to acidic oxides in furnace slag: Basicity B = (%CaO + %MgO) / (%SiO2 + %Al2O3).",
    industrialSignificance:
      "High basicity slag (B > 2.0) is mandatory in steelmaking to absorb sulfur and phosphorus while preventing refractory degradation in basic lined arc furnaces.",
    astmOrIsoSpec: "AISE Steelmaking Chemistry",
    relatedCategoryHref: "/marketplace/raw-materials",
    relatedCategoryLabel: "Slag Conditioners & Fluxes",
  },
  {
    term: "Sprue (Downsprue)",
    category: "Molding & Tooling",
    letter: "S",
    definition:
      "The vertical tapered channel through which molten metal travels from the pouring basin down into the horizontal runner network at the parting line.",
    industrialSignificance:
      "Tapering the sprue downward prevents air aspiration and turbulence by matching the gravitational acceleration of falling liquid metal.",
    astmOrIsoSpec: "AFS Gating Handbook",
    relatedCategoryHref: "/marketplace/tooling",
    relatedCategoryLabel: "Tooling & Gating Systems",
  },

  // --- T ---
  {
    term: "Tensile Strength (Ultimate)",
    category: "QA, Lab & NDT",
    letter: "T",
    definition:
      "The maximum engineering tensile stress (in MPa or PSI) that a standardized machined test specimen can withstand before tensile necking and ultimate fracture.",
    industrialSignificance:
      "Primary commercial designation in ASTM specifications (e.g., the '65' in Ductile Iron 65-45-12 denotes 65,000 PSI / 448 MPa minimum tensile strength).",
    astmOrIsoSpec: "ASTM E8/E8M / ISO 6892-1",
    relatedCategoryHref: "/marketplace/testing-inspection",
    relatedCategoryLabel: "Tensile Testing Systems",
  },
  {
    term: "Thermal Sand Reclamation",
    category: "Molding & Tooling",
    letter: "T",
    definition:
      "A high-temperature fluidized bed or rotary kiln process (650°C–750°C) that bakes chemically bonded sand to combust organic resin binders away completely.",
    industrialSignificance:
      "Enables foundries to recycle 95%+ of chemically bonded sand indefinitely, slashing raw sand purchases, freight costs, and hazardous landfill fees.",
    astmOrIsoSpec: "AFS Environmental & Sand Recovery",
    relatedCategoryHref: "/marketplace/equipment",
    relatedCategoryLabel: "Reclamation Kilns & Coolers",
  },
  {
    term: "Tuyere",
    category: "Melt Shop & Chemistry",
    letter: "T",
    definition:
      "A water-cooled copper nozzle installed around the perimeter of a cupola furnace through which heated air blast (with oxygen enrichment) is forced into the coke combustion zone.",
    industrialSignificance:
      "Controls combustion efficiency and melting rate in classic iron cupola operations, delivering continuous molten iron taps at 1500°C.",
    astmOrIsoSpec: "AFS Cupola Handbook",
    relatedCategoryHref: "/marketplace/equipment",
    relatedCategoryLabel: "Cupola & Melt Deck Gear",
  },

  // --- U ---
  {
    term: "Ultrasonic Testing (UT)",
    category: "QA, Lab & NDT",
    letter: "U",
    definition:
      "A high-frequency acoustic wave NDT inspection method (1 MHz to 5 MHz) where sound waves propagate through metallic sections; internal flaws reflect echoes back to the transducer.",
    industrialSignificance:
      "The primary volumetric quality assurance method for heavy forged shafts, turbine discs, and critical thick-walled pump castings to locate subsurface voids and cracks.",
    astmOrIsoSpec: "ASTM A388 / ASTM A609",
    relatedCategoryHref: "/marketplace/testing-inspection",
    relatedCategoryLabel: "Volumetric UT Equipment",
  },
  {
    term: "Urethane Pattern Master",
    category: "Molding & Tooling",
    letter: "U",
    definition:
      "A high-density polyurethane tooling board precision CNC machined to create patterns, matchplates, and core boxes with high dimensional stability.",
    industrialSignificance:
      "Resists sand abrasion significantly better than aluminum while weighing 40% less and resisting swelling from moisture.",
    astmOrIsoSpec: "AFS Pattern Tooling Guide",
    relatedCategoryHref: "/marketplace/tooling",
    relatedCategoryLabel: "Pattern & Tooling Masters",
  },

  // --- V ---
  {
    term: "Vacuum Degassing (VD / VOD)",
    category: "Melt Shop & Chemistry",
    letter: "V",
    definition:
      "A secondary refining process that places a ladle of molten alloy steel inside an evacuated chamber (pressure < 2 mbar) to boil out dissolved hydrogen, nitrogen, and oxygen.",
    industrialSignificance:
      "Eliminates hydrogen-induced embrittlement ('flaking') in heavy forgings, critical for aerospace turbine rotors and high-pressure oilfield fluid ends.",
    astmOrIsoSpec: "API 6A / ASTM A788",
    relatedCategoryHref: "/marketplace/equipment",
    relatedCategoryLabel: "Vacuum Metallurgy Systems",
  },
  {
    term: "VIP Power-Trak Inverter",
    category: "Melt Shop & Chemistry",
    letter: "V",
    definition:
      "A solid-state silicon controlled rectifier (SCR) or IGBT power supply inverter that delivers variable frequency and voltage to induction melting furnace coils.",
    industrialSignificance:
      "Automatically tracks resonant electrical frequency as metal melts, achieving >97% electrical efficiency from cold charge to full pour temperature.",
    astmOrIsoSpec: "Inductotherm Power Electronics",
    relatedCategoryHref: "/marketplace/equipment",
    relatedCategoryLabel: "VIP Inverters & Melt Power",
  },
  {
    term: "V-Process (Vacuum Sealed Molding)",
    category: "Molding & Tooling",
    letter: "V",
    definition:
      "A physical molding process where dry, unbonded silica sand is held rigid inside the flask purely by continuous vacuum pressure applied through plastic film seals.",
    industrialSignificance:
      "Zero chemical binder fumes, 100% sand reuse without mulling, zero draft angles required, and exceptionally smooth casting surfaces for counterweights and covers.",
    astmOrIsoSpec: "AFS Specialty Molding Handbook",
    relatedCategoryHref: "/marketplace/castings",
    relatedCategoryLabel: "V-Process Castings",
  },

  // --- W ---
  {
    term: "Warpage",
    category: "Defect Prevention",
    letter: "W",
    definition:
      "The unintentional geometric distortion or bow in a casting or forging caused by non-uniform cooling rates, uneven section thicknesses, or release of residual stresses.",
    industrialSignificance:
      "Prevented through structural stiffening ribs, symmetrical design, and controlled stress-relief annealing before final precision CNC machining.",
    astmOrIsoSpec: "ISO 8062 Geometric Tolerances",
    relatedCategoryHref: "/marketplace/testing-inspection",
    relatedCategoryLabel: "CMM Dimensional Scanners",
  },
  {
    term: "White Iron (ASTM A532)",
    category: "Melt Shop & Chemistry",
    letter: "W",
    definition:
      "High-alloy cast iron containing 15%–30% Chromium where carbon precipitates as extremely hard iron-chromium carbides (M7C3) rather than soft graphite.",
    industrialSignificance:
      "Exhibits extreme hardness (600–750 HBW / 60+ HRC) delivering unmatched abrasion resistance for mining slurry pump impellers and pulverizer balls.",
    astmOrIsoSpec: "ASTM A532 Class II/III",
    relatedCategoryHref: "/marketplace/castings",
    relatedCategoryLabel: "Chrome White Iron Castings",
  },

  // --- Y ---
  {
    term: "Yield Strength (0.2% Offset)",
    category: "QA, Lab & NDT",
    letter: "Y",
    definition:
      "The engineering stress point at which a metallic specimen demonstrates 0.2% permanent plastic deformation upon unloading.",
    industrialSignificance:
      "The primary structural design limit used by mechanical engineers to size load-bearing castings and forgings so they never take a permanent set in service.",
    astmOrIsoSpec: "ASTM E8 / ISO 6892",
    relatedCategoryHref: "/marketplace/testing-inspection",
    relatedCategoryLabel: "Tensile & Yield Testing",
  },
  {
    term: "Casting Yield (Pour-to-Ship Ratio)",
    category: "Molding & Tooling",
    letter: "Y",
    definition:
      "The efficiency percentage ratio: Yield = (Shipped Casting Weight / Total Molten Metal Poured) * 100%.",
    industrialSignificance:
      "A primary metric of foundry profitability; modern gating simulation raises casting yield from 50% to 75%+, saving thousands of dollars in melting power per ton.",
    astmOrIsoSpec: "AFS Operating Metrics",
    relatedCategoryHref: "/marketplace/tooling",
    relatedCategoryLabel: "Gating Optimization Systems",
  },

  // --- Z ---
  {
    term: "Zircon Sand & Mold Wash",
    category: "Molding & Tooling",
    letter: "Z",
    definition:
      "A premium zirconium silicate (ZrSiO4) refractory mineral with high thermal conductivity, high density (4.7 g/cm³), and very low thermal expansion applied as a slurry wash on mold surfaces.",
    industrialSignificance:
      "Resists liquid steel temperatures up to 3400°F (1870°C), eliminating metal penetration, sand burn-on, and veining defects in heavy industrial steel castings.",
    astmOrIsoSpec: "AFS Special Sands Manual",
    relatedCategoryHref: "/marketplace/raw-materials",
    relatedCategoryLabel: "Zircon Refractory Washes",
  },
];
