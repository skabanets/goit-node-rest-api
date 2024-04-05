import { User } from "../models/User.js";
import bcrypt from "bcrypt";

export const findUser = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

export const createUser = async (data) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(data.password, salt);

  const newUser = await User.create({ ...data, password: hashPassword });
  return newUser;
};
