import { PrismaClient } from '../generated/prisma/client.js'
import bcrypt from 'bcrypt'
import { createAccessToken, createRefreshToken } from '../utils/jwt.js'

const prisma = new PrismaClient()

export const login = async (username, password) => {
  const user = await prisma.users.findFirst({
    where: {
      OR: [{ username: username }, { email: username }],
    },
    include: {
      user_group: true,
    },
  })

  if (!user) {
    return -1
  }

  const passwordMatched = bcrypt.compareSync(password, user.password)

  if (!passwordMatched) {
    return -1
  }

  const accessToken = createAccessToken(user)
  const refreshToken = createRefreshToken(user)

  return {
    userId: user.uuid,
    accessToken,
    refreshToken,
    username: user.username,
    email: user.email,
    isAdmin: user.user_group?.nev === 'ADMIN',
    onboardingCompleted: user.onboarding_completed,
  }
}

export const register = async (username, email, password, passwordConfirm) => {
  if (password !== passwordConfirm) {
    throw new Error('Jelszavak nem egyeznek!')
  }

  const existingUser = await prisma.users.findFirst({
    where: {
      OR: [{ username }, { email }],
    },
  })

  if (existingUser) {
    throw new Error('Felhasználónév vagy email már foglalt!')
  }

  const encryptedPassword = bcrypt.hashSync(password, 12)

  let group = await prisma.user_group.findFirst({
    where: { nev: 'USER' },
  })

  if (!group) {
    group = await prisma.user_group.create({
      data: {
        nev: 'USER',
        c: true,
        r: true,
        u: false,
        d: false,
      },
    })
  }

  const newUser = await prisma.users.create({
    data: {
      username,
      email,
      password: encryptedPassword,
      group_id: group.uuid,
      xp: 0,
      coin: 0,
    },
  })

  return newUser.uuid
}
