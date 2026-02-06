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
import CategoryPage from "./components/products/category/CategoryPage";
import Product from "./components/products/category/id/Product";

const HomePage = () => (
  <>
    <Hero />
    <ProductCategories />
    <AboutSection />
    <StatisticsSection />
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
          <Route path="/products/:category" element={<CategoryPage />} />
          <Route path="/products/:category/:id" element={<Product />} />

        </Routes>
      </main>
    </>
  );
};

export default App;
