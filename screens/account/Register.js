import React from "react";
import { StyleSheet, View } from "react-native";
import RegisterForm from "../../Components/account/RegisterForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Register() {
  return (
    <KeyboardAwareScrollView>
      <View>
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 185,
    width: "100%",
    marginBottom: 30,
  },
});
