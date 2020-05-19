const router = require('express-promise-router')();

const { jwt } = require('../services/strategies');
const { validate } = require('../middelwares/validator');
const { validateLocation } = require('../middelwares/validateLocation');

const { upload } = require('../middelwares/uploader');
const { IMAGE_FIELD, IMAGE_MAX_COUNT } = require('../../config/serverConfig');

const { addAlbumSchema } = require('../RequestSchemaList/addAlbumSchema');
const { searchAlbumSchema } = require('../RequestSchemaList/searchAlbum');
const { getAlbumByNameSchema } = require('../RequestSchemaList/getAlbumByNameSchema');


const { self, addAlbum , searchAlbum, getAlbumByName,getAlbumById,updateAlbum,deleteAlbum} = require('../controllers/Album');

router.post('/', jwt(), upload.array(IMAGE_FIELD, IMAGE_MAX_COUNT), validate(addAlbumSchema), validateLocation,addAlbum.bind(self));
router.get('/', jwt(), validate(searchAlbumSchema), searchAlbum.bind(self));
router.get('/', jwt(), validate(getAlbumByNameSchema), getAlbumByName.bind(self));
router.get('/:id', jwt(), getAlbumById.bind(self));
router.put('/:id', jwt(), updateAlbum.bind(self));
router.delete('/:id', jwt(), deleteAlbum.bind(self));


exports.albumRouter = router;
