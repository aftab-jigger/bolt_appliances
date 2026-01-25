"use client"

import { useEffect, useState, useRef } from "react"
import { Phone, Mail, MapPin, Building2, Send, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    id: 1,
    icon: Phone,
    label: "Phone",
    value: "0207-971-1031",
    href: "tel:02079711031",
  },
  {
    id: 2,
    icon: Mail,
    label: "Email",
    value: "contact@boltappliances.com",
    href: "mailto:contact@boltappliances.com",
  },
  {
    id: 3,
    icon: MapPin,
    label: "Shop Address",
    value: "288 Wightman Road, London N8 0LT",
    href: "https://maps.google.com/?q=288+Wightman+Road+London+N8+0LT",
  },
  {
    id: 4,
    icon: Building2,
    label: "Office Address",
    value: "Kemp House, 152-160 City Road, London EC1V 2NX",
    href: "https://maps.google.com/?q=Kemp+House+152-160+City+Road+London+EC1V+2NX",
  },
]

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    alert("Thank you for your message! We will get back to you soon.")
  }

  return (
    <main className="min-h-screen">

      {/* Page Header */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-600 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />

        {/* Animated Wave Background */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-24 sm:h-32"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="headerWaveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(255, 255, 255)" stopOpacity="0.3">
                  <animate attributeName="stop-opacity" values="0.3;0.5;0.3" dur="4s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="rgb(255, 255, 255)" stopOpacity="0.1">
                  <animate attributeName="stop-opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#headerWaveGradient1)"
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help with all your home appliance needs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={sectionRef}
        className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-teal-50/30 relative overflow-hidden"
      >
        {/* Animated Wave Background at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg
            className="w-full h-48 sm:h-64"
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

        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-40 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-teal-500 font-semibold tracking-wider text-sm uppercase">Get In Touch</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-foreground">
              We'd Love to Hear From You
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm sm:text-base">
              Fill out the form below and our team will get back to you as soon as possible.
            </p>
          </div>

          {/* Main Content - Form and Info Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left - Contact Form (Takes 3 columns) */}
            <div
              className={`lg:col-span-3 bg-card rounded-2xl p-6 sm:p-8 shadow-lg border transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 rounded-xl border-border focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 rounded-xl border-border focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+44 123 456 7890"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-12 rounded-xl border-border focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="h-12 rounded-xl border-border focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="rounded-xl border-border focus:border-teal-500 focus:ring-teal-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-6 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Right - Contact Information (Takes 2 columns) */}
            <div
              className={`lg:col-span-2 flex flex-col gap-4 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              {/* Contact Info Cards */}
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <a
                    key={info.id}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`group flex items-center gap-4 bg-card rounded-2xl p-5 shadow-lg border hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden relative ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="relative z-10 min-w-0">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">{info.label}</p>
                      <p className="text-foreground font-semibold text-sm group-hover:text-teal-600 transition-colors truncate">
                        {info.value}
                      </p>
                    </div>
                  </a>
                )
              })}

              {/* Business Hours Card */}
              <div
                className={`bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl p-5 shadow-lg text-white transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">Business Hours</h3>
                </div>
                <div className="space-y-2 text-sm text-white/90">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">09:30 AM - 06:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 04:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">10:00 AM - 02:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactUs;