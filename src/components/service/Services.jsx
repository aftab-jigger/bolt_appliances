"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
// Large SVG Illustration Components

function DeliveryIllustration({ className }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Road */}
      <rect x="0" y="230" width="400" height="40" rx="4" fill="#e2e8f0" />
      <rect x="40" y="247" width="30" height="6" rx="3" fill="#cbd5e1" />
      <rect x="120" y="247" width="30" height="6" rx="3" fill="#cbd5e1" />
      <rect x="200" y="247" width="30" height="6" rx="3" fill="#cbd5e1" />
      <rect x="280" y="247" width="30" height="6" rx="3" fill="#cbd5e1" />
      <rect x="350" y="247" width="30" height="6" rx="3" fill="#cbd5e1" />
      {/* Truck Body */}
      <rect x="60" y="130" width="160" height="100" rx="8" fill="#0d9488" />
      <rect x="70" y="140" width="140" height="60" rx="4" fill="#14b8a6" />
      <rect x="90" y="155" width="40" height="8" rx="4" fill="white" opacity="0.6" />
      <rect x="90" y="170" width="60" height="6" rx="3" fill="white" opacity="0.4" />
      <rect x="90" y="182" width="30" height="6" rx="3" fill="white" opacity="0.3" />
      {/* Box icon on truck */}
      <rect x="160" y="150" width="36" height="36" rx="4" fill="white" opacity="0.25" />
      <path d="M168 168H188M178 158V178" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      {/* Cabin */}
      <path d="M220 155H270C278 155 284 161 284 169V230H220V155Z" fill="#0f766e" />
      <rect x="232" y="168" width="38" height="30" rx="4" fill="#67e8f9" opacity="0.7" />
      <line x1="251" y1="168" x2="251" y2="198" stroke="#0d9488" strokeWidth="2" />
      {/* Wheels */}
      <circle cx="130" cy="235" r="22" fill="#334155" />
      <circle cx="130" cy="235" r="12" fill="#64748b" />
      <circle cx="130" cy="235" r="5" fill="#334155" />
      <circle cx="260" cy="235" r="22" fill="#334155" />
      <circle cx="260" cy="235" r="12" fill="#64748b" />
      <circle cx="260" cy="235" r="5" fill="#334155" />
      {/* Motion lines */}
      <line x1="30" y1="180" x2="50" y2="180" stroke="#0d9488" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
      <line x1="20" y1="195" x2="48" y2="195" stroke="#0d9488" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
      <line x1="35" y1="210" x2="52" y2="210" stroke="#0d9488" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
      {/* Floating box */}
      <rect x="310" y="90" width="50" height="50" rx="6" fill="#14b8a6" opacity="0.2" stroke="#14b8a6" strokeWidth="2" />
      <path d="M325 115H350M335 105V125" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      {/* Small package */}
      <rect x="330" y="160" width="35" height="35" rx="4" fill="#0d9488" opacity="0.15" stroke="#0d9488" strokeWidth="1.5" />
    </svg>
  )
}

