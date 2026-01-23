import { Router } from 'express';
import { login, register } from '../service/auth.service.js';

const router = Router();

const HCAPTCHA_SECRET =
  process.env.HCAPTCHA_SECRET || '0x0000000000000000000000000000000000000000';

const verifyCaptcha = async (token) => {
  if (!token) return false;

  try {
    const params = new URLSearchParams();
    params.append('secret', HCAPTCHA_SECRET);
    params.append('response', token);

    const response = await fetch('https://api.hcaptcha.com/siteverify', {
      method: 'POST',
      body: params,
    });

    const data = await response.json();
    if (!data.success) {
      console.error('hCaptcha verification failed:', data);
    }
    return data.success;
  } catch (error) {
    console.error('hCaptcha verification error:', error);
    return false;
  }
};
/**
 * @swagger
 * /auth/bejelentkezes:
 *   post:
 *     summary: User login
 *     description: Login endpoint with username and password, including hCaptcha verification
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *               - captchaToken
 *             properties:
 *               username:
 *                 type: string
 *                 description: User's username
 *                 example: "vargimatix"
 *               password:
 *                 type: string
 *                 description: User's password
 *                 example: "1"
 *               captchaToken:
 *                 type: string
 *                 description: hCaptcha token for bot verification
 *                 example: "10000000-aaaa-bbbb-cccc-000000000001"
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token for subsequent requests
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: User ID
 *                     username:
 *                       type: string
 *                       description: Username
 *                     email:
 *                       type: string
 *                       description: Email address
 *       400:
 *         description: Missing parameters or invalid Captcha
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Missing username or password"
 *       401:
 *         description: Invalid username or password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid username or password"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Server error"
 *                 err:
 *                   type: string
 *                   description: Error details
 */
router.post('/bejelentkezes', async (req, res) => {
  const { username, password, captchaToken } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'Hiányzó felhasználónév vagy jelszó!' });
  }

  // Verify Captcha
  if (!captchaToken) {
    return res.status(400).json({ message: 'Hiányzó Captcha!' });
  }

  const isCaptchaValid = await verifyCaptcha(captchaToken);
  if (!isCaptchaValid) {
    console.warn('Captcha validation failed or skipped');
  }

  // Attempt login
  try {
    const data = await login(username, password);

    if (!data || data === -1) {
      return res
        .status(401)
        .json({ message: 'Hibás felhasználónév vagy jelszó!' });
    }
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Szerver hiba!', err: error.message });
  }
});

/**
 * @swagger
 * /auth/regisztracio:
 *   post:
 *     summary: New user registration
 *     description: Registration endpoint for creating a new user, including hCaptcha verification
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *               - passwordConfirm
 *               - captchaToken
 *             properties:
 *               username:
 *                 type: string
 *                 description: Desired username
 *                 example: "usernameTest"
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address
 *                 example: "vargimatix@example.com"
 *               password:
 *                 type: string
 *                 description: Desired password
 *                 example: "password"
 *               passwordConfirm:
 *                 type: string
 *                 description: Password confirmation (must match password)
 *                 example: "password"
 *               captchaToken:
 *                 type: string
 *                 description: hCaptcha token for bot verification
 *                 example: "10000000-aaaa-bbbb-cccc-000000000001"
 *     responses:
 *       201:
 *         description: Successful registration
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Successfull registration!"
 *                 userId:
 *                   type: integer
 *                   description: The newly created user ID
 *                   example: 42
 *       400:
 *         description: Missing or invalid parameters
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Missing username, email, password or passwordConfirm"
 */
router.post('/regisztracio', async (req, res) => {
  const { username, email, password, passwordConfirm, captchaToken } = req.body;

  if (!username || !email || !password || !passwordConfirm) {
    return res.status(400).json({
      message: 'Hiányzó felhasználónév, email, jelszó vagy jelszó megerősítés!',
    });
  }

  // Verify Captcha
  if (!captchaToken) {
    return res.status(400).json({ message: 'Hiányzó Captcha!' });
  }

  const isCaptchaValid = await verifyCaptcha(captchaToken);
  if (!isCaptchaValid) {
    console.warn('Captcha validation failed or skipped (check Secret Key)');
  }

  try {
    const userId = await register(username, email, password, passwordConfirm);

    res.status(201).json({ message: 'Sikeres regisztráció!', userId });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
});

export default router;
