 

import { useState, useRef, useEffect } from "react"
import { Quote, ChevronLeft, ChevronRight } from "@/assets/icons/icons"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import SectionHeader from "@/components/ui/section-header"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    image: null,
    text: "Exceptional service! The technician arrived on time and fixed my refrigerator quickly. Very professional and knowledgeable. I highly recommend their services to anyone.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Owner",
    image: null,
    text: "We've been using their appliance repair services for our restaurant for years. They're reliable, fast, and always get the job done right the first time.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Property Manager",
    image: null,
    text: "Managing multiple properties means dealing with appliance issues regularly. This team has been a lifesaver. Quick response times and excellent workmanship every time.",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Restaurant Owner",
    image: null,
    text: "Our commercial kitchen relies heavily on working appliances. This team understands urgency and always delivers prompt, professional service. Highly recommended!",
  },
  {
    id: 5,
    name: "Jennifer Lee",
    role: "Real Estate Agent",
    image: null,
    text: "I refer all my clients to this company for appliance repairs. They're trustworthy, affordable, and their work quality is consistently excellent.",
  },
  {
    id: 6,
    name: "Robert Martinez",
    role: "Hotel Manager",
    image: null,
    text: "Managing a hotel means we need appliances working 24/7. Their emergency service has saved us countless times. Professional team with great expertise.",
  },
]

function TestimonialCard({ testimonial, index, isVisible, isCarousel }) {
  return (
    <div
      className={`group relative bg-card rounded-2xl p-6 sm:p-8 shadow-lg border hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
        isCarousel ? "w-[320px] sm:w-[380px] flex-shrink-0 snap-center" : ""
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: isCarousel ? "0ms" : `${index * 150}ms` }}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Quote icon */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-teal-200 group-hover:text-teal-300 transition-colors" />
      </div>

      <div className="relative z-10">
        {/* User info */}
        <div className="flex items-center gap-4 mb-5">
          {/* Avatar */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-md group-hover:scale-110 transition-transform duration-300">
            {testimonial.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <h3 className="font-semibold text-foreground text-base sm:text-lg">{testimonial.name}</h3>
            <p className="text-muted-foreground text-sm">{testimonial.role}</p>
          </div>
        </div>

        {/* Testimonial text */}
        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{testimonial.text}</p>

        {/* Rating stars */}
        <div className="flex gap-1 mt-5">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-amber-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  )
}

function CarouselLayout({ testimonials, isVisible }) {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScroll)
      return () => scrollElement.removeEventListener("scroll", checkScroll)
    }
  }, [])

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 400
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <button
        onClick={() => scroll("left")}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-white shadow-lg border flex items-center justify-center transition-all duration-300 hover:bg-teal-50 hover:border-teal-300 ${
          canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6 text-teal-600" />
      </button>
      
      <button
        onClick={() => scroll("right")}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-white shadow-lg border flex items-center justify-center transition-all duration-300 hover:bg-teal-50 hover:border-teal-300 ${
          canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6 text-teal-600" />
      </button>

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-teal-50/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-teal-50/80 to-transparent z-10 pointer-events-none" />

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-2 scrollbar-hide"
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            index={index}
            isVisible={isVisible}
            isCarousel={true}
          />
        ))}
      </div>
    </div>
  )
}

function GridLayout({ testimonials, isVisible }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={testimonial.id}
          testimonial={testimonial}
          index={index}
          isVisible={isVisible}
          isCarousel={false}
        />
      ))}
    </div>
  )
}

const TestimonialsSection = () => {
  const { ref: sectionRef, isVisible } = useIntersectionObserver({ threshold: 0.2 })
  const isCarouselMode = testimonials.length > 3

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-teal-50/50 to-background relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-64 h-64 bg-teal-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          badge="Testimonials"
          title="What Our Clients Say"
          description="Hear from our satisfied customers about their experience with our professional appliance services."
          animate
          isVisible={isVisible}
          className="mb-10 sm:mb-14"
        />

        {/* Conditional Layout: Grid or Carousel */}
        {isCarouselMode ? (
          <CarouselLayout testimonials={testimonials} isVisible={isVisible} />
        ) : (
          <GridLayout testimonials={testimonials} isVisible={isVisible} />
        )}
      </div>
    </section>
  )
}
export default TestimonialsSection;