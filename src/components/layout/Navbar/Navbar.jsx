import { useState } from "react";
import NavItemMobile from "./NavItemMobile";
import NavItemsDesktop from "./NavItemsDesktop";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "../../../assets/logo/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo/>

          {/* Desktop Menu */}
          <NavItemsDesktop />

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-xl border border-border/70"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <NavItemMobile onNavigate={closeMenu} onClose={closeMenu} />}
    </header>
  );
};
export default Navbar;

