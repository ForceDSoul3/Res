import React, { Fragment } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Icon } from "react-native-elements";
import General from "./General";
import AccountS from "./AccountS";
import CertificadosS from "./CertificadosS";

//en este apartado se mandan a llamar los iconos de la barra de navegacion de la parte de abajo
const Tab = createMaterialBottomTabNavigator();
export default function Navigation({ users }) {
  const screenOptions = (route, color) => {
    let icon;
    switch (route.name) {
      case "Cuenta":
        icon = "account-circle";
        break;
      case "general":
        icon = "card-text";
        break;
      case "Document":
        icon = "file-download";
        break;
    }
    return (
      <Icon name={icon} type="material-community" size={22} color={color} />
    );
  };
  //se selecciona la ventana principal
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="general"
        tabBarOptions={{
          inactiveTintColor: "#442484",
          activeTintColor: "#a17dc3",
        }}
        barStyle={{ backgroundColor: "#2289dc" }}
        //se mandan a llamar los iconos y se dividen los apartados de la barra de navegacion
        //el cual se asigna icono, la ventana, y el titulo que llevara la ventana
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen
          name="Cuenta"
          component={AccountS}
          options={{ title: "Cuenta" }}
        />
        <Tab.Screen
          name="general"
          component={General}
          options={{ title: "Eventos" }}
        />
        {users ? (
          <Tab.Screen
            name="Document"
            component={CertificadosS}
            options={{ title: "Certificado" }}
          />
        ) : (
          <Fragment />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
