import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.boxStyle1} />
      <View style={styles.boxStyle2} />
      <View style={styles.boxStyle3} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  boxStyle1: {
    width: 80,
    height: 60,
    backgroundColor: "pink"
  },
  boxStyle2: {
    width: 80,
    height: 60,
    backgroundColor: "green",
    alignSelf: "center"
  },
  boxStyle3: {
    width: 80,
    height: 60,
    backgroundColor: "magenta"
  }
});

export default BoxScreen;
