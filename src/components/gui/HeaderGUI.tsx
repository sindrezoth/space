import ToggleThemeButton from "./ToggleThemeButton";
import ToggleUIButton from "./ToggleUIButton";

export default function HeaderGUI() {
  return (
    <header>
      <ToggleThemeButton />
      <ToggleUIButton />
    </header>
  );
}

