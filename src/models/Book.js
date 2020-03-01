import { Sequelize, Model } from 'sequelize';
import sequelize from '../config/db';

class Book extends Model {
}

Book.init({
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: Sequelize.STRING,
}, {
  sequelize,
  modelName: 'book',
  tableName: 'books',
  timestamps: false
});

export default Book;
