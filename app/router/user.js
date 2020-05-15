const router = require('express-promise-router')();

const { facebook, google, jwt, facebookToken, googleToken } = require('../services/strategies');
const { validate } = require('../middelwares/validator');

const { registerUserSchema } = require('../RequestSchemaList/registerUser');
const { loginSchema } = require('../RequestSchemaList/loginSchema');
const { changePasswordSchema } = require('../RequestSchemaList/changePasswordSchema');
const { updateUserProfileSchema } = require('../RequestSchemaList/updateUserProfileSchema');

const {
  self,
  auth,
  register,
  login,
  changePassword,
  loginWithSocial,
  updateProfile,
  getProfile
} = require('../controllers/User');

router.get('/facebook',facebook({
  scope: ['email']
}));

router.get('/google', google({
  scope: [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email',
    'openid',
  ]
}));

// those routes to get token after using facebook or google
router.get('/facebook/callback', facebook(), auth.bind(self));
router.get('/google/callback', google(), auth.bind(self));

// jwt is a middleware which will let request goes to its handler if there is token attached to the header called(x-auth-token)
router.post('/login', validate(loginSchema), login.bind(self));
router.post('/register', validate(registerUserSchema), register.bind(self));
router.post('/change-password', validate(changePasswordSchema), jwt() ,changePassword.bind(self));
router.post('/auth/facebook', facebookToken(), loginWithSocial.bind(self));
router.post('/auth/google', googleToken(), loginWithSocial.bind(self));
router.post('/profile', jwt(), validate(updateUserProfileSchema), updateProfile.bind(self));
router.get('/profile', jwt(), getProfile.bind(self));

exports.userRouter = router;
