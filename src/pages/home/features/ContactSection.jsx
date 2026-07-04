 

import { ArrowRight, Clock } from "@/assets/icons/icons"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import SectionHeader from "@/components/ui/section-header"

const workingHours = [
  { label: "Mon - Fri: 09:30 AM - 06:00 PM" },
  { label: "Saturday: 10:00 AM - 04:00 PM" },
  { label: "Sunday: 10:00 AM - 02:00 PM" },
]

const ContactSection = () => {
  const { ref: sectionRef, isVisible } = useIntersectionObserver({ threshold: 0.2 })

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background to-teal-50/50 relative overflow-hidden"
    >
      {/* Animated Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-48 sm:h-64"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(20, 184, 166)" stopOpacity="0.15">
                <animate attributeName="stop-color" values="rgb(20, 184, 166);rgb(6, 182, 212);rgb(20, 184, 166)" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="rgb(6, 182, 212)" stopOpacity="0.2">
                <animate attributeName="stop-color" values="rgb(6, 182, 212);rgb(20, 184, 166);rgb(6, 182, 212)" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="rgb(20, 184, 166)" stopOpacity="0.15">
                <animate attributeName="stop-color" values="rgb(20, 184, 166);rgb(6, 182, 212);rgb(20, 184, 166)" dur="4s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.1">
                <animate attributeName="stop-color" values="rgb(6, 182, 212);rgb(20, 184, 166);rgb(6, 182, 212)" dur="5s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="rgb(20, 184, 166)" stopOpacity="0.15">
                <animate attributeName="stop-color" values="rgb(20, 184, 166);rgb(6, 182, 212);rgb(20, 184, 166)" dur="5s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0.1">
                <animate attributeName="stop-color" values="rgb(6, 182, 212);rgb(20, 184, 166);rgb(6, 182, 212)" dur="5s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient1)"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,128L48,149.3C96,171,192,213,288,218.7C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,192C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </path>
          <path
            fill="url(#waveGradient2)"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,176C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,176C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,192L48,186.7C96,181,192,171,288,186.7C384,203,480,245,576,234.7C672,224,768,160,864,144C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,176C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </path>
        </svg>
      </div>

      {/* Decorative blur elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-teal-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute top-20 right-20 w-48 h-48 bg-cyan-200 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            badge="Contact Us"
            title="Get In Touch With Us"
            description="Have questions about our services? Need a repair estimate? Our team is ready to help you with all your home appliance needs."
            animate
            isVisible={isVisible}
            className="mb-8 sm:mb-10"
          />
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            {workingHours.map(({ label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md border"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="text-foreground font-medium text-xs sm:text-sm">{label}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/contact">
              <Button className="px-10 sm:px-12 py-6 sm:py-7 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection;