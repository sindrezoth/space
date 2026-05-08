"use client";

import { AllowedUI } from "@/type";
import { create } from "zustand";

export type Selected = AllowedUI | null;

type UIStore = {
  selected: Selected;
  setSelected: (value: Selected) => void;
};

export const useUI = create<UIStore>((set) => ({
  selected: null,
  setSelected: (value) => set({ selected: value }),
}));
