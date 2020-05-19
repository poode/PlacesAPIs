const {
   createPoll, 
   getPollListByAlbumId, 
   getPollById,
   updatePoll,
   deletePoll
  } = require('../services/poll');
const { ServerError } = require('../../config/serverConfig');

module.exports = new class PollController {
  self = this;
  async addPoll(req, res, next) {
    const { err, createdPoll, status } = await createPoll(req);
    if(err) return next(new ServerError(err, status));
    res.json({ message: 'success!', data: createdPoll });
  }

  async getPollList(req, res, next) {
    const { err, pollListWithVotes, status } = await getPollListByAlbumId(req.query);
    if(err) return next(new ServerError(err, status));
    res.json({ message: 'success!', data: pollListWithVotes });
  }

  async getPollById(req, res, next) {
    const { err, poll, status } = await getPollById(req.params.id);
    if(err) return next(new ServerError(err, status));
    res.json({ message: 'success!', data: poll });
  }

  async updatePoll(req, res, next) {
    const { err, response, status } = await updatePoll(req);
    if(err) return next(new ServerError(err, status));
    res.json({ message: 'success!', data: response });
  }

  async deletePoll(req, res, next) {
    const { err, response, status } = await deletePoll(req);
    if(err) return next(new ServerError(err, status));
    res.json({ message: 'success!', data: response });
  }
}
