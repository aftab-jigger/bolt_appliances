import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const linkClasses = ({ isActive }) =>
  `block rounded-xl px-4 py-2.5 text-[15px] font-medium transition-colors ${
    isActive
      ? "bg-teal-500 text-white shadow-sm"
      : "text-gray-700 hover:bg-gray-100"
  }`;

const NavItemMobile = ({ onNavigate, onClose }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (onClose) onClose();
      }
    };
    const handleEscape = (event) => {
      if (event.key === "Escape" && onClose) onClose();
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleNavigate = () => {
    if (onNavigate) onNavigate();
  };

  return (
    <div className="fixed inset-0 z-50 md:hidden backdrop-blur-[1px] px-3 pt-3">
      <div ref={menuRef} className="mx-auto w-full max-w-md rounded-2xl border bg-white shadow-xl overflow-hidden">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <span className="text-sm font-semibold text-gray-900">Menu</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-lg border border-gray-200"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <nav className="p-3 space-y-1.5">
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
        </nav>
      </div>
    </div>
  );
};

export default NavItemMobile;
