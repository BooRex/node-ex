import express from 'express';
import * as BookController from '../controllers/BookController'

const router = express.Router();

router.get('/', BookController.fetchMany);

export default router;
