import * as BookService from '../services/BookService';

export const fetchMany = async (req, res, next) => {
  res.json(await BookService.fetchMany());
};
