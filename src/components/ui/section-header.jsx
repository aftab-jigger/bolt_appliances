import { cn } from "@/lib/utils"

/**
 * Reusable section header with badge, title and description.
 * @param {string} badge - Small label above title
 * @param {string} title - Main heading
 * @param {string} [description] - Optional paragraph below title
 * @param {boolean} [animate=false] - Whether to apply visibility animation classes
 * @param {boolean} [isVisible=true] - When animate is true, controls visible state
 * @param {string} [className] - Additional classes for wrapper
 * @param {string} [badgeClassName] - Additional classes for badge
 * @param {"default"|"pill"} [badgeVariant="default"] - Badge style
 */
export default function SectionHeader({
  badge,
  title,
  description,
  animate = false,
  isVisible = true,
  className = "",
  badgeClassName = "",
  badgeVariant = "default",
}) {
  const visibilityClass = animate
    ? isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10"
    : ""

  const badgeStyles = {
    default: "text-teal-500 font-semibold tracking-wider text-sm uppercase",
    pill: "inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-teal-600 bg-teal-100 px-3 py-1 rounded-full",
  }

  return (
    <div
      className={cn(
        "text-center transition-all duration-700",
        visibilityClass,
        className
      )}
    >
      {badge && (
        <span className={cn(badgeStyles[badgeVariant], badgeClassName)}>
          {badge}
        </span>
      )}
      {title && (
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-foreground text-balance">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          {description}
        </p>
      )}
    </div>
  )
}
