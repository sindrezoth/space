"use client";

import { ALLOWED_UI } from "@/lib/constants";
import { useUI } from "@/lib/store/uiStore";
import { UI } from "@/type";

export default function UIToggle() {
  const selected = useUI((state) => state.selected);
  const setSelected = useUI((state) => state.setSelected);

  if (!selected) {
    return null;
  }
  console.log(ALLOWED_UI.indexOf(selected));

  return (
    <div className="ui-toggle">
      <div
        className="highlight"
        style={{
          width: `calc((100% - 8px) / ${ALLOWED_UI.length})`,
          transform: `translateX(${ALLOWED_UI.indexOf(selected) * 100}%)`,
        }}
      />

      {ALLOWED_UI.map((opt) => (
        <button
          key={opt}
          className={"button option" + (selected === opt ? " active" : "")}
          onClick={() => setSelected(opt)}
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

function icon(type: UI): (typeof Icons)[keyof typeof Icons] {
  switch (type) {
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
