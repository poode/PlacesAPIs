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

exports.updatePollSchema = {
  "type": "object",
  "required": [
    "text",
    "pollId"
  ],
  "properties": {
    "text": {
      "type": "string",
      "minLength": 10,
      "maxLength": 255,
      "errorMessage": "please send me text of the poll item!"
    },
    "pollId": {
      "type": "number",
      "minimum": 1,
      "errorMessage": "please send me pollId of the poll item!"
    }
  }
}