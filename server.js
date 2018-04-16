// Require dependencies
const express = require('express');
const exphbs = require('express-handlebars');

// Instantiate server
const app = express();

// Mount middleware to parse request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Register handlebars engine with app
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Define port
const PORT = process.env.PORT || 8080;

// API Route
const apiRouter = require('./controllers/burgers_controllers.js');
app.use('/api/burgers', apiRouter);

// HTML (Handlebars) Route
app.get('/', (req, res, next) => {
  res.render('index', /* ... */);
});

// Start server
app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}`));
