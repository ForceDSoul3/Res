import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import { Icon } from "react-native-elements";
import { _DeleteData } from "../DB/storage";
import { Restart } from "fiction-expo-restart";

function PerfilUsuario() {
  function Reload() {
    _DeleteData();
    Restart();
  }
  return (
    <ScrollView>
      <View style={styles.content}>
        <Button
          onPress={() => Reload()}
          buttonStyle={styles.IconBtn}
          icon={
            <Icon
              name="toggle-off"
              type="font-awesome"
              size={15}
              color="black"
            />
          }
        />
        <Text>Cerrar sesión</Text>
      </View>
      <View>
        <Text>hola</Text>
      </View>
    </ScrollView>
  );
}

export default PerfilUsuario;

const styles = StyleSheet.create({
  content: {
    margin: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  Texto: {
    color: "#696969",
    alignSelf: "center",
    height: 40,
  },
  IconBtn: {
    backgroundColor: "transparent",
    color: "black",
    alignSelf: "flex-start",
  },
});
