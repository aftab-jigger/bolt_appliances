import { categoryConfig, getCategoryBySlug } from "@/lib/data"

/**
 * Resolve route slug (e.g. `dryer`) to API `category_id` via `/api/v1/categories`.
 * @param {string} slug
 * @returns {Promise<number | null>}
 */
export async function fetchCategoryIdForSlug(slug) {
  const key = getCategoryBySlug(slug)
  if (!key || !categoryConfig[key]) return null
  const title = categoryConfig[key].title

  const base = import.meta.env.VITE_API_BASE_URL ?? ""
  const res = await fetch(`${base}/api/v1/categories`)
  if (!res.ok) {
    throw new Error(`Categories request failed (${res.status})`)
  }
  const json = await res.json()
  const data = json?.data
  if (!Array.isArray(data)) return null

  const row = data.find((d) => d && typeof d.name === "string" && d.name === title)
  if (!row) return null
  const id = Number(row.id)
  return Number.isFinite(id) ? id : null
}
