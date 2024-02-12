import React from "react";

const Card = ({ title, content, icon, largeImg }) => {
  return (
    <div className="flex flex-col max-w-[294px] gap-2 p-4 rounded-2xl self-stretch bg-[#FFFFFF0D]">
      <img src={icon} className="h-12 w-12" />
      <div className="font-medium text-2xl">{title}</div>
      <div className="text-xs">{content}</div>
    </div>
  );
};

export default Card;
