const db = require('../../models');

const { getUserById } = require('../services/user');
const { getById } = require('./album');
const { getVoteByUserIdAndPollId } = require('../services/poll');

const getVoteById = async (id, userId) => {
  if(!parseInt(id) || !Number(id)) return { err: `id should be an integer and greater than 1, you sent ${id}`, status: 400 };
  const vote = await db.vote.findOne({ where: { id, userId }, raw: true });
  if(!vote) return { err: `Vote with ID ${id} is not found`, status: 404 };
  return { vote };
}
exports.getVoteById = getVoteById;

async function getVoteByAlbumIdAndUserId({ userId, albumId }) {
  const userFound = await getUserById(userId);
  if(userFound.err) return { err: userFound.err, status: userFound.status };
  const albumFound = await getById(albumId);
  if(albumFound.err) return { err: albumFound.err, status: albumFound.status };

  const poll = await db.vote.findOne({
    where: { userId },
    raw: true,
    include: [{
      model: db.poll,
      where: { albumId }
    }]
  });
  return { poll };
}

exports.getVoteByAlbumByUserId = getVoteByAlbumIdAndUserId;

exports.setVote = async ({ userId, pollId, albumId }) => {
  // if find a vote for the user for the same album or there is any error related to user or album
  // then return error
  const pollFound = await getVoteByAlbumIdAndUserId({ userId, albumId });
  if(pollFound.err) return { err: pollFound.err, status: pollFound.status };
  if(pollFound.poll) return { err: 'Your not Allowed to vote again for the same album', status: 417 };
  
  // if the user voted before for the same poll then return error or there is any error related to user or poll
  const { err, status, vote } = await getVoteByUserIdAndPollId({ userId, pollId });
  if(err) return { err, status };
  if(vote) return { err: `Your already voted before for pollId ${pollId}`, status: 409 };

  const createdVote = await db.vote.create({ userId, pollId });
  return { createdVote };
}

exports.deleteVote = async ({ user, body }) => {
  const { err, status } = await getVoteById(body.voteId, user.id);
  if(err) return { err, status };
  await db.vote.destroy({ where: { id: body.voteId }});
  return { message: 'success' };
}
