const router = require('express-promise-router')();

const { facebook, google, jwt, passport } = require('../services/strategies');
const { validate } = require('../middelwares/validator');

const { registerUserSchema } = require('../RequestSchemaList/registerUser');
const { loginSchema } = require('../RequestSchemaList/loginSchema');

const { self, auth, register, login } = require('../controllers/User');

/**
 * @swagger
 * /users/facebook:
 *   post:
 *     tags:
 *       - Registration And Login
 *     description: Register Users
 *     summary: we use this to allow user to login
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *            type: object
 *            properties:
 *               email:
 *                  description: valid email
 *                  required: true
 *                  type: string
 *               password:
 *                  description: password length must be at least 6
 *                  required: true
 *                  type: string
 *     responses:
 *       200:
 *         description: Returns the user with JWT
 */
router.get('/facebook', passport.authenticate('facebook', {
  scope: ['email']
}));

router.get('/google', passport.authenticate('google', {
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
/**
 * @swagger
 * /users/login:
 *   post:
 *     tags:
 *       - Registration And Login
 *     description: Register Users
 *     summary: we use this to allow user to login
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *            type: object
 *            properties:
 *               email:
 *                  description: valid email
 *                  required: true
 *                  type: string
 *               password:
 *                  description: password length must be at least 6
 *                  required: true
 *                  type: string
 *     responses:
 *       200:
 *         description: Returns the user with JWT
 */
router.post('/login', validate(loginSchema), login.bind(self));

/**
 * @swagger
 * /users/register:
 *   post:
 *     tags:
 *       - Registration And Login
 *     description: Register Users
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *            type: object
 *            properties:
 *               email:
 *                  description: tx string which will be used to register user based on his type
 *                  required: true
 *                  type: string
 *               username:
 *                  description: username provided by user
 *                  required: true
 *                  type: string
 *               password:
 *                  description: user's password
 *                  required: true
 *                  type: string
 *     responses:
 *       200:
 *         description: Returns the user with jwt
 */
router.post('/register', validate(registerUserSchema), register.bind(self));

exports.userRouter = router;
