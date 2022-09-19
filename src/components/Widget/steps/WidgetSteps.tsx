import { CloseButton } from "../../buttons/CloseButton";
import { BackButton } from "../../buttons/BackButton";

import { feedbackTypes, FeedbackKey } from "../Widget";

interface WidgetStepsProps {
  setType: (type: FeedbackKey | null) => void;
}

export const WidgetSteps = ({ setType }: WidgetStepsProps) => {
  return (
    <>
      <header className="h-[52px] flex items-center text-lg leading-6">
        <span>Deixe um Feedback</span>
        <CloseButton />
      </header>
      <div className="w-full mob:w-full flex-wrap px-3 h-[160px] flex items-center gap-2">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              type="button"
              onClick={() => setType(key as FeedbackKey)}
              key={key as FeedbackKey}
              className="flex-1 flex flex-col items-center justify-center dark:bg-zinc-800 bg-zinc-100  py-6 w-24 rounded-md gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none transition-colors"
            >
              <img src={value.image.src} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};
