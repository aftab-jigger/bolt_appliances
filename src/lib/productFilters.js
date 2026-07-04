export const ALL_PRICES_OPTION = { label: "All Prices", min: 0, max: Infinity }

function getUniqueSortedValues(products, field) {
  return [...new Set(products.map((product) => product[field]).filter(Boolean))].sort((a, b) =>
    String(a).localeCompare(String(b)),
  )
}

export function getCategoryOptions(products) {
  return ["All", ...getUniqueSortedValues(products, "category")]
}

export function getBrandOptions(products) {
  return ["All", ...getUniqueSortedValues(products, "brand")]
}

function roundToStep(value, step) {
  return Math.ceil(value / step) * step
}

export function buildPriceRanges(products) {
  const prices = products
    .map((product) => Number(product.price))
    .filter((price) => Number.isFinite(price) && price >= 0)

  if (prices.length === 0) return [ALL_PRICES_OPTION]

  const maxPrice = Math.max(...prices)
  if (maxPrice === 0) return [ALL_PRICES_OPTION]

  const ranges = [ALL_PRICES_OPTION]
  const niceMax = roundToStep(maxPrice, 100)
  const bucketCount = 4
  const step = Math.max(roundToStep(niceMax / bucketCount, 50), 50)

  for (let i = 0; i < bucketCount; i += 1) {
    const min = i * step
    const max = i === bucketCount - 1 ? Infinity : (i + 1) * step

    if (min > maxPrice) break

    let label
    if (i === 0) {
      label = `Under £${max}`
    } else if (max === Infinity) {
      label = `Over £${min}`
    } else {
      label = `£${min} - £${max}`
    }

    ranges.push({ label, min, max })
  }

  return ranges
}

export function buildProductFilterOptions(products) {
  return {
    categories: getCategoryOptions(products),
    brands: getBrandOptions(products),
    priceRanges: buildPriceRanges(products),
  }
}

export function buildCategoryFilterDefinitions(products) {
  return {
    brand: {
      type: "select",
      label: "Brand",
      options: getBrandOptions(products),
      defaultValue: "All",
    },
    price: {
      type: "select",
      label: "Price Range",
      options: buildPriceRanges(products),
      defaultValue: ALL_PRICES_OPTION,
    },
  }
}

export function createDefaultProductFilters(filterOptions) {
  return {
    category: "All",
    brand: "All",
    priceRange: ALL_PRICES_OPTION,
  }
}

export function sanitizeProductFilters(filters, filterOptions) {
  const priceRange = filterOptions.priceRanges.find((range) => range.label === filters.priceRange?.label)

  return {
    category: filterOptions.categories.includes(filters.category) ? filters.category : "All",
    brand: filterOptions.brands.includes(filters.brand) ? filters.brand : "All",
    priceRange: priceRange || ALL_PRICES_OPTION,
  }
}

export function createInitialCategoryFilters(config, filterDefinitions) {
  const initial = {}

  if (config?.filters) {
    Object.keys(config.filters).forEach((filterId) => {
      if (config.filters[filterId] && filterDefinitions[filterId]) {
        initial[filterId] = filterDefinitions[filterId].defaultValue
      }
    })
  }

  return initial
}

export function sanitizeCategoryFilters(filters, filterDefinitions) {
  const next = { ...filters }

  Object.keys(filterDefinitions).forEach((filterId) => {
    const definition = filterDefinitions[filterId]
    const currentValue = filters[filterId]

    if (filterId === "brand") {
      next[filterId] = definition.options.includes(currentValue) ? currentValue : "All"
      return
    }

    if (filterId === "price") {
      const matchedRange = definition.options.find((option) => option.label === currentValue?.label)
      next[filterId] = matchedRange || ALL_PRICES_OPTION
    }
  })

  return next
}
