const encodeBase64Url = (value) =>
  Buffer.from(JSON.stringify(value)).toString('base64url');

const createToken = ({ isAdmin = false } = {}) => {
  const nowInSeconds = Math.floor(Date.now() / 1000);
  const header = encodeBase64Url({ alg: 'HS256', typ: 'JWT' });
  const payload = encodeBase64Url({
    sub: 'e2e-user',
    isAdmin,
    exp: nowInSeconds + 60 * 60,
  });

  return `${header}.${payload}.e2e-signature`;
};

const createUser = ({ isAdmin = false } = {}) => ({
  userId: 'e2e-user-id',
  uuid: 'e2e-user-id',
  username: isAdmin ? 'e2e-admin' : 'e2e-user',
  email: isAdmin ? 'admin@challengehub.test' : 'user@challengehub.test',
  isAdmin,
  onboardingCompleted: true,
});

export const setGuestSession = async (page) => {
  await page.addInitScript(() => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  });
};

export const setAuthenticatedSession = async (page, options = {}) => {
  const token = createToken(options);
  const user = createUser(options);

  await page.addInitScript(
    ({ tokenValue, userValue }) => {
      localStorage.setItem('accessToken', tokenValue);
      localStorage.setItem('refreshToken', 'e2e-refresh-token');
      localStorage.setItem('user', JSON.stringify(userValue));
    },
    { tokenValue: token, userValue: user }
  );
};
