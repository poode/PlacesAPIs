const router = require('express-promise-router')();

const { jwt } = require('../services/strategies');
const { validate } = require('../middelwares/validator');

const { addPollSchema, getPollListSchema } = require('../RequestSchemaList/addPollSchema');

const { self, addPoll, getPollList } = require('../controllers/Poll');

router.post('/', jwt(), validate(addPollSchema), addPoll.bind(self));
router.get('/', jwt(), getPollList.bind(self));

exports.pollRouter = router;
