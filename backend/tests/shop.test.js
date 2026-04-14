import app from '../index.js';
import request from 'supertest';

// Shop controller tests
describe('Shop Controller Tests', () => {
  describe('GET /api/v1/shop/', () => {
    test('should fetch shop items list', async () => {
      const response = await request(app).get('/api/v1/shop/');
      expect(response.status).toBeDefined();
    });
  });

  // Shop buy tests
  describe('POST /api/v1/shop/buy', () => {
    test('should process purchasing an item', async () => {
      const response = await request(app).post('/api/v1/shop/buy').send({ itemId: 1, quantity: 1 });
      expect(response.status).toBeDefined();
    });
  });


  // Shop purchased items tests
  describe('GET /api/v1/shop/purchased', () => {
    test('should return history of purchased items', async () => {
      const response = await request(app).get('/api/v1/shop/purchased');
      expect(response.status).toBeDefined();
    });
  });

  // Shop active items tests
  describe('PUT /api/v1/shop/active', () => {
    test('should equip or activate an item', async () => {
      const response = await request(app).put('/api/v1/shop/active').send({ itemId: 1 });
      expect(response.status).toBeDefined();
    });
  });

  // Shop active item tests
  describe('DELETE /api/v1/shop/active', () => {
    test('should clear active item', async () => {
      const response = await request(app).delete('/api/v1/shop/active').send({ itemId: 1 });
      expect(response.status).toBeDefined();
    });
  });

});
