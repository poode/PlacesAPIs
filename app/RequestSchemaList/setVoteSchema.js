exports.setVoteSchema = {
    "type": "object",
    "required": [
      "albumId",
      "pollId"
    ],
    "properties": {
      "albumId": {
        "type": "number",
        "minimum": 1,
        "errorMessage": "please send me albumId"
      },
      "pollId": {
        "type": "number",
        "minimum": 1,
        "errorMessage": "please send me albumId"
      }
    }
  }