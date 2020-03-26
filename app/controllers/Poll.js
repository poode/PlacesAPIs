const { createPoll, getPollListByPlaceId } = require('../services/poll');
const { ServerError } = require('../../config/serverConfig');

module.exports = new class PollController {
  self = this;
  async addPoll(req, res, next) {
    const { err, createdPoll, status } = await createPoll(req.body);
    if(err) return next(new ServerError(err, status));
    res.json({ message: 'success!', data: createdPoll });
  }

  async getPollList(req, res, next) {
    const { err, pollListWithVotes, status } = await getPollListByPlaceId(req.query);
    if(err) return next(new ServerError(err, status));
    res.json({ message: 'success!', data: pollListWithVotes });
  }

}