import AsyncStorage from "@react-native-async-storage/async-storage";

export const _storeData = async (data) => {
  try {
    await AsyncStorage.setItem("sesion", JSON.stringify(data));
  } catch (error) {
    console.log("error el guardar sesion");
  }
};

export const _storeId = async (data) => {
  try {
    await AsyncStorage.setItem("id", (data));    
  } catch (error) {
    console.log("error al guardar sesion");
  }
};

export const _storeEmail = async (data) => {
  try {
    await AsyncStorage.setItem("email", JSON.stringify(data));
    console.log("email: ", data);
  } catch (error) {
    console.log("error el guardar sesion");
  }
};

export const _retrieveData = async (setsesion) => {
  try {
    const value = await AsyncStorage.getItem("sesion");
    if (value !== null) {
      setsesion(true);
    } else {
      setsesion(false);
    }
  } catch (error) {
    setsesion(false);
  }
};

export const _getData = async () => {
  try {
    const info = (await AsyncStorage.getItem("sesion")) || "No data";
    console.log("data: ", info);
    return info;
  } catch (error) {
    console.log("error el guardar sesion");
    return false;
  }
};

export const _getEmail = async () => {
  try {
    const info = (await AsyncStorage.getItem("email")) || "No data";
    console.log("data: ", info);
    return info;
  } catch (error) {
    console.log("error el guardar sesion");
    return false;
  }
};

export const _getId = async () => {
  try {
    const info = (await AsyncStorage.getItem("id")) || "No data";
    console.log("id: ", info);
    return info;
  } catch (error) {
    console.log("error el guardar sesion");
    return false;
  }
};

export const _DeleteData = async () => {
  return await AsyncStorage.removeItem("sesion")
    .then((data) => {
      AsyncStorage.removeItem("email");
      console.log("sesion close ", data);
      return true;
    })
    .catch((er) => {
      return false;
    });
};

export const addInfo = async (name, data) => {
  // console.log(name, " =>", JSON.stringify(data));
  try {
    await AsyncStorage.removeItem(name);
    await AsyncStorage.setItem(name, JSON.stringify(data));
    return true;
  } catch (error) {
    console.log("error el guardar info");
    return false;
  }
};

export const _getInfo = async () => {
  try {
    const info = (await AsyncStorage.getItem("info")) || "No data";
    const user = (await AsyncStorage.getItem("user")) || "No data";
    const other = (await AsyncStorage.getItem("other")) || "No data";

    return { ...JSON.parse(info), ...JSON.parse(user), ...JSON.parse(other) };
  } catch (error) {
    console.log("error el guardar info", error);
    return "";
  }
};
