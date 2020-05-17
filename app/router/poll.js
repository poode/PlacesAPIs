const router = require('express-promise-router')();

const { jwt } = require('../services/strategies');
const { validate } = require('../middelwares/validator');

const { addPollSchema, getPollListSchema, updatePollSchema } = require('../RequestSchemaList/addPollSchema');

const { self, addPoll, getPollList, getPollById, updatePoll, deletePoll } = require('../controllers/Poll');

router.post('/', jwt(), validate(addPollSchema), addPoll.bind(self));
router.post('/update', jwt(), validate(updatePollSchema), updatePoll.bind(self));

router.get('/', jwt(), getPollList.bind(self));
router.get('/getById', getPollById.bind(self));

router.delete('/', jwt(), deletePoll.bind(self));

exports.pollRouter = router;
