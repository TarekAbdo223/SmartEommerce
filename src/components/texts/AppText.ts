import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AppText = ({ children, style, variant = "medium", ...rest }) => {
  return <Text style={[styles[variant], style]}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  bold: {
    fontSize: 18,
    color: "#000",
  },
  medium: {
    fontSize: 16,
    color: "#000",
  },
});