function RecycleIllustration({ className }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Central recycling circle */}
      <circle cx="200" cy="150" r="100" fill="#0d9488" opacity="0.08" />
      <circle cx="200" cy="150" r="70" fill="#0d9488" opacity="0.06" />
      {/* Recycling arrows */}
      <path d="M200 70L230 110H170L200 70Z" fill="#14b8a6" opacity="0.8" />
      <path d="M140 130L120 180H170L140 130Z" fill="#0d9488" opacity="0.8" />
      <path d="M260 130L280 180H230L260 130Z" fill="#0f766e" opacity="0.8" />
      {/* Arrow connections */}
      <path d="M220 105C240 115 255 130 260 130" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" fill="none" />
      <polygon points="258,125 268,132 256,135" fill="#14b8a6" />
      <path d="M130 180C125 195 130 210 145 218" stroke="#0d9488" strokeWidth="3" strokeLinecap="round" fill="none" />
      <polygon points="150,213 148,225 138,216" fill="#0d9488" />
      <path d="M270 180C275 195 270 210 255 218" stroke="#0f766e" strokeWidth="3" strokeLinecap="round" fill="none" />
      <polygon points="250,213 252,225 262,216" fill="#0f766e" />
      {/* Appliance being recycled */}
      <rect x="178" y="128" width="44" height="54" rx="6" fill="white" stroke="#0d9488" strokeWidth="2" />
      <rect x="186" y="138" width="28" height="24" rx="3" fill="#14b8a6" opacity="0.2" />
      <circle cx="200" cy="172" r="4" fill="#0d9488" opacity="0.5" />
      {/* Leaf accents */}
      <path d="M310 80C310 80 330 60 350 80C350 80 330 100 310 80Z" fill="#14b8a6" opacity="0.3" />
      <line x1="310" y1="80" x2="350" y2="80" stroke="#14b8a6" strokeWidth="1" opacity="0.5" />
      <path d="M50 200C50 200 70 180 90 200C90 200 70 220 50 200Z" fill="#14b8a6" opacity="0.25" />
      {/* Dots decoration */}
      <circle cx="320" cy="200" r="4" fill="#14b8a6" opacity="0.2" />
      <circle cx="340" cy="185" r="3" fill="#0d9488" opacity="0.15" />
      <circle cx="70" cy="100" r="5" fill="#14b8a6" opacity="0.2" />
      <circle cx="55" cy="120" r="3" fill="#0d9488" opacity="0.15" />
    </svg>
  )
}

function InstallationIllustration({ className }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Floor */}
      <rect x="40" y="250" width="320" height="8" rx="4" fill="#e2e8f0" />
      {/* Appliance (washing machine) */}
      <rect x="150" y="100" width="120" height="150" rx="10" fill="white" stroke="#0d9488" strokeWidth="3" />
      <circle cx="210" cy="180" r="35" stroke="#14b8a6" strokeWidth="3" fill="#14b8a6" opacity="0.1" />
      <circle cx="210" cy="180" r="20" stroke="#14b8a6" strokeWidth="2" fill="white" />
      <circle cx="210" cy="180" r="8" fill="#14b8a6" opacity="0.3" />
      {/* Control panel */}
      <rect x="165" y="115" width="90" height="30" rx="4" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" />
      <circle cx="185" cy="130" r="5" fill="#14b8a6" opacity="0.6" />
      <circle cx="200" cy="130" r="5" fill="#0d9488" opacity="0.4" />
      <rect x="215" y="125" width="25" height="10" rx="3" fill="#14b8a6" opacity="0.2" />
      {/* Technician */}
      <circle cx="90" cy="140" r="18" fill="#14b8a6" opacity="0.3" />
      <circle cx="90" cy="133" r="12" fill="#0f766e" opacity="0.5" />
      <path d="M70 165C70 155 78 148 90 148C102 148 110 155 110 165V210H70V165Z" fill="#0d9488" opacity="0.6" />
      {/* Arm reaching to appliance */}
      <path d="M108 170L145 160" stroke="#0d9488" strokeWidth="4" strokeLinecap="round" />
      {/* Legs */}
      <rect x="74" y="210" width="14" height="40" rx="4" fill="#0d9488" opacity="0.5" />
      <rect x="98" y="210" width="14" height="40" rx="4" fill="#0d9488" opacity="0.5" />
      {/* Tools on floor */}
      <rect x="290" y="220" width="40" height="10" rx="3" fill="#14b8a6" opacity="0.3" />
      <path d="M300 220V200L310 195L320 200V220" stroke="#0d9488" strokeWidth="2" fill="#14b8a6" opacity="0.15" />
      {/* Wrench */}
      <path d="M310 90L320 80L330 90L320 95Z" fill="#0d9488" opacity="0.4" />
      <rect x="317" y="93" width="6" height="30" rx="3" fill="#0d9488" opacity="0.3" />
      {/* Checkmark circle */}
      <circle cx="340" cy="140" r="20" fill="#14b8a6" opacity="0.15" stroke="#14b8a6" strokeWidth="2" />
      <path d="M330 140L337 147L350 134" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Gear */}
      <circle cx="60" cy="80" r="15" stroke="#14b8a6" strokeWidth="2" fill="none" opacity="0.3" />
      <circle cx="60" cy="80" r="6" fill="#14b8a6" opacity="0.2" />
    </svg>
  )
}

