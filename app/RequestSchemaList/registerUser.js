exports.registerUserSchema = {
    "type": "object",
    "required": [
      "email",
      "password",
      "username"
    ],
    "properties": {
      "email": {
        "type": "string",
        "maxLength": 150,
        "format": "email",
        "errorMessage": "please provide me with valid email!"
      },
      "username": {
        "type": "string",
        "maxLength": 255,
        "minLength": 3,
        "errorMessage": "please provide me with valid username!"
      },
      "password": {
        "type": "string",
        "minLength": 1,
        "maxLength": 255,
        "errorMessage": "please provide me with password!"
      }
    }
  }
