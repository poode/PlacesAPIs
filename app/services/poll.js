const db = require('../../models');

const { getUserById } = require('../services/user');
const { getPlaceById } = require('../services/place');

async function getPollById(id) {
  const poll = await db.poll.findOne({ where: { id }, raw: true });
  if(!poll) return { err: `Poll with ID ${id} is not found`, status: 404 };
  return { poll };
}

exports.getPollById = getPollById;

exports.getVoteByUserIdAndPollId = async ({ userId, pollId }) => {
  const userFound = await getUserById(userId);
  if(userFound.err) return { err: userFound.err, status: userFound.status };
  const pollFound = await getPollById(pollId);
  if(pollFound.err) return { err: pollFound.err, status: pollFound.status };
  const vote = await db.vote.findOne({ where: { userId, pollId }, raw: true });
  return { vote };
}

async function getVoteCountWithPlaceId (placeId) {
  const placeVoteList = await db.place.findOne({
    where: { id: placeId },
    include: [{
      model: db.poll,
      include:[{
        model: db.vote,
        include:[{
          model: db.user,
          attributes: ['id', 'email', 'name']
        }]
      }],
    }],
  });
  return placeVoteList;
}

exports.getVoteCountWithPlaceId = getVoteCountWithPlaceId;

// @TODO list with votes
async function getPollListByPlaceId({ placeId }) {
  const { place, err, status } = await getPlaceById(placeId);
  if(err) return { err, status };
  const pollList = await db.poll.findAll({ where: { placeId } });
  if(!pollList.length) return { err: `There is no poll with placeId ${placeId}`, status: 404 }
  const pollListWithVotes = await getVoteCountWithPlaceId(placeId);
  return { pollListWithVotes };
}
exports.getPollListByPlaceId = getPollListByPlaceId;

exports.createPoll = async reqBody => {
  const { place, err, status } = await getPlaceById(reqBody.placeId);
  if(err) return { err, status };
  const createdPoll = await db.poll.create(reqBody);
  return { createdPoll };
}
