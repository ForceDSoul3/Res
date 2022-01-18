import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { DataTable, IconButton } from "react-native-paper";
import Axios from "axios";
import { GetUrl } from "../configApi";
const ExampleFour = () => {
  const [info, setinfo] = useState([]);

  useEffect(() => {
    Axios({
      url: GetUrl("client/eventos/N"),
    }).then(({ data }) => {
      setinfo(data);
    });
  }, [setinfo]);

  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Nombre</DataTable.Title>
          <DataTable.Title numeric sortDirection="descending">
            Fecha
          </DataTable.Title>
          <DataTable.Title numeric>Acción</DataTable.Title>
        </DataTable.Header>

        {info.map((item, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{item.title}</DataTable.Cell>
            <DataTable.Cell numeric>01/12/2021</DataTable.Cell>
            <DataTable.Cell numeric>
              <IconButton
                icon="download"
                color="#ec7063"
                size={20}
                onPress={() => console.log("Pressed")}
              />
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
};

export default ExampleFour;
const styles = StyleSheet.create({});
