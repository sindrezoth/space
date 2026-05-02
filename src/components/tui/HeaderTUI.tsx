import ToggleThemeButton from "./ToggleThemeButton";
import ToggleUIButton from "./ToggleUIButton";

export default function HeaderTUI() {
  return (
    <header>
      <ToggleThemeButton />
      <ToggleUIButton />
    </header>
  );
}

