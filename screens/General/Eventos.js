import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import Cards from "./Eventos/ItemCard";
import Axios from "axios";

import { GetUrl } from "../../configApi";
const YourApp = () => {
  const [info, setinfo] = useState([]);

  useEffect(() => {
    Axios({
      url: GetUrl("client/eventos/N"),
    }).then(({ data }) => {
      setinfo(data);
    });
  }, [setinfo]);

  return (
    <ScrollView>
      <View style={styles.content}>
        {info.map((item, index) => (
          <Cards key={index} item={item}></Cards>
        ))}
      </View>
    </ScrollView>
  );
};

export default YourApp;
const styles = StyleSheet.create({
  content: {
    margin: 10,
  },
});
