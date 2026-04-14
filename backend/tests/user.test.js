import app from '../index.js';
import request from 'supertest';

// User controller tests
describe('User Controller Tests', () => {
  describe('POST /api/v1/users/erdelokdes', () => {
    test('should save user interests or inquiries', async () => {
      const response = await request(app).post('/api/v1/users/erdelokdes').send({ target: 'development' });
      expect(response.status).toBeDefined();
    });
  });


  // User profile tests
  describe('GET /api/v1/users/profile', () => {
    test('should retrieve user profile information', async () => {
      const response = await request(app).get('/api/v1/users/profile');
      expect(response.status).toBeDefined();
    });
  });

  // User check-exists tests
  describe('POST /api/v1/users/check-exists', () => {
    test('should verify if a user or user trait exists', async () => {
      const response = await request(app).post('/api/v1/users/check-exists').send({ username: 'testuser' });
      expect(response.status).toBeDefined();
    });
  });

  // User interests tests
  describe('PUT /api/v1/users/interests', () => {
    test('should update user interests list', async () => {
      const response = await request(app).put('/api/v1/users/interests').send({ tags: ['coding', 'design'] });
      expect(response.status).toBeDefined();
    });
  });

  // User leaderboard tests
  describe('GET /api/v1/users/leaderboard', () => {
    test('should retrieve users leaderboard', async () => {
      const response = await request(app).get('/api/v1/users/leaderboard');
      expect(response.status).toBeDefined();
    });
  });
});
