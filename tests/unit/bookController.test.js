const Book = require('../../models/Book');
const { createBook } = require('../../controllers/bookController');

jest.mock('../../models/Book');

describe('Unit: createBook controller', () => {
  it('should create a book and return it', async () => {
    const req = { body: { title: 'Test Book', author: 'Cutie' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    Book.create.mockResolvedValue(req.body);

    await createBook(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(req.body);
  });
});
