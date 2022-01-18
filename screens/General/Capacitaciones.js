import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import Cards from "./Eventos/ItemCard";
import Axios from "axios";
import { GetUrl } from "../../configApi";

function Capacitaciones() {
  const [info, setinfo] = useState([]);

  useEffect(() => {
    Axios({
      url: GetUrl("client/eventos/N"),
    }).then(({ data }) => {
      const infor = data.filter((event) => event.type === "Capacitación");
      setinfo(infor);
    });
  }, [setinfo]);

  return (
    <ScrollView>
      {info.length > 0 ? (
        <View style={styles.content}>
          {info.map((item, index) => (
            <Cards key={index} item={item}></Cards>
          ))}
        </View>
      ) : (
        <View style={styles.content}>
          <Text style={styles.Texto}>Sin Capacitaciones registrados!</Text>
        </View>
      )}
    </ScrollView>
  );
}

export default Capacitaciones;
const styles = StyleSheet.create({
  content: {
    margin: 10,
  },
  Texto: {
    color: "#696969",
    alignSelf: "center",
    height: 40,
  },
});
