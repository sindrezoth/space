import { UI } from "@/type";

export const THEMES_MODES = ["light", "dark", "system"] as const;
export const THEMES = ["light", "dark"] as const;

export const UI_LIST = ["GUI", "TUI", "CLI", "GLUI"] as const;
export const ALLOWED_UI = ["GUI", "TUI"] satisfies UI[];
