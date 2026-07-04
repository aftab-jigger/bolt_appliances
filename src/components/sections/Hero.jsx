import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="relative bg-[url('/bg.jpg')] bg-cover bg-center min-h-screen flex items-center">
        <div className="absolute inset-0 bg-slate-900 bg-opacity-50"></div>{" "}
        {/* Dark overlay */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Reliable Appliance Solutions
          </h2>
          <p className="text-white text-lg md:text-xl mb-6">
            Fast, Trusted, and Affordable Appliance Services for Your Home
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-sky-500 text-white font-medium rounded-md hover:bg-sky-600 transition"
            >
              Get a Quote
            </a>
            <a
              href="#products"
              className="px-6 py-3 bg-white text-slate-900 font-medium rounded-md hover:bg-gray-100 transition"
            >
              Our Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
