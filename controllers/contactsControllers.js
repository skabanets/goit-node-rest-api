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

  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
};

const createContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

// export const deleteContact = (req, res) => {};

// export const updateContact = (req, res) => {};

export default {
  getAllContact: ctrlWrapper(getAllContacts),
  getOneContact: ctrlWrapper(getOneContact),
  createContact: ctrlWrapper(createContact),
};
