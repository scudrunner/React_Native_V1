import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";


const Link = (props) => (
  <Text
    {...props}
    accessibilityRole="link"
    style={StyleSheet.compose(styles.link, props.style)}
  />
);

export default Link

const styles = StyleSheet.create({
  
  link: {
    color: "#1B95E0"
  },
  
  
});
