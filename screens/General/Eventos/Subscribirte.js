import React, { useState } from "react";
import { View, Picker, StyleSheet, Alert } from "react-native";
import { Icon } from "react-native-elements";
import { _getEmail, _getId, _getInfo } from "../../../DB/storage";
import { useNavigation } from "@react-navigation/native";
import Axios from "axios";
import { GetUrl } from "../../../configApi";


function Guardar(navigation, value, evento) {

  
  _getId().then((id) => {
    if (id == "No data") {
      console.log(" no sesion ");
      navigation.navigate("Cuenta");
    } else {
      const participante = id.replace(/\"/g,'')
      Axios.post(GetUrl("client/inscripcion"), {
        participante: participante,
        evento: evento,
        respuesta: value
      })
        .then((res) => {
          Alert.alert("Registro exitoso!.");
        })
        .catch(function (error) {
          if (error.response) {
            Alert.alert(error.response.data.message + " !");
          }
        });

      // console.log(" evento : ", evento, " gmail: ", email, "view: ", value);
      //  Alert.alert(" evento: ", evento, " email: ", JSON.parse(email));
    }
  });
}

function Subscribirte({ evento, close }) {
  const [value, setValue] = useState("");
  const navigation = useNavigation();
  return (
    <View style={styles.twoText}>
      <Picker
        style={styles.select_one}
        selectedValue={value}
        onValueChange={(itemValue) => setValue(itemValue)}
      >
        <Picker.Item
          style={styles.select_item}
          label="como se enteró de evento?"
          value=""
        />
        <Picker.Item label="por mail" value="por mail" />
        <Picker.Item label="redes sociales" value="redes sociales" />
        <Picker.Item label="por la empresa" value="por la empresa" />
      </Picker>
      <Icon
        name="check"
        color="#FFFFFF"
        onPress={() => Guardar(navigation, value, evento)}
        disabled={!value}
      />
      <Icon name="close" color="#FFFFFF" onPress={() => close()} />
    </View>
  );
}

export default Subscribirte;

const styles = StyleSheet.create({
  select_one: {
    height: 30,
    borderColor: "#808b96",
    borderWidth: 1,
    borderRadius: 10,
    width: "70%",
    fontSize: 16,
    color: "black",
  },

  twoText: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