function RepairIllustration({ className }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background gear */}
      <circle cx="310" cy="90" r="40" stroke="#14b8a6" strokeWidth="2" fill="none" opacity="0.15" />
      <circle cx="310" cy="90" r="20" stroke="#14b8a6" strokeWidth="2" fill="none" opacity="0.1" />
      <circle cx="310" cy="90" r="8" fill="#14b8a6" opacity="0.1" />
      {/* Main wrench */}
      <path d="M120 80C100 60 100 30 120 10C125 15 125 25 130 30L170 70L120 80Z" fill="#0d9488" opacity="0.6" transform="translate(30,80) scale(0.9)" />
      <rect x="175" y="155" width="14" height="90" rx="5" fill="#0d9488" opacity="0.5" transform="rotate(-45, 182, 200)" />
      {/* Screwdriver */}
      <rect x="230" y="100" width="8" height="80" rx="4" fill="#14b8a6" opacity="0.5" transform="rotate(20, 234, 140)" />
      <path d="M228 100L238 100L234 70Z" fill="#0f766e" opacity="0.6" transform="rotate(20, 234, 90)" />
      <rect x="226" y="175" width="16" height="25" rx="4" fill="#0d9488" opacity="0.4" transform="rotate(20, 234, 188)" />
      {/* Appliance being repaired */}
      <rect x="140" y="120" width="100" height="130" rx="8" fill="white" stroke="#0d9488" strokeWidth="2.5" />
      <rect x="155" y="135" width="70" height="50" rx="4" fill="#14b8a6" opacity="0.1" stroke="#14b8a6" strokeWidth="1.5" />
      {/* Sparks / repair indicators */}
      <path d="M260 130L270 120L265 135L275 125" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      <path d="M270 150L278 142L274 155L282 147" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      {/* Progress indicator on appliance */}
      <rect x="160" y="200" width="60" height="8" rx="4" fill="#e2e8f0" />
      <rect x="160" y="200" width="40" height="8" rx="4" fill="#14b8a6" opacity="0.7" />
      <circle cx="190" cy="225" r="5" fill="#0d9488" opacity="0.5" />
      {/* Floating nuts/bolts */}
      <circle cx="80" cy="100" r="8" stroke="#14b8a6" strokeWidth="2" fill="none" opacity="0.3" />
      <circle cx="80" cy="100" r="3" fill="#14b8a6" opacity="0.2" />
      <circle cx="330" cy="220" r="6" stroke="#0d9488" strokeWidth="2" fill="none" opacity="0.25" />
      <circle cx="330" cy="220" r="2" fill="#0d9488" opacity="0.2" />
      {/* Small gear */}
      <circle cx="70" cy="200" r="12" stroke="#14b8a6" strokeWidth="2" fill="none" opacity="0.2" />
      <circle cx="70" cy="200" r="5" fill="#14b8a6" opacity="0.15" />
    </svg>
  )
}

