const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../../server');
const Book = require('../../models/Book');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}, 15000); // 15 seconds timeout for setup

afterEach(async () => {
  await Book.deleteMany();
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe('API: Book routes', () => {
  it('POST /api/books - should create a new book', async () => {
    const res = await request(app)
      .post('/api/books')
      .send({ title: 'API Book', author: 'Cutie' });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('API Book');
  }, 10000); // custom timeout

  it('GET /api/books - should return books', async () => {
    await Book.create({ title: 'Another Book', author: 'Cutie' });

    const res = await request(app).get('/api/books');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  }, 10000); // custom timeout
});
