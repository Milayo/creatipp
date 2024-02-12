import React from "react";
import TitleBanner from "../common/titlebanner";
import Card from "../common/card";
import SecdSectionImg from "../../assets/secondsection.png";
import Card1 from "../../assets/1.png";
import Card2 from "../../assets/2.png";
import Card3 from "../../assets/3.png";
import Card4 from "../../assets/4.png";
import BannerImg from "../../assets/bolt.png";

const SecondSection = () => {
  return (
    <div className="flex gap-12 max-w-[1304px] mx-auto px-6 py-12 mt-24 text-white items-center rounded-[48px] bg-[#FFFFFF0D]">
      <div className="flex-1">
        <img src={SecdSectionImg} className="max-w-[604px] h-auto" />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <TitleBanner>
          How it Works
          <img src={BannerImg} className="h-8 w-8" />
        </TitleBanner>
        <div className="flex flex-wrap gap-4">
          <Card
            icon={Card1}
            title="Sign up"
            content="Join the Creatipp community by creating your profile. It's quick, easy, and absolutely free."
          ></Card>
          <Card
            icon={Card2}
            title="Setup your campaign goal"
            content="Define your creative project or cause, set a funding goal, and launch your campaign. Tell your story and inspire your audience."
          ></Card>
          <Card
            icon={Card3}
            title="Receive crypto donations"
            content="Watch as your supporters contribute in various cryptocurrencies. Creatipp handles the complexities, ensuring a smooth donation process."
          ></Card>
          <Card
            icon={Card4}
            title="Withdraw funds"
            content="When your campaign is successful, withdraw your funds in your"
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
