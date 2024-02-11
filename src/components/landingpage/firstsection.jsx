import React from "react";
import TitleBanner from "../common/titlebanner";
import Card from "../common/card";
import FirstSectionImg from "../../assets/firstsection.png";
import Card1 from "../../assets/card1.png";
import Card2 from "../../assets/card2.png";
import Card3 from "../../assets/card3.png";
import Card4 from "../../assets/card4.png";
import BannerImg1 from "../../assets/bannerimg1.png";

const FirstSection = () => {
  return (
    <div className="flex gap-12 max-w-[1304px] mx-auto px-6 py-12 mt-[-88px] text-white items-center rounded-[48px] bg-[#FFFFFF0D] -z-10">
      <div className="flex flex-col gap-2 flex-1">
        <TitleBanner>
          Why Creatipp?
          <img src={BannerImg1} className="h-8 w-8" />
        </TitleBanner>
        <div className="flex flex-wrap gap-4">
          <Card
            icon={Card1}
            title="Connection with audience"
            content="Connect directly with your audience and receive support without intermediaries. No more waiting for funds to be processed or dealing with high transaction fees."
          ></Card>
          <Card
            icon={Card2}
            title="Create impactful campaigns"
            content="Whether you're a musician, artist, writer, or any other creative professional, Creatipp enables you to create donation campaigns for your projects or causes close to your heart."
          ></Card>
          <Card
            icon={Card3}
            title="Transparent transactions"
            content="Experience transparency like never before. All transactions are recorded on the blockchain, ensuring a secure and transparent donation process."
          ></Card>
          <Card
            icon={Card4}
            title="Global Reach"
            content=" With crypto donations, your supporters can come from anywhere in the world. Break down geographical barriers and build a global community around your creative endeavors."
          ></Card>
        </div>
      </div>
      <div className="flex-1">
        <img src={FirstSectionImg} className="max-w-[604px] h-auto" />
      </div>
    </div>
  );
};

export default FirstSection;
