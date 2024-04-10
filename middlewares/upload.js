import multer from "multer";
import path from "path";

const tempDir = path.join("temp");

const multerCongif = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

export const upload = multer({
  storage: multerCongif,
});
