import { useState } from "react";

import { Loading } from "./LoadingButton";

import { Camera, CircleNotch, Trash } from "phosphor-react";
import html2canvas from "html2canvas";

interface ScreenshotButtonProps {
  screenshot: string | null;
  setScreenshot: (type: string | null) => void;
}

export const ScreenshotButton = ({
  screenshot,
  setScreenshot,
}: ScreenshotButtonProps) => {
  const [isTakingPhoto, setIsTakingPhoto] = useState<boolean>(false);

  async function handleScreenshot() {
    setIsTakingPhoto(true);
    const photo = await html2canvas(document.querySelector("html")!);
    const canvas = photo.toDataURL("image/png");

    setScreenshot(canvas);
    setIsTakingPhoto(false);
  }

  if (screenshot) {
    return (
      <button
        onClick={() => setScreenshot(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: `right bottom`,
          backgroundSize: 120,
        }}
        className="
          w-10 
          h-10 
          p-1 
          bg-zinc-800 
          rounded-md 
          flex 
          items-end 
          justify-end
          "
      >
        <Trash weight="fill" className="w-4 h-4" />
      </button>
    );
  }

  return (
    <>
      {isTakingPhoto ? (
        <Loading />
      ) : (
        <button
          type="button"
          onClick={handleScreenshot}
          className="px-2 bg-zinc-100 dark:bg-zinc-800 rounded-md"
        >
          <Camera className="w-6 h-6" />
        </button>
      )}
    </>
  );
};
