import express from "express";
import contactsControllers from "../controllers/contactsControllers.js";

import { validateBody } from "../helpers/validateBody.js";
import {
  createContactSchema,
  updateContactSchema,
} from "../schemas/contactsSchemas.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsControllers.getAllContact);

contactsRouter.get("/:id", contactsControllers.getOneContact);

contactsRouter.post(
  "/",
  validateBody(createContactSchema),
  contactsControllers.createContact
);

contactsRouter.put(
  "/:id",
  validateBody(updateContactSchema),
  contactsControllers.updateContact
);

// contactsRouter.delete("/:id", deleteContact);

export default contactsRouter;
