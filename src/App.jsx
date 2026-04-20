import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/layout/Navbar/Navbar";

const Home = lazy(() => import("./pages/home"));
const Services = lazy(() => import("./pages/service"));
const About = lazy(() => import("./pages/about"));
const Products = lazy(() => import("./pages/products"));
const Contact = lazy(() => import("./pages/contact"));
const Category = lazy(() => import("./pages/products/category"));
const ProductPage = lazy(() => import("./pages/products/category/id"));

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<div className="min-h-[40vh]" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
            <Route path="/products/:category" element={<Category />} />
            <Route path="/products/:category/:id" element={<ProductPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
