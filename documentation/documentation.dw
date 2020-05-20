/**
 * @swagger
 * /cities:
 *   post:
 *     tags:
 *       - Cities APIs
 *     description: Any user can add city
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: x-auth-token
 *         schema:
 *            type: string
 *         description: Token to sent in any request to identify the logged in User
 *         in: header
 *         required: true
 *       - name: body
 *         in: body
 *         schema:
 *            type: object
 *            properties:
 *               name:
 *                  description: City name
 *                  required: true
 *                  type: string
 *     responses:
 *       200:
 *         description: Returns created City
 */

 /**
 * @swagger
 * /cities:
 *   get:
 *     tags:
 *       - Cities APIs
 *     description: Any user can get city info using city name.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         in: query
 *         schema:
 *            type: object
 *            properties:
 *               name:
 *                  description: City name
 *                  required: true
 *                  type: string
 *     responses:
 *       200:
 *         description: Returns  City info
 */


 /**
 * @swagger
 * /cities/{id}:
 *   get:
 *     tags:
 *       - Cities APIs
 *     description: Any user can get city info using city name.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *     responses:
 *       200:
 *         description: Returns  City info
 */


 /**
 * @swagger
 * /cities/{id}:
 *   put:
 *     tags:
 *       - Cities APIs
 *     description: Any user can get update place info using place id.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: x-auth-token
 *         schema:
 *            type: string
 *         description: Token to sent in any request to identify the logged in User
 *         in: header
 *         required: true
 *       - name: id
 *         in: path
 *       - name: body
 *         in: body
 *         schema:
 *            type: object
 *            properties:
 *               name:
 *                  description: Send the key of the data you need to update
 *                  required: true
 *                  type: string
 *     responses:
 *       200:
 *         description: Returns  success message
 */

/**
 * @swagger
 * /cities/{id}:
 *   delete:
 *     tags:
 *       - Cities APIs
 *     description: Any user can delete any city using city ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: x-auth-token
 *         schema:
 *            type: string
 *         description: Token to sent in any request to identify the logged in User
 *         in: header
 *         required: true
 *       - name: param
 *         in: param
 *     responses:
 *       200:
 *         description: Returns  success message
 */

 /**
 * @swagger
 * /albums:
 *   post:
 *     tags:
 *       - Albums APIs
 *     description: Any user can add album in a city
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - name: x-auth-token
 *         schema:
 *            type: string
 *         description: Token to sent in any request to identify the logged in User
 *         in: header
 *         required: true
 *       - in: formData
 *         name: images
 *         description: The file to upload.
 *         type: file
 *         required: false
 *       - in: formData
 *         name: name
 *         description: Place name
 *         type: string
 *         required: true
 *       - in: formData
 *         name: cityId
 *         description: City Id
 *         type: string
 *         required: true
 *       - in: formData
 *         name: location
 *         description: location of the place and should be valid stringified object eg":" {"lat":" 30, "long":" 29}
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Returns created City
 */

 /**
 * @swagger
 * /albums:
 *   get:
 *     tags:
 *       - Albums APIs
 *     description: Any user can search for an album by its name
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         schema:
 *            type: string
 *         description: it is the place name
 *         in: query
 *         required: true
 *     responses:
 *       200:
 *         description: Returns found places
 */

 /**
 * @swagger
 * /albums:
 *   get:
 *     tags:
 *       - Albums APIs
 *     description: Any user can get album info using album name.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         in: query
 *         schema:
 *            type: object
 *            properties:
 *               name:
 *                  description: Album name
 *                  required: true
 *                  type: string
 *     responses:
 *       200:
 *         description: Returns  places info
 */


 /**
 * @swagger
 * /albums/{id}:
 *   get:
 *     tags:
 *       - Albums APIs
 *     description: Any user can get album info using album id.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *     responses:
 *       200:
 *         description: Returns  place info
 */

 /**
 * @swagger
 * /albums/{id}:
 *   put:
 *     tags:
 *       - Albums APIs
 *     description: Any user can get update album info using album id.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: x-auth-token
 *         schema:
 *            type: string
 *         description: Token to sent in any request to identify the logged in User
 *         in: header
 *         required: true
 *       - name: id
 *         in: path
 *       - name: body
 *         in: body
 *         schema:
 *            type: object
 *            properties:
 *               name:
 *                  description: place name to be updated
 *                  required: true
 *                  type: string
 *               cityId:
 *                  description: cityId to be updated
 *                  required: true
 *                  type: number
 *               location:
 *                  description: location of the place to be updated 
 *                  required: true
 *                  type: object
 *                  properties:
*                      lat:
*                         type: number
*                         required: true
*                      long:
*                         type: number
*                         required: true
 *     responses:
 *       200:
 *         description: Returns  success message
 */

