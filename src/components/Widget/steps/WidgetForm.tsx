import { FormEvent, useState } from "react";

import { FeedbackKey, feedbackTypes } from "../Widget";

import { BackButton } from "../../buttons/BackButton";
import { CloseButton } from "../../buttons/CloseButton";
import { ScreenshotButton } from "../../buttons/ScreenshotButton";

interface WidgetFormProps {
  type: FeedbackKey;
  resetType: () => void;
  setIsSuccess: (type: boolean) => void;
}

export const WidgetForm = ({
  type,
  resetType,
  setIsSuccess,
}: WidgetFormProps) => {
  const feedback = feedbackTypes[type];
  const [comment, setComment] = useState<string>("");
  const [screenshot, setScreenshot] = useState<string | null>("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault;
    setIsSuccess(true);
  };

  return (
    <>
      <header className="h-[52px] flex items-center text-lg leading-6 gap-1">
        <BackButton resetType={resetType} />
        <span>{feedback.title}</span>
        <img
          className="w-6 h-6"
          src={feedback.image.src}
          alt={feedback.image.alt}
        />
        <CloseButton />
      </header>
      <form className="h-[160px] px-4 w-full flex flex-col items-center justify-center gap-2">
        <textarea
          onChange={(event) => setComment(event.target.value)}
          placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
          className="mob:min-w-[304px] w-full h-28 px-2 bg-transparent resize-none rounded-md focus:ring-1 focus:ring-brand-500 focus:border-none text-sm scrollbar-thin scrollbar-thumb-zinc-400 dark:scrollbar-thumb-zinc-700 scrollbar-track-transparent"
        />
        <div className="flex w-full gap-2">
          <ScreenshotButton
            screenshot={screenshot}
            setScreenshot={setScreenshot}
          />
          <button
            type="submit"
            disabled={comment.length === 0}
            onClick={handleSubmit}
            className="flex-1 bg-brand-500 text-zinc-100 py-2 rounded-md disabled:opacity-60"
          >
            Enviar feedback
          </button>
        </div>
      </form>
    </>
  );
};
