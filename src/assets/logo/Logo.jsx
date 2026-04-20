import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="shrink-0 flex items-center">
      <Link to="/" aria-label="Go to home">
        <img
          src="/images/bolt-logo.png" // <-- yahan apna logo add karo
          alt="Bolt Appliances Logo"
          className="h-10 w-35 mr-2"
        />
      </Link>
    </div>
  );
};

export default Logo;