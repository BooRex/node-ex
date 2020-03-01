import express from 'express';
import * as Database from './config/db';
import * as Router from './routes';

const app = express();

Database.init();
Router.load(app);

export default app;

