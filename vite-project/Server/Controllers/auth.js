import Jwt from "jsonwebtoken";
import users from "../Models/Auth.js";
export const login = async (req, res) => {
  const { email } = req.body;
  console.log("EMaillllllllllllllll", email);
  try {
    const existingUser = await users.findOne({ email });
    if (!existingUser) {
      try {
        const newUser = await users.create({ email });
        const token = Jwt.sign(
          {
            email: newUser.email,
            id: newUser._id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );
        res.status(200).json({ result: newUser, token });
      } catch (error) {
        res.status(500).json({ message: "Something went wrong..." });
      }
    } else {
      const token = Jwt.sign(
        {
          email: existingUser.email,
          id: existingUser._id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );
      res.status(200).json({ result: existingUser, token });
    }
  } catch {
    res.status(500).json({ message: "Something went wrong..." });
  }
};
