import app from '../index.js';
import request from 'supertest';

// Ticket test
describe('Ticket Controller Tests', () => {
  describe('POST /api/v1/tickets/', () => {
    test('should handle creation of a new ticket', async () => {
      const ticketData = {
        subject: "Segítség kell!",
        message: "Nem tudok belépni a fiókomba!",
        category: "Támogatás"
      };

      const response = await request(app).post('/api/v1/tickets/').send(ticketData);
      expect(response.status).toBeDefined();
    });
  });
});
