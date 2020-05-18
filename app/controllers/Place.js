const { createPlace, searchForPlace,getByName,getById,updatePlace,deletePlace } = require('../services/place');
const { ServerError } = require('../../config/serverConfig');

module.exports = new class PlaceController {
  self = this;
  async addPlace(req, res, next) {
    const { err, createdPlace, status, images } = await createPlace(req, req.user.id);
    if(err) return next(new ServerError(err, status));
    res.json({ message: 'success!', data: {place: createdPlace, images } });
  }

  async searchPlace(req, res, next) {
    const placeList = await searchForPlace(req.query);
    res.json({ message: 'success!', data: placeList})
  }

  async getPlaceByName(req, res, next) {
    const place = await getByName(req.query.name);
    res.json({ message: 'success!', data: place})
  }
  
  async getPlaceById(req, res, next) {
    const place = await getById(req.params.id);
    res.json({ message: 'success!', data: place})
  }
 
  async updatePlace(req, res, next) {
    const { err, message, status } = await updatePlace(req.params.id);
    if(err) return next(new ServerError(err, status));
    res.json({ message });
  }

   
  async deletePlace(req, res, next) {
    const { err, message, status } = await deletePlace(req.params.id);
    if(err) return next(new ServerError(err, status));
    res.json({ message });
  }

  
}
