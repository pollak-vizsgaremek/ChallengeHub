import { Router } from 'express'
import {
  getAllChallenges,
  getDailyChallenges,
} from '../service/challenges.service.js'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const challenges = await getAllChallenges()
    res.status(200).json(challenges)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Szerver hiba!' })
  }
})

router.get('/daily', async (req, res) => {
  const { userId, type } = req.query

  if (!userId) {
    return res.status(400).json({ message: 'UserId szükséges!' })
  }

  try {
    const challenges = await getDailyChallenges(userId, type)
    res.status(200).json(challenges)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Szerver hiba!' })
  }
})

export default router
