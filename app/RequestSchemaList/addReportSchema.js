exports.addReportSchema = {
    "type": "object",
    "required": [
      "issue",
      "placeId"
    ],
    "properties": {
      "issue": {
        "type": "string",
        "minLength": 10,
        "maxLength": 255,
        "errorMessage": "issue is missing!"
      },
      "placeId": {
        "type": "number",
        "minimum": 1,
        "errorMessage": "please send me placeId of the poll item!"
      }
    }
  }