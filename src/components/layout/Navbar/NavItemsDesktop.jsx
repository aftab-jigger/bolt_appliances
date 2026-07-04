import React from "react";
import { NavLink } from "react-router-dom";

const linkClasses = ({ isActive }) =>
  `text-sm font-medium transition-colors px-3 py-1 rounded-full ${
    isActive
      ? "bg-teal-500 text-white"
      : "text-foreground hover:text-primary"
  }`;

const NavItemsDesktop = () => {
  return (
    <div className="hidden md:flex items-center space-x-6">
      <NavLink to="/" className={linkClasses} end>
        Home
      </NavLink>
      <NavLink to="/products" className={linkClasses}>
        Products
      </NavLink>
      <NavLink to="/services" className={linkClasses}>
        Services
      </NavLink>
      <NavLink to="/about" className={linkClasses}>
        About
      </NavLink>
      <NavLink to="/contact" className={linkClasses}>
        Contact
      </NavLink>
    </div>
  );
};

export default NavItemsDesktop;
