import mongoose from "mongoose";
import users from "../Models/Auth.js";

// export const updateChannelData = async (req, res) => {
//   const { id: _id } = req.params;
//   const { name, desc } = req.body;
//   if (!mongoose.Types.ObjectId.isValid(_id)) {
//     return res.status(404).send("Channel Unavailable");
//   }
//   try {
//     const updateData = await users.findByIdAndUpdate(
//       _id,
//       {
//         $set: {
//           name: name,
//           desc: desc,
//         },
//       },
//       { new: true }
//     );
//     res.status(200).JSON(updateData);
//   } catch (error) {
//     res.status(405).JSON({ message: error.message });
//   }
// };


