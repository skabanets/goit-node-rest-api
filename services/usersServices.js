import { User } from "../models/User.js";

export const findUser = async (email) => {
  const user = await User.findOne({ email });
  return user;
};
