const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Sample categories data
const categories = [
  { id: 1, name: 'Work' },
  { id: 2, name: 'Personal' },
  { id: 3, name: 'Shopping' },
  { id: 4, name: 'Fitness' },
];

// Endpoint to get the list of categories
app.get('/categories', (req, res) => {
  res.json(categories);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});