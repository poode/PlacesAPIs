const db = require('../../models');

const { getById } = require('../services/album');
const getPlaceById = getById;

async function getReportById(id) {
  const result = parseInt(id);
  if(result === NaN) return { err: `id is needed and should be valid number!`, status: 400 };
  const report = await db.report.findOne({ where: { id }, raw: true });
  if(!report) return { err: `Report with ID ${id} is not found`, status: 404 };
  return { report };
}

exports.getReportById = getReportById;

exports.getReportsByplaceId = async ({ placeId }) => {
  const placeFound = await getPlaceById(placeId);
  if(placeFound.err) return { err: placeFound.err, status: placeFound.status };
  const reports = await db.report.findAll({ where: { placeId }, raw: true });
  return { reports };
}

exports.addReport = async ({ user, body }) => {
  const { place, err, status } = await getPlaceById(body.placeId);
  if(err) return { err, status };
  body.userId = user.id;
  const createdReport = await db.report.create(body);
  return { createdReport };
}
