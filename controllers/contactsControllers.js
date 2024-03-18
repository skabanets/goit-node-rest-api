import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
import * as contactsService from "../services/contactsServices.js";

const getAllContacts = async (req, res) => {
  const result = await contactsService.listContacts();

  res.json(result);
};

export const getOneContact = (req, res) => {};

export const deleteContact = (req, res) => {};

export const createContact = (req, res) => {};

export const updateContact = (req, res) => {};

export default {
  getAllContacts: ctrlWrapper(getAllContacts),
};
