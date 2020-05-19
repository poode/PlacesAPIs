const router = require('express-promise-router')();

const { jwt } = require('../services/strategies');
const { validate } = require('../middelwares/validator');
const { adminRole } = require('../middelwares/adminRole');

const { addCitySchema } = require('../RequestSchemaList/addCitySchema');
const { getCityByNameSchema } = require('../RequestSchemaList/getCityByNameSchema');

const { self, addCity,getCityByName,getCityById,updateCity,deleteCity } = require('../controllers/City');


router.post('/', jwt(), validate(addCitySchema), addCity.bind(self));
router.get('/', validate(getCityByNameSchema), getCityByName.bind(self));
router.get('/:id', getCityById.bind(self));
router.put('/:id', jwt(),updateCity.bind(self));
router.delete('/:id', jwt(),deleteCity.bind(self));

exports.cityRouter = router;
