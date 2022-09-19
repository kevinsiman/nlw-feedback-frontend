import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export const CloseButton = () => {
  return (
    <Popover.Button className="absolute right-4 top-5 dark:text-zinc-400 text-zinc-600 dark:hover:text-zinc-100 hover:text-zinc-800 focus:outline-none focus:border-brand-500">
      <X weight="bold" className="w-4 x-4" />
    </Popover.Button>
  );
};
