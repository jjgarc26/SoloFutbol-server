import { DataSource } from "typeorm";
import db from "./dbConfig";

async function dbConnection() {
  try {
    const connection = new DataSource(db);
    connection
      .initialize()
      .then(() => {
        console.log("Data source has been initialized");
      })
      .finally(() => {
        connection.destroy();
      });
  } catch (e) {
    console.log(`Error while trying to connect to db: ${e}`);
  }
}
export default dbConnection;
