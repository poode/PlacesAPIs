exports.addPlaceSchema = {
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
      "errorMessage": "please send me name of the place!"
    },
    "cityId": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255,
      "errorMessage": "please send me cityId!"
    },
    "location": {
      "type": "string",
      "pattern": '{"lat":\\d+(\\.\\d+),"long":\\d+(\\.\\d+)}'
    },
  }
}