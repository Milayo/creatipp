import React from "react";
import HeroSection from "../components/landingpage/herosection";
import FirstSection from "../components/landingpage/firstsection";

const LandingPage = () => {
  return (
    <div className="bg-black">
      <HeroSection />
      <FirstSection />
    </div>
  );
};

export default LandingPage;
