import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.get("/", (req, res) => {
  res.send("Hello");
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server Running on the port ${PORT}  ...`);
});
const DB_URL = process.env.CONNECTION_URL;
mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongo Db Database Connected");
  })
  .catch((error) => {
    console.log(error);
  });
//mongodb+srv://Arnab199993:<password>@cluster0.symytbj.mongodb.net/?retryWrites=true&w=majority
