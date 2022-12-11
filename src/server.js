const express = require('express');
const app = express();

// Serve static files from the 'build' directory
app.use(express.static('build'));

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

// Route to Homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/App.js');
});

// Route to Login Page
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.jsx');
});