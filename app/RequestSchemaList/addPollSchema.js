exports.addPollSchema = {
  "type": "object",
  "required": [
    "text",
    "placeId"
  ],
  "properties": {
    "text": {
      "type": "string",
      "minLength": 10,
      "maxLength": 255,
      "errorMessage": "please send me text of the poll item!"
    },
    "placeId": {
      "type": "number",
      "minimum": 1,
      "errorMessage": "please send me placeId of the poll item!"
    }
  }
}
