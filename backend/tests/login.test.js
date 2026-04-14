import app from '../index.js';
import request from 'supertest';

describe('Login test', () => {
  test('POST /bejelentkezes should return all test model data', async () => {
    const mockCredentials ={
        email: "test",
        password: "1515412156"
    }

    const response = (await request(app).post("/bejelentkezes")).send(mockCredentials).expect(200)

    expect(response.body.token).toBeDefined()
  });
});