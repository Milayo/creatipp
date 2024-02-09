import React from "react";
import HeaderComponent from "./header";
const HeroSection = ({ children, isLanding }) => {
  return (
    <div
      className={`${
        isLanding ? "bg-landing-bg" : "bg-other-hero-bg"
      } bg-cover bg-center h-screen`}
    >
      <HeaderComponent />
      <div className="flex justify-center flex-col items-center gap-4 mt-4">
        {children}
      </div>
    </div>
  );
};

export default HeroSection;
