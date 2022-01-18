import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Picker,
  TextInput,
  Text,
  Platform,
} from "react-native";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Button } from "react-native-elements";
import { Icon } from "react-native-elements";
import { addInfo } from "../../DB/storage";

function InfirmacionPersona() {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));
  const [sexo, setSexo] = useState("");
  const [nombre, setNombre] = useState("");
  const [app, setApp] = useState("");
  const [apm, setApm] = useState("");
  const [tel, setTel] = useState("");

  const data = {
    nombre: nombre,
    apellido_p: app,
    apellido_m: apm,
    phone: tel,
    fechanac: date,
    sexo: sexo,
    rfc: "",
    curp: "",
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;    
    setShow(Platform.OS === "ios");
    const fechanac = currentDate;
    setDate(fechanac);
    addInfo("info", data);
    
  };

  const showMode = () => {
    setShow(true);
  };

  const showDatepicker = () => {
    showMode("date");
  };
  return (
    <View style={styles.viewBody}>
      <TextInput
        style={styles.input_one}
        placeholder="Nombre"
        defaultValue={nombre}
        onChangeText={(text) => setNombre(text)}
        onBlur={() => addInfo("info", data)}
      />
      <TextInput
        style={styles.input_one}
        placeholder="Apellido Paterno"
        defaultValue={app}
        onChangeText={(text) => setApp(text)}
        onBlur={() => addInfo("info", data)}
      />
      <TextInput
        style={styles.input_one}
        placeholder="Apellido Materno"
        defaultValue={apm}
        onChangeText={(text) => setApm(text)}
        onBlur={() => addInfo("info", data)}
      />
      <TextInput
        style={styles.input_one}
        placeholder="Telefono"
        defaultValue={tel}
        onChangeText={(text) => setTel(text)}
        onBlur={() => addInfo("info", data)}
      />
      <View style={styles.input_date}>
        <Text>
          {" "}
          {moment(data.fechanac).locale("es-mx").format("DD/MM/YYYY")}{" "}
        </Text>
        <Button
          onPress={showDatepicker}
          buttonStyle={styles.IconBtn}
          icon={
            <Icon name="calendar" type="font-awesome" size={15} color="black" />
          }
        />

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>

      <View style={styles.input_one}>
        <Picker
          style={styles.select_one}
          selectedValue={sexo}
          onValueChange={(itemValue) => setSexo(itemValue)}
          onBlur={() => addInfo("info", data)}
        >
          <Picker.Item style={styles.select_item} label="Sexo" value="" />
          <Picker.Item label="Hombre" value="Hombre" />
          <Picker.Item label="Mujer" value="Mujer" />
          <Picker.Item label="Otro" value="Otro" />
        </Picker>
      </View>

      <View style={styles.twoText}>
        <TextInput
          style={styles.input_two}
          placeholder="RFC"
          defaultValue={data.rfc}
          onChangeText={(text) => (data.rfc = text)}
          onBlur={() => addInfo("info", data)}
        />
        <TextInput
          style={styles.input_two}
          placeholder="CURP"
          defaultValue={data.curp}
          onChangeText={(text) => (data.curp = text)}
          onBlur={() => addInfo("info", data)}
        />
      </View>
    </View>
  );
}

export default InfirmacionPersona;
const styles = StyleSheet.create({
  viewBody: {
    marginHorizontal: 15,
  },
  title: {
    marginVertical: 10,
  },
  input_one: {
    height: 40,
    marginBottom: 25,
    borderColor: "#808b96",
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
    fontSize: 16,
    color: "black",
    paddingHorizontal: 10,
    backgroundColor: "transparent",
  },
  input_two: {
    height: 40,
    marginBottom: 25,
    borderColor: "#808b96",
    borderWidth: 1,
    borderRadius: 10,
    width: "47%",
    fontSize: 16,
    color: "black",
    paddingHorizontal: 10,
  },
  select_two: {
    height: 40,
    marginBottom: 25,
    borderRadius: 10,
    width: "47%",
    fontSize: 16,
    color: "black",
    borderWidth: 1,
    borderColor: "#808b96",
    flex: 1,
    justifyContent: "center",
    marginLeft: 20,
  },
  twoText: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input_date: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    marginBottom: 25,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "black",
    borderColor: "#808b96",
  },
  IconBtn: {
    backgroundColor: "transparent",
    color: "black",
  },
  select_one: {
    width: "100%",
    borderColor: "transparent",
  },
});
