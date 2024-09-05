import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const db: PostgresConnectionOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};
export default db;
