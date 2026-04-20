import { Suspense, lazy } from "react";
import Hero from "./features/Hero";
import FeatureProduct from "./features/featureProduct";
import ProductCategories from "./features/ProductCategories";

const AboutSection = lazy(() => import("./features/AboutSection"));
const StatisticsSection = lazy(() => import("./features/StatisticsSection"));
const Testimonial = lazy(() => import("./features/Testimonial"));
const ContactSection = lazy(() => import("./features/ContactSection"));

const Home = () => (
  <>
    <Hero />
    <FeatureProduct />
    <ProductCategories />
    <Suspense fallback={<div className="min-h-24" />}>
      <AboutSection />
      <StatisticsSection />
      <Testimonial />
      <ContactSection />
    </Suspense>
  </>
);

export default Home;
