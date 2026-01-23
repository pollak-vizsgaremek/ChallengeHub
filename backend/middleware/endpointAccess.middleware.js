export default function endpointAccessMiddleware(req, res, next) {
  const user = req.user;

  console.log(user);

  // If no user is found
  if (!user) {
    return res.status(401).json({ message: 'Nincs jogosultságod!' });
  }

  // If the user is an admin
  if (user.role === 'ADMIN') {
    return next();
  }

  const accessedEndpoints = user.accessedEndpoints;

  // If no accessed endpoints are found
  if (!accessedEndpoints || !Array.isArray(accessedEndpoints)) {
    return res.status(403).json({ message: 'Hozzáférés megtagadva!' });
  }

  const endpoint = req.originalUrl;
  const method = req.method;

  // If the endpoint is for self
  if (endpoint.includes('self')) {
    return next();
  }

  const hasAccess = accessedEndpoints.some(
    (access) =>
      endpoint.includes(access.endpoint) && access.method.includes(method)
  );

  // If the user has access to the endpoint
  if (hasAccess) {
    return next();
  }

  return res.status(403).json({ message: 'Hozzáférés megtagadva!' });
}
