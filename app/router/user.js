const router = require('express-promise-router')();

const { facebook, google, jwt, passport } = require('../services/strategies');
const { validate } = require('../middelwares/validator');

const { registerUserSchema } = require('../RequestSchemaList/registerUser');

const { self, auth, register, login } = require('../controllers/User');


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
router.get('/facebook/callback', facebook, auth.bind(self));
router.get('/google/callback', google, auth.bind(self));

// jwt is a middleware which will let request goes to its handler if there is token attached to the header called(x-auth-token)
router.post('/login', validate(registerUserSchema), login.bind(self));

router.post('/register', validate(registerUserSchema), register.bind(self));

exports.userRouter = router;