/* eslint-disable react/prop-types */
import Badge from "./Badges";
const CardWithImage = ({ creatorname, supporters, occupation, bio, img }) => {
  return (
    <div className="p-4 flex gap-2 max-w-[302px] w-full bg-[#FFFFFF0D] flex-col rounded-2xl">
      <img className="w-full h-80 object-cover rounded-lg" src={img} />
      <h4 className="text-white font-medium text-2xl">{creatorname}</h4>
      <div className="flex gap-2">
        <Badge title={`${supporters} Supporters`} />
        <Badge title={occupation} />
      </div>
      <p className="text-white text-sm">
        <span className="font-bold">Bio: </span>
        {bio}
      </p>
    </div>
  );
};

export default CardWithImage;
