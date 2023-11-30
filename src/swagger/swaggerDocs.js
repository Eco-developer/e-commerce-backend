/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: The authentication endpoints.
 * /api/v1/login:
 *   post:
 *     summary: Login into your account.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *     responses:
 *       200:
 *         description: Returns an object with the authenticated user's token.
 *       400:
 *         description: Returns an object with the errors messages of the login form values.
 * 
 * /api/v1/signup:
 *   post:
 *     summary: Register in the application.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - lastname
 *              - email
 *              - phone
 *              - password
 *              - password_confirmation
 *            properties:
 *              name:
 *                type: string
 *              lastname:
 *                type: string
 *              email:
 *                type: string
 *              phone:
 *                type: string
 *              password:
 *                type: string
 *              password_confirmation:
 *                type: string
 *     responses:
 *       200:
 *         description: Returns an object with the signed up user's token.
 *       400:
 *         description: Returns an object with the errors messages of the signup form values.
 *
 */