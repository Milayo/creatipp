import CreatorCardWrapper from "./creatorcardwrapper";
import TitleBanner from "../common/titlebanner";
import Input, { AmountInput, TextArea } from "../common/input/Input";

const SupportCard = () => {
  return (
    <CreatorCardWrapper>
      <div className="flex flex-col gap-[10px]">
        <TitleBanner sm>Support</TitleBanner>
        <Input
          label="Name"
          description="(optional)"
          placeholder="Your name"
          helperText="Leave empty to support anonymously."
        />
        <AmountInput
          required
          label="Amount"
          helperText="Input amount and select preferred crypto."
        />
        <TextArea
          label="Note"
          description="(optional)"
          placeholder="Say something nice"
          helperText="leave note for creator"
        />
      </div>
    </CreatorCardWrapper>
  );
};

export default SupportCard;
