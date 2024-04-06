import { User } from "../models/User.js";
import bcrypt from "bcrypt";

export const findUser = (filter) => User.findOne(filter);

export const createUser = async (data) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(data.password, salt);

  const newUser = User.create({ ...data, password: hashPassword });
  return newUser;
};

export const validatePassword = (password, userPassword) =>
  bcrypt.compare(password, userPassword);
