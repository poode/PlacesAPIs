const router = require('express-promise-router')();

const { jwt } = require('../services/strategies');
const { setVoteSchema } = require('../RequestSchemaList/setVoteSchema')
const { validate } = require('../middelwares/validator')
const { self, setVote, unsetVote } = require('../controllers/Vote');

router.post('/', jwt(), validate(setVoteSchema), setVote.bind(self));
router.delete('/', jwt(), unsetVote);

exports.voteRouter = router;
