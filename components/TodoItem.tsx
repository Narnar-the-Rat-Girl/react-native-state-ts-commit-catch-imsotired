import { Text, View, Pressable, StyleSheet } from "react-native";

type TodoItemProps = {
  text: string;
  id: string;
  onDeleteItem: (id: string) => void;
};

export function TodoItem({ text, id, onDeleteItem }: TodoItemProps) {
  return (
    <View style={styles.todoItem}>
      <Pressable
        android_ripple={{ color: "white" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={() => onDeleteItem(id)}
      >
        <Text style={styles.todoItemText}>{text}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: "rebeccapurple",
    marginVertical: 8,
    borderRadius: 8,
  },
  todoItemText: {
    color: "white",
    fontSize: 18,
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
