exports.getAlbumByNameSchema = {
  "type": "object",
  "required": [
    "name"
  ],
  "properties": {
    "name": {
      "type": "string",
      "minLength": 3,
      "maxLength": 255,
      "errorMessage": "please send me a correct name!"
    }
  }
}