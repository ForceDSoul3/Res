import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { Icon } from "react-native-elements";
import Axios from "axios";
import { GetUrl } from "../../configApi";
import { _storeData, _storeEmail, _storeId } from "../../DB/storage";
import { useNavigation } from "@react-navigation/native";
import { Restart } from "fiction-expo-restart";

export default function UserGuest() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const data = {
    email: "",
    password: "",
  };
  function validateLogin() {
    Axios.post(GetUrl("client/login"), data)
      .then((res) => {
        _storeData(res.data.token);
        _storeId(res.data.id);
        _storeEmail(data.email);
        Restart();
      })
      .catch(() => {
        setError(true);
      });
  }

  return (
    <ScrollView centerContent style={styles.viewBody}>
      <Icon
        name="account-circle"
        type="material-community"
        color="#2289dc"
        size={200}
      />

      <Text style={styles.error}>
        {error ? "Usuario o contraseña incorrecto!" : ""}
      </Text>
      <TextInput
        style={styles.input_one}
        placeholder="Ingresa tu nombre"
        defaultValue={data.email}
        onChangeText={(text) => (data.email = text)}
      />

      <TextInput
        style={styles.input_one}
        placeholder="Ingresa tu contraseña"
        password={true}
        secureTextEntry={!showPassword}
        defaultValue={data.password}
        onChangeText={(text) => (data.password = text)}
      />

      <Button
        title="Acceder"
        buttonStyle={styles.button}
        onPress={() => validateLogin()}
      />

      <View>
        <Text
          style={styles.register}
          onPress={() => navigation.navigate("Registro")}
        >
          ¡Aún no tienes una cuenta!.
          <Text style={styles.btnregister}>Click aquí</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

//Estilos de cada segmento para editar

const styles = StyleSheet.create({
  viewBody: {
    marginHorizontal: 30,
  },

  image: {
    height: 300,
    width: "100%",
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginVertical: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#2289dc",
    borderRadius: 10,
  },
  container: {
    marginHorizontal: 40,
  },
  register: {
    marginTop: 15,
    marginHorizontal: 10,
    alignSelf: "center",
  },
  btnregister: {
    color: "#2289dc",
    fontWeight: "bold",
  },
  error: {
    color: "#ec7063",
    fontSize: 14,
    marginHorizontal: 10,
    paddingBottom: 10,
    alignSelf: "center",
  },
  input_one: {
    height: 40,
    marginBottom: 25,
    borderColor: "#808b96",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "black",
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    marginBottom: 25,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "black",
    borderColor: "#808b96",
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: "#424242",
  },
});
