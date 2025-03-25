// import { darken, lighten } from "polished"

// export function generateColorSet<K extends string = "main">({
//   main,
//   foreground,
//   mainKey,
//   isDark = false,
// }: ColorSetParams<K>): ColorSet<K> {
//   const key = mainKey ?? "main"
//   return {
//     [key]: main,
//     foreground,
//     lighter: isDark ? darken(0.05, main) : lighten(0.05, main),
//     darker: isDark ? lighten(0.05, main) : darken(0.05, main),
//   } as ColorSet<K>
// }

// type ColorSetParams<K> = {
//   main: string
//   foreground: string
//   mainKey?: K
//   isDark?: boolean
// }

// export type ColorSet<K extends string> = {
//   [key in K]: string
// } & {
//   foreground: string
//   lighter: string
//   darker: string
// }
