require('dotenv').config();

const serverConfig = {
  PORT: process.env.PORT || 3001,
  IMAGE_FIELD: 'images',
  IMAGE_BASE_URL: '/uploads/images/',
  IMAGE_MAX_COUNT: 4,
  IMAGE_STORAGE: 'uploads/images/',
  IMAGE_SIZE: 1000000,
  IMAGE_ACCEPTED: /jpeg|jpg|png|gif/,
  SERVER_URL: `http://localhost:${process.env.PORT || 3001}/`,
  ServerError: class ServerError extends Error {
    constructor(message, status) {
      super(message);
      this.status = status;
    }
  },
}

module.exports = serverConfig;