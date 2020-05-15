const router = require('express-promise-router')();

const { jwt } = require('../services/strategies');
const { setVoteSchema } = require('../RequestSchemaList/setVoteSchema')
const { validate } = require('../middelwares/validator')
const { self, setVote } = require('../controllers/Vote');

/**
 * @swagger
 * /votes:
 *   get:
 *     tags:
 *       - Vote Polls APIs
 *     description: Any user can vote for certain poll by its ID and place ID
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
 *               placeId:
 *                  description: place Id
 *                  required: true
 *                  type: number
 *               pollId:
 *                  description: poll Id
 *                  required: true
 *                  type: number
 *     responses:
 *       200:
 *         description: Returns vote for this poll
 */
router.post('/', jwt(), validate(setVoteSchema), setVote.bind(self));

exports.voteRouter = router;
