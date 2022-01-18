import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("db.db");

export const setupDatabaseAsync = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "create table if not exists sesion (id integer primary key autoincrement, nombre text, token text);"
    );
  });
};

export const create_user = (nombre, token) => {
  db.transaction(
    (tx) => {
      tx.executeSql("insert into sesion (nombre, token, id) values (?, ?, ?)", [
        nombre,
        token,
        id
      ]);
      tx.executeSql("select * from sesion", [], (_, { rows }) =>
        console.log("Data" + JSON.stringify(rows))
      );
    },
    null,
    null
  );
};

export const ValidateSesion = (setUsers) => {
  db.transaction(
    (tx) => {
      tx.executeSql(
        "select count(*) as count from sesion",
        [],
        (_, { rows }) => {
          if (rows && rows[0].count > 0) {
            setUsers(true);

            console.log("sesion iniciada: ");
          } else {
            setUsers(false);
            console.log("sesion cerrada ");
          }
        }
      );
    },
    null,
    null
  );
};

export const CloseSesion = () => {
  db.transaction((tx) => {
    tx.executeSql("delete from sesion");
    console.log("sesión cerrada!");
    null, null;
  });
};

export const getValues = (setiformacion) => {
  db.transaction(
    (tx) => {
      tx.executeSql("select * from sesion", [], (_, { rows }) => {
        console.log("Data" + JSON.stringify(rows));
        setiformacion(rows);
      });
    },
    null,
    null
  );
};

export const Validate = async (setUsers) => {
  await db.transaction(
    (tx) => {
      tx.executeSql(
        "select count(*) as count from sesion",
        [],
        (_, { rows }) => {
          if (rows && rows[0].count > 0) {
            setUsers(true);
            console.log("sesion iniciada: ");
          } else {
            setUsers(false);
            console.log("sesion cerrada ");
          }
        }
      );
    },
    null,
    null
  );
};
