require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3001,
  ServerError: class ServerError extends Error {
    constructor(message, status) {
      super(message);
      this.status = status;
    }
  }
}