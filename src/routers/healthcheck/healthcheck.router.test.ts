import { app } from '@/app';
import request from 'supertest';

describe('GET /healthcheck', () => {
  it('should return status 200', () =>
    request(app)
      .get('/healthcheck')
      .expect(200)
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.body).toEqual({ status: 'ok' });
      }));
});
