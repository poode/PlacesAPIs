const db = require('../../models');

const getById = async id => {
  const result = parseInt(id);
  if(result === NaN) return {err: `id should be integer you sent ${id}`, status: 400 };
  const city = await db.city.findOne({ where: { id }, raw: true });
  if(!city) return { err: `City with ID ${id} is not found`, status: 404 };
  return { city };
}
exports.getById = getById;

async function getByName(name) {
  const city = await db.city.findOne({ where: { name } });
  if(!city) return { err: `There is no city with name ${name}`, status: 404 }
  return { city }
}
exports.getByName = getByName;

exports.getBySearch = async ({ query }) => {
  const city = await db.city.findAll({ where: { name: {
    [db.Sequelize.Op.like]: `%${query.name}%`
  } } });
  if(!city.length) return { err: `There is no city with name ${query.name}`, status: 404 }
  return { city }
}

exports.createCity = async reqBody => {
  const { err, city, status } = await getByName(reqBody.name);
  if (city) {
    return { err: `The City with name ${reqBody.name} is already found`, status: 409 };
  }
  const createdCity = await db.city.create(reqBody);

  return { createdCity };
}

exports.updateCity = async (newData, id) => {
  const {city, err, status} = await getById(id);
  if(err) return { err, status};
  await db.city.update(newData,{where: { id }});
  return { message: 'updated successfully' };
};

exports.deleteCity = async(id) => {
  const {city, err, status} = await getById(id);
  if(err) return { err, status};
  await db.city.destroy({where: { id }});
  return { message: 'city was deleted successfully!'};
};

exports.getAllCity = async () => {
  const cityList = await db.city.findAll();
  return { cityList };
}
