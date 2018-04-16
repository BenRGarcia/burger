// Require dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// Instantiate server
const app = express();

// Mount middleware to parse request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define location of static assets
app.use(express.static(path.join(__dirname, 'public')))

// Register handlebars engine with app
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Define port
const PORT = process.env.PORT || 8080;

// Router
const router = require('./controllers/burgers_controllers.js');
app.use('/', router);

// Start server
app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}`));
