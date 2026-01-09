import { Router } from 'express'
import { getAllShopItems } from '../service/shop.service.js'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const { category } = req.query
    const items = await getAllShopItems(category)
    res.status(200).json(items)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Szerver hiba!' })
  }
})

export default router
