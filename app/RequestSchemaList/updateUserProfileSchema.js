exports.updateUserProfileSchema = {
  "type": "object",
  "required": [
    "email",
    "username",
    "name",
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
    "name": {
      "type": "string",
      "minLength": 2,
      "maxLength": 255,
      "errorMessage": "please provide me with name!"
    }
  }
}
