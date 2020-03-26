exports.setVoteSchema = {
    "type": "object",
    "required": [
      "placeId",
      "pollId"
    ],
    "properties": {
      "placeId": {
        "type": "number",
        "minimum": 1,
        "errorMessage": "please send me placeId"
      },
      "pollId": {
        "type": "number",
        "minimum": 1,
        "errorMessage": "please send me placeId"
      }
    }
  }