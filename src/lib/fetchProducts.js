import { products as fallbackProducts } from "./dataLive"
import { getProductsFetchUrl } from "./sheetsConfig"
import { parseSheetProducts } from "./parseSheetProducts"

export async function fetchProductsFromSheet() {
  const url = getProductsFetchUrl()

  const response = await fetch(url, {
    method: "GET",
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error(
      `Google Sheet request failed (${response.status}). Share the sheet as "Anyone with the link can view".`,
    )
  }

  const csvText = await response.text()
  if (
    !csvText ||
    csvText.includes("Sign in") ||
    csvText.includes("ServiceLogin") ||
    csvText.includes("<!DOCTYPE html")
  ) {
    throw new Error('Google Sheet is private. Set sharing to "Anyone with the link can view".')
  }

  const products = parseSheetProducts(csvText)
  if (products.length === 0) {
    throw new Error("No valid products found in Google Sheet.")
  }

  // Sheet row 1 = oldest, last row = newest — show newest first on site
  return [...products].reverse()
}

export async function loadProducts() {
  try {
    const sheetProducts = await fetchProductsFromSheet()
    return {
      products: sheetProducts,
      source: "google-sheet",
      error: null,
    }
  } catch (error) {
    console.warn("[products] Using local fallback data:", error.message)
    return {
      products: fallbackProducts,
      source: "fallback",
      error: error.message,
    }
  }
}
