import { Router } from 'express'
import { saveUserInterests } from '../service/user.service.js'
import { PrismaClient } from '../generated/prisma/client.js'

const router = Router()

router.post('/erdelokdes', async (req, res) => {
  const { userId, categories, activityLevel } = req.body

  if (!userId || !categories || !Array.isArray(categories)) {
    return res.status(400).json({ message: 'Hiányzó adatok!' })
  }

  try {
    await saveUserInterests(userId, categories, activityLevel)
    res.status(200).json({ message: 'Érdeklődési körök mentve!' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Szerver hiba!' })
  }
})

export default router