/**
 * @swagger
 * /albums/{id}:
 *   delete:
 *     tags:
 *       - Albums APIs
 *     description: Any user can delete any album using album ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: x-auth-token
 *         schema:
 *            type: string
 *         description: Token to sent in any request to identify the logged in User
 *         in: header
 *         required: true
 *       - name: id
 *         in: path
 *     responses:
 *       200:
 *         description: Returns  success message
 */

/**
 * @swagger
 * /polls:
 *   delete:
 *     tags:
 *       - Polls APIs
 *     description: Delete a certain pull by its own id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: x-auth-token
 *         schema:
 *            type: string
 *         description: Token to sent in any request to identify the logged in User
 *         in: header
 *         required: true
 *       - name: id
 *         schema:
 *            type: string
 *         description: the id of the wanted poll, user must own this poll.
 *         in: query
 *         required: true
 *     responses:
 *       200:
 *         description: Returns success message.
 */

 /**
 * @swagger
 * /polls/list:
 *   get:
 *     tags:
 *       - Polls APIs
 *     description: Any user can get list of polls votes for certain place by its ID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: placeId
 *         schema:
 *            type: string
 *         description: it is the place id
 *         in: query
 *         required: true
 *     responses:
 *       200:
 *         description: Returns found polls for this place
 */

