// import { StyleSheet, UnistylesRuntime } from "react-native-unistyles"

// import { fontWeightMap } from "./font"
// import { generateColorSet } from "./utils"

// export const colors = {
//   light: {
//     base: generateColorSet({
//       main: "hsl(0, 0%, 100%)",
//       foreground: "hsl(20, 14.3%, 4.1%)",
//       mainKey: "background",
//     }),
//     card: generateColorSet({ main: "hsl(0, 0%, 100%)", foreground: "hsl(20, 14.3%, 4.1%)" }),
//     primary: generateColorSet({ main: "hsl(24, 95%, 53.1%)", foreground: "hsl(60, 9.1%, 97.8%)" }),
//     secondary: generateColorSet({
//       main: "hsl(60, 4.8%, 95.9%)",
//       foreground: "hsl(24, 9.8%, 10%)",
//     }),
//     tertiary: generateColorSet({
//       main: "hsl(210, 90%, 50%)",
//       foreground: "hsl(60, 9.1%, 97.8%)",
//     }),
//     muted: generateColorSet({
//       main: "hsl(0, 0%, 96%)",
//       foreground: "hsl(20, 10%, 25%)",
//     }),
//     destructive: generateColorSet({
//       main: "hsl(0, 84.2%, 60.2%)",
//       foreground: "hsl(60, 9.1%, 97.8%)",
//     }),
//     warning: generateColorSet({
//       main: "hsl(45, 100%, 50%)",
//       foreground: "hsl(60, 9.1%, 97.8%)",
//     }),
//     success: generateColorSet({
//       main: "hsl(120, 60%, 50%)",
//       foreground: "hsl(60, 9.1%, 97.8%)",
//     }),
//     input: generateColorSet({
//       main: "hsl(20, 5.9%, 90%)",
//       foreground: "hsl(20, 14.3%, 4.1%)",
//     }),
//     border: "hsl(20, 5.9%, 90%)",
//   },
//   dark: {
//     base: generateColorSet({
//       main: "hsl(20, 14.3%, 4.1%)",
//       foreground: "hsl(60, 9.1%, 97.8%)",
//       mainKey: "background",
//     }),
//     card: generateColorSet({ main: "hsl(20, 14.3%, 4.1%)", foreground: "hsl(60, 9.1%, 97.8%)" }),
//     primary: generateColorSet({
//       main: "hsl(21, 90.2%, 48.2%)",
//       foreground: "hsl(60, 9.1%, 97.8%)",
//     }),
//     secondary: generateColorSet({
//       main: "hsl(12, 6.5%, 15.1%)",
//       foreground: "hsl(60, 9.1%, 97.8%)",
//     }),
//     tertiary: generateColorSet({
//       main: "hsl(210, 90%, 45%)",
//       foreground: "hsl(60, 9.1%, 97.8%)",
//     }),
//     muted: generateColorSet({
//       main: "hsl(12, 6.5%, 15.1%)",
//       foreground: "hsl(24, 5.4%, 63.9%)",
//     }),
//     destructive: generateColorSet({
//       main: "hsl(0, 72.2%, 50.6%)",
//       foreground: "hsl(60, 9.1%, 97.8%)",
//     }),
//     warning: generateColorSet({
//       main: "hsl(45, 90%, 45%)",
//       foreground: "hsl(60, 9.1%, 97.8%)",
//     }),
//     success: generateColorSet({
//       main: "hsl(120, 60%, 40%)",
//       foreground: "hsl(60, 9.1%, 97.8%)",
//     }),

//     border: "hsl(12, 6.5%, 25.1%)",
//     input: generateColorSet({
//       main: "hsl(12, 6.5%, 15.1%)",
//       foreground: "hsl(60, 9.1%, 97.8%)",
//     }),
//   },
// }

