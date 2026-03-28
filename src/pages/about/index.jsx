import AboutSection from "./features/About";
import PageHeader from "@/components/ui/page-header";

const About = () => {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="About Us"
        description="Learn more about our company and our mission."
      />
      <AboutSection />
    </main>
  );
};

export default About;
