exports.changePasswordSchema = {
  "type": "object",
  "required": [
    "oldPassword",
    "newPassword",
  ],
  "properties": {
    "oldPassword": {
      "type": "string",
      "minLength": 6,
      "maxLength": 255,
      "errorMessage": "please provide me with old password!"
    },
    "newPassword": {
      "type": "string",
      "minLength": 6,
      "maxLength": 255,
      "errorMessage": "please provide me with new password!"
    }
  }
}
