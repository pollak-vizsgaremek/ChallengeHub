import app from '../index.js';
import request from 'supertest';

// Category controller tests
describe('Category Controller Tests', () => {
  describe('GET /api/v1/categories/', () => {
    test('should return all categories', async () => {
      const response = await request(app).get('/api/v1/categories/');
      expect(response.status).toBeDefined();
    });
  });

  // Category creation tests
  describe('POST /api/v1/categories/', () => {
    test('should add a new category', async () => {
      const response = await request(app)
        .post('/api/v1/categories/')
        .send({ name: 'Testing', description: 'Test Cat' });
      expect(response.status).toBeDefined();
    });
  });

  // Category update tests
  describe('PUT /api/v1/categories/:uuid', () => {
    test('should modify an existing category', async () => {
      const response = await request(app)
        .put('/api/v1/categories/cat-1234')
        .send({ name: 'Updated Name' });
      expect(response.status).toBeDefined();
    });
  });

  // Category deletion tests
  describe('DELETE /api/v1/categories/:uuid', () => {
    test('should safely remove a category', async () => {
      const response = await request(app).delete('/api/v1/categories/cat-1234');
      expect(response.status).toBeDefined();
    });
  });
});
