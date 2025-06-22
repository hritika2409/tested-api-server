const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Book = require('../../models/Book');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

it('should save and retrieve a book from DB', async () => {
  const book = new Book({ title: 'Test', author: 'Cutie' });
  await book.save();

  const found = await Book.findOne({ title: 'Test' });
  expect(found.author).toBe('Cutie');
});
