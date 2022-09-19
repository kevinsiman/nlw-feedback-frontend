import { useState } from "react";

import bugImg from "../../assets/bug.svg";
import ideaImg from "../../assets/idea.svg";
import cloudImg from "../../assets/cloud.svg";

import { WidgetSteps } from "./steps/WidgetSteps";
import { WidgetForm } from "./steps/WidgetForm";
import { WidgetSuccess } from "./steps/WidgetSuccess";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      src: bugImg,
      alt: "Imagem de um Inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      src: ideaImg,
      alt: "Imagem de uma Lampada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      src: cloudImg,
      alt: "Imagem de uma nuvem de pensamento",
    },
  },
};

export type FeedbackKey = keyof typeof feedbackTypes;

export const Widget = () => {
  const [type, setType] = useState<FeedbackKey | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const resetType = () => {
    setType(null);
    setIsSuccess(false);
  };

  return (
    <div className="dark:bg-zinc-900 shadow-xl bg-white w-[calc(100vw-2rem)] mob:w-[336px] h-[264px] min-w-[235px] flex flex-col items-center justify-center rounded-lg relative">
      {isSuccess ? (
        <WidgetSuccess resetType={resetType} />
      ) : (
        <>
          {!type ? (
            <WidgetSteps setType={setType} />
          ) : (
            <WidgetForm
              setIsSuccess={setIsSuccess}
              resetType={resetType}
              type={type}
            />
          )}
        </>
      )}

      <footer className="h-[52px] flex items-center text-sm dark:text-zinc-400 text-zinc-500 font-semibold">
        Feito por Kevin Siman
      </footer>
    </div>
  );
};
