import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function TodosItem({ item, pressHandler }) {
  var tapCounter = 0;
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text style={styles.item}>{item.text}</Text>
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
          <MaterialIcons name="delete" size={30} color="violet" />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default TodosItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  item: {
    flex: 1,
    padding: 16,
    marginTop: 16,
    borderColor: "violet",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
