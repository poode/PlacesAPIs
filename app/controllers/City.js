const { createCity } = require('../services/city');
const { ServerError } = require('../../config/serverConfig');

module.exports = new class CityController {
  self = this;
  async addCity(req, res, next) {
    const { err, createdCity, status } = await createCity(req.body);
    if(err) return next(new ServerError(err, status));
    res.json({ message: 'success!', data: createdCity });
  }

}