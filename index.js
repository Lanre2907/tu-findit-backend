const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config(); // Load .env variables

const app = express();

// Connect to MongoDB
connectDB();

// Set up other middleware and routes here...

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

