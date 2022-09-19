import { DarkModeSwitcher } from "./components/buttons/DarkModeSwitcher";
import { WidgetButton } from "./components/WidgetButton";

export const App = () => {
  return (
    <div>
      <DarkModeSwitcher />
      <span> Feedback</span>
      <hr className="py-5"></hr>
      <WidgetButton />
    </div>
  );
};