// const typography = {
//   fontFamily: fontWeightMap,
//   variants: {
//     display: {
//       fontSize: 44,
//       fontFamily: fontWeightMap["900"].fontFamily,
//       letterSpacing: 0,
//       lineHeight: 52,
//     },
//     heading1: {
//       fontSize: 32,
//       fontFamily: fontWeightMap["700"].fontFamily,
//       letterSpacing: 0,
//       lineHeight: 40,
//     },
//     heading2: {
//       fontSize: 28,
//       fontFamily: fontWeightMap["700"].fontFamily,
//       letterSpacing: 0,
//       lineHeight: 36,
//     },
//     heading3: {
//       fontSize: 24,
//       fontFamily: fontWeightMap["600"].fontFamily,
//       letterSpacing: 0,
//       lineHeight: 32,
//     },
//     subtitle: {
//       fontSize: 20,
//       fontFamily: fontWeightMap["500"].fontFamily,
//       letterSpacing: 0.15,
//       lineHeight: 28,
//     },
//     body: {
//       fontSize: 16,
//       fontFamily: fontWeightMap["400"].fontFamily,
//       letterSpacing: 0.15,
//       lineHeight: 24,
//     },
//     label: {
//       fontSize: 14,
//       fontFamily: fontWeightMap["500"].fontFamily,
//       letterSpacing: 0.1,
//       lineHeight: 20,
//     },
//     caption: {
//       fontSize: 12,
//       fontFamily: fontWeightMap["400"].fontFamily,
//       letterSpacing: 0.4,
//       lineHeight: 16,
//     },
//     button: {
//       fontSize: 14,
//       fontFamily: fontWeightMap["600"].fontFamily,
//       letterSpacing: 1.25,
//       lineHeight: 16,
//     },
//     overline: {
//       fontSize: 10,
//       fontFamily: fontWeightMap["400"].fontFamily,
//       letterSpacing: 1.5,
//       lineHeight: 16,
//     },
//   },
// } as const

// const gap = {
//   xs: 4,
//   sm: 8,
//   md: 16,
//   lg: 24,
//   xl: 32,
//   xxl: 48,
//   custom: (v: number) => v * 8,
// } as const

// const common = {
//   radius: {
//     sm: 20,
//     lg: 40,
//   },
//   gap,
//   typography,
//   transitions: {
//     blazing: "50ms",
//     fast: "150ms",
//     normal: "300ms",
//     slow: "450ms",
//   },
// } as const

// const lightTheme = {
//   ...common,
//   colors: colors.light,
// }

// // ensure the same type as the lightTheme
// const darkTheme: typeof lightTheme = {
//   ...common,
//   colors: colors.dark,
// }

// const themes = {
//   light: lightTheme,
//   dark: darkTheme,
// } as const

// const breakpoints = {
//   xs: 0,
//   sm: 576,
//   md: 768,
//   lg: 992,
//   xl: 1200,
//   superLarge: 2000,
//   tvLike: 4000,
// } as const

// StyleSheet.configure({
//   settings: {
//     adaptiveThemes: true,
//   },
//   breakpoints,
//   themes,
// })

// // Not sure if this is needed
// const currentTheme = UnistylesRuntime.getTheme()
// UnistylesRuntime.setRootViewBackgroundColor(currentTheme.colors.base.background)

// type Themes = typeof themes
// type Breakpoints = typeof breakpoints

// declare module "react-native-unistyles" {
//   export interface UnistylesThemes extends Themes {}
//   export interface UnistylesBreakpoints extends Breakpoints {}
// }

import { StyleSheet } from "react-native-unistyles";

export const lightTheme = {
  colors: {
    primary: "#ff1ff4",
    secondary: "#1ff4ff",
  },
  gap: (v: number) => v * 8,
};

export const otherTheme = {
  colors: {
    primary: "#aa12ff",
    secondary: "pink",
  },
  gap: (v: number) => v * 8,
};

const appThemes = {
  light: lightTheme,
  dark: otherTheme,
};

const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200,
};

type AppBreakpoints = typeof breakpoints;
type AppThemes = typeof appThemes;

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  settings: {
    adaptiveThemes: true,
  },
  breakpoints,
  themes: appThemes,
});
