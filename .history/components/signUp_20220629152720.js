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
import Ionicons from "@expo/vector-icons/Ionicons";

import { GoogleSignin } from '@react-native-community/google-signin';


const SignUp = () => {
  const [text, onChangeText] = React.useState("+91 Enter phone number");
  const [number, onChangeNumber] = React.useState(null);

  const [titleText, setTitleText] = useState("Enter your mobile number");
  const bodyText =
    "We,ll send you a 4-digit OTP on your mobile number for verification ";

  const onPressTitle = () => {
    setTitleText("Enter your mobile number");
  };



  const Stack = createStackNavigator();

const AuthStack = () => {
  useEffect(() => {
    // initialize the Google SDK
    GoogleSignin.configure({
      webClientId: 'YOUR_WEB_CLIENT_ID',
    });
  }, []);

  return (
    // https://i.ibb.co/mGQ77zC/Rectangle-58.png
    <View>
      <Text>
        <Image
          // orientation="center"
          source={{ uri: "https://i.ibb.co/mGQ77zC/Rectangle-58.png" }}
          style={{ width: 252, height: 217 }}
        />
      </Text>
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

      <Text style={styles.icons}>
        <Text>
          <Ionicons name="logo-facebook" size={32} color="#4267B2" />
        </Text>
        <Text>
          <Ionicons name="logo-google" size={32} color="#4285F4" />
        </Text>
        <Text>
          <Ionicons name="logo-twitter" size={32} color="#00acee" />
        </Text>
      </Text>
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
    // margin: 5,
    borderWidth: 1,
    padding: 10,
    marginTop: 40,
    marginBottom: 10,
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
    padding: 20,
    fontSize: 20,
    fontFamily: "bold",
    marginTop: 35,
    flexDirection: "row",
    position: "absolute",
    right: -5,
  },
});
export default SignUp;
