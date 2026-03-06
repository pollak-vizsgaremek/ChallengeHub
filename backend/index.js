import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { setupSwagger } from './config/swagger.js';

import authController from './controllers/auth.controller.js';
import categoryController from './controllers/category.controller.js';
import userController from './controllers/user.controller.js';
import challengesController from './controllers/challenges.controller.js';
import shopController from './controllers/shop.controller.js';

import ticketController from './controllers/ticket.controller.js';
import adminController from './controllers/admin.controller.js';

import { authMiddleware } from './middleware/auth.middleware.js';
import endpointAccessMiddleware from './middleware/endpointAccess.middleware.js';
import { adminMiddleware } from './middleware/admin.middleware.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Uploads mappa létrehozása ha nem létezik
const uploadsDir = path.join(__dirname, 'uploads', 'proofs');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
};

app.use(express.json());
app.use(cors(corsOptions));

// Statikus fájlok kiszolgálása (feltöltött képek)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/v1/auth', authController);
app.use(
  '/api/v1/categories',
  authMiddleware,
  endpointAccessMiddleware,
  categoryController
);
app.use(
  '/api/v1/users',
  authMiddleware,
  endpointAccessMiddleware,
  userController
);
app.use(
  '/api/v1/challenges',
  authMiddleware,
  endpointAccessMiddleware,
  challengesController
);
app.use(
  '/api/v1/shop',
  authMiddleware,
  endpointAccessMiddleware,
  shopController
);
app.use('/api/v1/tickets', authMiddleware, ticketController);
app.use('/api/v1/admin', authMiddleware, adminMiddleware, adminController);

setupSwagger(app);

app.listen(3300, () => {
  console.log('Elindult az alkalmazás');
});
