export type ThemeId = "orange" | "red" | "purple" | "green" | "blue";

type ThemeVars = {
  "--color-primary": string;
  "--color-dark": string;
};

interface Theme {
  id: ThemeId;
  label: string;
  vars: ThemeVars;
}

export const themes: Theme[] = [
  {
    id: "orange",
    label: "Common",
    vars: {
      "--color-primary": "#F79C42",
      "--color-dark":    "#631e0b",
    },
  },
  {
    id: "red",
    label: "Red",
    vars: {
      "--color-primary": "#de0a26",
      "--color-dark":    "#5c0a0a",
    },
  },
  {
    id: "purple",
    label: "Purple",
    vars: {
      "--color-primary": "#b100cd",
      "--color-dark":    "#3b0764",
    },
  },
  {
    id: "green",
    label: "Green",
    vars: {
      "--color-primary": "#52a447",
      "--color-dark":    "#1a3d1a",
    },
  },
  {
    id: "blue",
    label: "Blue",
    vars: {
      "--color-primary": "#3B82F6",
      "--color-dark":    "#0f2d5c",
    },
  },
];

export const defaultTheme: ThemeId = "orange";

export const applyTheme = (id: ThemeId) => {
  const theme = themes.find((t) => t.id === id);
  if (!theme) return;
  Object.entries(theme.vars).forEach(([key, val]) =>
    document.documentElement.style.setProperty(key, val)
  );
};

export const getThemePrimary = (id: ThemeId) =>
  themes.find((t) => t.id === id)?.vars["--color-primary"];
