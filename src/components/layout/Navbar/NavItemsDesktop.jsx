import React from "react";

const NavItemsDesktop = () => {
  return (
    <div className="hidden md:flex space-x-8">
      <a href="#" className="text-gray-700 hover:text-sky-500 font-medium">
        Home
      </a>
      <a href="#" className="text-gray-700 hover:text-sky-500 font-medium">
        Products
      </a>
      <a href="#" className="text-gray-700 hover:text-sky-500 font-medium">
        Services
      </a>
      <a href="#" className="text-gray-700 hover:text-sky-500 font-medium">
        About
      </a>
      <a href="#" className="text-gray-700 hover:text-sky-500 font-medium">
        Contact
      </a>
    </div>
  );
};

export default NavItemsDesktop;
