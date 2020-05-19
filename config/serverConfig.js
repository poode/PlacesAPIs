require('dotenv').config();

const serverConfig = {
  PORT: process.env.PORT || 3000,
  IMAGE_FIELD: 'images',
  IMAGE_MAX_COUNT: process.env.IMAGE_MAX_COUNT,
  IMAGE_STORAGE: 'uploads/images/',
  SWAGGER_BASE_URL: '/public/api-docs',
  IMAGE_SIZE: 1000000,
  IMAGE_ACCEPTED: /jpeg|jpg|png|gif/,
  ServerError: class ServerError extends Error {
    constructor(message, status) {
      super(message);
      this.status = status;
    }
  },
}

module.exports = serverConfig;
