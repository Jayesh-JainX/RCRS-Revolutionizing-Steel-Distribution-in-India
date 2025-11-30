const items = [
  {
    name: "Galvanized Sheets",
    short: "GP Sheets",
    imgSrc: "/products/galvanized-sheets.png",
    link: "/galvanized-sheets",
    tags: [
      "steel",
      "galvanized",
      "gp sheet",
      "roofing",
      "cladding",
      "corrosion resistant",
    ],
    description:
      "Premium galvanized (GP) sheets with a zinc-coated finish that resists rust and corrosion. Ideal for roofing, wall cladding, sheds, ducting, and general fabrication where long-term weather protection is required.",
  },
  {
    name: "Coloured Roofing Sheets",
    short: "Colour Coated Sheets",
    imgSrc: "/products/colour-roofing-sheets.png",
    link: "/coloured-roofing-sheets",
    tags: [
      "roofing",
      "colour coated",
      "ppgi",
      "sheets",
      "industrial shed",
      "warehouse",
    ],
    description:
      "High-quality colour-coated roofing sheets that provide an attractive finish with excellent weather resistance. Suitable for industrial sheds, warehouses, houses, and commercial roofing where aesthetics and durability both matter.",
  },
  {
    name: "Fiber TMT Bars",
    short: "Fiber TMT",
    imgSrc: "/products/fiber-tmt-bars.png",
    link: "/fiber-tmt-bars",
    tags: [
      "tmt",
      "rebar",
      "construction",
      "fiber reinforced",
      "concrete",
      "foundation",
    ],
    description:
      "Fiber-reinforced TMT bars designed for superior bonding with concrete and enhanced crack resistance. Widely used in foundations, beams, slabs, and columns for stronger and longer-lasting RCC structures.",
  },
  {
    name: "TMT Bar",
    short: "TMT Bar",
    imgSrc: "/products/tmt-bar.png",
    link: "/tmt-bar",
    tags: ["tmt", "rebar", "reinforcement", "construction", "rcc", "steel bar"],
    description:
      "High-strength TMT bars used as reinforcement in RCC structures. They offer excellent ductility, weldability, and seismic resistance, making them ideal for residential, commercial, and infrastructure projects.",
  },
  {
    name: "T Iron",
    short: "T Section",
    imgSrc: "/products/t-iron.png",
    link: "/t-iron",
    tags: [
      "structural steel",
      "t section",
      "frames",
      "support",
      "fabrication",
      "construction",
    ],
    description:
      "Robust T-section iron used in structural frameworks, trusses, gates, and light structural fabrication. Its shape provides good load-bearing capacity while keeping the overall weight economical.",
  },
  {
    name: "C Channels",
    short: "C Channel",
    imgSrc: "/products/c-channels.png",
    link: "/c-channels",
    tags: [
      "c channel",
      "structural steel",
      "purlin",
      "frame",
      "support",
      "fabrication",
    ],
    description:
      "Mild steel C-channels commonly used as purlins, framing members, and supports in sheds, warehouses, and industrial structures. Easy to fabricate and weld, offering a strong yet economical structural solution.",
  },
  {
    name: "MS Angle",
    short: "Angle",
    imgSrc: "/products/ms-angle.png",
    link: "/ms-angle",
    tags: [
      "ms angle",
      "angle iron",
      "fabrication",
      "frames",
      "support",
      "industrial",
    ],
    description:
      "Mild steel equal and unequal angles suitable for frames, brackets, supports, grills, and general fabrication. Known for their versatility, ease of welding, and reliable strength in structural applications.",
  },
  {
    name: "MS Structure (Girder / Joist)",
    short: "Girder / Joist",
    imgSrc: "/products/ms-structure-girder.png",
    link: "/ms-structure",
    tags: [
      "ms structure",
      "girder",
      "joist",
      "i beam",
      "heavy structural",
      "building",
    ],
    description:
      "Heavy structural MS girders and joists (I-beams / H-beams) used in building frames, bridges, industrial sheds, and heavy-duty platforms. Designed to carry high loads and provide long-span structural support.",
  },
  {
    name: "Iron Plates",
    short: "MS Plates",
    imgSrc: "/products/ms-plates.png",
    link: "/iron-plates",
    tags: [
      "ms plate",
      "steel plate",
      "fabrication",
      "base plate",
      "industrial",
      "machinery",
    ],
    description:
      "Solid mild steel plates available in various thicknesses for base plates, machine beds, floor plates, brackets, and fabrication work. Offers high strength and can be cut, drilled, and welded as required.",
  },
  {
    name: "MS Pipes & Tubes",
    short: "Hollow Sections",
    imgSrc: "/products/ms-pipes-tubes.png",
    link: "/ms-pipes-tubes",
    tags: [
      "ms pipe",
      "hollow section",
      "round pipe",
      "square tube",
      "fabrication",
      "structure",
    ],
    description:
      "Mild steel pipes and hollow sections (round, square, and rectangular) used for structural frames, railings, gates, supports, and industrial fabrications. Lightweight yet strong, ideal for both structural and decorative use.",
  },
  {
    name: "Cemented Roofing Sheets",
    short: "Fibre / Cement Sheets",
    imgSrc: "/products/cement-roof-sheets.png",
    link: "/cemented-roofing-sheets",
    tags: [
      "cement sheet",
      "ac sheet",
      "roofing",
      "shed",
      "warehouse",
      "industrial",
    ],
    description:
      "Durable cement-based roofing sheets commonly used for factory sheds, godowns, and agricultural structures. They provide good insulation from heat and are suitable for cost-effective roofing solutions.",
  },
  {
    name: "MS Flat",
    short: "MS Flat",
    imgSrc: "/products/ms-flats.png",
    link: "/ms-flat",
    tags: [
      "ms flat",
      "flat bar",
      "fabrication",
      "frames",
      "machinery",
      "industrial",
    ],
    description:
      "Mild steel flats used in fabrication, frames, support brackets, grills, and machine components. Easy to cut and drill, making them ideal for custom fabrication and general engineering work.",
  },
  {
    name: "Barbed Wire",
    short: "Barbed Wire",
    imgSrc: "/products/barbed-wire.png",
    link: "/barbed-wire",
    tags: [
      "barbed wire",
      "fencing",
      "security",
      "boundary",
      "agriculture",
      "perimeter",
    ],
    description:
      "Galvanized barbed wire suitable for boundary fencing of farms, plots, factories, and open land. Provides an economical and effective security solution against trespassing.",
  },
  {
    name: "Razor Wire",
    short: "Razor Wire",
    imgSrc: "/products/razor-wire.png",
    link: "/bladed-wire",
    tags: [
      "razor wire",
      "bladed wire",
      "security",
      "high security",
      "boundary",
      "fencing",
    ],
    description:
      "High-security bladed (razor) wire used on compound walls, industrial premises, and sensitive areas. Sharp blades and coils act as a strong deterrent and enhance perimeter security.",
  },
  {
    name: "Boundary Fence",
    short: "Fencing Panels",
    imgSrc: "/products/boundary-fence.png",
    link: "/boundary-fence",
    tags: [
      "fence",
      "welded mesh",
      "chainlink",
      "boundary",
      "compound wall",
      "security",
    ],
    description:
      "Ready-made boundary fencing solutions using chain-link or welded mesh, supported on posts and angles. Ideal for residential plots, farms, factories, and school or campus boundaries.",
  },
  {
    name: "HR Sheet",
    short: "Hot Rolled Sheet",
    imgSrc: "/products/hr-sheet.png",
    link: "/hr-sheet",
    tags: [
      "hr sheet",
      "hot rolled",
      "steel sheet",
      "fabrication",
      "industrial",
      "plates",
    ],
    description:
      "Hot rolled (HR) steel sheets used in fabrication, tanks, ducting, body building, and general engineering applications. Known for good formability and weldability in a wide range of thicknesses.",
  },
  {
    name: "GP Sheets",
    short: "Galvanized Plain",
    imgSrc: "/products/gp-sheets.png",
    link: "/gp-sheets",
    tags: [
      "gp sheet",
      "galvanized",
      "plain sheet",
      "roofing",
      "cladding",
      "fabrication",
    ],
    description:
      "Galvanized plain sheets with a smooth zinc-coated surface that protects against rust. Used for roofing, cladding, enclosures, ducting, and various fabrication jobs needing a clean, rust-resistant finish.",
  },
  {
    name: "Cement Bags",
    short: "Cement",
    imgSrc: "/products/cement-bags.png",
    link: "/cement-bags",
    tags: ["cement", "ultratech", "acc", "construction"],
    description:
      "High-quality cement bags from leading brands, ideal for RCC, plastering, and general construction.",
  },
];

export default items;
