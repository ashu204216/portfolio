// server.js
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

console.log('Starting server...');

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// For React Router (SPA) support
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
