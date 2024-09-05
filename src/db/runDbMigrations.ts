import db from "./dbConfig";
import { Client } from "pg";

// async function runDbMigrations() {
//   console.log("BEGIN DB MIGRATIONS");
//   const client: any = await db.connect();
//   try {
//     await client.query("BEGIN");
//   } catch (e) {
//     await client.query("ROLLBACK");
//     client.end();
//     throw e;
//   } finally {
//     client.release();
//   }
// }
// export default runDbMigrations;
