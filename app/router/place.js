const router = require('express-promise-router')();

const { jwt } = require('../services/strategies');
const { validate } = require('../middelwares/validator');
const { validateLocation } = require('../middelwares/validateLocation');
const { upload } = require('../middelwares/uploader');
const { IMAGE_FIELD, IMAGE_MAX_COUNT } = require('../../config/serverConfig');

const { addPlaceSchema } = require('../RequestSchemaList/addPlaceSchema');
const { searchPlaceSchema } = require('../RequestSchemaList/searchPlace');

const { self, addPlace , searchPlace} = require('../controllers/Place');

router.post('/', jwt(), upload.array(IMAGE_FIELD, IMAGE_MAX_COUNT), validate(addPlaceSchema), validateLocation,addPlace.bind(self));
router.get('/', jwt(), validate(searchPlaceSchema), searchPlace.bind(self));

exports.placeRouter = router;
