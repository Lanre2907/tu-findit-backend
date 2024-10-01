require('dotenv').config();
console.log('MONGODB_URI:', process.env.MONGODB_URI); 

const connectDB = require('./config/db');

connectDB().then(() => {
  console.log('Connecting to TU-FindIt database is successful');
  process.exit(0);
}).catch((err) => {
  console.error('Connecting to TU-FindIt database failed:', err);
  process.exit(1);
});
