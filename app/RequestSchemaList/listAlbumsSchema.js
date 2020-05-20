exports.listAlbumsSchema = {
  "type": "object",
  "required": [
    "page",
    "limit",
  ],
  "properties": {
    "page": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255,
      "pattern": "^[1-9]\\d*$",
      "errorMessage": "please send me page number!"
    },
    "limit": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255,
      "pattern": "^[1-9]\\d*$",
      "errorMessage": "please send me limit of items to be sent!"
    },
  }
}
