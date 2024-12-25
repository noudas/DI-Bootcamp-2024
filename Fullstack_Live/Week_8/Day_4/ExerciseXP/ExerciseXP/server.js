// server.js

import express from 'express';
import cors from 'cors';

const app = express();

// Enable CORS for all origins
app.use(cors());

// Parse incoming JSON data
app.use(express.json());

// Route to handle the webhook POST request
app.post('/webhook', (req, res) => {
  console.log('Received data:', req.body);
  res.status(200).send({ status: 'Received successfully' });
});

// Start the server
app.listen(3002, () => {
  console.log('Server is running on http://localhost:3002');
});
