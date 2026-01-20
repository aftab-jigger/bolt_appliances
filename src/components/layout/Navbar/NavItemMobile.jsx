import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const linkClasses = ({ isActive }) =>
  `block px-4 py-2 text-gray-700 ${
    isActive
      ? "bg-teal-500 text-white rounded-full"
      : "hover:bg-gray-100"
  }`;

const NavItemMobile = ({ onNavigate, onClose }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (onClose) onClose();
      }
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [onClose]);

  const handleNavigate = () => {
    if (onNavigate) onNavigate();
  };

  return (
    <div ref={menuRef} className="md:hidden bg-white shadow-md">
      <NavLink to="/" end className={linkClasses} onClick={handleNavigate}>
        Home
      </NavLink>
      <NavLink to="/products" className={linkClasses} onClick={handleNavigate}>
        Products
      </NavLink>
      <NavLink to="/services" className={linkClasses} onClick={handleNavigate}>
        Services
      </NavLink>
      <NavLink to="/about" className={linkClasses} onClick={handleNavigate}>
        About
      </NavLink>
      <NavLink to="/contact" className={linkClasses} onClick={handleNavigate}>
        Contact
      </NavLink>
    </div>
  );
};

export default NavItemMobile;
