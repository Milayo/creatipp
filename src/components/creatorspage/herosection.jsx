import BaseHeroSection from "../common/herosection.jsx";
import React from "react";
import { Button } from "@lemonsqueezy/wedges";

const HeroSection = () => {
  return (
    <BaseHeroSection>
      Creators Page
      <Button className="bg-white text-black text-sm font-medium rounded-3xl mt-6 py-2 px-3">
        Get started 🚀
      </Button>
    </BaseHeroSection>
  );
};

export default HeroSection;
