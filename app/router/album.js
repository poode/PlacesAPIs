const router = require('express-promise-router')();

const { jwt } = require('../services/strategies');
const { validate } = require('../middelwares/validator');
const { validateLocation } = require('../middelwares/validateLocation');

const { upload } = require('../middelwares/uploader');
const { IMAGE_FIELD, IMAGE_MAX_COUNT } = require('../../config/serverConfig');

const { addAlbumSchema } = require('../RequestSchemaList/addAlbumSchema');
const { searchAlbumSchema } = require('../RequestSchemaList/searchAlbum');
const { getAlbumByNameSchema } = require('../RequestSchemaList/getAlbumByNameSchema');
const { updateAlbumSchema } = require('../RequestSchemaList/updateAlbumSchema');
const { listAlbumsSchema } = require('../RequestSchemaList/listAlbumsSchema');


const {
  self,
  addAlbum,
  searchAlbum,
  getAlbumByName,
  getAlbumById,
  updateAlbum,
  deleteAlbum,
  deleteImageFromAlbum,
  addNewImageForAlbum,
  allAlbums,
} = require('../controllers/Album');

router.post('/', jwt(), upload.array(IMAGE_FIELD, IMAGE_MAX_COUNT), validate(addAlbumSchema), validateLocation, addAlbum.bind(self));
router.get('/', validate(searchAlbumSchema), searchAlbum.bind(self));
router.get('/', validate(getAlbumByNameSchema), getAlbumByName.bind(self));
router.get('/:id', getAlbumById.bind(self));
router.get('/all/list', validate(listAlbumsSchema), allAlbums.bind(self));
router.put('/:id', jwt(), validate(updateAlbumSchema), updateAlbum.bind(self));
router.delete('/:id', jwt(), deleteAlbum.bind(self));
router.delete('/images/:id', jwt(), deleteImageFromAlbum.bind(self));
router.put('/:albumId/images', jwt(), upload.array(IMAGE_FIELD, IMAGE_MAX_COUNT), addNewImageForAlbum.bind(self));


exports.albumRouter = router;
