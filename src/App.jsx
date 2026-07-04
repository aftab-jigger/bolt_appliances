import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./components/sections/Hero";

const App = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <Hero />
      <main className="mt-16">
        <section id="products" className="py-16">
          <h3 className="text-3xl text-center font-bold">Our Products</h3>
        </section>
        <section id="contact" className="py-16 bg-gray-50">
          <h3 className="text-3xl text-center font-bold">Contact Us</h3>
        </section>
      </main>
    </>
  );
};

export default App;
