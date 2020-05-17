const db = require('../../models');

exports.getById = async id => {
  try{
    let number = Integer.parseInt(id);
     if(number > 999){
       return "id should be integer "
     }
    }catch(error){
      return "id should be integer "+ error
    }
  const city = await db.city.findOne({ where: { id }, raw: true });
  if(!city) return { err: `City with ID ${id} is not found`, status: 404 };
  return { city };
}

async function getByName(name) {
  const city = await db.city.findOne({ where: { name } });
  if(!city) return { err: `There is no city with name ${name}`, status: 404 }
  return { city }
}
exports.getByName = getByName;

exports.createCity = async reqBody => {
  const { err, city, status } = await getByName(reqBody.name);
  if (city) {
    return { err: `The City with name ${reqBody.name} is already found`, status: 409 };
  }
  const createdCity = await db.city.create(reqBody);

  return { createdCity };
}

exports.updateCity = async(newData,id) => {
  try{
    let number = Integer.parseInt(id);
     if(number > 999){
       return "id should be integer "
     }
    }catch(error){
      return "id should be integer "+ error
    }
  const city = await db.city.update(newData,{where: { id: id }});
  if(city == 1){
    return "city was updated successfully.";
  }
  return "error city not found";
};

exports.deleteCity = async(id) => {
  try{
  let number = Integer.parseInt(id);
   if(number > 999){
     return "id should be integer "
   }
  }catch(error){
    return "id should be integer "+ error
  }
  const city = await db.city.destroy({where: { id: id }});
  if(city == 1){
    return "city was deleted successfully.";
  }
  return "error city not found";
};
