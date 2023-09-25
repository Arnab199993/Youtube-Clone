import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./Routes/userRoutes";
const app = express();
dotenv.config();
app.get("/", (req, res) => {
  res.send("Hello");
});
app.use("/user",userRoutes)
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
//http://localhost:5500/