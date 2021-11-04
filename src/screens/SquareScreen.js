import React, { useState, useReducer } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  // state === {red: number, green: number, blue: number}
  // action === {colorToChange: "red" || "green || "blue", amount: +15 || -15}
  switch (action.colorToChange) {
    case "red":
      return state.red + action.amount < 255 && state.red + action.amount >= 0
        ? { ...state, red: state.red + action.amount }
        : state;

    case "green":
      if (
        state.green + action.amount < 255 &&
        state.green + action.amount >= 0
      ) {
        return { ...state, green: state.green + action.amount };
      } else return state;

    case "blue":
      if (state.blue + action.amount < 255 && state.blue + action.amount >= 0) {
        return { ...state, blue: state.blue + action.amount };
      } else return state;

    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  //   const [red, setRed] = useState(0);
  //   const [green, setGreen] = useState(0);
  //   const [blue, setBlue] = useState(0);

  //   const setColor = (color, change) => {
  //     // color === "red", "green", "blue"
  //     // change === +15, -15

  //     switch (color) {
  //       case "red":
  //         if (red + change < 255 && red + change >= 0) setRed(red + change);
  //         break;

  //       case "green":
  //         if (green + change < 255 && green + change >= 0)
  //           setGreen(green + change);
  //         break;

  //       case "blue":
  //         if (blue + change < 255 && blue + change >= 0) setBlue(blue + change);
  //         break;
  //     }
  //   };

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() =>
          // setColor("red", COLOR_INCREMENT)
          dispatch({ colorToChange: "red", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          // setColor("red", -1 * COLOR_INCREMENT)
          dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          // setColor("green", COLOR_INCREMENT)
          dispatch({ colorToChange: "green", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          // setColor("green", -1 * COLOR_INCREMENT)
          dispatch({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          // setColor("blue", COLOR_INCREMENT)
          dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          // setColor("blue", -1 * COLOR_INCREMENT)
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })
        }
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
