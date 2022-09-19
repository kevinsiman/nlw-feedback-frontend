import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";

import { Widget } from "./Widget/Widget";

export const WidgetButton = () => {
  return (
    <div className="absolute right-6 bottom-6">
      <Popover className="flex flex-col items-end justify-end gap-3">
        {({ open }) => (
          <>
            <Popover.Panel>
              <Widget />
            </Popover.Panel>
            <Popover.Button
              className="
               bg-brand-500
               text-zinc-100 
               px-3 
               h-12 
               rounded-full 
               flex 
               items-center 
               justify-center 
               border-transparent
               focus:border-brand-500
               focus:outline-none 
               group"
            >
              <ChatTeardropDots className="w-6 h-6" />
              <div
                className={
                  open
                    ? "max-w-xl overflow-hidden group-hover:max-w-xl transition-all duration-700 ease-linear"
                    : "max-w-0 overflow-hidden group-hover:max-w-xl transition-all duration-700 ease-linear"
                }
              >
                <span className="ml-1">Feedback</span>
              </div>
            </Popover.Button>
          </>
        )}
      </Popover>
    </div>
  );
};
