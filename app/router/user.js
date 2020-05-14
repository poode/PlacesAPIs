const router = require('express-promise-router')();

const { facebook, google, jwt } = require('../services/strategies');
const { validate } = require('../middelwares/validator');

const { registerUserSchema } = require('../RequestSchemaList/registerUser');
const { loginSchema } = require('../RequestSchemaList/loginSchema');
const { changePasswordSchema } = require('../RequestSchemaList/changePasswordSchema');

const { self, auth, register, login, changePassword } = require('../controllers/User');

/**
 * @swagger
 * /users/facebook:
 *   get:
 *     tags:
 *       - Social Login
 *     description: We use this to allow user to login via facebook, If his email in facebook is the same with registered user. Note That this URL will redirect you to facebook for authorization so do not try here in swagger as it will not work also swagger is an application/json environment.
 *     summary: Social Login for facebook
 *     produces:
 *       - application/json
 */
router.get('/facebook',facebook({
  scope: ['email']
}));

/**
 * @swagger
 * /users/google:
 *   get:
 *     tags:
 *       - Social Login
 *     description: We use this to allow user to login via google, If his email in google is the same with registered user. Note That this URL will redirect you to google for authorization so do not try here in swagger as it will not work also swagger is an application/json environment.
 *     summary: Social Login for google
 *     produces:
 *       - application/json
 */
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
/**
 * @swagger
 * /users/login:
 *   post:
 *     tags:
 *       - Registration And Basic Login
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
 *       - Registration And Basic Login
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
 *                  description: User's email
 *                  required: true
 *                  type: string
 *               username:
 *                  description: username
 *                  required: true
 *                  type: string
 *               password:
 *                  description: User's password
 *                  required: true
 *                  type: string
 *     responses:
 *       200:
 *         description: Returns the new created user
 */
router.post('/register', validate(registerUserSchema), register.bind(self));

/**
 * @swagger
 * /users/change-password:
 *   post:
 *     tags:
 *       - Registration And Basic Login
 *     description: Change user password
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: x-auth-token
 *         description: Token to sent in any request to identify the logged in User
 *         in: header
 *         required: true
 *       - name: body
 *         in: body
 *         schema:
 *            type: object
 *            properties:
 *               oldPassword:
 *                  description: old password for the user
 *                  required: true
 *                  type: string
 *               newPassword:
 *                  description: new password for the user
 *                  required: true
 *                  type: string
 * 
 *     responses:
 *       200:
 *         description: Returns an object with message property and its value is `success`
 */
router.post('/change-password', validate(changePasswordSchema), jwt() ,changePassword.bind(self));

exports.userRouter = router;
