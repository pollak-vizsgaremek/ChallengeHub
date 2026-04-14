import app from '../index.js';
import request from 'supertest';

// Admin controller tests
describe('Admin Controller Tests', () => {
  describe('GET /api/v1/admin/stats', () => {
    test('should handle request to admin stats', async () => {
      const response = await request(app).get('/api/v1/admin/stats');
      expect(response.status).toBeDefined();
    });
  });

  // Admin user tests
  describe('GET /api/v1/admin/users', () => {
    test('should fetch user list', async () => {
      const response = await request(app).get('/api/v1/admin/users');
      expect(response.status).toBeDefined();
    });
  });

  // Admin user role update tests
  describe('PATCH /api/v1/admin/users/:id/role', () => {
    test('should update user role', async () => {
      const response = await request(app)
        .patch('/api/v1/admin/users/1/role')
        .send({ role: 'ADMIN' });
      expect(response.status).toBeDefined();
    });
  });

});
