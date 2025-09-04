const request = require('supertest');
const app = require('../src/server'); // Adjusted for test

describe('Payment API', () => {
  it('should process payment', async () => {
    const res = await request(app)
      .post('/api/payments')
      .send({ amount: 100, upiId: 'test@upi' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('transactionId');
  });
});