"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { ThemeMode, EffectiveTheme } from "../types";

function getAutoTheme(): EffectiveTheme {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 19 ? "light" : "dark";
}

interface ThemeContextValue {
  mode: ThemeMode;
  effective: EffectiveTheme;
  cycle: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  mode: "auto",
  effective: "light",
  cycle: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("auto");
  const [, setTick] = useState(() => Date.now());

  useEffect(() => {
    if (mode !== "auto") return;

    const id = setInterval(() => setTick(Date.now()), 60_000);
    return () => clearInterval(id);
  }, [mode]);

  const effective: EffectiveTheme = mode === "auto" ? getAutoTheme() : mode;

  const cycle = () =>
    setMode((prev) =>
      prev === "light" ? "dark" : prev === "dark" ? "auto" : "light",
    );

  return (
    <ThemeContext.Provider value={{ mode, effective, cycle }}>
      <div className={effective === "dark" ? "dark" : ""}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
