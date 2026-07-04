import { Star } from "@/assets/icons/icons"
import { cn } from "@/lib/utils"

/**
 * Star rating display with optional review count.
 * @param {number} rating - Value 0-5 (supports half stars)
 * @param {number} [reviews] - Optional review count to show
 * @param {"default"|"large"} [size="default"] - Icon size
 * @param {string} [className] - Wrapper class
 */
export default function StarRating({ rating, reviews, size = "default", className }) {
  const starSize = size === "large" ? "w-5 h-5" : "w-3.5 h-3.5 sm:w-4 sm:h-4"

  return (
    <div className={cn("flex items-center gap-1.5 sm:gap-2", className)}>
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              starSize,
              star <= Math.floor(rating)
                ? "fill-amber-400 text-amber-400"
                : star - 0.5 <= rating
                ? "fill-amber-400/50 text-amber-400"
                : "fill-gray-200 text-gray-200"
            )}
          />
        ))}
      </div>
      {reviews != null && (
        <span className="text-xs sm:text-sm text-muted-foreground">({reviews})</span>
      )}
    </div>
  )
}
