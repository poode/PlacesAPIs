const router = require('express-promise-router')();

const { jwt } = require('../services/strategies');
const { validate } = require('../middelwares/validator');

const { addPlaceSchema } = require('../RequestSchemaList/addPlaceSchema');
const { searchPlaceSchema } = require('../RequestSchemaList/searchPlace');

const { self, addPlace , searchPlace} = require('../controllers/Place');

router.post('/', jwt, validate(addPlaceSchema), addPlace.bind(self));
router.get('/', jwt, validate(searchPlaceSchema), searchPlace.bind(self));

exports.placeRouter = router;

