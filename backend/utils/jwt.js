import pkg from 'jsonwebtoken'
const { sign, verify } = pkg

const SECRET = 'secret' 
const REFRESH_SECRET = 'refreshSecret' 

export const createAccessToken = (user) => {
  const accessToken = sign(
    {
      id: user.uuid,
      username: user.username,
      email: user.email,
      isAdmin: user.admin === 1,
      group: user.user_group ? user.user_group.nev : null,
    },
    SECRET,
    {
      algorithm: 'HS512',
      expiresIn: '10m',
      issuer: 'http://localhost:3300',
      subject: user.uuid,
    }
  )
  return accessToken
}

export const createRefreshToken = (user) => {
  const refreshToken = sign(
    {
      id: user.uuid,
    },
    REFRESH_SECRET,
    {
      algorithm: 'HS512',
      expiresIn: '7d',
      issuer: 'http://localhost:3300',
      subject: user.uuid,
    }
  )

  return refreshToken
}

export const verifyAccessToken = (token) => {
  return verify(token, SECRET, { algorithms: ['HS512'] })
}

export const refreshAccessToken = (refreshToken) => {
  try {
    const decoded = verify(refreshToken, REFRESH_SECRET, {
      algorithms: ['HS512'],
    })

    return decoded
  } catch (err) {
    return null
  }
}
