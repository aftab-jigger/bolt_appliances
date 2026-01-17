import React from "react";

const NavItemsDesktop = () => {
  return (
    <div className="hidden md:flex items-center space-x-6">
      <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
        Home
      </a>
      <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
        Products
      </a>
      <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
        Services
      </a>
      <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
        About
      </a>
      <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
        Contact
      </a>
    </div>
  );
};

export default NavItemsDesktop;
