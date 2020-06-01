const { setVote, deleteVote } = require('../services/vote');
const { ServerError } = require('../../config/serverConfig');

module.exports = new class VoteController {
  self = this;
  async setVote(req, res, next) {
    const { albumId, pollId } = req.body;
    const { err, createdVote, status } = await setVote({ userId: req.user.id, albumId, pollId });
    if(err) return next(new ServerError(err, status));
    res.json({ message: 'success!', data: createdVote });
  }

  async unsetVote(req, res, next) {
    const { err, message, status } = await deleteVote(req);
    if(err) return next(new ServerError(err, status));
    res.json({ message });
  }

}
