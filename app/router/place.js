const router = require('express-promise-router')();

const { jwt } = require('../services/strategies');
const { validate } = require('../middelwares/validator');
const { validateLocation } = require('../middelwares/validateLocation');
const { upload } = require('../middelwares/uploader');
const { IMAGE_FIELD, IMAGE_MAX_COUNT } = require('../../config/serverConfig');

const { addPlaceSchema } = require('../RequestSchemaList/addPlaceSchema');
const { searchPlaceSchema } = require('../RequestSchemaList/searchPlace');

const { self, addPlace , searchPlace} = require('../controllers/Place');

/**
 * @swagger
 * /places:
 *   post:
 *     tags:
 *       - Places APIs
 *     description: Any user can add place in a city
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - name: x-auth-token
 *         description: Token to sent in any request to identify the logged in User
 *         in: header
 *         required: true
 *       - in: formData
 *         name: images
 *         description: The file to upload.
 *         type: file
 *         required: true
 *       - in: formData
 *         name: name
 *         description: Place name
 *         type: string
 *         required: true
 *       - in: formData
 *         name: cityId
 *         description: City Id
 *         type: string
 *         required: true
 *       - in: formData
 *         name: location
 *         description: location of the place and should be valid stringified object eg":" {lat":" 30, long":" 29}
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Returns created City
 */
router.post('/', jwt(), upload.array(IMAGE_FIELD, IMAGE_MAX_COUNT), validate(addPlaceSchema), validateLocation,addPlace.bind(self));

/**
 * @swagger
 * /places:
 *   get:
 *     tags:
 *       - Places APIs
 *     description: Any user can search for a place by its name
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: x-auth-token
 *         description: Token to sent in any request to identify the logged in User
 *         in: header
 *         required: true
 *       - name: name
 *         description: it is the place name
 *         in: query
 *         required: true
 *     responses:
 *       200:
 *         description: Returns found places
 */
router.get('/', jwt(), validate(searchPlaceSchema), searchPlace.bind(self));

exports.placeRouter = router;
