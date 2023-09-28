"use client"

import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
      grey: {
        100: "#e0e0e0", // font sidebar DM
        200: "#70d8bd", // font header DM
        300: "#d9d9d9", // bg revenue DM
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141b2d", // bg DM
      },
      primary: {
        100: "#d0d1d5",
        200: "#a1a4ab",
        300: "#727681",
        400: "#1F2A40", // sidebar DM
        500: "#868dfb", // hover DM
        600: "#6870fa", // active DM
        700: "#313131", // hover BG DM
        800: "#080b12",
        900: "#040509",
      },
      greenAccent: {
        100: "#1F2A40", // bg icon
        200: "#1F2A40", // bg icon
        300: "#1F2A40", // bg icon
        350: "#1F2A40", // bg icon
        400: "#70d8bd",
        500: "#4cceac",
        600: "#3da58a",
        700: "#2e7c67",
        800: "#1e5245",
        900: "#0f2922",
      },
      redAccent: {
        100: "#f8dcdb",
        200: "#f1b9b7",
        300: "#e99592",
        400: "#e2726e",
        500: "#db4f4a",
        600: "#af3f3b",
        700: "#832f2c",
        800: "#58201e",
        900: "#2c100f",
      },
      blueAccent: {
        100: "#e1e2fe",
        200: "#c3c6fd",
        300: "#a4a9fc",
        400: "#868dfb",
        500: "#6870fa",
        600: "#535ac8",
        700: "#3e4396", // bg download DM
        800: "#2a2d64",
        900: "#151632",
      },
      whiteAccent: {
        100: "#141414",
        200: "#1F2A40", // bg ap
        300: "#1F2A40", // bg ps
        400: "#1F2A40", // bg ts
        450: "#1F2A40", // bg ts
        500: "#3da58a", // icon ap
        600: "#3da58a", // icon ps
        700: "#3da58a", // icon ts
        750: "#3da58a", // icon ts
        800: "#666666",
        900: "#333333"
      },
    }
    : {
      grey: {
        100: "#141414", // font sidebar LM
        200: "#141414", // font h1
        300: "#FFFFFF", // bg revenue
        400: "#525252",
        500: "#666666",
        600: "#858585",
        700: "#a3a3a3",
        800: "#c2c2c2",
        900: "#ffffff", // BG LM
      },
      primary: {
        100: "#040509",
        200: "#080b12",
        300: "#0c101b",
        400: "#0097a7", // color sidebar
        500: "#FFFFFF", // hover LM
        600: "#d9d9d9", // active LM
        700: "#006064", // hover bg LM
        800: "#a1a4ab",
        900: "#d0d1d5",
      },
      greenAccent: {
        100: "#ffe0b2", // bg icon
        200: "#c8e6c9", // bg icon
        300: "#ffccbc", // bg icon
        350: "#BBDEFB", // bg icon
        400: "#3da58a",
        500: "#4cceac",
        600: "#ffffff", // font content LM
        700: "#94e2cd",
        800: "#b7ebde",
        900: "#dbf5ee",
      },
      redAccent: {
        100: "#2c100f",
        200: "#58201e",
        300: "#832f2c",
        400: "#af3f3b",
        500: "#db4f4a",
        600: "#e2726e",
        700: "#e99592",
        800: "#f1b9b7",
        900: "#f8dcdb",
      },
      blueAccent: {
        100: "#151632",
        200: "#2a2d64",
        300: "#3e4396",
        400: "#535ac8",
        500: "#6870fa",
        600: "#868dfb",
        700: "#a4a9fc", // bg download LM
        800: "#c3c6fd",
        900: "#e1e2fe",
      },
      whiteAccent: {
        100: "#cccccc", // BG search bar
        200: { background: 'linear-gradient(to right, #FF9800, #FFB74D)' },  // bg appointment
        300: { background: 'linear-gradient(to right, #4CAF50, #81C784)' },  // bg transaksi
        400: { background: 'linear-gradient(to right, #FF5722, #FF8A65)' },  // bg pasien
        450: { background: 'linear-gradient(to right, #2196F3, #64B5F6)' },  // bg terapis
        500: "#F57C00", // icon appointment
        600: "#388E3C", // icon transaksi
        700: "#E64A19", // icon pasien
        750: "#1976D2", // icon terapis
        800: "#666666",
        900: "#333333"
      },
    }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
          // palette values for dark mode
          primary: {
            main: colors.primary[500],
          },
          secondary: {
            main: colors.greenAccent[500],
          },
          neutral: {
            dark: colors.grey[700],
            main: colors.grey[500],
            light: colors.grey[100],
          },
          background: {
            default: colors.grey[900],
          },
        }
        : {
          // palette values for light mode
          primary: {
            main: colors.primary[100],
          },
          secondary: {
            main: colors.greenAccent[500],
          },
          neutral: {
            dark: colors.grey[700],
            main: colors.grey[500],
            light: colors.grey[100],
          },
          background: {
            default: colors.grey[900],
          },
        }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => { },
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};


