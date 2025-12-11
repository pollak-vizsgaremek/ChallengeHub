import { jwtDecode } from 'jwt-decode'

export const decodeJwt = (token) => {
  try {
    const decoded = jwtDecode(token)
    return decoded
  } catch (error) {
    console.error('JWT decoding error:', error)
    return
  }
}
