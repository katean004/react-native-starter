import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View style={styles.margin}>
      <Text style={styles.textStyle}>{color}</Text>
      <Button title={`Increase ${color}`} onPress={() => onIncrease()} />
      <Button title={`Decrease ${color}`} onPress={() => onDecrease()} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: { textAlign: "center" },
  margin: { marginVertical: 15 }
});

export default ColorCounter;
