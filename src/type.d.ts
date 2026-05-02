import { ALLOWED_UI, THEMES, THEMES_MODES, UI_LIST } from "./lib/constants";

export type ThemeMode = (typeof THEMES_MODES)[number];
export type Theme = (typeof THEMES)[number];

export type UI = (typeof UI_LIST)[number];
export type AllowedUI = (typeof ALLOWED_UI)[number];
