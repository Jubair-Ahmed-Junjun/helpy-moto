import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text className="text-white">Hello React Native</Text>
      <Text className="text-white">`2+3`</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "20px",
  },
});
