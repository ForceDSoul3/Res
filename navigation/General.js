import React from "react";
import eventos from "../screens/General/Eventos";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Cursos from "../screens/General/Cursos";
import Capacitaciones from "../screens/General/Capacitaciones";
import Diplomados from "../screens/General/Diplomados";
import Meetring from "../screens/General/Meeting";
import Practica from "../screens/General/practicas";
import Congresos from "../screens/General/congresos";

const Drawer = createDrawerNavigator();

export default function Stack() {
  return (
    //barra de opciones lateral con los cursos
    //usando drawer navigator con drawer screen para ir a ventanas diferentes
    <Drawer.Navigator>
      <Drawer.Screen
        name="eventos"
        component={eventos}
        options={{ title: "Eventos" }}
      />
      <Drawer.Screen
        name="cursos"
        component={Cursos}
        options={{ title: "Cursos" }}
      />
      <Drawer.Screen
        name="Congresos"
        component={Congresos}
        options={{ title: "Congresos" }}
      />
      <Drawer.Screen
        name="Practicas"
        component={Practica}
        options={{ title: "Practicas" }}
      />
      <Drawer.Screen
        name="meeting"
        component={Meetring}
        options={{ title: "Meeting" }}
      />
      <Drawer.Screen
        name="capacitaciones"
        component={Capacitaciones}
        options={{ title: "Capacitaciones" }}
      />
      <Drawer.Screen
        name="diplomados"
        component={Diplomados}
        options={{ title: "Diplomados" }}
      />
    </Drawer.Navigator>
  );
}
