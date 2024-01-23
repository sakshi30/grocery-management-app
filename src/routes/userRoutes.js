// src/routes/userRoutes.js

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/view-items', userController.viewItems);
router.post('/book-items', userController.bookItems);

module.exports = router;
