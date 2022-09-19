import { CircleNotch } from "phosphor-react";

export const Loading = () => {
  return (
    <button className="px-2 bg-zinc-100 dark:bg-zinc-800 rounded-md">
      <CircleNotch className="w-6 h-6 animate-spin" />
    </button>
  );
};
