// Require dependency
const express = require('express');
const burger = require('../models/burger.js');

// Create router
const router = express.Router();

// Define methods for PATH '/'
router.route('/')
  .get((req, res, next) => {
      // Retrieve all burgers
      burger.getAllBurgers()
        // Render burgers to response
        .then(burgers => {
          res.render('index', burgers);
        })
        // Error handling
        .catch(err => {
          // Server side error handling
          console.error(err)
          // Client side error handling
          const error = new Error('Internal server error, database could not be accessed.');
          error.status = 500;
          next(error);
        });
    })
  .post((req, res, next) => {})
  .put((req, res, next) => {});

router.get('*', (req, res, next) => {
  res.redirect(301, '/');
});

// Client-Side Error handling
router.use((err, req, res, next) => {
  let status = err.status || 500;
  let msg = err.message || `Internal server error.`;
  res.status(status).send({ error: msg });
});

module.exports = router;
