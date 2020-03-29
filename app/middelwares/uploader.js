const multer = require('multer');
const path = require('path');
const randomString = require('randomatic');

const {
  IMAGE_SIZE,
  IMAGE_STORAGE,
  IMAGE_ACCEPTED,
} = require('../../config/serverConfig')

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, IMAGE_STORAGE);
  },
  filename(req, file, callback) {
    const filename = Date.now() + randomString('a0', 32) + path.parse(file.originalname).ext;
    callback(null, filename);
  },
});

const upload = multer({
  storage,
  fileFilter(req, file, callback) {
    const isAcceptedSize = Number(req.get('content-length')) <= Number(IMAGE_SIZE);
    if (!isAcceptedSize) {
      return callback({ message: 'File uploaded is too large, accepts only 10 M max size', status: 415 });
    }

    const filetypes = IMAGE_ACCEPTED;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname && isAcceptedSize) {
      return callback(null, file);
    }

    return callback({ message: `File upload only supports the following filetypes - ${filetypes}`, status: 415 });
  },
});

module.exports = {
  upload,
};