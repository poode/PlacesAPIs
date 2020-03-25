const { createPlace, searchForPlace } = require('../services/place');
const { ServerError } = require('../../config/serverConfig');

module.exports = new class PlaceController {
  self = this;
  async addPlace(req, res, next) {
    const { err, createdPlace, status } = await createPlace(req.body, req.user.id);
    if(err) return next(new ServerError(err, status));
    res.json({ message: 'success!', data: createdPlace });
  }

  async searchPlace(req, res, next) {
    const placeList = await searchForPlace(req.query);
    res.json({ message: 'success!', data: placeList})
  }

}