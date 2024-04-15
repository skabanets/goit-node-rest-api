import nodemailer from "nodemailer";

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "skabanets97@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

export const sendEmail = async (data) => {
  const email = { ...data, from: "skabanets97@meta.ua" };
  await transport.sendMail(email);
};
