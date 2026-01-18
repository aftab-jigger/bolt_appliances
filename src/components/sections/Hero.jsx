import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "Smart Refrigerators",
    subtitle: "Keep Your Food Fresh & Organized",
    description:
      "Discover our range of energy-efficient smart refrigerators with advanced cooling technology.",
    image:
      "../../src/assets/illustrationIamges/modern-smart-refrigerator-kitchen-illustration.jpeg",
    cta: "Shop Refrigerators",
  },

  {
    id: 3,
    title: "Premium Air Conditioners",
    subtitle: "Stay Cool All Year Round",
    description:
      "Beat the heat with our energy-saving air conditioners featuring smart climate control.",
    image: "../../src/assets/illustrationIamges/Oven.jpeg",
    cta: "Shop ACs",
  },
  {
    id: 4,
    title: "Kitchen Appliances",
    subtitle: "Cook Like a Pro",
    description:
      "Elevate your cooking experience with our premium microwave ovens and kitchen essentials.",
    image: "../../src/assets/illustrationIamges/Hob.jpeg",
    cta: "Shop Kitchen",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <p
                  className={`text-teal-400 font-medium mb-2 transform transition-all duration-700 delay-100 ${
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  {slide.subtitle}
                </p>
                <h1
                  className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 transform transition-all duration-700 delay-200 ${
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  {slide.title}
                </h1>
                <p
                  className={`text-lg text-gray-200 mb-8 transform transition-all duration-700 delay-300 ${
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  {slide.description}
                </p>
                <Button
                  size="lg"
                  className={`bg-teal-500 hover:bg-teal-600 text-white transform transition-all duration-700 delay-400 ${
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={() => {
          prevSlide();
          setIsAutoPlaying(false);
          setTimeout(() => setIsAutoPlaying(true), 5000);
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={() => {
          nextSlide();
          setIsAutoPlaying(false);
          setTimeout(() => setIsAutoPlaying(true), 5000);
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-1000 ${
              index === currentSlide
                ? "w-20 bg-teal-500"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
export default Hero;
