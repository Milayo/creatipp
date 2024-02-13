import CreatorCardWrapper from "./creatorcardwrapper";
import TitleBanner from "../common/titlebanner";
import DollarIcon from "../../assets/dollaricon";
import DropDownIcon from "../../assets/dropdownIcon";
import { Button } from "@lemonsqueezy/wedges";

const Tip = ({ name, time, value }) => {
  return (
    <div className="border border-[#FFFFFF33] p-4 flex gap-2 rounded-2xl">
      <DollarIcon />
      <div className="flex-grow flex text-sm items-center">
        <p className="flex-1 text-[#FFFFFFCC]">{name}</p>
        <p className="flex-1 text-[#FFFFFFCC] font-medium">{value}</p>
        <p className="flex-1 text-[#FFFFFF80]">{time}</p>
      </div>
      <div className="flex items-center">
        <DropDownIcon />
      </div>
    </div>
  );
};

const TipsCard = () => {
  return (
    <CreatorCardWrapper>
      <TitleBanner sm>Recent tips</TitleBanner>
      <div className="mt-[10px] gap-[10px] flex flex-col">
        <Tip name="Velma Volkman" value="0.51 ETH" time="5 mins" />
        <Tip name="Velma Volkman" value="0.51 ETH" time="5 mins" />
        <Tip name="Velma Volkman" value="0.51 ETH" time="5 mins" />
        <Tip name="Velma Volkman" value="0.51 ETH" time="5 mins" />
        <Button
          className="text-white bg-black border-[#FFFFFF33] mx-auto mt-[10px]"
          size="md"
          shape="pill"
          variant="outline"
        >
          All tips
        </Button>
      </div>
    </CreatorCardWrapper>
  );
};

export default TipsCard;
