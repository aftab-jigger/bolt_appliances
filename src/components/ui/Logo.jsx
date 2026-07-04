import React from "react";

const Logo = () => {
  return (
    <div className="shrink-0 flex items-center">
      <img
        src="../../../public/images/bolt-logo.png" // <-- yahan apna logo add karo
        alt="Bolt Appliances Logo"
        className="h-10 w-35 mr-2"
      />
      {/* <h1 className="text-2xl font-bold text-slate-900">
                Bolt Appliances
              </h1> */}
    </div>
  );
};

export default Logo;
