exports.updateAlbumSchema = {
  "type": "object",
  "required": [
    "name",
    "cityId",
    "location",
  ],
  "properties": {
    "name": {
      "type": "string",
      "minLength": 3,
      "maxLength": 255,
      "errorMessage": "please send me name of the album!"
    },
    "cityId": {
      "type": "number",
      "min": 1,
      "errorMessage": "please send me cityId!"
    },
    "location": {
      "type": "object",
      "required": [
        "lat",
        "long",
      ],
      "properties": {
        "lat": {
          "type": "number",
          "minimum": 1,
          "errorMessage": "please send me location lat. of the place!"
        },
        "long": {
          "type": "number",
          "minimum": 1,
          "errorMessage": "please send me location long. of the place!"
        }
      }
    }
  }
};
