const express = require('express');

const { UserController } = require('../controllers/User');

const { self, auth } = UserController;

const router = express.Router();

const { passport } = require('../services/oauth');

router.get('/facebook', passport.authenticate('facebook', {
  scope: ['email']
}));

router.get('/google', passport.authenticate('google', {
  scope: [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email'
  ]
}));

// those routes to get token after using facebook or google
router.get('/facebook/callback', passport.authenticate('facebook'), auth.bind(self));
router.get('/google/callback', passport.authenticate('google'), auth.bind(self));

// jwt is a middleware which will let request goes to its handler if there is token attached to the header called(x-auth-token)
router.post('/', passport.authenticate('jwt'), auth.bind(self));


exports.authRouter = router;