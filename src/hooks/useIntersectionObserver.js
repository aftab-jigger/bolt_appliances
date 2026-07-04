import { useEffect, useState, useRef } from "react"

/**
 * Hook to detect when an element enters the viewport.
 * @param {Object} options
 * @param {number} [options.threshold=0.1] - Intersection ratio (0-1)
 * @param {boolean} [options.once=true] - Unobserve after first intersection
 * @returns {{ ref: React.RefObject, isVisible: boolean }}
 */
export function useIntersectionObserver({ threshold = 0.1, once = true } = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return { ref, isVisible }
}
