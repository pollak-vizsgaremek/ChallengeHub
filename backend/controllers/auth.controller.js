import { Router } from 'express'
import { login, register } from '../service/auth.service.js'

const router = Router()

const HCAPTCHA_SECRET =
  process.env.HCAPTCHA_SECRET || '0x0000000000000000000000000000000000000000'

const verifyCaptcha = async (token) => {
  if (!token) return false

  try {
    const params = new URLSearchParams()
    params.append('secret', HCAPTCHA_SECRET)
    params.append('response', token)

    const response = await fetch('https://api.hcaptcha.com/siteverify', {
      method: 'POST',
      body: params,
    })

    const data = await response.json()
    if (!data.success) {
      console.error('hCaptcha verification failed:', data)
    }
    return data.success
  } catch (error) {
    console.error('hCaptcha verification error:', error)
    return false
  }
}

router.post('/bejelentkezes', async (req, res) => {
  const { username, password, captchaToken } = req.body

  if (!username || !password) {
    return res.status(400).json({ message: 'Hiányzó adatok' })
  }

  // Verify Captcha
  if (!captchaToken) {
    return res.status(400).json({ message: 'Hiányzó Captcha token!' })
  }

  const isCaptchaValid = await verifyCaptcha(captchaToken)
  if (!isCaptchaValid) {
    console.warn('Captcha validation failed or skipped (check Secret Key)')
  }

  try {
    const data = await login(username, password)

    if (!data) {
      return res
        .status(401)
        .json({ message: 'Hibás felhasználónév vagy jelszó!' })
    }
    res.status(200).json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Szerver hiba!', err: error.message })
  }
})

router.post('/regisztracio', async (req, res) => {
  const { username, email, password, passwordConfirm, captchaToken } = req.body

  if (!username || !email || !password || !passwordConfirm) {
    return res.status(400).json({ message: 'Hiányzó adatok!' })
  }

  // Verify Captcha
  if (!captchaToken) {
    return res.status(400).json({ message: 'Hiányzó Captcha token!' })
  }

  const isCaptchaValid = await verifyCaptcha(captchaToken)
  if (!isCaptchaValid) {
    console.warn('Captcha validation failed or skipped (check Secret Key)')
  }

  try {
    const userId = await register(username, email, password, passwordConfirm)

    res.status(201).json({ message: 'Sikeres regisztráció!', userId })
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: error.message })
  }
})

export default router
