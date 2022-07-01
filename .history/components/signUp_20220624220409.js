import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";

const SignUp = () => {
  const [titleText, setTitleText] = useState("Enter your mobile number");
  const bodyText =
    "We,ll send you a 4-digit OTP on your mobile number for verification ";

  return (
    <View>
      <View>
        <Image source={require("./images/Rectangle 58.png")} />
      </View>
      <Text>
        We,ll send you a 4-digit OTP on your mobile number for verification{" "}
      </Text>
      <Text>
        We,ll send you a 4-digit OTP on your mobile number for verification{" "}
      </Text>
    </View>
  );
};
export default SignUp;
