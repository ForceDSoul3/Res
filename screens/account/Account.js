import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Loading from "../../Components/Loading";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";

export default function Account() {
  const [login, setLogin] = useState(false);

  if (login == null) {
    return <Loading isVisible={true} text="Cargando..." />;
  }
  return login ? <UserLogged /> : <UserGuest />;
}

const styles = StyleSheet.create({});