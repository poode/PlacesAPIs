const db = require('../../models');

exports.getCityById = async id => {
  const city = await db.city.findOne({ where: { id }, raw: true });
  if(!city) return { err: `City with ID ${id} is not found`, status: 404 };
  return { city };
}

async function getCityByName(name) {
  const city = await db.city.findOne({ where: { name } });
  if(!city) return { err: `There is no city with name ${name}`, status: 404 }
  return { city }
}
exports.getCityByName = getCityByName;

exports.createCity = async reqBody => {
  const { err, city, status } = await getCityByName(reqBody.name);
  if (city) {
    return { err: `The City with name ${reqBody.name} is already found`, status: 409 };
  }
  const createdCity = await db.city.create(reqBody);

  return { createdCity };
}