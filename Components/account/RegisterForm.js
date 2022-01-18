import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import InfoPerson from "./InfirmacionPersona";
import NewUser from "./NuevoUsuario";
import OtherInfo from "./OtherInformacion";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { _getInfo } from "../../DB/storage";
import { GetUrl } from "../../configApi";
import { Restart } from "fiction-expo-restart";
import Axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function RegisterForm() {
  const navigation = useNavigation();
  const [State, setState] = useState({
    isNextPressed: false,
    isPreviousPressed: false,
    isSubmitPressed: false,
  });

  const nextBtnPress = () => {
    console.log("NEXT");
    setState({ isNextPressed: true });
  };

  const prevBtnPress = () => {
    console.log("PREV");
    setState({ isPreviousPressed: true });
  };

  const submitBtnPress = async () => {
    await _getInfo().then((res) => {

      //console.log(res)
      Axios.post(GetUrl("client/signup"), res)
        .then(() => {
          navigation.navigate("IniciarSesion");
        })
        .catch(() => {
          Alert.alert("Datos no validos para el registro!.");
        });
    });

    await setState({ isSubmitPressed: true });
  };
  return (
    <View style={{ flex: 1 }}>
      <ProgressSteps>
        <ProgressStep label="Información personal" onNext={nextBtnPress}>
          <InfoPerson />
        </ProgressStep>
        <ProgressStep
          label="Crear usuario"
          onNext={nextBtnPress}
          onPrevious={prevBtnPress}
        >
          <NewUser />
        </ProgressStep>
        <ProgressStep
          label="Informacioón adicional"
          onNext={nextBtnPress}
          onPrevious={prevBtnPress}
          onSubmit={submitBtnPress}
        >
          <OtherInfo />
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginHorizontal: 30,
  },

  circleStepper: {
    marginTop: 15,
    backgroundColor: "#1976d2",
  },
});
