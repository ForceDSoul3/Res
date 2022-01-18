import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, CheckBox, Picker } from "react-native";
import { addInfo } from "../../DB/storage";

function OtherInformacion() {
  const [address, setaddress] = useState("");
  const [estado, setestado] = useState("");
  const [municipio, setmunicipio] = useState("");
  const [clasificacion, setclasificacion] = useState("");
  const [empresa, setempresa] = useState("");
  const [giro_prod_serv, setgiro_prod_serv] = useState("");
  const [r_social, setr_social] = useState("");

  const [data_share, setdata_share] = useState(false);
  const [mail_subscription, setmail_subscription] = useState(false);
  const [Discapacidad, setDiscapacidad] = useState(false);

  const data = {
    address: address,
    estado: estado,
    municipio: municipio,
    clasificacion: clasificacion,
    empresa: empresa,
    giro_prod_serv: giro_prod_serv,
    r_social: r_social,
    aditional_info: "---",
    data_share: String(data_share),
    mail_subscription: String(mail_subscription),
    discapacidad: String(Discapacidad),
  };

  return (
    <View style={styles.viewBody}>
      <TextInput
        style={styles.input_one}
        placeholder="Dirección"
        defaultValue={address}
        onChangeText={(text) => setaddress(text)}
        onBlur={() => addInfo("other", data)}
      />
      <TextInput
        style={styles.input_one}
        placeholder="Municipo"
        defaultValue={municipio}
        onChangeText={(text) => setmunicipio(text)}
        onBlur={() => addInfo("other", data)}
      />

      <TextInput
        style={styles.input_one}
        placeholder="Estado"
        defaultValue={estado}
        onChangeText={(text) => setestado(text)}
        onBlur={() => addInfo("other", data)}
      />

      <View style={styles.input_one}>
        <Picker
          style={styles.select_one}
          selectedValue={clasificacion}
          onValueChange={(itemValue) => setclasificacion(itemValue)}
          onBlur={() => addInfo("info", data)}
        >
          <Picker.Item style={styles.select_item} label="Soy:" value="" />
          <Picker.Item label="Emprendedor" value="Emprenderdor" />
          <Picker.Item label="Empresario" value="Empresario" />
          <Picker.Item label="Trabajador" value="Trabajador" />
          <Picker.Item label="Público general" value="Público general" />
        </Picker>
      </View>

      <TextInput
        style={styles.input_one}
        placeholder="Empresa"
        defaultValue={empresa}
        onChangeText={(text) => setempresa(text)}
        onBlur={() => addInfo("other", data)}
      />
      <TextInput
        style={styles.input_one}
        placeholder="Giro de la empresa"
        defaultValue={giro_prod_serv}
        onChangeText={(text) => setgiro_prod_serv(text)}
        onBlur={() => addInfo("other", data)}
      />
      <TextInput
        style={styles.input_one}
        placeholder="Razón social"
        defaultValue={r_social}
        onChangeText={(text) => setr_social(text)}
        onBlur={() => addInfo("other", data)}
      />
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={Discapacidad}
          onValueChange={setDiscapacidad}
          style={styles.checkbox}
          onBlur={() => addInfo("other", data)}
        />
        <Text style={styles.label}>Tiene alguna discapacidad?</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={data_share}
          onValueChange={setdata_share}
          style={styles.checkbox}
          onBlur={() => addInfo("other", data)}
        />
        <Text style={styles.label}>Desea compartir su información?</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={mail_subscription}
          onValueChange={setmail_subscription}
          style={styles.checkbox}
          onBlur={() => addInfo("other", data)}
        />
        <Text style={styles.label}>Recibir correo ?</Text>
      </View>
    </View>
  );
}

export default OtherInformacion;
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
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
