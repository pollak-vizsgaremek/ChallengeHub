import jwt from 'jsonwebtoken';

export async function authMiddleware(req, res, next) {
  if (req.options === 'OPTIONS') {
    return next();
  }

  const authHeader = req.headers.authorization;

  // If no auth header is present
  if (!authHeader) {
    return res.status(401).json({ message: 'Nincs jogosultságod!' });
  }

  const token = authHeader.split(' ')[1];

  // If no token is present
  if (!token) {
    return res.status(401).json({ message: 'Érvénytelen token formátum!' });
  }

  // Verify the token
  try {
    const decodedToken = jwt.verify(token, 'idekellgeneralniegyszoveget');
    const user = {
      id: decodedToken.id,
      email: decodedToken.email,
      role: decodedToken.role,
      accessedEndpoints: decodedToken.accessedEndpoints || [],
    };
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Érvénytelen vagy lejárt token!' });
  }
}
