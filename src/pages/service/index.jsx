import PageHeader from "@/components/ui/page-header"
import ServicesSection from "./features/ServicesSection"

const Services = () => {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Our Services"
        description="From delivery to repair, we offer comprehensive appliance services to keep your home running smoothly."
        titleClassName="text-balance"
        descriptionClassName="text-pretty"
      />
      <ServicesSection />
    </main>
  )
}

export default Services