function InspectionIllustration({ className }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Magnifying glass */}
      <circle cx="175" cy="130" r="65" stroke="#0d9488" strokeWidth="4" fill="#14b8a6" opacity="0.08" />
      <circle cx="175" cy="130" r="50" stroke="#14b8a6" strokeWidth="2" fill="white" opacity="0.5" />
      <line x1="222" y1="178" x2="280" y2="236" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" />
      <line x1="222" y1="178" x2="280" y2="236" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
      {/* Appliance inside magnifying glass */}
      <rect x="152" y="105" width="46" height="55" rx="5" fill="white" stroke="#14b8a6" strokeWidth="2" />
      <rect x="158" y="112" width="34" height="20" rx="3" fill="#14b8a6" opacity="0.15" />
      <circle cx="175" cy="148" r="5" fill="#14b8a6" opacity="0.4" />
      {/* Checklist */}
      <rect x="290" y="60" width="80" height="120" rx="6" fill="white" stroke="#0d9488" strokeWidth="2" />
      <rect x="302" y="72" width="56" height="6" rx="3" fill="#14b8a6" opacity="0.3" />
      {/* Checklist items */}
      <rect x="302" y="90" width="10" height="10" rx="2" stroke="#14b8a6" strokeWidth="1.5" fill="#14b8a6" opacity="0.1" />
      <path d="M304 95L307 98L312 92" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="318" y="92" width="35" height="5" rx="2" fill="#e2e8f0" />
      <rect x="302" y="110" width="10" height="10" rx="2" stroke="#14b8a6" strokeWidth="1.5" fill="#14b8a6" opacity="0.1" />
      <path d="M304 115L307 118L312 112" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="318" y="112" width="35" height="5" rx="2" fill="#e2e8f0" />
      <rect x="302" y="130" width="10" height="10" rx="2" stroke="#14b8a6" strokeWidth="1.5" fill="#14b8a6" opacity="0.1" />
      <path d="M304 135L307 138L312 132" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="318" y="132" width="35" height="5" rx="2" fill="#e2e8f0" />
      <rect x="302" y="150" width="10" height="10" rx="2" stroke="#0d9488" strokeWidth="1.5" fill="none" />
      <rect x="318" y="152" width="35" height="5" rx="2" fill="#e2e8f0" />
      {/* Decorative elements */}
      <circle cx="80" cy="70" r="15" fill="#14b8a6" opacity="0.1" />
      <circle cx="80" cy="70" r="8" fill="#14b8a6" opacity="0.08" />
      <circle cx="340" cy="220" r="10" fill="#0d9488" opacity="0.1" />
      {/* Sparkle accents */}
      <path d="M95 200L100 190L105 200L100 210Z" fill="#14b8a6" opacity="0.2" />
      <path d="M310 250L314 242L318 250L314 258Z" fill="#0d9488" opacity="0.15" />
    </svg>
  )
}

// Service Data
const services = [
  {
    id: 1,
    illustration: DeliveryIllustration,
    title: "Delivery Appliances",
    description: "Fast and reliable delivery of your new appliances right to your doorstep. We handle your products with the utmost care, ensuring they arrive in perfect condition. Our flexible scheduling options allow you to choose a delivery window that suits your availability, and our trained delivery team will carefully transport and place your appliance exactly where you need it.",
  },
  {
    id: 2,
    illustration: RecycleIllustration,
    title: "Remove & Recycle Appliances",
    description: "Responsible removal and eco-friendly recycling of your old appliances. We ensure proper disposal in compliance with environmental regulations, making your upgrade completely hassle-free and sustainable. Our team handles the heavy lifting, disconnection, and transportation, so you can enjoy your new appliance without worrying about the old one.",
  },
  {
    id: 3,
    illustration: InstallationIllustration,
    title: "Installation Appliances",
    description: "Professional installation by certified technicians who ensure your new appliance is set up correctly and safely. We handle all connections, test everything thoroughly before we leave, and provide a hands-on demonstration so you can start using your appliance with confidence right away.",
  },
  {
    id: 4,
    illustration: RepairIllustration,
    title: "Repair & Care Appliances",
    description: "Expert repair services for all major appliance brands. Our skilled technicians diagnose and fix issues quickly, using genuine parts to extend the life of your appliances and keep them running at peak performance. We offer warranties on all repairs and provide transparent pricing with no hidden costs.",
  },
  {
    id: 5,
    illustration: InspectionIllustration,
    title: "Inspection Appliances",
    description: "Thorough inspection services to assess the condition and performance of your appliances. We provide detailed reports and expert recommendations to help you make informed decisions about repairs, maintenance, or replacements, ensuring your home runs efficiently.",
  },
]

