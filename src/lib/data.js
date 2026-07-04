// Category configuration with config-driven filters
export const categoryConfig = {
  "Microwave Oven": {
    slug: "microwave-oven",
    title: "Microwave Ovens",
    description: "Discover our range of high-quality microwave ovens",
    features: ["Auto Cook", "Grill Function", "Defrost", "Child Lock", "Easy Clean"],
    brands: ["Samsung", "LG", "Bosch", "Whirlpool", "Siemens", "Miele"],
    filters: {
      brand: true,
      price: true,
      // Extendable: add more filters here
      capacity: true,
      wattage: true,
    },
  },
  "Dishwasher": {
    slug: "dishwasher",
    title: "Dishwashers",
    description: "Browse our collection of efficient dishwashers",
    features: ["Auto Sensor", "Steam Clean", "Delay Start", "Child Lock", "Half Load"],
    brands: ["Samsung", "LG", "Bosch", "Whirlpool", "Siemens", "Miele"],
    filters: {
      brand: true,
      price: true,
    },
  },
  "Dryer": {
    slug: "dryer",
    title: "Dryers",
    description: "Find the perfect dryer for your laundry needs",
    features: ["Heat Pump", "Sensor Dry", "Anti-Crease", "Quick Dry", "Large Capacity"],
    brands: ["Samsung", "LG", "Bosch", "Whirlpool", "Siemens", "Miele"],
    filters: {
      brand: true,
      price: true,
    },
  },
  "Refrigerator": {
    slug: "refrigerator",
    title: "Refrigerators",
    description: "Explore our selection of modern refrigerators",
    features: ["Frost Free", "Multi-Zone", "LED Display", "Eco Mode", "Smart Cooling"],
    brands: ["Samsung", "LG", "Bosch", "Whirlpool", "Siemens", "Miele"],
    filters: {
      brand: true,
      price: true,
    },
  },
  "Cooker": {
    slug: "cooker",
    title: "Cookers",
    description: "Shop our range of premium cookers",
    features: ["Fan Assisted", "Easy Clean", "Programmable Timer", "Multiple Zones", "Grill Function"],
    brands: ["Samsung", "LG", "Bosch", "Whirlpool", "Siemens", "Miele"],
    filters: {
      brand: true,
      price: true,
    },
  },
  "Hobs": {
    slug: "hobs",
    title: "Hobs",
    description: "Discover our collection of stylish hobs",
    features: ["Induction", "Touch Control", "Safety Lock", "Power Boost", "Easy Clean"],
    brands: ["Samsung", "LG", "Bosch", "Whirlpool", "Siemens", "Miele"],
    filters: {
      brand: true,
      price: true,
    },
  },
}

// Filter definitions - easily extendable
export const filterDefinitions = {
  brand: {
    type: "select",
    label: "Brand",
    options: ["All", "Samsung", "LG", "Bosch", "Whirlpool", "Siemens", "Miele"],
    defaultValue: "All",
  },
  price: {
    type: "select",
    label: "Price Range",
    options: [
      { label: "All Prices", min: 0, max: Infinity },
      { label: "Under £300", min: 0, max: 300 },
      { label: "£300 - £600", min: 300, max: 600 },
      { label: "£600 - £1000", min: 600, max: 1000 },
      { label: "Over £1000", min: 1000, max: Infinity },
    ],
    defaultValue: { label: "All Prices", min: 0, max: Infinity },
  },
  // Extendable: add more filter definitions here
  // capacity: {
  //   type: "select",
  //   label: "Capacity",
  //   options: ["All", "Small", "Medium", "Large"],
  //   defaultValue: "All",
  // },
}

// Filter constants
export const brands = ["All", "Samsung", "LG", "Bosch", "Whirlpool", "Siemens", "Miele"]
export const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under £300", min: 0, max: 300 },
  { label: "£300 - £600", min: 300, max: 600 },
  { label: "£600 - £1000", min: 600, max: 1000 },
  { label: "Over £1000", min: 1000, max: Infinity },
]

export function getProductById(id, products = []) {
  return products.find((p) => p.id === parseInt(id, 10))
}

export function getCategorySlug(category) {
  return categoryConfig[category]?.slug || category.toLowerCase().replace(/\s+/g, '-')
}

export function getCategoryBySlug(slug) {
  const result = Object.keys(categoryConfig).find(cat => categoryConfig[cat].slug === slug)
  // console.log("[v0] getCategoryBySlug:", { slug, result, availableSlugs: Object.values(categoryConfig).map(c => c.slug) })
  return result
}
