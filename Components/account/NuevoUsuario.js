import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { addInfo } from "../../DB/storage";

function NuevoUsuario() {
  const [user, setUser] = useState("");
  const [Pass, setPass] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [error, setError] = useState(false);

  const data = {
    email: user,
    password: Pass,
  };

  function validatePassword() {
    if (data.password != newpassword) {
      setError(true);
    }
  }

  return (
    <View style={styles.viewBody}>
      <TextInput
        style={styles.input_one}
        placeholder="Email"
        defaultValue={user}
        onChangeText={(text) => setUser(text)}
        onBlur={() => addInfo("user", data)}
      />
      <TextInput
        style={styles.input_one}
        placeholder="Contraseña"
        defaultValue={Pass}
        password={true}
        secureTextEntry={true}
        onChangeText={(text) => setPass(text)}
        onBlur={() => addInfo("user", data)}
      />
      <TextInput
        style={styles.input_one}
        placeholder="Repetir contraseña"
        password={true}
        secureTextEntry={true}
        defaultValue={newpassword}
        onChangeText={(text) => setNewPassword(text)}
        onBlur={() => validatePassword()}
      />
      <Text style={styles.error}>
        {error ? "La contraseña no coincide!" : ""}
      </Text>
    </View>
  );
}

export default NuevoUsuario;
const styles = StyleSheet.create({
  viewBody: {
    marginHorizontal: 15,
  },
  title: {
    marginVertical: 10,
  },
  input_one: {
    height: 40,
    marginBottom: 25,
    borderColor: "#808b96",
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
    fontSize: 16,
    color: "black",
    paddingHorizontal: 10,
  },
  error: {
    color: "#ec7063",
    fontSize: 14,
    marginHorizontal: 10,
    paddingBottom: 10,
    alignSelf: "center",
  },
});
