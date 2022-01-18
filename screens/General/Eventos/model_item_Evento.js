import React from "react";
import { Paragraph } from "react-native-paper";
import { StyleSheet } from "react-native";
import moment from "moment";
import { Fragment } from "react";

function GetDateTime(date) {
  return moment(date).locale("es-us").format("DD MMM YYYY  h:mm:ss a");
}

function model_item_Evento({ date, save }) {
  return (
    <Fragment>
      <Paragraph style={styles.titleFooter} onPress={() => save()}>
        {GetDateTime(date.substring(0, 10) + "T" + date.substring(11, 19))}
      </Paragraph>
    </Fragment>
  );
}

export default model_item_Evento;

const styles = StyleSheet.create({
  titleFooter: {
    marginRight: 5,
    fontSize: 12,
    borderRadius: 15,
    borderColor: "transparent",
    borderWidth: 1,
    paddingHorizontal: 5,
    backgroundColor: "#e5e7e9",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
