import { Button, View, StyleSheet } from "react-native";
import { useState } from "react";
import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated";

export default function HomeScreen() {
  const [isAnimatedElementVisible, setIsAnimatedElementVisible] =
    useState(false);
  console.log("rerender");
  return (
    <View style={styles.container}>
      <Button
        title="Animate"
        onPress={() => setIsAnimatedElementVisible(!isAnimatedElementVisible)}
        color="red"
      />
      {isAnimatedElementVisible && (
        <Animated.View
          style={styles.animatedElement}
          entering={ZoomIn.duration(1000)}
          exiting={ZoomOut.duration(1000)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    padding: 40,
  },
  animatedElement: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "red",
  },
});
