"use client";

import { AllowedUI } from "@/type";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useUI() {
  const router = useRouter();
  const path = usePathname();

  const [ui, setUi] = useState<AllowedUI | undefined>();

  useEffect(() => {
    const splitedPath = path.split("/");
    if (splitedPath.length > 2) {
      const urlValue = splitedPath[2].toUpperCase() as AllowedUI;
      setUi(urlValue);
    }
  }, [path]);

  function changeUI(to: AllowedUI) {
    setUi(to);
    router.push(`/${to.toLowerCase()}`);
  }

  return {
    ui,
    setUi: changeUI,
  };
}
