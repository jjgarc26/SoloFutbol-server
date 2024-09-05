import { DataSource } from "typeorm";
import db from "./dbConfig";

async function dbConnection() {
  try {
    const connection = new DataSource(db);
    console.log("Was able to connect to db");
  } catch (e) {
    console.log(`Error while trying to connect to db: ${e}`);
  }
}
export default dbConnection;
