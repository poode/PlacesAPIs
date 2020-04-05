const router = require('express-promise-router')();

const { jwt } = require('../services/strategies');
const { validate } = require('../middelwares/validator');
// const { adminRole } = require('../middelwares/adminRole');

const { addCitySchema } = require('../RequestSchemaList/addCitySchema');

const { self, addCity } = require('../controllers/City');

router.post('/', jwt/*, adminRole*/, validate(addCitySchema), addCity.bind(self));

exports.cityRouter = router;
