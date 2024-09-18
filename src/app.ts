import "dotenv/config";
import express from "express";
import router from "./routes";
import dbConnection from "./db/dbConnection";

const app = express();
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
dbConnection.initialize().then(() => {
  console.log("Data source has been initialized");
});
app.use(express.json());
app.use("/", router);
