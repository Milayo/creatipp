import React from "react";
import HeroSection from "../components/landingpage/herosection";
import FirstSection from "../components/landingpage/firstsection";
import SecondSection from "../components/landingpage/secondsection";
import ThirdSection from "../components/landingpage/thirdsection";

const LandingPage = () => {
  return (
    <div className="bg-black">
      <HeroSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
};

export default LandingPage;
