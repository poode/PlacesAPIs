const { setVote } = require('../services/vote');
const { ServerError } = require('../../config/serverConfig');

module.exports = new class VoteController {
  self = this;
  async setVote(req, res, next) {
    const { placeId, pollId } = req.body;
    const { err, createdVote, status } = await setVote({ userId: req.user.id, placeId, pollId });
    if(err) return next(new ServerError(err, status));
    res.json({ message: 'success!', data: createdVote });
  }

}