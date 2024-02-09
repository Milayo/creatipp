import React from "react";
import Crypto from "../assets/crytos.png";
import ICLogo from "../assets/iclogo.png";
import HeaderComponent from "../components/header";
import { Button } from "@lemonsqueezy/wedges";

const HeroSection = () => {
  return (
    <div className="bg-landing-bg bg-cover bg-center h-screen">
      <HeaderComponent />
      <div className="flex justify-center flex-col items-center gap-4 mt-4">
        <img src={Crypto} className="h-44 w-44" />
        <div className="flex gap-2 border border-purple-400 rounded-3xl px-3 py-2 bg-[#FFFFFF1A]">
          <div className="text-sm text-white">Powered by</div>
          <img src={ICLogo} className="w-28 h-5" />
        </div>
        <div className="text-white max-w-4xl text-center">
          <p className="text-7xl font-bold font-medium">
            Receive crypto donations from your supporters
          </p>
          <p className="text-base mt-2">
            Built for creators, get funded for your creative work, create
            donation campaigns for various causes. It’s that easy.
          </p>
        </div>
        <Button className="bg-white text-black text-sm font-medium rounded-3xl mt-6 py-2 px-3">
          Get started 🚀
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
