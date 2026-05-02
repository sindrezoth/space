"use client";

import { AllowedUI } from "@/type";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useUI() {
  const router = useRouter()
  const path = usePathname()

  console.log();
  const [ui, setUi] = useState<AllowedUI | undefined>();

  useEffect(() => {
    const urlValue = path.split('/')[2].toUpperCase() as AllowedUI;
    setUi(urlValue);
  }, [])

  function changeUI(to: AllowedUI) {
    setUi(to);
    router.push(`/${to.toLowerCase()}`)
  }

  return {
    ui,
    setUi: changeUI,
  };
}
