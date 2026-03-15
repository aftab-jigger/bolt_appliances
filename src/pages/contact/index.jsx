import PageHeader from "@/components/ui/page-header"
import ContactSection from "./features/ContactSection"

const Contact = () => {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Contact Us"
        description="Have questions or need assistance? We're here to help with all your home appliance needs."
      />
      <ContactSection />
    </main>
  )
}

export default Contact
