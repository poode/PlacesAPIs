const path = require('path');
const fs = require('fs').promises;

const { IMAGE_MAX_COUNT } = require('../../config/serverConfig');
const db = require('../../models');
const { Op } = db.Sequelize;

const getById = async id => {
  const result = parseInt(id);
  if(result === NaN) return {err: `id should be integer you sent ${id}`, status: 400 };
  const album = await db.album.findOne({ where: { id }, include: [db.user, db.city], raw: true });
  if(!album) return { err: `album with ID ${id} is not found`, status: 404 };
  return { album };
}
exports.getById = getById;

async function getByName(name) {
  const album = await db.album.findOne({ where: { name }, include: [db.user, db.city], raw: true });
  if(!album) return { err: `There is no album with name ${name}`, status: 404 }
  return { album }
}
exports.getByName = getByName;

exports.createAlbum = async (req, userId) => {
  const { err, album, status } = await getByName(req.body.name);

  if (album) {
    req.files.forEach(async image => {
      await fs.unlink(path.resolve(image.path));
    });

    return { err: `The album with name ${req.body.name} is already found`, status: 409 };
  }

  const city = await db.city.findOne({
    where: {
      id: req.body.cityId
    }
  });

  if(!city) {
    return {
      err: `City with id ${req.body.cityId} is not found please use valid city id`,
      status: 400,
    };
  }

  if(!req.files.length) return { err: `The album must have ${IMAGE_MAX_COUNT} images by max!`, status: 400}
  req.body.location = JSON.parse(req.body.location);

  try {
    const createdAlbum = await db.album.create({...req.body, userId}, { raw: true });
    const images = await Promise.all(req.files.map(async ({ path }) => {
      return db.albumImage
        .create({ albumId: createdAlbum.id, imageUrl: `${process.env.SERVER_PROTOCOL}://${process.env.SERVER_URL}/${path}` });
    }));
    return { createdAlbum,  images };
  } catch (error) {
    console.log(error);
    return { err: 'something is wrong please try later!', status: 417 };
  }
}

exports.searchForAlbum = async reqQuery => {
  const albumList = await db.album.findAll({
    where: {
      name: {
        [Op.like]: `%${reqQuery.name}%`
      }
    },
    include: [{
      model: db.user,
      attributes: ['email', 'name']},
      {
        model: db.albumImage,
        attributes: ['imageUrl']
      },
      db.city],
  });
  return albumList;
}

exports.updateAlbum = async(newData,id) => {
  const { err, status} = await getById(id);
  if(err) return { err, status}; 
  await db.album.update(newData,{where: { id }});
  return { message: 'album has been updated successfully!'};
};

exports.deleteAlbum = async(id) => {
  const { err, status} = await getById(id);
  if(err) return { err, status};
  await db.album.destroy({where: { id: id }});
  return { message: 'album has been deleted successfully!' };
};
