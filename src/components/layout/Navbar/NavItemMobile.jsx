import React from "react";

const NavItemMobile = () => {
  return (
    <div className="md:hidden bg-white shadow-md">
      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
        Home
      </a>
      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
        Products
      </a>
      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
        Services
      </a>
      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
        About
      </a>
      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
        Contact
      </a>
    </div>
  );
};

export default NavItemMobile;
