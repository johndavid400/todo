import { app } from '../../app';
import request from 'supertest';

describe('/categories', () => {
  describe('GET /categories', () => {
    it('should return success', async () => {
      const foo = await request(app)
        .get('/categories')
        .expect(200);
    });
  });
});
