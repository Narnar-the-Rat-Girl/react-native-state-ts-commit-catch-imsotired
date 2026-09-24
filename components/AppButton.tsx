import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../assets/theme";

interface appButtonProp {
  onPress?: () => void 
  title: string
}

export function AppButton({ title, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: colors.mauve,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: colors.base,
    fontWeight: "600",
    fontSize: 15,
  },
  pressed: {
    opacity: 0.7,
  },
});
