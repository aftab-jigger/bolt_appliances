import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import NavItemMobile from "./NavItemMobile";
import NavItemsDesktop from "./NavItemsDesktop";
import Logo from "../../ui/Logo";
import Hero from "../../sections/Hero";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="relative">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Logo />

            {/* Desktop Menu */}
            <NavItemsDesktop />

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-700 focus:outline-none"
              >
                {isOpen ? (
                  <HiX className="h-6 w-6" />
                ) : (
                  <HiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && <NavItemMobile />}
      </nav>

      {/* Hero Section
      <Hero /> */}
    </header>
  );
};
export default Navbar;
