import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./utils/db_connection";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || "3000";

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user/", require("./api/routes/userRoute"));

app.get("/", (res) => {
  res.send("Hello World");
  next();
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
