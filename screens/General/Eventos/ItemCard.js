import React, { useState } from "react";
import { Card, Paragraph } from "react-native-paper";
import { Avatar } from "react-native-elements";
import { StyleSheet } from "react-native";
import ItemEvento from "./model_item_Evento";
import { _getEmail } from "../../../DB/storage";
import Subscription from "./Subscribirte";
const ItemCard = (item) => {
  const [show, setShow] = useState(false);

  return (
    <Card style={styles.Card}>
      <Paragraph style={styles.Title}>{item.item.type}</Paragraph>
      <Card.Content style={styles.content}>
        <Avatar
          rounded
          size="large"
          title="LW"
          activeOpacity={0.7}
          source={{
            uri: "https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg",
          }}
        />
        <Paragraph style={styles.paragraph}>{item.item.title}</Paragraph>
        <Paragraph style={styles.paragraph}>{"impartido por: "+item.item.ponente}</Paragraph>
        <Paragraph style={styles.organismo}>{item.item.organismo}</Paragraph>
        <Paragraph style={styles.fechatitle}>Duración</Paragraph>
        <Paragraph style={styles.fecha}>{item.item.duration}</Paragraph>
        <Paragraph style={styles.descrip}>{item.item.description}</Paragraph>
      </Card.Content>
      <Card.Actions
        style={
          item.item.type === "Capacitación"
            ? styles.footer
            : item.item.type === "Congreso"
            ? styles.footerRED
            : item.item.type === "Meeting"
            ? styles.footerMeeting
            : styles.footerBLUE
        }
      >
        {show ? (
          <Subscription evento={item.item.id} close={() => setShow(false)} />
        ) : (
          JSON.parse(item.item.horarios).map((itm, index) => (
            <ItemEvento
              key={index}
              style={styles.titleFooter}
              date={itm.fecha+' '+itm.hora}
              save={() => setShow(true)}
            ></ItemEvento>
          ))
        )}
      </Card.Actions>
    </Card>
  );
};

export default ItemCard;
const styles = StyleSheet.create({
  Item: {
    backgroundColor: "#52be80",
    margin: 1,
  },
  Card: {
    backgroundColor: "#FFFF",
    elevation: 5,
    borderRadius: 9,
    marginBottom: 15,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    overflow: "hidden",
  },
  Btn: {
    color: "white",
  },
  footer: {
    backgroundColor: "#2289dc",
    color: "black",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footerRED: {
    backgroundColor: "#eb984e",
    color: "black",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footerBLUE: {
    backgroundColor: "#7dcea0",
    color: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footerMeeting: {
    backgroundColor: "#9b59b6",
    color: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    textAlign: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  Title: {
    fontSize: 18,
    marginLeft: 8,
    marginTop: 5,
    fontWeight: "bold",
    color: "#696969",
  },
  avatar: {
    backgroundColor: "#696969",
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginTop: 15,
  },
  organismo: {
    fontSize: 11,
    color: "black",
    textTransform: "uppercase",
  },
  descrip: {
    marginTop: 15,
    color: "#696969",
  },
  fechatitle: {
    marginTop: 15,
    fontWeight: "bold",
  },
  fecha: {
    color: "#696969",
  },
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
  ItemFooter: {
    color: "white",
    paddingRight: 15,
    paddingLeft: 15,
    fontSize: 12,
    fontWeight: "bold",
  },
});
