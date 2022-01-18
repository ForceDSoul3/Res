import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useEffect, Fragment } from "react";
import Acc from "../screens/account/Account";
import Register from "../screens/account/Register";
import Perfil from "./PerfilUsuario";
import { _retrieveData } from "../DB/storage";

const Stact = createNativeStackNavigator();

function Stack() {
  const [sesion, setsesion] = useState(false);
  useEffect(() => {
    _retrieveData(setsesion);
  }, []);

  return <Component user={sesion} />;
}

const Component = ({ user }) => (
  <Stact.Navigator>
    {user ? (
      <Stact.Screen
        name="Perfil"
        component={Perfil}
        options={{ title: "Mi Perfil " }}
      />
    ) : (
      <Fragment>
        <Stact.Screen
          name="IniciarSesion"
          component={Acc}
          options={{ title: "Cuenta " }}
        />

        <Stact.Screen
          name="Registro"
          component={Register}
          options={{ title: "Registrar Usuario " }}
        />
      </Fragment>
    )}
  </Stact.Navigator>
);

export default Stack;
