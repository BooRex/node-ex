import BookRouter from './BookRouter';
import createError from 'http-errors';

export const load = app => {
  app.use('/books', BookRouter);

  // Error route
  app.use((req, res, next) => {
    next(createError(404));
  });

};
