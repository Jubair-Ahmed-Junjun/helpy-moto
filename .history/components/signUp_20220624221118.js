import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";

const SignUp = () => {
  const [titleText, setTitleText] = useState("Enter your mobile number");
  const bodyText =
    "We,ll send you a 4-digit OTP on your mobile number for verification ";

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
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
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
export default SignUp;
