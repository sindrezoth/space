"use client";

import { useUI } from "@/hooks/useUI";
import { ALLOWED_UI } from "@/lib/constants";
import { UI } from "@/type";

export default function UIToggle() {
  const { ui, setUi } = useUI()

  if(!ui) {
    return null;
  }
  console.log(ALLOWED_UI.indexOf(ui));

  return (
    <div className="ui-toggle">
      <div
        className="highlight"
        style={{
          width: `calc((100% - 8px) / ${ALLOWED_UI.length})`,
          transform: `translateX(${ALLOWED_UI.indexOf(ui) * 100}%)`,
        }}
      />

      {ALLOWED_UI.map((opt) => (
        <button
          key={opt}
          className={"button option" + (ui === opt ? " active" : "")}
          onClick={() => setUi(opt)}
        >
          {icon(opt)}
        </button>
      ))}
    </div>
  );
}

const Icons = {
  GUI: "🖥️",
  TUI: "📟",
  CLI: "⌨️",
  GLUI: "🌐",
} as const;

function icon(type: UI): typeof Icons[keyof typeof Icons] {
  switch(type) {
    case "GUI":
      return Icons[type];
    case "TUI": 
      return Icons[type];
    case "CLI":
      return Icons[type];
    case "GLUI":
      return Icons[type];
    default:
      const _exhaustiveCheck: never = type;
      return _exhaustiveCheck;
  }
}