// Service Section Component
function ServiceSection({ service, index, isVisible }) {
  const isReversed = index % 2 !== 0
  const Illustration = service.illustration

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-16`}>
        {/* Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-md lg:max-w-lg p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100/50">
            <Illustration className="w-full h-auto" />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <span className="text-teal-500 font-semibold text-sm tracking-wider uppercase">
            Service {String(index + 1).padStart(2, "0")}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            {service.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mb-6" />
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            {service.description}
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                Get This Service
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Header */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-600 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />

        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24 sm:h-32" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="servicesWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(255, 255, 255)" stopOpacity="0.3">
                  <animate attributeName="stop-opacity" values="0.3;0.5;0.3" dur="4s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="rgb(255, 255, 255)" stopOpacity="0.1">
                  <animate attributeName="stop-opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#servicesWaveGradient)"
              d="M0,60L48,65C96,70,192,80,288,75C384,70,480,50,576,45C672,40,768,50,864,60C960,70,1056,80,1152,75C1248,70,1344,50,1392,40L1440,30L1440,120L0,120Z"
            >
              <animate
                attributeName="d"
                dur="6s"
                repeatCount="indefinite"
                values="M0,60L48,65C96,70,192,80,288,75C384,70,480,50,576,45C672,40,768,50,864,60C960,70,1056,80,1152,75C1248,70,1344,50,1392,40L1440,30L1440,120L0,120Z;M0,40L48,50C96,60,192,80,288,85C384,90,480,80,576,65C672,50,768,40,864,45C960,50,1056,60,1152,65C1248,70,1344,60,1392,55L1440,50L1440,120L0,120Z;M0,60L48,65C96,70,192,80,288,75C384,70,480,50,576,45C672,40,768,50,864,60C960,70,1056,80,1152,75C1248,70,1344,50,1392,40L1440,30L1440,120L0,120Z"
              />
            </path>
            <path
              className="fill-background"
              d="M0,80L60,75C120,70,240,60,360,55C480,50,600,50,720,55C840,60,960,70,1080,75C1200,80,1320,80,1380,80L1440,80V120H1380C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120H0Z"
            >
              <animate
                attributeName="d"
                dur="8s"
                repeatCount="indefinite"
                values="M0,80L60,75C120,70,240,60,360,55C480,50,600,50,720,55C840,60,960,70,1080,75C1200,80,1320,80,1380,80L1440,80V120H1380C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120H0Z;M0,70L60,65C120,60,240,55,360,60C480,65,600,75,720,80C840,85,960,85,1080,80C1200,75,1320,65,1380,60L1440,55V120H1380C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120H0Z;M0,80L60,75C120,70,240,60,360,55C480,50,600,50,720,55C840,60,960,70,1080,75C1200,80,1320,80,1380,80L1440,80V120H1380C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120H0Z"
              />
            </path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
            Our Services
          </h1>
          <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-pretty">
            From delivery to repair, we offer comprehensive appliance services to keep your home running smoothly.
          </p>
        </div>
      </section>

      {/* Services Sections */}
      <section ref={sectionRef} className="py-16 sm:py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-40 right-0 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-60 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="space-y-20 sm:space-y-28 lg:space-y-36">
            {services.map((service, index) => (
              <ServiceSection
                key={service.id}
                service={service}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div
            className={`bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden transition-all duration-700 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance">
                Need Help With Your Appliances?
              </h3>
              <p className="text-white/90 max-w-xl mx-auto mb-8 text-base sm:text-lg">
                Get in touch with our team of experts. We are available to assist you with any service enquiry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-white text-teal-600 hover:bg-white/90 font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button variant="outline" className="border-white/40 text-white hover:bg-white/10 bg-transparent font-semibold px-8 py-6 rounded-xl transition-all duration-300">
                    Browse Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
};

export default Services;
