const {
  createAlbum,
  searchForAlbum,
  getByName,
  getById,
  updateAlbum,
  deleteAlbum,
  deleteImage,
  addNewImages,
  listAlbum,
} = require('../services/album');
const { ServerError } = require('../../config/serverConfig');

module.exports = new class AlbumController {
  self = this;
  async addAlbum(req, res, next) {
    const { err, createdAlbum, status, images } = await createAlbum(req, req.user.id);
    if(err) return next(new ServerError(err, status));
    res.json({ message: 'success!', data: {album: createdAlbum, images } });
  }

  async searchAlbum(req, res, next) {
    const albumList = await searchForAlbum(req.query);
    res.json({ message: 'success!', data: albumList})
  }

  async getAlbumByName(req, res, next) {
    const album = await getByName(req.query.name);
    res.json({ message: 'success!', data: album})
  }
  
  async getAlbumById(req, res, next) {
    const album = await getById(req.params.id);
    res.json({ message: 'success!', data: album})
  }
 
  async updateAlbum(req, res, next) {
    const { err, message, data, status } = await updateAlbum(req.body,req.params.id);
    if(err) return next(new ServerError(err, status));
    res.json({ message, data });
  }

   
  async deleteAlbum(req, res, next) {
    const { err, message, status } = await deleteAlbum(req.params.id);
    if(err) return next(new ServerError(err, status));
    res.json({ message });
  }

  async deleteImageFromAlbum (req, res, next) {
    const { message, err, status } = await deleteImage(req.params.id)
    if(err) return next(new ServerError(err, status));
    res.json({ message });
  }

  async addNewImageForAlbum (req, res, next) {
    const { images, err, status } = await addNewImages(req)
    if(err) return next(new ServerError(err, status));
    res.json({ message: 'success!', data: images });
  }
  
  async allAlbums (req, res ,next) {
    res.json(await listAlbum(req));
  }
}
