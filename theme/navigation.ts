// import { fontWeightMap } from "./font";
import {
  lightTheme as lightThemeUnistyles,
  otherTheme as otherThemeUnistyles,
} from "./unistyles";
import { DefaultTheme } from "@react-navigation/native";
import type { Theme } from "@react-navigation/native";

// const fonts = {
//   regular: {
//     fontFamily: fontWeightMap["400"].fontFamily,
//     fontWeight: "400",
//   },
//   medium: {
//     fontFamily: fontWeightMap["500"].fontFamily,
//     fontWeight: "500",
//   },
//   bold: {
//     fontFamily: fontWeightMap["700"].fontFamily,
//     fontWeight: "700",
//   },
//   heavy: {
//     fontFamily: fontWeightMap["900"].fontFamily,
//     fontWeight: "900",
//   },
// } as const;

export const lightTheme: Theme = {
  dark: false,
  fonts: DefaultTheme.fonts,
  colors: {
    background: "#FFF",
    card: "#FFF",
    primary: lightThemeUnistyles.colors.primary,
    text: "#000",
    border: lightThemeUnistyles.colors.primary,
    notification: lightThemeUnistyles.colors.primary,
  },
};

export const darkTheme: Theme = {
  dark: true,
  fonts: DefaultTheme.fonts,
  colors: {
    background: "#000",
    card: "#000",
    primary: otherThemeUnistyles.colors.primary,
    text: "#FFF",
    border: otherThemeUnistyles.colors.primary,
    notification: otherThemeUnistyles.colors.primary,
  },
};
