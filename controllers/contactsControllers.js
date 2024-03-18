import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
import * as contactsService from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";

const getAllContacts = async (req, res) => {
  const result = await contactsService.listContacts();

  res.json(result);
};

const getOneContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.getContactById(id);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

export const deleteContact = (req, res) => {};

const createContact = async (req, res) => {
  const result = await contactsService.addContact(req.body);

  res.status(201).json(result);
};

export const updateContact = (req, res) => {};

export default {
  getAllContacts: ctrlWrapper(getAllContacts),
  getOneContact: ctrlWrapper(getOneContact),
  createContact: ctrlWrapper(createContact),
};
