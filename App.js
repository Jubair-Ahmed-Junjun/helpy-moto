import { StatusBar } from "expo-status-bar";
// import { Text, FlatList, StyleSheet } from "react-native";

import { StyleSheet, View } from "react-native";
import SignUp from "./components/SignUp";
export default function App() {
  return (
    <View style={styles.container}>
      <SignUp></SignUp>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "50px",
  },
});
