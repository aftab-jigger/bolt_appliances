"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, Users2, Smile } from "lucide-react"

const stats = [
  {
    icon: CheckCircle2,
    value: 2500,
    suffix: "+",
    label: "Projects Completed",
    description: "Successfully delivered",
  },
  {
    icon: Users2,
    value: 85,
    suffix: "+",
    label: "Expert Members",
    description: "Certified technicians",
  },
  {
    icon: Smile,
    value: 4800,
    suffix: "+",
    label: "Happy Clients",
    description: "Satisfied customers",
  },
]

function useCountUp(end, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime = null
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration, start])

  return count
}

function useScrollAnimation(threshold = 0.2) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

function StatCard({
  stat,
  index,
  isVisible,
}) {
  const count = useCountUp(stat.value, 2000, isVisible)

  return (
    <div
      className={`relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-teal-100 hover:shadow-xl hover:border-teal-200 transition-all duration-500 hover:-translate-y-2 group ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
      }`}
      style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
    >
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="p-4 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
          <stat.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" strokeWidth={2} />
        </div>
      </div>

      {/* Counter */}
      <div className="text-center">
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-700">
          {count.toLocaleString()}
          {stat.suffix}
        </span>
        <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-2">{stat.label}</h3>
        <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
        <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rotate-45" />
      </div>
    </div>
  )
}

const StatisticsSection = () => {
  const sectionAnimation = useScrollAnimation(0.1)
  const headerAnimation = useScrollAnimation(0.2)

  return (
    <section
      ref={sectionAnimation.ref}
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-teal-50/50 via-cyan-50/30 to-background relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-200 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-20 translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          ref={headerAnimation.ref}
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            headerAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-teal-600 bg-teal-100 px-3 py-1 rounded-full mb-4">
            Our Achievements
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
            Numbers That Speak For Us
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            We take pride in our track record of excellence and customer satisfaction
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} isVisible={sectionAnimation.isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
export default StatisticsSection;