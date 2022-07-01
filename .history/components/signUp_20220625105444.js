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
import Divider from "react-native-divider";
import Icon from "react-native-vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";

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
    // https://i.ibb.co/mGQ77zC/Rectangle-58.png
    <View>
      <View>
        <Image
          orientation="center"
          source={{ uri: "https://i.ibb.co/mGQ77zC/Rectangle-58.png" }}
          style={{ width: 252, height: 217 }}
        />
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
        <Ionicons
          style={styles.mblIcon}
          name="phone-portrait-outline"
        ></Ionicons>{" "}
      </SafeAreaView>
      <Button
        title="Next"
        disabled
        onPress={() => Alert.alert("Cannot press this one")}
      />
      <Divider borderColor="dark" color="dark" orientation="center">
        or
      </Divider>

      <View style={styles.icons}>
        <View>
          <Ionicons name="logo-facebook" size={32} color="#4267B2" />
        </View>

        <View>
          <Ionicons name="logo-google" size={32} color="#4285F4" />
        </View>
        <View>
          <Ionicons name="logo-twitter" size={32} color="#00acee" />
        </View>
      </View>
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
  icons: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 3,
    // justifyContent: "center",
  },
  mblIcon: {
    padding: 16,
    marginTop: 16,

    borderRadius: 10,
    flexDirection: "row",
  },
});
export default SignUp;
