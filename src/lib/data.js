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

const productImageLibrary = {
  "Microwave Oven": [
    "https://images.pexels.com/photos/6996034/pexels-photo-6996034.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4108710/pexels-photo-4108710.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5591653/pexels-photo-5591653.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5825364/pexels-photo-5825364.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
  Dishwasher: [
    "https://images.pexels.com/photos/5824519/pexels-photo-5824519.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5824894/pexels-photo-5824894.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4239033/pexels-photo-4239033.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4907060/pexels-photo-4907060.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
  Dryer: [
    "https://images.pexels.com/photos/5591826/pexels-photo-5591826.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5591688/pexels-photo-5591688.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5825563/pexels-photo-5825563.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
  Refrigerator: [
    "https://images.pexels.com/photos/5825362/pexels-photo-5825362.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5824514/pexels-photo-5824514.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5824885/pexels-photo-5824885.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
  Cooker: [
    "https://images.pexels.com/photos/4108270/pexels-photo-4108270.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4252136/pexels-photo-4252136.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4108294/pexels-photo-4108294.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4108274/pexels-photo-4108274.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
  Hobs: [
    "https://images.pexels.com/photos/4108719/pexels-photo-4108719.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5591595/pexels-photo-5591595.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5591647/pexels-photo-5591647.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4108278/pexels-photo-4108278.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
}

function optimizeImageUrl(url, width = 900, quality = 70) {
  const [basePath] = url.split("?")
  return `${basePath}?auto=compress&cs=tinysrgb&w=${width}&q=${quality}`
}

function getProductImages(category, seed) {
  const categoryImages = productImageLibrary[category] || []
  if (categoryImages.length === 0) return []

  const mainIndex = seed % categoryImages.length
  const secondaryIndex = (seed + 1) % categoryImages.length
  const thirdIndex = (seed + 2) % categoryImages.length
  const fourthIndex = (seed + 3) % categoryImages.length

  const selectedImages = [
    categoryImages[mainIndex],
    categoryImages[secondaryIndex],
    categoryImages[thirdIndex],
    categoryImages[fourthIndex],
  ]

  return selectedImages.map((image, index) => optimizeImageUrl(image, index === 0 ? 1100 : 800))
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
      const productImages = getProductImages(category, i)
      const cardImage = productImages[0] ? optimizeImageUrl(productImages[0], 700) : ""

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
        image: cardImage,
        images: productImages,
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
