import {
  lightTheme as lightThemeUnistyles,
  otherTheme as otherThemeUnistyles,
} from "./unistyles";
import { DefaultTheme } from "@react-navigation/native";
import type { Theme } from "@react-navigation/native";

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
