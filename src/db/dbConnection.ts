import { DataSource } from "typeorm";
import db from "./dbConfig";

const dbConnection = new DataSource(db);

export default dbConnection;
