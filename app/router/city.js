const router = require('express-promise-router')();

const { jwt } = require('../services/strategies');
const { validate } = require('../middelwares/validator');
const { adminRole } = require('../middelwares/adminRole');

const { addCitySchema } = require('../RequestSchemaList/addCitySchema');

const { self, addCity } = require('../controllers/City');


/**
 * @swagger
 * /cities:
 *   post:
 *     tags:
 *       - Cities APIs
 *     description: Any user can add city
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: x-auth-token
 *         description: Token to sent in any request to identify the logged in User
 *         in: header
 *         required: true
 *       - name: body
 *         in: body
 *         schema:
 *            type: object
 *            properties:
 *               name:
 *                  description: City name
 *                  required: true
 *                  type: string
 *     responses:
 *       200:
 *         description: Returns created City
 */
router.post('/', jwt(), validate(addCitySchema), addCity.bind(self));

exports.cityRouter = router;
