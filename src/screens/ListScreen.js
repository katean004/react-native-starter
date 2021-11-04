import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Joe", age: 20 },
    { name: "Joyce", age: 45 },
    { name: "Jim", age: 32 },
    { name: "Jay", age: 27 },
    { name: "Josh", age: 53 },
    { name: "Jupitor", age: 30 },
    { name: "Johanne", age: 18 },
    { name: "Jonas", age: 26 }
  ];

  return (
    <FlatList
      data={friends}
      showsVerticalScrollIndicator={false}
      keyExtractor={friend => friend.name}
      renderItem={({ item }) => {
        return (
          <Text style={styles.listStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  listStyle: {
    fontSize: 20,
    marginVertical: 50,
    marginHorizontal: 50
  }
});

export default ListScreen;
