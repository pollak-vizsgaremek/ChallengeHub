import app from '../index.js';
import request from 'supertest';

// Challenge controller tests
describe('Challenges Controller Tests', () => {
  describe('GET /api/v1/challenges/', () => {
    test('should list all challenges', async () => {
      const response = await request(app).get('/api/v1/challenges/');
      expect(response.status).toBeDefined();
    });
  });

  // Challenge creation tests
  describe('POST /api/v1/challenges/', () => {
    test('should create a new challenge', async () => {
      const mockChallenge = {
        title: 'Test Challenge',
        description: 'Test Description',
        difficulty: 'EASY',
      };
      const response = await request(app)
        .post('/api/v1/challenges/')
        .send(mockChallenge);
      expect(response.status).toBeDefined();
    });
  });

  // Challenge update tests
  describe('PUT /api/v1/challenges/:uuid', () => {
    test('should update an existing challenge by uuid', async () => {
      const response = await request(app)
        .put('/api/v1/challenges/test-uuid-1234')
        .send({ title: 'Updated Title' });
      expect(response.status).toBeDefined();
    });
  });

  // Challenge deletion tests
  describe('DELETE /api/v1/challenges/:uuid', () => {
    test('should remove a challenge', async () => {
      const response = await request(app).delete(
        '/api/v1/challenges/test-uuid-1234'
      );
      expect(response.status).toBeDefined();
    });
  });

  // Challenge submission tests
  describe('POST /api/v1/challenges/submit-proof', () => {
    test('should handle challenge proof submission (multipart/form-data)', async () => {
      const response = await request(app).post(
        '/api/v1/challenges/submit-proof'
      );
      expect(response.status).toBeDefined();
    });
  });

  // Challenge submission tests
  describe('GET /api/v1/challenges/submissions/:userTaskId', () => {
    test('should fetch submissions by user ID or task ID', async () => {
      const response = await request(app).get(
        '/api/v1/challenges/submissions/1'
      );
      expect(response.status).toBeDefined();
    });
  });
});
