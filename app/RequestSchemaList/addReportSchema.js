exports.addReportSchema = {
    "type": "object",
    "required": [
      "issue",
      "albumId"
    ],
    "properties": {
      "issue": {
        "type": "string",
        "minLength": 10,
        "maxLength": 255,
        "errorMessage": "issue is missing!"
      },
      "albumId": {
        "type": "number",
        "minimum": 1,
        "errorMessage": "please send me albumId!"
      }
    }
  }
