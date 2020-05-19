const router = require('express-promise-router')();

const { jwt } = require('../services/strategies');
const { validate } = require('../middelwares/validator');

const { addReportSchema } = require('../RequestSchemaList/addReportSchema');

const { self, addReport, getReportsByplaceId, getReportById } = require('../controllers/Report');

router.post('/', jwt(), validate(addReportSchema), addReport.bind(self));
router.get('/place', getReportsByplaceId.bind(self));
router.get('/:id', getReportById.bind(self));

exports.reportRouter = router;
