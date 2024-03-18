import { app } from '../../app';
import request from 'supertest';

describe('/', () => {
  describe('GET /', () => {
    it('should return success', async () => {
      const foo = await request(app)
        .get('/')
        .expect(200);
    });
  });
});