/**
 * @swagger
 * /polls:
 *   put:
 *     tags:
 *       - Polls APIs
 *     description: User can update his previous created poll
 *     summary: User can update his previous created poll
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: x-auth-token
 *         schema:
 *            type: string
 *         description: Token to sent in any request to identify the logged in User
 *         in: header
 *         required: true
 *       - name: body
 *         in: body
 *         schema:
 *            type: object
 *            properties:
 *               text:
 *                  description: poll text to be voted later by users
 *                  required: true
 *                  type: string
 *               albumId:
 *                  description: album ID we can get from user's albums added by him/her, user must own this place.
 *                  required: true
 *                  type: number
 *     responses:
 *       200:
 *         description: Returns success message
 */

 /**
 * @swagger
 * /polls:
 *   post:
 *     tags:
 *       - Polls APIs
 *     description: User can add poll for a certain place
 *     summary: User can add poll for a certain place
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: x-auth-token
 *         schema:
 *            type: string
 *         description: Token to sent in any request to identify the logged in User
 *         in: header
 *         required: true
 *       - name: body
 *         in: body
 *         schema:
 *            type: object
 *            properties:
 *               text:
 *                  description: poll text to be voted later by users
 *                  required: true
 *                  type: string
 *               albumId:
 *                  description: album ID we can get from user's albums added by him/her
 *                  required: true
 *                  type: number
 *     responses:
 *       200:
 *         description: Returns created poll
 */

 /**
 * @swagger
 * /polls/{id}:
 *   get:
 *     tags:
 *       - Polls APIs
 *     description: Any user can get a poll for certain place by its ID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         schema:
 *            type: string
 *         description: it is the poll id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Returns found polls
 */

 /**
 * @swagger
 * /users/facebook:
 *   get:
 *     tags:
 *       - Social Login
 *     description: We use this to allow user to login via facebook, If his email in facebook is the same with registered user. Note That this URL will redirect you to facebook for authorization so do not try here in swagger as it will not work also swagger is an application/json environment.
 *     summary: Social Login for facebook using redirection
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Returns Returns the user with jwt
 */

 /**
 * @swagger
 * /users/google:
 *   get:
 *     tags:
 *       - Social Login
 *     description: We use this to allow user to login via google, If his email in google is the same with registered user. Note That this URL will redirect you to google for authorization so do not try here in swagger as it will not work also swagger is an application/json environment.
 *     summary: Social Login for google using redirection
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Returns the user with jwt
 */

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
 *         schema:
 *            type: string
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

 /**
 * @swagger
 * /users/auth/facebook:
 *   post:
 *     tags:
 *       - Social Login
 *     description: allow user to login using facebook access token generated for facebook application where frontend and backend should use same application credentials.
 *     summary: Social Login for facebook using access token generated for facebook application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *            type: object
 *            properties:
 *               access_token:
 *                  description: user's access token after approving the app permissions
 *                  required: true
 *                  type: string
 *     responses:
 *       200:
 *         description: Returns the user with his jwt
 */

 /**
 * @swagger
 * /users/auth/google:
 *   post:
 *     tags:
 *       - Social Login
 *     description: allow user to login using google access token generated for google application where frontend and backend should use same application credentials.
 *     summary: Social Login for google using access token generated for google application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *            type: object
 *            properties:
 *               access_token:
 *                  description: user's access token after approving the app permissions
 *                  required: true
 *                  type: string
 *     responses:
 *       200:
 *         description: Returns the user with his jwt
 */

 /**
 * @swagger
 * /users/profile:
 *   post:
 *     tags:
 *       - User Profile
 *     description: user update his profile
 *     summary: user update his profile
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: x-auth-token
 *         schema:
 *            type: string
 *         description: Token to sent in any request to identify the logged in User
 *         in: header
 *         required: true
 *       - name: body
 *         in: body
 *         schema:
 *            type: object
 *            properties:
 *               email:
 *                  description: valid email
 *                  required: true
 *                  type: string
 *               username:
 *                  description: username
 *                  required: true
 *                  type: string
 *               name:
 *                  description: name of the user
 *                  required: true
 *                  type: string
 *     responses:
 *       200:
 *         description: Returns the user profile after getting updated
 */

 /**
 * @swagger
 * /users/profile:
 *   get:
 *     tags:
 *       - User Profile
 *     description: get user profile
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: x-auth-token
 *         schema:
 *            type: string
 *         description: Token to sent in any request to identify the logged in User
 *         in: header
 *         required: true
 *     responses:
 *       200:
 *         description: Returns user's profile
 */

 /**
 * @swagger
 * /votes:
 *   post:
 *     tags:
 *       - Vote Polls APIs
 *     description: Any user can vote for certain poll by its ID and place ID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: x-auth-token
 *         schema:
 *            type: string
 *         description: Token to sent in any request to identify the logged in User
 *         in: header
 *         required: true
 *       - name: body
 *         in: body
 *         schema:
 *            type: object
 *            properties:
 *               albumId:
 *                  description: album Id
 *                  required: true
 *                  type: number
 *               pollId:
 *                  description: poll Id
 *                  required: true
 *                  type: number
 *     responses:
 *       200:
 *         description: Returns vote for this poll
 */

/**
 * @swagger
 * /albums/images/{id}:
 *   delete:
 *     tags:
 *       - Albums APIs
 *     description: Any user can delete any image in an album using image ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: x-auth-token
 *         schema:
 *            type: string
 *         description: Token to sent in any request to identify the logged in User
 *         in: header
 *         required: true
 *       - name: id
 *         in: path
 *     responses:
 *       200:
 *         description: Returns success message
 */

/**
 * @swagger
 * /albums/{albumId}/images:
 *   put:
 *     tags:
 *       - Albums APIs
 *     description: Any user can add images to an album
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - name: x-auth-token
 *         schema:
 *            type: string
 *         description: Token to sent in any request to identify the logged in User
 *         in: header
 *         required: true
 *       - in: formData
 *         name: images
 *         description: The file to upload.
 *         type: file
 *         required: true
 *       - name: albumId
 *         description: The album Id.
 *         in: path
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Returns new images
 */

 /**
 * @swagger
 * /albums/all/list:
 *   get:
 *     tags:
 *       - Albums APIs
 *     description: Any user can get album list
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: page
 *         description: The page Number.
 *         type: string
 *         required: true
 *       - name: limit
 *         description: number of items per page.
 *         in: query
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Returns new images
 */
