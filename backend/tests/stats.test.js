import app from '../index.js';
import request from 'supertest';

describe('Stats test', () => {
  test('GET /stats should return all test model data', async () => {
    const response = await request(app).get('/stats').expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });
});
