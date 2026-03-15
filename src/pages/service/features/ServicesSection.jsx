 

import { Link } from "react-router-dom"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import {
  ArrowRight,
  DeliveryIllustration,
  RecycleIllustration,
  InstallationIllustration,
  RepairIllustration,
  InspectionIllustration,
} from "@/assets/icons/icons"
import { Button } from "@/components/ui/button"

const services = [
  { id: 1, illustration: DeliveryIllustration, title: "Delivery Appliances", description: "Fast and reliable delivery of your new appliances right to your doorstep. We handle your products with the utmost care, ensuring they arrive in perfect condition. Our flexible scheduling options allow you to choose a delivery window that suits your availability, and our trained delivery team will carefully transport and place your appliance exactly where you need it." },
  { id: 2, illustration: RecycleIllustration, title: "Remove & Recycle Appliances", description: "Responsible removal and eco-friendly recycling of your old appliances. We ensure proper disposal in compliance with environmental regulations, making your upgrade completely hassle-free and sustainable. Our team handles the heavy lifting, disconnection, and transportation, so you can enjoy your new appliance without worrying about the old one." },
  { id: 3, illustration: InstallationIllustration, title: "Installation Appliances", description: "Professional installation by certified technicians who ensure your new appliance is set up correctly and safely. We handle all connections, test everything thoroughly before we leave, and provide a hands-on demonstration so you can start using your appliance with confidence right away." },
  { id: 4, illustration: RepairIllustration, title: "Repair & Care Appliances", description: "Expert repair services for all major appliance brands. Our skilled technicians diagnose and fix issues quickly, using genuine parts to extend the life of your appliances and keep them running at peak performance. We offer warranties on all repairs and provide transparent pricing with no hidden costs." },
  { id: 5, illustration: InspectionIllustration, title: "Inspection Appliances", description: "Thorough inspection services to assess the condition and performance of your appliances. We provide detailed reports and expert recommendations to help you make informed decisions about repairs, maintenance, or replacements, ensuring your home runs efficiently." },
]

function ServiceSection({ service, index, isVisible }) {
  const isReversed = index % 2 !== 0
  const Illustration = service.illustration

  return (
    <div
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-16`}>
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-md lg:max-w-lg p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100/50">
            <Illustration className="w-full h-auto" />
          </div>
        </div>
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
            <Link to="/contact">
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

const ServicesSection = () => {
  const { ref: sectionRef, isVisible } = useIntersectionObserver({ threshold: 0.05 })

  return (
    <>
      <section ref={sectionRef} className="py-12 bg-gradient-to-b from-background to-teal-50/30 relative overflow-hidden">
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
                <Link to="/contact">
                  <Button className="bg-white text-teal-600 hover:bg-white/90 font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/products">
                  <Button variant="outline" className="border-white/40 text-white hover:bg-white/10 bg-transparent font-semibold px-8 py-6 rounded-xl transition-all duration-300">
                    Browse Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesSection
