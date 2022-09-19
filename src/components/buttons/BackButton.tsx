import { ArrowLeft } from "phosphor-react";

interface BackButtonProps {
  resetType: () => void;
}

export const BackButton = ({ resetType }: BackButtonProps) => {
  return (
    <button
      onClick={resetType}
      className="absolute left-4 top-5 dark:text-zinc-400 text-zinc-600 dark:hover:text-zinc-100 hover:text-zinc-800 focus:outline-none focus:border-brand-500"
    >
      <ArrowLeft className="w-4 h-4" />
    </button>
  );
};
