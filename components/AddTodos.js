import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

export default function AddTodos({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => setText(val);

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New Todos.."
        onChangeText={changeHandler}
        value={text}
      />
      <Button
        onPress={() => {
          submitHandler(text);
          setText("");
        }}
        title="Add"
        color="violet"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 5,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "violet",
  },
});
