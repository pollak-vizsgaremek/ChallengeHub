import { PrismaClient } from '../generated/prisma/client.js';
import bcrypt from 'bcrypt';
import { createAccessToken, createRefreshToken } from '../utils/jwt.js';

const prisma = new PrismaClient();

// Login
export const login = async (username, password) => {
  const user = await prisma.users.findFirst({
    where: {
      OR: [{ username: username }, { email: username }],
    },
    include: {
      user_group: true,
      user_endpoint_access: true,
    },
  });

  if (!user) {
    return -1;
  }

  // Password check
  const passwordMatched = bcrypt.compareSync(password, user.password);

  if (!passwordMatched) {
    return -1;
  }

  user.accessedEndpoints = user.user_endpoint_access.map((access) => ({
    endpoint: access.endpoint,
    method: access.methods.split(','),
  }));

  // JWT creation
  const accessToken = createAccessToken(user);
  const refreshToken = createRefreshToken(user);

  return {
    userId: user.uuid,
    accessToken,
    refreshToken,
    username: user.username,
    email: user.email,
    isAdmin: user.user_group?.nev === 'ADMIN',
    onboardingCompleted: user.onboarding_completed,
  };
};

// Register
export const register = async (username, email, password, passwordConfirm) => {
  if (password !== passwordConfirm) {
    throw new Error('Passwords do not match!');
  }

  // Check if user exists
  const existingUser = await prisma.users.findFirst({
    where: {
      OR: [{ username }, { email }],
    },
  });

  if (existingUser) {
    throw new Error('Username or email already exists!');
  }

  const encryptedPassword = bcrypt.hashSync(password, 12);

  let group = await prisma.user_group.findFirst({
    where: { nev: 'USER' },
  });

  // Create group if it doesn't exist
  if (!group) {
    group = await prisma.user_group.create({
      data: {
        nev: 'USER',
        c: true,
        r: true,
        u: false,
        d: false,
      },
    });
  }

  // Create user
  const newUser = await prisma.users.create({
    data: {
      username,
      email,
      password: encryptedPassword,
      group_id: group.uuid,
      xp: 0,
      coin: 0,
    },
  });

  return newUser.uuid;
};
