import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
import HttpError from "../helpers/HttpError.js";
import { User } from "../models/User.js";
import { findUser } from "../services/usersServices.js";

const register = async (req, res) => {
  const { email } = req.body;
  const user = await findUser(email);

  if (user) {
    throw HttpError(409, "Email in use");
  }

  const newUser = await User.create(req.body);

  res.status(201).json({
    email: newUser.email,
    subscription: newUser.subscription,
  });
};

export default {
  register: ctrlWrapper(register),
};
