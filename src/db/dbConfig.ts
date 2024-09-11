import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { UserLoginCredentials } from "./entites/UserLoginCredentials";
import { UserInformation } from "./entites/UserInformation";

const db: PostgresConnectionOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [UserInformation, UserLoginCredentials],
  synchronize: true,
};
export default db;
