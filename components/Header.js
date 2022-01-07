import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>🖋Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 38,
    height: 80,
    backgroundColor: "violet",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
