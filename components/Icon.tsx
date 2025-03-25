import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { forwardRef, memo } from "react";
import { useUnistyles } from "react-native-unistyles";

import type { StyleProp, ViewStyle } from "react-native";
import type { UnistylesThemes } from "react-native-unistyles";

export const UnthemedIcon = forwardRef(function UnthemedIcon(
  props: UnthemedIconProps,
  ref
) {
  return <FontAwesome6 ref={ref} {...props} />;
});

const Icon = forwardRef(function Icon(
  { name, size = 28, style, color }: IconProps,
  ref
) {
  // this should be withUnistyles
  const { theme } = useUnistyles();

  let iconColor = theme.colors[color];

  return (
    <UnthemedIcon
      ref={ref}
      size={size}
      color={iconColor}
      name={name}
      style={style}
    />
  );
});

export default memo(Icon);

type IconColor = keyof UnistylesThemes["light"]["colors"];
export type UnthemedIconProps = {
  name: string;
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
};
export type IconProps = Omit<UnthemedIconProps, "color"> & {
  name: string;
  color: IconColor;
  size?: number;
  style?: StyleProp<ViewStyle>;
};
