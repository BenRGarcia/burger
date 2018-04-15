// Require dependency
const express = require('express');
const burger = require('../models/burger.js');

// Create router
const apiRouter = express.Router();

// Define methods for PATH '/api/burgers'
apiRouter.route('/')
  .get((req, res, next) => {})
  .post((req, res, next) => {})
  .put((req, res, next) => {});

// Client-Side Error handling
apiRouter.use((err, req, res, next) => {
  res.status(400).send({ error: `Internal Server Error` });
});

module.exports = apiRouter;
