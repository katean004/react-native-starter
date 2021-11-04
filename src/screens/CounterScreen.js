import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  // pass in default value of state into useState
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Print Count: {counter}</Text>
    </View>
  );
};

const styles = {};

export default CounterScreen;
