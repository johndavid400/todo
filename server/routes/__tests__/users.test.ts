import { app } from '../../app';
import request from 'supertest';
import { faker } from '@faker-js/faker';

describe('/users', () => {
  describe('GET /users', () => {
    it('should return users', async () => {
      await request(app)
        .get('/users')
        .expect(200);
    });
  });
  describe('GET /users/1', () => {
    it('should return a user', async () => {
      await request(app)
        .get('/users')
        .send('1')
        .expect(200);
    });
  });
  describe('POST /users', () => {
    it('should return success', async () => {
      const user = {
        email: `${faker.string.uuid()}@test.com`,
        password: "password",
        password_confirmation: "password"
      };

      await request(app)
        .post('/users')
        .send(user)
        .expect(200);
    });
  });
  /*
  describe('PUT /users/1', () => {
    it('should return success', async () => {
      await request(app)
        .pute('/users/1')
        .send({ password: 'testpassword' })
        .expect(200);
    });
  });
  describe('DELETE /users/1', () => {
    it('should return success', async () => {
      await request(app)
        .delete('/users/1')
        .expect(200);
    });
  });
  */
});
