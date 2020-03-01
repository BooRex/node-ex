import Book from '../models/Book';

export const getMany = params => Book.findAll({
  where: params
});
