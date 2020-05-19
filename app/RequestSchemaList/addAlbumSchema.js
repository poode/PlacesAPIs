exports.addAlbumSchema = {
  "type": "object",
  "required": [
    "name",
    "cityId",
  ],
  "properties": {
    "name": {
      "type": "string",
      "minLength": 3,
      "maxLength": 255,
      "errorMessage": "please send me name of the album!"
    },
    "cityId": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255,
      "errorMessage": "please send me cityId!"
    },
  }
}
