import BaseHeroSection from "../common/herosection.jsx";
import banner from "../../assets/creatorbanner.png";
import profilepic from "../../assets/profilepic.png";
import Badge from "../common/Badges";
import { Button } from "@lemonsqueezy/wedges";
import ShareIcon from "../../assets/shareicon.jsx";
import SupportCard from "./supportcard.jsx";
import TipsCard from "./tipscard.jsx";

const CreatorPage = () => {
  return (
    <BaseHeroSection>
      <div className="container py-8 px-6  bg-[#FFFFFF0D] rounded-[48px]">
        <img
          className="w-full h-60 object-cover rounded-md"
          src={banner}
          alt="creator banner"
        />
        <img
          className="h-40 w-40 object-cover rounded-full mt-[-80px] mx-auto"
          src={profilepic}
          alt="creator profile"
        />
        <div className="flex flex-col items-center">
          <h4 className="text-white font-medium text-2xl mt-6">Nina Ernser</h4>
          <div className="flex gap-2 justify-center">
            <Badge title={`1.3k Supporters`} />
            <Badge title="music" />
          </div>
          <p className="text-white text-sm mt-1 text-center">
            <span className="font-bold ">Bio: </span>
            making amazing music <br />
            everyday for everyone...
          </p>
          <Button
            className="text-white bg-[#FFFFFF1A] mt-[16px]"
            size="md"
            shape="pill"
            variant="outline"
            after={<ShareIcon />}
          >
            Share
          </Button>
        </div>
        <div className="flex gap-6 mt-6 flex-wrap">
          <SupportCard />
          <TipsCard />
        </div>
      </div>
    </BaseHeroSection>
  );
};

export default CreatorPage;
