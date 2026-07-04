import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { products as fallbackProducts } from "@/lib/dataLive"
import { loadProducts } from "@/lib/fetchProducts"
import { buildProductFilterOptions } from "@/lib/productFilters"

const ProductsContext = createContext(null)

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState(fallbackProducts)
  const [isLoading, setIsLoading] = useState(true)
  const [source, setSource] = useState("fallback")
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    loadProducts().then((result) => {
      if (!isMounted) return
      setProducts(result.products)
      setSource(result.source)
      setError(result.error)
      setIsLoading(false)
    })

    return () => {
      isMounted = false
    }
  }, [])

  const filterOptions = useMemo(() => buildProductFilterOptions(products), [products])

  const value = useMemo(
    () => ({
      products,
      filterOptions,
      isLoading,
      source,
      error,
      getProductById: (id) => products.find((product) => product.id === parseInt(id, 10)),
    }),
    [products, filterOptions, isLoading, source, error],
  )

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}

export function useProducts() {
  const context = useContext(ProductsContext)
  if (!context) {
    throw new Error("useProducts must be used within ProductsProvider")
  }
  return context
}
