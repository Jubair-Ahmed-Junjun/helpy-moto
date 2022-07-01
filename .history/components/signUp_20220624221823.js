import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useState } from "react";

const SignUp = () => {
  const [text, onChangeText] = React.useState("+91 Enter phone number");
  const [number, onChangeNumber] = React.useState(null);

  const [titleText, setTitleText] = useState("Enter your mobile number");
  const bodyText =
    "We,ll send you a 4-digit OTP on your mobile number for verification ";

  const onPressTitle = () => {
    setTitleText("Enter your mobile number [pressed]");
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
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
});
export default SignUp;
