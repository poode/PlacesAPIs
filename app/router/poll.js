const router = require('express-promise-router')();

const { jwt } = require('../services/strategies');
const { validate } = require('../middelwares/validator');

const { addPollSchema, getPollListSchema, updatePollSchema } = require('../RequestSchemaList/addPollSchema');

const { self, addPoll, getPollList, getPollById, updatePoll, deletePoll } = require('../controllers/Poll');

/**
 * @swagger
 * /polls:
 *   post:
 *     tags:
 *       - Polls APIs
 *     description: User can add poll for a certain place
 *     summary: User can add poll for a certain place
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: x-auth-token
 *         schema:
 *            type: string
 *         description: Token to sent in any request to identify the logged in User
 *         in: header
 *         required: true
 *       - name: body
 *         in: body
 *         schema:
 *            type: object
 *            properties:
 *               text:
 *                  description: poll text to be voted later by users
 *                  required: true
 *                  type: string
 *               placeId:
 *                  description: place ID we can get from user's places added by him/her
 *                  required: true
 *                  type: number
 *     responses:
 *       200:
 *         description: Returns created poll
 */
router.post('/', jwt(), validate(addPollSchema), addPoll.bind(self));

/**
 * @swagger
 * /polls/update:
 *   post:
 *     tags:
 *       - Polls APIs
 *     description: User can update his previously created poll
 *     summary: User can update his previously created poll
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: x-auth-token
 *         schema:
 *            type: string
 *         description: Token to sent in any request to identify the logged in User
 *         in: header
 *         required: true
 *       - name: body
 *         in: body
 *         schema:
 *            type: object
 *            properties:
 *               text:
 *                  description: poll text to be voted later by users
 *                  required: true
 *                  type: string
 *               placeId:
 *                  description: place ID we can get from user's places added by him/her, user must own this place.
 *                  required: true
 *                  type: number
 *     responses:
 *       200:
 *         description: Returns success message
 */
router.post('/update', jwt(), validate(updatePollSchema), updatePoll.bind(self));

 /**
 * @swagger
 * /polls:
 *   get:
 *     tags:
 *       - Polls APIs
 *     description: Any user can get votes for certain place by its ID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: x-auth-token
 *         schema:
 *            type: string
 *         description: Token to sent in any request to identify the logged in User
 *         in: header
 *         required: true
 *       - name: placeId
 *         schema:
 *            type: string
 *         description: it is the place id
 *         in: query
 *         required: true
 *     responses:
 *       200:
 *         description: Returns found polls for this place
 */
router.get('/', jwt(), getPollList.bind(self));

 /**
 * @swagger
 * /polls:
 *   get:
 *     tags:
 *       - Polls APIs
 *     description: Get a certain pull by its own id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: x-auth-token
 *         schema:
 *            type: string
 *         description: Token to sent in any request to identify the logged in User
 *         in: header
 *         required: true
 *       - name: id
 *         schema:
 *            type: string
 *         description: the id of the wanted poll
 *         in: query
 *         required: true
 *     responses:
 *       200:
 *         description: Returns the poll that has this id
 */
router.get('/getById', getPollById.bind(self));

 /**
 * @swagger
 * /polls:
 *   delete:
 *     tags:
 *       - Polls APIs
 *     description: Delete a certain pull by its own id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: x-auth-token
 *         schema:
 *            type: string
 *         description: Token to sent in any request to identify the logged in User
 *         in: header
 *         required: true
 *       - name: id
 *         schema:
 *            type: string
 *         description: the id of the wanted poll, user must own this poll.
 *         in: query
 *         required: true
 *     responses:
 *       200:
 *         description: Returns success message.
 */
router.delete('/', jwt(), deletePoll.bind(self));

exports.pollRouter = router;
