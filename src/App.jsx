import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/layout/Navbar/Navbar";
import Home from "./pages/home";
import Services from "./pages/service";
import About from "./pages/about";
import Products from "./pages/products";
import Contact from "./pages/contact";
import Category from "./pages/products/category";
import ProductPage from "./pages/products/category/id";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
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
      </main>
    </>
  );
};

export default App;
