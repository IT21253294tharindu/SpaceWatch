import mongoose from "mongoose";
import config from "../config";

let database;

// Connect to the database
const connectDB = async () => {
  const mongodb_url = config.Mongodb_url;
  if (database) {
    return;
  }
  mongoose
    .connect(mongodb_url)
    .then((connection) => {
      database = connection;
      console.log("Database connection successful");
    })
    .catch((error) => {
      console.error("Database connection failed",error.message);
    });
};

export default connectDB;
