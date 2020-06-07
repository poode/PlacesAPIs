const db = require('../../models');

const { getUserById } = require('../services/user');
const { getById } = require('./album');

const getAlbumById = getById;

async function getPollById(id) {
  const result = parseInt(id);
  if(result === NaN) return { err: `id is needed and should be valid number!`, status: 400 };
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

async function getVoteCountWithAlbumId (albumId) {
  const albumVoteList = await db.album.findOne({
    where: { id: albumId },
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
  return albumVoteList;
}

exports.getVoteCountWithAlbumId = getVoteCountWithAlbumId;

// @TODO list with votes
async function getPollListByAlbumId({ albumId }) {
  const { album, err, status } = await getAlbumById(albumId);
  if(err) return { err, status };
  const pollList = await db.poll.findAll({ where: { albumId } });
  if(!pollList.length) return { err: `There is no poll with albumId ${albumId}`, status: 404 }
  const pollListWithVotes = await getVoteCountWithAlbumId(albumId);
  return { pollListWithVotes };
}
exports.getPollListByAlbumId = getPollListByAlbumId;

exports.createPoll = async ({ user, body }) => {
  // const { album, err, status } = await getAlbumById(body.albumId);
  // if(err) return { err, status };
  // if(album.userId == user.id || user.role == 'admin'){
  const createdPoll = await db.poll.create(body);
  return { createdPoll };
  // } 
  // else return { err: `You do not own an album with id ${body.albumId}`, status: 401 };
}

exports.updatePoll = async ({ user, body }) => {
  const id = body.pollId;
  const { poll, err, status } = await getPollById(id);
  if(err) return { err, status };
  const album = await getAlbumById(poll.albumId);
  if(album.err) return ({ err: album.err, status: album.status });
  if(album.album.userId == user.id || user.role == 'admin'){
    await db.poll.update({ text: body.text }, { where: { id }});
    return {  response: 'Poll updated!' };
  } else {
    return { err: `You do not own this poll`, status: 401 };
  }
}

exports.deletePoll = async ({ user, query }) => {
  const id = query.id;
  const { poll, err, status } = await getPollById(id);
  if(err) return { err, status };
  const album = await getAlbumById(poll.albumId);
  if(album.err) return ({ err: album.err, status: album.status });
  if(album.album.userId == user.id || user.role == 'admin'){
    await db.poll.destroy({ where: { id }});
    return { response: 'Poll deleted!' };
  } else {
    return { err: `You do not own this poll`, status: 401 };
  }
} 
