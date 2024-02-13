import { Input as BaseInput } from "@lemonsqueezy/wedges";
import { Textarea as BaseTextArea } from "@lemonsqueezy/wedges";
import "./input.css";
import { Dropdown } from "../DropdownMenu";

const Input = ({ ...props }) => {
  return (
    <BaseInput
      {...props}
      className="bg-[#00000000] border-[#FFFFFF33] placeholder-[#ffffff80]"
    />
  );
};

export default Input;

export const TextArea = ({ ...props }) => {
  return (
    <BaseTextArea
      {...props}
      className="bg-[#00000000] border-[#FFFFFF33] placeholder-[#ffffff80]"
    />
  );
};

export const AmountInput = ({ ...props }) => {
  return (
    <div className="relative">
      <span className="absolute text-[#FFFFFFCC] top-[40px] left-4">$</span>
      <BaseInput
        {...props}
        placeholder="0.00"
        className="bg-[#00000000] border-[#FFFFFF33] placeholder-[#ffffff80] text-white pl-8 pr-[74px]"
      />
      <div className="absolute text-white top-[40px] right-2">
        <Dropdown label="USDT" />
      </div>
    </div>
  );
};
