// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { MoonIcon, SunIcon } from "@nextui-org/shared-icons";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {theme === "light" && (
        <Button
          onClick={() => setTheme("dark")}
          isIconOnly
          variant={"light"}
          color="default"
          stylearia-label="Dark Mode"
        >
          <MoonIcon />
        </Button>
      )}
      {theme === "dark" && (
        <Button
          onClick={() => setTheme("light")}
          isIconOnly
          variant={"light"}
          color="default"
          aria-label="Light Mode"
        >
          <SunIcon />
        </Button>
      )}
    </div>
  );
}
