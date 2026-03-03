import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

export const createTicket = async (ticketData) => {
  const { userId, type, title, description, priority } = ticketData;

  // Validate user exists
  const user = await prisma.users.findUnique({
    where: { uuid: userId },
  });

  if (!user) {
    throw new Error('Felhasználó nem található!');
  }

  // Create ticket
  const ticket = await prisma.tickets.create({
    data: {
      user_id: userId,
      type,
      title,
      description,
      priority,
      status: 'open',
    },
  });

  return { message: 'Hibajegy sikeresen létrehozva!', ticket };
};
