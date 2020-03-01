import app from './src/app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`\x1B[34m..:: Server is listening port ${ PORT } ::..`);
});
