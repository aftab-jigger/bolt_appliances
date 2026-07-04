export const GOOGLE_SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID || "1FmiKUE-yVkBO8ey3VMJSRvtFzj3GboqH3omCaiATvIE"
export const GOOGLE_SHEET_GID = import.meta.env.VITE_GOOGLE_SHEET_GID || "741825097"

export function getGoogleSheetCsvUrl(sheetId = GOOGLE_SHEET_ID, gid = GOOGLE_SHEET_GID) {
  return `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&gid=${gid}`
}

/** Browser-safe fetch URL (avoids CORS in dev via Vite proxy). */
export function getProductsFetchUrl() {
  if (import.meta.env.VITE_PRODUCTS_API_URL) {
    return import.meta.env.VITE_PRODUCTS_API_URL
  }

  if (import.meta.env.DEV) {
    return "/api/sheets/products"
  }

  return getGoogleSheetCsvUrl()
}
