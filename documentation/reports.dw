/**
 * @swagger
 * /reports:
 *   post:
 *     tags:
 *       - Reports APIs
 *     description: User can add report for a certain place
 *     summary: User can add report for a certain place
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: x-auth-token
 *         schema:
 *            type: string
 *         description: Token to send in any request to identify the logged in User
 *         in: header
 *         required: true
 *       - name: body
 *         in: body
 *         schema:
 *            type: object
 *            properties:
 *               issue:
 *                  description: report text to be send to the platform
 *                  required: true
 *                  type: string
 *               albumId:
 *                  description: album ID that the user wants to report
 *                  required: true
 *                  type: number
 *     responses:
 *       200:
 *         description: Returns created report.
 */

 /**
 * @swagger
 * /reports/album:
 *   get:
 *     tags:
 *       - Reports APIs
 *     description: Any user can get list of reports for certain album by its ID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: albumId
 *         schema:
 *            type: string
 *         description: it is the album id
 *         in: query
 *         required: true
 *     responses:
 *       200:
 *         description: Returns found reports for this album
 */

 /**
 * @swagger
 * /reports/{id}:
 *   get:
 *     tags:
 *       - Reports APIs
 *     description: gets a report by its ID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         schema:
 *            type: string
 *         description: it is the report id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Returns found report
 */
