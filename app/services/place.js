const path = require('path');
const fs = require('fs').promises;

const { IMAGE_MAX_COUNT } = require('../../config/serverConfig');
const db = require('../../models');
const { Op } = db.Sequelize;

exports.getById = async id => {
  const place = await db.place.findOne({ where: { id }, include: [db.user, db.city], raw: true });
  if(!place) return { err: `Place with ID ${id} is not found`, status: 404 };
  return { place };
}

async function getByName(name) {
  const place = await db.place.findOne({ where: { name }, include: [db.user, db.city], raw: true });
  if(!place) return { err: `There is no place with name ${name}`, status: 404 }
  return { place }
}
exports.getByName = getByName;

exports.createPlace = async (req, userId) => {
  const { err, place, status } = await getByName(req.body.name);

  if (place) {
    req.files.forEach(async image => {
      await fs.unlink(path.resolve(image.path));
    });

    return { err: `The place with name ${req.body.name} is already found`, status: 409 };
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

  if(!req.files.length) return { err: `The place must have ${IMAGE_MAX_COUNT} images by max!`, status: 400}
  req.body.location = JSON.parse(req.body.location);

  try {
    const createdPlace = await db.place.create({...req.body, userId}, { raw: true });
    const images = await Promise.all(req.files.map(async ({ path }) => {
      return db.placeImage
        .create({ placeId: createdPlace.id, imageUrl: `${process.env.SERVER_PROTOCOL}://${process.env.SERVER_URL}/${path}` });
    }));
    return { createdPlace,  images };
  } catch (error) {
    console.log(error);
    return { err: 'something is wrong please try later!', status: 417 };
  }
}

exports.searchForPlace = async reqQuery => {
  const placeList = await db.place.findAll({
    where: {
      name: {
        [Op.like]: `%${reqQuery.name}%`
      }
    },
    include: [{
      model: db.user,
      attributes: ['email', 'name']},
      {
        model: db.placeImage,
        attributes: ['imageUrl']
      },
      db.city],
  });
  return placeList;
}

exports.updatePlace = async(newData,id) => {
  try{
    let number = Integer.parseInt(id);
     if(number > 999){
       return "id should be integer "
     }
    }catch(error){
      return "id should be integer "+ error
    }
  const note = await db.place.update(newData,{where: { id: id }});
  if(note == 1){
    return "place was updated successfully.";
  }
  return "error place not found";
};

exports.deletePlace = async(id) => {
  try{
    let number = Integer.parseInt(id);
     if(number > 999){
       return "id should be integer "
     }
    }catch(error){
      return "id should be integer "+ error
    }
  const place = await db.place.destroy({where: { id: id }});
  if(place == 1){
    return "place was deleted successfully.";
  }
  return "error  not place found";
};