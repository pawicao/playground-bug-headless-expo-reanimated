import React, { forwardRef, memo, PropsWithChildren } from "react";
import { Pressable, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import Animated from "react-native-reanimated";
import {
  Tabs,
  TabList,
  TabTrigger,
  TabSlot,
  TabTriggerProps,
  TabTriggerSlotProps,
} from "expo-router/ui";
import { ZoomIn, ZoomOut } from "react-native-reanimated";
import Icon from "@/components/Icon";

export default function TabLayout() {
  return (
    <Tabs>
      <TabSlot />
      <TabList style={styles.tabList}>
        {renderTabIcon("/", "house", {
          name: "home",
          accessibilityLabel: "Home",
        })}
        {renderTabIcon("/explore", "fire", {
          name: "explore",
          accessibilityLabel: "Explore",
        })}
      </TabList>
    </Tabs>
  );
}

function renderTabIcon(
  href: NonNullable<TabTriggerProps["href"]>,
  icon: string,
  options?: Omit<TabTriggerProps, "href" | "asChild" | "name"> & {
    name?: TabTriggerProps["name"];
  }
) {
  return (
    <TabTrigger
      href={href}
      {...options}
      name={options?.name ?? href.toString().slice(1)}
      asChild
    >
      <TabBarIcon icon={icon} />
    </TabTrigger>
  );
}

export const TabBarIcon = memo(
  forwardRef<View, TabBarIconProps>(function TabBarIcon(
    { icon, isFocused, ...props },
    ref
  ) {
    return (
      <Pressable ref={ref} {...props} style={styles.tabButton}>
        {isFocused && (
          <View style={styles.tabButtonBackgroundWrapper}>
            <Animated.View
              entering={ZoomIn.duration(600)}
              exiting={ZoomOut.duration(600)}
              style={styles.tabButtonBackground}
            />
          </View>
        )}
        <Icon
          name={icon}
          size={18}
          color={isFocused ? "primary" : "secondary"}
        />
      </Pressable>
    );
  })
);

const styles = StyleSheet.create((theme, rt) => ({
  tabList: {
    display: "flex",
    position: "absolute",
    bottom: rt.insets.bottom,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: theme.colors.primary,
    padding: 16,
    gap: 16,
    left: "50%",
    transform: [
      {
        translateX: "-50%",
      },
    ],
  },
  tabTrigger: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabButton: {
    position: "relative",
    backgroundColor: "transparent",
    padding: 16,
    overflow: "hidden",
    borderRadius: 100,
  },
  tabButtonBackground: {
    backgroundColor: theme.colors.secondary,
    height: "100%",
    width: "100%",
    borderRadius: 100,
  },
  tabButtonBackgroundWrapper: {
    position: "absolute",
    inset: 0,
    borderRadius: 100,
    overflow: "hidden",
  },
}));

type TabBarIconProps = PropsWithChildren &
  TabTriggerSlotProps & {
    icon: string;
  };
