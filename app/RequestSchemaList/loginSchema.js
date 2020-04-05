exports.loginSchema = {
  "type": "object",
  "required": [
    "email",
    "password",
  ],
  "properties": {
    "email": {
      "type": "string",
      "maxLength": 150,
      "format": "email",
      "errorMessage": "please provide me with valid email!"
    },
    "password": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255,
      "errorMessage": "please provide me with password!"
    }
  }
}
