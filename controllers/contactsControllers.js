import { Contact } from "../models/Contact.js";
import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
import HttpError from "../helpers/HttpError.js";

const getAllContacts = async (req, res) => {
  const result = await Contact.find({});
  res.json(result);
};

const getOneContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  console.log(result);

  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
};

// export const deleteContact = (req, res) => {};

// export const createContact = (req, res) => {};

// export const updateContact = (req, res) => {};

export default {
  getAllContact: ctrlWrapper(getAllContacts),
  getOneContact: ctrlWrapper(getOneContact),
};
