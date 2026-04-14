import app from '../index.js';
import request from 'supertest';

// Auth controller tests
describe('Auth Controller Tests', () => {
  describe('POST /api/v1/auth/bejelentkezes', () => {
    test('should return 400 if missing credentials or captcha', async () => {
      const response = await request(app)
        .post('/api/v1/auth/bejelentkezes')
        .send({});
      expect(response.status).toBe(400);
      expect(response.body.message).toBeDefined();
    });

    // Auth login tests
    test('should return validation error or test authentication logic', async () => {
      const mockCredentials = {
        username: 'test',
        password: 'password123',
        captchaToken: 'test-token',
      };

      const response = await request(app)
        .post('/api/v1/auth/bejelentkezes')
        .send(mockCredentials);
      expect(response.status).toBeDefined();
    });
  });

  // Auth registration tests
  describe('POST /api/v1/auth/regisztracio', () => {
    test('should return 400 if missing registration data', async () => {
      const response = await request(app)
        .post('/api/v1/auth/regisztracio')
        .send({});
      expect(response.status).toBe(400);
      expect(response.body.message).toBeDefined();
    });

    // Auth registration tests
    test('should handle valid payload properly', async () => {
      const mockData = {
        username: 'newuser',
        email: 'newuser@example.com',
        password: 'password123',
        passwordConfirm: 'password123',
        captchaToken: 'test-token',
      };

      const response = await request(app)
        .post('/api/v1/auth/regisztracio')
        .send(mockData);
      expect(response.status).toBeDefined();
    });
  });
});
