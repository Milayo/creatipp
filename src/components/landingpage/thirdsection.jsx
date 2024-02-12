import React from "react";
import TitleBanner from "../common/titlebanner";
import BannerImg from "../../assets/bannerimg3.png";
import Card1 from "../../assets/image1.png";
import Card2 from "../../assets/image2.png";
import Card3 from "../../assets/image3.png";

const ThirdSection = () => {
  const cards = [
    {
      Icon: Card1,
      title: "Blockchain Security",
      content:
        "Feel confident in the security of transactions. All donations are securely recorded on the blockchain, ensuring transparency and eliminating concerns about fraud.",
    },
    {
      Icon: Card2,
      title: "Impactful Causes",
      content:
        "Contribute to campaigns that resonate with your values. Creatipp allows creators to launch campaigns not just for personal projects but also for charitable causes, giving supporters the opportunity to be part of something meaningful.",
    },
    {
      Icon: Card3,
      title: "Collaboration Opportunities",
      content:
        "Some campaigns may involve collaborative projects. As a supporter, you might get the chance to actively participate in or influence the creative process, fostering a sense of collaboration and shared ownership.",
    },
  ];
  return (
    <div className="flex flex-col gap-6 text-white bg-[#FFFFFF0D] max-w-[1304px] mx-auto p-8 mt-16 rounded-[48px]">
      <div className="flex bg-[#FFFFFF1A] justify-center items-center gap-2 py-2 px-6 text-3xl rounded-2xl">
        Benefit for donators
        <img src={BannerImg} className="h-8 w-8" />
      </div>
      <div className="flex gap-4">
        {cards.map((card) => (
          <div className="flex flex-col flex-1 gap-2 p-4 bg-[#FFFFFF0D] rounded-2xl">
            <img src={card.Icon} className="self-center w-[370px] h-[360px]" />
            <div className="text-2xl">{card.title}</div>
            <div className="text-xs">{card.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdSection;
