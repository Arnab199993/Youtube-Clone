import mongoose from "mongoose";
const channelSchema = new mongoose.Schema({
  name: String,
  description: String,
});

export default mongoose.model('Channel', channelSchema)