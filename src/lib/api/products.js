import { categoryConfig } from "@/lib/data"

/**
 * @param {unknown} first
 * @returns {string}
 */
function imageUrlFromEntry(first) {
  if (typeof first === "string") return first
  if (first && typeof first === "object") {
    if ("url" in first && typeof first.url === "string") return first.url
    if ("attributes" in first && first.attributes && typeof first.attributes === "object") {
      const a = first.attributes
      if ("url" in a && typeof a.url === "string") return a.url
    }
  }
  return ""
}

/**
 * @param {string} apiCategoryTitle
 * @returns {string | undefined}
 */
function configKeyForApiCategoryTitle(apiCategoryTitle) {
  return Object.keys(categoryConfig).find((k) => categoryConfig[k].title === apiCategoryTitle)
}

/**
 * @param {unknown} features
 * @returns {string[]}
 */
function featuresFromAttributes(features) {
  if (Array.isArray(features)) {
    return features.filter((x) => typeof x === "string")
  }
  if (!features || typeof features !== "object") return []
  return Object.entries(features)
    .filter(([, v]) => v === true)
    .map(([k]) =>
      k
        .replace(/_/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
    )
}

/**
 * @param {{ id?: string, attributes?: Record<string, unknown> }} item
 */
export function normalizeProductResource(item) {
  const attrs = item.attributes && typeof item.attributes === "object" ? item.attributes : {}
  const cat = attrs.category && typeof attrs.category === "object" ? attrs.category : {}
  const apiTitle =
    (typeof cat.name === "string" && cat.name) ||
    (typeof cat.category === "string" && cat.category) ||
    ""
  const configKey = apiTitle ? configKeyForApiCategoryTitle(apiTitle) : undefined
  const categoryForProduct = configKey || apiTitle || "Appliance"

  const imgs = attrs.images
  let image = ""
  if (Array.isArray(imgs) && imgs.length > 0) {
    image = imageUrlFromEntry(imgs[0])
  }

  const price = parseFloat(String(attrs.price ?? 0)) || 0
  const rawOriginal = attrs.original_price ?? attrs.compare_at_price
  const originalParsed =
    rawOriginal != null && rawOriginal !== "" ? parseFloat(String(rawOriginal)) : NaN
  const originalPrice = Number.isFinite(originalParsed) && originalParsed > price ? originalParsed : price

  const ratingRaw = attrs.rating ?? attrs.average_rating
  const rating = typeof ratingRaw === "number" && !Number.isNaN(ratingRaw) ? ratingRaw : 0

  const reviewsRaw = attrs.reviews_count ?? attrs.review_count
  const reviews =
    typeof reviewsRaw === "number" && !Number.isNaN(reviewsRaw) ? reviewsRaw : undefined

  const descRaw = attrs.description
  const description = typeof descRaw === "string" ? descRaw : ""

  const brand = typeof attrs.brand === "string" ? attrs.brand : ""

  return {
    id: item.id ?? "",
    name: typeof attrs.name === "string" ? attrs.name : "Product",
    model: brand,
    image,
    rating,
    reviews,
    price,
    originalPrice,
    category: categoryForProduct,
    brand,
    description,
    features: featuresFromAttributes(attrs.features),
  }
}

/**
 * @param {number} categoryId
 * @returns {Promise<ReturnType<typeof normalizeProductResource>[]>}
 */
export async function fetchProductsByCategoryId(categoryId) {
  const base = import.meta.env.VITE_API_BASE_URL ?? ""
  const url = `${base}/api/v1/products?category_id=${encodeURIComponent(String(categoryId))}`
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Products request failed (${res.status})`)
  }
  const json = await res.json()
  const data = json?.products?.data
  if (!Array.isArray(data)) {
    return []
  }
  return data.map(normalizeProductResource)
}
