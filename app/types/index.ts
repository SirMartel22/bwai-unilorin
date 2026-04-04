export type ThemeMode = "light" | "dark" | "auto";
export type EffectiveTheme = "light" | "dark";

export interface Speaker {
  name: string;
  role: string;
  twitter: string;
  icon: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  color: string;
  highlight?: boolean;
}