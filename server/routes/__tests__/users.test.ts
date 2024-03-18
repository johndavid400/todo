import { app } from '../../app';
import request from 'supertest';
import { faker } from '@faker-js/faker';

describe('/users', () => {
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
});
