import { useEffect, useRef, useState } from "react"
import { ProductImagePlaceholder } from "@/assets/icons/icons"

function ProductImageWithFallback({
  src,
  alt,
  className = "w-full h-full object-cover",
  loading = "lazy",
  decoding = "async",
  sizes,
  showSkeleton = true,
}) {
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const imageRef = useRef(null)

  useEffect(() => {
    setHasError(false)
    setIsLoaded(false)

    // Handle cached images that are already loaded before onLoad fires.
    const img = imageRef.current
    if (img && img.complete && img.naturalWidth > 0) {
      setIsLoaded(true)
    }
  }, [src])

  if (!src || hasError) {
    return <ProductImagePlaceholder className="w-full h-full" />
  }

  return (
    <div className="relative w-full h-full">
      {showSkeleton ? (
        <div
          className={`shimmer-surface absolute inset-0 rounded-lg transition-opacity duration-300 ${
            isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        />
      ) : null}
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        loading={loading}
        decoding={decoding}
        sizes={sizes}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true)
          setIsLoaded(true)
        }}
      />
    </div>
  )
}

export default ProductImageWithFallback
