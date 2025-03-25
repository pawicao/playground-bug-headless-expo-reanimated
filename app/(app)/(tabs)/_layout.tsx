import React from "react";
import { Platform, Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

// import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui";
import { Tabs } from "expo-router";
// import HomeScreen from "./index";

export default function TabLayout() {
  return <Tabs />;
  // return (
  //   <Tabs>
  //     {/* <View style={{ flex: 1 }}> */}
  //     {/* <HomeScreen /> */}
  //     <TabSlot />
  //     {/* </View> */}
  //     <TabList style={styles.tabList}>
  //       <TabTrigger href="/" name="home">
  //         <Text>Home</Text>
  //       </TabTrigger>
  //       <TabTrigger href="/explore" name="explore">
  //         <Text>Explore</Text>
  //       </TabTrigger>
  //     </TabList>
  //   </Tabs>
  // );
}

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
