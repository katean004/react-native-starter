import React, { useState } from "react";
import { Text, Button, View, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={newValue => {
          setName(newValue);
        }}
      />
      <Text>My name is {name}</Text>

      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newPass => setPassword(newPass)}
        secureTextEntry={true}
      />
      <Text>My password is {password}</Text>
      {password.length < 5 ? (
        <Text>Password has to be at least 5 chars</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    width: 200
  }
});

export default TextScreen;
