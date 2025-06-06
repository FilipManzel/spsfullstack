const express = require('express');
const path = require('path');

// const { initializeDatabase } = require('./database/db'); // vytváření databáze

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// API cesty 
const apiRoutes = require('./api/api');
app.use('/api', apiRoutes); // /api/items

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

