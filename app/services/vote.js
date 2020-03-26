const db = require('../../models');

const { getUserById } = require('../services/user');
const { getPlaceById } = require('../services/place');
const { getVoteByUserIdAndPollId } = require('../services/poll');


async function getVoteByPlaceIdAndUserId({ userId, placeId }) {
  const userFound = await getUserById(userId);
  if(userFound.err) return { err: userFound.err, status: userFound.status };
  const placeFound = await getPlaceById(placeId);
  if(placeFound.err) return { err: placeFound.err, status: placeFound.status };

  const poll = await db.vote.findOne({
    where: { userId },
    raw: true,
    include: [{
      model: db.poll,
      where: { placeId }
    }]
  });
  return { poll };
}

exports.getVoteByPlaceByUserId = getVoteByPlaceIdAndUserId;

exports.setVote = async ({ userId, pollId, placeId }) => {
  // if find a vote for the user for the same place or there is any error related to user or place
  // then return error
  const pollFound = await getVoteByPlaceIdAndUserId({ userId, placeId });
  if(pollFound.err) return { err: pollFound.err, status: pollFound.status };
  if(pollFound.poll) return { err: 'Your not Allowed to vote again for the same place', status: 417 };
  
  // if the user voted before for the same poll then return error or there is any error related to user or poll
  const { err, status, vote } = await getVoteByUserIdAndPollId({ userId, pollId });
  if(err) return { err, status };
  if(vote) return { err: `Your already voted before for pollId ${pollId}`, status: 409 };

  const createdVote = await db.vote.create({ userId, pollId });
  return { createdVote };
}
