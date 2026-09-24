import { Text, View, Pressable, StyleSheet } from "react-native";

type TodoItemProps = {
  title: string;
  id: string;
  onDeleteItem: (id: string) => void;
};

export function TodoItem({ title, id, onDeleteItem }: TodoItemProps) {
  return (
    <View style={styles.todoItem}>
      <Pressable
        android_ripple={{ color: "white" }}
        style={({ pressed }) => pressed && styles.pressItem}
        onPress={() => onDeleteItem(id)}
      >
        <Text style={styles.todoItemTitle}>{title}</Text>
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
  todoItemTitle: {
    color: "white",

    fontSize: 18,
    padding: 8,
  },
  pressItem: {
    opacity: 0.5,
  },
});
