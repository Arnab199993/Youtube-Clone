import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./Routes/userRoutes.js";
import cors from "cors";
import bodyParser from "body-parser";
import Channel from "./Models/ChannelSchema.js"
dotenv.config();
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});
app.post('/api/channels', (req, res) => {
  const { name, description } = req.body;

  // Create a new channel using the Channel model
  const newChannel = new Channel({ name, description });

  // Save the new channel to the database
  newChannel.save((err, channel) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to create channel' });
    } else {
      res.status(201).json(channel);
    }
  });
});
app.get('/api/channels', (req, res) => {
  // Retrieve all channels from the database
  Channel.find({}, (err, channels) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to retrieve channels' });
    } else {
      res.status(200).json(channels);
    }
  });
});
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use("/user", userRoutes);
const PORT = process.env.PORT || 5500;
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
