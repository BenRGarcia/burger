// Require dependency
const express = require('express');
const burger = require('../models/burger.js');

// Create router
const router = express.Router();

// Define methods for PATH '/api/burgers'
router.route('/')
  .get((req, res, next) => { res.render('index');})
  .post((req, res, next) => {})
  .put((req, res, next) => {});

// Client-Side Error handling
router.use((err, req, res, next) => {
  res.status(400).send({ error: `Internal Server Error` });
});

module.exports = router;
