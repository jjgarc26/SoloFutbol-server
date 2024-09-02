import "dotenv/config";
import express from "express";
import router from "./routers";

const app = express();
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
app.use(express.json());
app.use("/", router);
