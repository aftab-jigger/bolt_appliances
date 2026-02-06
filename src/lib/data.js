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

// Generate products for all categories
const generateProducts = () => {
  const categories = Object.keys(categoryConfig)
  const allProducts = []
  let id = 1

  categories.forEach((category) => {
    const config = categoryConfig[category]
    const brands = config.brands
    const features = config.features

    // Generate 15 products per category
    for (let i = 0; i < 15; i++) {
      const brand = brands[i % brands.length]
      const basePrice = 299 + Math.floor(Math.random() * 1200)
      const hasDiscount = Math.random() > 0.3

      allProducts.push({
        id: id++,
        name: `${brand} ${category}`,
        model: `Model ${String.fromCharCode(65 + (i % 26))}${1000 + i}`,
        price: basePrice,
        originalPrice: hasDiscount ? basePrice + Math.floor(Math.random() * 300) + 50 : basePrice,
        description: `High-performance ${category.toLowerCase()} with advanced features for modern homes. Energy efficient and built to last.`,
        longDescription: `This premium ${category.toLowerCase()} combines cutting-edge technology with elegant design. Built with high-quality materials and backed by years of engineering expertise, it delivers exceptional performance while maintaining energy efficiency. The intuitive controls make operation simple, while advanced features ensure optimal results every time. Perfect for modern households seeking reliability and convenience.`,
        rating: 3.5 + Math.random() * 1.5,
        reviews: 10 + Math.floor(Math.random() * 490),
        category: category,
        brand: brand,
        features: features.slice(0, 4),
        specifications: {
          dimensions: "60 x 85 x 60 cm",
          weight: "45 kg",
          powerConsumption: "1200W",
          warranty: "2 Years",
          color: "Silver/White",
          capacity: i % 2 === 0 ? "8 kg" : "10 kg"
        }
      })
    }
  })

  return allProducts
}

export const products = generateProducts()

// Filter constants
export const brands = ["All", "Samsung", "LG", "Bosch", "Whirlpool", "Siemens", "Miele"]
export const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under £300", min: 0, max: 300 },
  { label: "£300 - £600", min: 300, max: 600 },
  { label: "£600 - £1000", min: 600, max: 1000 },
  { label: "Over £1000", min: 1000, max: Infinity },
]

export function getProductById(id) {
  return products.find(p => p.id === parseInt(id))
}

export function getCategorySlug(category) {
  return categoryConfig[category]?.slug || category.toLowerCase().replace(/\s+/g, '-')
}

export function getCategoryBySlug(slug) {
  const result = Object.keys(categoryConfig).find(cat => categoryConfig[cat].slug === slug)
  // console.log("[v0] getCategoryBySlug:", { slug, result, availableSlugs: Object.values(categoryConfig).map(c => c.slug) })
  return result
}
