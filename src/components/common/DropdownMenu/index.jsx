import { ChevronDownIcon } from "@iconicicons/react";
import { DropdownMenu } from "@lemonsqueezy/wedges";

export function Dropdown({ label }) {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <span className="group flex shrink cursor-pointer select-none items-center justify-center rounded-lg p-1.5 px-2 text-sm text-surface-600 transition-colors duration-100 pt-0 pb-0">
          <span className="text-[#FFFFFFCC]">{label}</span>

          <ChevronDownIcon className="trigger-icon h-6 w-6 text-surface-400 text-[#FFFFFFCC]" />
        </span>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        align="center"
        className="min-w-[140px]"
      ></DropdownMenu.Content>
    </DropdownMenu>
  );
}
