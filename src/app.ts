import "dotenv/config";
import express from "express";
import router from "./routers";
import dbConnection from "./db/dbConnection";

const app = express();
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
dbConnection();
app.use(express.json());
app.use("/", router);
