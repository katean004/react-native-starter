import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, imageSource, imageScore }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text style={styles.imageStyle}>{title}</Text>
      <Text style={styles.imageSpace}>Image score - {imageScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    fontSize: 20
  },
  imageSpace: {
    marginBottom: 15
  }
});

export default ImageDetail;
