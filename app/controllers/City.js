const { createCity } = require('../services/city');
const { getByName,getById,updateCity,deleteCity } = require('../services/city');
const { ServerError } = require('../../config/serverConfig');

module.exports = new class CityController {
  self = this;
  async addCity(req, res, next) {
    const { err, createdCity, status } = await createCity(req.body);
    if(err) return next(new ServerError(err, status));
    res.json({ message: 'success!', data: createdCity });
  }

  async getCityByName(req, res, next) {
    const { err, city, status } = await getByName(req.query.name);
    if(err) return next(new ServerError(err, status));
    res.json({ message: 'success!', data: city });
  }

  async getCityById(req, res, next) {
    const { err, city, status } = await getById(req.params.id);
    if(err) return next(new ServerError(err, status));
    res.json({ message: 'success!', data: city });
  }

  async updateCity(req, res, next) {
    const { err, message, status } = await updateCity(req.body,req.params.id);
    if(err) return next(new ServerError(err, status));
    res.json({ message });
  }

  async deleteCity(req, res, next) {
    const { err, message, status } = await deleteCity(req.params.id);
    if(err) return next(new ServerError(err, status));
    res.json({ message });
  }
}
