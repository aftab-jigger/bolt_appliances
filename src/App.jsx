import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import AboutSection from "./components/landingPage/AboutSection";
import Hero from "./components/landingPage/Hero";
import StatisticsSection from "./components/landingPage/StatisticsSection";
import ProductCategories from "./components/landingPage/ProductCategories";
import Testimonial from "./components/landingPage/Testimonial";
import ContactSection from "./components/landingPage/ContactSection";
import Services from "./components/service/Services";
import About from "./components/about/About";
import ProductList from "./components/products/ProductList";
import ContactUs from "./components/contact/ContactUs";

const HomePage = () => (
  <>
    <Hero />
    <AboutSection />
    <StatisticsSection />
    <ProductCategories />
    <Testimonial />
    <ContactSection />
  </>
);

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
