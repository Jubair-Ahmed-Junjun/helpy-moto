import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from "react-native";
import React, { useState } from "react";

const SignUp = () => {
  const [text, onChangeText] = React.useState("+91 Enter phone number");
  const [number, onChangeNumber] = React.useState(null);

  const [titleText, setTitleText] = useState("Enter your mobile number");
  const bodyText =
    "We,ll send you a 4-digit OTP on your mobile number for verification ";

  const onPressTitle = () => {
    setTitleText("Enter your mobile number");
  };
  return (
    <View>
      <View>
        <Image source={require("./images/Rectangle 58.png")} />
      </View>
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={onPressTitle}>
          {titleText}
          {"\n"}
          {"\n"}
        </Text>
        <Text numberOfLines={5}>{bodyText}</Text>
      </Text>

      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </SafeAreaView>

      <Button
        title="Next"
        disabled
        onPress={() => Alert.alert("Cannot press this one")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
    fontSize: 15,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    marginTop: 30,
    borderRadius: 5,
  },
  title: {
    textAlign: "center",
    marginVertical: 5,
  },
});
export default SignUp;
