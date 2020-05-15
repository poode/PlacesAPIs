const router = require('express-promise-router')();

const { jwt } = require('../services/strategies');
const { setVoteSchema } = require('../RequestSchemaList/setVoteSchema')
const { validate } = require('../middelwares/validator')
const { self, setVote } = require('../controllers/Vote');

router.post('/', jwt(), validate(setVoteSchema), setVote.bind(self));

exports.voteRouter = router;
